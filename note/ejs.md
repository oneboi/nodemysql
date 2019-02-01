
## ejs 
ejs 是express模板引擎

1.ejs模板安装方法
```
npm install ejs -S
```
2.目录下安装好了之后，如何调用呢，如下所示：

//指定渲染模板文件的后缀名为ejs
```
app.set('view engine', 'ejs');
```

默认ejs模板只支持渲染以ejs为扩展名的文件，可能在使用的时候会觉得它的代码书写方式很不爽还是想用html的形式去书写，该怎么办呢，这时就得去修改模板引擎了，也就会用到express的engine函数。

engine注册模板引擎的函数，处理指定的后缀名文件。

// 修改模板文件的后缀名为html
```
app.set( 'view engine', 'html' );
```
// 运行ejs模块

```
app.engine( '.html', require( 'ejs' ).__express );
```

"__express"，ejs模块的一个公共属性，表示要渲染的文件扩展名


## 静态资源中间件 

app.use(express.static(require('path').join(__dirname, 'public')));


PS：express.static —— 指定静态文件的查找目录。

使用use函数调用中间件指定express静态访问目录，'public'就是我们我们新建的用来存放静态文件的总目录。

## 渲染视图 

和静态文件一样，我们也要设置views存放的目录，如下：
// 设定views变量，意为视图存放的目录
```
app.set('views', __dirname);
```

```
1.render函数，对网页模板进行渲染。

2.格式：res.render(view, [locals], callback);

```


res.redirect("http://www.hubwiz.com");
例2：跳转指定页面，比如登陆页，如下：

## 重定向

redirect方法允许网址的重定向，跳转到指定的url并且可以指定status，默认为302方式。

格式：res.redirect([status], url);

例1：使用一个完整的url跳转到一个完全不同的域名。

res.redirect("http://www.hubwiz.com");
例2：跳转指定页面，比如登陆页，如下：

res.redirect("login");



## ejs 语法



## 输出 

是我不想让他转义，只想要他显示链接。

错误原因

使用了ejs的 <%= code %>，ejs会自动帮我们转义

解决办法

<%- code %>就不会转义了。

记录学习

<% code %>用于执行其中javascript代码； 
<%= code %>会对code进行html转义； 
<%- code %>将不会进行转义


## 循环

<% data.forEach(function(obj){ %>  
      <tr>
      <td> <%= obj.title %>  </td>
      <td> <%= obj.summary %>  </td>
      <td> <%= obj.auth %>  </td>
      <td> <%= obj.category %>  </td>
       <td><a href="/detail/?id=<%= obj.id %>" role="button" class="btn btn-success" >查看</a> </td>
    </tr>

    <% }) %>

```
    data.forEach(function(obj){

        })
```
