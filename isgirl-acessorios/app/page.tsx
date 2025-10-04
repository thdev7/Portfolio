"use client"

import { useState, useEffect } from "react"
import { Search, ShoppingCart, Moon, Sun, Plus, Minus, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"
import Image from "next/image"

const produtos = [
  // Conjuntos
  {
    id: 73,
    categoria: "Conjuntos",
    cor: "Dourado",
    nome: "Conjunto Van Cleef Completo",
    descricao: "Conjunto completo de colar, pulseira e brinco todo dourado Van Cleef.",
    preco: 92.0,
    imagem: "/images/conjuntovcdourado.jpg",
  },
  {
    id: 75,
    categoria: "Conjuntos",
    cor: "Prata",
    nome: "ESGOTADO!",
    descricao: "Conjunto chique de zircônia, elegante, brilhante. colar e pulseira.",
    preco: 88.0,
    imagem: "/images/conjuntozirconia.jpeg",
  },
  {
    id: 70,
    categoria: "Conjuntos",
    cor: "Prata",
    nome: "Conjunto Van Cleef prata 5 Trevos",
    descricao: "Conjunto Van Cleef prata, com 5 trevos preto, colar e pulseira.",
    preco: 67.0,
    imagem: "/images/conjuntovc5trevos.jpg",
  },
  {
    id: 4,
    categoria: "Conjuntos",
    cor: "Dourado",
    nome: "Conjunto Van Cleef prata 5 trevos",
    descricao: "Conjunto Van Cleef dourado, com 5 trevos preto, colar e pulseira.",
    preco: 67.0,
    imagem: "/images/vc1.jpeg",
  },
  {
    id: 119,
    categoria: "Conjuntos",
    cor: "Dourado",
    nome: "Conjunto Van Cleef dourado 5 trevos",
    descricao: "Conjunto Van Cleef dourado, com 5 trevos em madrepérola, colar e pulseira.",
    preco: 67.0,
    imagem: "/images/atvancleef.jpeg",
  },
  {
    id: 72,
    categoria: "Conjuntos",
    cor: "Dourado",
    nome: "Conjunto Van Cleef dourado 5 trevos",
    descricao: "Conjunto Van Cleef dourado, com 5 trevos verde, colar e pulseira.",
    preco: 67.0,
    imagem: "/images/vc2.jpeg",
  },
  {
    id: 18,
    categoria: "Conjuntos",
    cor: "Dourado",
    nome: "ESGOTADO!",
    descricao: "Conjunto Van Cleef dourado, com 5 trevos marsala e cravejado, colar e pulseira.",
    preco: 67.0,
    imagem: "/images/novotrevom.jpeg",
  },
   {
    id: 67,
    categoria: "Conjuntos",
    cor: "Dourado",
    nome: "Conjunto Van Cleef dourado cravejado, 5 trevos",
    descricao: "Conjunto Van Cleef dourado, com 5 trevos preto e cravejado, colar e pulseira.",
    preco: 67.0,
    imagem: "/images/trevonovop.jpeg",
  },
  /*{
    id: 76,
    categoria: "Conjuntos",
    cor: "Dourado",
    nome: "ESGOTADO!",
    descricao: "Conjunto Van Cleef dourado, com 5 trevos Vinho, colar e pulseira.",
    preco: 67.0,
    imagem: "/images/conjuntovsvinho.jpg",
  },*/
 {
    id: 5,
    categoria: "Conjuntos",
    cor: "Dourado",
    nome: "Conjunto Circulo romano",
    descricao: "Conjunto colar círculo romano e colar laminado",
    preco: 55.0,
    imagem: "/images/conjuntocirculo.jpg",
  },
  {
    id: 3,
    categoria: "Conjuntos",
    cor: "Dourado",
    nome: "Conjunto Van Cleef 1 trevo",
    descricao: "Conjunto Van Cleef dourado, com 1 trevo preto, colar e brinco.",
    preco: 45.0,
    imagem: "/images/trevoatualizadaa.jpeg",
  },
  {
    id: 71,
    categoria: "Conjuntos",
    cor: "Prata",
    nome: "Conjunto Van Cleef 1 trevo",
    descricao: "Conjunto Van Cleef prata, com 1 trevo verde, colar e brinco.",
    preco: 45.0,
    imagem: "/images/trevo1.png",
  },

  {
    id: 69,
    categoria: "Conjuntos",
    cor: "Prata",
    nome: "Conjunto Van Cleef 1 trevo",
    descricao: "Conjunto Van Cleef prata, com 1 trevo em madrepérola, colar e brinco.",
    preco: 45.0,
    imagem: "/images/trevounico.jpeg",
  },
   {
    id: 74,
    categoria: "Conjuntos",
    cor: "Prata",
    nome: "ESGOTADO!",
    descricao: "Conjunto de colar e brincos prata com corações azuis cristal.",
    preco: 35.0,
    imagem: "/images/conjuntocoracaoazul.jpg",
  },
  
  {
    id: 1,
    categoria: "Conjuntos",
    cor: "Prata",
    nome: "ESGOTADO!",
    descricao: "Colar com brinco borboleta preta",
    preco: 27.0,
    imagem: "/images/conjuntoborboletapreta.jpg",
  },
  {
    id: 2,
    categoria: "Conjuntos",
    cor: "Prata",
    nome: "Conjunto Escama",
    descricao: "Colar e brinco escama de peixe",
    preco: 27.0,
    imagem: "/images/conjuntoescama.jpg",
  },
  
  // Brincos
   {
    id: 96,
    categoria: "Brincos",
    cor: "Prata",
    nome: "Ear Cuff Cristais",
    descricao: "Ear cuff prata com cristais brilhantes que contorna toda a orelha.",
    preco: 35.0,
    imagem: "/images/earcuffatl.jpeg",
  },
  {
    id: 14,
    categoria: "Brincos",
    cor: "Prata",
    nome: "Brincos elegantes",
    descricao: "Brinco concha com textura (2º modelo).",
    preco: 30.0,
    imagem: "/images/brincoprata.jpeg",
  },
  {
    id: 113,
    categoria: "Brincos",
    cor: "Prata",
    nome: "Brinco martelado",
    descricao: "Brinco modelo martelado.",
    preco: 30.0,
    imagem: "/images/amassado.jpeg",
  },
   {
    id: 122,
    categoria: "Brincos",
    cor: "Dourado",
    nome: "Brincos elegantes",
    descricao: "Brinco textura ou brinco concha ondulada.",
    preco: 30.0,
    imagem: "/images/brincosdourado.jpeg",
  },
  
   {
    id: 108,
    categoria: "Brincos",
    cor: "Dourado",
    nome: "Brinco gota (consultar tamanho)",
    descricao: "Brinco gota dourado.",
    preco: 30.0,
    imagem: "/images/brincogotad.jpeg",
  },
  {
    id: 123,
    categoria: "Brincos",
    cor: "Dourado",
    nome: "Brinco Contorno",
    descricao: "Brinco elegante contorno",
    preco: 30.0,
    imagem: "/images/contorno.jpeg",
  },
  {
    id: 13,
    categoria: "Brincos",
    cor: "Prata",
    nome: "Brinco Estilo Pandora",
    descricao: "Brinco estilo pandora apenas no azul turquesa",
    preco: 30.0,
    imagem: "/images/brincopandora.jpg",
  },
  {
    id: 16,
    categoria: "Brincos",
    cor: "Dourado",
    nome: "Brinco trevo UNIDADE (consultar tamanho)",
    descricao: "Brinco trevo verde.",
    preco: 30.0,
    imagem: "/images/brincoverdetrevo.jpeg",
  },
  {
    id: 15,
    categoria: "Brincos",
    cor: "Dourado",
    nome: "Brinco trevo UNIDADE (consultar tamanho)",
    descricao: "Brinco trevo preto ou branco.",
    preco: 30.0,
    imagem: "/images/brincotrevoatl.jpeg",
  },
  
   {
    id: 9,
    categoria: "Brincos",
    cor: "Prata",
    nome: "Cartela Brinco Semaninha",
    descricao: "Cartela brinco semaninha, 7 pares, olho grego...",
    preco: 27.0,
    imagem: "/images/cartelabrincoolhog.jpg",
  },
  {
    id: 10,
    categoria: "Brincos",
    cor: "Prata",
    nome: "Cartela Brinco Semaninha",
    descricao: "Cartela brinco semaninha, 7 pares, escama...",
    preco: 27.0,
    imagem: "/images/cartelabrincoescama.jpg",
  },
  {
    id: 11,
    categoria: "Brincos",
    cor: "Prata",
    nome: "Cartela Brinco Semaninha",
    descricao: "Cartela brinco semaninha, 7 pares, triângulo...",
    preco: 27.0,
    imagem: "/images/cartelabrincogeom.jpg",
  },
  
  {
    id: 12,
    categoria: "Brincos",
    cor: "Prata",
    nome: "Cartela Brinco Semaninha",
    descricao: "Cartela brinco semaninha, 7 pares, coração robusto...",
    preco: 27.0,
    imagem: "/images/cartelabrincocora.jpg",
  },
  {
    id: 17,
    categoria: "Brincos",
    cor: "Prata",
    nome: "Brinco Eu Desejo",
    descricao: "Kit de brincos com símbolos especiais: Paz, Magia, Paixão, Tranquilidade, Esperança.",
    preco: 27.0,
    imagem: "/images/brincopareseudesejo.jpg",
  },
  {
    id: 8,
    categoria: "Brincos",
    cor: "Prata",
    nome: "Trio Brinco",
    descricao: "Cartela Trio De Brincos; concha, cauda de sereia, tartaruga.",
    preco: 20.0,
    imagem: "/images/triobrincoestrela.jpg",
  },
  {
    id: 121,
    categoria: "Brincos",
    cor: "Prata",
    nome: "ESGOTADO!",
    descricao: "Trio de brincos prata em cartela IS Girl - cristal cravejado, coração e pérola clássica.",
    preco: 20.0,
    imagem: "/images/triobrincoperola.jpg",
  },
  {
    id: 111,
    categoria: "Brincos",
    cor: "Prata",
    nome: "Trio Brinco Concha",
    descricao: "Trio de brincos prata: estrela cravejada, pérola e concha texturizada.",
    preco: 20.0,
    imagem: "/images/triobrincoconcha.jpg",
  },
  
  // Colares
   {
    id: 29,
    categoria: "Colares",
    cor: "Prata",
    nome: "Colar duplo",
    descricao: "Colar duplo cadeado com textura e chave.",
    preco: 45.0,
    imagem: "/images/colarchaveecadeado.jpg",
  },
  {
    id: 28,
    categoria: "Colares",
    cor: "Dourado",
    nome: "Colar triplo",
    descricao: "Conjunto de colares dourados, colar laminado, colar enrolado e colar de bolinha, saindo apenas R$15,00 cada.",
    preco: 45.0,
    imagem: "/images/triplodoura.jpeg",
  },
  {
    id: 63,
    categoria: "Colares",
    cor: "Dourado",
    nome: "Colar triplo",
    descricao: "Conjunto de colares dourado, colares laminados e de bolinha, saindo apenas R$15,00 cada.",
    preco: 45.0,
    imagem: "/images/colartriplod.jpeg",
  },
  {
    id: 106,
    categoria: "Colares",
    cor: "Prata",
    nome: "Colar triplo",
    descricao: "Conjunto de colares prata, colares laminados e de bolinha, saindo apenas R$15,00 cada .",
    preco: 45.0,
    imagem: "/images/laminadop.png",
  },
  {
    id: 62,
    categoria: "Colares",
    cor: "Prata",
    nome: "Colar Goldstone",
    descricao: "Colar prata com pingente oval de goldstone.",
    preco: 40.0,
    imagem: "/images/colargoldstone.jpg",
  },
  {
    id: 60,
    categoria: "Colares",
    cor: "Prata",
    nome: "Colar Van Cleef 5 trevos",
    descricao: "Van Cleef prata, com 5 trevos marsala e cravejado.",
    preco: 40.0,
    imagem: "/images/trevocrav.jpeg",
  },
  {
    id: 19,
    categoria: "Colares",
    cor: "Dourado",
    nome: "Colar duplo dourado",
    descricao: "Conjunto de colares dourado, colar laminado e veneziano, saindo a apenas R$19,00 cada.",
    preco: 38.0,
    imagem: "/images/colarduplodou.jpeg",
  },
  {
    id: 22,
    categoria: "Colares",
    cor: "Prata",
    nome: "Colar duplo prata",
    descricao: "Conjunto de colares prata, colar laminado e veneziano, saindo a apenas R$19,00 cada.",
    preco: 38.0,
    imagem: "/images/colarduplolam.jpeg",
  },
  {
    id: 65,
    categoria: "Conjuntos",
    cor: "Dourado",
    nome: "ESGOTADO!",
    descricao: "Colar gota dourada, regulável.",
    preco: 35.0,
    imagem: "/images/conjuntogota.jpeg",
  },
  {
    id: 68,
    categoria: "Colares",
    cor: "Prata",
    nome: "Colar duplo bolinhas",
    descricao: "Colar duplo bolinhas, perfeito para mixes.",
    preco: 35.0,
    imagem: "/images/conjuntot.jpeg",
  },
  
  {
    id: 98,
    categoria: "Colares",
    cor: "Dourado",
    nome: "Colar esmeralda",
    descricao: "Colar quadrado com esmeralda.",
    preco: 35.0,
    imagem: "/images/atesmeralda.jpeg",
  },
  {
    id: 110,
    categoria: "Colares",
    cor: "Dourado",
    nome: "ESGOTADO!",
    descricao: "Colar/Corrente cruz, unissex.",
    preco: 35.0,
    imagem: "/images/colarcruz.jpeg",
  },
  {
    id: 24,
    categoria: "Colares",
    cor: "Dourado",
    nome: "Colar trevo gravatinha",
    descricao: "Colar trevo preto vazado, estilo gravatinha.",
    preco: 35.0,
    imagem: "/images/gravt.jpeg",
  },
  {
    id: 115,
    categoria: "Colares",
    cor: "Prata",
    nome: "Colar laminado bolinha",
    descricao: "Colar liso bolinhas, ótimo para mixes. 45cm.",
    preco: 35.0,
    imagem: "/images/colartrevov.jpeg",
  },
   {
    id: 7,
    categoria: "Conjuntos",
    cor: "Prata",
    nome: "Choker riviera círculo",
    descricao: "Choker riviera círculo romano",
    preco: 35.0,
    imagem: "/images/rivierac.png",
  },
  {
    id: 112,
    categoria: "Colares",
    cor: "Prata",
    nome: "Choker riviera trevo",
    descricao: "Choker riviera trevo preto.",
    preco: 35.0,
    imagem: "/images/rivieran.png",
  },
  {
    id: 116,
    categoria: "Colares",
    cor: "Prata",
    nome: "Choker riviera coração",
    descricao: "Choker riviera coração preenchido",
    preco: 35.0,
    imagem: "/images/r.png",
  },
  {
    id: 30,
    categoria: "Colares",
    cor: "Dourado",
    nome: "Colar dourado",
    descricao: "Colar dourado minimalista.",
    preco: 32.0,
    imagem: "/images/minimalista.jpeg",
  },
  {
    id: 31,
    categoria: "Colares",
    cor: "Dourado",
    nome: "Colar círculo cravejado",
    descricao: "Colar círculo cravejado, brilhante.",
    preco: 32.0,
    imagem: "/images/circulocrav.jpeg",
  },
   {
    id: 32,
    categoria: "Colares",
    cor: "Prata",
    nome: "ESGOTADO!",
    descricao: "Colar borboleta em 3D cravejada.",
    preco: 32.0,
    imagem: "/images/colarborboleta.jpg",
  },
    {
    id: 93,
    categoria: "Colares",
    cor: "Prata",
    nome: "Escapulário",
    descricao: "Escapulário borboleta e frase 'Tudo passa'.",
    preco: 30.0,
    imagem: "/images/escap.jpeg",
  },
  {
    id: 6,
    categoria: "Colares",
    cor: "Prata",
    nome: "ESGOTADO!",
    descricao: "Colar cauda de sereia e escama de peixe",
    preco: 27.0,
    imagem: "/images/cauda e escama.jpeg",
  },
  {
    id: 20,
    categoria: "Colares",
    cor: "Prata",
    nome: "Colar concha",
    descricao: "Colar Triplo Fundo Do Mar.",
    preco: 27.0,
    imagem: "/images/colartriplobuzio.jpg",
  },
  {
    id: 21,
    categoria: "Colares",
    cor: "Prata",
    nome: "Colar lua",
    descricao: "Colar Duplo Sol e Meia Lua.",
    preco: 27.0,
    imagem: "/images/colarduplosol.jpg",
  },
  {
    id: 23,
    categoria: "Colares",
    cor: "Prata",
    nome: "Colar corações",
    descricao: "Colar duplo corações vazados.",
    preco: 27.0,
    imagem: "/images/colarcoracoes.jpg",
  },
  {
    id: 61,
    categoria: "Colares",
    cor: "Prata",
    nome: "Colar Duplo Lua",
    descricao: "Colar duplo prata com pingente de lua crescente e pérola.",
    preco: 27.0,
    imagem: "/images/colarduplolua.jpg",
  },
  {
    id: 64,
    categoria: "Colares",
    cor: "Prata",
    nome: "ESGOTADO!",
    descricao: "Colar duplo prata com pingente de estrela vazada e cristal.",
    preco: 27.0,
    imagem: "/images/colarduploestrela.jpg",
  },
  {
    id: 25,
    categoria: "Colares",
    cor: "Prata",
    nome: "Choker cauda",
    descricao: "Choker cauda de sereia lisa.",
    preco: 27.0,
    imagem: "/images/choker cauda de sereia lisa.jpg",
  },
  {
    id: 26,
    categoria: "Colares",
    cor: "Prata",
    nome: "Choker mar",
    descricao: "Choker fundo do mar.",
    preco: 27.0,
    imagem: "/images/cauda de sereia detalhada.jpg",
  },
  {
    id: 27,
    categoria: "Colares",
    cor: "Prata",
    nome: "Choker corações",
    descricao: "Choker corações pequenos polidos.",
    preco: 27.0,
    imagem: "/images/chokercoraçoes.jpg",
  },
  {
    id: 66,
    categoria: "Colares",
    cor: "Prata",
    nome: "ESGOTADO!",
    descricao: "Colar duplo prata com pingente de coração vazado e cristal.",
    preco: 27.0,
    imagem: "/images/colarduplocoracao.jpg",
  },

  // Braceletes
   {
    id: 95,
    categoria: "Braceletes",
    cor: "Dourado",
    nome: "Mix Bracelete (2 braceletes)",
    descricao: "Bracelete brilho R$40,00, Bracelete Cartier R$45,00.",
    preco: 85.0,
    imagem: "/images/mixbracelete.jpg",
  },
  {
    id: 35,
    categoria: "Braceletes",
    cor: "Prata",
    nome: "Bracelete",
    descricao: "Bracelete trevo ou Tiffany&co.",
    preco: 55.0,
    imagem: "/images/braceletetrevo.jpg",
  },
  {
    id: 37,
    categoria: "Braceletes",
    cor: "Prata",
    nome: "Bracelete Versace",
    descricao: "Bracelete Versace.",
    preco: 45.0,
    imagem: "/images/MIXVERSACE.jpg",
  },
   {
    id: 33,
    categoria: "Braceletes",
    cor: "Prata",
    nome: "Bracelete prego",
    descricao: "Bracelete prego cravejado com zircônias.",
    preco: 40.0,
    imagem: "/images/rivieracirculo.jpg",
  },
  {
    id: 34,
    categoria: "Braceletes",
    cor: "Prata",
    nome: "Bracelete",
    descricao: "Bracelete coração preto, ótimo para mixes.",
    preco: 40.0,
    imagem: "/images/braceletepreto.jpg",
  },
  {
    id: 105,
    categoria: "Braceletes",
    cor: "Prata",
    nome: "Mix braceletes (2 braceletes)",
    descricao: "Bracelete coração R$35,00, Bracelete cravejado R$38,00.",
    preco: 73.0,
    imagem: "/images/mixpra.jpeg",
  },
  {
    id: 36,
    categoria: "Braceletes",
    cor: "Prata",
    nome: "ESGOTADO!",
    descricao: "Bracelete fio duplo.",
    preco: 30.0,
    imagem: "/images/braceletefio.jpg",
  },

  // Pulseiras
   {
    id: 100,
    categoria: "Pulseiras",
    cor: "Prata",
    nome: "Mix de pulseiras (3 pulseiras)",
    descricao: "Pulseira raminho R$35,00, Pulseira premium coração R$35,00, pulseira elos R$30,00.",
    preco: 100.0,
    imagem: "/images/mixcoracao.jpeg",
  },
  {
    id: 102,
    categoria: "Pulseiras",
    cor: "Prata",
    nome: "ESGOTADA!",
    descricao: "Pulseira estilo Pandora prata com berloques: borboleta,flamingo, libélula e espaçadores cravejados.",
    preco: 65.0,
    imagem: "/images/pulseiramontada.jpg",
  },
  {
    id: 38,
    categoria: "Pulseiras",
    cor: "Dourado",
    nome: "Mix pulseiras (3 pulseiras)",
    descricao: "Pulseira trevo R$35,00, pulseira baiana R$30,00, pulseira gota R$32,00.",
    preco: 97.0,
    imagem: "/images/braceletecartier.jpeg",
  },
  {
    id: 90,
    categoria: "Pulseiras",
    cor: "Dourado",
    nome: "Pulseira trevo cravejada",
    descricao: "Pulseira com espaçadores e berloque de trevo cravejado.",
    preco: 38.0,
    imagem: "/images/pulseiracrav.jpeg",
  },
  {
    id: 101,
    categoria: "Pulseiras",
    cor: "Dourado",
    nome: "Pulseiras Van Cleef",
    descricao:
      "Pulseiras Van Cleef: verde, preto, ou  branco.",
    preco: 35.00,
    imagem: "/images/pulseirasvc.jpg",
  },
  {
    id: 104,
    categoria: "Pulseiras",
    cor: "Dourado",
    nome: "Pulseira Van Cleef",
    descricao: "Pulseira Van Cleef toda dourada.",
    preco: 35.0,
    imagem: "/images/pulseiravc.jpeg",
  },
  {
    id: 99,
    categoria: "Pulseiras",
    cor: "Dourado",
    nome: "Pulseiras Van Cleef cravejadas",
    descricao: "Pulseiras Van Cleef: preto ou  azul marinho.",
    preco: 35.0,
    imagem: "/images/pulseirast.jpeg",
  },
  {
    id: 91,
    categoria: "Pulseiras",
    cor: "Dourado",
    nome: "Pulseira borboleta 3D",
    descricao: "Pulseira dourada borboleta em 3D.",
    preco: 35.0,
    imagem: "/images/pulborboleta.jpeg",
  },
  {
    id: 120,
    categoria: "Pulseiras",
    cor: "Dourado",
    nome: "Pulseira Van Cleef vazada",
    descricao: "Pulseira Van Cleef vazada.",
    preco: 32.0,
    imagem: "/images/vazadavancleef.jpeg",
  },
  {
    id: 43,
    categoria: "Pulseiras",
    cor: "Prata",
    nome: "Pulseira zircônia cúbica",
    descricao: "Pulseira zircônia cúbica regulável.",
    preco: 32.0,
    imagem: "/images/pulseirazirconia.jpg",
  },
  {
    id: 42,
    categoria: "Pulseiras",
    cor: "Prata",
    nome: "Pulseira Olho Grego",
    descricao: "Pulseira dupla olho grego e estrela com bolinhas.",
    preco: 30.0,
    imagem: "/images/olhogrego.jpg",
  },
   {
    id: 44,
    categoria: "Pulseiras",
    cor: "Prata",
    nome: "Pulseira Riviera",
    descricao: "Pulseira riviera coração.",
    preco: 30.0,
    imagem: "/images/riviera.jpg",
  },
  {
    id: 41,
    categoria: "Pulseiras",
    cor: "Prata",
    nome: "Pulseira Lua",
    descricao: "Pulseira lua com pedrinhas.",
    preco: 25.0,
    imagem: "/images/pulseiralua.jpg",
  },
  {
    id: 103,
    categoria: "Pulseiras",
    cor: "Prata",
    nome: "ESGOTADA!",
    descricao: "Pulseira prata delicada com pingente coração cristal e corrente fina.",
    preco: 25.0,
    imagem: "/images/pulseiracoracaoo.jpg",
  },
  {
    id: 39,
    categoria: "Pulseiras",
    cor: "Prata",
    nome: "Pulseira Tifanny",
    descricao: "Pulseira Tiffany&Co azul turquesa.",
    preco: 23.0,
    imagem: "/images/tif.png",
  },
  
  /*{
    id: 104,
    categoria: "Pulseiras",
    cor: "Prata",
    nome: "Mix Tiffany Premium",
    descricao: "Mix de pulseiras prata: corrente trançada e pulseira com coração verde Tiffany.",
    preco: 45.0,
    imagem: "/images/pulseiratiff.jpg",
  },
  {
    id: 105,
    categoria: "Pulseiras",
    cor: "Prata",
    nome: "Pulseira Lua Crescente",
    descricao: "Pulseira prata com pingente lua crescente branca e cristais rosa, místico e delicado.",
    preco: 30.0,
    imagem: "/images/pulseiralua.jpg",
  },
  {
    id: 107,
    categoria: "Pulseiras",
    cor: "Prata",
    nome: "Bracelete Prego Premium",
    descricao: "Bracelete prata tipo prego com cristais cravejados e corrente fina, design moderno.",
    preco: 48.0,
    imagem: "/images/prego2.jpg",
  },*/
  /*{
    id: 109,
    categoria: "Pulseiras",
    cor: "Prata",
    nome: "Kit Riviera Círculo",
    descricao: "Kit de pulseiras prata com riviera de cristais, círculo cravejado e corrente lisa minimalista.",
    preco: 55.0,
    imagem: "/images/rivieracirculo.jpg",
  },
  {
    id: 113,
    categoria: "Pulseiras",
    cor: "Prata",
    nome: "Mix Tiffany Rosa",
    descricao: "Mix de pulseiras prata: corrente trançada, esferas e coração rosa Tiffany delicado.",
    preco: 48.0,
    imagem: "/images/pulseiratiffany.jpg",
  },*/
  
 

  // Anéis
  {
    id: 45,
    categoria: "Anéis",
    cor: "Dourado",
    nome: "Anel dourado",
    descricao: "Anel duplo abaulado (1º modelo) ou anel achatado liso (3º modelo).",
    preco: 25.0,
    imagem: "/images/aneisdourado.jpeg",
  },
  {
    id: 50,
    categoria: "Anéis",
    cor: "Dourado",
    nome: "Anéis",
    descricao: "Anel triplo pontilhos (1º modelo) ou anel duplo fios (2º modelo).",
    preco: 25.0,
    imagem: "/images/modelo1.jpeg",
  },
  {
    id: 118,
    categoria: "Pulseiras",
    cor: "Dourado",
    nome: "Anéis",
    descricao: "Anel duplo conexão (1º modelo) ou anel prisma (3º modelo).",
    preco: 25.0,
    imagem: "/images/modelo3.jpeg",
  },
  {
    id: 40,
    categoria: "Anéis",
    cor: "Dourado",
    nome: "Anel",
    descricao: "Anel duplo pontilhos (1º modelo).",
    preco: 25.0, 
    imagem: "/images/modelo2.jpeg",
  },
   {
    id: 117,
    categoria: "Anéis",
    cor: "Dourado",
    nome: "Anéis",
    descricao: "Anel flores (1º modelo), anel elos entrelaçados (2º modelo), anel triplo trançado lux (3º modelo).",
    preco: 25.0,
    imagem: "/images/aneis4.jpeg",
  },
  {
    id: 92,
    categoria: "Anéis",
    cor: "Prata",
    nome: "Anéis",
    descricao: "Anel zircônia cúbica ou anel retângulo liso.",
    preco: 25.0,
    imagem: "/images/diamond.jpeg",
  },
  /*{
    id: 59,
    categoria: "Anéis",
    cor: "Prata",
    nome: "Mix De Anéis",
    descricao: "Anel ondulado ou estrela.",
    preco: 18.0,
    imagem: "/images/anelondadomar.jpg",
  },*/
  {
    id: 46,
    categoria: "Anéis",
    cor: "Prata",
    nome: "Anéis",
    descricao: "Modelos de anéis. Retângulo, círculo, ondulado, quadrado, folhas reguláveis, olho grego, lua e estrela regulável, lua e coração regulável, corações reguláveis, triângulos reguláveis, triângulo, ou estrela.",
    preco: 15.0,
    imagem: "/images/atuan.jpeg",
  },
  {
    id: 47,
    categoria: "Anéis",
    cor: "Prata",
    nome: "Anéis",
    descricao: "Modelos de anéis. Cauda de sereia regulável, orelha gatinho, infinito regulável, bolinha, oval ou cruz.",
    preco: 15.0,
    imagem: "/images/aneis15,2.jpeg",
  },
  {
    id: 48,
    categoria: "Anéis",
    cor: "Prata",
    nome: "Anéis",
    descricao: "Anel olho grego, anel onda ou anel oval.",
    preco: 15.0,
    imagem: "/images/anelolhogrego.jpg",
  },
  /*{
    id: 49,
    categoria: "Anéis",
    cor: "Prata",
    nome: "Mix De Anéis",
    descricao: "Anel cruz, anel bolinha ou anel círculo.",
    preco: 15.0,
    imagem: "/images/cruz.jpeg",
  },*/
  
  {
    id: 51,
    categoria: "Anéis",
    cor: "Prata",
    nome: "Anel",
    descricao: "Anel corações enroscados.",
    preco: 15.0,
    imagem: "/images/anelenroscado.jpg",
  },
  /*{
    id: 52,
    categoria: "Anéis",
    cor: "Prata",
    nome: "Mix De Anéis",
    descricao: "Anel ondulado ou anel estrela única.",
    preco: 18.0,
    imagem: "/images/anelonduladoo.jpg",
  },*/
  /*{
    id: 53,
    categoria: "Anéis",
    cor: "Prata",
    nome: "ESGOTADOS!",
    descricao: "Anel duplo lacinho e zircônia.",
    preco: 18.0,
    imagem: "/images/anellaco.jpg",
  },*/
  {
    id: 54,
    categoria: "Anéis",
    cor: "Prata",
    nome: "Anéis",
    descricao: "Anel palito e bolinha ou anel gota dupla.",
    preco: 18.0,
    imagem: "/images/anelgota.jpg",
  },
  {
    id: 55,
    categoria: "Anéis",
    cor: "Prata",
    nome: "Anéis",
    descricao: "Anel duplo ou anel infinito.",
    preco: 15.0,
    imagem: "/images/mixaneisshein.jpg",
  },
  /*{
    id: 56,
    categoria: "Anéis",
    cor: "Prata",
    nome: "Anel",
    descricao: "Anel losango único.",
    preco: 18.0,
    imagem: "/images/anellosango.jpg",
  },*/
  {
    id: 57,
    categoria: "Anéis",
    cor: "Prata",
    nome: "Anel",
    descricao: "Anel formato em 'V'.",
    preco: 15.0,
    imagem: "/images/anelv.jpg",
  },
  {
    id: 58,
    categoria: "Anéis",
    cor: "Prata",
    nome: "Anel",
    descricao: "Anel folha dupla.",
    preco: 15.0,
    imagem: "/images/anelfolhaduplo.jpg",
  },
  /*{
    id: 114,
    categoria: "Conjuntos",
    cor: "Dourado",
    nome: "Conjunto Van Cleef Atualizado",
    descricao: "Conjunto sofisticado de colar e brincos dourados com trevo preto estilo Van Cleef premium.",
    preco: 58.0,
    imagem: "/images/trevoatualizadaa.jpeg",
  },*/
]

const categorias = ["Todos", "Anéis", "Brincos", "Colares", "Pulseiras", "Braceletes", "Tornozeleiras", "Conjuntos"]
const cores = ["Todas", "Prata", "Dourado"]

interface CartItem {
  id: number
  nome: string
  preco: number
  quantidade: number
  imagem: string
}

export default function IsgirlAcessorios() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedColor, setSelectedColor] = useState("Todas")
  const [selectedProduct, setSelectedProduct] = useState<(typeof produtos)[0] | null>(null)
  const [cart, setCart] = useState<CartItem[]>([])
  const [favorites, setFavorites] = useState<number[]>([])
  const [showCart, setShowCart] = useState(false)
  const [showFavorites, setShowFavorites] = useState(false)
  const [animatingFavorite, setAnimatingFavorite] = useState<number | null>(null)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedFavorites = localStorage.getItem("favorites")
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  useEffect(() => {
    setMounted(true)
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const toggleFavorite = (productId: number) => {
    setAnimatingFavorite(productId)
    setTimeout(() => setAnimatingFavorite(null), 600)

    setFavorites((prev) => {
      const newFavorites = prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
      localStorage.setItem("favorites", JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  const filteredProducts = produtos.filter((produto) => {
    const matchesSearch =
      produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      produto.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
      produto.descricao.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === "Todos" || produto.categoria === selectedCategory
    const matchesColor = selectedColor === "Todas" || produto.cor === selectedColor
    const matchesFavorites = !showFavorites || favorites.includes(produto.id)

    return matchesSearch && matchesCategory && matchesColor && matchesFavorites
  })

  const addToCart = (produto: (typeof produtos)[0], quantidade = 1) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === produto.id)
      if (existingItem) {
        return prev.map((item) =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade + quantidade } : item,
        )
      }
      return [
        ...prev,
        {
          id: produto.id,
          nome: produto.nome,
          preco: produto.preco,
          quantidade,
          imagem: produto.imagem,
        },
      ]
    })
  }

  const updateCartQuantity = (id: number, quantidade: number) => {
    if (quantidade <= 0) {
      setCart((prev) => prev.filter((item) => item.id !== id))
    } else {
      setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantidade } : item)))
    }
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.preco * item.quantidade, 0)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantidade, 0)
  }

  const handleCheckout = () => {
    const orderDetails = cart
      .map((item) => {
        const produto = produtos.find((p) => p.id === item.id)
        return `${item.quantidade}x ${item.nome}\n   Categoria: ${produto?.categoria}\n   Cor: ${produto?.cor}\n   Preço unitário: R$ ${item.preco.toFixed(2)}\n   Subtotal: R$ ${(item.preco * item.quantidade).toFixed(2)}`
      })
      .join("\n\n")

    const total = getTotalPrice().toFixed(2)
    const message = `🛍️ *PEDIDO - ISGIRL ACESSÓRIOS*\n\n📦 *DETALHES DO PEDIDO:*\n${orderDetails}\n\n💰 *VALOR TOTAL: R$ ${total}*\n\n💳 *CHAVE PIX PARA PAGAMENTO:*\n*CNPJ: 54.585.266/0001-72*\n\n📋 *Para facilitar, copie a chave PIX acima*\n\n✨ Obrigada por escolher a isgirl acessórios!\n🚚 Após o pagamento, enviaremos os dados para entrega.`

    const whatsappUrl = `https://api.whatsapp.com/send?phone=5571997176177&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  setSelectedCategory("Todos")
                  setSelectedColor("Todas")
                  setSearchTerm("")
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <img
                  src="/images/logo.png"
                  alt="IS Girl Acessórios"
                  className="h-16 w-16 object-contain dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] dark:filter dark:brightness-110 transition-all duration-300"
                />
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowFavorites(!showFavorites)}
                className={`relative ${showFavorites ? "bg-rose-100 dark:bg-rose-900" : ""}`}
              >
                <Heart className={`h-4 w-4 ${showFavorites ? "fill-rose-400 text-rose-400" : ""}`} />
                {favorites.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-rose-400 text-white">
                    {favorites.length}
                  </Badge>
                )}
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  const html = document.documentElement
                  if (html.classList.contains("dark")) {
                    html.classList.remove("dark")
                    setTheme("light")
                  } else {
                    html.classList.add("dark")
                    setTheme("dark")
                  }
                }}
                className="relative"
              >
                {mounted && theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <Button variant="outline" size="icon" onClick={() => setShowCart(true)} className="relative">
                <ShoppingCart className="h-4 w-4" />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-rose-400">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif mb-4 text-balance">Acessórios em aço inoxidável</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Preços acessíveis e peças para todas ocasiões
          </p>
        </div>

        <div className="mb-8 space-y-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categorias.map((categoria) => (
              <Button
                key={categoria}
                variant={selectedCategory === categoria ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory(categoria)}
                className={`rounded-full ${selectedCategory === categoria ? "bg-rose-400 hover:bg-rose-500 text-white" : "hover:bg-rose-50 dark:hover:bg-rose-950"}`}
              >
                {categoria}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {cores.map((cor) => (
              <Button
                key={cor}
                variant={selectedColor === cor ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedColor(cor)}
                className={`rounded-full ${selectedColor === cor ? "bg-rose-400 hover:bg-rose-500 text-white" : "hover:bg-rose-50 dark:hover:bg-rose-950"}`}
              >
                {cor}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((produto) => (
            <Card
              key={produto.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-sm"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                  <Image
                    src={produto.imagem || "/placeholder.svg"}
                    alt={produto.nome}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedProduct(produto)}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(produto.id)
                    }}
                  >
                    <Heart
                      className={`h-4 w-4 transition-all duration-300 ${
                        favorites.includes(produto.id) ? "fill-rose-400 text-rose-400" : "text-gray-600"
                      } ${animatingFavorite === produto.id ? "animate-bounce scale-125" : ""}`}
                    />
                  </Button>
                </div>
                <div className="p-4">
                  <div className="flex gap-2 mb-2">
                    <Badge
                      variant="secondary"
                      className="text-xs bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300"
                    >
                      {produto.categoria}
                    </Badge>
                    <Badge variant="outline" className="text-xs border-rose-200 text-rose-600">
                      {produto.cor}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2 text-balance">{produto.nome}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{produto.descricao}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-rose-400">R$ {produto.preco.toFixed(2)}</span>
                      <span className="text-xs text-muted-foreground">Unidade</span>
                    </div>
                    <Button size="sm" onClick={() => addToCart(produto)} className="bg-rose-400 hover:bg-rose-500">
                      Adicionar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {showFavorites
                ? "Nenhum produto favoritado ainda."
                : "Nenhum produto encontrado com os filtros selecionados."}
            </p>
          </div>
        )}
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 z-10"
                onClick={() => setSelectedProduct(null)}
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="grid md:grid-cols-2 gap-6 p-6">
                <div className="relative aspect-square">
                  <Image
                    src={selectedProduct.imagem || "/placeholder.svg"}
                    alt={selectedProduct.nome}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Badge variant="secondary">{selectedProduct.categoria}</Badge>
                    <Badge variant="outline">{selectedProduct.cor}</Badge>
                  </div>
                  <h2 className="text-2xl font-bold font-serif">{selectedProduct.nome}</h2>
                  <p className="text-muted-foreground">{selectedProduct.descricao}</p>
                  <div className="flex flex-col">
                    <div className="text-2xl font-bold text-rose-400">R$ {selectedProduct.preco.toFixed(2)}</div>
                    <span className="text-sm text-muted-foreground">Unidade</span>
                  </div>
                  <div className="space-y-3">
                    <Button
                      onClick={() => {
                        addToCart(selectedProduct)
                        setSelectedProduct(null)
                      }}
                      className="w-full bg-rose-400 hover:bg-rose-500"
                    >
                      Adicionar ao Carrinho
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Carrinho</h2>
                <Button variant="ghost" size="icon" onClick={() => setShowCart(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {cart.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">Seu carrinho está vazio</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 border-b pb-3">
                      <div className="relative w-16 h-16">
                        <Image
                          src={item.imagem || "/placeholder.svg"}
                          alt={item.nome}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-sm">{item.nome}</h3>
                        <p className="text-rose-400 font-bold">R$ {item.preco.toFixed(2)}</p>
                        <span className="text-xs text-muted-foreground">Unidade</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => updateCartQuantity(item.id, item.quantidade - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantidade}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => updateCartQuantity(item.id, item.quantidade + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold">Total:</span>
                      <span className="font-bold text-lg text-rose-400">R$ {getTotalPrice().toFixed(2)}</span>
                    </div>
                    <Button onClick={handleCheckout} className="w-full bg-rose-400 hover:bg-rose-500">
                      Finalizar Pedido via WhatsApp
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
