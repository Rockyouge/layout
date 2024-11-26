// Função para carregar livros do backend
async function carregarLivros() {
    console.log("EU AQUI: carregarLivros");
    try {
        // Faz uma requisição GET para o backend
        const response = await fetch('http://127.0.0.1:8000/livros/');
        if (!response.ok) {
            throw new Error('Erro ao buscar os livros');
        }

        // Converte a resposta em JSON
        const livros = await response.json();
        console.log(livros);
        const livrosContainer = document.querySelector('.book-list');
        
        // Limpa o conteúdo atual da lista de livros
        livrosContainer.innerHTML = '';

        // Itera sobre os livros recebidos e cria os elementos HTML
        livros.forEach(livro => {
            const livroElement = document.createElement('div');
            livroElement.classList.add('livro');
            
            // Verifica se a URL da imagem existe antes de tentar usá-la
            const imagemSrc = livro.imagem ? livro.imagem : 'default-image.jpg'; // Coloque uma imagem padrão caso a URL da imagem não exista
            
            livroElement.innerHTML = `
                <img src="${imagemSrc}" alt="${livro.titulo}">
                <h3>${livro.titulo}</h3>
                <p>Autor: ${livro.autor}</p>
                <p>Publicado em: ${livro.publicadoEm}</p>
                <p>Descrição: ${livro.descricao}</p>
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
