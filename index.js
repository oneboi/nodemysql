var express = require('express');
var path=require('path');

var fs=require('fs');
var app = express();

const upload = require('multer')({ dest: 'uploads/' });

app.set('views', path.join(__dirname,'view'));
app.set( 'view engine', 'html' );
app.engine( '.html', require( 'ejs' ).__express );
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));


// 引入json解析中间件
var bodyParser = require('body-parser');
// 添加json解析
app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser  
app.use(bodyParser.urlencoded({extended: false}));

var db=require('./mysql');

app.get('/',function(req,res){

    db.select('article',function(result){
          res.render('index',{data:result});
    });
   
});

app.get('/demo',function(req,res){

          res.render('demo');

   
});

app.get('/detail',function(req,res){

    db.find('article',req.query.id,function(result){
          res.render('detail',{data:result[0]});
    });
   
});

app.get('/add',function(req,res){
    res.render('add');
});

app.post('/add',function(req,res){
  
  
     let data={
      title:req.body.title,
      summary:req.body.summary,
      preview:req.body.preview,
      category:req.body.category,
      auth:req.body.auth,
      content:req.body.content,
    };
 
    db.add('article',data,function(result){
            if(result.affectedRows){
                res.json({code:200,msg:'添加成功'})
            }
    });


});



app.get('/scroll',function(req,res){



    db.select('article',function(result){
          res.render('scroll',{data:result});
    });
   
});

app.post('/getlist',function(req,res){

            let data={
              page:req.body.page,
              size:req.body.size
            };
          db.getlist('article',data,function(datalist,count){
            
          res.json({code:200,data:datalist,count:count});
            });

});




// 文件上出

app.post('/upload', upload.single('preview'), (req, res) => {
  // 没有附带文件
  if (!req.file) {
    res.json({ ok: false,msg:'没有文件被上传' });
    return;
  }
  // 输出文件信息
  // console.log('====================================================');
  // console.log('fieldname: ' + req.file.fieldname); 
  // console.log('originalname: ' + req.file.originalname);
  // console.log('encoding: ' + req.file.encoding);
  // console.log('mimetype: ' + req.file.mimetype);
  // console.log('size: ' + (req.file.size / 1024).toFixed(2) + 'KB');

  // console.log('destination: ' + req.file.destination);
  // console.log('filename: ' + req.file.filename);
  // console.log('path: ' + req.file.path);
  // 重命名文件
  let oldPath = path.join(__dirname, req.file.path);

  let newPath = path.join(__dirname, 'uploads/' +  req.file.filename +path.extname(req.file.originalname));
  let dest='/'+req.file.filename +path.extname(req.file.originalname);
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      res.json({ ok: false ,msg:'文件保存失败'});
      console.log(err);
    } else {
      res.json({ ok: true ,msg:'文件上传成功',dest:dest});
    }
  });
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

