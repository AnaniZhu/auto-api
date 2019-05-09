const dayjs = require('dayjs')

const path = require('path')
const process = require('process')

const {
  isArray,
  isObject,
  isSimpleType,
  fillIndent,
  upperWordInitial,
  encodeText,
  writeFile,
  parseFileName
} = require('./utils')

const {
  LF,
  MOCK_DOC_URL,
  MOCK_API_URL
} = require('./constant')

const {
  interfacePrefix,
  dynamicPathInterfaceSuffix,
  queryInterfaceSuffix,
  bodyInterfaceSuffix,
  responseInterfaceSuffix,
  baseExtendInterface,
  dynamicPathExtendInterface,
  bodyExtendInterface,
  bothExtendInterface,
  createRequestFn,
  interfaceOutputDir,
  reqeustOutputDir,
  outputInterfaceFileName,
  outputRequestFileName,
  injectRequestFileText
} = require('./config')

const EXT = '.ts'

// 该正则捕获三个分组: 项目名、模块名、剩余路径
// eg: https://dxcare.cn/clinic/medicine/chineseMedicine/:id => clinic(项目名), medicine(模块名), /chineseMedicine/:id(剩余路径)
const FULL_API_URL_REG = /https?:\/\/[a-zA-Z]+\.(?:cn|com)\/([a-zA-Z]+)\/([a-zA-Z]+)(\/.*)$/

// 有些接口未带上域名, eg: /clinic/patient/patient/member/rule/:id
// 此时无法判断 项目名和模块名， 因为会出现无项目名的情况
const API_URL_REG = /\/.*$/

// 该正则提取动态参数
// eg: https://dxcare.cn/clinic/medicine/chineseMedicine/:id/:patientId => [/:id, /:patientId]
const DYNAMIC_REG = /\/:([a-zA-Z]+)/g

const cwd = process.cwd()
const finallyInterfaceFileDir = path.resolve(cwd, interfaceOutputDir)
const finallyRequestFileDir = path.resolve(cwd, reqeustOutputDir)

function getDynamicPathParams (url) {
  // eg: /:id 转为 id
  return (url.match(DYNAMIC_REG) || []).map(param => param.slice(2))
}

function getMatchedResult (api) {
  let { prodUrl, devUrl, _id } = api
  // 线上地址未填的话，取测试地址
  let url = FULL_API_URL_REG.test(prodUrl) || API_URL_REG.test(prodUrl) ? prodUrl : devUrl

  // 域名 + 模块名 + path
  if (FULL_API_URL_REG.test(url)) {
    let [matchURL, projectName, moduleName, restPath] = url.match(FULL_API_URL_REG)
    let dynamicPathParams = getDynamicPathParams(restPath)

    return {
      matchURL,
      path: '/' + projectName + '/' + moduleName + restPath,
      projectName,
      moduleName,
      restPath,
      dynamicPathParams
    }
  } else if (API_URL_REG.test(url)) {
    // 模块名? + path
    // 无法确定模块名，采用配置的模块名，如果不存在，则以该hash命名
    let [matchURL] = url.match(API_URL_REG)
    let dynamicPathParams = getDynamicPathParams(matchURL)
    return {
      moduleName: _id,
      path: matchURL,
      dynamicPathParams
    }
  } else {
    throw new Error(`接口地址非法: ${url}, 请检查文档是否准确。${LF} 文档地址：${MOCK_DOC_URL}${_id}`)
  }
}

function createAPIName (api) {
  let { prodUrl, options: { method } } = api
  let { path } = getMatchedResult(api)
  let pathArray = path.replace(DYNAMIC_REG, '').split('/')
  // 取最后一个路径作为api名字
  let name = pathArray[pathArray.length - 1]

  let isList = false
  let params
  let hashStr = encodeText(prodUrl, 4) // 根据生产环境的接口地址生成hash，防止命名重复

  if (method === 'get' && (params = getResponseParams(api))) {
    // 前后端约定 get 请求 列表查询的接口一定含有 data.items 字段
    let dataKeyParam = params.find(param => param.key === 'data')
    if (dataKeyParam && dataKeyParam.params) {
      let itemsKeyParam = dataKeyParam.params.find(param => param.key === 'items')
      isList = !!itemsKeyParam
    }
  }

  let prefix = isList ? 'query' : method
  let suffix = isList ? 'List' : ''
  return prefix + upperWordInitial(name) + suffix + hashStr
}

