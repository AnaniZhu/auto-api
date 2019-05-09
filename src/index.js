#! /usr/bin/env node
const program = require('commander')

const fs = require('fs')
const process = require('process')
const path = require('path')

const { fetchMocksData, login } = require('./api')
const { getLoginParams } = require('./interactive')
const { subscribeMockModules } = require('./config')
const { writeFile, fillIndent } = require('./utils')
const { LF } = require('./constant')

program
  .command('create')
  .description('初始化interface 和 request 文件')
// .option('-a, --name [moduleName]', '模块名称')
  .action(option => {
    init()
  })

program.parse(process.argv)

async function init () {
  const cwd = process.cwd()
  let cookieFileDir = path.resolve(cwd, 'node_modules', '.cache', 'automock', 'cookie.js')
  let cookie
  try {
    fs.statSync(cookieFileDir)
    console.log(LF + '🚄  自动登录中...' + LF)
    cookie = require(cookieFileDir).cookie
  } catch (err) {
    let loginInfo = await getLoginParams()
    cookie = await login(loginInfo)
    console.log('👏 登录成功' + LF)

    let cookieFileText = 'module.exports = {' + LF
    cookieFileText += fillIndent() + `cookie: '${cookie}'${LF}`
    cookieFileText += '}' + LF
    writeFile(cookieFileDir, cookieFileText, (err) => {
      console.log(err ? '❌ 记录登录态失败' : '✅ 已记录登录信息，下次可以免登陆')
    })
  }

  const { processResources } = require('./core')
  try {
    let resourcesGroup = await fetchMocksData(subscribeMockModules, cookie)
    resourcesGroup.forEach((resources, index) => {
      let moduleConfig = subscribeMockModules[index]
      processResources(resources, moduleConfig)
    })
  } catch (err) {
    console.log(LF + err.message + ', 程序结束')
  }
}
