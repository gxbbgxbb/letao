$(function(){
    var isEdit = Number(getParamsByUrl(location.href,'isEdit'));
    // console.log(isEdit);

    if(isEdit){
        // 编辑操作
        if(localStorage.getItem("editAddress")){
            var address = JSON.parse(localStorage.getItem("editAddress"));
            var html  = template("editTpl",address);
            console.log(address);
            $('#editForm').html(html);
        }
    }else{
        var html = template("editTpl",{});
        $('#editForm').html(html);
    }
    //创建piker选择器，设置为3列，三级联动
    var picker = new mui.PopPicker({layer:3}); 
    // 为picker选择器添加数据
    picker.setData(cityData);
    // 显示picker选择器
    $('#selectCity').on('tap',function(){
        picker.show(function (selectItems) {
            $('#selectCity').val(selectItems[0].text+selectItems[1].text+selectItems[2].text);
        })
    })

    // 添加收货地址
    $('#addAddress').on('tap',function(){
        var username = $('[name="username"]').val().trim();
        var postCode = $('[name="postCode"]').val().trim();
        var city = $('[name="city"]').val().trim();
        var detail = $('[name="detail"]').val().trim();
        if(!username){
            mui.toast("请输入收货人姓名");
            return;
        }
        if(!postCode){
            mui.toast("请输入邮政编码");
            return;
        }
         
        var data = {
            address:city,
            addressDetail:detail,
            recipients :username,
            postcode:postCode
        };
        if(isEdit){
            var url = "/address/updateAddress";
            data.id = address.id;
        }else{
            var url = "/address/addAddress";
        }
        $.ajax({
            url:url,
            type:'post',
            data:data,
            success:function(res){
                if(res.success){
                    if(isEdit){
                        mui.toast("地址修改成功");
                    }else{
                        mui.toast("地址添加成功");
                    }

                    setTimeout(function(){
                        location.href = "address.html";
                    },2000)
                }
            }
        })


    })
});