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
  // interface 名前缀
  interfacePrefix: 'I',
  // 路由 动态id 的 interface 名后缀
  dynamicPathInterfaceSuffix: 'Payload',
  // get 请求所带参数 的 interface 名后缀
  queryInterfaceSuffix: 'Params',
  // post/delete/put/patch 所带数据（body）
  bodyInterfaceSuffix: 'Data',
  // response 的 interface 名后缀
  responseInterfaceSuffix: 'Response',
  // 继承的基础 interface 名
  baseExtendInterface: 'IBase',
  // 继承的拥有 动态路径 interface 名
  dynamicPathExtendInterface: 'IPayload',
  // post/put/patch 传入参数在 http body 中的 interface 名
  bodyExtendInterface: 'IData',
  // 以上两者同时满足时，采用的 继承 interface
  bothExtendInterface: 'IBoth',
  // 创建 request 的方法名
  createRequestFn: 'createServer',
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
  // 需要订阅的模块
  subscribeMockModules : [
    '5b1e5036e1540c84e3377e88',
    // {
    //   hash: '5b1e5036e1540c84e3377e88',
    //   name: 'MyPatient',
    //   includes: [
    //     '5c37fbd13fef450c3d2f7219',
    //     '5c1b64d3cd2da96e80a27cc1'
    //   ]
    // }
  ]
}