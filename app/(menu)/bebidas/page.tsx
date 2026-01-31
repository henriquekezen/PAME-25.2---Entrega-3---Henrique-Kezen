import { menuItems } from "@/dados/cardapio";

export default function BebidasPage() {
  // Filtra apenas o que é bebida
  const bebidas = menuItems.filter((item) => item.categoria === "bebidas");

  return (
    <section className="bg-[#E8E2D2] p-6 md:p-10 w-full max-w-7xl mx-auto animate-fade-in">
      
      {/* Título reservado pra imagem*/}
      
      <div className="w-full h-48 md:h-64  rounded-3xl mb-10 flex items-center justify-center border-2 border-coffee/10 border-dashed">
        
      </div>

      {/* Itens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {bebidas.map((item) => (
          <div 
            key={item.nome} // Usando o Nome como ID 
            className="group bg-white p-5 rounded-3xl shadow-sm border border-sand/30 hover:shadow-md hover:border-coffee/30 transition-all duration-300 flex flex-col"
          >
            
            {/* Espaço reservado para Imagem do Produto */}
            <div className="relative w-full h-52 bg-[#F8F6F2] rounded-2xl mb-5 flex items-center justify-center overflow-hidden">
                <span className="text-4xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                    fotinha maneira
                </span>
                
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

          </div>
        ))}

      </div>
    </section>
  );
}