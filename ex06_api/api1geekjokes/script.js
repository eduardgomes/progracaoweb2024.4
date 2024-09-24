async function getJoke() {
    const jokeContainer = document.getElementById('joke');
    jokeContainer.innerHTML = 'Carregando...';
    
    try {
        const response = await fetch('https://geek-jokes.sameerkumar.website/api?format=json');
        const data = await response.json();
        jokeContainer.innerHTML = data.joke;
    } catch (error) {
        jokeContainer.innerHTML = 'Erro ao carregar piada. Tente novamente.';
    }
}