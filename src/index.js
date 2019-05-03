const {
  isArray,
  isObject,
  isSimpleType,
  fillIndent,
  upperWordInitial,
  encodeText
} = require('./utils')

const axios = require('axios')
const dayjs = require('dayjs')

const fs = require('fs')
const path = require('path')

const LF = '\n'

const INTERFACE_PREFIX = 'I'
const INTERFACE_SUFFIX_PARAMS = 'Params'
const INTERFACE_SUFFIX_PAYLOAD = 'Payload'
const INTERFACE_SUFFIX_RESPONSE = 'Response'
const INTERFACE_EXTEND_BASE = 'IBase'
const INTERFACE_EXTEND_PARAMS = 'IParams'
const CREATE_REQUEST_FN = 'createServer'

const OUTPUT_DIR = 'output'
const OUTPUT_INTERFACE_FILENAME = 'interface'
const INTERFACE_EXT = '.d.ts'
const EXT = '.ts'
const INTERFACE_FILE_INJECT_TEXT = `
interface IBase<T> {
  slience?: boolean;
  query?: T;
}

interface IParams<T, R> extends IBase<T> {
  params: R;
}
`
const REQUEST_FILE_INJECT_TEXT = `
function createServer(method, mockUrl, prodUrl, isMock): Function {
  return () => {};
}

interface IBase<T> {
  slience?: boolean;
  query?: T;
}

interface IParams<T, R> extends IBase<T> {
  params: R;
}
`
const MOCK_DOC_URL = 'https://f2e.dxy.net/mock/#/doc/'
const MOCK_API_URL = 'https://f2e.dxy.net/mock-api/client/'

// 该正则捕获三个分组: 项目名、模块名、剩余路径
// eg: https://dxcare.cn/clinic/medicine/chineseMedicine/:id => clinic(项目名), medicine(模块名), chineseMedicine/:id(剩余路径)
const API_URL_REG = /https?:\/\/[a-zA-Z]+\.(?:cn|com)\/([a-zA-Z]+)\/([a-zA-Z]+)\/(.*)$/

// 该正则提取动态参数
// eg: https://dxcare.cn/clinic/medicine/chineseMedicine/:id/:patientId => [/:id, /:patientId]
const DYNAMIC_REG = /\/:([a-zA-Z]+)/g

axios({
  url: 'https://f2e.dxy.net/mock-api/server/api/5b1e5027ad31f684ea683b41?page=1&limit=10000&order=%7B%22name%22:1%7D',
  method: 'get',
  headers: {
    Cookie:
      'mockerUser=1ts7y245IjOM07AcMnM8dfeTKLK8-KxQdAenEnQY1pI2l05uozznJVfrVCqrLAHbLFUVFoVzbwHnbqVtOYqyO_4jw4rRuprfQhlt7f0xOQdDXSGNmKHP9cqDrljzajb2MzNl6my3EaIq2ChTxqanU8BgNWO3UxbPdhnufNvmPh-zf_Fmx48oqaxJStDhB6NkTyLlmSO7QWIiAxBAU7If4nEw0tQohVBJlKNUqLiCDS-BVI6zoxRWecwNqVhJmCnbf-iJh4GKVPBz6x51Z4U0Ow=='
  }
}).then(({ data: { resources } }) => {
  processResources(resources)
})

function getMatchedResult (url) {
  let [mockUrl, projectName, moduleName, restPath] = url.match(API_URL_REG)
  let dynamicPathParams = (restPath.match(DYNAMIC_REG) || []).map(param => param.slice(2)) // /:id 转为 id
  return {
    mockUrl,
    projectName,
    moduleName,
    restPath,
    dynamicPathParams
  }
}

function createAPIName (api) {
  let { prodUrl, options: { method } } = api
  let { restPath } = getMatchedResult(prodUrl)
  let pathArray = restPath.replace(DYNAMIC_REG, '').split('/')
  // 取最后一个路径作为api名字
  let name = pathArray[pathArray.length - 1]

  let isList = false
  let params
  let hashStr = encodeText(prodUrl, 4) // 根据生产环境的接口地址生成hash，防止命名重复

  if (method === 'get' && (params = getResponseParams(api))) {
    // 前后端约定 get 请求 列表查询的接口一定含有 data.items 字段
    let dataKeyParam = params.find(param => param.key === 'data')
    if (dataKeyParam) {
      let itemsKeyParam = dataKeyParam.params.find(param => param.key === 'items')
      isList = !!itemsKeyParam
    }
  }

  let prefix = isList ? 'query' : method
  let suffix = isList ? 'List' : ''
  return prefix + upperWordInitial(name) + suffix + hashStr
}

