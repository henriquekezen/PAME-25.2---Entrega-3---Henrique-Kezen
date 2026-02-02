"use client";
import { menuItems } from "@/dados/cardapio";
import { useState } from "react";
import FiltroOrdenacao, { TipoOrdenacao } from "@/componentes/ordena";
import Link from "next/link";
import Image from "next/image";


export default function BebidasPage() {
  // Filtra apenas o que é bebida
  const bebidas = menuItems.filter((item) => item.categoria === "bebida");
  //Ordena
  const [ordenacao, setOrdenacao] = useState<TipoOrdenacao>("relevancia");
  const bebidasOrdenadas = [...bebidas].sort((a, b) => {
    if (ordenacao === "menor") return a.preco - b.preco;
    if (ordenacao === "maior") return b.preco - a.preco;
    return 0;
  });

  return (
    <section className="bg-[#E8E2D2] p-6 md:p-10 w-full max-w-7xl mx-auto animate-fade-in">

      {/* Títulobebidas */}
      <header className="relative overflow-hidden w-full h-48 md:h-64 bg-rose/10 rounded-3xl mb-10 flex items-center justify-center border-2 border-rose/20 border-dashed">
      <Image
        src="/bebe.png" 
        alt="título da página de bebidas."
        fill
        className="object-cover object-center md:object-start"
        priority 
      />
      </header>

      <div className="flex justify-end mt-[-30] mb-4">
        <FiltroOrdenacao 
          atual={ordenacao} 
          onMudar={setOrdenacao} 
      />
      </div>
       
      {/* Itens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {bebidasOrdenadas.map((item) => (
          <div 
            key={item.nome} // Usando o Nome como ID 
            className="group bg-white p-5 rounded-3xl shadow-sm border border-sand/30 hover:shadow-md hover:border-coffee/30 transition-all duration-300 flex flex-col"
          >
            {/*Transforma o nome e a foto em clicavéis */}
            <Link href={`/bebidas/${item.nome}`}>
            
            {/* Espaço reservado para Imagem do Produto */}
            <div className="relative w-full h-52 bg-[#F8F6F2] rounded-2xl mb-5 flex items-center justify-center overflow-hidden">
              <Image 
                src={item.imagem}      
                alt={item.nome}       
                fill                  
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Informações do Item */}
            <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-coffee leading-tight">
                    {item.nome}
                </h3>
                
                {/* Formatação de Preço de 24.9 para R$ 24,90  */}
                <span className="text-rose font-bold text-xl mt-2">
                    R$ {item.preco.toFixed(2).replace('.', ',')}
                </span>
            </div>
            </Link>
          </div>
        ))}

      </div>
    </section>
  );
}