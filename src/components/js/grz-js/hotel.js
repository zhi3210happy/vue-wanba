(function () {
    var selects=document.querySelectorAll('.select  a');
    var wrap=document.querySelector(".wrap");
    for(var i=0;i<selects.length;i++){
        selects[i].index=i;
        selects[i].onclick=function (){
            for(var j=0;j<selects.length;j++){
                selects[j].classList.remove('active')
            }
            wrap.style.transform="translateX(-"+this.index*50+"%)"
            this.classList.add('active');
        }
    }
})()
