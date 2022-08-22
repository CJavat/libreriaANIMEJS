"use strict";

/* IMPORTAR LIBRERIA ANIME-JS */
import anime from '/JS/animejs/lib/anime.es.js';
console.log(anime);

/* EJEMPLO #1 - CSS SELECTOR & DOM NODE/NODELIST */
const contenedorElementos = document.getElementById('contenedor-animation');
const elemento1 = document.getElementById('elemento1');
const elemento2 = document.getElementById('elemento2');
const elemento3 = document.getElementById('elemento3');

anime({
    targets: [elemento1, elemento2, elemento3],
    translateX: 250
});

/* EJEMPLO #2 - JAVASCRIPT OBJECT */
const cargador = document.getElementById('cargador');

const bateria = {
    cargado: '0%',
    ciclos: 120
}

anime({
    targets: bateria,
    cargado: '100%',
    ciclos: 130,
    round: 1,
    easing: 'linear',
    update: function() {
        cargador.innerHTML = JSON.stringify(bateria);
    }
});

/* EJEMPLO #3 - CSS PROPERTIES*/
const cuadradoCirculo = document.getElementById('cuadrado-circulo');

anime ({
    targets: cuadradoCirculo,
    translateX: 200,
    backgroundColor: '#bbb',
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad'
});

/* EJEMPLO #4 -  */
const cuadrado3 = document.getElementById('cuadrado3');

anime({
    targets: cuadrado3
});
















