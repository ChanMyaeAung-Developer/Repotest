
function clicked(){
var user=document.getElementById("username");
var pass=document.getElementById("password");
var coruser="cma";
var corpass="syms";
if (user.value==coruser) 
{
if(pass.value==corpass)
{window.alert("Login Sucessful")
}

else{
window.alert("Login Fail");
}
}
else{
window.alert("Login Fail");
}
}