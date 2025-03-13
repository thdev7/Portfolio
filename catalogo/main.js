let produtos = [
    // Conjuntos (20 slots)
    { categoria: "Conjuntos", nome: "Conjunto Van Cleef", descricao: "Colar e brinco dourado com trevo preto.", preco: "58,00", imagem: "imagens/conjuntovcpreto.jpg" },
    { categoria: "Conjuntos", nome: "Conjunto Van Cleef", descricao: "Colar e brinco dourado com trevo madreperóla", preco: "58,00", imagem: "imagens/conjuntovcperola.jpg" },
    { categoria: "Conjuntos", nome: "Conjunto Borboleta Preta", descricao: "Colar com brinco borboleta preta", preco: "27,00", imagem: "imagens/conjuntoborboletapreta.jpg" }, 
    { categoria: "Conjuntos", nome: "Conjunto Coração Azul", descricao: "Colar e brinco azul em acrilíco ", preco: "35,00", imagem: "imagens/conjuntocoracaoazul.jpg" }, 
    { categoria: "Conjuntos", nome: "Conjunto escama de peixe", descricao: "Colar e brinco escama de peixe ", preco: "27,00", imagem: "imagens/conjuntoescama.jpg" }, 
    { categoria: "Conjuntos", nome: "Conjunto Van Cleef", descricao: "Conjunto Van Cleef dourado. Brinco, colar, e pulseira ", preco: "27,00", imagem: "imagens/conjuntovcdourado.jpg" }, 

    // Brincos (20 slots)
    { categoria: "Brincos", nome: "Brinco Estilo Pandora", descricao: "Brinco estilo pandora nas cores azul turquesa e rose", preco: "30,00 cada" , imagem: "imagens/brincopandora.jpg" },
    { categoria: "Brincos", nome: "Cartela Brinco Semaninha", descricao: "Cartela brinco semaninha, 7 pares", preco: "27,00" , imagem: "imagens/cartelabrincoescama.jpg" },
    { categoria: "Brincos", nome: "Cartela Brinco Semaninha", descricao: "Cartela brinco semaninha, 7 pares", preco: "27,00" , imagem: "imagens/cartelabrincoolhog.jpg" },
    { categoria: "Brincos", nome: "Cartela Brinco Semaninha", descricao: "Cartela brinco semaninha, 7 pares", preco: "27,00" , imagem: "imagens/cartelabrincoescama.jpg" },
    { categoria: "Brincos", nome: "Cartela Brinco Semaninha", descricao: "Cartela brinco semaninha, 7 pares", preco: "27,00" , imagem: "imagens/cartelabrincogeom.jpg" },
    { categoria: "Brincos", nome: "Cartela Brinco Semaninha", descricao: "Cartela brinco semaninha, 7 pares", preco: "27,00" , imagem: "imagens/cartelabrincocora.jpg" },
    { categoria: "Brincos", nome: "Cartela Brinco Eu Desejo...", descricao: "Cartela Brinco 5 pares, Eu desejo...", preco: "27,00", imagem: "imagens/brincopareseudesejo.jpg" },
    { categoria: "Brincos", nome: "Trio Brinco", descricao: "Cartela Trio De Brincos; concha, cauda de sereia, tartaruga.", preco: "20,00", imagem: "imagens/triobrincoestrela.jpg" },
    { categoria: "Brincos", nome: "Trio Brinco", descricao: "Cartela Trio De Brincos; ponto de luz, coração, pérola.", preco: "20,00", imagem: "imagens/triobrincoperola.jpg" },
    { categoria: "Brincos", nome: "Brinco Ear Cuff", descricao: "Brinco ear cuff pedraria.", preco: "35,00", imagem: "imagens/earcuffbrinco.jpg" },

    // Colares (20 slots)
    { categoria: "Colares", nome: "Colar Triplo", descricao: "Colar Triplo Fundo Do Mar.", preco: "27,00", imagem: "imagens/colartriplobuzio.jpg" },
    { categoria: "Colares", nome: "Colar Duplo", descricao: "Colar Duplo Sol e Meia Lua.", preco: "27,00", imagem: "imagens/colarduplosol.jpg" },
    { categoria: "Colares", nome: "Colar Cauda de sereia e escama", descricao: "Colar cauda de sereia e escama de peixe.", preco: "27,00", imagem: "imagens/colarcaudas.jpg" },
    { categoria: "Colares", nome: "Colar Duplo Corações ", descricao: "Colar duplo corações vazados  .", preco: "27,00", imagem: "imagens/colarcoracoes.jpg" },
    { categoria: "Colares", nome: "Colar Pérola e Estrela", descricao: "Colar duplo pérola e estrela vazada.", preco: "27,00", imagem: "imagens/colarduploestrela.jpg" },
    { categoria: "Colares", nome: "Colar Pérola e Meia Lua", descricao: "Colar duplo pérola e meia lua.", preco: "27,00", imagem: "imagens/colarduplolua.jpg" },
    { categoria: "Colares", nome: "Choker Cauda de Sereia", descricao: "Choker cauda de sereia lisa.", preco: "27,00", imagem: "imagens/choker cauda de sereia lisa.jpg" },
    { categoria: "Colares", nome: "Choker Fundo Do Mar", descricao: "Choker fundo do mar.", preco: "27,00", imagem: "imagens/cauda de sereia detalhada.jpg" },
    { categoria: "Colares", nome: "Choker Corações Polidos", descricao: "Choker corações pequenos polidos.", preco: "27,00", imagem: "imagens/chokercoraçoes.jpg" },
    { categoria: "Colares", nome: "Colar Ponto de Luz e Coração", descricao: "Colar duplo ponto de luz e coração.", preco: "27,00", imagem: "imagens/colarduplocoracao.jpg" },
    { categoria: "Colares", nome: "Colar Cadeado e Chave", descricao: "Colar duplo cadeado com textura e chave.", preco: "45,00", imagem: "imagens/colarchaveecadeado.jpg" },
    { categoria: "Colares", nome: "Colar Laminado Borboleta", descricao: "Colar laminado borboleta 3d.", preco: "32,00", imagem: "imagens/colarborboleta.jpg" },
    { categoria: "Colares", nome: "Gargantilha Pedra Goldstone", descricao: "Gargantilha pedra Goldstone Verde.", preco: "32,00", imagem: "imagens/colargoldstone.jpg" },

    // Braceletes (20 slots)
    { categoria: "Braceletes", nome: "Bracelete Luxo", descricao: "Bracelete folheado a prata.", preco: "159,90", imagem: "bracelete1.jpg" },
    { categoria: "Braceletes", nome: "Bracelete Clássico", descricao: "Bracelete dourado elegante.", preco: "179,90", imagem: "bracelete2.jpg" },

    // Pulseiras (20 slots)
    { categoria: "Pulseiras", nome: "Pulseira Delicada", descricao: "Pulseira com detalhes finos.", preco: "129,90", imagem: "pulseira1.jpg" },
    { categoria: "Pulseiras", nome: "Pulseira de Couro", descricao: "Pulseira masculina de couro.", preco: "149,90", imagem: "pulseira2.jpg" },

    // Anéis (20 slots)
    { categoria: "Anéis", nome: "Anel Clássico", descricao: "Anel com design sofisticado.", preco: "99,90", imagem: "anel1.jpg" },
    { categoria: "Anéis", nome: "Anel Dourado", descricao: "Anel com acabamento brilhante.", preco: "119,90", imagem: "anel2.jpg" }
];

