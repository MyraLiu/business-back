$(function(){
    // 商品详情的click 事件

        // 将用户名和密码转发至服务端
        $.ajax({
            url:"http://neuedu.com/apis/product/search",
            method:"post",
            data:{"pageno":1,"pagesize":10},
            dataType:"json",
            success:function (data) {
                console.log(data);

                if(data.status==0){
                    // 获取商品数据信息
                    alert("获取成功");

                }else{

                }
            }
        });



});