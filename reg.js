
function formValidation()
{
var uemail = document.registration.email;
ValidateEmail(uemail);


}

   function ValidateEmail(uemail)
{
var mailformat =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
if(uemail.value.match(mailformat))
{
alert("Your Email is valid");

return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}
function display()
{
alert(document.registration.userid.value+"\t"+document.registration.username.value+"\t"+document.registration.email.value+"\t"+document.registration.address.value+"\t");
}