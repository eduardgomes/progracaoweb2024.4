const palavraSecreta = "JAVASCRIPT";
const palavraDiv = document.getElementById("palavra");
const letrasDiv = document.getElementById("letras");
const imagemForca = document.getElementById("imagemForca");

let palavraAdivinhada = [];
let erros = 0;
const maxErros = 6;

function iniciarJogo() {
    // Mostra a palavra oculta
    palavraAdivinhada = Array(palavraSecreta.length).fill("_");
    palavraDiv.textContent = palavraAdivinhada.join(" ");

    criarBotoesLetras();
}

function criarBotoesLetras() {
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    alfabeto.split("").forEach(letra => {
        const botaoLetra = document.createElement("button");
        botaoLetra.textContent = letra;
        botaoLetra.classList.add("letra");
        botaoLetra.addEventListener("click", () => verificarLetra(letra, botaoLetra));
        letrasDiv.appendChild(botaoLetra);
    });
}

function verificarLetra(letra, botao) {
    botao.disabled = true;
    
    if (palavraSecreta.includes(letra)) {
        for (let i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta[i] === letra) {
                palavraAdivinhada[i] = letra;
            }
        }
        palavraDiv.textContent = palavraAdivinhada.join(" ");

        if (!palavraAdivinhada.includes("_")) {
            alert("Parabéns! Você venceu!");
        }
    } else {
        erros++;
        imagemForca.src = `forca${erros}.png`;

        
        if (erros === maxErros) {
            alert("Você perdeu! A palavra era: " + palavraSecreta);
            reiniciarJogo();
        }
    }
}


function reiniciarJogo() {
    palavraAdivinhada = [];
    erros = 0;
    imagemForca.src = "forca0.png";
    letrasDiv.innerHTML = "";
    iniciarJogo();
}


iniciarJogo();
