let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");  //ele renderiza o contexto do canvas
let box = 32; //tratar como 2d
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG() { //tratar o background
    context.fillStyle = "LightPink"; //trabalhar com estilo
    context.fillRect(0, 0, 16 * box, 16 * box);  //desenhar o retangulo 4 paramentros
}

//cobrinha vai ser feito com array
//adiciona 1 elemento e tira outro

function criarCobrinha() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "IndianRed"; //estilo
        context.fillRect(snake[i].x, snake[i].y, box, box);  //tamanho
    }
}

criarBG();
criarCobrinha();

