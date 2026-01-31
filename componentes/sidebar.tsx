"use client"; 

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-sand/30 flex flex-col sticky top-0 p-8">
      
      {/*Título do Menu */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-rose">Clean Girl</h2>
        <p className="text-xs text-coffee uppercase tracking-widest mt-1">Menu Digital</p>
      </div>

      {/*Navegação */}
      <nav className="flex-1">
        <ul className="space-y-4">
          
          {/*Voltar ao Início */}
          <li>
            <Link 
              href="/" 
              className="block px-4 py-3 rounded-xl text-coffee hover:bg-cream transition-colors font-medium"
            >
               Voltar ao Início
            </Link>
          </li>

          <div className="border-t border-sand/20 my-4"></div>

          {/*Cardápio */}
          <SidebarLink 
            href="/comidas" 
            label="Comidas" 
            active={pathname === "/comidas"} 
          />
          <SidebarLink 
            href="/bebidas" 
            label="Bebidas" 
            active={pathname === "/bebidas"} 
          />
        </ul>
      </nav>

      {/*Rodapé */}
      <div className="text-xs text-coffee/40 mt-auto">
        &copy; 2026 Café & Co.
      </div>
    </aside>
  );
}


function SidebarLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <li>
      <Link
        href={href}
        className={`block px-4 py-3 rounded-xl font-bold transition-all ${
          active 
            ? "bg-rose text-white shadow-md shadow-rose/20" // Estilo ao selecionar
            : "text-coffee hover:bg-cream hover:text-rose"   // Estilo padrão
        }`}
      >
        {label}
      </Link>
    </li>
  );
}