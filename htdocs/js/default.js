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
   // #�Ŏn�܂�A���J�[���N���b�N�����ꍇ�ɏ���
   $('a[href^=#]').click(function() {
      // �X�N���[���̑��x
      var speed = 400; // �~���b
      // �A���J�[�̒l�擾
      var href= $(this).attr("href");
      // �ړ�����擾
      var target = $(href == "#" || href == "" ? 'html' : href);
      // �ړ���𐔒l�Ŏ擾
      var position = target.offset().top;
      // �X���[�X�X�N���[��
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
            $(this).toggleClass("active");//�ǉ�����
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
	





  
