import React from "react";
import { Link } from "react-router-dom";

export const Beranda: React.FC = () => {
  const beasiswaList = [
    {
      judul: "KIP Kuliah 2026",
      kategori: "Pemerintah",
      deskripsi: "Bantuan biaya pendidikan penuh dan tunjangan biaya hidup bagi mahasiswa berprestasi dari keluarga prasejahtera.",
      link: "/beasiswa/detail"
    },
    {
      judul: "Beasiswa Kebanksentralan BI",
      kategori: "Instansi",
      deskripsi: "Program beasiswa Bank Indonesia untuk mahasiswa semester 3-6 dengan IPK memuaskan dan aktif berorganisasi.",
      link: "/beasiswa/detail"
    },
    {
      judul: "Beasiswa Prestasi Akademik",
      kategori: "Kampus",
      deskripsi: "Apresiasi universitas bagi mahasiswa peraih IPK tertinggi di setiap fakultas untuk semester genap.",
      link: "/beasiswa/detail"
    }
  ];

  const kegiatanList = [
    {
      judul: "Bakti Sosial Mahasiswa Peduli",
      penyelenggara: "BEM Universitas",
      tanggal: "15 November 2026",
      deskripsi: "Kegiatan pengabdian masyarakat di desa binaan, pembagian paket sembako, dan edukasi kesehatan keluarga."
    },
    {
      judul: "Pekan Seni & Budaya Nusantara",
      penyelenggara: "BEM Departemen Seni & Budaya",
      tanggal: "22 November 2026",
      deskripsi: "Pentas teater, tari tradisional, serta pameran karya seni rupa karya mahasiswa lintas program studi."
    },
    {
      judul: "Seminar Nasional Karir & Kepemimpinan",
      penyelenggara: "BPM Kampus",
      tanggal: "30 November 2026",
      deskripsi: "Sesi bimbingan karir bersama pembicara industri terkemuka mengenai persiapan memasuki dunia kerja modern."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col font-sans text-gray-800">
      
      {/* ================= NAVBAR VISITOR ================= */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo Kampus */}
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

          {/* Menu Navigasi Utama */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold">
            <Link to="/" className="text-blue-600 font-bold border-b-2 border-blue-600 py-5 transition">
              Beranda
            </Link>
            <Link to="/beasiswa" className="text-gray-600 hover:text-blue-600 py-5 transition">
              Beasiswa
            </Link>
            <Link to="/ormawa" className="text-gray-600 hover:text-blue-600 py-5 transition">
              Ormawa
            </Link>
            <Link to="/berita-kegiatan" className="text-gray-600 hover:text-blue-600 py-5 transition">
              Berita &amp; Kegiatan
            </Link>
          </nav>

          {/* Tombol Akses Portal Login */}
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
      <section className="bg-gradient-to-r from-[#0B1E36] via-[#12365F] to-[#1B437C] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="max-w-2xl space-y-4">
            <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-full text-xs font-bold uppercase tracking-wider">
              ✦ Portal Kemahasiswaan &amp; Layanan Informasi
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Kembangkan Potensimu Lewat Beasiswa &amp; Organisasi Mahasiswa
            </h1>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-xl">
              Satu portal terpadu untuk menemukan kesempatan beasiswa, mengenal organisasi kemahasiswaan kampus, serta memantau berita dan kegiatan terbaru.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link 
                to="/beasiswa" 
                className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 text-xs font-extrabold rounded-xl shadow-lg transition"
              >
                Jelajahi Beasiswa
              </Link>
              <Link 
                to="/ormawa" 
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold rounded-xl transition"
              >
                Lihat Organisasi
              </Link>
            </div>
          </div>

          {/* Hero Banner Ilustrasi / Card */}
          <div className="w-full lg:w-96 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-gray-950 flex items-center justify-center text-xl font-bold">
                🎓
              </div>
              <div>
                <h3 className="text-sm font-bold">SI-BEO Terpadu</h3>
                <p className="text-xs text-gray-300">Akses Cepat Informasi Kampus</p>
              </div>
            </div>
            <p className="text-xs text-gray-200 leading-relaxed">
              Memudahkan mahasiswa aktif dalam mengajukan program beasiswa, menyimak LPJ dan program kerja Ormawa secara transparan.
            </p>
            <div className="pt-2 border-t border-white/10 flex justify-between text-xs">
              <div>
                <span className="block font-bold text-amber-400 text-base">15+</span>
                <span className="text-[10px] text-gray-300">Program Beasiswa</span>
              </div>
              <div>
                <span className="block font-bold text-amber-400 text-base">BEM &amp; BPM</span>
                <span className="text-[10px] text-gray-300">Lembaga Aktif</span>
              </div>
              <div>
                <span className="block font-bold text-amber-400 text-base">100%</span>
                <span className="text-[10px] text-gray-300">Layanan Daring</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION INFORMASI BEASISWA ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Informasi Beasiswa
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Temukan peluang beasiswa internal dan eksternal terbaru untuk mendukung studimu.
            </p>
          </div>
          <Link to="/beasiswa" className="text-xs font-bold text-blue-600 hover:text-blue-800 transition">
            Lihat Semua Beasiswa →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {beasiswaList.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md text-[10px] font-bold uppercase tracking-wider mb-3">
                  {item.kategori}
                </span>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.judul}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  {item.deskripsi}
                </p>
              </div>
              <Link 
                to={item.link} 
                className="text-xs font-bold text-blue-600 hover:text-blue-800 transition flex items-center gap-1.5"
              >
                <span>Baca selengkapnya</span>
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION KEGIATAN & BERITA ORMAWA ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-16 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Kegiatan &amp; Berita Ormawa
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Kabar kegiatan mahasiswa terkini dari BEM dan BPM di lingkungan kampus.
            </p>
          </div>
          <Link to="/berita-kegiatan" className="text-xs font-bold text-blue-600 hover:text-blue-800 transition">
            Lihat Semua Berita →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {kegiatanList.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition space-y-3"
            >
              <div className="flex justify-between items-center text-[11px] text-gray-400">
                <span className="font-semibold text-blue-600">{item.penyelenggara}</span>
                <span>{item.tanggal}</span>
              </div>
              <h3 className="text-base font-bold text-gray-900">
                {item.judul}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {item.deskripsi}
              </p>
            </div>
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

export default Beranda;
