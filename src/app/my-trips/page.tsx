import { getAllTrips } from "@/services/tripService"; 
import TripCard from "@/components/TripCard";

export default async function Home(){
    const trips = await getAllTrips()

    return(
        <main className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8">Roteiros salvos</h1>
                </div>

                {trips.map((trip, idx) => (
                    <TripCard trip={trip} key={idx}></TripCard>
                ))}

            </div>
        </main>
    )
}