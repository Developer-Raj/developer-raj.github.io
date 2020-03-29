var hamBtn = document.querySelector(".hamburger-menu");
var navbar = document.querySelector(".navbar");
var header = document.querySelector(".header");
var ham_bar = document.querySelectorAll(".b");
var is_clicked = false;

function ham() {
    if(is_clicked){
        is_clicked = false;
        navbar.style.height = "0px";
    } else{
        is_clicked = true;
        navbar.style.cssText = "height: 260px;";
    }
}

hamBtn.onclick = () => {
    ham();
}

window.onresize = () => {
    if(window.screen.width <= 640){
        navbar.style.height = "0px";
    } else {
        navbar.style.height = "50px";
    }
}