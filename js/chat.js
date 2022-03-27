var alpha = document.getElementsByClassName("alpha");
// alpha[0].addEventListener('click', function (evt) {
//     var usertxt="<div>"+alpha[0].innerHTML+"</div>";
//     var chat_hist = document.getElementsByClassName("chat-hist")[0];
//     chat_hist.innerHTML+=usertxt;
// });
Array.from(alpha).forEach(function(item){
    item.addEventListener('click', function (evt) {
        var usertxt="<div>"+item.innerHTML+"</div>";
        var chat_hist = document.getElementsByClassName("chat-hist")[0];
        chat_hist.innerHTML+=usertxt;
    });
});
