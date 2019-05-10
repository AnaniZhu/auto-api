const fs = require('fs')

// const injectRequestFileText = `
// function createServer(method, mockUrl, prodUrl, isMock): Function {
//   return () => {};
// }

// interface IBase<T> {
//   slience?: boolean;
//   query?: T;
// }

// interface IParams<T, R> extends IBase<T> {
//   params: R;
// }
// `

// 默认配置
const defaultConfig = {
  // 缩进大小
  tabSize: 2,
  // interface 是否全局作用域， 非全局会导出，request 文件自动导入
  isGlobal: false,
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
  injectRequestFileText: '',
  subscribeMockModules: []
}

const process = require('process')
const path = require('path')
const configFileDir = path.resolve(process.cwd(), '.automock.js')

console.log(configFileDir)

function parseModules (modules) {
  return modules.map(mod => {
    if (typeof mod === 'string') return { hash: mod }
    if (Object.prototype.toString.call(mod) === '[object Object]') { return mod }
    throw new Error('传入的 subscribeMockModules 格式有误，请检查格式')
  })
}

function getConfig () {
  let config
  try {
    fs.statSync(configFileDir)
  } catch (err) {
    console.warn('项目根目录不存在配置文件: .automock.js，采取默认配置')
    return defaultConfig
  }
  let customConfig = require(configFileDir)
  config = { ...defaultConfig, ...customConfig, subscribeMockModules: parseModules(customConfig.subscribeMockModules) }
  return config
}

module.exports = getConfig()
