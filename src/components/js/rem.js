var gaowi=750;
function rems(){
    var keshi=document.documentElement.clientWidth;
    var fonts=keshi/gaowi*100;
    // console.log(fonts)
    document.documentElement.style.fontSize=fonts+'px'
}
rems();
window.onresize=rems;