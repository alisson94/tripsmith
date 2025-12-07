import TripForm from "@/components/TripForm";

export default async function Home() {


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
