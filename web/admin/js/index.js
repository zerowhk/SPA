"use strict";define(["jquery","toolKit"],function(t,e){return function(){t("title").text("首页"),console.log(e.getParams("name")),t("#btn").click(function(){alert("测试")})}});