let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");  //ele renderiza o contexto do canvas
let box = 32; //tratar como 2d
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right"; //direcao da cobrinha
let food = { //criar um numero aleatorio
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
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

function drawFood() {
    context.fillStyle = "Indigo";
    context.fillRect(food.x, food.y, box, box);
}


document.addEventListener('keydown', update);

//37 direita 38 baixo 39 esquerda 40 pra cima

function update(event) {
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down";
}


//funcao que atualiza o jogo e faca ela se mexer
//ela faz parar o jogo
function iniciarjogo() {
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    criarBG();
    criarCobrinha();
    drawFood();

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



