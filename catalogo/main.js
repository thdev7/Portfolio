let produtos = [

    // RAÇÕES GALINHA
    { categoria: "Rações Galinha", nome: "Golden Special Adultos", descricao: "Ração premium para cães adultos - 15kg", preco: "145,00", imagem: "imagens/golden-cao.jpg" },
    { categoria: "Rações Galinha", nome: "Premier Filhotes", descricao: "Ração para cães filhotes raças médias - 10kg", preco: "189,00", imagem: "imagens/premier-filhote.jpg" },
    { categoria: "Rações Galinha", nome: "Pedigree Adultos", descricao: "Ração para cães adultos sabor carne - 10,1kg", preco: "119,00", imagem: "imagens/pedigree-adulto.jpg" },

    // RAÇÕES CÃES
    { categoria: "Rações Cães", nome: "Golden Special Adultos", descricao: "Ração premium para cães adultos - 15kg", preco: "145,00", imagem: "imagens/golden-cao.jpg" },
    { categoria: "Rações Cães", nome: "Premier Filhotes", descricao: "Ração para cães filhotes raças médias - 10kg", preco: "189,00", imagem: "imagens/premier-filhote.jpg" },
    { categoria: "Rações Cães", nome: "Pedigree Adultos", descricao: "Ração para cães adultos sabor carne - 10,1kg", preco: "119,00", imagem: "imagens/pedigree-adulto.jpg" },


    // RAÇÕES GATOS
    { categoria: "Rações Gatos", nome: "Whiskas Adulto Frango", descricao: "Ração seca para gatos adultos sabor frango - 10,1kg", preco: "112,00", imagem: "imagens/whiskas-frango.jpg" },
    { categoria: "Rações Gatos", nome: "Golden Castrados", descricao: "Ração premium gatos castrados - 10kg", preco: "155,00", imagem: "imagens/golden-gato.jpg" },
    { categoria: "Rações Gatos", nome: "Premier Filhotes", descricao: "Ração super premium gatos filhotes - 7,5kg", preco: "169,00", imagem: "imagens/premier-gato.jpg" },

    // PETISCOS & OSSINHOS
    { categoria: "Petiscos", nome: "Doguitos Bifinhos", descricao: "Petisco sabor carne para cães - 65g", preco: "8,90", imagem: "imagens/doguitos.jpg" },
    { categoria: "Petiscos", nome: "Petitos Gatos", descricao: "Petisco sabor salmão para gatos - 40g", preco: "7,50", imagem: "imagens/petitos.jpg" },
    { categoria: "Petiscos", nome: "Ossinho Natural", descricao: "Pacote de ossinhos naturais - 500g", preco: "25,00", imagem: "imagens/ossinhos.jpg" },

    // BRINQUEDOS
    { categoria: "Brinquedos", nome: "Bola com Apito", descricao: "Brinquedo divertido para cães", preco: "18,00", imagem: "imagens/bola-apito.jpg" },
    { categoria: "Brinquedos", nome: "Varinha com Pena", descricao: "Brinquedo interativo para gatos", preco: "22,00", imagem: "imagens/varinha-pena.jpg" },
    { categoria: "Brinquedos", nome: "Mordedor Nylon Ossinho", descricao: "Mordedor resistente formato de osso", preco: "28,00", imagem: "imagens/mordedor.jpg" },

    // ACESSÓRIOS
    { categoria: "Acessórios", nome: "Coleira Ajustável", descricao: "Coleira colorida com regulagem", preco: "25,00", imagem: "imagens/coleira.jpg" },
    { categoria: "Acessórios", nome: "Cama Pet Pelúcia", descricao: "Cama redonda de pelúcia super confortável", preco: "95,00", imagem: "imagens/cama-pet.jpg" },
    { categoria: "Acessórios", nome: "Bebedouro Automático", descricao: "Bebedouro para pets com reservatório 2L", preco: "75,00", imagem: "imagens/bebedouro.jpg" },

    // HIGIENE & CUIDADOS
    { categoria: "Higiene", nome: "Areia Higiênica Perfumada", descricao: "Areia higiênica para gatos - 4kg", preco: "19,90", imagem: "imagens/areia.jpg" },
    { categoria: "Higiene", nome: "Shampoo Antipulgas", descricao: "Shampoo antipulgas e carrapatos - 500ml", preco: "32,00", imagem: "imagens/shampoo.jpg" },
    { categoria: "Higiene", nome: "Tapete Higiênico", descricao: "Pacote com 30 tapetes higiênicos absorventes", preco: "69,00", imagem: "imagens/tapete.jpg" },
     // Utensílios domésticos
    { categoria: "Utensílios domésticos", nome: "Churrasqueira", descricao: "Ração premium para cães adultos - 15kg", preco: "145,00", imagem: "imagens/golden-cao.jpg" },
    { categoria: "Utensílios domésticos", nome: "Rodo", descricao: "Ração para cães filhotes raças médias - 10kg", preco: "189,00", imagem: "imagens/premier-filhote.jpg" },
    { categoria: "Utensílios domésticos", nome: "Vassouras", descricao: "Ração para cães adultos sabor carne - 10,1kg", preco: "119,00", imagem: "imagens/pedigree-adulto.jpg" },
];

const categorias = ["Rações Galinha", "Rações Cães", "Rações Gatos", "Petiscos", "Brinquedos", "Acessórios", "Higiene", "Utensílios domésticos"];
const catalogo = document.getElementById("catalogo");
const barraPesquisa = document.getElementById("barra-pesquisa");
const numeroContato = "+5571997176177"; // WhatsApp

// Configuração do Fuse.js
const opcoesFuse = {
    keys: ["nome", "descricao", "categoria"],
    threshold: 0.3,
    includeScore: true,
};

const fuse = new Fuse(produtos, opcoesFuse);

// Renderização dos produtos
function renderizarProdutos(produtosFiltrados = produtos, categoriaPesquisada = null) {
    catalogo.innerHTML = "";

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
                        <a href="https://api.whatsapp.com/send?phone=${numeroContato}&text=Olá, tenho interesse em ${produto.nome} - ${produto.descricao}" target="_blank">Pedir via WhatsApp</a>
                    </div>
                `;
            });
        }
    });
}

// Normalização e busca
function normalizarTermo(termo) {
    return termo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function correspondeACategoria(termo, categoria) {
    const termoNormalizado = normalizarTermo(termo);
    const categoriaNormalizada = normalizarTermo(categoria);
    return (
        termoNormalizado === categoriaNormalizada ||
        termoNormalizado + "s" === categoriaNormalizada ||
        termoNormalizado + "es" === categoriaNormalizada
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

        const resultadosFinais = produtosFiltrados;
        renderizarProdutos(resultadosFinais, categoriaPesquisada);
    }
}

barraPesquisa.addEventListener("input", (event) => {
    const termo = event.target.value.trim();
    filtrarProdutos(termo);
});

renderizarProdutos();

// Modo noturno
const modoNoturnoBtn = document.getElementById("modo-noturno-btn");

if (localStorage.getItem("modoNoturno") === "true") {
    document.body.classList.add("modo-noturno");
    modoNoturnoBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

modoNoturnoBtn.addEventListener("click", () => {
    document.body.classList.toggle("modo-noturno");
    if (document.body.classList.contains("modo-noturno")) {
        modoNoturnoBtn.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem("modoNoturno", "true");
    } else {
        modoNoturnoBtn.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem("modoNoturno", "false");
    }
});

