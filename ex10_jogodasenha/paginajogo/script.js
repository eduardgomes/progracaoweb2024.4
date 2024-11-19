let combination = generateCombination();
let attempts = [];

function generateCombination() {
    let digits = [];
    while (digits.length < 4) {
        let num = Math.floor(Math.random() * 10);
        if (!digits.includes(num)) {
            digits.push(num);
        }
    }
    return digits.join('');
}

function checkGuess() {
    const guess = document.getElementById('guess').value;
    if (guess.length !== 4 || new Set(guess).size !== guess.length) {
        alert('Digite uma combinação válida de 4 dígitos diferentes.');
        return;
    }
    
    const result = compareGuesses(guess, combination);
    attempts.unshift(`Tentativa: ${guess} - Resultado: ${result}`);
    document.getElementById('guess').value = '';
    updateAttempts();
    
    if (result === "BBBB") {
        alert("Parabéns! Você acertou a combinação!");
        showRestartButton();
    }
}

function compareGuesses(guess, combination) {
    let bulls = '';
    let cows = '';
    
    for (let i = 0; i < 4; i++) {
        if (guess[i] === combination[i]) {
            bulls += 'B';
        }
    }
    
    for (let i = 0; i < 4; i++) {
        if (guess[i] !== combination[i] && combination.includes(guess[i])) {
            cows += 'C';
        }
    }
    
    return bulls + cows;
}

function updateAttempts() {
    const attemptsDiv = document.getElementById('attempts');
    attemptsDiv.innerHTML = attempts.map(attempt => `<p>${attempt}</p>`).join('');
}

function showRestartButton() {
    const restartButton = document.createElement('button');
    restartButton.innerText = 'Reiniciar Jogo';
    restartButton.onclick = restartGame;
    document.body.appendChild(restartButton);
}

function restartGame() {
    combination = generateCombination();
    attempts = [];
    updateAttempts();
    const restartButton = document.querySelector('button');
    if (restartButton) {
        restartButton.requestFullscreen();

    }
    alert('Novo jogo iniciado! Tente adivinhar a nova combinação.');
}

function showCombination() {
    alert(`A combinação é: ${combination}`);
}