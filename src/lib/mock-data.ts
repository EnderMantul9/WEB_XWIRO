
export const STRATEGIC_INDICATORS = [
  { id: 1, title: "Umur Harapan Hidup Laki-laki", value: "71.75", unit: "Tahun", period: "2023", trend: "up" },
  { id: 2, title: "Umur Harapan Hidup Perempuan", value: "75.82", unit: "Tahun", period: "2023", trend: "up" },
  { id: 3, title: "Kunjungan Wisman", value: "1.1M", unit: "Orang", period: "Mei 2024", trend: "up" },
  { id: 4, title: "Inflasi (IHPB)", value: "2.12", unit: "%", period: "Mei 2024", trend: "down" },
  { id: 5, title: "Nilai Tukar Petani", value: "119.39", unit: "Indeks", period: "Juni 2024", trend: "up" },
  { id: 6, title: "Pertumbuhan Ekonomi", value: "5.11", unit: "%", period: "Q1 2024", trend: "up" },
];

export const LATEST_RELEASES = {
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

export const GDP_GROWTH_DATA = [
  { year: "2019", value: 5.02 },
  { year: "2020", value: -2.07 },
  { year: "2021", value: 3.69 },
  { year: "2022", value: 5.31 },
  { year: "2023", value: 5.05 },
];

export const INFLATION_DATA = [
  { month: "Jan", value: 2.57 },
  { month: "Feb", value: 2.75 },
  { month: "Mar", value: 3.05 },
  { month: "Apr", value: 3.00 },
  { month: "Mei", value: 2.84 },
];

export const SECTOR_CONTRIBUTION_DATA = [
  { name: "Industri", value: 18.67 },
  { name: "Pertanian", value: 12.53 },
  { name: "Perdagangan", value: 12.94 },
  { name: "Konstruksi", value: 9.92 },
  { name: "Lainnya", value: 45.94 },
];

export const NEWS_ITEMS = [
  {
    id: 1,
    title: "Workshop Nasional: Penguatan Data Statistik Sektoral untuk Indonesia Emas 2045",
    date: "12 Juni 2024",
    author: "Humas Pusat",
    imageKey: 'news-1'
  },
  {
    id: 2,
    title: "Rilis Berita Resmi Statistik: Pertumbuhan Ekonomi Triwulan I-2024",
    date: "05 Juni 2024",
    author: "Tim Analisis",
    imageKey: 'news-2'
  },
  {
    id: 3,
    title: "Kunjungan Kerja Kepala Lembaga ke Daerah 3T untuk Evaluasi Sensus Pertanian",
    date: "28 Mei 2024",
    author: "Sekretariat",
    imageKey: 'news-3'
  }
];

export const STATISTICS_SUBJECTS = [
  {
    title: "Statistik Sosial",
    iconName: "Users",
    items: ["Kependudukan", "Gender", "Kemiskinan", "Pendidikan", "Kesehatan", "Upah Buruh"]
  },
  {
    title: "Statistik Ekonomi",
    iconName: "Landmark",
    items: ["Ekspor-Impor", "Energi", "Harga Eceran", "Keuangan", "Neraca Wilayah", "Pariwisata"]
  },
  {
    title: "Statistik Lingkungan",
    iconName: "Trees",
    items: ["Geografi", "Iklim", "Lingkungan Hidup", "Potensi Desa", "Pertanian", "Kehutanan"]
  }
];
