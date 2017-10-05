var nr=document.querySelector('.nr');
var nrAll=document.querySelectorAll('.nr');

function resize(){
	var cx=nr.offsetWidth;
	for(var i=0;i<nrAll.length;i++){
		nrAll[i].style.height=cx+'px';
	}
}
resize()
window.addEventListener('resize',resize);

var box=document.querySelector('.box-out');
var din=document.querySelectorAll('.din');
box.addEventListener('touchstart',function(e){
	for(var i=0;i<din.length;i++){
		din[i].style.display='none';
	}
	var obj=e.target.parentNode.querySelector('.din');
	obj.style.display='block';
})
















