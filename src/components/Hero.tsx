
"use client";

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg')?.imageUrl;

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[600px] flex items-center">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
      
      {/* Animated Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-10 opacity-20 hidden lg:block">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            Lembaga Independen dan Terpercaya dalam Mendukung Kebijakan Berbasis Data
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Pusat data statistik nasional terintegrasi untuk mendukung perencanaan pembangunan dan kesejahteraan masyarakat Indonesia.
          </p>

          <form onSubmit={handleSearch} className="relative max-w-2xl animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
              <Search className="w-5 h-5" />
            </div>
            <Input 
              placeholder="Cari data statistik, tabel, atau publikasi..." 
              className="w-full h-16 pl-12 pr-6 rounded-full bg-white shadow-2xl text-lg border-none focus-visible:ring-secondary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <button 
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105"
              >
                Cari
              </button>
            </div>
          </form>
          
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in duration-1000 delay-300">
            <span className="text-white/60 text-sm">Populer:</span>
            {['Inflasi', 'Kemiskinan', 'Nilai Tukar Petani', 'PDB'].map((tag) => (
              <button 
                key={tag} 
                onClick={() => router.push(`/search?q=${tag}`)}
                className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-full border border-white/20 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
