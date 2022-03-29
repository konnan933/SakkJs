window.addEventListener("load", init);

function ID (elem){
    return document.getElementById(elem);
}
function $ (elem){
    return document.querySelectorAll(elem);
}
function init(){
    generalas();

}
function generalas(){
    for (let index = 0; index < 64; index++) {
        var txt = `<div class='mezo' ></div>`;
        ID("sakktábla").innerHTML+=txt
        console.log(index)    
    }
    $(".container div:nth-child(odd)").style.backgroundColor="gray";
    for (let index = 0; index < 64; index++) {

        $(".mezo")[index].addEventListener("click",lerak)
        
    }
    
}

function lerak(){
    event.target.innerHTML='<img src="kepek/sakkfigura.png" alt="sakkfigura"></img>'
}

function szinezés(){
    $()
}