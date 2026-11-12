import React from 'react';
import { useNavigate } from 'react-router-dom';

export const DetailKegiatan: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('ormawaToken');
    navigate('/ormawa/login');
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col font-sans text-gray-800 relative">
      <div className="flex flex-1">
        
        {/* ================= SIDEBAR KIRI ORMAWA ================= */}
        <aside className="w-64 bg-[#0B1E36] text-white flex flex-col justify-between p-4 shrink-0">
          <div>
            <div className="flex items-center gap-3 mb-8 px-2 pt-2">
              <img 
                src="/logo.jpg" 
                alt="Logo Kampus" 
                className="w-10 h-10 object-contain rounded-lg shrink-0 bg-white p-1 shadow"
              />
              <div>
                <span className="text-[11px] font-extrabold text-amber-400 tracking-wider uppercase block">
                  ORMAWA
                </span>
                <span className="text-[11px] text-gray-400 block">Portal Manajemen</span>
              </div>
            </div>

            <nav className="space-y-1 text-xs">
              <a href="/ormawa/dashboard" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📊</span>
                <span>Dashboard</span>
              </a>
              <a href="/ormawa/data-ormawa" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>👥</span>
                <span>Data Ormawa</span>
              </a>
              <a href="/ormawa/pengumuman" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📢</span>
                <span>Pengumuman</span>
              </a>
              <a href="/ormawa/proposal" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📄</span>
                <span>Proposal & Laporan</span>
              </a>
              <a href="/ormawa/pengumpulan" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📥</span>
                <span>Pengumpulan Laporan</span>
              </a>
              <a href="/ormawa/detail-kegiatan" className="flex items-center gap-3 px-3 py-2.5 bg-blue-600/40 text-blue-300 font-semibold rounded-lg transition border-l-4 border-blue-400">
                <span>📋</span>
                <span>Detail Kegiatan</span>
              </a>
              <a href="/ormawa/struktur" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>🌿</span>
                <span>Struktur Kepengurusan</span>
              </a>
              <a href="/ormawa/revisi" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>🔄</span>
                <span>Revisi Dokumen</span>
              </a>
              <a href="/ormawa/edit-profil" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>✏️</span>
                <span>Edit Profil</span>
              </a>
            </nav>
          </div>

          <div className="pt-4 border-t border-gray-700/50">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 px-3 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition shadow cursor-pointer"
            >
              <span>🚪</span>
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* ================= KONTEN UTAMA ================= */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="mb-6">
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
              LAPORAN / DETAIL KEGIATAN
            </p>
            <h1 className="text-xl font-bold text-gray-900">Detail Kegiatan</h1>
          </div>

          {/* Banner Kegiatan Utama (Sesuai Referensi Gambar) */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
            
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
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-100 bg-gray-50/50 text-xs">
              <div className="p-4 border-r border-gray-100 flex items-center gap-3">
                <span className="p-2 bg-blue-100 text-blue-600 rounded-lg">💡</span>
                <div>
                  <p className="font-bold text-gray-900">Seni & Kreativitas</p>
                  <p className="text-[10px] text-gray-500">Ekspresikan ide dan imajinasi</p>
                </div>
              </div>
              <div className="p-4 border-r border-gray-100 flex items-center gap-3">
                <span className="p-2 bg-amber-100 text-amber-600 rounded-lg">🎤</span>
                <div>
                  <p className="font-bold text-gray-900">Pertunjukan</p>
                  <p className="text-[10px] text-gray-500">Tari, musik, dan seni pertunjukan</p>
                </div>
              </div>
              <div className="p-4 flex items-center gap-3">
                <span className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">🤝</span>
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
                    Seminar Kepemimpinan Mahasiswa 2026 merupakan wadah bagi siswa dan mahasiswa untuk mengekspresikan kreativitas, mengembangkan bakat, serta menampilkan karya inspiratif[cite: 17]. Melalui kegiatan ini, setiap peserta memiliki kesempatan untuk menunjukkan potensi diri, berani berkarya, serta mengapresiasi nilai-nilai kepemimpinan dalam berbagai bentuk[cite: 17].
                  </p>
                </div>

                {/* Tujuan Kegiatan */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                    <span>🎯</span> Tujuan Kegiatan
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl space-y-1">
                      <p className="font-bold text-xs text-gray-900 flex items-center gap-2">
                        <span>💡</span> Mengembangkan kreativitas
                      </p>
                      <p className="text-[11px] text-gray-500">Mendorong peserta menghasilkan karya yang unik dan inovatif[cite: 17].</p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl space-y-1">
                      <p className="font-bold text-xs text-gray-900 flex items-center gap-2">
                        <span>⭐</span> Menampilkan bakat
                      </p>
                      <p className="text-[11px] text-gray-500">Memberikan ruang bagi peserta untuk menunjukkan kemampuan dan potensi[cite: 17].</p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl space-y-1">
                      <p className="font-bold text-xs text-gray-900 flex items-center gap-2">
                        <span>🤝</span> Membangun kebersamaan
                      </p>
                      <p className="text-[11px] text-gray-500">Mempererat hubungan antarmahasiswa melalui kolaborasi kegiatan[cite: 17].</p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl space-y-1">
                      <p className="font-bold text-xs text-gray-900 flex items-center gap-2">
                        <span>❤️</span> Mengapresiasi seni
                      </p>
                      <p className="text-[11px] text-gray-500">Menumbuhkan rasa cinta terhadap nilai-nilai kepemimpinan dan budaya[cite: 17].</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Kolom Kanan (Info Kegiatan & Quote Box) */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Kotak Info Kegiatan */}
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-4">
                  <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b pb-2">
                    📅 Info Kegiatan
                  </h3>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">📅</span>
                      <div>
                        <p className="text-gray-400 text-[10px] font-semibold uppercase">Tanggal Pelaksanaan</p>
                        <p className="font-bold text-gray-800">12 - 16 Mei 2026[cite: 17]</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">📍</span>
                      <div>
                        <p className="text-gray-400 text-[10px] font-semibold uppercase">Lokasi</p>
                        <p className="font-bold text-gray-800">Lapangan Kampus[cite: 17]</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote / Catatan Box */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 text-xs text-blue-900 relative">
                  <span className="text-3xl text-blue-300 font-serif absolute top-2 left-3">“</span>
                  <p className="relative z-10 italic pl-4 leading-relaxed">
                    "Setiap karya memiliki cerita, setiap penampilan memiliki makna, dan setiap kreativitas layak mendapatkan apresiasi."[cite: 17]
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* Footer */}
          <footer className="pt-6 border-t border-gray-200 text-[11px] text-gray-500 flex flex-col md:flex-row justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-gray-800">
                <div className="p-1.5 bg-[#1B437C] rounded-lg text-white text-xs">🛡️</div>
                <span>SI-BEO</span>
                <span className="text-[10px] text-gray-400 font-normal">Sistem Informasi Beasiswa dan Organisasi Mahasiswa</span>
              </div>
              <p className="text-[10px] text-gray-400 max-w-sm leading-relaxed">
                Platform informasi beasiswa dan organisasi kemahasiswaan untuk memudahkan pencarian peluang dan pengembangan diri di kampus.
              </p>
            </div>
            <div className="space-y-1.5">
              <p className="font-bold text-gray-700 uppercase tracking-wider text-[10px]">Kontak Kampus</p>
              <p>Email: <span className="text-blue-600 underline cursor-pointer">[tempatkan email resmi]</span></p>
              <p>Telepon: <span className="text-blue-600 underline cursor-pointer">[tempatkan nomor resmi]</span></p>
              <p>Lokasi: <span className="text-blue-600 underline cursor-pointer">[tempatkan alamat resmi]</span></p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default DetailKegiatan;