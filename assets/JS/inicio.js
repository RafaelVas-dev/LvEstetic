// ======= Menu

let btnMenu = document. querySelector('#menu-icon');
let menuNav = document.querySelector('.menu-nav');
let links = document.querySelector('#menu-list');
let body = document.querySelector('body');
let icon = document.querySelector('.bi.bi-list');
let iconX = document.querySelector('.bi.bi-x-lg');



btnMenu.addEventListener('click', () => {

    btnMenu.classList.toggle('ativo');
    menuNav.classList.toggle("ativo");
    body.classList.toggle('no-overflow');
    icon.style.display = "none";
    iconX.style.display = "block";

    if(!menuNav.classList.contains('ativo')){
        icon.style.display = "block";
        iconX.style.display = "none";
    }
});

links.addEventListener('click', () => {
    btnMenu.classList.remove('ativo');
    menuNav.classList.remove("ativo");
    body.classList.remove('no-overflow');
    icon.style.display = "block";
    iconX.style.display = "none";
});

// ======= Introdução

let btnControl = document.querySelector('#btn-control');
let video = document.querySelector('#video');
let iconPause = document.querySelector('.bi.bi-pause');
let iconPlay = document.querySelector('.bi.bi-play-fill');

btnControl.addEventListener('click', () => {

    if(video.paused){
        video.play();
        iconPause.style.display = "block";
        iconPlay.style.display = "none";
        
    }
    else{
        video.pause();
        iconPause.style.display = "none";
        iconPlay.style.display = "block";
    }
        
});


// inicio.js
export function carregarInicio() {
  console.log("Inicio carregado");
};