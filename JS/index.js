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

/* EJEMPLO #6 - DOM ATTRIBUTES */
const domAttributes = document.getElementById('dom-attributes');

anime({
    targets: domAttributes,
    value: [0, 1000],
    round: 1,
    duration: 3000,
    easing: 'easeInOutExpo'
});

/* EJEMPLO #7 - SVG ATTRIBUTES */
const svgAttributes = document.getElementById('svg-attributes');
const polygon = document.getElementById('polygon');

anime({
    targets: [svgAttributes, polygon, 'feTurbulence', 'feDisplacementMap'],
    points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
    baseFrequency: 0,
    scale: 1,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutExpo'
});

/* EJEMPLO #7 - DURATION */
const duration = document.getElementById('duration');

anime({
    targets: duration,
    translateX: 250,
    duration: 3000
});

/* EJEMPLO #8 - DELAY */
const delay = document.getElementById('delay');

anime({
    targets: delay,
    translateX: 250,
    delay: 1500
});

/* EJEMPLO #8 - END DELAY */
const endDelay = document.getElementById('end-delay');

anime({
    targets: endDelay,
    translateX: 250,
    endDelay: 3000,
    direction: 'alternate'
});

/* EJEMPLO #9 - EASING */
const easing = document.getElementById('easing');

anime({
    targets: easing,
    translateX: 250,
    easing: 'easeInOutExpo'
});

/* EJEMPLO #10 - ROUND */
const round = document.getElementById('round');

anime({
    targets: round,
    innerHTML: [0, 10000],
    easing: 'linear',
    round: 1,
});

/* EJEMPLO #11 - SPECIFIC PROPERTY PARAMETERS */
const specificPropertyParameters = document.getElementById('specific-property-parameters');

anime({
    targets: specificPropertyParameters,
    translateX: {
        value: 250,
        duration: 800
    },
    rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
    },
    scale: {
        value: 2,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
    },
    delay: 250
});

/* EJEMPLO #12 - FUNCTION BASED PARAMETERS */
const element1 = document.getElementById('element1');
const element2 = document.getElementById('element2');
const element3 = document.getElementById('element3');

anime({
    targets: [element1, element2, element3],
    translateX: 270,
    direction: 'alternate',
    loop: true,
    delay: function(e, i, l) {
        return i * 100
    },
    endDelay: function(e, i, l) {
        return (l - i) * 100;
    }
});

/* EJEMPLO #13 - DIRECTION */
const cuadro1 = document.getElementById('cuadro1');
const cuadro2 = document.getElementById('cuadro2');
const cuadro3 = document.getElementById('cuadro3');

anime({
    targets: [cuadro1],
    translateX: 250,
    easing: 'easeInOutSine'
});

anime({
    targets: [cuadro2],
    translateX: 250,
    direction: 'reverse',
    easing: 'easeInOutSine'
});

anime({
    targets: [cuadro3],
    translateX: 250,
    direction: 'alternate',
    easing: 'easeInOutSine'
});

/* EJEMPLO #14 - LOOP */
const cuadro_1 = document.getElementById('cuadro-1');
const cuadro_2 = document.getElementById('cuadro-2');
const cuadro_3 = document.getElementById('cuadro-3');
const cuadro_4 = document.getElementById('cuadro-4');
const cuadro_5 = document.getElementById('cuadro-5');
const cuadro_6 = document.getElementById('cuadro-6');

anime({
    targets: [cuadro_1],
    translateX: 270,
    loop: 3,
    easing: 'easeInOutSine'
});

anime({
    targets: [cuadro_2],
    translateX: 270,
    loop: true,
    easing: 'easeInOutSine'
});

anime({
    targets: [cuadro_3],
    translateX: 270,
    loop: 3,
    direction: 'reverse',
    easing: 'easeInOutSine'
});

anime({
    targets: [cuadro_4],
    translateX: 270,
    direction: 'reverse',
    loop: true,
    easing: 'easeInOutSine'
});

anime({
    targets: [cuadro_5],
    translateX: 270,
    loop: 3,
    direction: 'alternate',
    easing: 'easeInOutSine'
});

anime({
    targets: [cuadro_6],
    translateX: 270,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
});

/* EJEMPLO #15 - AUTOPLAY */
const autoplay_1 = document.getElementById('autoplay-1');
const autoplay_2 = document.getElementById('autoplay-2');

anime({
    targets: autoplay_1,
    translateX: 250,
    autoplay: true,
    easing: 'easeInOutSine'
});

anime({
    targets: autoplay_2,
    translateX: 250,
    autoplay: false,
    easing: 'easeInOutSine'
});

/* EJEMPLO #16 - UNITLESS */
const unitless = document.getElementById('unitless');

anime({
    targets: unitless,
    translateX: 250,
    rotate: 540,
    direction: 'alternate',
    loop: true
});

/* EJEMPLO #17 - SPECIFIC  UNIT */
const specificUnit = document.getElementById('specific-unit');

anime({
    targets: specificUnit,
    width: '100%',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true
});

