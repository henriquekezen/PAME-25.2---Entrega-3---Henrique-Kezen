"use client"; 

import { useState } from "react";

export default function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full bg-[#BF827D] rounded-3xl p-6 md:p-10 border border-sand transition-all duration-300">
      
      {/* Cabeçalho da caixa(sempre visível) */}
      <div 
        className="flex items-center justify-between cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col gap-1">
          <h3 className="text-xl md:text-2xl font-bold text-[#554236]">
            Nossa Essência & Horários
          </h3>
          {/* Horário de Funcionamento */}
          <p className="text-sm font-medium text-[#ffe6db] uppercase tracking-wide">
            Seg-Sáb 8h-18h | Dom 9h-15h
                           
          </p>
        </div>

        {/* Botão Seta  */}
        <button 
          className={`w-10 h-10 flex items-center justify-center rounded-full  text-white transition-transform duration-300 ${
            isOpen ? "rotate-180 bg-rose" : ""
          }`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="currentColor" 
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>

      {/* Descrição(Expansível) */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="pt-2 border-t border-coffee/10 text-coffee/80 leading-relaxed text-sm md:text-base">
          <p className="mb-4">
            A Clean Girl Café & Co...
          </p>
          <p>
           Mais bla bla bla
          </p>
        </div>
      </div>
    </section>
  );
}