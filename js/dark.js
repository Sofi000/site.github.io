var element = document.getElementById('body');
var dl = new Boolean() ;
if (element.classList == ("dark-mode")){
    dl = false;
}
else {
    dl = true;
}
if(dl == false){
        var element = document.body;
        element.classList.toggle("dark-mode");
}
