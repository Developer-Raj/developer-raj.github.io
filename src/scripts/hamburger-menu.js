var hamBtn = document.querySelector(".hamburger-menu");
var is_clicked = false;

window.onload = function() {

    function hamOpen(){
        if(is_clicked){
            document.querySelector(".navbar").style.height = "0px";
            is_clicked = false;
        } else {
            console.log("working");
            is_clicked = true;
            document.querySelector(".navbar").style.height = "211px";
        }
    }

    if(window.screen.width <= 460){
        hamBtn.onclick = function() {
            hamOpen();
        };
    } else {
        document.querySelector(".navbar").style.height = "50px";
    }
};