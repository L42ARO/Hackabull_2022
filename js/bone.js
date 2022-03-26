console.log("hallo");
var doge = document.getElementsByClassName("doge");
doge[0].addEventListener('input', function (evt) {
    console.log(doge[0].value)
});