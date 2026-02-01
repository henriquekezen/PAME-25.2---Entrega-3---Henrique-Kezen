import Link from "next/link";

export default function FavoritosPage() {
  return (
    <section className="p-6 md:p-10 w-full max-w-7xl mx-auto animate-fade-in">
      
      {/* Cabeçalho da Página */}
      <header className="flex items-center gap-4 mb-10">
        <h1 className="text-3xl font-bold text-rose">Seus Favoritos</h1>
        <span className="bg-rose/10 text-rose px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Lista de Desejos
        </span>
      </header>

      {/* Estado Vazio */}
      <main className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-sand/30 rounded-3xl bg-white/50">
        <span className="text-6xl mb-4 opacity-30">💖</span>
        <h2 className="text-xl font-bold text-coffee mb-2">Sua lista está vazia</h2>
        <p className="text-coffee/60 max-w-md mb-8">
          Você ainda não salvou nenhum item. Explore nosso menu e clique em "Favoritar" para guardar seus preferidos aqui.
        </p>
        
        <div className="flex gap-4">
            <Link href="/comidas" className="px-1 py-2 md:px-6 md:py-3 bg-white border border-sand/50 text-coffee rounded-xl hover:bg-[#C3857C] hover:text-white hover:border-rose transition-all font-bold shadow-sm">
                Ver Comidas
            </Link>
            <Link href="/bebidas" className="px-1 py-2 md:px-6 md:py-3 bg-white border border-sand/50 text-coffee rounded-xl hover:bg-[#437053] hover:text-white hover:border-rose transition-all font-bold shadow-sm">
                Ver Bebidas
            </Link>
        </div>
      </main>

    </section>
  );
}