
window.onload=function(){
// 天数点击
$('.wjy-riqitian').click(function(){
	$('.wjy-riqitian').css({'background':'','color':'#fff'});
	$(this).css({'background':'#ffff00','color':'#122a79'});
});
// 星期
var flag2123=true;
$('.wjy-u2 span').click(function(){
		$('.wjy-u2 span').css({'color':'rgba(255,255,255,0.7)','font-size':'12px'});
		$(this).css({'color':'#fff','font-size':'14px'});
});



// 月
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 5,
    paginationClickable: true,
    spaceBetween: 30,
    initialSlide :0
});
// 月点击效果
$('.wjy-mei1').click(function(){
	$('.wjy-mei1').css({'color':'rgba(255,255,255,0.7)','font-size':'12px'});
	$(this).css({'color':'#fff','font-size':'14px'});
});


// cheng加减
$('.wjy-lbtn1').click(function(){
	var value=$('.wjy-text1')[0].innerHTML;
	$('.wjy-text1')[0].innerHTML=--value;
	if(value<0){
		$('.wjy-text1')[0].innerHTML=0;
	}
});
$('.wjy-rbtn1').click(function(){
	var value=$('.wjy-text1')[0].innerHTML;
	$('.wjy-text1')[0].innerHTML=++value;
});



// xiaohai加减
$('.wjy-lbtn2').click(function(){
	var value=$('.wjy-text2')[0].innerHTML;
	$('.wjy-text2')[0].innerHTML=--value;
	if(value<0){
		$('.wjy-text2')[0].innerHTML=0;
	}
});
$('.wjy-rbtn2').click(function(){
	var value=$('.wjy-text2')[0].innerHTML;
	$('.wjy-text2')[0].innerHTML=++value;
});
}