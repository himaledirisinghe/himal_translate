//Fixed divHeader when scrolling.

window.onscroll = function() {myFunction()};
            
var header = document.getElementById("divHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//Hamburger menu.

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//Language translation

var lan;

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: "en"}, 'google_translate_element');
}
function txthide(){
  document.getElementById("clipboardText").style.visibility="hidden";
    document.getElementById("clipboardText").style.height="0";
    document.getElementById("clipboardContent").style.visibility="visible"
    document.getElementById("clipboardContent").innerHTML=document.getElementById("clipboardText").value;
}
function si(){
    lan = "si";
    if(x===1){
      document.getElementById("btneditsave").innerHTML="<i class='fa fa-edit'></i>&nbsp;Edit";
      x=0;
    }
    txthide();
    changeLanguageByButtonClick();
    document.getElementById("alert-success").style.visibility = "hidden";
}
function ta(){
    lan = "ta";
    if(x===1){
      document.getElementById("btneditsave").innerHTML="<i class='fa fa-edit'></i>&nbsp;Edit";
      x=0;
    }
    txthide();
    changeLanguageByButtonClick();
    document.getElementById("alert-success").style.visibility = "hidden";
}
function en(){
    lan = "en";
    if(x===1){
      document.getElementById("btneditsave").innerHTML="<i class='fa fa-edit'></i>&nbsp;Edit";
      x=0;
    }
    txthide();
    changeLanguageByButtonClick();
    document.getElementById("alert-success").style.visibility = "hidden";
}

function changeLanguageByButtonClick() {
  var language = lan;
  var selectField = document.querySelector("#google_translate_element select");
  for(var i=0; i < selectField.children.length; i++){
    var option = selectField.children[i];
    // find desired langauge and change the former language of the hidden selection-field 
    if(option.value==language){
       selectField.selectedIndex = i;
       // trigger change event afterwards to make google-lib translate this side
       selectField.dispatchEvent(new Event('change'));
       break;
    }
  }
}
var x=1;
function edit(){
  if(x===0){
    document.getElementById("clipboardContent").style.visibility="hidden";
    document.getElementById("clipboardContent").style.height="0";
    document.getElementById("clipboardText").style.height="250px";
    document.getElementById("clipboardText").style.visibility="visible"
    document.getElementById("btneditsave").innerHTML="<i class='fa fa-save'></i>&nbsp;Save";
    x=1;
  }
  else{
    document.getElementById("btneditsave").innerHTML="<i class='fa fa-edit'></i>&nbsp;Edit";
    txthide();
    changeLanguageByButtonClick();
    x=0;
  }
  document.getElementById("alert-success").style.visibility = "hidden";
}

function paste(){
  if(x===0){
    document.getElementById("btneditsave").innerHTML="<i class='fa fa-save'></i>&nbsp;Save";
    x=1;
  }
    document.getElementById("clipboardContent").style.visibility="hidden";
    document.getElementById("clipboardContent").style.height="0";
    document.getElementById("clipboardText").style.height="250px";
    document.getElementById("clipboardText").style.visibility="visible"

    navigator.clipboard.readText().then((clipText) => document.getElementById("clipboardText").value = clipText);
    document.getElementById("alert-success").style.visibility = "hidden";
    googleTranslateElementInit();
}

function copy(){
  if(x===1){
    document.getElementById("btneditsave").innerHTML="<i class='fa fa-edit'></i>&nbsp;Edit";
    x=0;
  }
    document.getElementById("clipboardText").style.visibility="hidden";
    document.getElementById("clipboardText").style.height="0";
    document.getElementById("clipboardContent").style.visibility="visible"
    navigator.clipboard.writeText(document.getElementById("clipboardContent").innerText);
    document.getElementById("alert-success").style.visibility = "visible";
}
