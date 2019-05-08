
const axios = require('axios')
const ProgressBar = require('progress')

const {
  MOCK_REQUEST_URL,
  MOCK_LOGIN_URL
} = require('./constant')

async function login (data) {
  let result = await axios({
    url: MOCK_LOGIN_URL,
    method: 'POST',
    headers: {
      'origin': 'https://f2e.dxy.net',
      'referer': 'https://f2e.dxy.net/mock/'
    },
    data
  }).catch(err => {
    let errMsg = err.response.data.message
    return Promise.reject(errMsg)
  })
  let cookie = result.headers['set-cookie'][0].split(';')[0]
  return cookie
}
async function fetchMocksData (mockModules, cookie) {
  if (!mockModules || !mockModules.length) return Promise.reject(new Error('🙅‍♀️ 暂未订阅任何mock模块'))

  let requestPromises = []
  const progressLen = 100
  const bar = new ProgressBar('从APIMocker平台拉取数据中: [:bar] :percent :etas', {
    incomplete: ' ',
    total: progressLen
  })

  let hasError = false

  try {
    requestPromises = mockModules.map(({ hash: moduleHash }) => {
      return axios({
        url: `${MOCK_REQUEST_URL}/${moduleHash}?page=1&limit=10000`,
        method: 'get',
        headers: {
          Cookie: cookie
        }
      })
    })
    const timer = setInterval(function () {
      // 请求还没结束的话，进度条卡住
      if (hasError || bar.curr >= 99) {
        clearInterval(timer)
      } else {
        bar.tick()
      }
    }, 100)

    let resultList = await Promise.all(requestPromises)
    bar.tick(progressLen)

    return resultList.map(({ data: { resources } }) => resources)
  } catch (err) {
    hasError = true
    console.log('\nOh My God!!! ' + err.message)
    return []
  }
}

module.exports = {
  fetchMocksData,
  login
}