function createInterfaceName (api, suffix) {
  return INTERFACE_PREFIX + upperWordInitial(createAPIName(api)) + suffix
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
    let str = getFiledInterfaceType(items, level)
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
  let paramComment = param.comment ? ` // ${param.comment}` : ''
  return tabStr + `${key}${optional}: ${getFiledInterfaceType(param, level)};${paramComment}${LF}`
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
  return `/*
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

function createParamsInterface (api, interfaceName) {
  let content = getMatchedResult(api.prodUrl)
    .dynamicPathParams.reduce((content, param) => (content += `${fillIndent()}${param}: number;${LF}`), '')
  return createInterface(api, content, interfaceName)
}

function createPayloadInterface (api, interfaceName) {
  let { body, query } = api.options.params

  // 确定请求 paylod 参数
  let params = body.length > 0 ? body : query.length > 0 ? query : ''
  return params ? createInterface(api, createInterfaceFileds(params), interfaceName) : ''
}

function createRequestInterface (api, { paramsInterfaceName, payloadInterfaceName }) {
  return DYNAMIC_REG.test(api.prodUrl)
    ? createParamsInterface(api, paramsInterfaceName) + createPayloadInterface(api, payloadInterfaceName)
    : createPayloadInterface(api, payloadInterfaceName)
}

function createResponseInterface (api, { responseInterfaceName }) {
  let params = getResponseParams(api)
  return params ? createInterface(api, createInterfaceFileds(params), responseInterfaceName) : ''
}

function createInterface (api, content, interfaceName, extendsInterface) {
  let extendStr = extendsInterface ? `extends ${extendsInterface}` : ''
  let fristRow = `interface ${interfaceName} ${extendStr} {${LF}`
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
 *
 * @param {*} api
 * @param {*} { paramsInterfaceName, payloadInterfaceName, responseInterfaceName }
 * @returns
 */
function createRequest (api, { paramsInterfaceName, payloadInterfaceName, responseInterfaceName }) {
  let { _id, prodUrl, options: { method } } = api
  let { restPath } = getMatchedResult(prodUrl)
  let indent = fillIndent()
  let APIName = createAPIName(api)
  let hasDynamic = DYNAMIC_REG.test(prodUrl)
  let requireStr = hasDynamic ? '' : '?'
  let generic = hasDynamic ? `${INTERFACE_EXTEND_PARAMS}<${payloadInterfaceName}, ${paramsInterfaceName}>` : `${INTERFACE_EXTEND_BASE}<${payloadInterfaceName}>`
  let returnExpressionStr = `${CREATE_REQUEST_FN}('${method}', '${_id}', '${restPath}', false)(arg)`
  return `${indent}${APIName}: (arg${requireStr}: ${generic}): ${responseInterfaceName} => ${returnExpressionStr},${LF}`
}

function createInterfaceNames (api) {
  let payloadInterfaceName = createInterfaceName(api, INTERFACE_SUFFIX_PAYLOAD)
  let responseInterfaceName = createInterfaceName(api, INTERFACE_SUFFIX_RESPONSE)
  let namesObj = {
    payloadInterfaceName,
    responseInterfaceName
  }
  if (DYNAMIC_REG.test(api.prodUrl)) {
    let paramsInterfaceName = createInterfaceName(api, INTERFACE_SUFFIX_PARAMS)
    namesObj = {
      paramsInterfaceName, // 保持prams在对象首位，以便于遍历时按理想顺序遍历
      ...namesObj
    }
  }
  return namesObj
}

function writeInterfaceIntoFile (interfaceList) {
  let file = path.resolve(__dirname, OUTPUT_DIR, OUTPUT_INTERFACE_FILENAME + INTERFACE_EXT)
  let interfaceText = INTERFACE_FILE_INJECT_TEXT + LF
  let exportText = 'export {' + LF
  interfaceList.forEach(({ apiInterface, interfaceNameObj }) => {
    let indent = fillIndent()
    interfaceText += apiInterface
    exportText += indent + Object.values(interfaceNameObj).join(',' + LF + indent) + `,${LF}`
  })
  exportText += LF + '}' + LF
  fs.writeFile(file, interfaceText + exportText, err => {
    if (err) throw err
    console.log('interface 文件写入成功')
  })
}

// function writeCommentsIntoFile () {}

function writeRequestIntoFile (requestList) {
  let importText = 'import {' + LF
  let exportText = 'export default {' + LF
  requestList.forEach(request => {
    let { apiRequest, interfaceNameObj } = request
    let indent = fillIndent()
    importText += indent + Object.values(interfaceNameObj).join(',' + LF + indent) + `,${LF}`
    exportText += apiRequest
  })
  importText += `${LF}} from './${OUTPUT_INTERFACE_FILENAME}${INTERFACE_EXT}'${LF}${LF}`
  exportText += '}' + LF

  let file = path.resolve(__dirname, OUTPUT_DIR, OUTPUT_INTERFACE_FILENAME + EXT)
  fs.writeFile(file, importText + REQUEST_FILE_INJECT_TEXT + exportText, err => {
    if (err) throw err
    console.log('interface 文件写入成功')
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

function processResources (resources) {
  let interfaceList = []
  let requestList = []
  resources.forEach(resource => {
    let { apiInterface, apiRequest, interfaceNameObj } = processResource(resource)
    interfaceList.push({ apiInterface, interfaceNameObj })
    requestList.push({ apiRequest, interfaceNameObj })
  })
  writeInterfaceIntoFile(interfaceList)
  // writeCommentsIntoFile(comment)
  writeRequestIntoFile(requestList)
}
