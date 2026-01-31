import Sidebar from "@/componentes/sidebar";

// recurso children evita que seja "criada" uma sidebar nova em movimentos como sair da aba comidas e bebidas
export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    //Cuidados com scroll incorreto no iphone
    <div className="flex h-screen overflow-hidden bg-cream">
      
      {/* Barra Lateral Fixa */}
      <Sidebar />
      
      
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
      
    </div>
  );
}

