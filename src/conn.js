var mysql = require('mysql')
var mysql_user = {
  host: 'localhost',//主机地址（默认为：localhost）
  user: 'root',//用户名
  password: '',//密码
  database: 'reactDemo'//数据库名
}

var connection = mysql.createConnection(mysql_user, { multipleStatements: true })//创建一个连接


module.exports = {
  connection //将此模块给暴露出去
}