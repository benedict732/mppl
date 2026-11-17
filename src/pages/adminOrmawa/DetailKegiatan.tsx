import React from 'react';
import { SidebarAdmin } from './components/SidebarAdmin';

export const DetailKegiatan: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col font-sans text-gray-800 relative">
      <div className="flex flex-1">
        
        {/* ================= SIDEBAR KIRI (ORMAWA / MPM) ================= */}
        <SidebarAdmin currentMenu="detail-kegiatan" />

        {/* ================= KONTEN UTAMA ================= */}
        <main className="flex-1 p-8 overflow-y-auto space-y-6">
          <div className="mb-2">
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
              LAPORAN / DETAIL KEGIATAN
            </p>
            <h1 className="text-xl font-bold text-gray-900">Detail Kegiatan</h1>
          </div>

          {/* Banner Kegiatan Utama (GLASSMORPHISM) */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl border border-white/60 shadow-sm overflow-hidden mb-8">
            
            {/* Banner Header dengan Ilustrasi Gradasi */}
            <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-amber-600 p-8 text-white">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 space-y-3 max-w-2xl">
                <span className="px-3 py-1 bg-amber-400 text-gray-900 rounded-full text-[10px] font-extrabold uppercase tracking-widest">
                  Kegiatan Seni
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight">Seminar Kepemimpinan Mahasiswa 2026</h2>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Rayakan kreativitas, tunjukkan bakat, ciptakan karya kepemimpinan yang inspiratif dan berdampak nyata bagi organisasi.
                </p>
              </div>
            </div>

            {/* Sub-Bar Kategori / Atribut */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-100 bg-white/40 text-xs">
              <div className="p-4 border-r border-gray-100 flex items-center gap-3">
                <span className="p-2 bg-blue-100 text-blue-600 rounded-xl">💡</span>
                <div>
                  <p className="font-bold text-gray-900">Seni & Kreativitas</p>
                  <p className="text-[10px] text-gray-500">Ekspresikan ide dan imajinasi</p>
                </div>
              </div>
              <div className="p-4 border-r border-gray-100 flex items-center gap-3">
                <span className="p-2 bg-amber-100 text-amber-600 rounded-xl">🎤</span>
                <div>
                  <p className="font-bold text-gray-900">Pertunjukan</p>
                  <p className="text-[10px] text-gray-500">Tari, musik, dan seni pertunjukan</p>
                </div>
              </div>
              <div className="p-4 flex items-center gap-3">
                <span className="p-2 bg-emerald-100 text-emerald-600 rounded-xl">🤝</span>
                <div>
                  <p className="font-bold text-gray-900">Kebersamaan</p>
                  <p className="text-[10px] text-gray-500">Bersama wujudkan karya terbaik</p>
                </div>
              </div>
            </div>

            {/* Konten Utama 2 Kolom */}
            <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Kolom Kiri (Tentang & Tujuan) */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Tentang Kegiatan */}
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                    <span>📌</span> Tentang Kegiatan
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Seminar Kepemimpinan Mahasiswa 2026 merupakan wadah bagi siswa dan mahasiswa untuk mengekspresikan kreativitas, mengembangkan bakat, serta menampilkan karya inspiratif. Melalui kegiatan ini, setiap peserta memiliki kesempatan untuk menunjukkan potensi diri, berani berkarya, serta mengapresiasi nilai-nilai kepemimpinan dalam berbagai bentuk.
                  </p>
                </div>

                {/* Tujuan Kegiatan */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                    <span>🎯</span> Tujuan Kegiatan
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white/90 border border-gray-200/80 rounded-xl space-y-1 shadow-sm">
                      <p className="font-bold text-xs text-gray-900 flex items-center gap-2">
                        <span>💡</span> Mengembangkan kreativitas
                      </p>
                      <p className="text-[11px] text-gray-500">Mendorong peserta menghasilkan karya yang unik dan inovatif.</p>
                    </div>

                    <div className="p-4 bg-white/90 border border-gray-200/80 rounded-xl space-y-1 shadow-sm">
                      <p className="font-bold text-xs text-gray-900 flex items-center gap-2">
                        <span>⭐</span> Menampilkan bakat
                      </p>
                      <p className="text-[11px] text-gray-500">Memberikan ruang bagi peserta untuk menunjukkan kemampuan dan potensi.</p>
                    </div>

                    <div className="p-4 bg-white/90 border border-gray-200/80 rounded-xl space-y-1 shadow-sm">
                      <p className="font-bold text-xs text-gray-900 flex items-center gap-2">
                        <span>🤝</span> Membangun kebersamaan
                      </p>
                      <p className="text-[11px] text-gray-500">Mempererat hubungan antarmahasiswa melalui kolaborasi kegiatan.</p>
                    </div>

                    <div className="p-4 bg-white/90 border border-gray-200/80 rounded-xl space-y-1 shadow-sm">
                      <p className="font-bold text-xs text-gray-900 flex items-center gap-2">
                        <span>❤️</span> Mengapresiasi seni
                      </p>
                      <p className="text-[11px] text-gray-500">Menumbuhkan rasa cinta terhadap nilai-nilai kepemimpinan dan budaya.</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Kolom Kanan (Info Kegiatan & Quote Box) */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Kotak Info Kegiatan */}
                <div className="bg-white/90 border border-gray-200/80 rounded-2xl p-6 space-y-4 shadow-sm">
                  <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
                    📅 Info Kegiatan
                  </h3>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">📅</span>
                      <div>
                        <p className="text-gray-400 text-[10px] font-semibold uppercase">Tanggal Pelaksanaan</p>
                        <p className="font-bold text-gray-800">12 - 16 Mei 2026</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">📍</span>
                      <div>
                        <p className="text-gray-400 text-[10px] font-semibold uppercase">Lokasi</p>
                        <p className="font-bold text-gray-800">Lapangan Kampus</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote / Catatan Box */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 text-xs text-blue-900 relative shadow-sm">
                  <span className="text-3xl text-blue-300 font-serif absolute top-2 left-3">“</span>
                  <p className="relative z-10 italic pl-4 leading-relaxed">
                    "Setiap karya memiliki cerita, setiap penampilan memiliki makna, dan setiap kreativitas layak mendapatkan apresiasi."
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* FOOTER BAWAH (TANPA BLOK KONTAK KAMPUS) */}
          <footer className="pt-6 border-t border-gray-200 text-[11px] text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo sibeo.jpeg" 
                alt="Logo SI-BEO" 
                className="w-8 h-8 object-contain rounded-xl bg-white p-0.5 shadow border border-gray-100"
              />
              <div>
                <span className="font-extrabold text-xs text-gray-900 tracking-tight block">SI-BEO</span>
                <span className="text-[10px] text-gray-400">Sistem Informasi Beasiswa &amp; Ormawa</span>
              </div>
            </div>

            <div className="text-center md:text-right text-xs text-gray-400">
              <p>© 2026 SI-BEO · Satu Akses, Beragam Peluang.</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default DetailKegiatan;