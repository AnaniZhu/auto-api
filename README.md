# Auto-API
## 介绍
auto-api 可根据 APIMocker 平台上的文档，生成类型声明的 interface 及其对应的 reqeust 请求, 甚至是一切跟接口相关的东西...

### 特点
  - 接口自动化
  - 可配置
  - 更多功能开发中...
## 前提
typescipt 项目可用

## 命令行命令
| 指令             | 说明                                         | 其他 |
| ---------------- | -------------------------------------------- | ---- |
| `auto create`    | 初始化生成 interface 和 request              | -    |
| `auto interface` | 初始化生成 interface, 待开发                 | -    |
| `auto mock`      | 根据文档的 moc k数据自动生成本地 mock,待开发 | -    |
| ...              | 更多功能待开发...                            | -    |


## 配置
### 本工具会自动读取项目根目录 .automock.js 文件中的配置，全部配置及默认值如下:

```
{
  // 缩进大小
  tabSize: 2,v

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

  // 一个自定义函数，可自定义生成每一个 request 请求（与订阅 api 的数量一致）。
  // 该函数接受一个参数，此参数为一个处理过后的配置对象
  // 该函数接受一个返回值，返回的文本即最终生成的每一个 request 的字符串
  customAPIGenerator: null,

  // 订阅的模块
  subscribeMockModules: []
}

```

### 具体配置项

#### tabSize
每一个 interface 属性可能为多级，此配置项表明每个嵌套层级的缩进空格数量，此配置只影响 interface 文件。

默认值为 `2`

```
// - 的数量代表缩进空格的数量
interface ExampleInterface {
--returnCode: 'success',
--returnMsg: '成功',
--data: {
----name: '张三',
----age: 15
--}
}
```
___

#### isGlobal

isGlobal 决定生成的 interface 是否是全局作用域，当值为 false 时，会默认将每一个 interface 导出，如若有 `customAPIGenerator` 配置项，对应生成的 request 文件，会自动将 interface 导入（import）

默认值为 `false`
v
> 如果在你的 TypeScript 文件的根级别位置含有 import 或者 export，它会在这个文件中创建一个本地的作用域, 此为“文件模块“
>
> 如果不满足上面条件，则它将在全局作用域下都能访问，被称作“全局模块”
>
> 毋庸置疑，使用全局变量空间是危险的，因为它会与文件内的代码命名冲突。我们推荐使用下文中将要提到的文件模块。
---

#### interfacePrefix
#### dynamicPathInterfaceSuffix
#### queryInterfaceSuffix
#### bodyInterfaceSuffix
#### responseInterfaceSuffix
以上几个配置项，则是给生成的 interface 名字加前缀或后缀，根据不同的 interface 补上不同的后缀，前缀则是统一补充
> 前缀的意义？在其他引用的地方，方便标识这个“变量”为类型定义。比如以默认值 I 为例，在其他文件看到 Ixxxx 则知道它是一个 interface

默认值分别为 `I`, `Path`, `Query`, `Body`, `Response`
___

#### interfaceOutputDir
#### reqeustOutputDir
生成的 interface 文件及 request 文件 最终输出的路径，此填写的路径是相对于配置文件(.automock.js)

默认值分别为 `./src/interface`, `./src/request`

<span style="background-color: #fdf6ec; color: #e6a23c;">ps: 只有当你配置了 `customAPIGenerator`, 才会生成 request,outputRequestFileName 的配置才会有效</span>
___

#### outputInterfaceFileName outputRequestFileName
生成的 interface 及 request 的文件名。[name] 为占位符，取之于配置项 `subscribeMockModules` 的 `name` 字段，如若未填写，默认取自 mock 文档上线上地址的第二级 path 作为模块名

比如 `https://dxcare.cn/clinic/outpatient/adultPhysicalExam/summary` 则取 `outpatient` 作为模块名
注意: 当文档上线上地址不满足 协议 + 域名 + path 的格式时，默认将模块的id作为模块名，如有需要，请在 `subscribeMockModules` 配置项中 配置 name。

默认值为 `[name]`

<span style="background-color: #fdf6ec; color: #e6a23c;">ps: 只有当你配置了 `customAPIGenerator`, 才会生成 request outputRequestFileName 的配置才会有效</span>

___

#### injectRequestFileText

在 `request` 文件 import(如果非全局作用域下)文本 和 export 文本中间注入的内容。

默认值为 `''`

因为 `customAPIGenerator` 返回的字符串代码，可能用到了该文件未声明的变量或函数，这个配置项可以直接变量、函数等一切代码，你也可以注入 `import xxx from 'xxxx'`等字符串。只要你想，一切都可以。

___

#### customAPIGenerator(props: PropsType):string

PropsType为一个对象， 具体属性如下所示:

