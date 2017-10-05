var as=document.querySelectorAll('.a');
var span=document.querySelectorAll('.a>span');
var big=document.querySelector('.big');
for(var i=0;i<as.length;i++){
	span[i].style.borderBottom='5px solid #fff';
}
span[0].style.borderBottom='5px solid #525252';
for(var i=0;i<as.length;i++){
	as[i].index=i;
	as[i].onclick=function(){
		for(var j=0;j<as.length;j++){
			span[j].style.borderBottom='5px solid #fff';
		}
		span[this.index].style.borderBottom='5px solid #525252';
		big.style.transform='translateX(-'+this.index*50+'%)';
	}
}
var sunday=document.querySelectorAll('sundy');
var sundayTop=document.querySelectorAll('sundy-top');
var spans=document.querySelectorAll('apan>sundayTop');
for(var i=0;i<spans.length;i++){
	spans[i].onclick=function(){
		for(var j=0;j<spans.length;j++){
			
		}
	}
}