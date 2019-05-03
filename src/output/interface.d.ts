
interface IBase<T> {
  slience?: boolean;
  query?: T;
}

interface IParams<T, R> extends IBase<T> {
  params: R;
}

/*
 * 接口名称: 中药-从基础表导入
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b23288eab672884de9dfc7c
 * mock地址: https://f2e.dxy.net/mock-api/client/5b23288eab672884de9dfc7c
 * 接口地址: https://dxcare.cn/clinic/medicine/chineseMedicine/importFromBase
 * 最近修改时间: 2018-11-01 14:14:17
 * 描述: 无
*/
interface IPostImportFromBase8c30Payload  {
  ids?: number[]; // 基础表药品id数组
  nameOrBarcode?: string; // 名称或者条形码
}
interface IPostImportFromBase8c30Response  {
  returnMsg: string;
  returnCode: string;
}
/*
 * 接口名称: 中药-从文件导入
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b2329571b778d84dd6a11a3
 * mock地址: https://f2e.dxy.net/mock-api/client/5b2329571b778d84dd6a11a3
 * 接口地址: https://dxcare.cn/clinic/medicine/chineseMedicine/importFromFile
 * 最近修改时间: 2018-11-01 14:14:06
 * 描述: 无
*/
interface IPostImportFromFile1a90Payload  {
  dataFile: file;
}
interface IPostImportFromFile1a90Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 中药-列表查询
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b23229aab672884de9dfc6e
 * mock地址: https://f2e.dxy.net/mock-api/client/5b23229aab672884de9dfc6e
 * 接口地址: https://dxcare.cn/clinic/medicine/chineseMedicine
 * 最近修改时间: 2018-11-01 14:13:49
 * 描述: 无
