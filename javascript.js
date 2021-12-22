let day = document.querySelector('.day');
let hours = document.querySelector('.hours');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let button = document.querySelector('.button');

let dia = 3;
let hora = 0;
let minutos = 0;
let segundos = 10;
let tempo = true;
let decremento = 1;

function Temporizador(){
    segundos -= decremento;
    if(segundos <= 0){
        if(minutos > 0){
            minutos -= 1;
            segundos = 60;
        }
    }
    if(minutos == 0){
        if(hora > 0){
            hora -= 1;
            minutos = 60;
        }
    }
    if(hora == 0){
        if(dia > 0){
            dia -= 1;
            hora = 24;
        }
    }
    if(hora == 0 && minutos == 0 && segundos == 0){
        window.alert('FIM DA ESPERA!');
        tempo = false;
    }
    day.innerHTML = dia;
    hours.innerHTML = hora;
    minute.innerHTML = minutos;
    second.innerHTML = segundos;

    if(dia < 10){
        day.innerHTML = '0'+dia;
    }
    if(hora < 10){
        hours.innerHTML = '0'+hora;
    }
    if(minutos < 10){
        minute.innerHTML = '0'+minutos;
    }
    if(segundos < 10){
        second.innerHTML = '0'+segundos;
    }
}

setInterval(()=>{
    if(tempo){
        Temporizador();
    }
}, 1000)

button.addEventListener('click', ()=>{
    let value = Number(window.prompt('Decremento: '));
    if(value == 0){
        value = 1;
    }
    console.log(value);
    decremento = value;
});


