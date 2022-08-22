/* DOCUMENTACIÓN
    https://animejs.com/documentation/#JSobjProp
    https://github.com/juliangarnier/anime/
*/

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
    translateX: 250,
    duration: 10000
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

/* EJEMPLO #4 - CSS TRANSFORMS */
const cuadrado3 = document.getElementById('cuadrado3');

anime({
    targets: cuadrado3,
    translateX: 250,
    scale: 2,
    duration: 10000,
    rotate: '1turn'
});

/* EJEMPLO #5 - OBJECT PROPERTIES */
const contenedor = document.getElementById('contenedor');

const miObjeto = {
    prop1: 0,
    prop2: '0%'
}

anime({
    targets: miObjeto,
    prop1: 50,
    prop2: '100%',
    easing: 'linear',
    round: 1,
    update: function() {
        contenedor.innerText = JSON.stringify(miObjeto);
    }
});











