
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Search, Menu, X, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const navItems = [
  { name: 'Beranda', href: '/' },
  { name: 'Rencana Terbit', href: '#' },
  { name: 'Produk', href: '#' },
  { name: 'Layanan', href: '#' },
  { name: 'Informasi Publik', href: '#' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md py-2 shadow-sm border-gray-200" 
          : "bg-primary text-white py-4 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className={cn(
            "p-2 rounded-lg transition-colors",
            isScrolled ? "bg-primary text-white" : "bg-white text-primary"
          )}>
            <Database className="w-6 h-6" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-xl tracking-tight">KSPS</span>
            <span className={cn(
              "text-[10px] font-semibold tracking-[0.2em] uppercase opacity-80",
              isScrolled ? "text-primary" : "text-white"
            )}>TERPERCAYA</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                isScrolled ? "text-foreground" : "text-white/90"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button 
            variant={isScrolled ? "outline" : "secondary"} 
            size="sm"
            className="flex items-center gap-2"
            onClick={() => router.push('/search')}
          >
            <Search className="w-4 h-4" />
            Cari
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b shadow-xl p-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground text-sm font-semibold p-2 hover:bg-accent rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="outline" 
              className="w-full justify-start gap-2"
              onClick={() => {
                setMobileMenuOpen(false);
                router.push('/search');
              }}
            >
              <Search className="w-4 h-4" />
              Cari Data
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
