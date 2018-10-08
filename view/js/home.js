$(function(){

    // 从本地读取用户名
    var localstorage = window.localStorage;
    var username=localstorage.getItem("username");

    $("#_welcome_user").html("欢迎，"+username);



});