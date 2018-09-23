$(function(){
    var address = null ;
    // 渲染收货地址到页面
    $.ajax({
        url:'/address/queryAddress',
        type:'get',
        success:function(res){
            // console.log(res);
            address = res;
            var html = template("addressTpl",res);
            // console.log(html);
            $('.address-box').html(html);
        }
    });
    // 删除收货地址
    $('.address-box').on('tap','.delete-btn',function(){
        var id = this.getAttribute('data-id');
        var li = this.parentNode.parentNode;
        mui.confirm("确认要删除吗?",function(message){
            // console.log(message);取消index是0，确认是1
            if(message.index == 1){
                $.ajax({
                   url:'/address/deleteAddress',
                   type:'post',
                   data:{
                        id:id
                   },
                   success:function(res){
                        if(res.success){
                            location.reload();
                        }
                   }
                })
            }else{
                // mui框架提供的关闭滑出的属性
                mui.swipeoutClose(li);
            }
        });

       
    })

    //编辑收货地址
    $('.address-box').on('tap','.edit-btn',function(){
        var id = this.getAttribute('data-id');
        console.log(address);
        for(var i = 0;i<address.length;i++){
            if(address[i].id == id){
                localStorage.setItem('editAddress',JSON.stringify(address[i]));
                break;
            }
        }
        location.href = "addAddress.html?isEdit=1";
    })
})