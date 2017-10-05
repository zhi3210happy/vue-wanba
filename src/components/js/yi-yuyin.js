

var btn=document.querySelector('.yi-yuyin1 .yubtn .yintiao');
var text=document.querySelector('.yi-yuyin1 h1');
var zhuan=document.querySelector('.zhuan');
var lis= document.querySelectorAll('.yi-yuyin1 .tiao ul li div');
var speak= document.querySelector('.text-1 span');
var dask= document.querySelectorAll('.yi-dask')[0];
var dask2= document.querySelectorAll('.yi-dask')[1];
var jian= document.querySelector('.yubtn .jian');
var close = document.querySelector('.yubtn .jian .left');
var dui = document.querySelector('.yubtn .jian .right');



btn.addEventListener('touchstart',function(){
    olddate=new Date().getTime();
    zhuan.style.transform="rotate(360deg)";
    speak.innerHTML="抬起结束讲话";
    var shijiancha = Math.random()*0.1+0.25;
        t=setInterval(function(){
            for(var i=0;i<lis.length;i++){
               lis[i].style.height=Math.random()*90+"%";
               lis[i].style.transition="all "+shijiancha+"+s";
               lis[i].style.backgroundImage="linear-gradient(180deg,#E081B6,#58B2E2)";
           }
       },100);
});
btn.addEventListener('touchend',function(){
    clearInterval(t);
    var newdate=new Date().getTime();
    var cha=(newdate-olddate)/1000;
    text.innerHTML=cha.toFixed(2);
    zhuan.style.transform="rotate(0deg)";
    speak.innerHTML="按下开始讲话";

    if (cha<1){
        dask.style.display="block";
    }else {
       jian.style.display="block";
        //取消录音
        close.addEventListener('touchstart',function () {
            jian.style.display="none";
            text.innerHTML="0.00";
            for(var i=0;i<lis.length;i++){
                lis[i].style.height=0.32+"rem";
                lis[i].style.transition="all 0.2s";
                lis[i].style.backgroundImage="linear-gradient(180deg,#C7C7C7,#959494)";
            }
        });
    }


});
dask.addEventListener('touchend',function(){
   dask.style.display="none";
   for(var i=0;i<lis.length;i++){
       lis[i].style.height=0.32+"rem";
       lis[i].style.transition="all 0.2s";
       lis[i].style.backgroundImage="linear-gradient(180deg,#C7C7C7,#959494)";
   }
    setTimeout(function(){
        text.innerHTML="0.00";

    },400)

});
/*没有网络*/

$.ajaxSetup({
    timeout: 1, // 1秒超时
    error: function(request, status, maybe_an_exception_object) {
        if(status == 'timeout')
            // alert("网断了");
        dask2.style.display="block";
    }
});
dask2.addEventListener('touchend',function() {
    dask2.style.display = "none";
});





