import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream flex flex-col p-6 text-coffee">
      
      {/* --- 1. CABEÇALHO (Logo + Navegação Rápida) --- */}
      <header className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
        
        {/* Identidade Visual (Logo) */}
          <div className="relative w-40 h-16 md:w-48 md:h-20"> 
            <Image
            src="/logo-cleangirl.png" 
            alt="CG Café & Co."
            fill 
            className="object-contain object-center md:object-start"
            priority 
          />
          </div>

      </header>
    </main>
  );
}