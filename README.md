## Auto-API
### 介绍
auto-api 可根据 APIMocker 平台上的文档，生成类型声明的 interface 及其对应的 reqeust 请求

#### 特点
  - 接口自动化
  - 可配置
  - 更多功能开发中...
### 前提
typescipt 项目可用

### 命令行命令
| 指令             | 说明                                         | 其他 |
| ---------------- | -------------------------------------------- | ---- |
| `auto create`    | 初始化生成 interface 和 request              | -    |
| `auto interface` | 初始化生成 interface, 待开发                 | -    |
| `auto mock`      | 根据文档的 moc k数据自动生成本地 mock,待开发 | -    |
| ...              | 更多功能待开发...                            | -    |


### 配置
#### 本工具会自动读取项目根目录 .automock.js 文件中的配置，全部配置及默认值如下:

```
{
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
  injectRequestFileText: '',
  subscribeMockModules: []
}

```