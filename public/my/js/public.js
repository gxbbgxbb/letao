
$(function(){
    //页面滚动区域
    mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005
    });
    
    //跳转页面
    mui('body').on('tap','a',function(){

		mui.openWindow({url: this.href})

  });
  
  // 轮播图
  var gallery = mui('.mui-slider');
  gallery.slider({
    interval:1000
  });
});
