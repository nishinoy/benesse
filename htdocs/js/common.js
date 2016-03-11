$(function(){
	$(".drawer-trigger").click(function(){
	    $(this).toggleClass("open").children("div").slideToggle();
	});
	$(".question").click(function(){
    $(this).next(".answer").slideToggle();
    $(this).children(".box-q-content").toggleClass("open");
	});
	$(".btn-part_btn").click(function(){
		$(this).blur() ;
		if($("#modal-overlay")[0]) return false ;
		$("body").append('<div id="modal-overlay"></div>');
		$("#modal-overlay").fadeIn("slow");
		var data = $(this).data('target');
		$("."+data).fadeIn("slow");
	});
	$("#modal-overlay").unbind().click(function(){
		alert("test");
	});
	$(".exit,#modal-overlay").unbind().click(function(){
		$(".modal-content").fadeOut("slow");
		$("#modal-overlay").fadeOut("slow",function(){
			$("#modal-overlay").remove();
		});
	});
});
$(document).ready(function() {
  $('.drawer').drawer({
  iscroll: {
    // Configuring the iScroll
    // https://github.com/cubiq/iscroll#configuring-the-iscroll
    mouseWheel: true,
    preventDefault: false
  },
  showOverlay: true
});
	$(function(){
		$(".drawer-trigger").click(function(){
			$(this).toggleClass("open").children("div").slideToggle();
		});
	});
});
