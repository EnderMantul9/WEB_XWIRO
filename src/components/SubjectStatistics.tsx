
"use client";

import { Users, Landmark, Trees, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const subjects = [
  {
    title: "Statistik Sosial",
    icon: <Users className="w-8 h-8" />,
    items: ["Kependudukan", "Gender", "Kemiskinan", "Pendidikan", "Kesehatan", "Upah Buruh"]
  },
  {
    title: "Statistik Ekonomi",
    icon: <Landmark className="w-8 h-8" />,
    items: ["Ekspor-Impor", "Energi", "Harga Eceran", "Keuangan", "Neraca Wilayah", "Pariwisata"]
  },
  {
    title: "Statistik Lingkungan",
    icon: <Trees className="w-8 h-8" />,
    items: ["Geografi", "Iklim", "Lingkungan Hidup", "Potensi Desa", "Pertanian", "Kehutanan"]
  }
];

export function SubjectStatistics() {
  return (
    <section className="py-20 bg-[#F97316]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 text-white">
          <h2 className="text-3xl font-bold mb-4">Statistik Menurut Subjek</h2>
          <p className="opacity-90 max-w-2xl mx-auto">
            Temukan data mendalam berdasarkan kategori yang paling sesuai dengan kebutuhan riset dan analisis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subjects.map((subject) => (
            <div key={subject.title} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all group">
              <div className="text-white mb-6 bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {subject.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">{subject.title}</h3>
              <ul className="grid grid-cols-1 gap-3">
                {subject.items.map((item) => (
                  <li key={item}>
                    <Link 
                      href="#" 
                      className="text-white/80 hover:text-white flex items-center justify-between group/link py-1"
                    >
                      <span>{item}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-white/10">
                <button className="w-full bg-white text-[#F97316] py-3 rounded-xl font-bold hover:shadow-lg transition-shadow">
                  Lihat Semua Subjek
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
