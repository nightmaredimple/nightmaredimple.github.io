// build time:Sun Mar 08 2020 18:18:01 GMT+0800 (中国标准时间)
$(document).ready(function(){function t(){var t=$("#footer").attr("position")?$(".container").height()+$("#footer").outerHeight(true):$(".container").height();if(t<window.innerHeight)$("#footer").css({position:"fixed",bottom:0,left:0,right:0}).attr("position","fixed");else $("#footer").removeAttr("style position")}t();$(window).on("resize scroll",t)});
//rebuild by neat 