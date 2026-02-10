
"use client";

import { Database, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-white text-primary">
                <Database className="w-6 h-6" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-xl tracking-tight">KSPS</span>
                <span className="text-[10px] font-semibold tracking-[0.1em] uppercase opacity-80">Kaliwiro Scientific Population System</span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Lembaga Kependudukan Daerah Xwiro Aseli no Fake. Bertugas untuk menyediakan data statistik terupdate
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Menu Cepat</h4>
            <ul className="space-y-3">
              {['Beranda', 'Rencana Terbit', 'Metadata', 'Publikasi Terbaru', 'Tabel Dinamis', 'Akses Data'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Informasi Publik</h4>
            <ul className="space-y-3">
              {['Struktur Organisasi', 'Visi & Misi', 'Tugas & Fungsi', 'Reformasi Birokrasi', 'Layanan Pengaduan', 'Pengadaan Barang & Jasa'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Kontak Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <span className="text-sm text-white/60">
                  Jl. Jogonegoro Km 2 Wonosobo
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm text-white/60">+62 87654321098</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm text-white/60">kelompok4chmadgemoy@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/40 uppercase tracking-widest font-semibold">
          <p>© 2024 KSPS KALIWIRO SCIENTIFIC POPULATION SYSTEM. SELURUH HAK CIPTA DILINDUNGI.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-white">Syarat & Ketentuan</Link>
            <Link href="#" className="hover:text-white">Peta Situs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
