var sql = require('mssql');


	// 'DB_TYPE'=>'sqlsrv', // 数据库类型
 //    'DB_HOST'=>'10.0.51.68', // 服务器地址
 //    'DB_NAME'=>'HXOA', // 数据库名
 //    'DB_USER'=>'sa', // 用户名
 //    'DB_PWD'=>'super_sa',  // 密码

//连接方式1："mssql://用户名:密码@ip地址（无需端口号）/SqlServer名/数据库名称"
//连接方式2："mssql://用户名:密码@ip地址:1433(默认端口号)/数据库名称"
sql.connect("mssql://sa:super_sa@10.0.51.68/HXOA").then(function() {
//sql.connect("mssql://sa:123@localhost:1433/test").then(function() {
    // Query
    new sql.Request().query('select * from users where UserName=\'国\'').then(function(recordset) {
        console.log(recordset);
    }).catch(function(err) {
       console.log(err);
    });
    // Stored Procedure
}).catch(function(err) {
    console.log(err);
});
