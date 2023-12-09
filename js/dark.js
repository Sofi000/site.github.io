const chk = document.getElementById('chk')

chk.addEventListener('change', ()=>{
    document.body.classList.toggle('dark')
})

function dark(){
    var element = document.body;
    element.classList.toggle("dark");
}