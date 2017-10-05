/**
 * Created by 萧 玄 辞 on 2017/3/22.
 */
var  head=document.querySelector(".detal-head");
var ban=document.querySelector(".ban")
var immg=head.querySelector("img");
var heights=ban.offsetHeight;
window.onscroll=function (){
    var scroll=document.body.scrollTop?document.body:document.documentElement;
    var scrolls=scroll.scrollTop;
    if(scrolls>heights){
        head.style.background="rgba(0,0,0,0.5)";
    }else{
        head.style.background="";
    }
}