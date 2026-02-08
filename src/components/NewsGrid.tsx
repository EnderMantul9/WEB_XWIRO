
"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, User } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "Workshop Nasional: Penguatan Data Statistik Sektoral untuk Indonesia Emas 2045",
    date: "12 Juni 2024",
    author: "Humas Pusat",
    image: PlaceHolderImages.find(img => img.id === 'news-1')?.imageUrl
  },
  {
    id: 2,
    title: "Rilis Berita Resmi Statistik: Pertumbuhan Ekonomi Triwulan I-2024",
    date: "05 Juni 2024",
    author: "Tim Analisis",
    image: PlaceHolderImages.find(img => img.id === 'news-2')?.imageUrl
  },
  {
    id: 3,
    title: "Kunjungan Kerja Kepala Lembaga ke Daerah 3T untuk Evaluasi Sensus Pertanian",
    date: "28 Mei 2024",
    author: "Sekretariat",
    image: PlaceHolderImages.find(img => img.id === 'news-3')?.imageUrl
  }
];

export function NewsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">Berita & Siaran Pers</h2>
            <p className="text-muted-foreground">Kegiatan dan informasi terkini lembaga</p>
          </div>
          <button className="text-primary font-semibold hover:underline flex items-center gap-1">
            Indeks Berita
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="group border-none shadow-none bg-transparent overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={item.image || ''}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint="news coverage"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {item.author}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Lembaga terus berupaya meningkatkan kualitas data nasional melalui berbagai kolaborasi strategis dengan berbagai pihak berkepentingan.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
