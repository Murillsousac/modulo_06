
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}
const numeroAleatorio = getRandomInt(101);
console.log(numeroAleatorio);

let tentativa = 0;
let chances = 5;

function verificarPalpite(){
    const chute = parseInt(document.getElementById("chute").value)
    let dica;
    
    if(chute < 1 || chute > 100){
        dica = "Valor invalido, por favor inserir um numero de 1 a 100"
    }
    else if(chute == numeroAleatorio ){
        dica = `Parabéns, Você acertou o numero gerado com ${tentativa+1} tentativa(s)` ;
        tentativa++
        chances--
        document.getElementById("botao").disabled = true
    }
    else if(chute < numeroAleatorio && tentativa < 4 ){
        dica = "O numero chutado é menor que o numero gerado";
        tentativa++
        chances--
    }
    else if(chute > numeroAleatorio  && tentativa < 4){
        dica = "O numero chutado é maior que o numero gerado";
        tentativa++
        chances--
    }
    else{
        dica = `Você perdeu! O numero secreto era ${numeroAleatorio}`
        ++tentativa
        --chances
        document.getElementById("botao").disabled = true
    }

document.getElementById("tentativas").textContent = `tentativas: ${tentativa}`
document.getElementById("dicas").textContent = `${dica}`;
document.getElementById("chances").textContent = `Chances: ${chances}`
}


