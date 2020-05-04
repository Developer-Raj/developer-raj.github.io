window.onload = () => {

//Contact Form
    let contact = $('.contact');
    let contactClose = $('.contact-form span i');
    let form =$('.contact-form');

    contact.onclick = function() {
        form.style.display = `block`;
        setTimeout(()=> {
            form.style.opacity = `100%`;
        }, 150);
    }

    contactClose.onclick = function() {
        form.style.cssText = `opacity: 0%;`;
        setTimeout(function(){
            form.style.display = `none`;
        }, 150);
    }
// Contact form

}