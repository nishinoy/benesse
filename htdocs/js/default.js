// JavaScript Document

//rollover1
$(function(){
   $('a img').hover(function(){
     $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
   }, function(){
     if (!$(this).hasClass('currentPage')) {
     $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
   }
   });
   
});

//rollover2
$(document).ready(
  function(){
    $(".rollover, ul.button a img, ul.button input") .hover(function(){
       $(this).fadeTo("2000",0.5); 
    },function(){
       $(this).fadeTo("2000",1.0); 
  });
  });

//scroll
//$(function(){
//
//	$('a[href^=#], area[href^=#]').click(function(){
//		var speed = 500;
//		var href= $(this).attr("href");
//		var target = $(href == "#" || href == "" ? 'html' : href);
//		var position = target.offset().top;
//		$("html, body").animate({scrollTop:position}, speed, "swing");
//		return false;
//	});
//});

$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});


/* acordion */
$(function(){
  setTimeout(function () {
    $(".open").click(function(){
    if($(".nav-open").css("display")=="none"){
      $(".nav-open").slideDown("normal");
    }else{
      $(".nav-open").slideUp("normal");
    }
    });
  }, 600);

});

/* acordion2 */
    $(function(){
        $(".acMenu dt, .acMenu2 dt, .acMenu3 dt").on("click", function() {
            $(this).next().slideToggle();
            $(this).toggleClass("active");//追加部分
        });
    });
	
	
// for IE
jQuery(function() {
    if(navigator.userAgent.indexOf("MSIE") != -1) {
        jQuery('img').each(function() {
            if(jQuery(this).attr('src').indexOf('.png') != -1) {
                jQuery(this).css({
                    'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + jQuery(this).attr('src') + '", sizingMethod="scale");'
                });
            }
        });
    }
});
	





  
