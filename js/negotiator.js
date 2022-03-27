var currbid = document.getElementsByClassName("curr-bid");
var accept = document.getElementsByClassName("accept");
var val_currbid;
accept[0].addEventListener('click',function(){
    val_currbid=currbid[0].innerHTML;
    console.log(val_currbid);
})