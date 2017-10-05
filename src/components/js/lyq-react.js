var dw = 750;
function resize(){
	var cw = window.innerWidth;
	var bi = cw/dw;
	document.documentElement.style.fontSize = bi * 100 +"px";
}
resize();
window.onresize=function(){
	resize();
};