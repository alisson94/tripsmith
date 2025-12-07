export interface Hotel {
    nome: string
    descricao: string
    faixa_preco: string
    endereco_bairro: string
}

export interface Atividade {
    nome: string
    horario: string
    descricao: string
    categoria: string
    preco: string
}

export interface Dia {
    dia: number
    resumo: string
    atividades: Atividade[]
}

export interface TripData{
    titulo_viagem: string
    cidade_geo: {lat: number, lng: number}
    recomendacoes_hoteis: Hotel[]
    dias: Dia[]
    created_at: string
    city: string
    days: number
}

export interface TripViewProps {
    trip: TripData
}