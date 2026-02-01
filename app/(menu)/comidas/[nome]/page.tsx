import { menuItems } from "@/dados/cardapio";
import Link from "next/link";
import Image from "next/image";
import BotaoFavoritar from "@/componentes/botaofavorito";

export default async function DetalheComida({ params }: { params: Promise<{ nome: string }> }) {

    const { nome } = await params;

  const nomeDecodificado = decodeURIComponent(nome);
  const produto = menuItems.find((item) => item.nome === nomeDecodificado);

  if (!produto) return <div>Produto não encontrado</div>;

  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto animate-fade-in">
      {/* Botão Voltar para COMIDAS */}
      <Link href="/comidas" className="inline-flex items-center text-coffee/60 hover:text-rose mb-8 font-medium">
        ← Voltar para Comidas
      </Link>

        {/* Foto do Produto */}
        <div className="relative md:w-[71.25%] md:h-76 w-full h-52 bg-[#F8F6F2] rounded-2xl mb-5 flex  overflow-hidden ">
            <Image 
            src={produto.imagem}      
            alt={produto.nome}       
            fill                  
            className="object-cover group-hover:scale-110 transition-transform duration-500 "
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>

        {/* Detalhes do Produto */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
            <span className="text-xs font-bold text-rose uppercase tracking-widest mb-2">Comida</span>
            <h1 className="text-3xl md:text-4xl font-bold text-coffee mb-4 leading-tight">{produto.nome}</h1>
            <p className="text-coffee/70 text-lg leading-relaxed mb-8">{produto.descricao}</p>
            
            {/* Preço e Botão Favoritar */}
            <div className="flex items-center justify-between border-t border-sand/20 pt-6">
                <span className="text-3xl font-bold text-rose">R$ {produto.preco.toFixed(2).replace('.', ',')}</span>
                <BotaoFavoritar nome={produto.nome} />
            </div>
        </div>
    </div>
  );
}