
const fs = require('fs')
const path = require('path')

const { tabSize } = require('./config')
const TAB = ' '.repeat(tabSize)

const isArray = type => type === 'array'
const isObject = type => type === 'object'
const isSimpleType = type => ['string', 'number', 'boolean'].includes(type)
const fillIndent = (level = 1) => TAB.repeat(level)
const upperWordInitial = word => word.slice(0, 1).toUpperCase() + word.slice(1)
const encodeText = (str, encodeLength, encodeType = 'md5') => {
  const crypto = require('crypto')
  const hash = crypto.createHash(encodeType)
  hash.update(str)
  let encodedText = hash.digest('hex')
  return encodeLength <= encodedText.length ? encodedText.slice(0, encodeLength) : encodedText
}

const parseFileName = (name, replace) => {
  const placeholder = '[name]'
  return name.replace(placeholder, replace)
}

const writeFile = (dir, text, cb, async = true) => {
  let relativePath = path.relative(process.cwd(), dir)

  // 如果路径中有文件夹，则检验指定文件夹是否存在。不存在则生成
  let dirPath = path.parse(relativePath).dir
  if (dirPath) {
    let basePath = ''
    // 遍历路径，如果路径中文件夹不存在，则先创建文件夹
    dirPath.split('/').forEach(folder => {
      basePath = path.resolve(basePath, folder)
      try {
        fs.statSync(basePath)
      } catch (err) {
        fs.mkdirSync(basePath)
      }
    })
  }

  if (async) {
    fs.writeFile(dir, text, cb)
  } else {
    fs.writeFileSync(dir, text)
    cb()
  }
}

module.exports = {
  isArray,
  isObject,
  isSimpleType,
  fillIndent,
  upperWordInitial,
  encodeText,
  writeFile,
  parseFileName
}
