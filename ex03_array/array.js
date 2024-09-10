let valores = [];

function adicionarValor() {
    let numero = document.getElementById('numero').value;
    
    if (numero !== "") {
        valores.push(parseFloat(numero));
        
        document.getElementById('valores').textContent = valores.join(', ');

        let soma = valores.reduce((acc, val) => acc + val, 0);
        let media = soma / valores.length;
        document.getElementById('media').textContent = media.toFixed(2);
    }

    document.getElementById('numero').value = "";
}
