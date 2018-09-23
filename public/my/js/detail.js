$(function(){
    var stock = 0;
    var size = null;
    var id = getParamsByUrl(location.href,'id');
    $.ajax({
        url:'/product/queryProductDetail',
        type:'get',
        data:{
            id:id
        },
        success:function(res){
            console.log(res);
            stock = res.num;
            var html = template("productTpl",res);
            // console.log(html);
            $('#product-box').html(html);

            //获得slider插件对象
            var gallery = mui('.mui-slider');
            gallery.slider();

        }
    });

    $('#product-box').on('tap','.size span',function(){
        $(this).addClass('active').siblings('span').removeClass('active');
        size = $(this).text();
        // console.log(size);
    });

        var num = 0;
    // 数量加
    $('#product-box').on('tap','#increase',function(){
        num= $('#inp').val();
        // console.log(numNow);
        num++;
        if(num > stock){
            num = stock;
        }
        $('#inp').val(num);
        
    });
    // 数量减
    $('#product-box').on('tap','#reduce',function(){
        
        var num = $('#inp').val();
        num--;
        if(num < 1){
            num =1;
        }
        $('#inp').val(num);
    });

    //加入购物车
    $('#addCart').on('tap',function(){
        if(!size){
            mui.toast('请选择尺码');
            return;
        }
        $.ajax({
            url:'/cart/addCart',
            type:'post',
            data:{
                productId:id,
                num:num,
                size:size
            },
            success:function(res){
                if(res.error){
                    mui.toast(res.message);

                }else{
                    mui.confirm('加入购物车成功，跳转到购物车?',function(message){
                        // console.log(message);
                        if(message.index == 1){
                            location.href = "cart.html";
                        }
                    });
                }
            }
        });
    });



});