| 属性               | 类型     | 说明                                                                                                                                                                                       |
| ------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`               | number   | 当前接口文档的 id                                                                                                                                                                         |
| `name`             | string   | 接口文档的名字                                                                                                                                                                             |
| `method`           | string   | http 请求的方式 get/post/put/patch/delete                                                                                                                                                  |
| `mockUrl`          | string   | mock地址                                                                                                                                                                                   |
| `devUrl`           | string   | 测试地址                                                                                                                                                                                   |
| `prodUrl`          | string   | 线上地址                                                                                                                                                                                   |
| `docUrl`           | string   | 文档地址                                                                                                                                                                                   |
| `groupId`          | number   | 接口所属模块的id                                                                                                                                                                           |
| `query`            | array    | 接口 `options.params.query` 参数，格式为原生格式，未做处理，具体可见 APIMocker network                                                                                                                      |
| `body`             | array    | 接口 `options.params.body` 参数，格式为原生格式，未做处理，具体可见 APIMocker network                                                                                                                       |
| `data`             | array    | 接口 `options.response[0].params` 参数，格式为原生格式，未做处理，具体可见 APIMocker network。如果接口不存在 response, 则为空数组                                                                                                                    |
| `hasDynamic`       | boolean  | 接口地址(先取`prodUrl`， `prodUrl` 为空再取 `devUrl`)是否有动态路径，比如 /patient/:id                                                                                                     |
| `getValidParams`   | function | 参数为上面所说的 query 和 body 其中之一。因为有些params是无效数据，这个函数能过滤掉无效数据，返回有效数据                                                                                  |
| `APIName`          | string   | 生成 API 的名字，request 和 interface 都是基于此命名                                                                                                                                       |
| `interfaceNameObj` | object   | 包含 4 个属性: `dynamicPathInterfaceName`, `queryInterfaceName`, `bodyInterfaceName`, `responseInterfaceName`, 分别对应 4 种 interface(dynamicPath(动态路径), query, body, reponse) 的名字 |
| `decoratedPath`    | string   | 接口地址(先取`prodUrl`， `prodUrl` 为空再取 `devUrl`)的path。比如 `https://dxcare.cn/clinic/outpatient/adultPhysicalExam/summary` 则取 `/clinic/outpatient/adultPhysicalExam/summary`      |


该函数接受一个返回值(string)，该字符串就是输出到文件的一个个 API

假设有以下配置
```
// .autmock.js
let injectRequestFileText = `
// 注入的内容 Start
import my from 'my'
// 注入的内容 END

`
module.exports = {
  ... // 其他配置皆不传为默认值
  injectRequestFileText,
  customAPIGenerator: props => {
    let {id, name} = props
    let tab = '  '
    return `${tab}'${id}': '${name}',\n`
  },
  subscribeMockModules: [
      {
      hash: '5ccfd077efcdb713791d0a99',
      includes: [
        '5cd2a3d169d1f513875ae99c',
        '5cd25681efcdb713791d3902'
      ],
      name: 'h5',
    }
  ]
}

// h5.ts // 生成的 request 文件

import {
  IGetInfoe99cQuery,
  IGetInfoe99cResponse,
  IGetChoosePayment3902Path,
  IGetChoosePayment3902Response,
} from '../interface/h5'

// 注入的内容 Start
import my from 'my'
// 注入的内容 END

export default {
  '5cd2a3d169d1f513875ae99c': 'H5-待收费详情',
  '5cd25681efcdb713791d3902': 'H5-选择支付方式',
}

```

你可是通过定义更复杂的函数，来生成你想要的内容。

___

#### subscribeMockModules: array<string | {hash, name, includes, excludes}>
该配置项是关键配置。

需要订阅模块，模块下面有一个个 mock api 文档。

该配置项的值为一个数组，数组每一项可以是一个 string 或者 object
- 当为 string 时，则传入模块 id，默认订阅下面所有接口，生成的文件名按上面所提到的规则生成
- 当为 object 时，它有 4 个属性，分别为 `hash`, `name`, `includes`, `excludes`。
  - `hash` 代表模块id
  - `name` 代表生成文件的文件名[name]的占位符
  - `includes` 和 `excludes` 皆为一个数组，数组每一项都是字符串，代表单个接口的id，先会导入 `incldues` 的所有接口，再经过 excludes 过滤，过滤后的接口才会进行处理(生成 interface 和 request)。


下面看一个例子:
```
const subscribeMockModules = [
  '5ccfd077efcdb713791d0a99',
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
    excludes: ['5b20eb5a1b778d84dd6a0f86', '5b20eb5a1b778d84dd6a0f86', '5b1e52c9ad31f684ea683b4f'],
  }
]

```

### EXAMPLE
#### 以该配置为例
```
// 后续添加
```