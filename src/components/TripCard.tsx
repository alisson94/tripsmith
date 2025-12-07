'use client'
import { useState } from "react"
import TripView from "./TripView"
import { TripViewProps } from "@/types/trip"

export default function TripCard({trip}: TripViewProps){
    const [isExpanded, setIsExpanded] = useState(false)


    return(
        <>
        <div className="bg-white rounded-2xl shadow-lg mb-4 overflow-hidden">
            <button
                onClick={()=> setIsExpanded(!isExpanded)}
                className="w-full p-6 flex justify-between items-center hover:bg-gray-300 transition-colors">
                <div className="text-left">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {trip.titulo_viagem}
                    </h2>
                    <p className="text-gray-700 mt-1">
                        📍 {trip.city} • ⏱️ {trip.days} dias
                    </p>
                    <p className="text-sm text-gray-700 mt-2">
                        Criado em: {new Date(trip.created_at).toLocaleDateString('pt-BR')}
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">
                        {isExpanded ? 'Fechar' : 'Ver detalhes'}
                    </span>
                    <svg 
                        className={`w-6 h-6 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>
        </div>

        {isExpanded && (
            <div className=" pt-0 animate-fadeIn">
                <TripView trip={trip}></TripView>
            </div>
        )}
        </>
    )



}