const categorias = ["Conjuntos", "Brincos", "Colares", "Braceletes", "Pulseiras", "Anéis"];
const catalogo = document.getElementById("catalogo");
const barraPesquisa = document.getElementById("barra-pesquisa");
const numeroContato = "+5571997176177";

// Configuração do Fuse.js para busca aproximada
const opcoesFuse = {
    keys: ["nome", "descricao"], // Campos onde a busca será feita
    threshold: 0.3, // Sensibilidade da busca (0 = exato, 1 = mais flexível)
    includeScore: true, // Inclui a pontuação de similaridade
};

const fuse = new Fuse(produtos, opcoesFuse);

// Função para exibir os produtos na tela
function renderizarProdutos(produtosFiltrados = produtos) {
    catalogo.innerHTML = ""; 

    categorias.forEach(categoria => {
        let produtosCategoria = produtosFiltrados.filter(produto => produto.categoria === categoria);

        if (produtosCategoria.length > 0) {
            catalogo.innerHTML += `<h2 class="categoria-titulo">${categoria}</h2><div class="catalogo" id="${categoria}"></div>`;
            
            const categoriaDiv = document.getElementById(categoria);

            produtosCategoria.forEach(produto => {
                categoriaDiv.innerHTML += `
                    <div class="produto">
                        <img src="${produto.imagem}" alt="${produto.nome}">
                        <h3>${produto.nome}</h3>
                        <p>${produto.descricao}</p>
                        <p class="preco">R$ ${produto.preco}</p>
                        <a href="https://api.whatsapp.com/send?phone=${numeroContato}&text=Olá, tenho interesse. ${produto.nome}!" target="_blank">Pedido via WhatsApp</a>
                    </div>
                `;
            });
        }
    });
}

// Função para filtrar os produtos com busca aproximada
function filtrarProdutos(termo) {
    if (termo === "") {
        renderizarProdutos(produtos); // Se a busca estiver vazia, mostra todos os produtos
    } else {
        const resultados = fuse.search(termo); // Busca aproximada com Fuse.js
        const produtosFiltrados = resultados.map(resultado => resultado.item); // Extrai os produtos dos resultados
        renderizarProdutos(produtosFiltrados); // Renderiza os produtos filtrados
    }
}

// Evento de input na barra de pesquisa
barraPesquisa.addEventListener("input", (event) => {
    const termo = event.target.value.trim(); // Remove espaços em branco
    filtrarProdutos(termo); // Filtra os produtos conforme o termo digitado
});

// Renderiza os produtos na tela ao carregar a página
renderizarProdutos();