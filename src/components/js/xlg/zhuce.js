var image1=$$(".zhong>.dl-inputs>.you>img")[0];
var image2=$$(".zhong>.dl-inputs>.you>img")[1];
var image3=$$(".zhong>.dl-inputs>.you>img")[2];
var dl1=$$(".zhong>.dl-inputs>input")[0];
var dl2=$$(".zhong>.dl-inputs>input")[1];
var dl3=$$(".zhong>.dl-inputs>input")[2];
var dl4=$$(".zhong>.dl-inputs>input")[3];
var dl5=$$(".zhong>.dl-inputs>input")[4];
var dl=$$(".zhong>.dl-inputs>input");
var flag=true;
var flog=true;
var arr={};
var str='';
var btn=$('.btn');
var right=$('.zhuce-input>.right');
var so=right.innerHTML;
var left=$('.zhuce-input>.left>input');

var ss='';
dl3.style.display='none';
dl5.style.display='none';
var img=$(".zhong>.imgs>img");
var img2=$$(".zhong>.imgs>img")[1];
var data={yi:false,er:false,san:false,si:false}

image1.addEventListener('touchend',function(){
	dl1.value='';
	dl2.value='';
	dl3.value='';
	dl4.value='';
	dl5.value='';
	left.value='';
	data.yi=false;
	data.er=false;
	data.san=false;
	data.si=false;
	dl2.disabled='disabled';
	dl3.disabled='disabled';
	dl4.disabled='disabled';
	dl5.disabled='disabled';
	left.disabled='disabled';
	right.innerHTML=so;
	img2.style.opacity=0;
})





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
image3.addEventListener('touchend',function(){
	if(flog){
		flog=false;
		dl5.value=dl4.value;
		dl4.style.display='none';
		dl5.style.display='block';
	}else{
		flog=true;
		dl4.value=dl5.value
		dl5.style.display='none';
		dl4.style.display='block';
	}
})



dl1.onblur=function(){
	var str=this.value;
	if(str.trim()){
		data.yi=true;
		dl2.disabled='';
		dl3.disabled='';
		arr.name=str;
	}else{
		data.yi=false;
		dl2.disabled='disabled';
		dl3.disabled='disabled';
	}
}




dl2.onblur=function(){
	str=this.value;
	if(str.trim()){
		data.er=true;
		dl4.disabled='';
		dl5.disabled='';
		// arr.name=str;
	}else{
		data.er=false;
		dl4.disabled='disabled';
		dl5.disabled='disabled';
	}
}

dl3.onblur=function(){
	str=this.value;
	if(str.trim()){
		data.er=true;
		dl4.disabled='';
		dl5.disabled='';
		// arr.name=str;
	}else{
		data.er=false;
		dl4.disabled='disabled';
		dl5.disabled='disabled';
	}
}


dl4.onblur=function(){
	var strs=this.value;
	if(strs==str){
		data.san=true;
		arr.name=str;
	}else{
		data.san=false;
		img.style.opacity=1;
	}
}



dl5.onblur=function(){
	var strs=this.value;
	if(strs==str){
		data.san=true;
		arr.name=str;
	}else{
		data.san=false;
		img.style.opacity=1;
	}
}
for(var i=0;i<dl.length;i++){
	dl[i].onfocus=function(){
		img.style.opacity=0;
		img2.style.opacity=0;
	}
}



btn.addEventListener('touchend',function(){
	if(data.si){
		location.href='zhuce3.html';
	}
})


right.addEventListener('touchend',function(){
	ss=Math.floor(Math.random()*10)+'st'+Math.floor(Math.random()*10);
	console.log(ss)
	if(data.yi&&data.er&&data.san){

		this.innerHTML=ss;
		left.disabled='';
		img2.style.opacity=0;
	}else{
		left.disabled='disabled';
	}
})
left.onblur=function(){
	if(this.value==ss){
		data.si=true;
	}else{
		left.disabled='disabled';
		img2.style.opacity=1;
	}
}
left.onfocus=function(){
	img2.style.opacity=0;
}




var hua=$$('.zhuce .dl-xia .hua');
for(var i=0;i<hua.length;i++){
	hua[i].addEventListener('touchend',function(){
		if(this.className=='hua'){
			this.classList.add('active');
		}else{
			this.classList.remove('active');
		}
		
	})
}


























function $(obj){
	return document.querySelector(obj);
}
function $$(obj){
	return document.querySelectorAll(obj);
}
