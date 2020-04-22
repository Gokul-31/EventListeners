
var gotOnion=document.getElementById('onion');

function changeVeg(){
  gotOnion.textContent+="rice"
}
gotOnion.addEventListener("click",changeVeg);
gotOnion.removeEventListener("click",changeVeg);

var gotUser=document.getElementById('user');
gotUser.addEventListener("click",changeUser);
gotUser.removeEventListener("click",changeUser);

function changeUser(){
  gotUser.innerHTML="changed";
}