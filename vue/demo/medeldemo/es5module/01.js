// 创建js方法
const sum = function (a, b) {

  return parseInt(a) + parseInt(b)

}

const subtract = function (a, b) {

  return parseInt(a) - parseInt(b)
}

// 设置哪些方法可以被别人调用

module.exports = {
  sum,
  subtract
}
