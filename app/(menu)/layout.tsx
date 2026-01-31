import Sidebar from "@/componentes/sidebar";

// recurso children evita que seja "criada" uma sidebar nova em movimentos como sair da aba comidas e bebidas
export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <div className="flex min-h-screen bg-cream">
      
      {/* Barra Lateral Fixa */}
      <Sidebar />
      
      {/* Área onde as páginas de Comidas/Bebidas vão aparecer */}
      <main className="flex-1">
        {children}
      </main>
      
    </div>
  );
}