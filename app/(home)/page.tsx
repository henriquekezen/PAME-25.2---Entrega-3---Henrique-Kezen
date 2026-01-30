import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream flex flex-col p-6 text-coffee">
      
      {/* --- 1. CABEÇALHO (Logo + Navegação Rápida) --- */}
      <header className="flex flex-col md:flex-row items-center gap-6 mb-10">
        
        {/* Identidade Visual (Logo) */}
          <div className="relative w-40 h-16 md:w-52 md:h-20 ml-14"> 
            <Image
            src="/logo-cleangirl.png" 
            alt="CG Café & Co."
            fill 
            className="object-contain object-center md:object-start"
            priority 
          />
          </div>

        {/* Botões de Navegação (Ao lado da Logo) */}
        <nav className="flex gap-6">
          <Link
            href="/comidas"
            className="px-11 py-2 rounded-full border border-coffee/20 text-coffee font-medium hover:bg-rose hover:text-white hover:border-transparent transition-all duration-300"
          >
            Comidas
          </Link>
          <Link
            href="/bebidas"
            className="px-11 py-2 rounded-full border border-coffee/20 text-coffee font-medium hover:bg-rose hover:text-white hover:border-transparent transition-all duration-300"
          >
            Bebidas
          </Link>
        </nav>

      </header>
    </main>
  );
}