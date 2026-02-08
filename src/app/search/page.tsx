
"use client";

import { useSearchParams } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { STRATEGIC_INDICATORS, LATEST_RELEASES, NEWS_ITEMS } from '@/lib/mock-data';
import Link from 'next/link';
import { Search, ChevronRight, FileText, Table as TableIcon, BookOpen, BarChart3, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState, useMemo, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  // Combine all data into a single searchable array
  const allData = useMemo(() => {
    const items: any[] = [];

    STRATEGIC_INDICATORS.forEach(i => items.push({ 
      ...i, 
      categoryName: 'Indikator Strategis', 
      type: 'indicator', 
      icon: <TrendingUp className="w-4 h-4" /> 
    }));

    Object.entries(LATEST_RELEASES).forEach(([key, list]) => {
      list.forEach((item: any) => {
        let icon = <FileText className="w-4 h-4" />;
        if (key === 'tables') icon = <TableIcon className="w-4 h-4" />;
        if (key === 'publications') icon = <BookOpen className="w-4 h-4" />;
        if (key === 'infographics') icon = <BarChart3 className="w-4 h-4" />;

        items.push({ 
          ...item, 
          categoryName: `Rilis - ${key.charAt(0).toUpperCase() + key.slice(1)}`, 
          type: 'release', 
          icon 
        });
      });
    });

    NEWS_ITEMS.forEach(n => items.push({ 
      ...n, 
      categoryName: 'Berita & Siaran Pers', 
      type: 'news', 
      icon: <FileText className="w-4 h-4" /> 
    }));

    return items;
  }, []);

  const filteredResults = useMemo(() => {
    if (!query) return [];
    const lowQuery = query.toLowerCase();
    return allData.filter(item => 
      item.title?.toLowerCase().includes(lowQuery) || 
      item.category?.toLowerCase().includes(lowQuery) ||
      item.categoryName?.toLowerCase().includes(lowQuery)
    );
  }, [query, allData]);

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-40 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold mb-4">Pencarian Data</h1>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari data, tabel, atau publikasi..."
                className="h-14 pl-12 pr-4 rounded-xl shadow-sm bg-white border-slate-200"
              />
            </div>
            {query && (
              <p className="mt-4 text-muted-foreground">
                Menampilkan {filteredResults.length} hasil untuk "{query}"
              </p>
            )}
          </div>

          <div className="space-y-4">
            {filteredResults.length > 0 ? (
              filteredResults.map((item, idx) => (
                <Link key={idx} href={item.href || '#'}>
                  <Card className="hover:border-primary transition-all group overflow-hidden mb-4">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-slate-100 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-bold text-primary px-2 py-0.5 bg-primary/10 rounded uppercase">
                              {item.categoryName}
                            </span>
                            {item.date && (
                              <span className="text-xs text-muted-foreground">{item.date}</span>
                            )}
                          </div>
                          <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          {item.value && (
                            <p className="text-lg font-black text-primary mt-1">
                              {item.value} <span className="text-xs font-normal text-muted-foreground">{item.unit}</span>
                            </p>
                          )}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : query ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Tidak ada hasil ditemukan</h3>
                <p className="text-muted-foreground mt-2">Coba kata kunci lain atau periksa ejaan Anda.</p>
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground">Masukkan kata kunci untuk memulai pencarian.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
