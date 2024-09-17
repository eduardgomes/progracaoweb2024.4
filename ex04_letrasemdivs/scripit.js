const inputPalavra = document.getElementById("inputPalavra");
const btSeparar = document.getElementById("btSeparar");
const divPrincipal = document.getElementById("divPrincipal"); 

btSeparar.onclick = () => {
    divPrincipal.innerHTML = ""; 
    let palavra = inputPalavra.value;
    for (let i = 0; i < palavra.length; i++) {
        const letraDig = palavra[i];
        let div = document.createElement("DIV");
        div.className = "divLetra";
        let letra = document.createTextNode(letraDig);
        div.appendChild(letra);
        divPrincipal.appendChild(div);
    }
};
