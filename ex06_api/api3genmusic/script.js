async function getGenre() {
    const genreContainer = document.getElementById('genre');
    genreContainer.innerHTML = 'Carregando...';

    try {
        const response = await fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/');
        const genre = await response.json();
        genreContainer.innerHTML = genre;
    } catch (error) {
        genreContainer.innerHTML = 'Erro ao carregar gênero. Tente novamente.';
    }
}