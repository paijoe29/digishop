import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { 
  Layers3, 
  Menu as MenuIcon, 
  ArrowRight, 
  X as CloseIcon,
  Home, 
  ShoppingBag, 
  Sparkles, // Tetap menggunakan ikon ini untuk "Mengapa Produk Kami"
  Tag, 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

const navMenuItems = [
  { to: "/", label: "Beranda", icon: Home },
  { to: "/#products", label: "Produk", icon: ShoppingBag },
  { to: "/why-our-products", label: "Mengapa Produk Kami", icon: Sparkles }, // Diperbarui
  { to: "/#cta", label: "Penawaran", icon: Tag },
];

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isExternal?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, isExternal, className, onClick }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(event);
    }
    if (event.defaultPrevented) {
      return;
    }
    // Jika link adalah hash link di homepage, lakukan smooth scroll
    // Selain itu, biarkan Link component menangani navigasi
    if (isHomePage && to.startsWith("/#")) {
      event.preventDefault();
      const id = to.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (isExternal) {
      // Biarkan default untuk link eksternal
    } else {
      // Untuk navigasi ke halaman lain (seperti /why-our-products),
      // biarkan Link component yang bekerja. Tidak perlu event.preventDefault().
    }
  };

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={className} onClick={handleLinkClick}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className} onClick={handleLinkClick}>
      {children}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const defaultLinkClasses = "text-gray-100 hover:text-yellow-500 transition-colors font-medium pb-1 border-b-2 border-transparent hover:border-yellow-500/70";
  
  const mobileLinkClasses = "flex items-center w-full text-left py-3.5 px-4 text-lg text-slate-100 hover:bg-slate-700/80 hover:text-yellow-400 rounded-lg transition-all duration-200 ease-in-out hover:pl-5 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-slate-700";

  const handleContactClick = () => {
    setIsMobileMenuOpen(false); 
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Jika tidak di homepage, mungkin navigasi ke halaman kontak atau section lain
      // Untuk sekarang, kita asumsikan tombol Kontak selalu merujuk ke section di homepage
      // Jika ada halaman kontak terpisah, ini perlu diubah
      const homeCTA = "/#cta";
      if (location.pathname !== "/") {
        window.location.href = homeCTA; // Navigasi ke homepage lalu scroll
      }
    }
  };

  return (
    <nav className="bg-black shadow-md py-3 px-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-white hover:opacity-80 transition-opacity">
          <Layers3 size={28} className="text-yellow-500" />
          <span>NamaSitus</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navMenuItems.map(item => (
            <NavLink key={item.to} to={item.to} className={defaultLinkClasses}>
              {item.label}
            </NavLink>
          ))}
          <Button 
            size="sm" 
            className="bg-yellow-500 text-black hover:bg-yellow-600 font-semibold rounded-md transition-all duration-300 transform hover:scale-105"
            onClick={handleContactClick}
          >
            Kontak
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-slate-700/80 rounded-full p-2">
                {isMobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
                <span className="sr-only">Buka menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] bg-black text-white border-l border-slate-700/60 p-0 flex flex-col"
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <SheetHeader className="p-5 border-b border-slate-700/60 flex flex-row justify-between items-center">
                <SheetTitle className="text-yellow-500 text-xl flex items-center">
                  <Layers3 size={24} className="mr-2.5" />
                  NamaSitus
                </SheetTitle>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="text-slate-300 hover:text-yellow-400 hover:bg-slate-700/80 rounded-full">
                    <CloseIcon size={22} />
                    <span className="sr-only">Tutup menu</span>
                  </Button>
                </SheetClose>
              </SheetHeader>
              <nav className="flex-grow flex flex-col p-4 space-y-2 mt-2">
                {navMenuItems.map(item => {
                  const IconComponent = item.icon;
                  return (
                    <SheetClose asChild key={item.to}>
                      <NavLink 
                        to={item.to} 
                        className={mobileLinkClasses}
                      >
                        <IconComponent size={20} className="mr-3 text-slate-400 group-hover:text-yellow-400 transition-colors" />
                        {item.label}
                      </NavLink>
                    </SheetClose>
                  );
                })}
                <Separator className="my-3 bg-slate-700/60" /> 
                <SheetClose asChild>
                  <button
                    onClick={handleContactClick}
                    className={cn(mobileLinkClasses, "text-yellow-400 hover:text-yellow-300")}
                  >
                    <ArrowRight size={20} className="mr-3 text-slate-400 group-hover:text-yellow-400 transition-colors" />
                    Kontak
                  </button>
                </SheetClose>
              </nav>
              <div className="p-4 mt-auto border-t border-slate-700/60">
                <p className="text-xs text-slate-500 text-center">&copy; {new Date().getFullYear()} NamaSitus. All rights reserved.</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;