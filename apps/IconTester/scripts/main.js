let $ = a  => {return document.querySelector(a)}
let $$ = a  => {return document.querySelectorAll(a)}
let _cls = a => {return document.getElementsByClassName(a)}
let _id = a => {return document.getElementById(a)}
let on = (target, event, action) => {return target.addEventListener(event, action);}

let upButton = $('#uploadImgBtn'),
    getFile = $('.upfile'),
    url,
    toggleSize = $('.sizeToggleBtn');

  
//Img Preview Function
//Function to upload image file
on(upButton, "click", function(){
  getFile.click();
})
//Function to preview image
on(getFile, "change", function(){
  url = URL.createObjectURL(getFile.files[0]);
    let images = _cls('icons');
    let dicons = _cls('icon_holder');

    for(let i=0; i<dicons.length; i++){
        dicons[i].setAttribute("href", url);
    }
    for(let i=0; i<images.length; i++){
        images[i].src = url;
    }
});
// Function closes here

// Size Toggle Function
let base = $('.sizeToggleBtn .base'),
    tglSwitch = $('.sizeToggleBtn .base .switch'),
    is_checked = false,
    tgleClasses = ["ic36", "ic48", "ic72", "ic96", "ic144", "ic196"],
    imgs = _cls('tglClass');

function toggleOff() {
  is_checked = false;
  base.style.backgroundColor = "#313030";
  tglSwitch.style.left = "2px";
}
function toggleOn() {
  is_checked = true;
  base.style.backgroundColor = "#58d158";
  tglSwitch.style.left = "17px";
}
function toggleClass() {
  for(let i = 0; i < imgs.length; i++){
    if(imgs[i].getAttribute("class").includes(`${tgleClasses[i]}`)){
      imgs[i].setAttribute("class", `icons tglClass`);
    } else {
      imgs[i].setAttribute("class", `icons tglClass ${tgleClasses[i]}`);
    }
  }
  for(let j = 0; j < tgleClasses.length; j++) {
    
  }
}

on(toggleSize, "click", function(){
      if(is_checked) {
       toggleOff();
      } else {
        toggleOn();
      }
      toggleClass();
});
// Function closes here