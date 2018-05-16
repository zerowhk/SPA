define([], function(){
    var initStyle = function(path) {
        var link = document.createElement('link');
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = path;
        document.getElementById('root').appendChild(link);
    },
    getParams = function(name) {
        var hashDeatail = location.hash.split("?"),
        params = hashDeatail[1] ? hashDeatail[1].split("&") : [],//参数内容
        query = {};
        for(var i = 0; i < params.length; i++){
            var item = params[i].split("=");
            query[item[0]] = item[1]
        }       
        return query[name];
    },
    randomString = function (len) {

        len = len || 32;
  
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678',
          maxPos = $chars.length,
          pwd = '';
  
        for (i = 0; i < len; i++) {
          pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
      }
    ;

    return {
        initStyle: initStyle,
        getParams: getParams,
        randomString: randomString
    }
})