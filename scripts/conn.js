var mysql = require('mysql')
var mysql_user = {
  host: 'localhost',//主机地址（默认为：localhost）
  user: 'root',//用户名
  password: 'tjh6220103',//密码
  database: 'reactDemo'//数据库名
}

var connection = mysql.createConnection(mysql_user, { multipleStatements: true })//创建一个连接


module.exports = {
  connection //将此模块给暴露出去
}
//连接数据库
connection.connect((err) => {
  if (err) {
    console.log(err.message)
    console.log("数据库连接失败")
  }
  else {
    console.log("数据库连接成功")
  }
})
var find2 = "select * from one"
connection.query(find2, function (err, result) {
  if (err) {   //链接失败 直接return;
    console.log('[错误]' + err)
    return
  };

  if (result.length) {   //如果查到了数据
    console.log('查到信息!')
    console.log(result[0])
  }
  else {
    console.log('未查到信息!')
  }
})
