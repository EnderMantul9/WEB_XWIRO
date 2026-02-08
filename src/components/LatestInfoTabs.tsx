
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Table as TableIcon, BookOpen, BarChart3, ChevronRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LATEST_RELEASES } from "@/lib/mock-data";

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
            {Object.entries(LATEST_RELEASES).map(([key, items]) => (
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
