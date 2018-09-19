$(function(){
    $('#searchBtn').on('click',function(){
        var keyword = $('#keyword').val();
        if(!keyword){
            alert('请输入关键字');
            return;
        }
        //loaclStorage.getItem(key),获取指定key本地存储的值
        if(localStorage.getItem('keywords')){
            //将json字符串抓换成对象
            var keywords = JSON.parse(localStorage.getItem('keywords'));
            keywords.unshift(keyword);
            //将对象转换成json字符串
            localStorage.setItem('keywords',JSON.stringify(keywords));
        }else{
            localStorage.setItem('keywords',JSON.stringify([keyword]));
        }
        location.href = "search-list.html?keyword="+keyword;
    });

    if(localStorage.getItem('keywords')){
        var keywords = JSON.parse(localStorage.getItem('keywords'));

        $('#historySearch').html(template('historySearchTpl',{data:keywords}));
    }
    //清除历史记录
    $('#clearHistory').on('tap',function(){
        localStorage.removeItem('keywords');
        $('#historySearch').html('');
    })   
});