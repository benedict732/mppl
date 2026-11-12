import React from "react";
import { Link } from "react-router-dom";

interface BeritaItem {
  id: number;
  judul: string;
  kategori: string;
  tanggal: string;
  penyelenggara: string;
  deskripsi: string;
  lokasi: string;
}

export const BeritaKegiatan: React.FC = () => {
  const daftarBerita: BeritaItem[] = [
    {
      id: 1,
      judul: "Bakti Sosial Mahasiswa Peduli Lingkungan & Kesehatan Desa Binaan",
      kategori: "Sosial",
      tanggal: "15 November 2026",
      penyelenggara: "BEM Universitas",
      deskripsi: "Penyuluhan sanitasi air bersih, pembagian sembako, dan pengobatan gratis bagi 200 warga desa binaan universitas.",
      lokasi: "Desa Sukamaju, Kec. Cisarua"
    },
    {
      id: 2,
      judul: "Pekan Kreasi & Seni Mahasiswa: Harmoni Kampus Inklusif",
      kategori: "Kreativitas",
      tanggal: "22 - 25 November 2026",
      penyelenggara: "BEM Departemen Minat & Bakat",
      deskripsi: "Pagelaran festival tari daerah, konser akustik, dan pameran karya kreasi mahasiswa BEM dan BPM.",
      lokasi: "Gedung Auditorium Utama Kampus"
    },
    {
      id: 3,
      judul: "Seminar Nasional Karir & Kepemimpinan Menghadapi Era AI",
      kategori: "Akademik",
      tanggal: "30 November 2026",
      penyelenggara: "BPM Kampus",
      deskripsi: "Menghadirkan narasumber dari perusahaan teknologi multinasional untuk membedah strategi adaptasi karir generasi muda.",
      lokasi: "Ruang Teater Hall B"
    },
    {
      id: 4,
      judul: "Turnamen Futsal & Basket Antar Fakultas Mahasiswa 2026",
      kategori: "Olahraga",
      tanggal: "05 - 10 Desember 2026",
      penyelenggara: "BEM Departemen Olahraga",
      deskripsi: "Ajang olahraga persahabatan mahasiswa yang diikuti oleh seluruh perwakilan kontingen fakultas.",
      lokasi: "GOR Kampus Terpadu"
    },
    {
      id: 5,
      judul: "Sosialisasi Program Kreativitas Mahasiswa (PKM) Pendanaan 2027",
      kategori: "Akademik",
      tanggal: "12 Desember 2026",
      penyelenggara: "BEM & Biro Kemahasiswaan",
      deskripsi: "Bimbingan teknis penyusunan proposal PKM 8 bidang bersama reviewer nasional untuk memaksimalkan pendanaan riset.",
      lokasi: "Daring via Zoom & Aula Rektorat"
    },
    {
      id: 6,
      judul: "Musyawarah Kerja & Sidang Pleno Mahasiswa Semester Genap",
      kategori: "Kemahasiswaan",
      tanggal: "18 Desember 2026",
      penyelenggara: "BPM Kampus",
      deskripsi: "Penyampaian evaluasi laporan pertanggungjawaban tengah semester BEM dan pembahasan agenda kemahasiswaan.",
      lokasi: "Gedung Student Center Lt. 3"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col font-sans text-gray-800">
      
      {/* ================= NAVBAR VISITOR ================= */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/logo.jpg" 
              alt="Logo Kampus" 
              className="w-9 h-9 object-contain rounded-lg p-0.5 bg-white shadow-sm border border-gray-100"
            />
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">
                UNIVERSITAS
              </span>
              <span className="text-sm font-extrabold text-[#0B1E36] tracking-tight block">
                PORTAL KEMAHASISWAAN
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold">
            <Link to="/" className="text-gray-600 hover:text-blue-600 py-5 transition">
              Beranda
            </Link>
            <Link to="/beasiswa" className="text-gray-600 hover:text-blue-600 py-5 transition">
              Beasiswa
            </Link>
            <Link to="/ormawa" className="text-gray-600 hover:text-blue-600 py-5 transition">
              Ormawa
            </Link>
            <Link to="/berita-kegiatan" className="text-blue-600 font-bold border-b-2 border-blue-600 py-5 transition">
              Berita &amp; Kegiatan
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link 
              to="/ormawa/login" 
              className="px-3.5 py-2 text-xs font-bold text-gray-700 hover:text-blue-900 rounded-xl transition"
            >
              Login Ormawa
            </Link>
            <Link 
              to="/biro/login" 
              className="px-4 py-2 bg-[#0B1E36] hover:bg-blue-900 text-white text-xs font-bold rounded-xl shadow-sm transition"
            >
              Login Biro
            </Link>
          </div>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-[#0B1E36] via-[#12365F] to-[#1B437C] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-full text-xs font-bold uppercase tracking-wider">
            ✦ Publikasi &amp; Agenda Kampus
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Berita &amp; Kegiatan Mahasiswa (BEM &amp; BPM)
          </h1>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl">
            Ikuti informasi terkini seputar agenda akademik, kompetisi, pengabdian masyarakat, dan kegiatan mahasiswa BEM dan BPM di kampus.
          </p>
        </div>
      </section>

      {/* ================= DAFTAR BERITA & KEGIATAN ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            Agenda &amp; Berita Terbaru ({daftarBerita.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {daftarBerita.map((item) => (
            <article 
              key={item.id} 
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex justify-between items-center text-[11px] text-gray-400 mb-2">
                  <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 rounded-md font-bold text-[10px] uppercase">
                    {item.kategori}
                  </span>
                  <span>{item.tanggal}</span>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                  {item.judul}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {item.deskripsi}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 space-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                  <span className="text-blue-600 font-semibold">🏛️ {item.penyelenggara}</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 text-[11px]">
                  <span>📍 {item.lokasi}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= FOOTER SI-BEO ================= */}
      <footer className="mt-auto bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row justify-between gap-8 pb-8">
            <div className="flex items-start gap-3.5 max-w-md">
              <div className="w-10 h-10 rounded-xl bg-[#1B437C] flex items-center justify-center text-white shrink-0 shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="18" r="2.5" />
                  <circle cx="18" cy="6" r="2.5" />
                  <path d="M7.5 16.5 L16.5 7.5" />
                </svg>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-extrabold text-sm text-gray-900 tracking-tight">SI-BEO</span>
                  <span className="text-[10px] text-gray-400">Sistem Informasi Beasiswa &amp; Ormawa</span>
                </div>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Platform informasi beasiswa dan organisasi kemahasiswaan untuk memudahkan pencarian peluang dan pengembangan diri di kampus.
                </p>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-gray-600">
              <p className="font-bold text-gray-900 text-xs mb-2">Kontak Kampus</p>
              <p>Email: <span className="text-blue-600 font-medium">[tempatkan email resmi]</span></p>
              <p>Telepon: <span className="text-blue-600 font-medium">[tempatkan nomor resmi]</span></p>
              <p>Lokasi: <span className="text-blue-600 font-medium">[tempatkan alamat resmi]</span></p>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-2">
            <p>© 2026 SIMPUL · Satu Akses, Beragam Peluang.</p>
            <div className="flex items-center gap-4 text-xs">
              <span className="hover:text-gray-600 cursor-pointer">Konten program ilustratif</span>
              <span>•</span>
              <span className="hover:text-gray-600 cursor-pointer">Pusat bantuan</span>
              <span>•</span>
              <span className="hover:text-gray-600 cursor-pointer">Kebijakan privasi</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default BeritaKegiatan;
