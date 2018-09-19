$(function(){
    $('#modify-btn').on('tap',function(){
        var originPass = $('[name="originPass"]').val().trim();
        var newPass = $('[name="newPass"]').val().trim();
        var confirmNewPass = $('[name="confirmNewPass"]').val().trim();
        var vCode = $('[name="vCode"]').val().trim();
        if(!originPass){
            mui.toast("请输入原密码");
            return;
        }
        if(newPass != confirmNewPass){
            mui.toast("两次输入的密码不一致");
            return;
        }
        //发送修改密码请求
        $.ajax({
            url:'/user/updatePassword',
            type: 'post',
            data :{
                oldPassword:originPass,
                newPassword:newPass,
                vCode:vCode
            },
            success:function(res){
                if(res.success){
                    mui.toast("修改密码成功");
                    setTimeout(function(){
                        location.href = "login.html";
                    },2000)
                }
            }
        })
        
    });

    $('#getCode').on('tap',function(){
        $.ajax({
            url:'/user/vCodeForUpdatePassword',
            type: 'get',
            success:function(res){
                console.log(res.vCode);
            }
        })
    })
});