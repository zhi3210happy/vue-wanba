var items=document.querySelectorAll(".tiks .item");
var flag=[false,false,false,false];


//初始化
for(var i=0;i<items.length;i++){
    var lis=items[i].querySelectorAll("li");
    for(var j=0;j<lis.length;j++){
        bg2(lis[j]);
    }
    bg1(lis[0]);
}

//选项卡效果
for(var i=0;i<items.length;i++){
    items[i].index=i;
    items[i].onclick=function (e){
        e.stopPropagation();//阻止事件流，防止事件向子元素扩散
        for(var v=0;v<flag.length;v++){
            if(v!=this.index){
                flag[v]=false;
                showif(flag[v]);
            }
        }
        flag[this.index]=!flag[this.index];
        var lis=items[this.index].querySelectorAll("li");
        var imgs=items[this.index].querySelector("img");
            if(flag[this.index]){
                imgs.style.transform="rotate(90deg)";
            }
            for(var j=0;j<lis.length;j++){
                lis[j].onclick=function (){
                    for(var k=0;k<lis.length;k++){
                        bg2(lis[k]);
                    }
                    bg1(this);
                }
                if(flag[this.index]){
                    lis[j].style.height="0.99rem";
                    lis[j].style.borderBottom="1px solid #DBDBDB";
                    lis[j].style.transitionDelay=j/20+"s";
                }else{
                    lis[j].style.height="0";
                    lis[j].style.borderBottom="";
                    lis[j].style.transitionDelay=j/20+"s";
                }
            }
    }
}


function bg1(obj) {
    obj.style.backgroundImage="url(images/grz-images/ok.png)";
    obj.style.backgroundRepeat="no-repeat"
    obj.style.backgroundPosition="98% center";
    obj.style.backgroundSize="6%";
}
function bg2(obj) {
    obj.style.background="none";
}
function showif(flag){
    for(var i=0;i<items.length;i++){
        var lis=items[i].querySelectorAll("li");
        var imgs=items[i].querySelector("img");
        if(!flag){
            imgs.style.transform="rotate(0)";
        }
        for(var j=0;j<lis.length;j++){
            if(!flag){
                lis[j].style.height="0";
                lis[j].style.borderBottom="";
                lis[j].style.transitionDelay=j/20+"s";
            }
        }
    }
}






