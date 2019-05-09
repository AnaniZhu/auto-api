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
  subscribeMockModules :  [
    {
      hash: '5c6a7a57767c3b503154915c',
      includes: [
        '5ccfe3c169d1f513875ab9df',
        '5ca863edb802126202fbb161',
        '5ca86418eb3ec26209d391c8',
        '5ccf978cefcdb713791d09ae',
        '5ccf9799efcdb713791d09af',
        '5ca86551eb3ec26209d391c9',
        '5ca8656feb3ec26209d391ca',
        '5ccfebe5b6fad1137a89e553',
        '5ccfecf669d1f513875aba4a',
        '5ccffd1269d1f513875abb49',
        '5ccffd07ce358b137c06bc3d',
        '5cd1572a69d1f513875ae58a',
        '5cd15c57ce358b137c06e6cb',
        '5cd162c4b6fad1137a8a113d',
        '5cd16852efcdb713791d3742',
        '5cd243d0b6fad1137a8a1273',
        '5cd2b27fefcdb713791d3b1a',
        '5cd24586ce358b137c06e841',
        '5cd2465069d1f513875ae733',
        '5cd2b2f2efcdb713791d3b1c',
        '5cd2c8f1efcdb713791d3b7d',
        '5cd2cd1f69d1f513875aea6e',
        '5cd2ca6defcdb713791d3b7e',
        '5cd2cbf5b6fad1137a8a15a8',
        '5cd2ccceefcdb713791d3b83',
        '5cd2c9cece358b137c06eb6d',
        '5cd2cde869d1f513875aea70',
        '5cd2cae369d1f513875aea68',
        '5cd2cb6eb6fad1137a8a15a6',
        '5cd2cc6eefcdb713791d3b80',
        '5ccfd89bb6fad1137a89e4b4',
        '5ccfdf6bce358b137c06baa6',
        '5ccfe0d6efcdb713791d0aef',
        '5ccfe2adce358b137c06babd',
        '5ccfe077efcdb713791d0aeb',
        '5ccfd91769d1f513875ab9a3',
        '5ccfe198ce358b137c06bab0',
        '5ccfe21269d1f513875ab9cd',
      ],
    },
    {
      hash: '5b1e5036e1540c84e3377e88',
      name: 'patient',
      includes: [
        '5ca1c7d0e1de8162038acb5c',
        '5cd0f513efcdb713791d0f28',
        '5cd0f5feb6fad1137a89e933',
        '5ca2cba4cd1758620a61e458',
        '5ca30373eb3ec26209d38959',
        '5cd292c369d1f513875ae90d',
      ],
    },
    {
      hash: '5b1e5027ad31f684ea683b41',
      includes: [
        '5cd27b3ace358b137c06e968',
        '5cd2797eb6fad1137a8a1398',
        '5b236500e1540c84e3378345',
        '5ccfeb72b6fad1137a89e54e',
        '5ccfec27b6fad1137a89e55b',
        '5ccfee4769d1f513875aba58',
        '5ccfefabb6fad1137a89e5ae',
        '5ccfef45b6fad1137a89e590',
      ],
    },
    {
      hash: '5b1e503eab672884de9df84c',
      name: 'outpatient',
      includes: [
        '5c4fcd5c3d44c4502b05f865',
        '5c4fed6597ffdf502cca3ec3',
        '5c4fcd3597ffdf502cca3e19',
        '5cd004f1efcdb713791d0cce',
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
        '5cd39139efcdb713791d3c49',
        '5cd393f1b6fad1137a8a16a1',
        '5cd13cbc69d1f513875ae44f',
        '5cd13ce9efcdb713791d356c',
        '5cd13d14ce358b137c06e55b',
        '5cd2acc2efcdb713791d3ae6',
        '5cd13d52efcdb713791d356f',
        '5cd162adb6fad1137a8a113c',
        '5cd162cd69d1f513875ae5f5',
        '5cd13e11efcdb713791d3577',
        '5cb3fa04cd1758620a622638',
        '5ca356ebeb3ec26209d38bf4',
        '5ca1bfaacd1758620a61e293',
        '5ca1c009eb3ec26209d3868c',
        '5ca1c01be1de8162038acad9',
      ],
    },
    {
      hash: '5ccfd077efcdb713791d0a99',
      name: 'h5',
      includes: [
        '5cd1362defcdb713791d3520',
        '5cd13650efcdb713791d3524',
        '5ccfd09769d1f513875ab970',
        '5ccfd4ba69d1f513875ab982',
        '5cd2a3d169d1f513875ae99c',
        '5cd25681efcdb713791d3902',
        '5cd12eb069d1f513875ae3b1',
        '5cd12eb069d1f513875ae3b1',
        '5cd27a2869d1f513875ae851',
        '5cd2839e69d1f513875ae879',
        '5cd293c0b6fad1137a8a145e',
      ],
    },
    {
      hash: '5b908eafb39002221a5614eb',
      name: 'reserve',
      includes: [
        '5b9f635e0181fb3363cc840b',
        '5ba06140ad2eb33364c6c52d',
        '5b9fb262cd3c23337182766b',
        '5b9f7f400181fb3363cc8677',
        '5b9fb2bf0181fb3363cc8889',
      ],
    },
    {
      hash: '5b1e50171b778d84dd6a0d87',
      includes: ['5b20eb5a1b778d84dd6a0f86', '5b20eb5a1b778d84dd6a0f86', '5b1e52c9ad31f684ea683b4f'],
    },
    {
      hash: '5b9dce9bad2eb33364c6b9ae',
      includes: ['5b9de2dcf7baed336bc3b913'],
    },
    {
      hash: '5cd23f7d69d1f513875ae6f3',
      includes: ['5cd23ff0b6fad1137a8a123a', '5cd274b7efcdb713791d3959'],
    },
  ]

}