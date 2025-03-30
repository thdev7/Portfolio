let produtos = [
    // Conjuntos (20 slots)
    { categoria: "Conjuntos", nome: "Conjunto Borboleta", descricao: "Colar com brinco borboleta preta", preco: "27,00", imagem: "imagens/conjuntoborboletapreta.jpg" }, 
    { categoria: "Conjuntos", nome: "Conjunto Escama", descricao: "Colar e brinco escama de peixe ", preco: "27,00", imagem: "imagens/conjuntoescama.jpg" },
    { categoria: "Conjuntos", nome: "Conjunto Coração", descricao: "Colar e brinco azul em acrilíco ", preco: "35,00", imagem: "imagens/conjuntocoracaoazul.jpg" }, 
    { categoria: "Conjuntos", nome: "Conjunto Van Cleef", descricao: "Conjunto Van Cleef dourado, com 1 trevo preto, colar e brinco.", preco: "45,00", imagem: "imagens/conjuntovcpreto.jpg" },
    { categoria: "Conjuntos", nome: "Conjunto Van Cleef", descricao: "Conjunto Van Cleef prata, com 5 trevos preto, colar e pulseira.", preco: "58,00", imagem: "imagens/conjuntovcprata.jpg" },
    { categoria: "Conjuntos", nome: "Conjunto Van Cleef", descricao: "Conjunto Van Cleef dourado, com 5 trevos preto, colar e pulseira. ", preco: "58,00", imagem: "imagens/conjuntovcdourado5trevos.jpg" }, 
    { categoria: "Conjuntos", nome: "Conjunto Van Cleef", descricao: "Conjunto Van Cleef dourado, com 5 trevos em madrepérola, colar e pulseira ", preco: "58,00", imagem: "imagens/vcbranco.jpg" }, 
    { categoria: "Conjuntos", nome: "Conjunto Van Cleef", descricao: "Conjunto Van Cleef dourado, com 5 trevos verde, colar e pulseira ", preco: "58,00", imagem: "imagens/conjuntovcverde.jpg" }, 
    { categoria: "Conjuntos", nome: "Conjunto Van Cleef", descricao: "Conjunto Van Cleef dourado, com 5 trevos vinho, colar e pulseira ", preco: "58,00", imagem: "imagens/conjuntovsvinho.jpg" },
    { categoria: "Conjuntos", nome: "Conjunto Van Cleef", descricao: "Conjunto Van Cleef dourado, com 5 trevos. Brinco, colar, e pulseira ", preco: "92,00", imagem: "imagens/conjuntovcdourado.jpg" }, 

    // Brincos (20 slots)
    { categoria: "Brincos", nome: "Trio Brinco", descricao: "Cartela Trio De Brincos; concha, cauda de sereia, tartaruga.", preco: "20,00", imagem: "imagens/triobrincoestrela.jpg" },
    { categoria: "Brincos", nome: "Trio Brinco", descricao: "Cartela Trio De Brincos; ponto de luz, coração, pérola.", preco: "20,00", imagem: "imagens/triobrincoperola.jpg" },
    { categoria: "Brincos", nome: "Cartela Brinco Semaninha", descricao: "Cartela brinco semaninha, 7 pares, olho grego...", preco: "27,00" , imagem: "imagens/cartelabrincoolhog.jpg" },
    { categoria: "Brincos", nome: "Cartela Brinco Semaninha", descricao: "Cartela brinco semaninha, 7 pares, escama...", preco: "27,00" , imagem: "imagens/cartelabrincoescama.jpg" },
    { categoria: "Brincos", nome: "Cartela Brinco Semaninha", descricao: "Cartela brinco semaninha, 7 pares, triângulo...", preco: "27,00" , imagem: "imagens/cartelabrincogeom.jpg" },
    { categoria: "Brincos", nome: "Cartela Brinco Semaninha", descricao: "Cartela brinco semaninha, 7 pares, coração robusto...", preco: "27,00" , imagem: "imagens/cartelabrincocora.jpg" },
    { categoria: "Brincos", nome: "Cartela Brinco Eu Desejo...", descricao: "Cartela Brinco 5 pares, Eu desejo...", preco: "27,00", imagem: "imagens/brincopareseudesejo.jpg" },
    { categoria: "Brincos", nome: "Brinco Estilo Pandora", descricao: "Brinco estilo pandora nas cores azul turquesa e rose", preco: "30,00 cada" , imagem: "imagens/brincopandora.jpg" },
    { categoria: "Brincos", nome: "Brinco Ear Cuff", descricao: "Brinco ear cuff pedraria.", preco: "35,00", imagem: "imagens/earcuffbrinco.jpg" },

    // Colares (20 slots)
    { categoria: "Colares", nome: "Colar concha", descricao: "Colar Triplo Fundo Do Mar.", preco: "27,00", imagem: "imagens/colartriplobuzio.jpg" },
    { categoria: "Colares", nome: "Colar lua", descricao: "Colar Duplo Sol e Meia Lua.", preco: "27,00", imagem: "imagens/colarduplosol.jpg" },
    { categoria: "Colares", nome: "Colar cauda", descricao: "Colar cauda de sereia e escama de peixe.", preco: "27,00", imagem: "imagens/colarcaudas.jpg" },
    { categoria: "Colares", nome: "Colar corações ", descricao: "Colar duplo corações vazados  .", preco: "27,00", imagem: "imagens/colarcoracoes.jpg" },
    { categoria: "Colares", nome: "Colar estrela", descricao: "Colar duplo pérola e estrela vazada.", preco: "27,00", imagem: "imagens/colarduploestrela.jpg" },
    { categoria: "Colares", nome: "Colar meia lua", descricao: "Colar duplo pérola e meia lua.", preco: "27,00", imagem: "imagens/colarduplolua.jpg" },
    { categoria: "Colares", nome: "Choker cauda", descricao: "Choker cauda de sereia lisa.", preco: "27,00", imagem: "imagens/choker cauda de sereia lisa.jpg" },
    { categoria: "Colares", nome: "Choker mar", descricao: "Choker fundo do mar.", preco: "27,00", imagem: "imagens/cauda de sereia detalhada.jpg" },
    { categoria: "Colares", nome: "Choker corações", descricao: "Choker corações pequenos polidos.", preco: "27,00", imagem: "imagens/chokercoraçoes.jpg" },
    { categoria: "Colares", nome: "Colar coração", descricao: "Colar duplo ponto de luz e coração.", preco: "27,00", imagem: "imagens/colarduplocoracao.jpg" },
    { categoria: "Colares", nome: "Gargantilha pedra", descricao: "Gargantilha pedra Goldstone Verde.", preco: "32,00", imagem: "imagens/colargoldstone.jpg" },
    { categoria: "Colares", nome: "Colar cadeado", descricao: "Colar duplo cadeado com textura e chave.", preco: "45,00", imagem: "imagens/colarchaveecadeado.jpg" },

    // Braceletes (20 slots)
    { categoria: "Braceletes", nome: "Bracelete", descricao: "Bracelete coração preto, ótimo para mixes.", preco: "40,00", imagem: "imagens/braceletepreto.jpg" },
    { categoria: "Braceletes", nome: "Bracelete", descricao: "Bracelete prego cravejado com zircônias.", preco: "40,00", imagem: "imagens/prego2.jpg" },
    { categoria: "Braceletes", nome: "Bracelete ", descricao: " Bracelete trevo ou Tiffany&co.", preco: "55,00 cada", imagem: "imagens/braceletetrevo.jpg" },
    { categoria: "Braceletes", nome: "Bracelete ", descricao: " Bracelete fio duplo.", preco: "30,00", imagem: "imagens/braceletefio.jpg" },
   
    // Pulseiras (20 slots)
    { categoria: "Pulseiras", nome: "Mix Pulseiras", descricao: "Pulseira laminada fita 2mm ou pulseira baiana 21cm.", preco: "26,00 - 23,00 cada", imagem: "imagens/pulseirabaiana.jpg" },
    { categoria: "Pulseiras", nome: "Mix Pulseiras", descricao: "Pulseira baiana ou pulseira Tiffany&Co azul turquesa.", preco: "23,00 - 30,00 cada", imagem: "imagens/pulseiratiff.jpg" },
    { categoria: "Pulseiras", nome: "Mix Pulseiras", descricao: "Pulseira baiana, pulseira Tiffany&Co rosa ou pulseira laminada 2mm.", preco: "23,00 - 30,00 - 26,00 cada", imagem: "imagens/pulseiratiffany.jpg" },
    { categoria: "Pulseiras", nome: "Pulseiras Van Cleef", descricao: "Pulseira Van Cleef individual, para quem não quer o conjunto de colar e pulseira.", preco: "35,00 cada", imagem: "imagens/pulseirasvc.jpg" },
    { categoria: "Pulseiras", nome: "Pulseiras Van Cleef", descricao: "Pulseira montada com berloques.", preco: "55,00", imagem: "imagens/pulseiramontadaber.jpg" },
    { categoria: "Pulseiras", nome: "Pulseira Coração", descricao: "Pulseira coração com zircônia no círculo .", preco: "23,00", imagem: "imagens/pulseiracoracaoo.jpg" },
    { categoria: "Pulseiras", nome: "Pulseira Lua", descricao: "Pulseira lua com pedrinhas.", preco: "25,00", imagem: "imagens/pulseiralua.jpg" },
    { categoria: "Pulseiras", nome: "Pulseira Olho Grego", descricao: "Pulseira dupla olho grego e estrela com bolinhas.", preco: "30,00", imagem: "imagens/olhogrego.jpg" },
    

    // Anéis (20 slots)
    { categoria: "Anéis", nome: "Mix De Anéis", descricao: "Anel regulável dois triângulos ou anel retângulo.", preco: "15,00 cada", imagem: "imagens/aneldoistriang.jpg" },
    { categoria: "Anéis", nome: "Mix De Anéis", descricao: "Anel regulável dois corações, anel regulável coração e zircônia ou anel gatinho.", preco: "15,00 cada", imagem: "imagens/aneldoiscorac.jpg" },
    { categoria: "Anéis", nome: "Mix De Anéis", descricao: "Anel olho grego, anel onda ou anel oval.", preco: "15,00 cada", imagem: "imagens/anelolhogrego.jpg" },
    { categoria: "Anéis", nome: "Mix De Anéis", descricao: "Anel cruz, anel bolinha ou anel círculo. ", preco: "15,00 cada", imagem: "imagens/anelcirculoo.jpg" },
    { categoria: "Anéis", nome: "Mix De Anéis", descricao: "Anel regulável lua e coração ou anel regulável lua e estrela. ", preco: "15,00 cada", imagem: "imagens/anelluacor.jpg" },
    { categoria: "Anéis", nome: "Mix De Anéis", descricao: "Anel corações enroscados.", preco: "15,00", imagem: "imagens/anelenroscado.jpg" },
    { categoria: "Anéis", nome: "Mix De Anéis", descricao: "Anel ondulado ou anel estrela única.", preco: "18,00 cada", imagem: "imagens/anelonduladoo.jpg" },
    { categoria: "Anéis", nome: "Mix De Anéis", descricao: "Anel duplo borboleta e zircônia ou anel regulável dois palitos.  ", preco: "18,00 cada", imagem: "imagens/anelduplo2.jpg" },
    { categoria: "Anéis", nome: "Mix De Anéis", descricao: "Anel duplo lacinho e zircônia ou anel regulável borboleta e zircônia.  ", preco: "18,00 cada", imagem: "imagens/anellaco.jpg" },
    { categoria: "Anéis", nome: "Mix De Anéis", descricao: "Anel cauda de sereia e zircônia, anel palito e bolinha ou anel gota dupla.  ", preco: "18,00 cada", imagem: "imagens/anelgota.jpg" },
    { categoria: "Anéis", nome: "Anel", descricao: "Anel losango único.", preco: "18,00", imagem: "imagens/anellosango.jpg" },
    { categoria: "Anéis", nome: "Anel", descricao: "Anel formato em 'V'. ", preco: "18,00", imagem: "imagens/anelv.jpg" },
];

