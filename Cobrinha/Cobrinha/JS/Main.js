let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");  //ele renderiza o contexto do canvas
let box = 32; //tratar como 2d
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right"; //direcao da cobrinha

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

//funcao que atualiza o jogo e faca ela se mexer
//ela faz parar o jogo
function iniciarjogo() {
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x; //posicao inicial
    let snakeY = snake[0].y;

    //direcao da cobrinha
    if (direction == "right") snakeX += box; //incrementa 
    if (direction == "left") snakeX -= box; //decrementa
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarjogo, 100); //renovar



