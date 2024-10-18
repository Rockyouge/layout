<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Biblioteca Amoras</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header>
        <nav class="navbar">
            <h1>Biblioteca Amoras</h1>
            <ul>
                <li><a href="#livros">Livros</a></li>
                <li><a href="#categorias">Categorias</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
            <input type="text" id="search-bar" placeholder="Buscar livros...">
        </nav>
    </header>

    <main>
        <section id="livros">
            <h2>Livros Populares</h2>
            <div class="livros-container">
                <!-- Exemplos de livros -->
                <div class="livro">
                    <img src="livro1.jpg" alt="Livro 1">
                    <h3>Título do Livro 1</h3>
                    <p>Autor: Autor Exemplo</p>
                </div>
                <div class="livro">
                    <img src="livro2.jpg" alt="Livro 2">
                    <h3>Título do Livro 2</h3>
                    <p>Autor: Autor Exemplo</p>
                </div>
                <!-- Adicionar mais livros aqui -->
            </div>
        </section>

        <section id="categorias">
            <h2>Categorias</h2>
            <div class="categorias-container">
                <div class="categoria">Ficção</div>
                <div class="categoria">Biografias</div>
                <div class="categoria">História</div>
                <div class="categoria">Ciência</div>
                <!-- Mais categorias -->
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Biblioteca Amoras. Todos os direitos reservados.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
