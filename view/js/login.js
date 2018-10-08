$(function(){
        // 登录按钮的click 事件
    $("#login").click(function () {
    /// 获取用户名和密码
    var username=$("#username").val();
    var password=$("#password").val();
    console.log(username+"  "+password);

    // 将用户名和密码转发至服务端
    $.ajax({
        url:"http://neuedu.com/apis/user/login",
        method:"post",
        data:{"username":username,"password":password},
        success:function (data) {
            console.log(data);

            if(data.status==0){
                // username保存到本地
                var localstorage = window.localStorage;
                localstorage.setItem("username",data.data.username);
                // 页面跳转到home.html
                window.location.href="home.html";
            }else{
              $("#showerror").html(data.msg);
            }
        }
    });
});


});