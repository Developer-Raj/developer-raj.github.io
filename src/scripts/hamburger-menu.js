var hamBtn = document.querySelector(".hamburger-menu");
var navbar = document.querySelector(".navbar");
var is_clicked = false;

function ham() {
    if(is_clicked){
        is_clicked = false;
        navbar.style.height = "0px";
    } else{
        is_clicked = true;
        navbar.style.height = "211px";
    }
}

hamBtn.onclick = () => {
    ham();
}

window.onresize = () => {
    if(window.screen.width < 470){
        navbar.style.height = "0px";
    } else {
        navbar.style.height = "50px";
    }
}
