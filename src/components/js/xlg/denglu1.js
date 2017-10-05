var arr=[
	{name:'admin',pad:12345678},
	{name:'admin',pad:12345678}
]
var data={yi:false,er:false}
var dl1=$(".dl-zhong>.dl-input>input");
var dl2=$$(".dl-zhong>.dl-input>input")[1];
var dl3=$$(".dl-zhong>.dl-input>input")[2];
var image1=$$(".dl-zhong>.dl-input>.you>img")[0];
var image2=$$(".dl-zhong>.dl-input>.you>img")[1];
var img1=$$(".dl-zhong>.img>img")[0];
var img2=$$(".dl-zhong>.img>img")[1];

dl3.style.display='none';
image1.addEventListener('touchend',function(){
	dl1.value='';
	dl2.value='';
	dl3.value='';
	data.yi=false;
	data.er=false;
	dl2.disabled='disabled';
	dl3.disabled='disabled';
})
var flag=true;
image2.addEventListener('touchend',function(){
	if(flag){
		flag=false;
		dl3.value=dl2.value;
		dl2.style.display='none';
		dl3.style.display='block';
	}else{
		flag=true;
		dl2.value=dl3.value
		dl3.style.display='none';
		dl2.style.display='block';
	}
})



dl1.onblur=function(){
	var str=this.value;
	for(var i=0;i<arr.length;i++){
		if(str!=arr[i].name){
			img1.style.opacity=1;
			data.yi=false;
			dl2.disabled='disabled';
			dl3.disabled='disabled';
		}else{
			data.yi=true;
			dl2.disabled='';
			dl3.disabled='';
			img1.style.opacity=0;
			return;
		}
	}
}

dl1.onfocus=function(){
	img1.style.opacity=0;
	img2.style.opacity=0;
}

dl2.onblur=function(){
	var str=this.value;
	for(var i=0;i<arr.length;i++){
		if(str!=arr[i]['pad']){
			img2.style.opacity=1;
			data.er=false;
		}else{
			data.er=true;
			img2.style.opacity=0;
			return
		}
	}
}
dl2.onfocus=function(){
	if(data.yi){
		img2.style.opacity=0;
		dl2.disabled='';
	}else{
		dl2.disabled='disabled'
	}
}
dl3.onblur=function(){
	var str=this.value;
	for(var i=0;i<arr.length;i++){
		if(str!=arr[i]['pad']){
			img2.style.opacity=1;
			data.er=false;
		}else{
			data.er=true;
			img2.style.opacity=0;
			return
		}
	}
}
dl3.onfocus=function(){
	if(data.yi){
		img2.style.opacity=0;
		dl2.disabled='';
	}else{
		dl2.disabled='disabled'
	}
}

var hua=$$('.denglu1 .dl-xia .hua');
for(var i=0;i<hua.length;i++){
	hua[i].addEventListener('touchend',function(){
		if(this.className=='hua'){
			this.classList.add('active');
		}else{
			this.classList.remove('active');
		}
		
	})
}

var color=['#7C7C7C','#BFBEBE','#fff'];
var num1=0;
var num2=1;
var num3=2;
var div=$$('.denglu1 .dl-bottom .btn1 div');
var btn1=$('.denglu1 .dl-bottom .btn1');
var btn2=$('.denglu1 .dl-bottom .btn2');
btn1.addEventListener('touchend',function(){
	if(data.yi&&data.er){
		this.classList.add('active');
		var t=setInterval(function(){
			num2++;
			if(num2==div.length){
				num2=0;
			}
			num3=num2+1;
			if(num3==div.length){
				num3=0;
			}
			div[num1].style.background=color[0];			div[num2].style.background=color[1];
			div[num2].style.background=color[1];			div[num2].style.background=color[1];
			div[num3].style.background=color[2];
			num1=num2;
			
		},500)
		var d=setTimeout(function(){
			clearInterval(t);
			clearTimeout(d);
			location.href='../index.html';
		},2000)
	}
})










function $(obj){
	return document.querySelector(obj);
}
function $$(obj){
	return document.querySelectorAll(obj);
}