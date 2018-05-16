
require(['jquery', './public/js/handleHash.js', 'toolKit'], function($, handleHash, toolKit){


    $(function() {
        console.log('load');
        handleHash();
    });
    
    $(window).on("hashchange", function() {
        console.log('hashchange');
        handleHash();
    });
});







