var submit = document.getElementsByClassName("signup");
var firstname = document.getElementsByClassName("firstname");
var lastname = document.getElementsByClassName("lastname");
var email = document.getElementsByClassName("email");
var password = document.getElementsByClassName("password");
var repassword = document.getElementsByClassName("repassword");
var val_firstname;
var val_lastname;
var val_email;
var val_password;
var val_repassword;
submit[0].addEventListener('click', function (evt) {
    val_firstname=firstname[0].value;
   console.log(val_firstname);
val_lastname=lastname[0].value;
console.log(val_lastname);
val_email=email[0].value;
console.log(val_email);
val_password=password[0].value;
console.log(val_password);
val_repassword=repassword[0].value;
console.log(val_repassword);
if(val_password!=val_repassword){
    console.log("error");
}
});
