define(['jquery'], function($) {
    'use strict';
    function init () {
        $('title').text('Home页');
        initEvent();
    }

    function initEvent() {
      let test = `124456`;
      Object.assign({},{ a: 1 }, { b: 2 });
    }
    return init;
});