function createInterfaceName (api, suffix) {
  return interfacePrefix + upperWordInitial(createAPIName(api)) + suffix
}

function getResponseParams (api) {
  // api mocker 单个接口可能有多个response结果，暂且以第一个response为主
  let response = api.options.response
  // 接口文档不规范异常判断
  let isNormalParams =
    response &&
    response.length > 0 &&
    response[0].params &&
    response[0].params.length > 0
  return isNormalParams ? response[0].params : ''
}

/**
 * 解析 apimocker 的参数，生成对应的interface
 * 递归处理数据
 */
function getFiledInterfaceType ({ type, items, params }, level = 1) {
  // console.log(type)
  if (isSimpleType(type)) {
    return type
  } else if (isArray(type)) {
    let str = getFiledInterfaceType(items, level) // 数组类型的 params children 可能不在 params 上，在 items 字段上
    str += '[]'
    return str
  } else if (isObject(type)) {
    let str = '{' + LF
    str += createInterfaceFileds(params, level + 1)
    str += fillIndent(level) + '}'
    return str
  } else {
    // api mock 可能会出现其他类型，暂时不做处理
    return type
  }
}
function createInterfaceFiled (param, level) {
  let { key, required } = param
  let optional = required ? '' : '?'
  let tabStr = fillIndent(level)

  let paramComment = param.comment ? `${tabStr}/** ${param.comment} */${LF}` : ''
  let singleParamText = `${tabStr}${key}${optional}: ${getFiledInterfaceType(param, level)};${LF}`
  return paramComment + singleParamText
}

function createInterfaceFileds (params, level = 1) {
  return params.reduce((str, param) => (str += createInterfaceFiled(param, level)), '')
}

function createInterfaceComment (api) {
  let {
    _id,
    prodUrl,
    desc,
    name,
    modifiedTime,
    group,
    manager: { name: author }
  } = api
  return `/**
 * 接口名称: ${name}
 * 作者: ${author}
 * 文档地址: ${MOCK_DOC_URL + group + '/' + _id}
 * mock地址: ${MOCK_API_URL + _id}
 * 接口地址: ${prodUrl}
 * 最近修改时间: ${dayjs(new Date(+modifiedTime)).format('YYYY-MM-DD HH:mm:ss')}
 * 描述: ${desc || '无'}
 */
`
}

function createRequestComment (api) {
  let {
    _id,
    name,
    group
  } = api
  let tabStr = fillIndent()
  return `${tabStr}/**
${tabStr} * 接口名称: ${name}
${tabStr} * 文档地址: ${MOCK_DOC_URL + group + '/' + _id}
${tabStr} */
`
}

function createDynamicPathInterface (api, interfaceName) {
  let content = getMatchedResult(api)
    .dynamicPathParams.reduce((content, param) => (content += `${fillIndent()}${param}: number;${LF}`), '')
  return createInterface(api, content, interfaceName)
}

function getValidParams (params) {
  // 有些接口文档 的 payload key 为 null，此为无效
  // console.log(params.length && params.every(param => {
  //   console.log(param.key)
  //   return param.key
  // }))
  return params && params.length && params.every(param => param.key) ? params : []
}
function createDataInterface (api, params, interfaceName) {
  let validParams = getValidParams(params)
  return validParams.length ? createInterface(api, createInterfaceFileds(validParams), interfaceName) : ''
}

