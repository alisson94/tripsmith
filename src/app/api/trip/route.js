import { NextResponse } from "next/server"; 
import {generateScript} from "@/services/geminiService"

export async function POST(req){
    try{
        const body = await req.json();
        const {city, days} = body;

        if(!city || !days){
            return NextResponse.json(
                {error: "Cidade e dias são obrigatorios"},
                {status: 400}
            );
        }

        const trip = await generateScript(city, days)

        return NextResponse.json(trip)
    }catch{
        return NextResponse.json(
            { error: "Erro interno do servidor " }, 
            { status: 500 }
        )
    }
}