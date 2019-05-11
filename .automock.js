const injectRequestFileText = `
function createServer(method, mockUrl, prodUrl, isMock): Function {
  return () => {};
}
interface IBase<T> {
  slience?: boolean
  params?: T // get/post/put query
}

// 动态参数
interface IPayload<T, K> extends IBase<T> {
  payload: K
}

// post/put/patch 放在 hDttp body 里的数据
interface IData<T, R> extends IBase<T> {
  data: R
}

// payload 和 data 都有

interface IBoth<T, K, R> extends IBase<T> {
  payload: K
  data: R
}

`



module.exports = {
  // 缩进大小
  tabSize: 2,
  // interface 是否全局作用域， 非全局会导出，request 文件自动导入
  isGlobal: false,
  // interface 名前缀
  interfacePrefix: 'I',
  // 路由 动态id 的 interface 名后缀
  dynamicPathInterfaceSuffix: 'Path',
  // get 请求所带参数 的 interface 名后缀
  queryInterfaceSuffix: 'Query',
  // post/delete/put/patch 所带数据（body）
  bodyInterfaceSuffix: 'Body',
  // response 的 interface 名后缀
  responseInterfaceSuffix: 'Response',
  // 输出 interface 的路径
  interfaceOutputDir: './src/interface',
  // 输出 request 的路径
  reqeustOutputDir: './src/request',
  // 输出 interface 的文件名
  outputInterfaceFileName: '[name]',
  // 输出 request 的文件名
  outputRequestFileName: '[name]',
  // 需要注入在 request 文件的内容
  injectRequestFileText,
  // 一个自定义函数，可自定义生成每一个 request 请求（与订阅 api 的数量一致）。
  // 该函数接受一个参数，此参数为一个处理过后的配置对象
  // 该函数接受一个返回值，返回的文本即最终生成的每一个 request 的字符串
  customAPIGenerator: APIGenerator,
  // 需要订阅的模块
  subscribeMockModules :  [
    {
      hash: '5b20d5f0ad31f684ea683cee',
      includes: ['5cd15bbb69d1f513875ae5b8', '5cd174e7efcdb713791d374f'],
      name: 'org',
    },
    {
      hash: '5b908eafb39002221a5614eb',
      includes: [
        '5b9f635e0181fb3363cc840b',
        '5ba06140ad2eb33364c6c52d',
        '5b9fb262cd3c23337182766b',
        '5b9f7f400181fb3363cc8677',
        '5b9fb2bf0181fb3363cc8889',
      ],
      name: 'reserve',
    },
    {
      hash: '5b1e50171b778d84dd6a0d87',
      includes: ['5b20eb5a1b778d84dd6a0f86', '5b20eb5a1b778d84dd6a0f86', '5b1e52c9ad31f684ea683b4f'],
    },
    {
      hash: '5ccfd077efcdb713791d0a99',
      includes: [
        '5cd2a3d169d1f513875ae99c',
        '5cd25681efcdb713791d3902',
        '5cd1251eb6fad1137a8a0b02',
        '5cd12a90efcdb713791d34a4',
        '5cd12c54efcdb713791d34bf',
        '5cd122d269d1f513875add78',
        '5cd12eb069d1f513875ae3b1',
        '5cd12eb069d1f513875ae3b1',
        '5cd27a2869d1f513875ae851',
        '5cd2839e69d1f513875ae879',
        '5cd293c0b6fad1137a8a145e',
      ],
      name: 'h5',
    },
    {
      hash: '5b9dce9bad2eb33364c6b9ae',
      includes: ['5b9de2dcf7baed336bc3b913'],
    },
    {
      hash: '5b1e5036e1540c84e3377e88',
      includes: [
        '5cd290dfb6fad1137a8a1440',
        '5cd23d8cb6fad1137a8a1226',
        '5cd29ebece358b137c06ea6f',
        '5cd295e5efcdb713791d3a43',
        '5cd292c369d1f513875ae90d',
      ],
      name: 'patient',
    },
    {
      hash: '5b1e503eab672884de9df84c',
      includes: [
        '5cd0f403efcdb713791d0f16',
        '5cd131d0b6fad1137a8a0f05',
        '5c3470d9b579354d1771fb5b',
        '5cd127ebb6fad1137a8a0d94',
        '5b20da01ab672884de9dfa00',
        '5b9f9f8aad2eb33364c6c079',
        '5c5148733d44c4502b05fb6c',
        '5c51483f3d44c4502b05fb6b',
        '5c51481f97ffdf502cca411e',
        '5c6a594f3d44c4502b0606e7',
        '5c516e58767c3b5031548666',
        '5c516e77767c3b5031548668',
        '5c516ea6767c3b503154866a',
        '5c810abd13261b91e757b3ac',
      ],
      name: 'outpatient',
    },
  ]
}


function APIGenerator (props) {
  let {
    id,
    name,
    method,
    mockUrl,
    docUrl,
    devUrl,
    prodUrl,
    groupId,
    hasDynamic,
    query,
    body,
    data,
    getValidParams,
    APIName,
    interfaceNameObj: {
      dynamicPathInterfaceName,
      queryInterfaceName,
      bodyInterfaceName,
      responseInterfaceName
    },
    path
  } = props

  let requireStr = '?'
  let baseInterface = 'IBase'
  //  query 不能存在或无有效参数时，不会生成interface，也不存在 queryInterfaceName， 此处给默认值
  let genericParams = queryInterfaceName || 'object'
  let hasValidBobyParams = !!getValidParams(body).length

  if (hasDynamic) {
    requireStr = ''
    baseInterface = 'IPayload'
    genericParams += ', ' + dynamicPathInterfaceName
  }

  if (method !== 'get' && hasValidBobyParams) {
    requireStr = ''
    baseInterface = 'IData'
    genericParams += ', ' + bodyInterfaceName
  }

  // 同时满足动态路径 和 http body 的条件下
  if (hasDynamic && method !== 'get' && hasValidBobyParams) {
    baseInterface = 'IBoth'
  }

  let returnType = `Promise<${responseInterfaceName}>`

  let generic = `${baseInterface}<${genericParams}>`
  let returnExpressionStr = `createServer('${method}', '${id}', '${path}', false)(arg)`
  let comment = createAPIComment(props)
  let indent = '  '
  let singleRequestText = `${indent}${APIName}: (arg${requireStr}: ${generic}): ${returnType} => ${returnExpressionStr},\n`
  return comment + singleRequestText
}

function createAPIComment (api) {
  let {
    id,
    name,
    groupId
  } = api
  let tabStr = '  '
  return `${tabStr}/**
${tabStr} * 接口名称: ${name}
${tabStr} * 文档地址: ${api.docUrl}
${tabStr} */
`
}
