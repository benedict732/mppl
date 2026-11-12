import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ProfilBeasiswa: React.FC = () => {
  const [activeTab, setActiveTab] = useState("KIP Kuliah");

  const beasiswaData: Record<string, {
    nama: string;
    instansi: string;
    deskripsi: string;
    persyaratan: string[];
    benefit: string[];
    periode: string;
    status: string;
    kuota: string;
  }> = {
    "KIP Kuliah": {
      nama: "Kartu Indonesia Pintar Kuliah (KIP Kuliah 2026)",
      instansi: "Puslapdik Kemendikbudristek RI",
      deskripsi: "KIP Kuliah adalah program bantuan sosial pemerintah berupa pembebasan biaya kuliah dan pemberian uang saku bulanan guna menjamin keberlanjutan studi mahasiswa dari keluarga berpenghasilan rendah.",
      persyaratan: [
        "Siswa SMA/SMK/MA sederajat yang lulus pada tahun berjalan atau maksimal 2 tahun sebelumnya.",
        "Terdaftar sebagai mahasiswa aktif tahun akademik 2026/2027.",
        "Memiliki Kartu KIP / terdata dalam DTKS Kementerian Sosial atau bukti keterangan penghasilan keluarga.",
        "Memiliki potensi akademik baik dan lolos seleksi penerimaan mahasiswa baru."
      ],
      benefit: [
        "Pembebasan biaya kuliah (UKT) 100% langsung ke rekening universitas.",
        "Bantuan biaya hidup bulanan yang disalurkan per semester.",
        "Pendampingan dan pembinaan berkala dari Biro Kemahasiswaan."
      ],
      periode: "01 Oktober - 30 November 2026",
      status: "Pendaftaran Dibuka",
      kuota: "250 Penerima"
    },
    "VDMI": {
      nama: "Beasiswa Van Deventer-Maas Indonesia (VDMI)",
      instansi: "Yayasan Van Deventer-Maas Stichting",
      deskripsi: "Beasiswa internasional yang mendanai mahasiswa berprestasi dari latar belakang keluarga sederhana dengan komitmen sosial tinggi.",
      persyaratan: [
        "Mahasiswa aktif jenjang S1/D4 minimal semester 2 hingga semester 6.",
        "IPK minimal 3.00 pada semester terakhir.",
        "Berasal dari keluarga kurang mampu secara finansial.",
        "Aktif dalam kegiatan kemahasiswaan atau sosial kemasyarakatan."
      ],
      benefit: [
        "Tunjangan dana pendidikan bulanan sebesar Rp 750.000,-.",
        "Pelatihan kepemimpinan, workshop kewirausahaan, dan kursus bahasa Inggris.",
        "Bonus kelulusan tepat waktu."
      ],
      periode: "10 Februari - 10 Maret 2027",
      status: "Segera Dibuka",
      kuota: "30 Penerima"
    },
    "Bank Indonesia": {
      nama: "Beasiswa Prestasi Generasi Baru Indonesia (GenBI)",
      instansi: "Kantor Perwakilan Bank Indonesia",
      deskripsi: "Program beasiswa unggulan Bank Indonesia untuk membentuk calon pemimpin masa depan yang berintegritas dan siap mengabdi bagi negeri.",
      persyaratan: [
        "Telah menyelesaikan minimal 40 SKS dengan IPK minimal 3.00 (skala 4.00).",
        "Usia maksimal 23 tahun pada saat mendaftar.",
        "Tidak sedang menerima beasiswa lain atau berada dalam ikatan dinas.",
        "Menulis esai motivasi dan resume portofolio prestasi."
      ],
      benefit: [
        "Dana beasiswa sebesar Rp 1.000.000,- per bulan selama satu tahun kepengurusan.",
        "Keanggotaan resmi komunitas GenBI dengan akses ke program leadership camp BI.",
        "Peluang magang di lingkungan Kantor Perwakilan Bank Indonesia."
      ],
      periode: "15 November - 15 Desember 2026",
      status: "Pendaftaran Dibuka",
      kuota: "50 Penerima"
    }
  };

  const current = beasiswaData[activeTab];

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
            <Link to="/beasiswa" className="text-blue-600 font-bold border-b-2 border-blue-600 py-5 transition">
              Beasiswa
            </Link>
            <Link to="/ormawa" className="text-gray-600 hover:text-blue-600 py-5 transition">
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
            <Link to="/beasiswa" className="hover:underline">Beasiswa</Link>
            <span>/</span>
            <span>Detail Program</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
            {current.nama}
          </h1>
          <p className="text-xs sm:text-sm text-gray-200">
            Dikelola oleh: <strong>{current.instansi}</strong>
          </p>

          {/* Program Tabs */}
          <div className="flex flex-wrap gap-2 pt-4">
            {["KIP Kuliah", "VDMI", "Bank Indonesia"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
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
          
          {/* Kolom Kiri: Rincian Lengkap */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Card Tentang */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
              <h2 className="text-base font-bold text-gray-900">
                Tentang Beasiswa
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                {current.deskripsi}
              </p>
            </div>

            {/* Card Persyaratan */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
              <h2 className="text-base font-bold text-gray-900">
                Persyaratan Umum
              </h2>
              <ul className="space-y-2 text-xs text-gray-600">
                {current.persyaratan.map((syarat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>{syarat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card Benefit */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
              <h2 className="text-base font-bold text-gray-900">
                Benefit &amp; Manfaat
              </h2>
              <ul className="space-y-2 text-xs text-gray-600">
                {current.benefit.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold">★</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Kolom Kanan: Status & Pendaftaran */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 border-t-4 border-t-amber-400 shadow-sm space-y-5">
              <h3 className="text-sm font-bold text-gray-900">
                Informasi Pendaftaran
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Status Pendaftaran</span>
                  <span className="font-bold text-emerald-600 text-sm">{current.status}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Periode Seleksi</span>
                  <span className="font-semibold text-gray-800">{current.periode}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Alokasi Kuota</span>
                  <span className="font-semibold text-gray-800">{current.kuota}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <button 
                  onClick={() => alert(`Informasi pendaftaran ${current.nama} dapat diajukan via portal Kemahasiswaan.`)}
                  className="w-full py-2.5 bg-[#1B437C] hover:bg-blue-900 text-white rounded-xl text-xs font-bold shadow-md transition cursor-pointer"
                >
                  Ajukan Pendaftaran Beasiswa
                </button>
                <p className="text-[10px] text-gray-400 text-center mt-2">
                  Pastikan dokumen berkas sudah lengkap sebelum mengirimkan data.
                </p>
              </div>
            </div>

            {/* Bantuan */}
            <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 text-xs space-y-2 text-blue-900">
              <span className="font-bold block">Punya Pertanyaan?</span>
              <p className="text-blue-800 text-[11px] leading-relaxed">
                Hubungi narahubung Biro Kemahasiswaan jika Anda mengalami kendala persyaratan berkas.
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

export default ProfilBeasiswa;
