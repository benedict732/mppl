import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ProfilOrmawa: React.FC = () => {
  const [activeTab, setActiveTab] = useState("BEM");

  const ormawaData: Record<string, {
    nama: string;
    lingkup: string;
    tentang: string;
    visi: string;
    misi: string[];
    bidang: { nama: string; deskripsi: string }[];
    kontak: {
      email: string;
      narahubung: string;
      sekretariat: string;
      instagram: string;
    };
  }> = {
    "BEM": {
      nama: "Badan Eksekutif Mahasiswa (BEM Universitas)",
      lingkup: "Lembaga Eksekutif Tingkat Universitas",
      tentang: "BEM menjadi wadah aspirasi dan eksekutor program kemahasiswaan tingkat universitas. BEM berkolaborasi dengan fakultas dan biro kemahasiswaan untuk menciptakan ekosistem kampus yang progresif, inklusif, dan berprestasi.",
      visi: "Mewujudkan organisasi mahasiswa yang adaptif, transparan, dan berdampak nyata bagi seluruh civitas akademika.",
      misi: [
        "Menampung, mengadvokasi, dan merealisasikan aspirasi serta hak-hak mahasiswa.",
        "Mengembangkan potensi kepemimpinan dan keilmuan melalui program kerja strategis.",
        "Membangun sinergi kolaboratif lintas organisasi dan komunitas di dalam maupun luar kampus.",
        "Mendorong pengabdian masyarakat yang berorientasi pada pemecahan masalah riil."
      ],
      bidang: [
        { nama: "Departemen Advokasi & Kesejahteraan Mahasiswa", deskripsi: "Menangani isu UKT, beasiswa, dan perlindungan hak mahasiswa." },
        { nama: "Departemen Pengembangan Sumber Daya Manusia (PSDM)", deskripsi: "Kaderisasi, pelatihan kepemimpinan, dan peningkatan kapasitas organisasi." },
        { nama: "Departemen Hubungan Luar & Komunikasi", deskripsi: "Membangun kemitraan dengan instansi eksternal dan publikasi media." },
        { nama: "Departemen Sosial & Lingkungan Hidup", deskripsi: "Menggerakkan program bakti sosial, desa binaan, dan aksi lingkungan." }
      ],
      kontak: {
        email: "bem.universitas@kampus.ac.id",
        narahubung: "0812-3456-7890 (Sekretaris Jenderal)",
        sekretariat: "Gedung Student Center Lt. 2, Kampus Utama",
        instagram: "@bem_universitas"
      }
    },
    "MPM": {
      nama: "Majelis Permusyawaratan Mahasiswa (MPM)",
      lingkup: "Lembaga Legislatif & Yudikatif Mahasiswa",
      tentang: "MPM adalah pemegang kekuasaan perundangan dan musyawarah tertinggi bagi mahasiswa kampus. Bertugas menetapkan Anggaran Dasar/Anggaran Rumah Tangga (AD/ART) serta mengawasi kinerja eksekutif.",
      visi: "Menjadi lembaga legislatif mahasiswa yang independen, berintegritas, dan menjunjung tinggi demokrasi kampus.",
      misi: [
        "Merumuskan dan memperbarui produk hukum kemahasiswaan yang berkeadilan.",
        "Melakukan fungsi pengawasan anggaran dan evaluasi program kerja BEM secara berkala.",
        "Menjadi fasilitator musyawarah mufakat dalam penyelesaian sengketa ormawa."
      ],
      bidang: [
        { nama: "Komisi I - Legislasi & Regulasi", deskripsi: "Penyusunan naskah akademik dan produk ketetapan ormawa." },
        { nama: "Komisi II - Pengawasan Anggaran & LPJ", deskripsi: "Audit kepatuhan pelaksanaan program dan transparansi dana kemahasiswaan." },
        { nama: "Komisi III - Aspirasi & Sidang", deskripsi: "Penyelenggaraan sidang pleno dan audiensi terbuka antarlembaga." }
      ],
      kontak: {
        email: "mpm.kampus@kampus.ac.id",
        narahubung: "0813-9876-5432 (Ketua Komisi I)",
        sekretariat: "Gedung Student Center Lt. 3 Ruang 302",
        instagram: "@mpm_kampus"
      }
    },
    "BPM": {
      nama: "Badan Perwakilan Mahasiswa (BPM)",
      lingkup: "Badan Representasi Mahasiswa",
      tentang: "BPM berfungsi sebagai jembatan langsung suara mahasiswa di tingkat fakultas dan program studi ke tingkat pimpinan dekanat maupun ormawa universitas.",
      visi: "Perwakilan mahasiswa yang responsif, solutif, dan dekat dengan kehidupan akademik mahasiswa.",
      misi: [
        "Mengawal transparansi evaluasi akademik dan fasilitas perkuliahan.",
        "Menampung kritik, saran, serta harapan mahasiswa fakultas secara berkala.",
        "Mengawal kebijakan fakultas agar tetap berpihak kepada kepentingan mahasiswa."
      ],
      bidang: [
        { nama: "Divisi Penjaringan Aspirasi", deskripsi: "Survei kepuasan layanan kampus dan kotak aspirasi mahasiswa." },
        { nama: "Divisi Kajian & Kebijakan", deskripsi: "Analisis isu akademik dan kebijakan dekanat." }
      ],
      kontak: {
        email: "bpm.official@kampus.ac.id",
        narahubung: "0811-2233-4455 (Humas BPM)",
        sekretariat: "Gedung Pusat Informasi Mahasiswa Lt. 1",
        instagram: "@bpm_official"
      }
    }
  };

  const current = ormawaData[activeTab];

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
            <Link to="/ormawa" className="text-blue-600 font-bold border-b-2 border-blue-600 py-5 transition">
              Ormawa
            </Link>
            <Link to="/berita-kegiatan" className="text-gray-600 hover:text-blue-600 py-5 transition">
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

      {/* ================= HERO HEADER ================= */}
      <section className="bg-gradient-to-r from-[#0B1E36] via-[#12365F] to-[#1B437C] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-amber-300 font-bold">
            <Link to="/ormawa" className="hover:underline">Ormawa</Link>
            <span>/</span>
            <span>Profil Organisasi</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
            {current.nama}
          </h1>
          <p className="text-xs sm:text-sm text-gray-200">
            {current.lingkup} • Periode Kepengurusan 2026/2027
          </p>

          {/* Ormawa Tabs */}
          <div className="flex flex-wrap gap-2 pt-4">
            {["BEM", "BPM"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  activeTab === tab
                    ? "bg-amber-400 text-gray-950 shadow-md"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KONTEN DETAIL & SIDEBAR ================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Kolom Kiri: Profil & Struktur */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Card Tentang */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
              <h2 className="text-base font-bold text-gray-900">
                Tentang Organisasi
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                {current.tentang}
              </p>
            </div>

            {/* Card Visi & Misi */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div>
                <h2 className="text-base font-bold text-gray-900 mb-1.5">
                  Visi Organisasi
                </h2>
                <p className="text-xs text-gray-600 leading-relaxed p-3 bg-amber-50/60 border border-amber-200/50 rounded-xl font-medium text-amber-900">
                  "{current.visi}"
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">
                  Misi Utama
                </h3>
                <ul className="space-y-2 text-xs text-gray-600">
                  {current.misi.map((m, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card Bidang / Departemen */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <h2 className="text-base font-bold text-gray-900">
                Bidang &amp; Departemen
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {current.bidang.map((b, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-1">
                    <h4 className="text-xs font-bold text-gray-900">{b.nama}</h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed">{b.deskripsi}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Kolom Kanan: Kontak & Informasi Sekretariat */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 border-t-4 border-t-blue-600 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-gray-900">
                Kontak &amp; Sekretariat
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Email Resmi</span>
                  <span className="font-semibold text-blue-600">{current.kontak.email}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Narahubung</span>
                  <span className="font-semibold text-gray-800">{current.kontak.narahubung}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Instagram</span>
                  <span className="font-semibold text-blue-600">{current.kontak.instagram}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Sekretariat</span>
                  <span className="font-semibold text-gray-800 leading-relaxed block">{current.kontak.sekretariat}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <button 
                  onClick={() => alert(`Silakan hubungi narahubung ${current.nama} di ${current.kontak.narahubung}.`)}
                  className="w-full py-2.5 bg-[#1B437C] hover:bg-blue-900 text-white rounded-xl text-xs font-bold shadow-md transition cursor-pointer"
                >
                  Hubungi Pengurus
                </button>
              </div>
            </div>

            {/* Informasi Bergabung */}
            <div className="bg-amber-50/70 p-5 rounded-2xl border border-amber-200 text-xs space-y-2 text-amber-950">
              <span className="font-bold block">Tertarik Bergabung?</span>
              <p className="text-[11px] leading-relaxed text-amber-900">
                Perekrutan anggota baru dan magang kepengurusan dibuka setiap awal semester gasal melalui portal SI-BEO.
              </p>
            </div>
          </div>

        </div>
      </main>

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

export default ProfilOrmawa;