function createRequestInterface (api, { dynamicPathInterfaceName, queryInterfaceName, bodyInterfaceName }) {
  let { params, method } = api.options
  let { body, query } = params

  let interfaceText = ''

  if (DYNAMIC_REG.test(api.prodUrl)) {
    interfaceText += createDynamicPathInterface(api, dynamicPathInterfaceName)
  }

  if (query) {
    interfaceText += createDataInterface(api, query, queryInterfaceName)
  }

  if (method !== 'get' && body) {
    interfaceText += createDataInterface(api, body, bodyInterfaceName)
  }

  return interfaceText
}

function createResponseInterface (api, { responseInterfaceName }) {
  let params = getResponseParams(api)
  return params ? createInterface(api, createInterfaceFileds(params), responseInterfaceName) : ''
}

function createInterface (api, content, interfaceName, extendsInterface) {
  let extendStr = extendsInterface ? ` extends ${extendsInterface}` : ''
  let fristRow = `export interface ${interfaceName}${extendStr} {${LF}`
  let lastRow = '}' + LF
  return fristRow + content + lastRow
}

function createTSInterface (api, interfaceNameObj) {
  let interfaceComment = createInterfaceComment(api)
  let requestInterface = createRequestInterface(api, interfaceNameObj)
  let responseInterface = createResponseInterface(api, interfaceNameObj)

  return interfaceComment + requestInterface + responseInterface
}

/**
 * 根据规则生成项目内可直接调用的api，且此api根据mock要求生成字段限制
 * eg: getPatient: (arg?: IBase<IGetPatientPayload>): IGetPatientResponse => createServer('get', 'adfadsfadsfasdkfa', '/path/xxx', false)(arg),
 * eg: putPatient: (arg: IParams<IGetPatientPayload, IGetPatientParams>): IGetPatientResponse => createServer('put', 'adfad', '/path/xxx', false)(arg),
 * @param {*} api
 * @param {*} { dynamicPathInterfaceName, queryInterfaceName, bodyInterfaceName, responseInterfaceName }
 * @returns String
 * 接口可能不存在 query & payload， 给与默认值 void
 */
function createRequest (api, { dynamicPathInterfaceName, queryInterfaceName = 'object', bodyInterfaceName, responseInterfaceName }) {
  let { _id, prodUrl, options: { method, params: { body } } } = api
  let { path } = getMatchedResult(api)
  let indent = fillIndent()
  let APIName = createAPIName(api)
  let hasDynamic = DYNAMIC_REG.test(prodUrl)
  let requireStr = '?'

  let baseInterface = baseExtendInterface
  let genericParams = queryInterfaceName

  if (hasDynamic) {
    requireStr = ''
    baseInterface = dynamicPathExtendInterface
    genericParams += ', ' + dynamicPathInterfaceName
  }

  if (method !== 'get' && getValidParams(body).length) {
    requireStr = ''
    baseInterface = bodyExtendInterface
    genericParams += ', ' + bodyInterfaceName
  }

  // 同时满足动态路径 和 http body 的条件下
  if (hasDynamic && method !== 'get' && getValidParams(body).length) {
    baseInterface = bothExtendInterface
  }

  let generic = `${baseInterface}<${genericParams}>`
  let returnExpressionStr = `${createRequestFn}('${method}', '${_id}', '${path}', false)(arg)`
  let comment = createRequestComment(api)
  let singleRequestText = `${indent}${APIName}: (arg${requireStr}: ${generic}): ${responseInterfaceName} => ${returnExpressionStr},${LF}`
  return comment + singleRequestText
}

function createInterfaceNames (api) {
  let responseInterfaceName = createInterfaceName(api, responseInterfaceSuffix)

  let namesObj = {} // 按顺序给对象添加属性，方便后续遍历
  let { body, query } = api.options.params

  if (DYNAMIC_REG.test(api.prodUrl)) {
    namesObj.dynamicPathInterfaceName = createInterfaceName(api, dynamicPathInterfaceSuffix)
  }
  // 存在参数时才生成对应的name, 某些接口无有效 query & paylaod
  if (getValidParams(query).length) {
    let queryInterfaceName = createInterfaceName(api, queryInterfaceSuffix)
    namesObj.queryInterfaceName = queryInterfaceName
  }
  if (getValidParams(body).length) {
    let bodyInterfaceName = createInterfaceName(api, bodyInterfaceSuffix)
    namesObj.bodyInterfaceName = bodyInterfaceName
  }

  namesObj.responseInterfaceName = responseInterfaceName
  return namesObj
}

