// Função para carregar livros do backend
async function carregarLivros() {
    try {
        const response = await fetch('http://localhost:8080/api/livros');
        if (!response.ok) {
            throw new Error('Erro ao buscar os livros');
        }
        
        const livros = await response.json();
        const livrosContainer = document.querySelector('.livros-container');
        
        livrosContainer.innerHTML = ''; // Limpa o conteúdo atual

        livros.forEach(livro => {
            const livroElement = document.createElement('div');
            livroElement.classList.add('livro');
            livroElement.innerHTML = `
                <img src="${livro.imagem}" alt="${livro.titulo}">
                <h3>${livro.titulo}</h3>
                <p>Autor: ${livro.autor}</p>
            `;
            livrosContainer.appendChild(livroElement);
        });
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Função para filtro de pesquisa
document.getElementById('search-bar').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const livros = document.querySelectorAll('.livro');

    livros.forEach(livro => {
        const title = livro.querySelector('h3').textContent.toLowerCase();
        livro.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
});

// Carrega os livros ao iniciar a página
document.addEventListener('DOMContentLoaded', carregarLivros);
