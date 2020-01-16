var hamBtn = document.querySelector(".hamburger-menu");
var is_clicked = false;

window.onresize = function() {
    if(window.screen.width <= 460){
        document.querySelector(".navbar").style.height = "0px";
        hamBtn.onclick = function() {
            if(is_clicked){
                document.querySelector(".navbar").style.height = "0px";
                is_clicked = false;
            } else {
                is_clicked = true;
                document.querySelector(".navbar").style.height = "211px";
            }
        };
    } else {
        document.querySelector(".navbar").style.height = "50px";
    }

    if(window.screen.width <= 360){
        this.hamBtn.style.transform = "scale(0.8)";
    } else {
        this.hamBtn.style.transform = "scale(1)";
    }
};