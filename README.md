# SPA
一个基于requirejs和grunt 的单页面应用

##  该应用的路由规则为 #/平台名/控制器名  
    应用靠获取平台名和控制器名之后再跟routes.js里导出的对象进行比较，然后加载相应的js、css、html文件
    
    routes.js 在/src/public/js下面, 这个文件夹主要存放用户自定义的js文件
    
    /src/public/jslib下面主要存放应用运行所需的js文件, 主要是requirejs的一些插件
