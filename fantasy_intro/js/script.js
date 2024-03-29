$(document).ready(function(){

	$(".section1 .phone").removeClass("act_phone");

	$(window).ready(function(){
		$(".section1 .phone").addClass("act_phone");
	});

	//skip
	$(".skip").mouseover(function(){
		$(this).text("Skip to website");
	});
	$(".skip").mouseleave(function(){
		$(this).text("Skip");
	});

	//keyword slide
	$(".section4 .slide_frame").slick({
		infinite:true, //초기 슬라이드로 회전시키겟다(append 방식임)
		slidesToShow:5, //현재화면상에 보이는 슬라이드 몇번째꺼를 보여줄지
		slidesToScroll:1, //한번에 움직이는 스크롤수
		autoplay:true,
		autoplaySpeed:1000, //이미지 대기시간
		speed:500, //슬라이드의 전환속도
		dots:false,
		pauseOnHover:false //마우스오버햇을시 일시정지
	});

	//scroll
	var $current=$(this).scrollTop();
	console.log($current);

	$(function(){
		$(window).scroll(function () {
			if ($(this).scrollTop() > 400) {
				$(".section2 .sec2_txt").addClass("sec2_scroll");
			}
			if ($(this).scrollTop() > $(".fake3").offset().top) {
				$(".per_bx:nth-child(1) .per_bar").addClass("sec3_down_scroll");
				$(".per_bx:nth-child(2) .per_bar").addClass("sec3_up_scroll");
				$(".per_bx:nth-child(1) .cur_per").text("24%");
				$(".per_bx:nth-child(2) .cur_per").text("36%");
			}
			if ($(this).scrollTop() > $(".fake5").offset().top) {
				$(".section5 .tablet").addClass("sec5_tb_scroll");
				$(".section5 .phone").addClass("sec5_ph_scroll");
			}
			if ($(this).scrollTop() > $(".fake6").offset().top) {
				$(".section6>p").addClass("sec6_txt");
				$(".section6 .responsive").addClass("sec6_bg");
			}
			if ($(this).scrollTop() > $(".fake7").offset().top) {
				$(".section7>.title").addClass("sec7_tt_scroll");
				$(".section7>.subtitle").addClass("sec7_st_scroll");
				$(".section7>.stroke .dark").addClass("sec7_bg_scroll");
			}

			if ($(this).scrollTop() < 400) {
				$(".section2 .sec2_txt").removeClass("sec2_scroll");
			}
			if ($(this).scrollTop() < $(".fake3").offset().top) {
				$(".per_bx:nth-child(1) .per_bar").removeClass("sec3_down_scroll");
				$(".per_bx:nth-child(2) .per_bar").removeClass("sec3_up_scroll");
				$(".per_bx:nth-child(1) .cur_per").text("32%");
				$(".per_bx:nth-child(2) .cur_per").text("28%");
				}
			if ($(this).scrollTop() < $(".fake5").offset().top) {
				$(".section5 .tablet").removeClass("sec5_tb_scroll");
				$(".section5 .phone").removeClass("sec5_ph_scroll");
			}
			if ($(this).scrollTop() < $(".fake6").offset().top) {
				$(".section6>p").removeClass("sec6_txt");
				$(".section6 .responsive").removeClass("sec6_bg");
			}
			if ($(this).scrollTop() < $(".fake7").offset().top) {
				$(".section7>.title").removeClass("sec7_tt_scroll");
				$(".section7>.subtitle").removeClass("sec7_st_scroll");
				$(".section7>.stroke .dark").removeClass("sec7_bg_scroll");
			}

		});
	});




});