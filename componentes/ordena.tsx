"use client";

export type TipoOrdenacao = "relevancia" | "menor" | "maior";

interface FiltroProps {
  atual: TipoOrdenacao;
  onMudar: (novoValor: TipoOrdenacao) => void;
}

export default function FiltroOrdenacao({ atual, onMudar }: FiltroProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      <span className="text-sm font-bold text-coffee/60 uppercase tracking-widest">
        Ordenar por:
      </span>

      <div className="flex gap-2 bg-white p-1 rounded-xl border border-sand/30 shadow-sm">
        {/* Botão Relevância */}
        <button
          onClick={() => onMudar("relevancia")}
          className={`px-1 py-1 rounded-lg text-sm font-bold transition-all ${
            atual === "relevancia"
              ? "bg-[#65875F] text-white shadow-md"
              : "text-coffee/70 hover:bg-sand/20"
          }`}
        >
          Relevância
        </button>

        {/* Botão Menor Preço */}
        <button
          onClick={() => onMudar("menor")}
          className={`px-1 py-1 rounded-lg text-sm font-bold transition-all ${
            atual === "menor"
              ? "bg-[#65875F] text-white shadow-md"
              : "text-coffee/70 hover:bg-sand/20"
          }`}
        >
          Menor Preço
        </button>

        {/* Botão Maior Preço */}
        <button
          onClick={() => onMudar("maior")}
          className={`px-1 py-1 rounded-lg text-sm font-bold transition-all ${
            atual === "maior"
              ? "bg-[#65875F] text-white shadow-md"
              : "text-coffee/70 hover:bg-sand/20"
          }`}
        >
          Maior Preço
        </button>
      </div>
    </div>
  );
}