function writeInterfaceIntoFile (interfaceList, fileName) {
  let interfaceText = ''
  let exportText = '' // 'export {' + LF
  interfaceList.forEach(({ apiInterface, interfaceNameObj }) => {
    // let indent = fillIndent()
    interfaceText += apiInterface
    // exportText += indent + Object.values(interfaceNameObj).join(',' + LF + indent) + `,${LF}`
  })
  // exportText += LF + '}' + LF
  let file = path.resolve(finallyInterfaceFileDir, fileName + EXT)
  writeFile(file, interfaceText + exportText, err => {
    if (err) throw err
    console.timeEnd('interface file')
    console.log('interface 文件写入成功')
  })
}

// function writeCommentsIntoFile () {}

function writeRequestIntoFile (requestList, requestFileName, interfaceFileName) {
  let relativeDirFromInterfaceFile = path.relative(finallyRequestFileDir, finallyInterfaceFileDir)
  let interfaceFileDir = path.join(relativeDirFromInterfaceFile, interfaceFileName)

  let importText = 'import {' + LF
  let exportText = 'export default {' + LF
  requestList.forEach(request => {
    let { apiRequest, interfaceNameObj } = request
    let indent = fillIndent()
    importText += indent + Object.values(interfaceNameObj).join(',' + LF + indent) + `,${LF}`
    exportText += apiRequest
  })
  importText += `${LF}} from '${interfaceFileDir}'${LF}${LF}`
  exportText += '}' + LF

  let file = path.resolve(finallyRequestFileDir, requestFileName + EXT)
  writeFile(file, importText + injectRequestFileText + exportText, err => {
    if (err) throw err
    console.timeEnd('request file')
    console.log('reqeust 文件写入成功')
  })
}

function processResource (api) {
  let interfaceNameObj = createInterfaceNames(api)
  let apiInterface = createTSInterface(api, interfaceNameObj)
  let apiRequest = createRequest(api, interfaceNameObj)

  return {
    interfaceNameObj,
    apiInterface,
    apiRequest
  }
}

function processResources (resources, moduleConfig) {
  if (resources.length > 0) {
    // 根据用户配置过滤出最终需要的 request api
    let { name, includes = [], excludes = [] } = moduleConfig
    let needResources = resources.filter(resource => {
      let isNeed = !excludes.find(excludeModuleHash => excludeModuleHash === resource._id)
      return includes.length ? includes.find(includeModuleHash => includeModuleHash === resource._id) && isNeed : isNeed
    })

    let interfaceList = []
    let requestList = []
    needResources.forEach(resource => {
      try {
        let { apiInterface, apiRequest, interfaceNameObj } = processResource(resource)
        interfaceList.push({ apiInterface, interfaceNameObj })
        requestList.push({ apiRequest, interfaceNameObj })
      } catch (err) {
        let { _id, group, name } = resource
        console.log(`${name}: 处理该接口时遇到了未知错误，请检查接口文档: ${MOCK_DOC_URL}${group}/${_id}`)
      }
    })

    let moduleName = name || getMatchedResult(resources[0]).moduleName

    const finallyInterfaceOutputFileName = outputInterfaceFileName ? parseFileName(outputInterfaceFileName, moduleName) : moduleName
    const finallyRequestOutputFileName = outputRequestFileName ? parseFileName(outputRequestFileName, moduleName) : moduleName

    console.time('interface file')
    writeInterfaceIntoFile(interfaceList, finallyInterfaceOutputFileName)
    // writeCommentsIntoFile(comment)
    console.time('request file')
    writeRequestIntoFile(requestList, finallyRequestOutputFileName, finallyInterfaceOutputFileName)
  }
}

module.exports = {
  processResources
}
