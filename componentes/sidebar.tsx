"use client"; 

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-26 md:w-64 bg-[#E8E2D2] border-r border-sand/30 flex flex-col p-2 md:p-8 ">
      
      {/* Título do Menu */}
      <header className="mb-12 flex flex-col items-center">
  
        {/* Imagem funciona como link para a home */}
        <Link href="/">
          <div className="relative w-20 h-30 md:w-40 md:h-40 cursor-pointer hover:opacity-80 transition-opacity"> 
          <Image 
            src="/marca.png"   
            alt="Marca d'água Girl"
            fill                
            className="object-contain" 
          />
          </div>
        </Link>

        <p className="text-xs text-coffee uppercase tracking-widest -mt-2.5">
          Menu Digital
        </p>
      </header>

      {/*Navegação */}
      <main>
      <nav className="flex-1">
        <ul className="space-y-5">
          
          {/*Voltar ao Início */}
          <li>
            <Link 
              href="/" 
              className="px-4 py-2 rounded-xl hover:bg-cream transition-colors flex items-center justify-center" 
            >
            <div className="relative w-6 h-6 mb-[-13]"> 
              <Image 
                src="/home.png"  
                alt="Voltar ao Início"
                fill
                className="object-contain" 
              />
            </div>
            </Link>
          </li>

          <div className="border-t border-sand/20 my-4"></div>

          {/*Cardápio e favoritos */}
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
          <SidebarLink 
            href="/favoritos" 
            label="Favoritos ❤" 
            active={pathname === "/favoritos"} />
        </ul>
      </nav>
      </main>

      {/*Rodapé */}
      <footer className="text-xs text-coffee/40 mt-auto">
        &copy; 2026 Café & Co.
      </footer>
    </aside>
  );
}


function SidebarLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <li>
      <Link
        href={href}
      >
        {label}
      </Link>
    </li>
  );
}