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

function APIGenerator (props) {
  let {
    hash,
    method,
    devUrl,
    prodUrl,
    groupHash,
    hasDynamic,
    hasValidParams,
    APIName,
    responseInterfaceName,
  } = props

}


module.exports = {
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
  injectRequestFileText,
  // 需要订阅的模块
  subscribeMockModules :  [
    // {
    //   hash: '5b20d5f0ad31f684ea683cee',
    //   includes: ['5cd15bbb69d1f513875ae5b8', '5cd174e7efcdb713791d374f'],
    //   name: 'org',
    // },
    // {
    //   hash: '5b908eafb39002221a5614eb',
    //   includes: [
    //     '5b9f635e0181fb3363cc840b',
    //     '5ba06140ad2eb33364c6c52d',
    //     '5b9fb262cd3c23337182766b',
    //     '5b9f7f400181fb3363cc8677',
    //     '5b9fb2bf0181fb3363cc8889',
    //   ],
    //   name: 'reserve',
    // },
    // {
    //   hash: '5b1e50171b778d84dd6a0d87',
    //   includes: ['5b20eb5a1b778d84dd6a0f86', '5b20eb5a1b778d84dd6a0f86', '5b1e52c9ad31f684ea683b4f'],
    // },
    {
      hash: '5ccfd077efcdb713791d0a99',
      includes: [
        '5cd2a3d169d1f513875ae99c',
        // '5cd25681efcdb713791d3902',
        // '5cd1251eb6fad1137a8a0b02',
        // '5cd12a90efcdb713791d34a4',
        // '5cd12c54efcdb713791d34bf',
        // '5cd122d269d1f513875add78',
        // '5cd12eb069d1f513875ae3b1',
        // '5cd12eb069d1f513875ae3b1',
        // '5cd27a2869d1f513875ae851',
        // '5cd2839e69d1f513875ae879',
        // '5cd293c0b6fad1137a8a145e',
      ],
      name: 'h5',
    },
    // {
    //   hash: '5b9dce9bad2eb33364c6b9ae',
    //   includes: ['5b9de2dcf7baed336bc3b913'],
    // },
    // {
    //   hash: '5b1e5036e1540c84e3377e88',
    //   includes: [
    //     '5cd290dfb6fad1137a8a1440',
    //     '5cd23d8cb6fad1137a8a1226',
    //     '5cd29ebece358b137c06ea6f',
    //     '5cd295e5efcdb713791d3a43',
    //     '5cd292c369d1f513875ae90d',
    //   ],
    //   name: 'patient',
    // },
    // {
    //   hash: '5b1e503eab672884de9df84c',
    //   includes: [
    //     '5cd0f403efcdb713791d0f16',
    //     '5cd131d0b6fad1137a8a0f05',
    //     '5c3470d9b579354d1771fb5b',
    //     '5cd127ebb6fad1137a8a0d94',
    //     '5b20da01ab672884de9dfa00',
    //     '5b9f9f8aad2eb33364c6c079',
    //     '5c5148733d44c4502b05fb6c',
    //     '5c51483f3d44c4502b05fb6b',
    //     '5c51481f97ffdf502cca411e',
    //     '5c6a594f3d44c4502b0606e7',
    //     '5c516e58767c3b5031548666',
    //     '5c516e77767c3b5031548668',
    //     '5c516ea6767c3b503154866a',
    //     '5c810abd13261b91e757b3ac',
    //   ],
    //   name: 'outpatient',
    // },
  ]
}