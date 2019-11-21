$(document).ready(function(){

	$(".of_slide").slick({
		infinite:true, //초기 슬라이드로 회전시키겟다(append 방식임)
		slidesToShow:1, //현재화면상에 보이는 슬라이드 몇번째꺼를 보여줄지
		slidesToScroll:1, //한번에 움직이는 스크롤수
		autoplay:true,
		autoplaySpeed:3000, //이미지 대기시간
		speed:1000, //슬라이드의 전환속도
		dots:false,
		centerMode:true,
		pauseOnHover:true //마우스오버햇을시 일시정지
	});

	$("button").text("");
	$(".slick-prev").text("PREV");
	$(".slick-next").text("NEXT");




});