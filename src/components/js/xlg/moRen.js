var designWidth=750;/*设计稿的宽度*/
window.addEventListener('resize',resize);
resize();
// rem fontSize 的大小
function resize(){
	var w=document.documentElement.clientWidth;
	var fontSize=w/designWidth*100;
	document.documentElement.style.fontSize=fontSize+'px';
}