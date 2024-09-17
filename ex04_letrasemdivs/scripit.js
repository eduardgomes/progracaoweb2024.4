document.getElementById("separarBtn").addEventListener("click", function() {
    const palavra = document.getElementById("inputPalavra").value;
    const resultadoDiv = document.getElementById("resultado");

    resultadoDiv.innerHTML = "";

    for (let letra of palavra) {
        const letraDiv = document.createElement("div");
        letraDiv.classList.add("letra");
        letraDiv.textContent = letra;
        resultadoDiv.appendChild(letraDiv);
    }
});
