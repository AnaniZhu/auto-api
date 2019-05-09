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
  tabSize: 2,
  interfacePrefix: 'I',
  paramsInterfaceSuffix: 'Params',
  payloadInterfaceSuffix: 'Payload',
  responseInterfaceSuffix: 'Response',
  baseExtendInterface: 'IBase',
  paramsExtendInterface: 'IParams',
  createRequestFn: 'createServer',
  interfaceOutputDir: './src/interface',
  reqeustOutputDir: './src/request',
  outputInterfaceFileName: '[name]',
  outputRequestFileName: '[name]',
  injectRequestFileText: '',
  subscribeMockModules: []
}

const process = require('process')
const path = require('path')
const configFileDir = path.resolve(process.cwd(), '.automock.js')

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
    let customConfig = require(configFileDir)
    config = { ...defaultConfig, ...customConfig, subscribeMockModules: parseModules(customConfig.subscribeMockModules) }
  } catch (err) {
    config = defaultConfig
    console.warn('项目根目录不存在配置文件: .automock.js，采取默认配置')
  }
  return config
}

module.exports = getConfig()
