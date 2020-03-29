let $ = a => {return document.querySelector(a)};

let loader = $(".site-loader");
let body = $("body");

window.onload = () => {
    setTimeout(()=>{
        body.style.overflow = "hidden";
        body.style.height = "0px";
    }, 0);

    setInterval(()=>{
        loader.style.opacity = "0";
    }, 500)
    setInterval(()=>{
        loader.style.display = "none";
        body.style.overflow = "auto";
        body.style.height = "100vh";
    }, 1000);
}
