let order = [];
let clickedOrder = [];
let score = 0;

//0 = azul - 1 = amarelo - 2 = vermelho - 3 = verde

const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');

//Cria ordem aleatório das cores
let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for( let i in order ){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i)+1);        
    } 

 }
//acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() =>{
        element.classList.remove('selected');
    },  500);   
}
//checa se os botões clicados, são iguais da ordem recebida no jogo
let checkOrder = () => {
    for(let i  in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        // alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível`);
        nextLevel();
    }
}

//Função para o clique do usuário
let click = (color) =>{
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() =>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 500)   
}

//Função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return blue;
    }else if(color == 1){
        return yellow;
    }else if(color == 2){
        return red;
    }else if(color == 3){
        return green;
    }
}

//Função para o próximo nível do Jogo
let nextLevel = ()=>{
    score++;
    shuffleOrder();   
}

//Função para começar o jogo do Jogo
let gameOver = ()=>{
    alert(`Pontuação: ${score}\n Deu Ruim :(`);
    order=[];
    clickedOrder=[];

    playGame();
}
//Iniciando novo jogo
let playGame = () =>{
      alert(`Bem vindo ao Genius!\nIniciando novo jogo...\n${score}`);
      score = 0;

      nextLevel();
}

blue.onclick= () => click(0);
yellow.onclick= () => click(1);
red.onclick =() => click(2);
green.onclick = () => click(3);



//Inicio do Jogo
playGame();
