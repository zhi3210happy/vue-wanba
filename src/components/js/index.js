(function (){
    /*总父容器高度*/
    var index_box = document.querySelector('.index-box');
    var index_footer = document.querySelector('.index-footer');
    function boxH(){
        index_box.style.height = document.body.clientHeight-index_footer.clientHeight+'px';
    }
    boxH();
    /*顶栏颜色的变化*/
    var index_header = document.querySelector('.index-header');
    var index_list = document.querySelector('.index-list');
    index_box.addEventListener('scroll',function(){
        if(this.scrollTop >= index_list.offsetTop){
            index_header.style.background = 'rgba(0,0,0,0.8)'
        }else{
            index_header.style.background = 'rgba(0,0,0,0)'
        }
    });
    window.addEventListener('resize',function(){
        boxH();
    });
})();
/*玩吧品牌*/
(function () {
    var wbpp = document.querySelector('.index-wbpp');//获得大容器
    var list = document.querySelectorAll('.index-wbpp .list li');//获得上方按钮
    var cont = document.querySelector('.index-wbpp .cont');//获得内容区域父容器
    var contFu = document.querySelector('.index-wbpp .cont .fu');
    var contList = document.querySelectorAll('.index-wbpp .cont ul');//获得选项卡
    // list.length
    function cws() {
        contFu.style.width=cont.clientWidth*list.length+'px';
        for (var i = 0; i < contList.length; i++) {
            contList[i].style.width = cont.clientWidth+'px';
        }
    };
    cws();
    window.addEventListener('resize',function () {
        cws();
    })
    for (var i = 0; i < list.length; i++) {
        list[i].index = i;
        list[i].onclick = function () {
            for (var j = 0; j < list.length; j++) {
                list[j].classList.remove('active');
            }
            this.classList.add('active');
            contFu.style.cssText="transform:translate3d("+-cont.clientWidth*this.index+"px,0,0);-webkit-transform:translate3d("+-cont.clientWidth*this.index+"px,0,0)";
            cws();
        }
    }
})();
