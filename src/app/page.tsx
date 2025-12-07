import { generateScript } from "@/services/geminiService";
import TripView from "@/components/TripView";
import TripForm from "@/components/TripForm";

export default async function Home() {

  // const dados = await generateScript("Sao Paulo", 3);
  // console.log(dados);

  const trip = {
    "titulo_viagem": "Explorando São Paulo em 3 Dias: Cultura, Gastronomia e Lazer",
    "cidade_geo": {
      "lat": -23.55052,
      "lng": -46.633309
    },
    "recomendacoes_hoteis": [
      {
        "nome": "Hotel Unique",
        "descricao": "Arquitetura icônica e design sofisticado, com piscina na cobertura e vistas deslumbrantes. Localizado perto do Parque Ibirapuera.",
        "faixa_preco": "$$$",
        "endereco_bairro": "Jardins"
      },
      {
        "nome": "Renaissance São Paulo Hotel",
        "descricao": "Luxo e conforto em uma das melhores localizações, próximo à Avenida Paulista e aos Jardins. Excelente serviço e restaurantes.",
        "faixa_preco": "$$$",
        "endereco_bairro": "Jardins"
      },
      {
        "nome": "Ibis Budget São Paulo Consolação",
        "descricao": "Opção econômica com boa localização, perto da Rua Augusta e do metrô, ideal para quem busca praticidade sem gastar muito.",
        "faixa_preco": "$",
        "endereco_bairro": "Consolação"
      }
    ],
    "dias": [
      {
        "dia": 1,
        "resumo": "Um mergulho na história e cultura do centro de São Paulo, com um toque da vibrante gastronomia local.",
        "atividades": [
          {
            "nome": "Catedral Metropolitana de São Paulo (Catedral da Sé)",
            "horario": "09:00 - 10:00",
            "descricao": "Visite um dos cartões-postais da cidade, uma imponente obra gótica no coração do centro histórico.",
            "categoria": "historico",
            "preco": "$"
          },
          {
            "nome": "Pátio do Colégio",
            "horario": "10:30 - 11:30",
            "descricao": "Local de fundação da cidade de São Paulo, hoje um complexo cultural com museu e igreja.",
            "categoria": "historico",
            "preco": "$"
          },
          {
            "nome": "Mercado Municipal de São Paulo (Mercadão)",
            "horario": "12:00 - 14:00",
            "descricao": "Almoce no famoso Mercadão, experimentando o sanduíche de mortadela ou o pastel de bacalhau, e admire a arquitetura e os coloridos produtos.",
            "categoria": "alimentacao",
            "preco": "$$"
          },
          {
            "nome": "Pinacoteca do Estado de São Paulo",
            "horario": "14:30 - 16:30",
            "descricao": "Uma das mais importantes instituições de arte do Brasil, com um acervo focado na arte brasileira do século XIX e XX.",
            "categoria": "cultura",
            "preco": "$$"
          },
          {
            "nome": "Theatro Municipal de São Paulo",
            "horario": "19:00 - 22:00",
            "descricao": "Assista a um espetáculo de ópera, balé ou concerto, ou simplesmente admire a arquitetura neoclássica do teatro por fora.",
            "categoria": "cultura",
            "preco": "$$$"
          }
        ]
      },
      {
        "dia": 2,
        "resumo": "Dia dedicado à arte moderna, relaxamento na natureza e à efervescência cultural dos bairros boêmios.",
        "atividades": [
          {
            "nome": "Museu de Arte de São Paulo (MASP)",
            "horario": "10:00 - 12:30",
            "descricao": "Explore um dos museus mais emblemáticos do Brasil, conhecido por seu acervo e arquitetura modernista.",
            "categoria": "cultura",
            "preco": "$$"
          },
          {
            "nome": "Almoço nos Jardins",
            "horario": "13:00 - 14:30",
            "descricao": "Desfrute da culinária sofisticada em um dos muitos restaurantes charmosos do bairro dos Jardins.",
            "categoria": "alimentacao",
            "preco": "$$$"
          },
          {
            "nome": "Parque Ibirapuera",
            "horario": "15:00 - 17:30",
            "descricao": "Relaxe, caminhe ou alugue uma bicicleta no parque mais famoso da cidade, que abriga museus e pavilhões projetados por Oscar Niemeyer.",
            "categoria": "natureza",
            "preco": "$"
          },
          {
            "nome": "Beco do Batman (Vila Madalena)",
            "horario": "18:00 - 19:00",
            "descricao": "Admire a galeria a céu aberto de grafites e arte urbana, um dos pontos mais coloridos e fotogênicos da cidade.",
            "categoria": "cultura",
            "preco": "$"
          },
          {
            "nome": "Jantar e vida noturna na Vila Madalena",
            "horario": "19:30 - 23:00",
            "descricao": "Aproveite a variedade de bares e restaurantes com música ao vivo e gastronomia diversificada do bairro boêmio de São Paulo.",
            "categoria": "lazer",
            "preco": "$$"
          }
        ]
      },
      {
        "dia": 3,
        "resumo": "Um dia para compras, vistas panorâmicas e um último gostinho da vida paulistana antes da partida.",
        "atividades": [
          {
            "nome": "Avenida Paulista",
            "horario": "09:30 - 12:00",
            "descricao": "Caminhe pela icônica Avenida Paulista, admire os arranha-céus, a arquitetura e visite o Centro Cultural FIESP ou o Itaú Cultural.",
            "categoria": "lazer",
            "preco": "$"
          },
          {
            "nome": "Almoço na região da Paulista/Rua Augusta",
            "horario": "12:30 - 14:00",
            "descricao": "Escolha entre as diversas opções gastronômicas da região, que vão de restaurantes sofisticados a lanchonetes modernas.",
            "categoria": "alimentacao",
            "preco": "$$"
          },
          {
            "nome": "Compras na Rua Oscar Freire ou Galeria do Rock",
            "horario": "14:30 - 17:00",
            "descricao": "Para compras de luxo e marcas internacionais, visite a Rua Oscar Freire. Para cultura underground e música, explore a Galeria do Rock no centro.",
            "categoria": "compras",
            "preco": "$$$"
          },
          {
            "nome": "Terraço Itália (Mirante)",
            "horario": "17:30 - 18:30",
            "descricao": "Suba ao Terraço Itália para apreciar uma vista panorâmica deslumbrante da cidade de São Paulo ao pôr do sol.",
            "categoria": "lazer",
            "preco": "$$$"
          },
          {
            "nome": "Jantar de Despedida em Pinheiros ou Itaim Bibi",
            "horario": "19:30 - 22:00",
            "descricao": "Finalize sua viagem com um jantar especial em um dos bairros mais badalados e com excelentes opções de restaurantes.",
            "categoria": "alimentacao",
            "preco": "$$$"
          }
        ]
      }
    ]
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Faça seu roteiro de viagem</h1>

        </div>
        <TripForm></TripForm>

      </div>
    </main>
  );
}
