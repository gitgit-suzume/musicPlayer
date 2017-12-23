/*
* 跨域
* https://www.cnblogs.com/ahole/p/5885122.html
* 1.cors
*   后台在返回头部中写Access-Control-Allow-Origin:被允许访问的源
*   e.g
*      router.get('/core', function(req, res){
*      res.set('Access-Control-Allow-Origin', 'http://localhost:3000/cors'}
*      res.send('Hello World!')
*   缺点：
*   1.不能懈怠cookie信息
*   2.不能使用自定义请求头部
*   3.要兼容IE浏览器
*   4.b格不高
*2.JSONP
*   原理:
*   a.在全局定义一个funName函数
*   b.在页面创建script, src格式为: 'url'+'?callback=funName&key1=value1'
*   c.后台定义一个借口接手cb、key等参数，逻辑计算，返回格式为字符串: funName({prop: value})
*   e.g.
*   //前端
*       $(function(){
*           let btn = $('button');
*           btn.on('click', function(){
*               JSONP({
*                   url: 'http://localhost:3000/jsonp',
*                   data:{ something },
*                   jsonp: 'ahole',                 //奇怪这个有什么用？
*                   success： function(data){
*                       alert(data.name + '\s Goddness is ' + data.guddness);
*                   }
*               })
*           })
*       })
*       fucntion JSONP(data){
*           let scritp = $(<script>),
*               src = data.url,
*               callback = data.success,
*               randomName = 'Ahole',
*               query = data.data;
*           src = src + ? + data.jsonp + '=' + randomName + '&';
*           for(let key of query) {
*               src = src + key + '=' + query[key] + '&'
*           }
*           script.attr('src', src)
*           document.body.appendCHild(script[0]);
*
*           window[randomName] = function(arg){
*               data.success(arg)
*           }
*       }
*   //后台
*       router.get('/jsonp', function(req, res){
*           let functionName = req.query.ahole;
*           let data = {
*               name: req.query.name,
*               goddness: req.query.goddness
*           }
*           data = JSON.stringify(data);
*           res.send(functionName + '(' + data + ')')
*           res.end()
*       })
*
*
*
*
* */
