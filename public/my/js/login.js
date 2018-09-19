$(function(){
    $('#login-btn').on('tap',function(){
        var username = $.trim($('[name = "username"]').val());
        var password = $('[name = "password"]').val().trim();
        // console.log(username);
        // console.log(password);
        if(!username){
            mui.toast("请输入用户名");
            return;
        }
        if(!password){
            mui.toast("请输入密码");
            return;
        }
        $.ajax({
            url: '/user/login',
            type: 'post',
            data: {
                username:username,
                password:password
            },
            beforeSend:function(){
                $('#login-btn').html("正在登录...");
            },
            success:function(res){
                // console.log(res);
                if(res.error){
                    mui.toast(res.message);
                    $('#login-btn').html("登录");
                }else{
                    mui.toast("登录成功");
                    $('#login-btn').html("登录");
                    setTimeout(function(){
                        location.href = "user.html";
                    },2000);
                }

            }
        })
    });
});