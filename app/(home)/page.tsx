import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream flex flex-col p-6 text-coffee">
      
      {/* --- 1. CABEÇALHO (Logo + Navegação Rápida) --- */}
      <header className="flex flex-col md:flex-row items-center gap-6 mb-10">
        
        {/* Logo */}
          <div className="relative w-40 h-16 md:w-52 md:h-20 ml-14"> 
            <Image
            src="/logo-cleangirl.png" 
            alt="CG Café & Co."
            fill 
            className="object-contain object-center md:object-start"
            priority 
          />
          </div>

        {/* Botões de Navegação, que levam para as seções de Comidas e Bebidas */}
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

      {/* --- 2.CONTEÚDO PRINCIPAL(Item do dia + Descrição) --- */}
      <main className="flex-1 flex flex-col gap-6 max-w-4xl  mx-auto w-full">


        {/* Item do dia */}
        <section className="relative w-full bg-white rounded-3xl p-6 shadow-sm border border-sand/30 overflow-hidden group">
            <div className="absolute top-0 right-0 bg-rose text-white text-xs font-bold px-4 py-2 rounded-bl-xl z-10">
                ITEM DO DIA
            </div>


            <div className="flex flex-col md:flex-row items-center gap-8">
                
                <div className="w-full md:w-1/2 h-48 bg-rose/10 rounded-2xl flex items-center text-6xl shadow-inner">
                    {/* Imagem a ser adicionada*/}
                </div>


                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-coffee mb-2">Nome do Item</h2>
                    <p className="text-coffee/70 mb-6 leading-relaxed">
                        Descrição breve do item.
                    </p>
                    <Link
                        href="/comidas" // Redireciona para o menu do item
                        className="inline-block w-full md:w-auto px-8 py-3 bg-coffee text-white rounded-xl font-semibold hover:bg-rose transition-colors shadow-lg shadow-coffee/20"
                    >
                        Experimentar Agora
                    </Link>
                </div>
            </div>
        </section>
      </main>


      
    </div>
  );
}