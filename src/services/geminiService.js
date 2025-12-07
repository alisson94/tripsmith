import { GoogleGenerativeAI } from "@google/generative-ai";
import dbConnect from "@/config/db";
import tripModel from "@/models/TripModel";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    generationConfig: {
        responseMimeType: "application/json",
    } 
})

export async function generateScript(city, days){
    console.log('Generating script...');

    const systemPrompt = `
        Você é um guia de viagens. Crie um roteiro para a CIDADE e DIAS informados.
        Regras:
        - Responda APENAS JSON válido.
        - Idioma: Português (PT-BR).
        - Categorias permitidas: ["alimentacao", "cultura", "lazer", "natureza", "compras", "historico"].
        - Preço: $, $$ ou $$$.
        
        Estrutura JSON desejada:
        {
            "titulo_viagem": "String",
            "cidade_geo": { "lat": Number, "lng": Number },
            "recomendacoes_hoteis": [
            {
                "nome": "Nome do Hotel",
                "descricao": "Por que ficar aqui? (Ex: Ótima piscina, perto do metrô)",
                "faixa_preco": "$$ ou $$$",
                "endereco_bairro": "Nome do Bairro"
            }
            ],
            "dias": [
            {
                "dia": 1,
                "resumo": "String",
                "atividades": [
                { "nome": "String", "horario": "String", "descricao": "String", "categoria": "String", "preco": "String" }
                ]
            }
            ]
        }
    `;

    const userPrompt = `Crie um roteiro para a cidade de ${city} com duração de ${days} dias.`;

    try{
        const result = await model.generateContent([systemPrompt, userPrompt]);
        const response = await result.response;

        const scriptJSON = JSON.parse(response.text());

        await dbConnect();

        await tripModel.create({
            city,
            days,
            ...scriptJSON
        })

        return scriptJSON;

    }catch(error){
        console.error("Error generating script:", error);
        return null;
    }
} 



// (async () => {const key = process.env.GEMINI_API_KEY;
// const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${key}`;

// const response = await fetch(url);
// const data = await response.json();

// console.log("\n📋 MODELOS DISPONÍVEIS PARA SUA CHAVE:");
// if (data.models) {
//     data.models.forEach(m => {
//         // Mostra só os que servem para gerar texto (generateContent)
//         if (m.supportedGenerationMethods.includes("generateContent")) {
//             console.log(`- ${m.name.replace("models/", "")}`);
//         }
//     });
// } else {
//     console.log("Erro ao listar:", data);
// }})()