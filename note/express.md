
## 学习网址
http://www.expressjs.com.cn/

## 安装express
npm install express --save


##  Hello world 实例

注意：这里所创建是一个最最简单的 Express 应用，并且仅仅只有一个文件 — 和通过 
**Express 应用生成器** 所创建的应用_完全不一样_，Express 应用生成器所创建的应用框架包含多个 JavaScript 文件、Jade 模板和针对不同用途的子目录。

```
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
```
上面的代码启动一个服务并监听从 3000 端口进入的所有连接请求。他将对所有 (/) URL 或 路由 返回 “Hello World!” 字符串。对于其他所有路径全部返回 404 Not Found。

>req (请求) 和 res (响应) 与 Node 提供的对象完全一致，因此，你可以调用 req.pipe()、req.on('data', callback) 以及任何 Node 提供的方法。



## 重要的概念 


路由
中间件 
