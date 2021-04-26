"use strict";

const cnv = document.getElementById("canvas");
const ctx = cnv.getContext("2d");

const logo = new Image();
logo.src = "assets/img/logo.png";

const mimose = new Image();
mimose.src = "assets/img/mimose.png";

let frasi = [
    "Dal 18", 
    "al 24 agosto 1907",
    "al 7mo Congresso", 
    "della 2ndo Internazionale socialista", 
    "a Stoccarda",
    "si discusse", 
    "della questione femminile", 
    "e del voto alle donne", 
    "Nel febbraio 1908",
    "Corinne Brown",
    "dichiarò che il Congresso", 
    "non aveva alcun diritto", 
    "di dettare alle donne",  
    "socialiste come lavorare", 
    "per la propria liberazione.", 
    "Il 3 maggio 1908", 
    "Corinne Brown", 
    "presiedette la conferenza", 
    "del Partito socialista", 
    "a Chicago", 
    "Woman’s Day.", 
    "Alla fine del 1908", 
    "il Partito socialista", 
    "decise di dedicare",
    "l'ultima domenica",
    "del febbraio del 1909", 
    "all'organizzazione",
    "di una manifestazione",
    "per il voto alle donne.", 
    "La prima giornata",
    "della donna", 
    "negli Stati Uniti", 
    "si svolse il 23 febbraio 1909"
];

let indice = 0;

let fontSize = 0;
let speed = 0;

function logic(){

    speed = ((speed * 10) + (0.01*10)) / 10 ;
    fontSize +=speed;

    if(fontSize > 120){
        fontSize = 0;
        speed = 0;
        indice++;
        if(indice >= frasi.length){
            indice = 0;
        }
    }
}

function draw(){
    ctx.fillStyle = "#fff";
    ctx.fillRect(0,0, cnv.width, cnv.height);
    ctx.stroke();

    ctx.save();
    ctx.globalAlpha = 0.1;

    ctx.drawImage(logo, 
        (cnv.width/2) - (logo.width/2), 
        (cnv.height/2) - (logo.height/2)
    );

    ctx.restore();


    ctx.drawImage(mimose, 
        0, 
        0
    );

    ctx.textAlign = "center";

    ctx.save();
    ctx.globalAlpha = 1-(fontSize/120);

    ctx.fillStyle = "#77814c";
    ctx.font = fontSize+"px Snell Roundhand";             
    ctx.fillText(frasi[indice], cnv.width/2, (cnv.height/2) + 20 );  

    ctx.restore();
}

function gameLoop(){
    logic();
    draw();

    requestAnimationFrame(gameLoop);
}

gameLoop();