var navLeft=document.querySelectorAll('.nav-left');
var big=document.querySelector('.big');
for(var i=0;i<navLeft.length;i++){
	navLeft[i].style.background='#F2F2F2';
	navLeft[i].style.color='#181818';
}
navLeft[0].style.background='#74ECFE';
navLeft[0].style.color='#fff';
for(var i=0;i<navLeft.length;i++){
	navLeft[i].index=i;
	navLeft[i].onclick=function(){
		for(var j=0;j<navLeft.length;j++){
			navLeft[j].style.background='#F2F2F2';
			navLeft[j].style.color='#181818';
		}
		navLeft[this.index].style.background='#74ECFE';
		navLeft[this.index].style.color='#fff';
		big.style.transform='translateX(-'+this.index*33.3333333+'%)';
	}
}
var classify=document.querySelectorAll('.classify');
var bigs=document.querySelectorAll('.bigs');
for(var i=0;i<bigs.length;i++){
	var span=classify[i].querySelectorAll('.span');
	for(var j=0;j<span.length;j++){
		span[j].style.background='#E4E4E4';
		span[j].style.color='#323232';
	}
	span[0].style.background='#FD1440';
	span[0].style.color='#fff';
}
var flag=true;
var span=document.querySelectorAll('.span');
for(var k=0;k<bigs.length;k++){
	bigs[k].index=k;
	bigs[k].onclick=function(){
		flag=!flag;
		if(flag==false){
			for(var i=0;i<span.length;i++){
				span[i].index=i;
				span[i].onclick=function(){
					console.log(1)
					for(var j=0;j<span.length;j++){
						span[j].style.background='#E4E4E4';
						span[j].style.color='#323232';
					}
					span[this.index].style.background='#FD1440';
					span[this.index].style.color='#fff';
				}
			}
		}
	}
	
}