
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

module.exports = {
  isArray,
  isObject,
  isSimpleType,
  fillIndent,
  upperWordInitial,
  encodeText
}
