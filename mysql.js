var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'root',
  database : 'node'
});
 

connection.connect();
 
exports.con=function(cb){

var bool=false;

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  bool=results[0].solution
  cb(bool)
});

}
exports.add=function (tablename,data,cb){
    var key=[];
    var keys=[];
    var value=[];
    for(let i  in data){
        key.push(i);
        keys.push('?')
       value.push(data[i]);
    }
	var  sql = 'INSERT INTO '+ tablename+'('+key.join(',')+') VALUES('+keys.join(',')+')';
	connection.query(sql,value,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }else{
        	cb(result)
        }          
});
}

exports.delete=function (){

}

exports.save=function (){

}

exports.select=function (tablename,cb){

var  sql = 'SELECT * FROM '+tablename;
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }else{
          cb(result)
        }

      
})

}


exports.find=function (tablename,id,cb){

var  sql = 'SELECT * FROM '+tablename +" where id="+id;
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }else{
          cb(result)
        }
      
})

}


exports.getlist=function (tablename,data,cb){

  let  offset=(data.page-1)*data.size
var  sql = 'SELECT * FROM '+tablename +' order by id asc'  +" limit " +offset+' , '+ data.size ;
var  datalist;

console.log(sql);

var sql2='SELECT count(*) as count FROM ' +tablename;

//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }else{


          datalist=result;

          connection.query(sql2,function (err, result) {
        if(err){
                  console.log('[SELECT ERROR] - ',err.message);
                  return;
                }else{
        
              cb(datalist,result[0].count);

                }  
        })

  

        }  
})

//查




}
