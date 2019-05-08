const inquirer = require('inquirer')

async function getLoginParams () {
  let promps = [
    {
      type: 'input',
      name: 'email',
      message: '请输入邮箱账号',
      validate: function (email) {
        if (!email) return '账号不能为空'
        if (!/^.*@dxy\.cn/.test(email)) return '请输入正确的邮箱. eg: xxx@dxy.cn'
        return true
      }
    },
    {
      type: 'password',
      name: 'password',
      message: '请输入密码',
      validate: function (email) {
        if (!email) return '密码不能为空'
        return true
      }
    }
  ]
  let answers = await inquirer.prompt(promps)
  return answers
}

module.exports = {
  getLoginParams
}
