"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type FavoritesContextType = {
  favorites: string[]; // Lista com os nomes dos produtos favoritos
  toggleFavorite: (name: string) => void; // Função para adicionar/remover
  isFavorite: (name: string) => boolean; // Função para checar se já é favorito
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Carrega o LocalStorage assim que o site abre
  useEffect(() => {
    const saved = localStorage.getItem("favorites-clean-girl");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  // Adiciona se não tiver, Remove se já tiver
  const toggleFavorite = (name: string) => {
    setFavorites((prev) => {
      let newFavorites;
      if (prev.includes(name)) {
        newFavorites = prev.filter((item) => item !== name); // Remove
      } else {
        newFavorites = [...prev, name]; // Adiciona
      }
      
      // Salva no navegador para não perder com F5
      localStorage.setItem("favorites-clean-girl", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const isFavorite = (name: string) => favorites.includes(name);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// facilita o uso nas páginas
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites deve ser usado dentro de um FavoritesProvider");
  return context;
}