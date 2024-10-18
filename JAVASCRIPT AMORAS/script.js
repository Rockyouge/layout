document.getElementById('search-bar').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const livros = document.querySelectorAll('.livro');

    livros.forEach(livro => {
        const title = livro.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            livro.style.display = 'block';
        } else {
            livro.style.display = 'none';
        }
    });
});
