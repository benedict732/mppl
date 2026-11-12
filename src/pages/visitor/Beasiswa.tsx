import React from "react";
import { Link } from "react-router-dom";

interface BeasiswaItem {
  id: number;
  judul: string;
  penyelenggara: string;
  kategori: string;
  deskripsi: string;
  kuota: string;
  status: "Dibuka" | "Segera Dibuka" | "Ditutup";
  tenggat: string;
}

export const Beasiswa: React.FC = () => {
  const daftarBeasiswa: BeasiswaItem[] = [
    {
      id: 1,
      judul: "KIP Kuliah 2026",
      penyelenggara: "Kemendikbudristek",
      kategori: "Pemerintah",
      deskripsi: "Bantuan biaya pendidikan penuh dan tunjangan biaya hidup bulanan bagi mahasiswa berprestasi dari keluarga prasejahtera.",
      kuota: "250 Mahasiswa",
      status: "Dibuka",
      tenggat: "30 November 2026"
    },
    {
      id: 2,
      judul: "Beasiswa Bank Indonesia",
      penyelenggara: "Bank Indonesia",
      kategori: "Instansi",
      deskripsi: "Program beasiswa prestisius untuk mahasiswa aktif semester 3 hingga 6 dengan capaian IPK minimal 3.00.",
      kuota: "50 Mahasiswa",
      status: "Dibuka",
      tenggat: "15 Desember 2026"
    },
    {
      id: 3,
      judul: "Beasiswa Prestasi Akademik Kampus",
      penyelenggara: "Universitas",
      kategori: "Internal",
      deskripsi: "Apresiasi potongan biaya kuliah bagi mahasiswa peraih IPK tertinggi di tingkat fakultas dan program studi.",
      kuota: "100 Mahasiswa",
      status: "Segera Dibuka",
      tenggat: "20 Januari 2027"
    },
    {
      id: 4,
      judul: "Beasiswa Van Deventer-Maas Indonesia (VDMI)",
      penyelenggara: "Yayasan VDMI",
      kategori: "Yayasan",
      deskripsi: "Dukungan dana pendidikan serta pelatihan kepemimpinan dan bahasa Inggris bagi mahasiswa jenjang S1 dan D4.",
      kuota: "30 Mahasiswa",
      status: "Ditutup",
      tenggat: "10 Oktober 2026"
    },
    {
      id: 5,
      judul: "Beasiswa Unggulan Prestasi Mahasiswa",
      penyelenggara: "Biro Kemahasiswaan",
      kategori: "Internal",
      deskripsi: "Beasiswa khusus mahasiswa yang memiliki prestasi kejuaraan akademik maupun kepemimpinan minimal tingkat provinsi.",
      kuota: "20 Mahasiswa",
      status: "Dibuka",
      tenggat: "05 Desember 2026"
    },
    {
      id: 6,
      judul: "Bantuan Dana Riset Skripsi Mahasiswa",
      penyelenggara: "LPPM Universitas",
      kategori: "Internal",
      deskripsi: "Bantuan dana pelaksanaan penelitian dan publikasi jurnal ilmiah bagi mahasiswa tingkat akhir.",
      kuota: "75 Mahasiswa",
      status: "Dibuka",
      tenggat: "31 Desember 2026"
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

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-[#0B1E36] via-[#12365F] to-[#1B437C] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-full text-xs font-bold uppercase tracking-wider">
            ✦ Informasi Beasiswa Aktif
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Peluang Beasiswa Mahasiswa
          </h1>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl">
            Jelajahi beragam program beasiswa dari pemerintah, universitas, maupun lembaga mitra eksternal untuk mendukung pembiayaan studimu.
          </p>
        </div>
      </section>

      {/* ================= DAFTAR BEASISWA ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            Daftar Program Beasiswa ({daftarBeasiswa.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {daftarBeasiswa.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex justify-between items-start gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md text-[10px] font-bold uppercase tracking-wider">
                    {item.kategori}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    item.status === "Dibuka" ? "bg-emerald-100 text-emerald-700" :
                    item.status === "Segera Dibuka" ? "bg-amber-100 text-amber-800" : "bg-gray-100 text-gray-600"
                  }`}>
                    {item.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {item.judul}
                </h3>
                <p className="text-[11px] text-gray-400 font-medium mb-3">
                  Penyelenggara: {item.penyelenggara}
                </p>

                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {item.deskripsi}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 space-y-3">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Kuota: <strong className="text-gray-800">{item.kuota}</strong></span>
                  <span>Batas: <strong className="text-gray-800">{item.tenggat}</strong></span>
                </div>

                <Link 
                  to="/beasiswa/detail" 
                  className="w-full block text-center py-2 bg-[#1B437C] hover:bg-blue-900 text-white rounded-xl text-xs font-bold shadow-sm transition"
                >
                  Lihat Detail &amp; Panduan →
                </Link>
              </div>
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

export default Beasiswa;
