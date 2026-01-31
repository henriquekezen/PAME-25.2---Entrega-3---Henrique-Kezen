import { menuItems } from "@/dados/cardapio";
import Link from "next/link";

export default async function DetalheBebida({ params }: { params: Promise<{ nome: string }> }) {

    const { nome } = await params;

  const nomeDecodificado = decodeURIComponent(nome);
  const produto = menuItems.find((item) => item.nome === nomeDecodificado);

  if (!produto) return <div>Produto não encontrado</div>;

  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto animate-fade-in">
      {/* Botão Voltar para BEBIDAS */}
      <Link href="/bebidas" className="inline-flex items-center text-coffee/60 hover:text-rose mb-8 font-medium">
        ← Voltar para Bebidas
      </Link>

        {/* Foto do Produto */}
      <div className="bg-white rounded-3xl shadow-sm border border-sand/30 overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-64 md:h-auto bg-coffee/5 flex items-center justify-center relative">
             <span className="text-8xl opacity-20">bebida</span>
        </div>

        {/* Detalhes do Produto */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
            <span className="text-xs font-bold text-coffee uppercase tracking-widest mb-2">Bebida</span>
            <h1 className="text-3xl md:text-4xl font-bold text-coffee mb-4 leading-tight">{produto.nome}</h1>
            <p className="text-coffee/70 text-lg leading-relaxed mb-8">{produto.descricao}</p>
            
            {/* Preço e Botão Adicionar */}
            {/*Adicionar será usado para criar os favoritos */}
            <div className="flex items-center justify-between border-t border-sand/20 pt-6">
                <span className="text-3xl font-bold text-rose">R$ {produto.preco.toFixed(2).replace('.', ',')}</span>
                <button className="px-8 py-3 bg-coffee text-white rounded-xl font-bold hover:bg-rose transition-colors shadow-lg shadow-coffee/20">Adicionar</button>
            </div>
        </div>
      </div>
    </div>
  );
}