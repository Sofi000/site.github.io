window.onload = function () {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    window.onscroll = function() { myFunction(navbar, sticky) };
}

function myFunction(navbar, stickys){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
}