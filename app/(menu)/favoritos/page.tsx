"use client";
import Link from "next/link";
import { useFavorites } from "@/componentes/favoritos";
import {menuItems} from "@/dados/cardapio";
import Image from "next/image";

export default function FavoritosPage() {
    const { favorites } = useFavorites();
    const produtosFavoritos = menuItems.filter((item) => favorites.includes(item.nome));

    //Verifica se a lista de favoritos está vazia
    if (favorites.length === 0)
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

    return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto animate-fade-in">
      
      {/* Título reservado pra imagem */}
        <header className="relative overflow-hidden w-full h-48 md:h-64 bg-rose/10 rounded-3xl mb-10 flex items-center justify-center border-2 border-rose/20 border-dashed">
            <Image
                src="/favoritos.png" 
                alt="título da página de favoritos."
                fill
                className="object-cover object-center md:object-start"
                priority 
                />
        </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {produtosFavoritos.map((item) => {
          
          // Define o destino por meio da categoria do item
          const linkHref = item.categoria === "bebida" 
             ? `/bebidas/${item.nome}` 
             : `/comidas/${item.nome}`;
        
             {/*Informações dos itens favoritos */}
          return (
            
            <Link 
                key={item.nome} 
                href={linkHref}
                className="group bg-white p-5 rounded-3xl shadow-sm border border-sand/30 hover:shadow-lg hover:border-rose/30 transition-all duration-300 flex flex-col items-center text-center"
            >
                {/* Foto */}
                <div className="relative w-full h-52 bg-[#F8F6F2] rounded-2xl mb-5 flex items-center justify-center overflow-hidden">
                    <Image 
                      src={item.imagem}
                      alt={item.nome}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                {/* Textos */}
                <div className="w-full flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-coffee leading-tight group-hover:text-rose transition-colors">
                        {item.nome}
                    </h3>
                    
                    <span className="text-rose font-bold text-xl mt-2 block">
                        R$ {item.preco.toFixed(2).replace('.', ',')}
                    </span>

                    {/* Pequena etiqueta de categoria  */}
                    <span className="text-[10px] text-coffee/40 uppercase tracking-widest mt-1">
                      {item.categoria}
                    </span>
                </div>
            </Link>
          );
        })}

      </main>
    </div>
  );
}

    