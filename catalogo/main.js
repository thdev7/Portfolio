let produtos = [
    // Conjunto (20 slots)
    { categoria: "Conjunto", nome: "Conjunto Van Cleef", descricao: "Colar e brinco dourado com trevo preto.", preco: "58,00", imagem: "imagens/conjuntovcpreto.jpg" },
    { categoria: "Conjunto", nome: "Conjunto Van Cleef", descricao: "Colar e brinco dourado madreperóla", preco: "58,00", imagem: "imagens/conjuntovcperola.jpg" },
     { categoria: "Conjunto", nome: "Conjunto Borboleta Preta", descricao: "Colar com brinco borboleta preta", preco: "27,00", imagem: "imagens/conjuntoborboletapreta.jpg" }, 
     { categoria: "Conjunto", nome: "Conjunto Coração Azul", descricao: "Colar e brinco azul em acrilíco ", preco: "35,00", imagem: "imagens/conjuntocoracaoazul.jpg" }, 
     { categoria: "Conjunto", nome: "Conjunto escama de peixe", descricao: "Colar e brinco escama de peixe ", preco: "27,00", imagem: "imagens/conjuntoescama.jpg" }, 



    // Brincos (20 slots)
    { categoria: "Brinco", nome: "Brinco Estilo Pandora", descricao: "Brinco estilo pandora nas cores azul turquesa e rose", preco: "30,00 cada" , imagem: "imagens/brincopandora.jpg" },
    { categoria: "Brinco", nome: "Cartela Brinco Semaninha", descricao: "Cartela brinco semaninha, 7 pares", preco: "27,00" , imagem: "imagens/cartelabrincoescama.jpg" },
    { categoria: "Brinco", nome: "Cartela Brinco Semaninha", descricao: "Cartela brinco semaninha, 7 pares", preco: "27,00" , imagem: "imagens/cartelabrincoolhog.jpg" },
    { categoria: "Brinco", nome: "Cartela Brinco Semaninha", descricao: "Cartela brinco semaninha, 7 pares", preco: "27,00" , imagem: "imagens/cartelabrincoescama.jpg" },
    { categoria: "Brinco", nome: "Cartela Brinco Semaninha", descricao: "Cartela brinco semaninha, 7 pares", preco: "27,00" , imagem: "imagens/cartelabrincogeom.jpg" },
    { categoria: "Brinco", nome: "Cartela Brinco Semaninha", descricao: "Cartela brinco semaninha, 7 pares", preco: "27,00" , imagem: "imagens/cartelabrincocora.jpg" },
    { categoria: "Brinco", nome: "Cartela Brinco Eu Desejo...", descricao: "Cartela Brinco 5 pares, Eu desejo...", preco: "27,00", imagem: "imagens/brincopareseudesejo.jpg" },
    { categoria: "Brinco", nome: "Trio Brinco", descricao: "Cartela Trio De Brincos", preco: "20,00", imagem: "imagens/triobrincoestrela.jpg" },
    { categoria: "Brinco", nome: "Trio Brinco", descricao: "Cartela Trio De Brincos", preco: "20,00", imagem: "imagens/triobrincoperola.jpg" },
    { categoria: "Brinco", nome: "Brinco Ear Cuff", descricao: "Brinco ear cuff pedraria.", preco: "35,00", imagem: "imagens/earcuffbrinco.jpg" },
    



    // Colares (20 slots)
    { categoria: "Colar", nome: "Colar de Pérolas", descricao: "Colar sofisticado com pérolas naturais.", preco: "199,90", imagem: "colar1.jpg" },
    { categoria: "Colar", nome: "Colar de Coração", descricao: "Colar com pingente de coração.", preco: "139,90", imagem: "colar2.jpg" },

    // Braceletes (20 slots)
    { categoria: "Bracelete", nome: "Bracelete Luxo", descricao: "Bracelete folheado a prata.", preco: "159,90", imagem: "bracelete1.jpg" },
    { categoria: "Bracelete", nome: "Bracelete Clássico", descricao: "Bracelete dourado elegante.", preco: "179,90", imagem: "bracelete2.jpg" },

    // Pulseiras (20 slots)
    { categoria: "Pulseira", nome: "Pulseira Delicada", descricao: "Pulseira com detalhes finos.", preco: "129,90", imagem: "pulseira1.jpg" },
    { categoria: "Pulseira", nome: "Pulseira de Couro", descricao: "Pulseira masculina de couro.", preco: "149,90", imagem: "pulseira2.jpg" },

    // Anéis (20 slots)
    { categoria: "Anéis", nome: "Anel Clássico", descricao: "Anel com design sofisticado.", preco: "99,90", imagem: "anel1.jpg" },
    { categoria: "Anéis", nome: "Anel Dourado", descricao: "Anel com acabamento brilhante.", preco: "119,90", imagem: "anel2.jpg" }
];

const categorias = ["Conjunto", "Brinco", "Colar", "Bracelete", "Pulseira", "Anéis"];
const catalogo = document.getElementById("catalogo");
const numeroContato = "+5571997176177";

// Função para exibir os produtos na tela
function renderizarProdutos() {
    catalogo.innerHTML = ""; 

    categorias.forEach(categoria => {
        let produtosCategoria = produtos.filter(produto => produto.categoria === categoria);

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

// Renderiza os produtos na tela
renderizarProdutos();
