
$(function () {
  //页面滚动区域
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005
  });

  //跳转页面,在移动端a标签默认不能跳转
  mui('body').on('tap', 'a', function () {

    mui.openWindow({ url: this.href })

  });

  // 轮播图
  var gallery = mui('.mui-slider');
  gallery.slider({
    interval: 1000
  });

});

function getParamsByUrl(url,name){
  //substr()截取字符串从索引数值开始
  //indexof()indexof()获取字符在字符串中首次出现的位置
  //split()把字符串按指定字符分割成数组
  var params = url.substr(url.indexOf('?')+1);
  var param = params.split('&');
  for(var i=0;i<param.length; i++){
    var current = param[i].split('=');
    if(current[0] == name){
      return current[1]
    }
  }
  return null;


}
