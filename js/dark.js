var element = document.getElementById('body');
var dl = new Boolean() ;
if (element.classList == ("dark-mode")){
    dl = false;
}

var dl = localStorage.getItem('dl');
if (dl === false) {
    var element = document.body;
    element.classList.toggle("dark-mode");
} 

