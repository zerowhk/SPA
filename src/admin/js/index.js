define(['jquery', 'toolKit'], function($, toolKit) {
    'use strict';
    function init () {
        $('title').text('首页');
        initEvent();
    }

    function initEvent() {

        console.log(toolKit.getParams('name'));

        $('#btn').click(function() {
            alert('测试');
        });
    }
    return init;
});