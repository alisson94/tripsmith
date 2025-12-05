import dynamic from "next/dynamic"

interface Hotel {
    nome: string
    descricao: string
    faixa_preco: string
    endereco_bairro: string
}

interface Atividade {
    nome: string
    horario: string
    descricao: string
    categoria: string
    preco: string
}

interface Dia {
    dia: number
    resumo: string
    atividades: Atividade[]
}

interface TripData{
    titulo_viagem: string
    cidade_geo: {lat: number, lng: number}
    recomendacoes_hoteis: Hotel[]
    dias: Dia[]
}

interface TripViewProps {
    trip: TripData
}

export default function TripView({ trip }: TripViewProps){

    const hotels = trip.recomendacoes_hoteis;
    const days = trip.dias

    return(
        <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{trip.titulo_viagem}</h2>

            <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Hotéis Recomendados</h3>

                <div className="grid gap-4 md:grid-cols-2">
                    {hotels.map((hotel, idx) => (
                        <div key={idx} className="border rounded-lg p-4">
                            <h4 className="font-semibold">{hotel.nome}</h4>
                            <p className="text-sm text-gray-700">{hotel.descricao}</p>
                            <div className="flex justify-between mt-2">
                                <span className="text-xs bg-blue-100 px-2 py-1 rounded ">
                                    {hotel.endereco_bairro}
                                </span>
                                <span className="text-sm font-medium text-green-600">
                                    {hotel.faixa_preco}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Roteiro</h3>

                {days.map((day) => (
                    <div key={day.dia} className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="text-lg font-bold text-gray-800">
                            Dia {day.dia}
                        </h4>
                        <p className="text-gray-600 mb-4">{day.resumo}</p>

                        <div className="space-y-3">
                            {day.atividades.map((a, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                                    <div className="flex justify-between items-start mb-2">
                                        <h5 className="font-semibold">{a.nome}</h5>
                                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{a.horario}</span>
                                    </div>
                                    <p className="text-gray-600 mb-2">{a.descricao}</p>
                                    <div className="flex gap-2">
                                        <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">
                                            {a.categoria}
                                        </span>
                                        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                                            {a.preco}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}


            </div>



        </div>
        
    )
}