*/
interface IQueryChineseMedicineListf54bPayload  {
  nameOrBarcode?: string; // 处方名或条形码
  nameOrInitialLetter?: string; // 名称或者首字母
  status?: string; // 状态，1有效，0无效
  ids?: string; // id列表,逗号分割
  withWarehouseStorages?: string; // 是否查询仓库库存
  pageNo?: string;
  pageSize?: string;
  category?: string; // 分类id
}
interface IQueryChineseMedicineListf54bResponse  {
  data: {
    items: {
      allowDiscount: boolean; // 是否允许折扣
      approvalNo: string; // 国药准字
      barcode: string; // 条形码
      category: number; // 分类
      categoryName: string; // 分类名
      clinicId: number; // 诊所id
      createTime: string; // 创建时间
      creator: number; // 创建者id
      defaultCostPrice: number; // 成本价
      defaultSingleDoseUnit: number; // 单词剂量单位
      defaultSingleDoseUnitName: string; // 单词剂量单位名称
      defaultFrequency: number; // 频率
      defaultFrequencyName: string; // 频率名称
      defaultTakingMedicinePlace: number; // 默认取药地点，0本院，1，外购，2，代购
      defaultTakingMedicineWarehouseId: number; // 默认取药仓库id
      defaultUsage: number; // 用法
      defaultUsageName: string; // 用法名称
      dosageForm: number; // 剂型
      dosageFormName: string; // 剂型名称
      englishName: string; // 英文名
      genericName: string; // 通用名
      genericNameInitial: string; // 通用名首字母
      id: number; // id
      manufacturer: string; // 生成厂家
      modifier: number; // 修改者id
      modifyTime: string; // 修改时间
      name: string; // 名称
      nameInitial: string; // 名称首字母
      orgId: number; // 机构id
      packageUnit: number; // 包装单位
      packageUnitName: string; // 包装单位名称
      pinyinCode: string; // 拼音码
      retailPrice: number; // 零售价
      salesLimitNum: number; // 销售限制数量
      specification: string; // 规格
      status: number; // 状态
      statusName: string; // 状态名
      storageWarnNum: number; // 库存预警数
      usageNotes: string; // 使用说明（说明）
      validityWarnDays: number; // 有效期预警天数
      warehouseStorages: {
        warehouseId: number; // 仓库id
        warehouseName: string; // 仓库名
        storageNum: number; // 库存（可用库存数=拆零库存-锁定库存）
      }[]; // 仓库库存列表
    }[];
    pageBean: {
      pageNo: number;
      pageSize: string;
      totalCount: number;
    };
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 中药-删除
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba387ff0181fb3363cca1c9
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba387ff0181fb3363cca1c9
 * 接口地址: https://dxcare.cn/clinic/medicine/chineseMedicine/:id
 * 最近修改时间: 2018-11-01 14:14:32
 * 描述: 无
*/
interface IDeleteChineseMedicine8ad1Params  {
  id: number;
}
interface IDeleteChineseMedicine8ad1Payload  {
  null: string;
}
interface IDeleteChineseMedicine8ad1Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 中药-批量设置库存预警数目
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b2327681b778d84dd6a1195
 * mock地址: https://f2e.dxy.net/mock-api/client/5b2327681b778d84dd6a1195
 * 接口地址: https://dxcare.cn/clinic/medicine/chineseMedicine/storageWarnNum
 * 最近修改时间: 2018-11-01 14:14:45
 * 描述: 无
*/
interface IPutStorageWarnNumae9cPayload  {
  storageWarnNum: number; // 库存预警数
}
interface IPutStorageWarnNumae9cResponse  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 中药-批量设置是否允许折扣
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b4c6f37e7438f4379fd8ea3
 * mock地址: https://f2e.dxy.net/mock-api/client/5b4c6f37e7438f4379fd8ea3
 * 接口地址: https://dxcare.cn/clinic/medicine/chineseMedicine/allowDiscount
 * 最近修改时间: 2018-11-01 14:14:56
 * 描述: 无
*/
interface IPutAllowDiscount7cc9Payload  {
  allowDiscount: boolean; // 是否允许折扣
}
interface IPutAllowDiscount7cc9Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 中药-批量设置有效期预警
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b2324c41b778d84dd6a1192
 * mock地址: https://f2e.dxy.net/mock-api/client/5b2324c41b778d84dd6a1192
 * 接口地址: https://dxcare.cn/clinic/medicine/chineseMedicine/validityWarnDays
 * 最近修改时间: 2018-11-01 14:15:06
 * 描述: 无
*/
interface IPutValidityWarnDays7ecbPayload  {
  validityWarnDays: number; // 有效期预警天数
}
interface IPutValidityWarnDays7ecbResponse  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 中药-新增
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b2320f9ab672884de9dfc6a
 * mock地址: https://f2e.dxy.net/mock-api/client/5b2320f9ab672884de9dfc6a
 * 接口地址: https://dxcare.cn/clinic/medicine/chineseMedicine
 * 最近修改时间: 2019-03-27 11:36:18
 * 描述: 无
*/
interface IPostChineseMedicinef54bPayload  {
  allowDiscount: boolean; // 是否允许折扣
  againstIds: number[]; // 配伍禁忌
  approvalNo: string; // 准字批号
  barcode: string; // 条形码
  category: number; // 分类
  defaultCostPrice: number; // 成本价
  savedSingleDoseUnitIds: number[]; // （次）剂量单位列表
  defaultFrequency: number; // 频率
  defaultTakingMedicinePlace: number; // 取药地点
  defaultTakingMedicineWarehouseId: number; // 取药仓库
  defaultUsage: number; // 用法
  dosageForm: number; // 剂型
  englishName: string; // 英文名
  genericName: string; // 通用名
  genericNameInitial: string; // 通用名首字母
  manufacturer: string; // 生产厂商
  name: string; // 名称
  nameInitial: string; // 名字首字母
  packageUnit: number; // 包装单位
  pinyinCode: string; // 拼音码
  batchNo: string; // 生产批号
  retailPrice: number; // 零售价
  salesLimitNum: number; // 销售限制数量
  specification: string; // 规格
  storageWarnNum: number; // 库存预警
  status: number; // 状态，1正常，0停用
  usageNotes: string; // 用法备注（说明）
  validityWarnDays: number; // 有效期预警天数
}
interface IPostChineseMedicinef54bResponse  {
  returnCode: string;
  returnMsg: string;
  data: number; // 中药id
}
/*
 * 接口名称: 中药-更新
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b41d1966e5a13436f4578c7
 * mock地址: https://f2e.dxy.net/mock-api/client/5b41d1966e5a13436f4578c7
 * 接口地址: https://dxcare.cn/clinic/medicine/chineseMedicine/:id
 * 最近修改时间: 2019-03-27 11:36:41
 * 描述: 无
*/
interface IPutChineseMedicine8ad1Params  {
  id: number;
}
interface IPutChineseMedicine8ad1Payload  {
  allowDiscount: boolean; // 是否允许折扣
  againstIds: number[]; // 配伍禁忌
  approvalNo: string; // 准字批号
  barcode: string; // 条形码
  category: number; // 分类
  defaultCostPrice: number; // 成本价
  savedSingleDoseUnitIds: number[]; // 剂量单位列表
  defaultFrequency: number; // 频率
  defaultTakingMedicinePlace: number; // 取药地点
  defaultTakingMedicineWarehouseId: number; // 取药仓库
  defaultUsage: number; // 用法
  dosageForm: number; // 剂型
  englishName: string; // 英文名
  genericName: string; // 通用名
  genericNameInitial: string; // 通用名首字母
  manufacturer: string; // 生产厂商
  name: string; // 名称
  nameInitial: string; // 名字首字母
  packageUnit: number; // 包装单位
  pinyinCode: string; // 拼音码
  batchNo: string; // 生产批号
  retailPrice: number; // 零售价
  salesLimitNum: number; // 销售限制数量
  sepcification: string; // 规格
  storageWarnNum: number; // 库存预警
  status: number; // 状态，1正常，0停用
  usageNotes: string; // 用法备注（说明）
  validityWarnDays: number; // 有效期预警天数
}
interface IPutChineseMedicine8ad1Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 中药-查询
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b481fb0e7d539438bfc3a9d
 * mock地址: https://f2e.dxy.net/mock-api/client/5b481fb0e7d539438bfc3a9d
 * 接口地址: https://dxcare.cn/clinic/medicine/chineseMedicine/:id
 * 最近修改时间: 2018-10-17 15:08:34
 * 描述: 无
*/
interface IGetChineseMedicine8ad1Params  {
  id: number;
}
interface IGetChineseMedicine8ad1Response  {
  returnCode: string;
  returnMsg: string;
  data: {
    allowDiscount: boolean; // 是否允许折扣
    againstIds: number[]; // 中药禁忌id列表
    againsts: {
      id: number; // id
      name: string; // 名称
    }[]; // 中药禁忌列表
    allowSubpackage: boolean; // 是否允许拆零
    approvalNo: string; // 国药准字
    barcode: string; // 条形码
    category: number; // 分类
    categoryName: string; // 分类名
    clinicId: number; // 诊所id
    createTime: string;
    creator: number;
    defaultCostPrice: number; // 成本价
    defaultFrequency: number; // 频率
    defaultFrequencyName: string; // 频率名称
    defaultSingleDose: number; // 单次剂量
    singleDoseUnits: {
      id: number; // 单位id
      name: string; // 单位名称
    }[]; // 单次剂量单位列表（剂量单位列表）
    defaultTakingMedicinePlace: number; // 取药地点
    defaultTakingMedicineWarehouseId: number; // 取药仓库id
    defaultUsage: number; // 用法
    defaultUsageName: string; // 用法名称
    dosageForm: number; // 剂型
    dosageFormName: string; // 剂型名称
    englishName: string; // 英文名
    genericName: string; // 通用名
    genericNameInitial: string; // 通用名首字母
    id: number;
    subpackageDoseUnit: number; // 拆零剂量单位
    subpackageDoseUnitName: string; // 拆零剂量单位名称
    manufacturer: string; // 生产厂商
    modifier: number;
    modifyTime: string;
    name: string; // 名称
    nameInitial: string; // 名称首字母
    orgId: number; // 机构id
    packageUnit: number; // 包装单位
    packageUnitName: string; // 包装单位名称
    pinyinCode: string; // 拼音码
    batchNo: string; // 批号
    retailPrice: number; // 零售价
    salesLimitNum: number; // 销售限制数
    sepcification: string; // 规格
    status: number; // 状态
    statusName: string; // 状态名称
    storageWarnNum: number; // 库存预警数
    subpackagePrice: number; // 拆零价格
    usageNotes: string; // 使用说明（说明）
    validityWarnDays: number; // 有效期预警天数
    originBaseMedicineId: number; // 基础表药品id，大于0表示从基础表导入，默认未0
  };
}
/*
 * 接口名称: 中药-状态修改
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b2325adab672884de9dfc75
 * mock地址: https://f2e.dxy.net/mock-api/client/5b2325adab672884de9dfc75
 * 接口地址: https://dxcare.cn/clinic/medicine/chineseMedicine/:id/status
 * 最近修改时间: 2018-10-17 15:09:08
 * 描述: 无
*/
interface IPutStatus6469Params  {
  id: number;
}
interface IPutStatus6469Payload  {
  status: number;
}
interface IPutStatus6469Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 中药分类-修改
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b7e18ad2eb33364c6b887
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b7e18ad2eb33364c6b887
 * 接口地址: https://dxcare.cn/clinic/medicine/chineseMedicineCategory/:id
 * 最近修改时间: 2018-09-14 17:24:01
 * 描述: 无
*/
interface IPutChineseMedicineCategoryc0d2Params  {
  id: number;
}
interface IPutChineseMedicineCategoryc0d2Payload  {
  label: string; // 名称
}
interface IPutChineseMedicineCategoryc0d2Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 中药分类-列表
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b79c20181fb3363cc8002
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b79c20181fb3363cc8002
 * 接口地址: https://dxcare.cn/clinic/medicine/chineseMedicineCategory
 * 最近修改时间: 2018-09-29 11:00:18
 * 描述: 无
*/
interface IQueryChineseMedicineCategoryList0dc0Payload  {
  includeGoodsCount?: string; // 是否查询商品数量，默认true
  includeUncategorizedNode?: string; // 是否包含“未分类”节点，默认true
  includeAllNode?: string; // 是否包含“全部”节点节点，默认true
}
interface IQueryChineseMedicineCategoryList0dc0Response  {
  data: {
    items: {
      id: number; // 分类id
      type: string;
      label: string; // 分类名称
      code: string; // 分类编码
      value: string;
      height: number; // 分类级别
      parentId: number; // 父节点分类
      count: number; // 商品数量
      children: {
        id: number;
        type: string;
        label: string;
        code: string;
        value: string;
        height: number;
        parentId: number;
        count: number; // 商品数量
      }[]; // 子分类
    }[];
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 中药分类-删除
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b81780181fb3363cc8027
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b81780181fb3363cc8027
 * 接口地址: https://dxcare.cn/clinic/medicine/chineseMedicineCategory/:id
 * 最近修改时间: 2018-09-14 17:38:59
 * 描述: 无
*/
interface IDeleteChineseMedicineCategoryc0d2Params  {
  id: number;
}
interface IDeleteChineseMedicineCategoryc0d2Payload  {
  null: string;
}
interface IDeleteChineseMedicineCategoryc0d2Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 中药分类-新增
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b7bbe0181fb3363cc8008
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b7bbe0181fb3363cc8008
 * 接口地址: https://dxcare.cn/clinic/medicine/chineseMedicineCategory
 * 最近修改时间: 2018-09-29 18:00:49
 * 描述: 无
*/
interface IPostChineseMedicineCategory0dc0Payload  {
  label: string; // 名称
  parentId: string; // 父节点id，默认为0，parentId为0表示该节点为根节点
}
interface IPostChineseMedicineCategory0dc0Response  {
  returnCode: string;
  returnMsg: string;
  data: {
    id: number; // 分类id
  };
}
/*
 * 接口名称: 供应商-列表
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b4c9dbd6e5a13436f458ecc
 * mock地址: https://f2e.dxy.net/mock-api/client/5b4c9dbd6e5a13436f458ecc
 * 接口地址: https://dxcare.cn/clinic/medicine/supplier
 * 最近修改时间: 2018-10-09 11:33:31
 * 描述: 无
*/
interface IQuerySupplierListfe09Payload  {
  pageNo?: string; // 当前页
  pageSize?: string; // 页码
  status?: string; // 供应商状态，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
}
interface IQuerySupplierListfe09Response  {
  data: {
    items: {
      id: number; // id
      contacts: string; // 联系人
      phone: string; // 电话
      name?: string; // 名称
      status: number; // 供应商状态，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
      statusText: string; // 状态名
    }[];
    pageBean: {
      pageNo: string; // 当前页
      pageSize: string; // 页码
      totalCount: string; // 总条数
    }; // 分页对象
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 供应商-状态修改
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5bbf22fcad2eb33364c72af6
 * mock地址: https://f2e.dxy.net/mock-api/client/5bbf22fcad2eb33364c72af6
 * 接口地址: https://dxcare.cn/clinic/medicine/supplier/:id/status
 * 最近修改时间: 2018-10-11 18:16:54
 * 描述: 无
*/
interface IPutStatus0e26Params  {
  id: number;
}
interface IPutStatus0e26Payload  {
  status: number; // 库房状态，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
}
interface IPutStatus0e26Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 供应商修改
 * 作者: 黄进
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b23ecad2eb33364c6b416
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b23ecad2eb33364c6b416
 * 接口地址: https://dxcare.cn/clinic/medicine/supplier/:id
 * 最近修改时间: 2018-09-26 17:48:49
 * 描述: 无
*/
interface IPutSupplier6ba1Params  {
  id: number;
}
interface IPutSupplier6ba1Payload  {
  name?: string; // 供应商名称
  contacts?: string; // 联系人
  phone?: string; // 联系人电话
  status?: number; // 是否禁用，1：启用，0：禁用（https://wiki.dxy.net/pages/viewpage.action?pageId=134527991）
}
interface IPutSupplier6ba1Response  {
  returnMsg: string;
  returnCode: string;
}
/*
 * 接口名称: 供应商删除
 * 作者: 黄进
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9f164fad2eb33364c6ba2b
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9f164fad2eb33364c6ba2b
 * 接口地址: https://dxcare.cn/clinic/medicine/supplier/:id
 * 最近修改时间: 2018-09-26 17:48:39
 * 描述: 无
*/
interface IDeleteSupplier6ba1Params  {
  id: number;
}
interface IDeleteSupplier6ba1Payload  {
  null: string;
}
interface IDeleteSupplier6ba1Response  {
  returnMsg: string;
  returnCode: string;
}
/*
 * 接口名称: 供应商查看
 * 作者: 黄进
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5bab430dcd3c23337182a912
 * mock地址: https://f2e.dxy.net/mock-api/client/5bab430dcd3c23337182a912
 * 接口地址: https://dxcare.cn/clinic/medicine/supplier/:id
 * 最近修改时间: 2018-10-24 15:37:20
 * 描述: 无
*/
interface IGetSupplier6ba1Params  {
  id: number;
}
interface IGetSupplier6ba1Payload  {
  null: string;
}
interface IGetSupplier6ba1Response  {
  data: {
    id: string; // id
    name?: string; // 供应商name
    contacts?: string; // 联系人
    phone?: string; // 手机号
    status?: number; // 状态1有效，0无效
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 供应商添加
 * 作者: 黄进
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b20eead2eb33364c6b40b
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b20eead2eb33364c6b40b
 * 接口地址: https://dxcare.cn/clinic/medicine/supplier
 * 最近修改时间: 2018-09-26 17:51:31
 * 描述: 无
*/
interface IPostSupplierfe09Payload  {
  name: string; // 供应商名称
  contacts: string; // 联系人
  phone: string; // 联系人电话
  status: number; // 是否禁用，1：启用，0：禁用（https://wiki.dxy.net/pages/viewpage.action?pageId=134527991）
}
interface IPostSupplierfe09Response  {
  returnMsg: string;
  returnCode: string;
}
/*
 * 接口名称: 出库订单-新增
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5bbd5ea00181fb3363cce5c3
 * mock地址: https://f2e.dxy.net/mock-api/client/5bbd5ea00181fb3363cce5c3
 * 接口地址: https://dxcare.cn/clinic/medicine/takeOutWarehouseOrder
 * 最近修改时间: 2018-10-11 19:03:21
 * 描述: 无
*/
interface IPostTakeOutWarehouseOrder7758Payload  {
  warehouseId: number; // 仓库id
  check?: boolean; // 是否审核，默认false，新增并审核的时候传true（发药的时候应该为true）
  warehouseId: string; // 出库库房id
  method: number; // 出库方式，https://wiki.dxy.net/pages/editpage.action?pageId=134527991
  applicant: number; // 领用人员id
  takeOutDate: string; // 出库日期
  departmentId?: number; // 出库科室id
  remark?: string; // 备注
  details: {
    storageId: number; // 库存id
    count: number; // 数量
    packageType?: number; // 包装类型，药品出库时包装类型必填，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
    unit: number; // 包装单位
  }[]; // 明细列表
}
interface IPostTakeOutWarehouseOrder7758Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 分类-列表
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5bc840c5dfd0c1754e3a45b2
 * mock地址: https://f2e.dxy.net/mock-api/client/5bc840c5dfd0c1754e3a45b2
 * 接口地址: https://dxcare.cn/clinic/medicine/category
 * 最近修改时间: 2018-11-01 12:30:48
 * 描述: 无
*/
interface IQueryCategoryList1501Payload  {
  ids?: string; // id列表，逗号分割
  bizType?: number; // 分类业务类型,https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  name?: string; // 名称
}
interface IQueryCategoryList1501Response  {
  data: {
    items: {
      id: number; // 分类id
      type: string; // 分类类型
      label: string; // 分类名称
      code: string; // 分类编码
      value: string;
      height: number; // 分类级别
      parentId: number; // 父节点分类
    }[];
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 分类-查询
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba9d918f7baed336bc3e4a4
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba9d918f7baed336bc3e4a4
 * 接口地址: https://dxcare.cn/clinic/medicine/category/:id
 * 最近修改时间: 2018-09-25 14:45:20
 * 描述: 无
*/
interface IGetCategory5854Params  {
  id: number;
}
interface IGetCategory5854Payload  {
  null: string;
}
interface IGetCategory5854Response  {
  data: {
    id: number; // id
    label: string; // 名称
    value: string; // value
    height: number; // 节点高度
    parentId: number; // 父节点id
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 分类-根据业务id查询
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba9d9a5ad2eb33364c6e501
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba9d9a5ad2eb33364c6e501
 * 接口地址: https://dxcare.cn/clinic/medicine/category/getByBizId
 * 最近修改时间: 2018-10-22 14:29:50
 * 描述: 无
*/
interface IGetGetByBizId898cPayload  {
  bizType: number; // 分类业务类型,https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  bizId: number; // 分类业务id（药品id，材料id）
}
interface IGetGetByBizId898cResponse  {
  data: {
    id: number; // id
    label: string; // 名称
    value: string; // value
    height: number; // 节点高度
    parentId: number; // 父节点id
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 分类-直接子分类列表
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba9d67af7baed336bc3e43e
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba9d67af7baed336bc3e43e
 * 接口地址: https://dxcare.cn/clinic/medicine/category/directSubChildren
 * 最近修改时间: 2018-10-08 14:56:09
 * 描述: 无
*/
interface IQueryDirectSubChildrenList5151Payload  {
  bizType: number; // 分类业务类型,https://wiki.dxy.net/pages/editpage.action?pageId=134527991
  parentId: number; // 父节点id,0表示则表示查询的子分类列表为一级分类
}
interface IQueryDirectSubChildrenList5151Response  {
  data: {
    items: {
      id: number; // 分类id
      label: string; // 分类名称
      value: string; // value
      height: number; // 分类级别
      parentId: number; // 父节点分类
    }[];
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 基础中药-列表查询
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b23239fe1540c84e33782cf
 * mock地址: https://f2e.dxy.net/mock-api/client/5b23239fe1540c84e33782cf
 * 接口地址: https://dxcare.cn/clinic/medicine/baseChineseMedcine
 * 最近修改时间: 2018-08-02 14:25:35
 * 描述: 无
*/
interface IQueryBaseChineseMedcineLista637Payload  {
  nameOrBarcode?: string; // 处方名或条形码
  category?: number; // 分类
  ids?: string; // id列表，逗号分割
  status?: number; // 状态
  enablePage?: number; // 默认true
  pageNo?: number;
  pageSize?: number;
}
interface IQueryBaseChineseMedcineLista637Response  {
  data: {
    items: {
      allowDiscount: boolean; // 是否允许折扣
      approvalNo: string; // 国药准字
      barcode: string; // 条形码
      category: number; // 分类
      clinicId: number; // 诊所id
      createTime: string; // 创建时间
      creator: number; // 创建者id
      defaultCostPrice: number; // 成本价
      defaultSingleDoseUnit: number; // 单次剂量单位
      defaultSingleDoseUnitName: string; // 单次剂量单位名
      defaultFrequency: number; // 频率
      defaultFrequencyName: string; // 频率名
      defaultTakingMedicinePlace: number; // 默认取药地点，0，本院，1外购，2代购
      defaultTakingMedicineWarehouseId: number; // 取药仓库id
      defaultUsage: number; // 默认用法
      defaultUsageName: string; // 默认用法名
      deleted: boolean;
      dosageForm: number; // 剂型
      dosageFormName: string; // 剂型名
      englishName: string; // 英文名
      genericName: string; // 通用名
      genericNameInitial: string; // 通用名首字母
      id: number;
      manufacturer: string; // 生产厂家
      modifier: number; // 修改者id
      modifyTime: string; // 修改时间
      name: string; // 名称
      nameInitial: string; // 名称首字母
      orgId: number; // 机构id
      packingUnit: number; // 包装单位
      packingUnitName: string; // 包装单位名
      pinyinCode: string; // 拼音码
      batchNo: string; // 生产批号
      retailPrice: number; // 零售价
      salesLimitNum: number; // 销售限制数目
      sepcification: string; // 规格
      status: number; // 状态，1，有效，0，无效
      storageWarnNum: number; // 库存预警数
      usageNotes: string; // 用法
      validityWarnDays: number; // 有效期预警天数
    }[];
    pageBean: {
      pageNo: number;
      pageSize: number;
      totalCount: number;
    };
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 基础西药-列表查询
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b41ccc16e5a13436f4578c2
 * mock地址: https://f2e.dxy.net/mock-api/client/5b41ccc16e5a13436f4578c2
 * 接口地址: https://dxcare.cn/clinic/medicine/baseWesternMedcine
 * 最近修改时间: 2018-07-20 17:52:32
 * 描述: 无
*/
interface IQueryBaseWesternMedcineListfc05Payload  {
  nameOrBarcode?: string; // 处方名或条形码
  status?: number; // 状态
  ids?: string; // id列表，逗号分割
  enablePage?: boolean; // 默认true
  pageNo?: number;
  pageSize?: number;
}
interface IQueryBaseWesternMedcineListfc05Response  {
  data: {
    items: {
      allowDiscount: boolean; // 是否允许折扣
      allowSubpackage: boolean; // 是否允许拆零
      approvalNo: string; // 国药准字
      barcode: string; // 条形码
      category: number; // 分类
      categoryName: string; // 分类名
      clinicId: number; // 诊所id
      createTime: string; // 创建时间
      creator: number; // 创建者id
      defaultCostPrice: number; // 默认成本价
      defaultFrequency: number; // 默认频次
      defaultFrequencyName: string; // 默认频次名称
      defaultSingleDose: number; // 单次剂量
      defaultSingleDoseUnit: number; // 单次剂量单位
      defaultSingleDoseUnitName: string; // 单次剂量单位名
      defaultTakingMedicinePlace: number; // 默认取药地点0本院，1外购，2代购
      defaultTakingMedicineWarehouseId: number; // 默认取药仓库id
      defaultUsage: number; // 默认用法
      defaultUsageName: string; // 默认用法名称
      dosageForm: number; // 剂型
      dosageFormName: string; // 剂型名称
      englishName: string; // 英文名
      genericName: string; // 通用名
      genericNameInitial: string; // 通用名首字母
      id: number; // id
      manufacturer: string; // 生产厂商
      subpackageDoseUnit: number; // 拆零剂量单位
      subpackageDoseUnitName: string; // 拆零剂量单位名称
      modifier: number; // 修改者id
      modifyTime: string; // 修改时间
      name: string; // 名称
      nameInitial: string; // 名称首字母
      orgId: number; // 机构id
      packageUnit: number; // 包装单位
      packageUnitName: string; // 包装单位名
      pinyinCode: string; // 拼音码
      batchNo: string; // 生产批号
      retailPrice: number; // 零售价
      salesLimitNum: number; // 销售限制数量
      sepcification: string; // 规格
      status: number; // 状态，1有效，0无效
      statusName: string; // 状态名
      storageWarnNum: number; // 库存预警数目
      subpackageUnit: number; // 拆零单位
      subpackageUnitName: string; // 拆零单位名
      subpackagePrice: number; // 拆零单位价格
      usageNotes: string; // 用法说明
      validityWarnDays: number; // 有效期预警天数
    }[];
    pageBean: {
      pageNo: number;
      pageSize: number;
      totalCount: number;
    };
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 库存-可退库存列表
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5c25c7becd2da96e80a2c754
 * mock地址: https://f2e.dxy.net/mock-api/client/5c25c7becd2da96e80a2c754
 * 接口地址: https://dxcare.cn/clinic/medicine/storage/availableReturnStorage
 * 最近修改时间: 2018-12-28 16:46:50
 * 描述: 无
*/
interface IQueryAvailableReturnStorageList6783Payload  {
  bizType: string; // 业务类型，0处方，1医嘱
  bizIds: string; // 业务id列表
}
interface IQueryAvailableReturnStorageList6783Response  {
  returnCode: string; // 响应码
  returnMsg: string; // 响应消息
  data: {
    items: {
      bizId: string; // 处方id/医嘱id
      storages: {
        batchNo: string; // 批号
        storageId: number; // 库存id
        expirationDate: string; // 有效期
        availableReturnCount: number; // 可退数量（拆零）
      }[];
    }[];
  };
}
/*
 * 接口名称: 库存-导出
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b238930ad31f684ea684024
 * mock地址: https://f2e.dxy.net/mock-api/client/5b238930ad31f684ea684024
 * 接口地址: https://dxcare.cn/clinic/medicine/storage/export
 * 最近修改时间: 2018-07-08 17:22:01
 * 描述: 无
*/
interface IGetExport9762Payload  {
  pageNo: string;
  pageSize: string;
  nameOrBarcode: string; // 名称或者条形码
  goodsType: number; // 商品类型，0中药，1西药，2物资
  goodsStatus: number; // 商品状态，1有效，0无效
  remainingNumType: number; // 剩余数量类型，1，大于，2，等于0
  validityStatus: number; // 有效期状态，1达到预警，2，已过期
  storageWarning: boolean; // 库存预警，true：达到预警，false：未达到预警
  supplierIds: string;
}
interface IGetExport9762Response  {
  null: string;
}
/*
 * 接口名称: 库存-批量保存业务项目锁库存数
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b238bdbad31f684ea68402f
 * mock地址: https://f2e.dxy.net/mock-api/client/5b238bdbad31f684ea68402f
 * 接口地址: https://dxcare.cn/clinic/medicine/storage/batchSaveLockedStorageNum
 * 最近修改时间: 2018-12-05 12:32:17
 * 描述: 无
*/
interface IPutBatchSaveLockedStorageNum0d90Payload  {
  items: {
    goodsId: number; // 商品id（药品id/材料id）
    warehouseId: number; // 库房id
    bizId: number; // 业务项目id（处方id/医嘱id/出库订单明细id）
    storageNum: number; // 库存数
  }[];
  bizType: number; // 锁库存业务类型，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  autoReleaseWhenExpired?: boolean; // 过期是否自动释放，默认true
}
interface IPutBatchSaveLockedStorageNum0d90Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 库存-系统建议出库列表查询
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5bbc5211ad2eb33364c71980
 * mock地址: https://f2e.dxy.net/mock-api/client/5bbc5211ad2eb33364c71980
 * 接口地址: https://dxcare.cn/clinic/medicine/storage/getRecommendedTakeOutList
 * 最近修改时间: 2018-12-29 15:36:16
 * 描述: 无
*/
interface IPostGetRecommendedTakeOutList9789Payload  {
  items: {
    itemKey: string; // 业务item标志，比如处方id
    goodsType: number; // 商品类型，0药品，1材料
    goodsId: number; // 商品id（药品id/材料id）
    packageType: number; // 出库包装类型（0整包，1拆零）
    count: number; // 出库数量
  }[];
}
interface IPostGetRecommendedTakeOutList9789Response  {
  data: {
    items: {
      itemKey: string; // 业务项目key，比如处方id
      goodsType: number; // 商品类型，0药品，1材料
      goodsId: number; // 商品id（药品id/材料id）
      storageStatus: number; // 库存状态,https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
      recommendedStorages: {
        id: number; // 库存id
        batchNo: string; // 批号
        expirationDate: string; // 有效期
        validityStatus: number; // 有效期状态
        remainStorage: number; // 剩余库存数
        remainStorageText: string; // 剩余库存数
        takeOutCount: number; // 出库数量
      }[];
    }[];
    pageBean: {
      pageNo: number;
      pageSize: string;
      totalCount: number;
    };
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 库房-修改
 * 作者: 黄进
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b5563cd3c233371826a7c
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b5563cd3c233371826a7c
 * 接口地址: https://dxcare.cn/clinic/medicine/warehouse/:id
 * 最近修改时间: 2018-10-22 15:30:04
 * 描述: 无
*/
interface IPutWarehouse0482Params  {
  id: number;
}
interface IPutWarehouse0482Payload  {
  name?: string; // 仓库名称
  status?: number; // 库房状态，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
}
interface IPutWarehouse0482Response  {
  returnMsg: string;
  returnCode: string;
}
/*
 * 接口名称: 库房-列表
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b2360f41b778d84dd6a11fe
 * mock地址: https://f2e.dxy.net/mock-api/client/5b2360f41b778d84dd6a11fe
 * 接口地址: https://dxcare.cn/clinic/medicine/warehouse
 * 最近修改时间: 2018-10-30 10:21:01
 * 描述: 无
*/
interface IQueryWarehouseListee28Payload  {
  status?: string; // 库房状态，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  orders?: string; // 排序，逗号分割，目前支持createTimeAsc
}
interface IQueryWarehouseListee28Response  {
  data: {
    items: {
      name: string; // 仓库名
      id: number; // 仓库id
      status: number; // 状态
      statusText: string; // 状态名
      isDefault: boolean; // 是否默认库房
    }[];
    pageBean: {
      pageNo: number;
      pageSize: number;
      totalCount: number;
    };
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 库房-库存列表
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b238d8be1540c84e337838d
 * mock地址: https://f2e.dxy.net/mock-api/client/5b238d8be1540c84e337838d
 * 接口地址: https://dxcare.cn/clinic/medicine/warehouse/storage
 * 最近修改时间: 2018-10-12 18:25:01
 * 描述: 无
*/
interface IQueryStorageListfedfPayload  {
  goodsType: number; // 商品类型0，药品，1，物资
  goodsId: number; // 商品id
}
interface IQueryStorageListfedfResponse  {
  data: {
    items: {
      id: number; // 仓库id
      name: string; // 仓库名
      storageNum: number; // 库存量
    }[];
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 库房-状态修改
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5bbf21f5f7baed336bc42af0
 * mock地址: https://f2e.dxy.net/mock-api/client/5bbf21f5f7baed336bc42af0
 * 接口地址: https://dxcare.cn/clinic/medicine/warehouse/:id/status
 * 最近修改时间: 2018-10-11 18:13:50
 * 描述: 无
*/
interface IPutStatus8f1aParams  {
  id: number;
}
interface IPutStatus8f1aPayload  {
  status: number; // 库房状态，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
}
interface IPutStatus8f1aResponse  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 库房新增
 * 作者: 黄进
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b2ff2ad2eb33364c6b45c
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b2ff2ad2eb33364c6b45c
 * 接口地址: https://dxcare.cn/clinic/medicine/warehouse
 * 最近修改时间: 2018-09-26 17:48:03
 * 描述: 无
*/
interface IPostWarehouseee28Payload  {
  name: string; // 仓库名称
}
interface IPostWarehouseee28Response  {
  returnMsg: string;
  returnCode: string;
}
/*
 * 接口名称: 库房查看
 * 作者: 黄进
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5bab44f2ad2eb33364c6f387
 * mock地址: https://f2e.dxy.net/mock-api/client/5bab44f2ad2eb33364c6f387
 * 接口地址: https://dxcare.cn/clinic/medicine/warehouse/:id
 * 最近修改时间: 2018-09-26 17:47:01
 * 描述: 无
*/
interface IGetWarehouse0482Params  {
  id: number;
}
interface IGetWarehouse0482Payload  {
  name: string; // 仓库名称
}
interface IGetWarehouse0482Response  {
  returnMsg: string;
  data: {
    id: string; // id
    name: string; // 库房名称
  };
  returnCode: string;
}
/*
 * 接口名称: 材料-修改
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b5d7dcd3c233371826b26
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b5d7dcd3c233371826b26
 * 接口地址: https://dxcare.cn/clinic/medicine/material/:id
 * 最近修改时间: 2018-10-31 15:30:02
 * 描述: 无
*/
interface IPutMaterial72c0Params  {
  id: number;
}
interface IPutMaterial72c0Payload  {
  allowDiscount: boolean; // 是否允许折扣
  internationalCode: string; // 国际编码
  category: number; // 分类
  defaultCostPrice: number; // 成本价
  englishName: string; // 英文名
  manufacturer: string; // 生产厂商
  name: string; // 名称
  pinyinCode: string; // 拼音码
  retailPrice: number; // 零售价
  sepcification: string; // 规格
  storageWarnNum: number; // 库存预警
  status: number; // 状态，1正常，0停用
  unit: number; // 单位
  remark: string; // 备注
  validityWarnDays: number; // 有效期预警天数
}
interface IPutMaterial72c0Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-入库订单-修改
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba0a5fbcd3c233371827fa6
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba0a5fbcd3c233371827fa6
 * 接口地址: https://dxcare.cn/clinic/medicine/material/putInWarehouseOrder/:id
 * 最近修改时间: 2018-10-15 18:32:26
 * 描述: 无
*/
interface IPutPutInWarehouseOrderd32bParams  {
  id: number;
}
interface IPutPutInWarehouseOrderd32bPayload  {
  check?: boolean; // 是否审核默认false
  supplierId: number; // 供应商id
  method: number; // 入库方式
  deliveryDate: string; // 发货日期
  putInDate: string; // 入库日期
  remark: string; // 备注
  details: {
    goodsId: number; // 商品id
    count: number; // 数量
    costPrice: number; // 成本价
    batchNo: string; // 生产批号
    expirationDate: string; // 过期日期
  }[]; // 入库明细
}
interface IPutPutInWarehouseOrderd32bResponse  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-入库订单-列表
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba0a608f7baed336bc3c9ad
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba0a608f7baed336bc3c9ad
 * 接口地址: https://dxcare.cn/clinic/medicine/material/putInWarehouseOrder
 * 最近修改时间: 2018-10-31 16:34:28
 * 描述: 无
*/
interface IQueryPutInWarehouseOrderList31c9Payload  {
  pageNo?: number;
  pageSize?: number;
  goodsType?: number; // 商品类型，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  putInDateStart?: string; // 入库日期开始
  putInDateEnd?: string; // 入库日期结束
  method?: string; // 入库方式
  deliveryDate?: string; // 发货日期
  supplierId?: string; // 供应商id
  id?: string; // id
  checkStatus?: string; // 审核状态
}
interface IQueryPutInWarehouseOrderList31c9Response  {
  data: {
    items: {
      checkStatus: number; // 审核状态
      checkStatusName: string; // 审核状态名
      checkTime: string; // 审核时间
      checkerId: number; // 审核人id
      checkerName: string; // 审核人
      clinicId: number; // 诊所ID
      createTime: string; // 创建时间
      creator: number; // 创建者id
      creatorName: string; // 创建者名称（制单人名称）
      deliveryDate: string; // 发货日期
      id: number; // 单号id
      method: number; // 入库方式
      methodName: string; // 入库方式名
      modifer: number; // 修改者id
      modiferName: string; // 修改者
      modifyTime: string;
      orgId: number;
      putInDate: string; // 入库日期
      remark: string;
      supplierId: number; // 供应商id
      supplierName: string; // 供应商
      warehouseId: number; // 仓库id
      warehouseName: string; // 仓库
    }[];
    pageBean: {
      pageNo: number;
      pageSize: number;
      totalCount: number;
    };
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-入库订单-删除
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba388eecd3c233371828fdc
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba388eecd3c233371828fdc
 * 接口地址: https://dxcare.cn/clinic/medicine/material/putInWarehouseOrder/:id
 * 最近修改时间: 2018-09-20 19:48:20
 * 描述: 无
*/
interface IDeletePutInWarehouseOrderd32bParams  {
  id: number;
}
interface IDeletePutInWarehouseOrderd32bPayload  {
  null: string;
}
interface IDeletePutInWarehouseOrderd32bResponse  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-入库订单-审核
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba0a5f40181fb3363cc9198
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba0a5f40181fb3363cc9198
 * 接口地址: https://dxcare.cn/clinic/medicine/material/putInWarehouseOrder/:id/check
 * 最近修改时间: 2018-09-18 15:17:03
 * 描述: 无
*/
interface IPostCheck9a8aParams  {
  id: number;
}
interface IPostCheck9a8aPayload  {
  null: string;
}
interface IPostCheck9a8aResponse  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-入库订单-新增
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba0a600f7baed336bc3c9aa
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba0a600f7baed336bc3c9aa
 * 接口地址: https://dxcare.cn/clinic/medicine/material/putInWarehouseOrder
 * 最近修改时间: 2018-10-15 18:32:05
 * 描述: 无
*/
interface IPostPutInWarehouseOrder31c9Payload  {
  check?: boolean; // 是否审核，默认false
  supplierId?: number; // 供应商id
  method: number; // 出库方式
  deliveryDate?: string; // 发货日期
  putInDate: string; // 入库日期
  remark?: string; // 备注
  details: {
    goodsId: number; // 商品id
    count: number; // 数量
    costPrice: number; // 成本价
    batchNo: string; // 生产批号
    expirationDate: string; // 过期日期
  }[]; // 明细列表
}
interface IPostPutInWarehouseOrder31c9Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-入库订单-查询
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba0a605ad2eb33364c6c9f7
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba0a605ad2eb33364c6c9f7
 * 接口地址: https://dxcare.cn/clinic/medicine/material/putInWarehouseOrder/:id
 * 最近修改时间: 2019-01-17 15:51:17
 * 描述: 无
*/
interface IGetPutInWarehouseOrderd32bParams  {
  id: number;
}
interface IGetPutInWarehouseOrderd32bPayload  {
  null: string;
}
interface IGetPutInWarehouseOrderd32bResponse  {
  data: {
    checkStatus: number; // 审核状态，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
    checkStatusName: string;
    checkTime: string;
    checkerId: number;
    checkerName: string;
    clinicId: number;
    createTime: string; // 年月日时分秒
    creator: number;
    creatorName: string;
    deliveryDate: string; // 发货日期
    id: number;
    method: number; // 入库方式
    methodName: string;
    modifer: number;
    modiferName: string;
    modifyTime: string;
    orgId: number;
    putInDate: string; // 入库日期
    remark: string; // 备注
    supplierId: number; // 供应商id
    supplierName: string;
    warehouseId: number; // 库房id
    warehouseName: string;
    details: {
      goodsId: number;
      goodsType: number;
      goodsName: string; // 商品名
      goodsSpecification: string; // 规格
      goodsRetailPrice: string; // 零售价
      goodsManufacturer: string; // 生产产商
      count: number; // 数量
      costPrice: number; // 成本价
      batchNo: string; // 批号
      lastPutInDate: string; // 库存最近入库日期
      expirationDate: string; // 有效日期
      packageType: number; // 包装类型，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
      unit: number; // 单位
      unitName: string;
      goodsBarcode: string; // 条形码
      remainStorageText: string; // 账面数量
    }[];
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-入库订单打印-查询
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ca32aedb802126202fbaa37
 * mock地址: https://f2e.dxy.net/mock-api/client/5ca32aedb802126202fbaa37
 * 接口地址: https://dxcare.cn/clinic/medicine/material/putInWarehouseOrder/:id/forPrint
 * 最近修改时间: 2019-04-12 16:26:06
 * 描述: 无
*/
interface IGetForPrint12daParams  {
  id: number;
}
interface IGetForPrint12daPayload  {
  null: string;
}
interface IGetForPrint12daResponse  {
  data?: {
    checkDate?: string; // 审核日期
    checkerName?: string; // 审核人
    checkerSignatureImage?: string; // 审核人签名图片
    createDate?: string; // 制单日期
    creatorName?: string; // 制单人
    creatorNameSignatureImage?: string; // 制单人签名
    deliveryDate?: string; // 发货日期
    putInId?: number; // 入库单号
    putInMethodName?: string; // 入库方式
    putInDate?: string; // 入库日期
    supplierName?: string; // 供应商
    warehouseName?: string; // 入库库房
    costPriceTotal?: number; // 成本合计
    remark?: string;
    details?: {
      name?: string; // 商品名
      specification?: string; // 规格
      manufacturer?: string; // 生产产商
      count?: number; // 数量
      costPrice?: number; // 成本价
      retailPrice?: number; // 零售价
      batchNo?: string; // 批号
      expirationDate?: string; // 有效日期
      unitName?: string; // 单位
    }[];
  };
  returnCode?: string;
  returnMsg?: string;
}
/*
 * 接口名称: 材料-出库订单-修改
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba0a6e5ad2eb33364c6ca10
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba0a6e5ad2eb33364c6ca10
 * 接口地址: https://dxcare.cn/clinic/medicine/material/takeOutWarehouseOrder/:id
 * 最近修改时间: 2018-10-15 18:32:59
 * 描述: 无
*/
interface IPutTakeOutWarehouseOrder9ee5Params  {
  id: number;
}
interface IPutTakeOutWarehouseOrder9ee5Payload  {
  check?: boolean; // 是否审核，默认false，新增并审核的时候传true
  method: number; // 出库方式
  applicant?: number; // 领用人员id
  takeOutDate: string; // 出库日期
  departmentId?: number; // 出库科室id
  remark?: string; // 备注
  details: {
    storageId: number; // 库存id
    count: number; // 数量
  }[]; // 明细列表
}
interface IPutTakeOutWarehouseOrder9ee5Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-出库订单-列表
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba0a6eccd3c233371827fc3
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba0a6eccd3c233371827fc3
 * 接口地址: https://dxcare.cn/clinic/medicine/material/takeOutWarehouseOrder
 * 最近修改时间: 2019-04-12 16:32:41
 * 描述: 无
*/
interface IQueryTakeOutWarehouseOrderList503cPayload  {
  pageNo?: string;
  pageSize?: string;
  goodsType?: string; // 商品类型，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  takeOutDateStart?: string; // 出库日期开始
  takeOutDateEnd?: string; // 出库日期结束
  method?: string; // 出库方式，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  id?: string; // 出库单号（出库订单id）
  checkStatus?: string; // 状态（出库审核状态）https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
}
interface IQueryTakeOutWarehouseOrderList503cResponse  {
  data: {
    items: {
      checkStatus: number; // 审核状态
      checkStatusName: string; // 审核状态名称
      applicant?: number; // 申请人id
      applicantName?: string; // 申请人名称
      requestSource?: number; // 请求来源，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
      requestSourceName?: string; // 请求来源名称
      requestNo?: string; // 请求流水号，非必填，门诊发药出库的时候需要填写
      checkTime: string; // 审核时间
      checkerId: number; // 审核人id
      checkerName: string; // 审核人
      createTime: string; // 创建时间
      creator: number; // 创建者id
      creatorName: string; // 创建者名称（制单人名称）
      id: number; // 单号id
      method: number; // 出库方式
      methodName: string; // 出库方式名
      modifer: number; // 修改者id
      modiferName: string; // 修改者
      modifyTime: string; // 修改时间
      takeOutDate: string; // 出库日期
      remark: string; // 备注
      warehouseId: number; // 库房id
      warehouseName: string; // 库房名称
      departmentId: number; // 领用科室id
      departmentName: string; // 领用科室名称
    }[];
    pageBean: {
      pageNo: number;
      pageSize: number;
      totalCount: number;
    };
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-出库订单-删除
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba388c8ad2eb33364c6da1d
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba388c8ad2eb33364c6da1d
 * 接口地址: https://dxcare.cn/clinic/medicine/material/takeOutWarehouseOrder/:id
 * 最近修改时间: 2018-09-20 19:47:43
 * 描述: 无
*/
interface IDeleteTakeOutWarehouseOrder9ee5Params  {
  id: number;
}
interface IDeleteTakeOutWarehouseOrder9ee5Payload  {
  null: string;
}
interface IDeleteTakeOutWarehouseOrder9ee5Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-出库订单-审核
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba0a6e80181fb3363cc91b2
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba0a6e80181fb3363cc91b2
 * 接口地址: https://dxcare.cn/clinic/medicine/material/takeOutWarehouseOrder/:id/check
 * 最近修改时间: 2018-09-18 15:20:28
 * 描述: 无
*/
interface IPostChecke127Params  {
  id: number;
}
interface IPostChecke127Payload  {
  null: string;
}
interface IPostChecke127Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-出库订单-新增
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba0a6dc0181fb3363cc91b0
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba0a6dc0181fb3363cc91b0
 * 接口地址: https://dxcare.cn/clinic/medicine/material/takeOutWarehouseOrder
 * 最近修改时间: 2018-10-15 18:31:35
 * 描述: 无
*/
interface IPostTakeOutWarehouseOrder503cPayload  {
  check?: boolean; // 是否审核，默认false，新增并审核的时候传true
  method: number; // 出库方式
  applicant?: number; // 领用人员id
  takeOutDate: string; // 出库日期
  departmentId?: number; // 出库科室id
  remark?: string; // 备注
  details: {
    storageId: number; // 库存id
    count: number; // 数量
  }[]; // 明细列表
}
interface IPostTakeOutWarehouseOrder503cResponse  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-出库订单-查询
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba0a6eacd3c233371827fc2
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba0a6eacd3c233371827fc2
 * 接口地址: https://dxcare.cn/clinic/medicine/material/takeOutWarehouseOrder/:id
 * 最近修改时间: 2019-04-02 17:59:07
 * 描述: 无
*/
interface IGetTakeOutWarehouseOrder9ee5Params  {
  id: number;
}
interface IGetTakeOutWarehouseOrder9ee5Payload  {
  null: string;
}
interface IGetTakeOutWarehouseOrder9ee5Response  {
  data: {
    checkStatus: number; // 审核状态
    checkStatusName: string;
    applicant: number; // 申请人id
    applicantName: string;
    requestSource: number; // 请求来源
    requestSourceName: string; // 请求来源名
    requestNo: string; // 请求流水号
    checkTime: string; // 审核日期：年月日
    checkerId: number; // 审核人id
    checkerName: string; // 审核人名称
    createTime: string; // 年月日时分秒
    creator: number;
    creatorName: string;
    id: number;
    method: number; // 出库方式
    methodName: string; // 出库方式名
    modifer: number;
    modiferName: string;
    modifyTime: string;
    takeOutDate: string; // 出库日期
    remark: string; // 备注
    warehouseId: number; // 库房id
    warehouseName: string; // 库房名
    departmentId: string; // 科室id
    departmentName: string; // 科室名
    details: {
      goodsId: number; // 商品id
      storageId: number; // 库存id
      goodsType: number; // 商品类型
      goodsName: string; // 商品名
      goodsSpecification: string; // 规格
      goodsGenericName: string; // 通用名
      goodsStatus: number; // 商品状态
      goodsRetailPrice: string; // 零售价
      goodsManufacturer: string; // 生产产商
      supplierName: string; // 供应商
      count: number; // 出库数量
      costPrice: number; // 成本价
      batchNo: string; // 批号
      expirationDate: string; // 过期日期
      packageType: number; // 包装类型
      unit: number; // 单位id
      unitName: string; // 单位名
      goodsBarcode: string; // 条形码
      availableStorageText: string; // 可用库存数量(=真实库存-锁定库存）
      lastPutInDate: string; // 最近的入库日期
      validityStatus: number; // 有效期状态，1达到预警，2，已过期
    }[];
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-出库订单打印-查询
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ca3327fb802126202fbaa91
 * mock地址: https://f2e.dxy.net/mock-api/client/5ca3327fb802126202fbaa91
 * 接口地址: https://dxcare.cn/clinic/medicine/material/takeOutWarehouseOrder/:id/forPrint
 * 最近修改时间: 2019-04-12 16:26:21
 * 描述: 无
*/
interface IGetForPrintb98fParams  {
  id: number;
}
interface IGetForPrintb98fPayload  {
  null: string;
}
interface IGetForPrintb98fResponse  {
  data?: {
    applicantName?: string; // 领用人员
    checkDate?: string; // 审核日期：年月日
    checkerName?: string; // 审核人名称
    createDate?: string; // 制单日期
    creatorName?: string; // 制单人
    takeoutId?: number; // 出库单号
    takeoutMethodName?: string; // 出库方式名
    takeoutDate?: string; // 出库日期
    remark?: string; // 备注
    warehouseName?: string; // 出库库房
    departmentName?: string; // 领用科室
    costPriceTotal?: number; // 成本合计
    details?: {
      name?: string; // 商品名
      specification?: string; // 规格
      genericName?: string; // 通用名
      retailPrice?: string; // 零售价
      manufacturer?: string; // 生产产商
      count?: number; // 数量
      costPrice?: number; // 成本价
      batchNo?: string; // 批号
      expirationDate?: string; // 有效期
      unitName?: string; // 单位
    }[];
  };
  returnCode?: string;
  returnMsg?: string;
}
/*
 * 接口名称: 材料-列表
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b652dcd3c233371826c1b
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b652dcd3c233371826c1b
 * 接口地址: https://dxcare.cn/clinic/medicine/material
 * 最近修改时间: 2018-11-23 14:34:22
 * 描述: 无
*/
interface IQueryMaterialList4e09Payload  {
  keyword?: string; // 名称或条形码
  status?: string; // 状态，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  ids?: string; // id列表，逗号分割
  category?: string; // 分类id
  withStorage?: string; // 是否查询库存，默认false
  pageNo?: string;
  pageSize?: string;
  pageEnable?: string; // 默认true
}
interface IQueryMaterialList4e09Response  {
  data: {
    items: {
      allowDiscount: boolean; // 是否允许折扣
      internationalCode: string; // 国际编码
      category: number; // 分类
      categoryName: string; // 分类名
      clinicId: number; // 诊所id
      createTime: string; // 创建时间
      creator: number; // 创建者id
      defaultCostPrice: number; // 默认成本价
      englishName: string; // 英文名
      id: number; // id
      manufacturer: string; // 生产厂商
      modifier: number; // 修改者id
      modifyTime: string; // 修改时间
      name: string; // 名称（商品名/材料名称）
      nameInitial: string; // 名称首字母（商品名首字母）
      orgId: number; // 机构id
      pinyinCode: string; // 拼音码
      retailPrice: number; // 零售价
      specification: string; // 规格
      status: number; // 状态，1有效，0无效
      statusName: string; // 状态名
      storageWarnNum: number; // 库存预警数目
      validityWarnDays: number; // 有效期预警天数
      validityStatus: string; // 有效期状态
      remark: string; // 备注
      unit: number; // 单位，https://wiki.dxy.net/pages/viewpage.action?pageId=127931941
      unitName: string; // 单位名
      storageNum: number; // 库存数
    }[];
    pageBean: {
      pageNo: number;
      pageSize: number;
      totalCount: number;
    };
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-删除
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba38abf0181fb3363cca1dc
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba38abf0181fb3363cca1dc
 * 接口地址: https://dxcare.cn/clinic/medicine/material/:id
 * 最近修改时间: 2018-09-20 19:56:12
 * 描述: 无
*/
interface IDeleteMaterial72c0Params  {
  id: number;
}
interface IDeleteMaterial72c0Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-库存-列表
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba0af63cd3c233371828080
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba0af63cd3c233371828080
 * 接口地址: https://dxcare.cn/clinic/medicine/material/storage
 * 最近修改时间: 2019-03-12 16:25:36
 * 描述: 无
*/
interface IQueryStorageList0d3fPayload  {
  pageNo?: string;
  pageSize?: string;
  keyword?: string; // 名称或者条形码
  goodsStatus?: string; // 状态1，有效，0无效
  remainingNumType?: string; // 剩余数量类型，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  validityStatus?: string; // 有效期状态，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  storageWarning?: string; // 库存预警，true：达到预警，false：未达到预警
  supplierIds?: string; // 供应商id列表，逗号分割
  category?: string; // 分类
  goodsId?: string; // 商品id
  orders?: string; // 排序参数（逗号分割），目前只支持idDesc,lastPutInDateAsc
}
interface IQueryStorageList0d3fResponse  {
  data: {
    items: {
      goodsName: string; // 商品名 
      goodsId: number; // 商品id
      goodsSpecification: string; // 商品规格
      goodsBarcode: string; // 条形码
      goodsManufacturer: string; // 商品生产厂家
      supplierName: string; // 供应商
      goodsStatus: string; // 商品状态
      goodsStatusName: string; // 商品状态名
      goodsRetailPrice: string; // 商品零售价
      costPrice: string; // 成本价
      expirationDate: string; // 有效期
      id: number; // 库存id
      batchNo: string; // 批号
      validityStatus: number; // 有效期状态，1达到预警，2，已过期
      storageWarning: boolean; // 库存预警，true：达到预警，false：未达到预警
      remainStorageText: string; // 剩余库存数量（账面数量）
      realSubpackageCount: string; // 库存数量
      availableStorageText: string; // 可用库存数量(=真实库存-锁定库存）
      availableStorage: number; // 可用库存数量（拆零）
      goodsCategoryName: string; // 分类名
      lastPutInDate: string; // 最近入库日期
      goodsUnitName: string; // 单位名
      goodsUnit: number; // 单位
    }[];
    pageBean: {
      pageNo: number;
      pageSize: string;
      totalCount: number;
    };
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-库存-列表(按商品）
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9e64b00181fb3363cc8173
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9e64b00181fb3363cc8173
 * 接口地址: https://dxcare.cn/clinic/medicine/material/storageByGoods
 * 最近修改时间: 2018-09-29 16:08:59
 * 描述: 无
*/
interface IQueryStorageByGoodsList608bPayload  {
  goodsStatus?: string; // 状态，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  storageWarning?: string; // 库存预警，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  keyword?: string; // 名称或者条形码
  remainingNumType?: string; // 剩余数量类型，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  goodsCategory?: string; // 分类
}
interface IQueryStorageByGoodsList608bResponse  {
  data: {
    items: {
      id: number; // id
      name: string; // 商品名称
      supplierName: string; // 供应商名
      retailPrice: number; // 零售价
      specification: string; // 规格
      manufacturer: string; // 生产厂家
      storageNum: number; // 库存数量
      storageUnitName: string; // 库存单位名
      remainStorageText: string; // 剩余数量
      categoryName: string; // 分类名
    }[];
    pageBean: {
      pageNo: number;
      pageSize: number;
      totalCount: number;
    };
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-库存列表-导出
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba0ac93f7baed336bc3ca47
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba0ac93f7baed336bc3ca47
 * 接口地址: https://dxcare.cn/clinic/medicine/material/storage/export
 * 最近修改时间: 2018-09-18 20:09:47
 * 描述: 无
*/
interface IGetExporta3e3Payload  {
  supplier: number;
  goodsStatus: number;
  storageWarning: boolean; // 库存预警,https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  key: string; // 名称或者条形码
}
interface IGetExporta3e3Response  {
  null: string;
}
/*
 * 接口名称: 材料-库存盘点-修改
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba0a89ef7baed336bc3c9f4
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba0a89ef7baed336bc3c9f4
 * 接口地址: https://dxcare.cn/clinic/medicine/material/storageCorrectOrder/:id
 * 最近修改时间: 2018-09-18 20:07:32
 * 描述: 无
*/
interface IPutStorageCorrectOrder8455Params  {
  id: number;
}
interface IPutStorageCorrectOrder8455Payload  {
  details: {
    storageId: number; // 库存id
    realCount: number; // 实际数量
    packageType?: number; // 包装类型，材料库存盘点不需要填写，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
    unit: number; // 包装单位
  }[]; // 明细列表
  check?: boolean; // 是否审核，默认false，新增并审核的时候传true
}
interface IPutStorageCorrectOrder8455Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-库存盘点-列表
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba0a8960181fb3363cc91e0
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba0a8960181fb3363cc91e0
 * 接口地址: https://dxcare.cn/clinic/medicine/material/storageCorrectOrder
 * 最近修改时间: 2018-10-31 16:35:44
 * 描述: 无
*/
interface IQueryStorageCorrectOrderList48caPayload  {
  pageNo?: string;
  pageSize?: string;
  createDateStart?: string; // 制单日期开始
  createDateEnd?: string; // 制单日期结束
  id?: string; // 盘点单号（盘点订单id）
  checkStatus?: string; // 状态（盘点审核状态）https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
}
interface IQueryStorageCorrectOrderList48caResponse  {
  data: {
    items: {
      checkStatus: number; // 审核状态
      checkStatusName: string; // 审核状态名称
      checkTime: string; // 审核时间
      checkerId: number; // 审核人id
      checkerName: string; // 审核人
      createDate: string; // 制单日期
      createTime: string; // 创建时间
      creator: number; // 创建者id
      creatorName: string; // 创建者名称（制单人名称）
      id: number; // 单号id
      modifer: number; // 修改者id
      modiferName: string; // 修改者
      modifyTime: string; // 修改时间
      warehouseId: number; // 库房id
      warehouseName: string; // 库房名称
    }[];
    pageBean: {
      pageNo: number;
      pageSize: number;
      totalCount: number;
    };
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-库存盘点-删除
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba38947ad2eb33364c6da23
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba38947ad2eb33364c6da23
 * 接口地址: https://dxcare.cn/clinic/medicine/material/storageCorrectOrder/:id
 * 最近修改时间: 2018-09-20 19:49:47
 * 描述: 无
*/
interface IDeleteStorageCorrectOrder8455Params  {
  id: number;
}
interface IDeleteStorageCorrectOrder8455Payload  {
  null: string;
}
interface IDeleteStorageCorrectOrder8455Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-库存盘点-审核
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba0a894cd3c233371827ff3
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba0a894cd3c233371827ff3
 * 接口地址: https://dxcare.cn/clinic/medicine/material/storageCorrectOrder/:id/check
 * 最近修改时间: 2018-09-18 15:28:02
 * 描述: 无
*/
interface IPostCheckb986Params  {
  id: number;
}
interface IPostCheckb986Payload  {
  null: string;
}
interface IPostCheckb986Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-库存盘点-新增
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba0a8990181fb3363cc91e2
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba0a8990181fb3363cc91e2
 * 接口地址: https://dxcare.cn/clinic/medicine/material/storageCorrectOrder
 * 最近修改时间: 2018-10-18 16:35:50
 * 描述: 无
*/
interface IPostStorageCorrectOrder48caPayload  {
  details: {
    storageId: number; // 库存id
    realCount: number; // 实际数量
  }[]; // 明细列表
  check?: boolean; // 是否审核，默认false，新增并审核的时候传true
}
interface IPostStorageCorrectOrder48caResponse  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-库存盘点-明细-列表
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5bc82d3feb2aa07544c1d0e1
 * mock地址: https://f2e.dxy.net/mock-api/client/5bc82d3feb2aa07544c1d0e1
 * 接口地址: https://dxcare.cn/clinic/medicine/material/storageCorrectOrder/:id/detail
 * 最近修改时间: 2019-02-18 11:43:35
 * 描述: 无
*/
interface IQueryDetailList058bParams  {
  id: number;
}
interface IQueryDetailList058bPayload  {
  pageNo?: string;
  pageSize?: string;
  keyword?: string; // 关键字，商品名称/条形码
  category?: string; // 药品分类
}
interface IQueryDetailList058bResponse  {
  data: {
    items: {
      storageId: number; // 库存id
      goodsId: number; // 商品id
      goodsName: string; // 商品名
      goodsSpecification: string; // 商品规格
      goodsStatus: number; // 商品状态
      goodsStatusName: string; // 商品状态名
      goodsBarcode: string; // 商品条形码
      batchNo: string; // 批号
      goodsManufacturer: string; // 生产产商
      supplierId: number; // 供应商id
      supplierName: string; // 供应商名称
      expirationDate: string; // 过期日期
      validityStatus: number; // 有效期状态，1达到预警，2，已过期
      profitAndLoss: string; // 盘亏盘盈
      realCount: number; // 实际数量
      packageType: number;
      unit: number; // 单位
      unitName: string; // 单位名称
      remainStorageText: string; // 账面数量
    }[];
    pageBean: {
      pageNo: number;
      pageSize: number;
      totalCount: number;
    };
    orderInfo: {
      checkStatus: number;
      checkStatusName: string;
      checkTime: string;
      checkerId: number;
      checkerName: string;
      createTime: string;
      createDate: string;
      creator: number;
      creatorName: string;
      id: number;
      modifier: string;
      modiferName: string;
      modifyTime: string;
    };
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-库存盘点-查询
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba0a88d0181fb3363cc91de
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba0a88d0181fb3363cc91de
 * 接口地址: https://dxcare.cn/clinic/medicine/material/storageCorrectOrder/:id
 * 最近修改时间: 2018-09-29 19:42:39
 * 描述: 无
*/
interface IGetStorageCorrectOrder8455Params  {
  id: number;
}
interface IGetStorageCorrectOrder8455Payload  {
  null: string;
}
interface IGetStorageCorrectOrder8455Response  {
  data: {
    checkStatus: number; // 审核状态
    checkStatusName: string; // 审核状态名称
    checkTime: string; // 审核时间，年月日
    checkerId: number; // 制单人id
    checkerName: string; // 制单人名称
    createTime: string; // 制单时间
    createDate: string; // 制单日期
    creator: number; // 制单人id
    creatorName: string; // 制单人名称
    id: number; // 单号/id
    modifier: string; // 修改人id
    modiferName: string; // 修改人名称
    modifyTime: string; // 修改时间
    details: {
      storageId: number; // 库存id
      goodsId: number; // 商品id
      goodsName: string; // 商品名
      goodsSpecification: string; // 商品规格
      goodsStatus: number; // 商品状态
      goodsStatusName: string; // 商品状态名
      goodsBarcode: string; // 商品条形码
      batchNo: string; // 批号
      goodsManufacturer: string; // 生产产商
      supplierId: number; // 供应商id
      supplierName: string; // 供应商名称
      expirationDate: string; // 过期日期
      validityStatus: number; // 有效期状态，1达到预警，2，已过期
      profitAndLoss: string; // 盘亏盘盈
      realCount: number; // 实际数量
      packageType: number;
      unit: number; // 单位
      unitName: string; // 单位名称
      remainStorageText: string; // 账面数量
    }[];
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-新增
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b58820181fb3363cc7cad
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b58820181fb3363cc7cad
 * 接口地址: https://dxcare.cn/clinic/medicine/material
 * 最近修改时间: 2018-10-31 15:29:04
 * 描述: 无
*/
interface IPostMaterial4e09Payload  {
  allowDiscount: boolean; // 是否允许折扣
  internationalCode: string; // 国际编码
  category: number; // 分类
  defaultCostPrice: number; // 成本价
  englishName: string; // 英文名
  manufacturer: string; // 生产厂商
  name: string; // 名称
  pinyinCode: string; // 拼音码
  retailPrice: number; // 零售价
  specification: string; // 规格
  storageWarnNum: number; // 库存预警
  status: number; // 状态，1正常，0停用
  remark: string; // 备注
  unit: number; // 单位,https://wiki.dxy.net/pages/viewpage.action?pageId=127931941
  validityWarnDays: number; // 有效期预警天数
}
interface IPostMaterial4e09Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-查询
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b69e1ad2eb33364c6b78e
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b69e1ad2eb33364c6b78e
 * 接口地址: https://dxcare.cn/clinic/medicine/material/:id
 * 最近修改时间: 2018-10-31 15:29:29
 * 描述: 无
*/
interface IGetMaterial72c0Params  {
  id: number;
}
interface IGetMaterial72c0Response  {
  returnCode: string;
  returnMsg: string;
  data: {
    allowDiscount: boolean; // 是否允许折扣
    internationalCode: string; // 国际编码
    category: number; // 分类
    categoryName: string; // 分类名
    clinicId: number; // 诊所id
    createTime: string;
    creator: number;
    defaultCostPrice: number; // 成本价
    englishName: string; // 英文名
    id: number;
    manufacturer: string; // 生产厂商
    modifier: number;
    modifyTime: string;
    name: string; // 名称（材料名称/商品名）
    nameInitial: string; // 名称首字母
    orgId: number; // 机构id
    pinyinCode: string; // 拼音码
    batchNo: string; // 批号
    retailPrice: number; // 零售价
    specification: string; // 规格
    status: number; // 状态
    statusName: string; // 状态名称
    storageWarnNum: string; // 库存预警
    validityWarnDays: number; // 有效期预警天数
    remark: string; // 备注
    unit: number; // 单位
    unitName: string; // 单位名
  };
}
/*
 * 接口名称: 材料-状态修改
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b70e2f7baed336bc3b7c4
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b70e2f7baed336bc3b7c4
 * 接口地址: https://dxcare.cn/clinic/medicine/material/:id/status
 * 最近修改时间: 2018-09-14 16:27:57
 * 描述: 无
*/
interface IPutStatus89d5Params  {
  id: number;
}
interface IPutStatus89d5Payload  {
  status: number;
}
interface IPutStatus89d5Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-自动入库-新增
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5bfe5516f28127b5ab726803
 * mock地址: https://f2e.dxy.net/mock-api/client/5bfe5516f28127b5ab726803
 * 接口地址: https://dxcare.cn/clinic/medicine/material/autoPutIn
 * 最近修改时间: 2018-11-30 15:55:08
 * 描述: 无
*/
interface IPostAutoPutIn3117Payload  {
  method: number; // 入库方式(26, "自动入库"),https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  deliveryDate?: string; // 发货日期
  putInDate: string; // 入库日期
  remark?: string; // 备注
  details: {
    goodsId: number; // 商品id
    bizId: number; // 处方id/医嘱id
    count: number; // 数量
  }[]; // 明细列表
}
interface IPostAutoPutIn3117Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-自动出库-新增
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5bfe4b8e906fecb5a635ddae
 * mock地址: https://f2e.dxy.net/mock-api/client/5bfe4b8e906fecb5a635ddae
 * 接口地址: https://dxcare.cn/clinic/medicine/material/autoTakeOut
 * 最近修改时间: 2018-11-30 15:23:32
 * 描述: 无
*/
interface IPostAutoTakeOutdc5dPayload  {
  method: number; // 出库方式，26自动出库
  applicant?: number; // 领用人员id
  takeOutDate: string; // 出库日期
  departmentId?: number; // 出库科室id
  remark?: string; // 备注
  details: {
    count: number; // 数量
    bizId: number; // 业务id（处方id/医嘱id）
    goodsId: number; // 商品id
    unit: number; // 单位
  }[]; // 明细列表
}
interface IPostAutoTakeOutdc5dResponse  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-零售订单-取消
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5c6161623d44c4502b05fe8b
 * mock地址: https://f2e.dxy.net/mock-api/client/5c6161623d44c4502b05fe8b
 * 接口地址: https://dxcare.cn/clinic/medicine/material/retailOrder/:id/cancel
 * 最近修改时间: 2019-02-11 19:50:16
 * 描述: 无
*/
interface IPostCancelb213Params  {
  id: number;
}
interface IPostCancelb213Payload  {
  null: string;
}
interface IPostCancelb213Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料-零售订单-新增
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5c61618197ffdf502cca444d
 * mock地址: https://f2e.dxy.net/mock-api/client/5c61618197ffdf502cca444d
 * 接口地址: https://dxcare.cn/clinic/medicine/material/retailOrder
 * 最近修改时间: 2019-03-15 19:09:29
 * 描述: 无
*/
interface IPostRetailOrdercf90Payload  {
  details: {
    goodsId: number; // 商品id
    storageId: number; // 库存id
    count: number; // 数量
  }[]; // 明细列表
  patientInfo: {
    patientId: number; // 病人id
    name: string; // 名称
    birthday: string; // 生日
    mobile: string; // 手机号
    gender: number; // 性别，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  }; // 病人信息
}
interface IPostRetailOrdercf90Response  {
  returnCode: string;
  returnMsg: string;
  data: {
    id: number; // 零售订单id
  };
}
/*
 * 接口名称: 材料分类-修改
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b82f9cd3c233371826e10
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b82f9cd3c233371826e10
 * 接口地址: https://dxcare.cn/clinic/medicine/materialCategory/:id
 * 最近修改时间: 2018-09-14 17:45:00
 * 描述: 无
*/
interface IPutMaterialCategorybee0Params  {
  id: number;
}
interface IPutMaterialCategorybee0Payload  {
  label: string; // 名称
}
interface IPutMaterialCategorybee0Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料分类-列表
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b8490f7baed336bc3b814
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b8490f7baed336bc3b814
 * 接口地址: https://dxcare.cn/clinic/medicine/materialCategory
 * 最近修改时间: 2018-09-29 10:06:32
 * 描述: 无
*/
interface IQueryMaterialCategoryList738aPayload  {
  includeGoodsCount?: string; // 是否查询商品数量，默认true
  includeUncategorizedNode?: string; // 是否包含“未分类”节点，默认true
  includeAllNode?: string; // 是否包含“全部”节点节点，默认true
}
interface IQueryMaterialCategoryList738aResponse  {
  data: {
    items: {
      id: number; // 分类id
      type: string;
      label: string; // 分类名称
      code: string; // 分类编码
      value: string;
      height: number; // 分类级别
      parentId: number; // 父节点分类
      count: number; // 商品数量
      children: {
        id: number;
        type: string;
        label: string;
        code: string;
        value: string;
        height: number;
        parentId: number;
        count: number; // 商品数量
      }[]; // 子分类
    }[];
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料分类-删除
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b8329f7baed336bc3b80c
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b8329f7baed336bc3b80c
 * 接口地址: https://dxcare.cn/clinic/medicine/materialCategory/:id
 * 最近修改时间: 2018-09-14 17:45:35
 * 描述: 无
*/
interface IDeleteMaterialCategorybee0Params  {
  id: number;
}
interface IDeleteMaterialCategorybee0Payload  {
  null: string;
}
interface IDeleteMaterialCategorybee0Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 材料分类-新增
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b828c0181fb3363cc802a
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b828c0181fb3363cc802a
 * 接口地址: https://dxcare.cn/clinic/medicine/materialCategory
 * 最近修改时间: 2018-10-31 15:04:29
 * 描述: 无
*/
interface IPostMaterialCategory738aPayload  {
  label: string; // 名称
  parentId: string; // 父节点id，默认为0，parentId为0表示该节点为根节点
}
interface IPostMaterialCategory738aResponse  {
  returnCode: string;
  returnMsg: string;
  data: {
    id: number; // 分类id
  };
}
/*
 * 接口名称: 用药助手用药说明接口
 * 作者: 黄进
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b6520f7baed336bc3b619
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b6520f7baed336bc3b619
 * 接口地址: https://dxcare.cn/clinic/medicine/helper/instruction
 * 最近修改时间: 2019-05-02 19:47:11
 * 描述: 无
*/
interface IGetInstruction9b51Payload  {
  name: string; // 供应商名称
}
interface IGetInstruction9b51Response  {
  returnMsg: string;
  returnCode: string;
  data: {
    cnName: {
      cnName: string;
      enName: string;
      value: string;
    };
    commonName: {
      cnName: string;
      enName: string;
      value: string;
    };
    engName: {
      cnName: string;
      enName: string;
      value: string;
    };
    component: {
      cnName: string;
      enName: string;
      value: string;
    };
    indication: {
      cnName: string;
      enName: string;
      value: string;
    };
    form: {
      cnName: string;
      enName: string;
      value: string;
    };
    dosage: {
      cnName: string;
      enName: string;
      value: string;
    };
    adverseReactions: {
      cnName: string;
      enName: string;
      value: string;
    };
    contraindications: {
      cnName: string;
      enName: string;
      value: string;
    };
    precautions: {
      cnName: string;
      enName: string;
      value: string;
    };
    description: {
      cnName: string;
      enName: string;
      value: string;
    };
    storage: {
      cnName: string;
      enName: string;
      value: string;
    };
    pack: {
      cnName: string;
      enName: string;
      value: string;
    };
    period: {
      cnName: string;
      enName: string;
      value: string;
    };
    standard: {
      cnName: string;
      enName: string;
      value: string;
    };
    approveCode: {
      cnName: string;
      enName: string;
      value: string;
    };
    OTC: {
      cnName: string;
      enName: string;
      value: string;
    };
    companyName: {
      cnName: string;
      enName: string;
      value: string;
    };
    cateName: {
      cnName: string;
      enName: string;
      value: string;
    };
    approveDate: {
      cnName: string;
      enName: string;
      value: string;
    };
  };
}
/*
 * 接口名称: 用药助手药品查询
 * 作者: 黄进
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b736f0181fb3363cc7fec
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b736f0181fb3363cc7fec
 * 接口地址: https://dxcare.cn/clinic/medicine/helper/medicine
 * 最近修改时间: 2018-09-21 10:42:06
 * 描述: 无
*/
interface IQueryMedicineList8cc4Payload  {
  code: string; // 国药准字
  barcode: string; // 条形码
}
interface IQueryMedicineList8cc4Response  {
  data: {
    items: {
      commonName: string; // 通用名
      cnName: string; // 商品名称
      engName: string; // 拼音码
      form: string; // 规格
      companyName: string; // 生产商
      approveCode: string; // 国药准字
      barCode: string; // 药品条形码
    }[];
  };
  returnCode: string; // 状态码
  returnMsg: string; // 返回信息提示
}
/*
 * 接口名称: 药品-入库订单-修改
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b2363a5ad31f684ea683fe8
 * mock地址: https://f2e.dxy.net/mock-api/client/5b2363a5ad31f684ea683fe8
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/putInWarehouseOrder/:id
 * 最近修改时间: 2018-09-18 19:59:39
 * 描述: 无
*/
interface IPutPutInWarehouseOrdere938Params  {
  id: number;
}
interface IPutPutInWarehouseOrdere938Payload  {
  warehouseId: number; // 仓库id
  check?: boolean; // 是否审核默认false
  supplierId: number; // 供应商id
  method: number; // 入库方式
  deliveryDate: string; // 发货日期
  putInDate: string; // 入库日期
  remark: string; // 备注
  details: {
    goodsId: number; // 商品id
    goodsType: number; // 商品类型，0，中药，1，西药，2，物资
    count: number; // 数量
    costPrice: number; // 成本价
    batchNo: string; // 生产批号
    expirationDate: string; // 过期日期
    packageType: number; // 包装类型0，整包，1，拆零
    unit: number; // 包装单位 
  }[]; // 入库明细
}
interface IPutPutInWarehouseOrdere938Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-入库订单-列表
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b236500e1540c84e3378345
 * mock地址: https://f2e.dxy.net/mock-api/client/5b236500e1540c84e3378345
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/putInWarehouseOrder
 * 最近修改时间: 2018-10-31 16:36:48
 * 描述: 无
*/
interface IQueryPutInWarehouseOrderList8847Payload  {
  pageNo?: number;
  pageSize?: number;
  goodsType?: number; // 商品类型，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  putInDateStart?: string; // 入库日期开始
  putInDateEnd?: string; // 入库日期结束
  method?: string; // 入库方式
  deliveryDate?: string; // 发货日期
  supplierId?: string; // 供应商id
  id?: string; // id
  checkStatus?: string; // 审核状态
  warehouseId?: string; // 库房id
}
interface IQueryPutInWarehouseOrderList8847Response  {
  data: {
    items: {
      checkStatus: number; // 审核状态
      checkStatusName: string; // 审核状态名
      checkTime: string; // 审核时间
      checkerId: number; // 审核人id
      checkerName: string; // 审核人
      clinicId: number; // 诊所ID
      createTime: string; // 创建时间
      creator: number; // 创建者id
      creatorName: string; // 创建者名称（制单人名称）
      deliveryDate: string; // 发货日期
      id: number; // 单号id
      method: number; // 入库方式
      methodName: string; // 入库方式名
      modifer: number; // 修改者id
      modiferName: string; // 修改者
      modifyTime: string;
      orgId: number;
      putInDate: string; // 入库日期
      remark: string;
      supplierId: number; // 供应商id
      supplierName: string; // 供应商
      warehouseId: number; // 仓库id
      warehouseName: string; // 仓库
    }[];
    pageBean: {
      pageNo: number;
      pageSize: number;
      totalCount: number;
    };
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-入库订单-删除
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba3887af7baed336bc3d9ab
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba3887af7baed336bc3d9ab
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/putInWarehouseOrder/:id
 * 最近修改时间: 2018-09-20 19:46:27
 * 描述: 无
*/
interface IDeletePutInWarehouseOrdere938Params  {
  id: number;
}
interface IDeletePutInWarehouseOrdere938Payload  {
  null: string;
}
interface IDeletePutInWarehouseOrdere938Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-入库订单-审核
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b2364061b778d84dd6a1201
 * mock地址: https://f2e.dxy.net/mock-api/client/5b2364061b778d84dd6a1201
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/putInWarehouseOrder/:id/check
 * 最近修改时间: 2018-09-18 20:00:34
 * 描述: 无
*/
interface IPostCheckdd9eParams  {
  id: number;
}
interface IPostCheckdd9ePayload  {
  null: string;
}
interface IPostCheckdd9eResponse  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-入库订单-新增
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b236367e1540c84e3378341
 * mock地址: https://f2e.dxy.net/mock-api/client/5b236367e1540c84e3378341
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/putInWarehouseOrder
 * 最近修改时间: 2019-04-29 17:00:43
 * 描述: 无
*/
interface IPostPutInWarehouseOrder8847Payload  {
  warehouseId?: number; // 仓库id
  check?: boolean; // 是否审核，默认false
  supplierId?: number; // 供应商id
  method: number; // 出库方式，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  deliveryDate?: string; // 发货日期
  putInDate: string; // 入库日期
  remark?: string; // 备注
  details: {
    goodsId: number; // 商品id
    goodsType: number; // 商品类型
    count: number; // 数量
    costPrice: number; // 成本价
    batchNo: string; // 生产批号
    expirationDate: string; // 过期日期
    packageType: number; // 包装类型
    unit: number; // 包装单位
    bizId?: number; // 业务id
    storageId?: number; // method=退药入库时候必填
  }[]; // 明细列表
}
interface IPostPutInWarehouseOrder8847Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-入库订单-查询
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b23859eab672884de9dfd11
 * mock地址: https://f2e.dxy.net/mock-api/client/5b23859eab672884de9dfd11
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/putInWarehouseOrder/:id
 * 最近修改时间: 2019-01-17 15:50:20
 * 描述: 无
*/
interface IGetPutInWarehouseOrdere938Params  {
  id: number;
}
interface IGetPutInWarehouseOrdere938Payload  {
  null: string;
}
interface IGetPutInWarehouseOrdere938Response  {
  data: {
    checkStatus: number; // 审核状态
    checkStatusName: string;
    checkTime: string;
    checkerId: number;
    checkerName: string;
    clinicId: number;
    createTime: string; // 制单时间，格式：年月日时分秒
    creator: number; // 制单人
    creatorName: string; // 制单人名
    deliveryDate: string; // 发货日期
    id: number;
    method: number; // 入库方式，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
    methodName: string;
    modifer: number;
    modiferName: string;
    modifyTime: string;
    orgId: number;
    putInDate: string; // 入库日期
    remark: string;
    supplierId: number; // 供应商id
    supplierName: string;
    warehouseId: number; // 库房id
    warehouseName: string;
    details: {
      goodsId: number; // 商品id
      goodsName: string; // 商品名
      goodsGenericName: string; // 通用名
      goodsSpecification: string; // 规格
      goodsRetailPrice: string; // 零售价
      goodsManufacturer: string; // 生产厂家
      count: number; // 数量
      costPrice: number; // 成本价
      batchNo: string; // 批号
      lastPutInDate?: string; // 库存最近入库日期
      expirationDate: string; // 有效期
      packageType: number; // 包装类型，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
      unit: number; // 单位
      unitName: string;
      goodsSubpackagePrice: number; // 拆零价格
      goodsSubpackageDoseUnit: string; // 制剂单位
      goodsAllowSubpackage: string; // 是否允许拆零
      goodsPackageUnit: number; // 包装单位
      goodsSubpackageDoseUnitName: string; // 制剂单位名
      goodsPackageUnitName: string; // 包装单位名
      goodsSubpackageDose: string; // 制剂数量
      goodsBarcode: string; // 条形码
      remainStorageText: string; // 可用库存
    }[];
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-入库订单打印-查询
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ca33141eb3ec26209d38b33
 * mock地址: https://f2e.dxy.net/mock-api/client/5ca33141eb3ec26209d38b33
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/putInWarehouseOrder/:id/forPrint
 * 最近修改时间: 2019-04-12 16:28:10
 * 描述: 无
*/
interface IGetForPrint8112Params  {
  id: number;
}
interface IGetForPrint8112Payload  {
  null: string;
}
interface IGetForPrint8112Response  {
  data?: {
    checkDate?: string; // 审核日期
    checkerName?: string; // 审核人
    checkerSignatureImage?: string; // 审核人签名图片
    createDate?: string; // 制单日期
    creatorName?: string; // 制单人
    creatorSignatureImage?: string; // 制单人签名图片
    deliveryDate?: string; // 发货日期
    putInId?: number; // 入库单号
    putInMethodName?: string; // 入库方式
    putInDate?: string; // 入库日期
    supplierName?: string; // 供应商
    warehouseName?: string; // 入库库房
    costPriceTotal?: number; // 成本合计
    remark?: string; // 备注
    details?: {
      name?: string; // 商品名
      genericName?: string; // 通用名
      specification?: string; // 规格
      manufacturer?: string; // 生产产商
      count?: number; // 数量
      costPrice?: number; // 成本价
      retailPrice?: number; // 零售价
      batchNo?: string; // 批号
      expirationDate?: string; // 有效日期
      unitName?: string; // 单位
    }[];
  };
  returnCode?: string;
  returnMsg?: string;
}
/*
 * 接口名称: 药品-养护-列表
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b23910181fb3363cc7bad
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b23910181fb3363cc7bad
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/maintenance
 * 最近修改时间: 2018-09-25 17:33:11
 * 描述: 无
*/
interface IQueryMaintenanceListae37Payload  {
  pageNo?: string;
  pageSize?: string;
  maintenanceDateStart?: string; // 养护日期开始
  maintenanceDateEnd?: string; // 养护日期结束
  medicineStatus?: string; // 药品状态，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  key?: string; // 商品名称（ 通用名/商品名/拼音码/条形码搜索）
}
interface IQueryMaintenanceListae37Response  {
  data: {
    items: {
      storageId: number; // 库存id
      maintenanceDate: string; // 养护日期
      creator: string; // 创建人/养护id
      creatorName: string; // 创建人/养护人名称
      goodsType: string; // 商品类型
      goodsId: number; // 商品id
      goodsName: string; // 商品名称
      specification: string; // 规格
      batchNo: string; // 批号
      manufacturer: string; // 生产厂商
      supplierId: number; // 供应商id
      supplierName: string; // 供应商名称
      expirationDate: string; // 有效期
      count: number; // 养护数量
      packageType: number; // 包装类型
      unit: number; // 单位
      unitName: string; // 单位名称
      appearanceConditions: string; // 外观及包装情况
      handleAdvices: string; // 处理意见
    }[];
    pageBean: {
      pageNo: number;
      pageSize: number;
      totalCount: number;
    };
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-养护-新增
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b560cad2eb33364c6b514
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b560cad2eb33364c6b514
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/maintenance
 * 最近修改时间: 2018-09-18 20:19:55
 * 描述: 无
*/
interface IPostMaintenanceae37Payload  {
  storageId: number; // 库存id
  maintenanceDate: string; // 养护日期
  packageType?: number; // 包装类型，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  unit: string; // 单位,https://wiki.dxy.net/pages/viewpage.action?pageId=127931941
  appearanceConditions: string; // 外观条件
  handleAdvices: string; // 处理意见
}
interface IPostMaintenanceae37Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-养护-查询
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b4c03cd3c233371826a20
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b4c03cd3c233371826a20
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/maintenance/:id
 * 最近修改时间: 2018-09-20 14:00:15
 * 描述: 无
*/
interface IGetMaintenance935fParams  {
  id: number;
}
interface IGetMaintenance935fPayload  {
  null: string;
}
interface IGetMaintenance935fResponse  {
  data: {
    storageId: number; // 库存id
    maintenanceDate: string; // 养护日期
    creator: string; // 养护人id
    creatorName: string; // 养护人名称
    goodsType: string; // 商品类型
    goodsId: number; // 商品id
    goodsName: string; // 商品名称
    specification: string; // 规格
    batchNo: string; // 批号
    manufacturer: string; // 生产产商
    supplierId: number; // 供应商id
    supplierName: string; // 供应商名称
    expirationDate: string; // 过期日期
    count: number; // 养护数量
    packageType: number; // 包装类型
    unit: number; // 单位，https://wiki.dxy.net/pages/viewpage.action?pageId=127931941
    unitName: string; // 单位名称
    appearanceConditions: string; // 外观条件
    handleAdvices: string; // 处理意见
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-出库订单-修改
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b99f9cfb39002221a562abf
 * mock地址: https://f2e.dxy.net/mock-api/client/5b99f9cfb39002221a562abf
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/takeOutWarehouseOrder/:id
 * 最近修改时间: 2018-10-10 15:11:49
 * 描述: 无
*/
interface IPutTakeOutWarehouseOrderf6feParams  {
  id: number;
}
interface IPutTakeOutWarehouseOrderf6fePayload  {
  warehouseId: number; // 仓库id
  check?: boolean; // 是否审核，默认false，新增并审核的时候传true
  method: number; // 出库方式
  applicant?: number; // 领用人员id
  takeOutDate: string; // 出库日期
  departmentId?: number; // 出库科室id
  remark?: string; // 备注
  details: {
    storageId: number; // 库存id
    count: number; // 数量
    packageType: number; // 包装类型
    unit: number; // 包装单位
  }[]; // 明细列表
}
interface IPutTakeOutWarehouseOrderf6feResponse  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-出库订单-列表
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b99c181a785e3221315f448
 * mock地址: https://f2e.dxy.net/mock-api/client/5b99c181a785e3221315f448
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/takeOutWarehouseOrder
 * 最近修改时间: 2018-09-20 17:26:52
 * 描述: 无
*/
interface IQueryTakeOutWarehouseOrderList7723Payload  {
  pageNo?: number;
  pageSize?: number;
  goodsType?: string; // 商品类型，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  takeOutDateStart?: string; // 出库日期开始
  takeOutDateEnd?: string; // 出库日期结束
  method?: string; // 出库方式，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  warehouseId?: string; // 库房id
  id?: string; // 出库单号（出库订单id）
  checkStatus?: string; // 状态（出库审核状态）https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
}
interface IQueryTakeOutWarehouseOrderList7723Response  {
  data: {
    items: {
      checkStatus: number; // 审核状态
      checkStatusName: string; // 审核状态名称
      applicant?: number; // 申请人id
      applicantName?: string; // 申请人名称
      requestSource?: number; // 请求来源，默认为0，非必填，门诊发药的时候需要填写
      requestSourceName?: string; // 请求来源名称
      requestNo?: string; // 请求流水号，非必填，门诊发药出库的时候需要填写
      checkTime: string; // 审核时间
      checkerId: number; // 审核人id
      checkerName: string; // 审核人
      createTime: string; // 创建时间
      creator: number; // 创建者id
      creatorName: string; // 创建者名称（制单人名称）
      id: number; // 单号id
      method: number; // 出库方式
      methodName: string; // 出库方式名
      modifer: number; // 修改者id
      modiferName: string; // 修改者
      modifyTime: string; // 修改时间
      takeOutDate: string; // 出库日期
      remark: string; // 备注
      warehouseId: number; // 库房id
      warehouseName: string; // 库房名称
      departmentId: number; // 领用科室id
      departmentName: string; // 领用科室名称
    }[];
    pageBean: {
      pageNo: number;
      pageSize: number;
      totalCount: number;
    };
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-出库订单-删除
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba388a2f7baed336bc3d9ad
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba388a2f7baed336bc3d9ad
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/takeOutWarehouseOrder/:id
 * 最近修改时间: 2018-09-20 19:47:01
 * 描述: 无
*/
interface IDeleteTakeOutWarehouseOrderf6feParams  {
  id: number;
}
interface IDeleteTakeOutWarehouseOrderf6fePayload  {
  null: string;
}
interface IDeleteTakeOutWarehouseOrderf6feResponse  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-出库订单-审核
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b99fc5ca785e3221315f537
 * mock地址: https://f2e.dxy.net/mock-api/client/5b99fc5ca785e3221315f537
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/takeOutWarehouseOrder/:id/check
 * 最近修改时间: 2018-09-18 20:18:42
 * 描述: 无
*/
interface IPostChecke31eParams  {
  id: number;
}
interface IPostChecke31ePayload  {
  null: string;
}
interface IPostChecke31eResponse  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-出库订单-新增
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b99d55fb39002221a562a30
 * mock地址: https://f2e.dxy.net/mock-api/client/5b99d55fb39002221a562a30
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/takeOutWarehouseOrder
 * 最近修改时间: 2018-10-16 15:20:44
 * 描述: 无
*/
interface IPostTakeOutWarehouseOrder7723Payload  {
  check?: boolean; // 是否审核，默认false，新增并审核的时候传true
  warehouseId: number; // 库房id
  method: number; // 出库方式
  applicant?: number; // 领用人员id
  takeOutDate: string; // 出库日期
  departmentId?: number; // 出库科室id
  remark?: string; // 备注
  details: {
    storageId: number; // 库存id
    count: number; // 数量
    packageType: number; // 包装类型
    unit: number; // 包装单位
  }[]; // 明细列表
}
interface IPostTakeOutWarehouseOrder7723Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-出库订单-查询
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b99fada0567692214947555
 * mock地址: https://f2e.dxy.net/mock-api/client/5b99fada0567692214947555
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/takeOutWarehouseOrder/:id
 * 最近修改时间: 2018-10-18 11:18:10
 * 描述: 无
*/
interface IGetTakeOutWarehouseOrderf6feParams  {
  id: number;
}
interface IGetTakeOutWarehouseOrderf6fePayload  {
  null: string;
}
interface IGetTakeOutWarehouseOrderf6feResponse  {
  data: {
    checkStatus: number; // 审核状态
    checkStatusName: string;
    applicant: number; // 申请人id
    applicantName: string;
    requestSource: number; // 请求来源
    requestSourceName: string; // 请求来源名
    requestNo: string; // 请求流水号
    checkTime: string;
    checkerId: number; // 审核人id
    checkerName: string; // 审核人名称
    createTime: string;
    creator: number;
    creatorName: string;
    id: number;
    method: number; // 出库方式
    methodName: string; // 出库方式名
    modifer: number;
    modiferName: string;
    modifyTime: string;
    takeOutDate: string; // 出库日期
    remark: string; // 备注
    warehouseId: number; // 库房id
    warehouseName: string; // 库房名
    departmentId: string; // 科室id
    departmentName: string; // 科室名
    details: {
      goodsId: number; // 商品id
      storageId: number; // 库存id
      goodsType: number; // 商品类型
      goodsName: string; // 商品名
      goodsGenericName: string; // 通用名
      goodsSpecification: string; // 规格
      goodsStatus: number; // 商品状态
      goodsRetailPrice: string; // 零售价
      goodsManufacturer: string; // 生产产商
      count: number; // 出库数量
      costPrice: number; // 成本价
      batchNo: string; // 批号
      expirationDate: string; // 过期日期
      packageType: number; // 包装类型
      unit: number; // 单位id
      unitName: string; // 单位名
      goodsSubpackagePrice: number; // 拆零价格
      goodsSubpackageDoseUnit: number; // 制剂单位
      goodsAllowSubpackage: boolean; // 是否允许拆零
      goodsPackageUnit: number; // 包装单位
      goodsSubpackageDoseUnitName: string; // 制剂单位名
      goodsPackageUnitName: string; // 包装单位名
      goodsSubpackageDose: number; // 制剂数量
      goodsBarcode: string; // 条形码
      availableStorageText: string; // 可用库存数量(=真实库存-锁定库存）
      lastPutInDate: string; // 最近入库日期
      validityStatus: number; // 有效期状态，1达到预警，2，已过期
      supplierName: string; // 供应商名
    }[];
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-出库订单打印-查询
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ca3340feb3ec26209d38b4d
 * mock地址: https://f2e.dxy.net/mock-api/client/5ca3340feb3ec26209d38b4d
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/takeOutWarehouseOrder/:id/forPrint
 * 最近修改时间: 2019-04-12 16:29:43
 * 描述: 无
*/
interface IGetForPrint711eParams  {
  id: number;
}
interface IGetForPrint711ePayload  {
  null: string;
}
interface IGetForPrint711eResponse  {
  data?: {
    applicantName?: string; // 领用人员
    checkDate?: string; // 审核日期：年月日
    checkerName?: string; // 审核人名称
    createDate?: string; // 制单日期
    creatorName?: string; // 制单人
    takeoutId?: number; // 出库单号
    takeoutMethodName?: string; // 出库方式名
    takeoutDate?: string; // 出库日期
    remark?: string; // 备注
    warehouseName?: string; // 出库库房
    departmentName?: string; // 领用科室
    costPriceTotal?: number; // 成本合计
    details?: {
      name?: string; // 商品名
      specification?: string; // 规格
      genericName?: string; // 通用名
      retailPrice?: string; // 零售价
      manufacturer?: string; // 生产产商
      count?: number; // 出库数量
      costPrice?: number; // 成本价
      batchNo?: string; // 批号
      expirationDate?: string; // 有效期
      unitName?: string; // 单位
    }[];
  };
  returnCode?: string;
  returnMsg?: string;
}
/*
 * 接口名称: 药品-列表
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b42dc7030e2d743691d0374
 * mock地址: https://f2e.dxy.net/mock-api/client/5b42dc7030e2d743691d0374
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine
 * 最近修改时间: 2019-01-03 17:35:11
 * 描述: 无
*/
interface IQueryMedicineList1577Payload  {
  nameOrBarcode?: string; // 处方名或条形码
  medcineType?: string; // 药品类型：0中药，1西药
  status?: number; // 状态
  ids?: string; // id列表，逗号分割
  withWarehouseStorages?: string; // 是否查询仓库库存
  pageNo?: number;
  pageSize?: number;
  pageEnable?: string; // 是否分页
}
interface IQueryMedicineList1577Response  {
  data: {
    items: {
      allowDiscount: boolean; // 是否允许折扣
      allowSubpackage: boolean; // 是否允许拆零
      approvalNo: string; // 国药准字
      barcode: string; // 条形码
      category: number; // 分类
      categoryName: string; // 分类名
      clinicId: number; // 诊所id
      createTime: string; // 创建时间
      creator: number; // 创建者id
      defaultCostPrice: number; // 默认成本价
      defaultFrequency: number; // 默认频次
      defaultFrequencyName: string; // 默认频次名称
      defaultSingleDose: number; // 单次剂量（剂量）
      defaultDispenseUnit: number; // 默认开药单位ID
      defaultDispenseUnitName: string; // 默认开药单位名
      singleDoseUnits: {
        id: number; // 单位id
        name: string; // 单位名称
      }[]; // 单次剂量单位列表（剂量单位列表）
      defaultTakingMedicinePlace: number; // 默认取药地点0本院，1外购，2代购
      defaultTakingMedicineWarehouseId: number; // 默认取药仓库id
      defaultUsage: number; // 默认用法
      defaultUsageName: string; // 默认用法名称
      dosageForm: number; // 剂型
      dosageFormName: string; // 剂型名称
      englishName: string; // 英文名
      genericName: string; // 通用名
      genericNameInitial: string; // 通用名首字母
      goodsStatus: string; // 药品状态，是否停用。0：停用，1：正常
      id: number; // id
      manufacturer: string; // 生产厂商
      dose: number; // 剂量
      doseUnit: number; // 剂量单位
      subpackageDose: number; // 拆零剂量（制剂数量）
      subpackageDoseUnit: number; // 拆零剂量单位（制剂单位）
      subpackageDoseUnitName: string; // 拆零剂量单位名称
      modifier: number; // 修改者id
      modifyTime: string; // 修改时间
      name: string; // 名称（商品名）
      nameInitial: string; // 名称首字母（商品首字母）
      orgId: number; // 机构id
      packageUnit: number; // 包装单位
      packageUnitName: string; // 包装单位名
      pinyinCode: string; // 拼音码
      retailPrice: number; // 零售价
      salesLimitNum: number; // 销售限制数量
      specification: string; // 规格
      status: number; // 状态，1有效，0无效
      statusName: string; // 状态名
      storageWarnNum: number; // 库存预警数目
      subpackagePrice: number; // 拆零单位价格
      usageNotes: string; // 用法说明（说明）
      validityWarnDays: number; // 有效期预警天数
      warehouseStorages: {
        warehouseId: number; // 仓库id
        warehouseName: string; // 仓库名
        storageNum: number; // 库存（可用库存数=拆零库存-锁定库存）
      }[]; // 仓库库存列表
    }[];
    pageBean: {
      pageNo: number;
      pageSize: number;
      totalCount: number;
    };
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-库存-列表
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b238610ab672884de9dfd12
 * mock地址: https://f2e.dxy.net/mock-api/client/5b238610ab672884de9dfd12
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/storage
 * 最近修改时间: 2019-03-12 17:11:25
 * 描述: 无
*/
interface IQueryStorageListb13bPayload  {
  pageNo?: string;
  pageSize?: string;
  keyword?: string; // 名称或者条形码
  goodsStatus?: string; // 状态1，有效，0无效
  remainingNumType?: string; // 剩余数量类型，1，大于，2，等于0
  validityStatus?: string; // 有效期状态，1达到预警，2，已过期
  storageWarning?: string; // 库存预警，true：达到预警，false：未达到预警
  supplierIds?: string; // 供应商id列表，逗号分割
  goodsId?: string; // 商品id
  warehouseId?: string; // 库房id
  medicineType?: string; // 药品类型，中药0，西药1
  category?: string; // 药品分类id
  orders?: string; // 排序参数（逗号分割），目前只支持idDesc,lastPutInDateAsc
}
interface IQueryStorageListb13bResponse  {
  data: {
    items: {
      goodsName: string; // 商品名 
      goodsId: number; // 商品id
      goodsGenericName: string; // 商品通用名
      goodsSpecification: string; // 商品规格
      goodsBarcode: string; // 条形码
      goodsManufacturer: string; // 商品生产厂家
      supplierName: string; // 供应商
      goodsStatus: number; // 商品状态
      goodsStatusName: string; // 商品状态名
      goodsRetailPrice: string; // 商品零售价
      costPrice: string; // 成本价
      expirationDate: string; // 有效期
      id: number; // 库存id
      batchNo: string; // 批号
      validityStatus: number; // 有效期状态，1达到预警，2，已过期
      storageWarning: boolean; // 库存预警，true：达到预警，false：未达到预警
      remainStorageText: string; // 剩余库存数量（账面数量）
      realSubpackageCount: number; // 库存数量（拆零库存）
      availableStorageText: string; // 可用库存数量(=真实库存-锁定库存）
      availableStorage: number; // 可用库存数量
      goodsSubpackagePrice: number; // 拆零价格
      goodsSubpackageDoseUnit: number; // 制剂单位
      goodsAllowSubpackage: boolean; // 是否允许拆零
      goodsPackageUnit: number; // 包装单位
      goodsSubpackageDoseUnitName: string; // 制剂单位名
      goodsPackageUnitName: string; // 包装单位名
      goodsSubpackageDose: number; // 制剂数量
      warehouseStorageNums: {
        warehouseName: string; // 库房名
        remainStorageText: string; // 剩余库存
      }[]; // 仓库库存列表
      lastPutInDate: string; // 最近的入库日期
    }[];
    pageBean: {
      pageNo: number;
      pageSize: string;
      totalCount: number;
    };
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-库存-列表(按商品)
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b238ee9ab672884de9dfd34
 * mock地址: https://f2e.dxy.net/mock-api/client/5b238ee9ab672884de9dfd34
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/storageByGoods
 * 最近修改时间: 2018-10-31 15:34:09
 * 描述: 无
*/
interface IQueryStorageByGoodsListcc9aPayload  {
  medicineType?: string; // 商品类型，0中药，1西药
  goodsStatus?: string; // 状态1,有效，0无效
  storageWarning?: string; // 库存预警，true：达到预警，false：未达到预警
  keyword?: string; // 名称或者条形码
  remainingNumType?: string; // 剩余数量类型，1，大于，2，等于0
}
interface IQueryStorageByGoodsListcc9aResponse  {
  data: {
    items: {
      id: number; // 药品id
      name: string; // 药品名称
      genericName: string; // 通用名
      supplierName: string; // 供应商名
      retailPrice: number; // 零售价
      specification: string; // 规格
      manufacturer: string; // 生产厂家
      storageNum: number; // 库存数量
      storageUnitName: string; // 库存单位名
      remainStorageText: string; // 剩余库存数量
      storageWarning: boolean; // 库存预警
      status: number; // 状态，1有效，0停用
      statusName: string; // 状态名
      warehouseStorageNums: {
        warehouseName: string;
        remainStorageText: string;
      }[];
    }[];
    pageBean: {
      pageNo: number;
      pageSize: number;
      totalCount: number;
    };
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-库存列表-导出
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b2390a8e1540c84e337839a
 * mock地址: https://f2e.dxy.net/mock-api/client/5b2390a8e1540c84e337839a
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/storage/export
 * 最近修改时间: 2018-09-18 15:42:58
 * 描述: 无
*/
interface IGetExport944dPayload  {
  medicineType: number;
  supplier: number;
  goodsStatus: number;
  storageWarningType: number;
  nameOrBarcode: string;
}
interface IGetExport944dResponse  {
  null: string;
}
/*
 * 接口名称: 药品-库存盘点-修改
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9a0cd260eabf222000fff3
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9a0cd260eabf222000fff3
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/storageCorrectOrder/:id
 * 最近修改时间: 2018-10-25 19:04:55
 * 描述: 无
*/
interface IPutStorageCorrectOrder9b60Params  {
  id: number;
}
interface IPutStorageCorrectOrder9b60Payload  {
  details: {
    storageId: number; // 库存id
    realCount: number; // 实际数量
    packageType?: number; // 包装类型，材料库存盘点不需要填写，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
    unit: number; // 包装单位
  }[]; // 明细列表
  check?: boolean; // 是否审核，默认false，新增并审核的时候传true
}
interface IPutStorageCorrectOrder9b60Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-库存盘点-列表
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b99fe6f056769221494755a
 * mock地址: https://f2e.dxy.net/mock-api/client/5b99fe6f056769221494755a
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/storageCorrectOrder
 * 最近修改时间: 2018-09-25 17:06:41
 * 描述: 无
*/
interface IQueryStorageCorrectOrderListab0aPayload  {
  pageNo?: string;
  pageSize?: string;
  createDateStart?: string; // 制单日期开始
  createDateEnd?: string; // 制单日期结束
  warehouseId?: string; // 库房id
  id?: string; // 盘点单号（盘点订单id）
  checkStatus?: string; // 状态（盘点审核状态）https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
}
interface IQueryStorageCorrectOrderListab0aResponse  {
  data: {
    items: {
      checkStatus: number; // 审核状态
      checkStatusName: string; // 审核状态名称
      checkTime: string; // 审核时间
      checkerId: number; // 审核人id
      checkerName: string; // 审核人
      createDate: string; // 制单日期
      createTime: string; // 创建时间
      creator: number; // 创建者id
      creatorName: string; // 创建者名称（制单人名称）
      id: number; // 单号id
      modifer: number; // 修改者id
      modiferName: string; // 修改者
      modifyTime: string; // 修改时间
      warehouseId: number; // 库房id
      warehouseName: string; // 库房名称
    }[];
    pageBean: {
      pageNo: number;
      pageSize: number;
      totalCount: number;
    };
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-库存盘点-删除
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba38927ad2eb33364c6da22
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba38927ad2eb33364c6da22
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/storageCorrectOrder/:id
 * 最近修改时间: 2018-09-20 19:49:16
 * 描述: 无
*/
interface IDeleteStorageCorrectOrder9b60Params  {
  id: number;
}
interface IDeleteStorageCorrectOrder9b60Payload  {
  null: string;
}
interface IDeleteStorageCorrectOrder9b60Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-库存盘点-审核
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b89c4f7baed336bc3b826
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b89c4f7baed336bc3b826
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/storageCorrectOrder/:id/check
 * 最近修改时间: 2018-09-18 20:16:02
 * 描述: 无
*/
interface IPostCheck4d2cParams  {
  id: number;
}
interface IPostCheck4d2cPayload  {
  null: string;
}
interface IPostCheck4d2cResponse  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-库存盘点-新增
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9a0a7aa785e3221315f5aa
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9a0a7aa785e3221315f5aa
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/storageCorrectOrder
 * 最近修改时间: 2018-10-25 18:45:44
 * 描述: 无
*/
interface IPostStorageCorrectOrderab0aPayload  {
  details: {
    storageId: number; // 库存id
    realCount: number; // 实际数量
    packageType?: number; // 包装类型，药品库存盘点必填，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
    unit: number; // 包装单位
  }[]; // 明细列表
  check?: boolean; // 是否审核，默认false，新增并审核的时候传true
  warehouseId: number; // 库房id
}
interface IPostStorageCorrectOrderab0aResponse  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-库存盘点-明细-列表
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5bc82b6aeb2aa07544c1d0c4
 * mock地址: https://f2e.dxy.net/mock-api/client/5bc82b6aeb2aa07544c1d0c4
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/storageCorrectOrder/:id/detail
 * 最近修改时间: 2019-02-18 11:44:40
 * 描述: 无
*/
interface IQueryDetailList9c7aParams  {
  id: number;
}
interface IQueryDetailList9c7aPayload  {
  pageNo: string;
  pageSize: string;
  medicineType?: string; // 药品类型，0中药，1西药
  category?: string; // 分类
}
interface IQueryDetailList9c7aResponse  {
  data: {
    items: {
      storageId: number; // 库存id
      goodsId: number; // 商品id
      goodsName: string; // 商品名
      goodsSpecification: string; // 规格
      goodsBarcode: string; // 条形码
      goodsStatus: number; // 商品状态
      batchNo: string; // 批号
      goodsManufacturer: string; // 生产厂家
      supplierId: number; // 供应商id
      supplierName: string; // 供应商名称
      expirationDate: string; // 过期日期
      validityStatus: number; // 有效期状态，1达到预警，2，已过期
      profitAndLoss: string; // 盘亏盘盈
      realCount: number; // 实际数量
      packageType: number;
      unit: number; // 单位
      unitName: string; // 单位名
      subpackagePrice: number; // 账面数量
      subpackageDoseUnit: number; // 制剂单位
      allowSubpackage: string; // 是否允许拆零
      packageUnit: number; // 包装单位
      subpackageDoseUnitName: string; // 制剂单位名
      packageUnitName: string; // 包装单位名
      subpackageDose: string; // 制剂数量
      remainStorageText: string; // 账面数量
    }[];
    pageBean: {
      pageNo: number;
      pageSize: number;
      totalCount: number;
    };
    orderInfo: {
      checkStatus: number;
      checkStatusName: string;
      checkTime: string;
      checkerId: number;
      checkerName: string;
      createTime: string;
      createDate: string;
      creator: number;
      creatorName: string;
      id: number;
      modifier: string;
      modiferName: string;
      modifyTime: string;
      warehouseId: number; // 库房id
      warehouseName: string; // 库房名称
    };
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-库存盘点-查询
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9a0d30b39002221a562b41
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9a0d30b39002221a562b41
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/storageCorrectOrder/:id
 * 最近修改时间: 2018-10-20 13:23:42
 * 描述: 无
*/
interface IGetStorageCorrectOrder9b60Params  {
  id: number;
}
interface IGetStorageCorrectOrder9b60Payload  {
  null: string;
}
interface IGetStorageCorrectOrder9b60Response  {
  data: {
    checkStatus: number; // 审核状态
    checkStatusName: string; // 审核状态名称
    checkTime: string; // 审核时间 格式：年月日
    checkerId: number; // 制单人id
    checkerName: string; // 制单人名称
    createTime: string; // 制单时间
    createDate: string; // 制单日期
    creator: number; // 制单人id
    creatorName: string; // 制单人名称
    id: number; // 单号/id
    modifier: string; // 修改人id
    modiferName: string; // 修改人名称
    modifyTime: string; // 修改时间
    warehouseId: number; // 库房id
    warehouseName: string; // 库房名称
    details: {
      storageId: number; // 库存id
      goodsId: number; // 商品id
      goodsName: string; // 商品名
      goodsGenericName: string; // 通用名
      goodsSpecification: string; // 商品规格
      goodsBarcode: string; // 商品条形码
      goodsStatus: string; // 药品状态
      batchNo: string; // 批号
      goodsManufacturer: string; // 生产产商
      supplierId: number; // 供应商id
      supplierName: string; // 供应商名称
      expirationDate: string; // 过期日期
      validityStatus: number; // 有效期状态，1达到预警，2，已过期
      profitAndLoss: string; // 盘亏盘盈
      realCount: number; // 实际数量
      packageType: number; // 包装类型，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
      unit: number; // 单位
      unitName: string; // 单位名称
      subpackagePrice: number; // 拆零价格
      subpackageDoseUnit: string; // 制剂单位
      allowSubpackage: string; // 是否允许拆零
      packageUnit: number; // 包装单位
      subpackageDoseUnitName: string; // 制剂单位名
      packageUnitName: string; // 包装单位名
      subpackageDose: string; // 制剂数量
      remainStorageText: string; // 账面数量
    }[];
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-自动入库-新增
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5bfe4d51f28127b5ab7267ce
 * mock地址: https://f2e.dxy.net/mock-api/client/5bfe4d51f28127b5ab7267ce
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/autoPutIn
 * 最近修改时间: 2018-11-30 15:29:53
 * 描述: 无
*/
interface IPostAutoPutInc5e3Payload  {
  warehouseId?: number; // 仓库id
  method: number; // 入库方式，26自动入库
  deliveryDate?: string; // 发货日期
  putInDate: string; // 入库日期
  remark?: string; // 备注
  details: {
    goodsId: number; // 商品id
    bizId: string; // 处方id/医嘱id
    count: number; // 数量
    packageType: number; // 包装类型，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  }[]; // 明细列表
}
interface IPostAutoPutInc5e3Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-自动出库-新增
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5bfe4133f28127b5ab726779
 * mock地址: https://f2e.dxy.net/mock-api/client/5bfe4133f28127b5ab726779
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/autoTakeOut
 * 最近修改时间: 2018-11-30 15:30:26
 * 描述: 无
*/
interface IPostAutoTakeOutbfadPayload  {
  warehouseId: number; // 库房id
  method: number; // 出库方式，26自动出库
  applicant?: number; // 领用人员id
  takeOutDate: string; // 出库日期
  departmentId?: number; // 出库科室id
  remark?: string; // 备注
  details: {
    count: number; // 数量
    bizId: number; // 业务id（处方id/医嘱id）
    goodsId: number; // 商品id
    packageType: number; // 包装类型，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
    unit: number; // 单位
  }[]; // 明细列表
}
interface IPostAutoTakeOutbfadResponse  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-零售订单-取消
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5c6154ad97ffdf502cca443d
 * mock地址: https://f2e.dxy.net/mock-api/client/5c6154ad97ffdf502cca443d
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/retailOrder/:id/cancel
 * 最近修改时间: 2019-02-11 18:58:13
 * 描述: 无
*/
interface IPostCancel3768Params  {
  id: number;
}
interface IPostCancel3768Payload  {
  null: string;
}
interface IPostCancel3768Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 药品-零售订单-新增
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5c614ed9e587b35036ef8756
 * mock地址: https://f2e.dxy.net/mock-api/client/5c614ed9e587b35036ef8756
 * 接口地址: https://dxcare.cn/clinic/medicine/medicine/retailOrder
 * 最近修改时间: 2019-03-15 19:08:27
 * 描述: 无
*/
interface IPostRetailOrder1402Payload  {
  warehouseId?: number; // 仓库id
  details: {
    goodsId: number; // 商品id
    storageId: number; // 库存id
    count: number; // 数量
    packageType: number; // 包装类型，0包装，1拆零
    unit: number; // 单位
  }[]; // 明细列表
  patientInfo?: {
    patientId?: number; // 病人id
    name?: string; // 名称
    birthday?: string; // 生日
    mobile?: string; // 手机号
    gender?: number; // 性别，https://wiki.dxy.net/pages/viewpage.action?pageId=134527991
  }; // 病人信息
}
interface IPostRetailOrder1402Response  {
  returnCode: string;
  returnMsg: string;
  data: {
    id: number; // 零售订单id
  };
}
/*
 * 接口名称: 西药-从基础表导入
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b232b08ab672884de9dfc89
 * mock地址: https://f2e.dxy.net/mock-api/client/5b232b08ab672884de9dfc89
 * 接口地址: https://dxcare.cn/clinic/medicine/westernMedcine/importFromBase
 * 最近修改时间: 2018-09-09 12:57:15
 * 描述: 无
*/
interface IPostImportFromBased2d6Payload  {
  ids?: number[]; // 基础表药品id数组
  nameOrBarcode?: string; // 名称或者条形码
}
interface IPostImportFromBased2d6Response  {
  returnMsg: string;
  returnCode: string;
}
/*
 * 接口名称: 西药-从文件导入
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b232b0c1b778d84dd6a11aa
 * mock地址: https://f2e.dxy.net/mock-api/client/5b232b0c1b778d84dd6a11aa
 * 接口地址: https://dxcare.cn/clinic/medicine/westernMedcine/importFromFile
 * 最近修改时间: 2018-06-15 11:00:16
 * 描述: 无
*/
interface IPostImportFromFileb04fPayload  {
  dataFile: file;
}
interface IPostImportFromFileb04fResponse  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 西药-列表查询
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b2356a21b778d84dd6a11f3
 * mock地址: https://f2e.dxy.net/mock-api/client/5b2356a21b778d84dd6a11f3
 * 接口地址: https://dxcare.cn/clinic/medicine/westernMedcine
 * 最近修改时间: 2019-01-03 17:33:01
 * 描述: 无
*/
interface IQueryWesternMedcineListf8dfPayload  {
  nameOrBarcode?: string; // 处方名或条形码
  nameOrInitialLetter?: string; // 名称或者首字母
  status?: number; // 状态
  ids?: string; // id列表，逗号分割
  category?: number; // 分类id
  approvalNo?: string; // 国药准字
  withWarehouseStorages?: string; // 是否查询仓库库存
  pageNo?: number;
  pageSize?: number;
}
interface IQueryWesternMedcineListf8dfResponse  {
  data: {
    items: {
      allowDiscount: boolean; // 是否允许折扣
      allowSubpackage: boolean; // 是否允许拆零
      approvalNo: string; // 国药准字
      barcode: string; // 条形码
      category: number; // 分类
      categoryName: string; // 分类名
      clinicId: number; // 诊所id
      createTime: string; // 创建时间
      creator: number; // 创建者id
      defaultCostPrice: number; // 默认成本价
      defaultFrequency: number; // 默认频次
      defaultFrequencyName: string; // 默认频次名称
      defaultSingleDose: number; // 单次剂量
      defaultDispenseUnit: number; // 默认开药单位id
      defaultDispenseUnitName: string; // 默认开药单位名
      singleDoseUnits: {
        id: number; // 单位id
        name: string; // 单位名
      }[]; // 西药单次剂量单位列表（（次）剂量单位列表）
      defaultTakingMedicinePlace: number; // 默认取药地点0本院，1外购，2代购
      defaultTakingMedicineWarehouseId: number; // 默认取药仓库id
      defaultUsage: number; // 默认用法
      defaultUsageName: string; // 默认用法名称
      dosageForm: number; // 剂型
      dosageFormName: string; // 剂型名称
      englishName: string; // 英文名
      genericName: string; // 通用名
      genericNameInitial: string; // 通用名首字母
      id: number; // id
      manufacturer: string; // 生产厂商
      dose: number; // 剂量
      doseUnit: number; // 剂量单位
      doseUnitName: string; // 剂量单位名称
      subpackageDose: number; // 拆零剂量（制剂数量）
      subpackageDoseUnit: number; // 拆零剂量单位（制剂单位）
      subpackageDoseUnitName: string; // 拆零剂量单位名称（制剂单位名称）
      modifier: number; // 修改者id
      modifyTime: string; // 修改时间
      name: string; // 名称（商品名）
      nameInitial: string; // 名称首字母（商品名首字母）
      orgId: number; // 机构id
      packageUnit: number; // 包装单位
      packageUnitName: string; // 包装单位名
      packageUnitFormula: number; // 销售信息-包装单位转换公式
      pinyinCode: string; // 拼音码
      retailPrice: number; // 零售价
      salesLimitNum: number; // 销售限制数量
      specification: string; // 规格
      status: number; // 状态，1有效，0无效
      statusName: string; // 状态名
      storageWarnNum: number; // 库存预警数目
      subpackagePrice: number; // 拆零单位价格
      usageNotes: string; // 用法说明（说明）
      validityWarnDays: number; // 有效期预警天数
      warehouseStorages: {
        warehouseId: number;
        warehouseName: string;
        storageNum: number; // 库存（可用库存数=拆零库存-锁定库存）
      }[]; // 仓库库存列表
    }[];
    pageBean: {
      pageNo: number;
      pageSize: string;
      totalCount: string;
    };
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 西药-删除
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5ba38843cd3c233371828fd7
 * mock地址: https://f2e.dxy.net/mock-api/client/5ba38843cd3c233371828fd7
 * 接口地址: https://dxcare.cn/clinic/medicine/westernMedcine/:id
 * 最近修改时间: 2018-09-20 19:45:34
 * 描述: 无
*/
interface IDeleteWesternMedcine83a0Params  {
  id: number;
}
interface IDeleteWesternMedcine83a0Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 西药-批量设置库存预警数目
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b232b14e1540c84e33782e6
 * mock地址: https://f2e.dxy.net/mock-api/client/5b232b14e1540c84e33782e6
 * 接口地址: https://dxcare.cn/clinic/medicine/westernMedcine/storageWarnNum
 * 最近修改时间: 2018-06-15 10:58:30
 * 描述: 无
*/
interface IPutStorageWarnNum9747Payload  {
  storageWarnNum: number; // 库存预警数
}
interface IPutStorageWarnNum9747Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 西药-批量设置是否允许折扣
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b4c6e4ae7d539438bfc42e1
 * mock地址: https://f2e.dxy.net/mock-api/client/5b4c6e4ae7d539438bfc42e1
 * 接口地址: https://dxcare.cn/clinic/medicine/westernMedicine/allowDiscount
 * 最近修改时间: 2018-07-27 11:41:11
 * 描述: 无
*/
interface IPutAllowDiscount223cPayload  {
  allowDiscount: boolean; // 是否允许折扣
}
interface IPutAllowDiscount223cResponse  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 西药-批量设置有效期预警
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b232b16ab672884de9dfc8a
 * mock地址: https://f2e.dxy.net/mock-api/client/5b232b16ab672884de9dfc8a
 * 接口地址: https://dxcare.cn/clinic/medicine/westernMedcine/validityWarnDays
 * 最近修改时间: 2018-07-19 19:55:13
 * 描述: 无
*/
interface IPutValidityWarnDays50dePayload  {
  validityWarnDays: number; // 有效期预警天数
}
interface IPutValidityWarnDays50deResponse  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 西药-新增
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b232afcad31f684ea683f84
 * mock地址: https://f2e.dxy.net/mock-api/client/5b232afcad31f684ea683f84
 * 接口地址: https://dxcare.cn/clinic/medicine/westernMedicine
 * 最近修改时间: 2019-03-27 11:35:16
 * 描述: 无
*/
interface IPostWesternMedicinef630Payload  {
  allowDiscount?: boolean; // 是否允许折扣
  allergyIds?: number[]; // 过敏设置
  allowSubpackage?: boolean; // 是否允许拆零
  approvalNo?: string; // 准字批号
  barcode?: string; // 条形码
  category?: number; // 分类
  defaultCostPrice?: number; // 成本价
  defaultFrequency?: number; // 频率
  defaultSingleDose?: number; // 单次剂量
  savedSingleDoseUnitIds?: number[]; // 单次剂量单位列表(保存用）
  defaultTakingMedicinePlace?: number; // 取药地点
  defaultTakingMedicineWarehouseId?: number; // 取药仓库
  defaultUsage?: number; // 用法
  dosageForm?: number; // 剂型
  englishName?: string; // 英文名
  genericName?: string; // 通用名
  genericNameInitial?: string; // 通用名首字母
  manufacturer?: string; // 生产厂商
  name?: string; // 名称（商品名）
  nameInitial?: string; // 名字首字母（商品名首字母）
  packageUnit?: number; // 包装单位
  pinyinCode?: string; // 拼音码
  batchNo?: string; // 生产批号
  retailPrice?: number; // 零售价
  salesLimitNum?: number; // 销售限制数量
  specification?: string; // 规格
  storageWarnNum?: number; // 库存预警
  subpackageDose?: number; // 拆零剂量（制剂数量）
  subpackageDoseUnit?: number; // 拆零剂量单位（制剂单位）
  status?: number; // 状态，1正常，0停用
  dose?: number; // 剂量
  doseUnit?: number; // 剂量单位
  subpackagePrice?: number; // 拆零售价
  usageNotes?: string; // 用法备注（说明）
  validityWarnDays?: number; // 有效期预警天数
}
interface IPostWesternMedicinef630Response  {
  returnCode: string;
  returnMsg: string;
  data: number; // 西药id
}
/*
 * 接口名称: 西药-更新
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b41d281e7438f4379fd797d
 * mock地址: https://f2e.dxy.net/mock-api/client/5b41d281e7438f4379fd797d
 * 接口地址: https://dxcare.cn/clinic/medicine/:id/westernMedicine
 * 最近修改时间: 2019-03-27 11:35:39
 * 描述: 无
*/
interface IPutWesternMedicine387cParams  {
}
interface IPutWesternMedicine387cPayload  {
  allowDiscount: boolean; // 是否允许折扣
  allergyIds: number[]; // 过敏设置
  allowSubpackage: boolean; // 是否允许拆零
  approvalNo?: string; // 准字批号
  barcode?: string; // 条形码
  category: number; // 分类
  defaultCostPrice: number; // 成本价
  defaultFrequency: number; // 频率
  defaultSingleDose: number; // 单次剂量
  savedSingleDoseUnitIds: number[]; // 单次剂量单位列表（（次）剂量单位列表）
  defaultTakingMedicinePlace: number; // 取药地点
  defaultTakingMedicineWarehouseId: number; // 取药仓库
  defaultUsage: number; // 用法
  dosageForm: number; // 剂型
  englishName?: string; // 英文名
  genericName?: string; // 通用名
  genericNameInitial?: string; // 通用名首字母
  manufacturer?: string; // 生产厂商
  name?: string; // 名称（商品名）
  nameInitial?: string; // 名字首字母（商品名首字母）
  packageUnit: number; // 包装单位
  pinyinCode?: string; // 拼音码
  batchNo?: string; // 生产批号
  retailPrice: number; // 零售价
  salesLimitNum: number; // 销售限制数量
  specification?: string; // 规格
  storageWarnNum: number; // 库存预警
  dose: number; // 剂量
  doseUnit: string; // 剂量单位
  subpackageDose: number; // 拆零剂量（制剂数量）
  subpackageDoseUnit: number; // 拆零剂量单位（制剂单位）
  subpackagePrice: number; // 拆零单价
  status: number; // 状态，1正常，0停用
  usageNotes?: string; // 用法备注（说明）
  validityWarnDays: number; // 有效期预警天数
}
interface IPutWesternMedicine387cResponse  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 西药-更新-副本
 * 作者: pujj
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b5de7e96e5a13436f45b1a8
 * mock地址: https://f2e.dxy.net/mock-api/client/5b5de7e96e5a13436f45b1a8
 * 接口地址: https://dxcare.cn/clinic/medicine/:id/westernMedcine
 * 最近修改时间: 2018-07-30 00:14:33
 * 描述: 无
*/
interface IPutWesternMedcined8f6Params  {
}
interface IPutWesternMedcined8f6Payload  {
  allowDiscount: boolean; // 是否允许折扣
  allergyIds: number[]; // 过敏设置
  allowSubpackage: boolean; // 是否允许拆零
  approvalNo?: string; // 准字批号
  barcode?: string; // 条形码
  category: number; // 分类
  defaultCostPrice: number; // 成本价
  defaultFrequency: number; // 频率
  defaultSingleDose: number; // 单次剂量
  singleDoseUnitIds: number[]; // 单次剂量单位列表（（次）剂量单位列表）
  defaultTakingMedicinePlace: number; // 取药地点
  defaultTakingMedicineWarehouseId: number; // 取药仓库
  defaultUsage: number; // 用法
  dosageForm: number; // 剂型
  englishName?: string; // 英文名
  genericName?: string; // 通用名
  genericNameInitial?: string; // 通用名首字母
  manufacturer?: string; // 生产厂商
  name?: string; // 名称（商品名）
  nameInitial?: string; // 名字首字母（商品名首字母）
  packageUnit: number; // 包装单位
  pinyinCode?: string; // 拼音码
  batchNo?: string; // 生产批号
  retailPrice: number; // 零售价
  salesLimitNum: number; // 销售限制数量
  specification?: string; // 规格
  storageWarnNum: number; // 库存预警
  dose: number; // 剂量
  doseUnit: string; // 剂量单位
  subpackageDose: number; // 拆零剂量（制剂数量）
  subpackageDoseUnit: number; // 拆零剂量单位（制剂单位）
  subpackagePrice: number; // 拆零单价
  status: number; // 状态，1正常，0停用
  usageNotes?: string; // 用法备注（说明）
  validityWarnDays: number; // 有效期预警天数
}
interface IPutWesternMedcined8f6Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 西药-查询
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b232af51b778d84dd6a11a9
 * mock地址: https://f2e.dxy.net/mock-api/client/5b232af51b778d84dd6a11a9
 * 接口地址: https://dxcare.cn/clinic/medicine/westernMedicine/:id
 * 最近修改时间: 2019-01-03 17:36:29
 * 描述: 无
*/
interface IGetWesternMedicine2675Params  {
  id: number;
}
interface IGetWesternMedicine2675Response  {
  returnCode: string;
  returnMsg: string;
  data: {
    allowDiscount: boolean; // 是否允许折扣
    allowSubpackage: boolean; // 是否允许拆零
    approvalNo: string; // 国药准字
    barcode: string; // 条形码
    category: number; // 分类
    categoryName: string; // 分类名
    clinicId: number; // 诊所id
    createTime: string;
    creator: number;
    defaultCostPrice: number; // 成本价
    defaultFrequency: number; // 频率
    defaultFrequencyName: string; // 频率名称
    defaultSingleDose: number; // 单次剂量
    singleDoseUnits: {
      id: number; // 单位id
      name: string; // 单位名称
    }[]; // 单次剂量单位列表
    allergys: {
      id: number;
      name: string;
    }[];
    defaultTakingMedicinePlace: number; // 取药地点
    defaultTakingMedicineWarehouseId: number; // 取药仓库id
    defaultUsage: number; // 用法
    defaultUsageName: string; // 用法名称
    defaultDispenseUnit: number; // 默认开药单位
    defaultDispenseUnitName: string; // 默认开药单位
    dosageForm: number; // 剂型
    dosageFormName: string; // 剂型名称
    englishName: string; // 英文名
    genericName: string; // 通用名
    genericNameInitial: string; // 通用名首字母
    id: number;
    dose: number; // 剂量
    doseUnit: number; // 剂量单位
    doseUnitName: string; // 剂量单位名称
    subpackageDose: number; // 拆零数量（制剂数量）
    subpackageDoseUnit: number; // 拆零剂量单位（制剂单位
    subpackageDoseUnitName: string; // 拆零剂量单位名称（制剂单位名称
    manufacturer: string; // 生产厂商
    modifier: number;
    modifyTime: string;
    name: string; // 名称
    nameInitial: string; // 名称首字母
    orgId: number; // 机构id
    packageUnit: number; // 包装单位
    packageUnitName: string; // 包装单位名称
    packageUnitFormula: number; // 销售信息-包装单位转换公式
    pinyinCode: string; // 拼音码
    batchNo: string; // 批号
    retailPrice: number; // 零售价
    salesLimitNum: number; // 销售限制数
    specification: string; // 规格
    status: number; // 状态
    statusName: string; // 状态名称
    storageWarnNum: number; // 库存预警数
    subpackageUnit: number; // 拆零单位
    subpackageUnitName: string; // 拆零单位名
    subpackagePrice: number; // 拆零价格
    usageNotes: string; // 使用说明（说明）
    validityWarnDays: number; // 有效期预警天数
    originBaseMedicineId: number; // 基础表药品id，大于0表示从基础表导入，默认未0
  };
}
/*
 * 接口名称: 西药-状态修改
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b232b10ad31f684ea683f85
 * mock地址: https://f2e.dxy.net/mock-api/client/5b232b10ad31f684ea683f85
 * 接口地址: https://dxcare.cn/clinic/medicine/westernMedcine/:id/status
 * 最近修改时间: 2018-06-15 10:58:54
 * 描述: 无
*/
interface IPutStatus27f4Params  {
  id: number;
}
interface IPutStatus27f4Payload  {
  status: number;
}
interface IPutStatus27f4Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 西药分类-修改
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b7db7f7baed336bc3b7f4
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b7db7f7baed336bc3b7f4
 * 接口地址: https://dxcare.cn/clinic/medicine/westernMedicineCategory/:id
 * 最近修改时间: 2018-09-14 17:22:28
 * 描述: 无
*/
interface IPutWesternMedicineCategory5d88Params  {
  id: number;
}
interface IPutWesternMedicineCategory5d88Payload  {
  label: string; // 名称
}
interface IPutWesternMedicineCategory5d88Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 西药分类-列表
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b4c98096e5a13436f458ecb
 * mock地址: https://f2e.dxy.net/mock-api/client/5b4c98096e5a13436f458ecb
 * 接口地址: https://dxcare.cn/clinic/medicine/westernMedicineCategory
 * 最近修改时间: 2018-09-29 11:02:48
 * 描述: 无
*/
interface IQueryWesternMedicineCategoryList99b9Payload  {
  includeGoodsCount?: string; // 是否查询商品数量，默认true
  includeUncategorizedNode?: string; // 是否包含“未分类”节点，默认true
  includeAllNode?: string; // 是否包含“全部”节点节点，默认true
}
interface IQueryWesternMedicineCategoryList99b9Response  {
  data: {
    items: {
      id: number; // 分类id
      type: string;
      label: string; // 分类名称
      nodeCode: string; // 分类编码
      nodeValue: string;
      nodeHeight: number; // 分类级别
      parentId: number; // 父节点分类
      count: number; // 商品数量
      children: {
        id: number;
        type: string;
        label: string;
        nodeCode: string;
        nodeValue: string;
        nodeHeight: number;
        parentId: number;
        count: number; // 商品数量
      }[]; // 子分类
    }[];
  };
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 西药分类-删除
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b7e870181fb3363cc8018
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b7e870181fb3363cc8018
 * 接口地址: https://dxcare.cn/clinic/medicine/westernMedicineCategory/:id
 * 最近修改时间: 2018-09-14 17:39:55
 * 描述: 无
*/
interface IDeleteWesternMedicineCategory5d88Params  {
  id: number;
}
interface IDeleteWesternMedicineCategory5d88Payload  {
  null: string;
}
interface IDeleteWesternMedicineCategory5d88Response  {
  returnCode: string;
  returnMsg: string;
}
/*
 * 接口名称: 西药分类-新增
 * 作者: 张露
 * 文档地址: https://f2e.dxy.net/mock/#/doc/5b1e5027ad31f684ea683b41/5b9b7d890181fb3363cc8010
 * mock地址: https://f2e.dxy.net/mock-api/client/5b9b7d890181fb3363cc8010
 * 接口地址: https://dxcare.cn/clinic/medicine/westernMedicineCategory
 * 最近修改时间: 2018-09-29 17:58:25
 * 描述: 无
*/
interface IPostWesternMedicineCategory99b9Payload  {
  label: string; // 名称
  parentId: string; // 父节点id，默认为0，parentId为0表示该节点为根节点
}
interface IPostWesternMedicineCategory99b9Response  {
  returnCode: string;
  returnMsg: string;
  data: {
    id: number; // 分类id
  };
}
export {
  IPostImportFromBase8c30Payload,
  IPostImportFromBase8c30Response,
  IPostImportFromFile1a90Payload,
  IPostImportFromFile1a90Response,
  IQueryChineseMedicineListf54bPayload,
  IQueryChineseMedicineListf54bResponse,
  IDeleteChineseMedicine8ad1Params,
  IDeleteChineseMedicine8ad1Payload,
  IDeleteChineseMedicine8ad1Response,
  IPutStorageWarnNumae9cPayload,
  IPutStorageWarnNumae9cResponse,
  IPutAllowDiscount7cc9Payload,
  IPutAllowDiscount7cc9Response,
  IPutValidityWarnDays7ecbPayload,
  IPutValidityWarnDays7ecbResponse,
  IPostChineseMedicinef54bPayload,
  IPostChineseMedicinef54bResponse,
  IPutChineseMedicine8ad1Params,
  IPutChineseMedicine8ad1Payload,
  IPutChineseMedicine8ad1Response,
  IGetChineseMedicine8ad1Params,
  IGetChineseMedicine8ad1Payload,
  IGetChineseMedicine8ad1Response,
  IPutStatus6469Params,
  IPutStatus6469Payload,
  IPutStatus6469Response,
  IPutChineseMedicineCategoryc0d2Params,
  IPutChineseMedicineCategoryc0d2Payload,
  IPutChineseMedicineCategoryc0d2Response,
  IQueryChineseMedicineCategoryList0dc0Payload,
  IQueryChineseMedicineCategoryList0dc0Response,
  IDeleteChineseMedicineCategoryc0d2Params,
  IDeleteChineseMedicineCategoryc0d2Payload,
  IDeleteChineseMedicineCategoryc0d2Response,
  IPostChineseMedicineCategory0dc0Payload,
  IPostChineseMedicineCategory0dc0Response,
  IQuerySupplierListfe09Payload,
  IQuerySupplierListfe09Response,
  IPutStatus0e26Params,
  IPutStatus0e26Payload,
  IPutStatus0e26Response,
  IPutSupplier6ba1Params,
  IPutSupplier6ba1Payload,
  IPutSupplier6ba1Response,
  IDeleteSupplier6ba1Params,
  IDeleteSupplier6ba1Payload,
  IDeleteSupplier6ba1Response,
  IGetSupplier6ba1Params,
  IGetSupplier6ba1Payload,
  IGetSupplier6ba1Response,
  IPostSupplierfe09Payload,
  IPostSupplierfe09Response,
  IPostTakeOutWarehouseOrder7758Payload,
  IPostTakeOutWarehouseOrder7758Response,
  IQueryCategoryList1501Payload,
  IQueryCategoryList1501Response,
  IGetCategory5854Params,
  IGetCategory5854Payload,
  IGetCategory5854Response,
  IGetGetByBizId898cPayload,
  IGetGetByBizId898cResponse,
  IQueryDirectSubChildrenList5151Payload,
  IQueryDirectSubChildrenList5151Response,
  IQueryBaseChineseMedcineLista637Payload,
  IQueryBaseChineseMedcineLista637Response,
  IQueryBaseWesternMedcineListfc05Payload,
  IQueryBaseWesternMedcineListfc05Response,
  IQueryAvailableReturnStorageList6783Payload,
  IQueryAvailableReturnStorageList6783Response,
  IGetExport9762Payload,
  IGetExport9762Response,
  IPutBatchSaveLockedStorageNum0d90Payload,
  IPutBatchSaveLockedStorageNum0d90Response,
  IPostGetRecommendedTakeOutList9789Payload,
  IPostGetRecommendedTakeOutList9789Response,
  IPutWarehouse0482Params,
  IPutWarehouse0482Payload,
  IPutWarehouse0482Response,
  IQueryWarehouseListee28Payload,
  IQueryWarehouseListee28Response,
  IQueryStorageListfedfPayload,
  IQueryStorageListfedfResponse,
  IPutStatus8f1aParams,
  IPutStatus8f1aPayload,
  IPutStatus8f1aResponse,
  IPostWarehouseee28Payload,
  IPostWarehouseee28Response,
  IGetWarehouse0482Params,
  IGetWarehouse0482Payload,
  IGetWarehouse0482Response,
  IPutMaterial72c0Params,
  IPutMaterial72c0Payload,
  IPutMaterial72c0Response,
  IPutPutInWarehouseOrderd32bParams,
  IPutPutInWarehouseOrderd32bPayload,
  IPutPutInWarehouseOrderd32bResponse,
  IQueryPutInWarehouseOrderList31c9Payload,
  IQueryPutInWarehouseOrderList31c9Response,
  IDeletePutInWarehouseOrderd32bParams,
  IDeletePutInWarehouseOrderd32bPayload,
  IDeletePutInWarehouseOrderd32bResponse,
  IPostCheck9a8aParams,
  IPostCheck9a8aPayload,
  IPostCheck9a8aResponse,
  IPostPutInWarehouseOrder31c9Payload,
  IPostPutInWarehouseOrder31c9Response,
  IGetPutInWarehouseOrderd32bParams,
  IGetPutInWarehouseOrderd32bPayload,
  IGetPutInWarehouseOrderd32bResponse,
  IGetForPrint12daParams,
  IGetForPrint12daPayload,
  IGetForPrint12daResponse,
  IPutTakeOutWarehouseOrder9ee5Params,
  IPutTakeOutWarehouseOrder9ee5Payload,
  IPutTakeOutWarehouseOrder9ee5Response,
  IQueryTakeOutWarehouseOrderList503cPayload,
  IQueryTakeOutWarehouseOrderList503cResponse,
  IDeleteTakeOutWarehouseOrder9ee5Params,
  IDeleteTakeOutWarehouseOrder9ee5Payload,
  IDeleteTakeOutWarehouseOrder9ee5Response,
  IPostChecke127Params,
  IPostChecke127Payload,
  IPostChecke127Response,
  IPostTakeOutWarehouseOrder503cPayload,
  IPostTakeOutWarehouseOrder503cResponse,
  IGetTakeOutWarehouseOrder9ee5Params,
  IGetTakeOutWarehouseOrder9ee5Payload,
  IGetTakeOutWarehouseOrder9ee5Response,
  IGetForPrintb98fParams,
  IGetForPrintb98fPayload,
  IGetForPrintb98fResponse,
  IQueryMaterialList4e09Payload,
  IQueryMaterialList4e09Response,
  IDeleteMaterial72c0Params,
  IDeleteMaterial72c0Payload,
  IDeleteMaterial72c0Response,
  IQueryStorageList0d3fPayload,
  IQueryStorageList0d3fResponse,
  IQueryStorageByGoodsList608bPayload,
  IQueryStorageByGoodsList608bResponse,
  IGetExporta3e3Payload,
  IGetExporta3e3Response,
  IPutStorageCorrectOrder8455Params,
  IPutStorageCorrectOrder8455Payload,
  IPutStorageCorrectOrder8455Response,
  IQueryStorageCorrectOrderList48caPayload,
  IQueryStorageCorrectOrderList48caResponse,
  IDeleteStorageCorrectOrder8455Params,
  IDeleteStorageCorrectOrder8455Payload,
  IDeleteStorageCorrectOrder8455Response,
  IPostCheckb986Params,
  IPostCheckb986Payload,
  IPostCheckb986Response,
  IPostStorageCorrectOrder48caPayload,
  IPostStorageCorrectOrder48caResponse,
  IQueryDetailList058bParams,
  IQueryDetailList058bPayload,
  IQueryDetailList058bResponse,
  IGetStorageCorrectOrder8455Params,
  IGetStorageCorrectOrder8455Payload,
  IGetStorageCorrectOrder8455Response,
  IPostMaterial4e09Payload,
  IPostMaterial4e09Response,
  IGetMaterial72c0Params,
  IGetMaterial72c0Payload,
  IGetMaterial72c0Response,
  IPutStatus89d5Params,
  IPutStatus89d5Payload,
  IPutStatus89d5Response,
  IPostAutoPutIn3117Payload,
  IPostAutoPutIn3117Response,
  IPostAutoTakeOutdc5dPayload,
  IPostAutoTakeOutdc5dResponse,
  IPostCancelb213Params,
  IPostCancelb213Payload,
  IPostCancelb213Response,
  IPostRetailOrdercf90Payload,
  IPostRetailOrdercf90Response,
  IPutMaterialCategorybee0Params,
  IPutMaterialCategorybee0Payload,
  IPutMaterialCategorybee0Response,
  IQueryMaterialCategoryList738aPayload,
  IQueryMaterialCategoryList738aResponse,
  IDeleteMaterialCategorybee0Params,
  IDeleteMaterialCategorybee0Payload,
  IDeleteMaterialCategorybee0Response,
  IPostMaterialCategory738aPayload,
  IPostMaterialCategory738aResponse,
  IGetInstruction9b51Payload,
  IGetInstruction9b51Response,
  IQueryMedicineList8cc4Payload,
  IQueryMedicineList8cc4Response,
  IPutPutInWarehouseOrdere938Params,
  IPutPutInWarehouseOrdere938Payload,
  IPutPutInWarehouseOrdere938Response,
  IQueryPutInWarehouseOrderList8847Payload,
  IQueryPutInWarehouseOrderList8847Response,
  IDeletePutInWarehouseOrdere938Params,
  IDeletePutInWarehouseOrdere938Payload,
  IDeletePutInWarehouseOrdere938Response,
  IPostCheckdd9eParams,
  IPostCheckdd9ePayload,
  IPostCheckdd9eResponse,
  IPostPutInWarehouseOrder8847Payload,
  IPostPutInWarehouseOrder8847Response,
  IGetPutInWarehouseOrdere938Params,
  IGetPutInWarehouseOrdere938Payload,
  IGetPutInWarehouseOrdere938Response,
  IGetForPrint8112Params,
  IGetForPrint8112Payload,
  IGetForPrint8112Response,
  IQueryMaintenanceListae37Payload,
  IQueryMaintenanceListae37Response,
  IPostMaintenanceae37Payload,
  IPostMaintenanceae37Response,
  IGetMaintenance935fParams,
  IGetMaintenance935fPayload,
  IGetMaintenance935fResponse,
  IPutTakeOutWarehouseOrderf6feParams,
  IPutTakeOutWarehouseOrderf6fePayload,
  IPutTakeOutWarehouseOrderf6feResponse,
  IQueryTakeOutWarehouseOrderList7723Payload,
  IQueryTakeOutWarehouseOrderList7723Response,
  IDeleteTakeOutWarehouseOrderf6feParams,
  IDeleteTakeOutWarehouseOrderf6fePayload,
  IDeleteTakeOutWarehouseOrderf6feResponse,
  IPostChecke31eParams,
  IPostChecke31ePayload,
  IPostChecke31eResponse,
  IPostTakeOutWarehouseOrder7723Payload,
  IPostTakeOutWarehouseOrder7723Response,
  IGetTakeOutWarehouseOrderf6feParams,
  IGetTakeOutWarehouseOrderf6fePayload,
  IGetTakeOutWarehouseOrderf6feResponse,
  IGetForPrint711eParams,
  IGetForPrint711ePayload,
  IGetForPrint711eResponse,
  IQueryMedicineList1577Payload,
  IQueryMedicineList1577Response,
  IQueryStorageListb13bPayload,
  IQueryStorageListb13bResponse,
  IQueryStorageByGoodsListcc9aPayload,
  IQueryStorageByGoodsListcc9aResponse,
  IGetExport944dPayload,
  IGetExport944dResponse,
  IPutStorageCorrectOrder9b60Params,
  IPutStorageCorrectOrder9b60Payload,
  IPutStorageCorrectOrder9b60Response,
  IQueryStorageCorrectOrderListab0aPayload,
  IQueryStorageCorrectOrderListab0aResponse,
  IDeleteStorageCorrectOrder9b60Params,
  IDeleteStorageCorrectOrder9b60Payload,
  IDeleteStorageCorrectOrder9b60Response,
  IPostCheck4d2cParams,
  IPostCheck4d2cPayload,
  IPostCheck4d2cResponse,
  IPostStorageCorrectOrderab0aPayload,
  IPostStorageCorrectOrderab0aResponse,
  IQueryDetailList9c7aParams,
  IQueryDetailList9c7aPayload,
  IQueryDetailList9c7aResponse,
  IGetStorageCorrectOrder9b60Params,
  IGetStorageCorrectOrder9b60Payload,
  IGetStorageCorrectOrder9b60Response,
  IPostAutoPutInc5e3Payload,
  IPostAutoPutInc5e3Response,
  IPostAutoTakeOutbfadPayload,
  IPostAutoTakeOutbfadResponse,
  IPostCancel3768Params,
  IPostCancel3768Payload,
  IPostCancel3768Response,
  IPostRetailOrder1402Payload,
  IPostRetailOrder1402Response,
  IPostImportFromBased2d6Payload,
  IPostImportFromBased2d6Response,
  IPostImportFromFileb04fPayload,
  IPostImportFromFileb04fResponse,
  IQueryWesternMedcineListf8dfPayload,
  IQueryWesternMedcineListf8dfResponse,
  IDeleteWesternMedcine83a0Params,
  IDeleteWesternMedcine83a0Payload,
  IDeleteWesternMedcine83a0Response,
  IPutStorageWarnNum9747Payload,
  IPutStorageWarnNum9747Response,
  IPutAllowDiscount223cPayload,
  IPutAllowDiscount223cResponse,
  IPutValidityWarnDays50dePayload,
  IPutValidityWarnDays50deResponse,
  IPostWesternMedicinef630Payload,
  IPostWesternMedicinef630Response,
  IPutWesternMedicine387cParams,
  IPutWesternMedicine387cPayload,
  IPutWesternMedicine387cResponse,
  IPutWesternMedcined8f6Params,
  IPutWesternMedcined8f6Payload,
  IPutWesternMedcined8f6Response,
  IGetWesternMedicine2675Params,
  IGetWesternMedicine2675Payload,
  IGetWesternMedicine2675Response,
  IPutStatus27f4Params,
  IPutStatus27f4Payload,
  IPutStatus27f4Response,
  IPutWesternMedicineCategory5d88Params,
  IPutWesternMedicineCategory5d88Payload,
  IPutWesternMedicineCategory5d88Response,
  IQueryWesternMedicineCategoryList99b9Payload,
  IQueryWesternMedicineCategoryList99b9Response,
  IDeleteWesternMedicineCategory5d88Params,
  IDeleteWesternMedicineCategory5d88Payload,
  IDeleteWesternMedicineCategory5d88Response,
  IPostWesternMedicineCategory99b9Payload,
  IPostWesternMedicineCategory99b9Response,

}
