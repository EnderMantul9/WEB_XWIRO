
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Table as TableIcon, BookOpen, BarChart3, ChevronRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const releases = {
  news: [
    { id: 1, title: "Ekspor Indonesia April 2024 mencapai US$19,62 miliar", date: "15 Mei 2024", category: "Perdagangan" },
    { id: 2, title: "Tingkat Pengangguran Terbuka (TPT) turun menjadi 4,82 persen", date: "10 Mei 2024", category: "Ketenagakerjaan" },
    { id: 3, title: "Indeks Harga Konsumen mengalami deflasi 0,03 persen pada Mei 2024", date: "01 Juni 2024", category: "Inflasi" },
    { id: 4, title: "Produksi Padi 2023 diperkirakan mencapai 53,98 juta ton GKG", date: "05 April 2024", category: "Pertanian" },
  ],
  tables: [
    { id: 1, title: "[Seri 2010] PDB Harga Berlaku Menurut Lapangan Usaha (Miliar Rupiah)", date: "20 Mei 2024", category: "Ekonomi" },
    { id: 2, title: "Jumlah Penduduk Menurut Kelompok Umur dan Jenis Kelamin", date: "12 Mar 2024", category: "Kependudukan" },
    { id: 3, title: "Indeks Pembangunan Manusia (IPM) Menurut Provinsi", date: "05 Jan 2024", category: "Sosial" },
  ],
  publications: [
    { id: 1, title: "Statistik Indonesia 2024", date: "28 Feb 2024", category: "Tahunan" },
    { id: 2, title: "Keadaan Ketenagakerjaan Indonesia Februari 2024", date: "08 Mei 2024", category: "Tematik" },
    { id: 3, title: "Laporan Perekonomian Indonesia 2023", date: "15 Apr 2024", category: "Ekonomi" },
  ],
  infographics: [
    { id: 1, title: "Profil Kemiskinan di Indonesia September 2023", date: "15 Jan 2024", category: "Sosial" },
    { id: 2, title: "Perkembangan Pariwisata dan Transportasi Nasional", date: "02 Mei 2024", category: "Sektoral" },
  ]
};

export function LatestInfoTabs() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Informasi Terbaru</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dapatkan rilis data statistik resmi, publikasi mendalam, dan tabel data mentah terbaru setiap bulannya.
          </p>
        </div>

        <Tabs defaultValue="news" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-1 bg-white shadow-sm rounded-xl mb-8">
            <TabsTrigger value="news" className="py-3 flex items-center gap-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Berita Resmi</span>
            </TabsTrigger>
            <TabsTrigger value="tables" className="py-3 flex items-center gap-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">
              <TableIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Tabel Statistik</span>
            </TabsTrigger>
            <TabsTrigger value="publications" className="py-3 flex items-center gap-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Publikasi</span>
            </TabsTrigger>
            <TabsTrigger value="infographics" className="py-3 flex items-center gap-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Infografis</span>
            </TabsTrigger>
          </TabsList>

          <div className="bg-white rounded-2xl shadow-sm border p-2">
            {Object.entries(releases).map(([key, items]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="divide-y divide-slate-100">
                  {items.map((item) => (
                    <div key={item.id} className="p-4 sm:p-6 group hover:bg-slate-50 transition-colors cursor-pointer flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[10px] font-bold text-primary px-2 py-0.5 bg-primary/10 rounded uppercase tracking-wider">
                            {item.category}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {item.date}
                          </span>
                        </div>
                        <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <div className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-slate-50 border-t flex justify-center">
                  <Button variant="ghost" className="text-primary font-semibold hover:bg-primary/5">
                    Lihat Semua {key === 'news' ? 'Berita' : key}
                  </Button>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
