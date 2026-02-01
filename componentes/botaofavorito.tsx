"use client";

import { useFavorites } from "@/componentes/favoritos";
import { useState } from "react";

export default function BotaoAdicionar({ nome }: { nome: string }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const [adicionado, setAdicionado] = useState(false);

  // Verifica se já está na lista
  const jaEstaSalvo = isFavorite(nome);

  const handleClick = () => {
    toggleFavorite(nome);
    
    // Efeito visual rápido para confirmar o clique
    setAdicionado(true);
    setTimeout(() => setAdicionado(false), 1000);
  };

  return (
    <button 
        onClick={handleClick}
        className={`
            px-2 py-2 md:px-8 md:py-4 rounded-2xl font-bold transition-all shadow-lg 
            flex-1 md:flex-none w-full md:w-auto
            ${jaEstaSalvo 
                ? "bg-green-600 text-white hover:bg-green-700 shadow-green-600/20" // Estilo se já estiver salvo
                : "bg-[#87313f] text-white hover:bg-green-700 shadow-rose/20 hover:shadow-green-700/20" // Estilo normal
            }
        `}
    >
        {/* Muda o texto dependendo do estado */}
        {jaEstaSalvo ? "✓ Favoritado" : "Favoritar"}
    </button>
  );
}