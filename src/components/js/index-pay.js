var message=document.querySelector('.index-pay .message');
var messSpan=document.querySelector('.index-pay .message .con div span');
var flag=document.querySelectorAll('.index-pay .message .flag');
var dot=document.querySelectorAll('.index-pay .message .dot');
function dots(obj){
    if(obj.style.left==(0||'0px')){
        obj.style.left='0.3rem';
    }else{
        obj.style.left=0;
    }
}
message.onclick=function(e){
    var obj= e.target||event.target;
    if(obj.className=='dot'){
        dots(obj);
    }else if(obj.className=='flag'){
        dots(obj.childNodes[1]);
    }else if(obj.className=='messSpan'){
        if(obj.style.background==""){
            obj.style.background='#0D0D0D';
        }else{
            obj.style.background="";
        }
        for(var i=0;i<flag.length;i++){
            dots(dot[i]);
        }
    }else{
        return;
    }
}

