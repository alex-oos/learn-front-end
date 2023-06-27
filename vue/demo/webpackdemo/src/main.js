const common = require('./common.js')
const utils = require('./utils.js')

//css文件引入 ,引入的时候后缀名不能省略
require('./style.css')

common.info('hello common ' + utils.add(1, 2))