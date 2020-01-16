var hamBtn = document.querySelector(".hamburger-menu");
var navbar = document.querySelector(".navbar");
var is_clicked = false;

window.onresize = () => {
    if(window.screen.width <= 460){
        navbar.style.height = "0px";
        hamBtn.onclick = () => {
            if(is_clicked){
                is_clicked = false;
                navbar.style.height = "0px";
            } else{
                is_clicked = true;
                navbar.style.height = "211px";
            }
        }
    } else {
        navbar.style.height = "50px";
    }
}
