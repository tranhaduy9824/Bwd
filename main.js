
function slide1 (){
    document.getElementById("first1").style.zIndex = "1";
    document.getElementById("first2").style.zIndex = "0";
    document.getElementById("click-1").style.background="#fff";
    document.getElementById("click-2").style.background="#dcdbf3";
}
function slide2 (){ 
    document.getElementById("first2").style.zIndex = "1";
    document.getElementById("first1").style.zIndex = "0";
    document.getElementById("click-2").style.background="#fff";
    document.getElementById("click-1").style.background="#dcdbf3";
}
function clickBar(){
    console.log(document.getElementsByTagName('aside')[0].style.left)
     if(document.getElementsByTagName('aside')[0].style.left == "0px"){
     document.getElementsByClassName('aside')[0].style.width="0";
     document.getElementsByTagName('aside')[0].style.left="-250px";
     document.getElementsByClassName('content')[0].style.left="0";
    }
    else {
        document.getElementsByTagName('aside')[0].style.left="0";
        document.getElementsByClassName('aside')[0].style.width="200px";
        document.getElementsByClassName('content')[0].style.left="220px";
    }
}