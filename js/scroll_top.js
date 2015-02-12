$(document).ready(function() {
	var scroll_div= '<div class="back_top"><ul><li id="bk-top">返回顶部^</li></ul></div>'
    $("html body").append(scroll_div)
})

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