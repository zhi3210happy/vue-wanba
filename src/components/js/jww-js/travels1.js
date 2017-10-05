var as=document.querySelectorAll('.a');
var span=document.querySelectorAll('.a>span');
var big=document.querySelector('.big');
for(var i=0;i<as.length;i++){
	span[i].style.borderBottom='5px solid #fff';
	span[i].style.color='#181818';
}
span[0].style.borderBottom='5px solid #74ECFE';
span[0].style.color='#74ECFE';
for(var i=0;i<as.length;i++){
	as[i].index=i;
	as[i].onclick=function(){
		for(var j=0;j<as.length;j++){
			span[j].style.borderBottom='5px solid #fff';
			span[j].style.color='#181818';
		}
		span[this.index].style.borderBottom='5px solid #74ECFE';
		big.style.transform='translateX(-'+this.index*50+'%)';
		span[this.index].style.color='#74ECFE';
	}
}
var numbered=document.querySelectorAll('.numbered');
var more=document.querySelectorAll('.numbered .more');
var flag=true;
var arr=['14.5rem','14.5rem','1.5rem','2.3rem','1.5rem']
for(var i=0;i<more.length;i++){
	more[i].index=i;
	more[i].onclick=function(){
		flag=!flag;
		if(flag==false){
			numbered[this.index].style.height='auto';
			more[this.index].innerHTML='收起';
		}else{
			numbered[this.index].style.height=arr[this.index];
			more[this.index].innerHTML='查看更多';

		}
	}
}