const categorias = ["Conjuntos", "Brincos", "Colares", "Braceletes", "Pulseiras", "Anéis"];
const catalogo = document.getElementById("catalogo");
const barraPesquisa = document.getElementById("barra-pesquisa");
const numeroContato = "+5571997176177";

// Configuração do Fuse.js para busca aproximada
const opcoesFuse = {
    keys: ["nome", "descricao", "categoria"], // Campos onde a busca será feita
    threshold: 0.3, // Sensibilidade da busca (0 = exato, 1 = mais flexível)
    includeScore: true, // Inclui a pontuação de similaridade
};

const fuse = new Fuse(produtos, opcoesFuse);

// Função para exibir os produtos na tela
function renderizarProdutos(produtosFiltrados = produtos, categoriaPesquisada = null) {
    catalogo.innerHTML = "";

    // Se uma categoria específica foi pesquisada, coloque-a no início do array
    const categoriasExibidas = categoriaPesquisada
        ? [categoriaPesquisada, ...categorias.filter(cat => cat !== categoriaPesquisada)]
        : categorias;

    categoriasExibidas.forEach(categoria => {
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
                        <a href="https://api.whatsapp.com/send?phone=${numeroContato}&text=Olá, tenho interesse. ${produto.descricao}!" target="_blank">Pedido via WhatsApp</a>
                    </div>
                `;
            });
        }
    });
}

// Função para normalizar o termo de busca (singular/plural, acentos e minúsculas)
function normalizarTermo(termo) {
    return termo
        .toLowerCase() // Converte para minúsculas
        .normalize("NFD") // Remove acentos
        .replace(/[\u0300-\u036f]/g, ""); // Remove diacríticos
}

// Função para verificar se um termo corresponde a uma categoria (singular ou plural)
function correspondeACategoria(termo, categoria) {
    const termoNormalizado = normalizarTermo(termo);
    const categoriaNormalizada = normalizarTermo(categoria);

    // Verifica se o termo corresponde à categoria no singular ou plural
    return (
        termoNormalizado === categoriaNormalizada || // Exato (ex.: "anel" → "anel")
        termoNormalizado + "s" === categoriaNormalizada || // Plural simples (ex.: "brinco" → "brincos")
        termoNormalizado + "es" === categoriaNormalizada || // Plural com "es" (ex.: "colar" → "colares")
        termoNormalizado.replace(/l$/, "is") === categoriaNormalizada || // Casos como "anel" → "anéis"
        termoNormalizado.replace(/co$/, "cos") === categoriaNormalizada || // Casos como "brinco" → "brincos"
        termoNormalizado.replace(/ar$/, "ares") === categoriaNormalizada // Casos como "colar" → "colares"
    );
}

function filtrarProdutos(termo) {
    if (termo === "") {
        renderizarProdutos(produtos);
    } else {
        const termoNormalizado = normalizarTermo(termo);
        const resultados = fuse.search(termoNormalizado);
        const produtosFiltrados = resultados.map(resultado => resultado.item);

        const categoriaPesquisada = categorias.find(categoria =>
            correspondeACategoria(termo, categoria)
        );

        let produtosCategoriaExata = [];
        let produtosOutrasCategorias = [];

        if (categoriaPesquisada) {
            produtosCategoriaExata = produtosFiltrados.filter(produto =>
                correspondeACategoria(produto.categoria, categoriaPesquisada)
            );

            produtosOutrasCategorias = produtosFiltrados.filter(produto =>
                !correspondeACategoria(produto.categoria, categoriaPesquisada) &&
                (normalizarTermo(produto.nome).includes(termoNormalizado) ||
                    normalizarTermo(produto.descricao).includes(termoNormalizado))
            );
        } else {
            produtosOutrasCategorias = produtosFiltrados;
        }

        const resultadosFinais = [...produtosCategoriaExata, ...produtosOutrasCategorias];
        renderizarProdutos(resultadosFinais, categoriaPesquisada); // Passa a categoria pesquisada
    }
}

// Evento de input na barra de pesquisa
barraPesquisa.addEventListener("input", (event) => {
    const termo = event.target.value.trim(); // Remove espaços em branco
    filtrarProdutos(termo); // Filtra os produtos conforme o termo digitado
});

// Renderiza os produtos na tela ao carregar a página
renderizarProdutos();

// Seleciona o botão de alternância
const modoNoturnoBtn = document.getElementById("modo-noturno-btn");

// Verifica se o modo noturno está ativado no localStorage
if (localStorage.getItem("modoNoturno") === "true") {
    document.body.classList.add("modo-noturno");
    modoNoturnoBtn.innerHTML = '<i class="fas fa-sun"></i>'; // Ícone de sol
}

// Adiciona um evento de clique ao botão
modoNoturnoBtn.addEventListener("click", () => {
    document.body.classList.toggle("modo-noturno");

    // Atualiza o ícone do botão
    if (document.body.classList.contains("modo-noturno")) {
        modoNoturnoBtn.innerHTML = '<i class="fas fa-sun"></i>'; // Ícone de sol
        localStorage.setItem("modoNoturno", "true"); // Salva no localStorage
    } else {
        modoNoturnoBtn.innerHTML = '<i class="fas fa-moon"></i>'; // Ícone de lua
        localStorage.setItem("modoNoturno", "false"); // Salva no localStorage
    }
});