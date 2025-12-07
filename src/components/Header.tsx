"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header(){
    const pathName = usePathname()

    return(
        <header className="sticky top-0 z-50 bg-white shadow-xl">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-blue-500">TripSmith</Link>
                <div className="flex gap-6">
                    <Link href="/"
                        className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                            pathName === '/' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                        Novo Roteiro
                    </Link>

                    <Link href="/my-trips"
                        className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                            pathName === '/my-trips' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                        Meus Roteiros
                    </Link>
                </div>
            </nav>
        </header>
    )
}