define([],function() {

    function getRoute(str) {
        return  {
            "js": str,
            "css": str,
            "view": str
        }
    }

    return {
        "error": {
            "404": getRoute('404')
        },
        "admin": {
            "index": getRoute('index'),
            "home": getRoute('home'),
        }
    }
}); 