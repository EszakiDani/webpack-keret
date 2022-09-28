import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

let url = document.getElementById("url");
let width = document.getElementById("szelesseg");
let Keretvastagsag = document.getElementById("vastagsag");
let KeretSzin = document.getElementById("szin");
let Kepid = document.getElementById("kep");
let mode = document.getElementById("darkmode")
let backGround = document.body;

function init(){
    url.addEventListener('change', changeImg);
    width.addEventListener('input', changeWidth);
    Keretvastagsag.addEventListener('input', changeBorder);
    KeretSzin.addEventListener('input', changeBorder);
    mode.addEventListener('click', toggleMode);
}
function changeImg(){
    Kepid.src = url.value; 
}
function changeWidth(){
    Kepid.width = width.value;
}
function changeBorder(){
    Kepid.style.border = Keretvastagsag.value + "px solid " + KeretSzin.value;
}
let i = 0;
function toggleMode(){
    
    if(i == 0){
        backGround.className = "light";
        i++;
        mode.innerHTML = "Sötét"; 
    }else{
        backGround.className = "dark";
        i = 0;
        mode.innerHTML = "Világos"; 
    }
}
document.addEventListener('DOMContentLoaded' , init);

