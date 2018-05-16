define(['routes', 'toolKit'], function(routes, toolKit){
    
   
    function addSuffix() {

        if(location.hash === "" || location.hash === "#/") {
            return;
        }

        var hashDeatail = location.hash.split("?"),
        params = hashDeatail[1] ? hashDeatail[1].split("&") : [],//参数内容
        query = {};

        for(var i = 0;i<params.length ; i++){
            var item = params[i].split("=");
            query[item[0]] = item[1]
        }   

        if(query['_k']) {
            return;
        }

        if(params.length) {
            // location.hash = location.hash + '&_k=' + toolKit.randomString(6);
            // history.replaceState(null, "", location.href + '&_k=' + toolKit.randomString(6));  
            location.replace(location.href + '&_k=' + toolKit.randomString(6));  
        }else {
            // location.hash = location.hash + '?_k=' + toolKit.randomString(6);
            // history.replaceState(null, "", location.href + '?_k=' + toolKit.randomString(6));  
            location.replace(location.href + '?_k=' + toolKit.randomString(6));  
            
        }
    }

    function handleHash() {
       
        addSuffix();
        console.log(location.hash);
        if(location.hash === "" || location.hash === "#/") {
            location.hash = '#admin/home';
            return;
        }

        var hashDeatail = location.hash.split("?"),
            hashName = hashDeatail[0].split("#")[1],//路由地址
            hash = hashName.split('/'),
            module = hash[0], page = hash[1];
   
        if(!routes[module] || !(routes[module][page || 'index'])) {
            //不存在该页面,跳转到404页面
            location.hash = '#error/404';
            return;
        }else if(!page){
            //默认访问index
            page = 'index';   
        }
        var controller = routes[module][page];

        var viewpath = './' + module + '/view/' + controller.view + '.html';
        var csspath = controller.css ? '/' + module + '/css/' + controller.css + '.css': '';
        var jspath = './' + module + '/js/' + controller.js + '.js';
        
        require([jspath, 'text!' + viewpath], function(init, tpl){
            //加载对应的页面
            $('#root').html(tpl);
            //加载对应的css
            toolKit.initStyle(csspath);
            //执行对应的js文件
            init();
           
        });
    }

    return handleHash;
})