var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: '.swiper-pagination'
  });
// 选项卡
var list_one = document.querySelectorAll(".choice-lists-one");
var choice_one = document.querySelectorAll(".choice-one");
for(var i=0;i<list_one.length;i++){
    list_one[i].index = i;
    list_one[i].addEventListener("touchstart",function(){
        for(var j=0;j<list_one.length;j++){
            list_one[j].classList.remove("active");
        }
        this.classList.add("active");
        for(var k=0;k<choice_one.length;k++){
            choice_one[k].classList.remove("hot");
        }
        choice_one[this.index].classList.add("hot");
    });

}