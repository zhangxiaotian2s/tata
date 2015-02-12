$(document).ready(function() {
	var scroll_div= '<div class="back_top"><ul><li id="bk-top"><a href="#top" style="color:#888">返回顶部^</a></li></ul></div>'
    $("html body").append(scroll_div)
})
var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

$(window).scroll(function() {
	if ($(window).scrollTop() > 100) {
		$(".back_top").fadeIn(1500);
	} else {
		$(".back_top").fadeOut(1500);
	}
})

$(document).on('click','#bk-top',function(){
$("html body").animate({
		scrollTop: 0
	}, 1000);
})