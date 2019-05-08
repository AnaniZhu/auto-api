const injectRequestFileText = `
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


module.exports = {
  // 缩进大小
  tabSize: 2,
  // interface 名前缀
  interfacePrefix: 'I',
  // params 的 interface 名后缀
  paramsInterfaceSuffix: 'Params',
  // payload 的 interface 名后缀
  payloadInterfaceSuffix: 'Payload',
  // response 的 interface 名后缀
  responseInterfaceSuffix: 'Response',
  // 继承的基础 interface 名
  baseExtendInterface: 'IBase',
  // 继承的拥有 params（动态路径） interface 名
  paramsExtendInterface: 'IParams',
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
    // '5b1e5036e1540c84e3377e88',
    {
      hash: '5b1e5036e1540c84e3377e88',
      name: 'MyPatient',
      includes: [
        '5c37fbd13fef450c3d2f7219',
        '5c1b64d3cd2da96e80a27cc1'
      ]
    }
  ]
}