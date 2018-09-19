var userInfo = null;

$.ajax({
    url: '/user/queryUserMessage',
    type: 'get',
    // 同步
    async: false,
    success:function(res){
        console.log(res);
        if(res.error && res.error == 400){
            location.href = "login.html";
        }
        userInfo = res;
    }
});
$(function(){
	
	$('#out').on('tap', function(){
		$.ajax({
			url: '/user/logout',
			type: 'get',
			success: function(res){
				if(res.success){
					mui.toast("退出登录成功");
					setTimeout(function(){
						location.href = "index.html";
					},2000);
				}

			}
		})

    });
    var html = template('userTpl',userInfo);
    $('#userInfoBox').html(html);



});