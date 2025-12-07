'use client'

import {useState, FormEvent} from 'react'
import TripView from './TripView';


export default function TripForm() {
    const [city, setCity] = useState('');
    const [days, setDays] = useState('');
    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function handleSubmit(e:FormEvent) {
        e.preventDefault()
        setLoading(true);
        setError('');

        if(!days || !city){
            setError("Cidade ou quantidade de dias inválido")
            setLoading(false)
            return
        }

        try{
            const response = await fetch('/api/trip', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                city, 
                days: Number(days) 
                })
            })

            const data = await response.json()

            if(!response.ok){
                throw new Error(data.error || "Erro ao gerar roteiro")
            }

            setTrip(data)
        }catch(err: unknown){
            console.log(err)
            setError("Erro")
        }finally{
            setLoading(false)
        }
    }


    return(
        <>
        <div className="bg-white rounded-4xl shadow-xl text-2xl text-gray-700 mb-8">
            <form onSubmit={handleSubmit} className='flex'>    
                <input 
                    type="text"
                    placeholder='Cidade...'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className='flex-1 min-w-0 focus:outline-none p-4 focus:bg-gray-200 hover:bg-gray-100 rounded-4xl'
                    />
                <input 
                    type="text"
                    placeholder='Dias...'
                    value={days}
                    onChange={(e)=> setDays(e.target.value)}
                    className='flex-1 min-w-0 focus:outline-none p-4 rounded-4xl focus:bg-gray-200 hover:bg-gray-100'
                    />
                <button 
                    disabled={loading}
                    className='rounded-4xl bg-blue-500 p-4 text-white font-semibold hover:bg-blue-600 hover:cursor-pointer active:bg-blue-400'>
                    {loading ? "Gerando..." : "Enviar"}
                </button>
            </form>
        </div>

        {error && (
            <div className='bg-red-200 text-red-600 px-4 py-2 rounded-2xl mb-4'>
                <strong>Erro: </strong> {error}
            </div>
        )}

        {trip && <TripView trip={trip}></TripView>}
        </>
    )

}