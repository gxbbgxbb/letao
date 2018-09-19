$(function(){
    var address = null ;
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
    })
})