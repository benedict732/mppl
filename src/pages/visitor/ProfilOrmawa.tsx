import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const ProfilOrmawa: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Mengambil parameter URL (misal: ?tab=BPM) untuk menentukan ormawa mana yang ditampilkan
  const params = new URLSearchParams(location.search);
  const tabParam = params.get("tab");
  
  // Default ke "MPM" jika parameter tidak valid atau kosong
  const activeTab = tabParam && ["MPM", "BPM", "BEM"].includes(tabParam) 
    ? tabParam 
    : "MPM";

  const ormawaData: Record<string, {
    nama: string;
    pengelola: string;
    tentang: string;
    visi: string;
    misi: string[];
    bidang: { nama: string; deskripsi: string }[];
    kontak: {
      email: string;
      narahubung: string;
      instagram: string;
    };
  }> = {
    "MPM": {
      nama: "Majelis Permusyawaratan Mahasiswa (MPM)",
      pengelola: "Dewan Pimpinan Tertinggi Legislatif Mahasiswa",
      tentang: "MPM merupakan lembaga legislatif tertinggi dalam organisasi kemahasiswaan di tingkat Perguruan Tinggi, bertugas untuk menyerap dan menyampaikan aspirasi mahasiswa, membuat dan menetapkan aturan organisasi, serta melakukan pengawasan terhadap kinerja BEM dan BPM[cite: 2].",
      visi: "Menjadi lembaga legislatif mahasiswa yang independen, berintegritas, dan menjunjung tinggi demokrasi kampus.",
      misi: [
        "Merumuskan dan memperbarui produk hukum kemahasiswaan yang berkeadilan.",
        "Melakukan fungsi pengawasan anggaran dan evaluasi program kerja BEM secara berkala.",
        "Menjadi fasilitator musyawarah mufakat dalam penyelesaian sengketa ormawa."
      ],
      bidang: [
        { nama: "Komisi I - Legislasi & Regulasi", deskripsi: "Penyusunan naskah akademik dan produk ketetapan ormawa." },
        { nama: "Komisi II - Pengawasan & LPJ", deskripsi: "Audit kepatuhan pelaksanaan program dan transparansi dana kemahasiswaan." }
      ],
      kontak: {
        email: "mpm.kampus@kampus.ac.id",
        narahubung: "0813-9876-5432 (Ketua Komisi I)",
        instagram: "@mpm_kampus"
      }
    },
    "BPM": {
      nama: "Badan Perwakilan Mahasiswa (BPM)",
      pengelola: "Dewan Perwakilan Legislatif Fakultas & Universitas",
      tentang: "BPM merupakan lembaga legislatif organisasi mahasiswa, yang bertugas untuk membantu MPM dalam menerima dan menyampaikan aspirasi mahasiswa, melakukan pengawasan terhadap kinerja BEM, dan membantu MPM menyusun peraturan organisasi[cite: 2].",
      visi: "Perwakilan mahasiswa yang responsif, solutif, dan dekat dengan kehidupan akademik mahasiswa.",
      misi: [
        "Mengawal transparansi evaluasi akademik dan fasilitas perkuliahan.",
        "Menampung kritik, saran, serta harapan mahasiswa secara berkala.",
        "Mengawal kebijakan agar tetap berpihak kepada kepentingan mahasiswa."
      ],
      bidang: [
        { nama: "Divisi Penjaringan Aspirasi", deskripsi: "Survei kepuasan layanan kampus dan kotak aspirasi mahasiswa." },
        { nama: "Divisi Kajian & Kebijakan", deskripsi: "Analisis isu akademik dan kebijakan kampus." }
      ],
      kontak: {
        email: "bpm.official@kampus.ac.id",
        narahubung: "0811-2233-4455 (Humas BPM)",
        instagram: "@bpm_official"
      }
    },
    "BEM": {
      nama: "Badan Eksekutif Mahasiswa (BEM)",
      pengelola: "Pengurus Harian Eksekutif Mahasiswa Universitas",
      tentang: "BEM merupakan lembaga eksekutif organisasi mahasiswa, yang berkegiatan untuk membuat kegiatan mahasiswa dan program kerja mahasiswa baik internal dan eksternal kampus, sebagai contoh kegiatan wajib yang diselenggarakan BEM yaitu PKKMB, kegiatan Pengabdian Kepada Masyarakat, dan menghadiri undangan perwakilan mahasiswa[cite: 2].",
      visi: "Mewujudkan organisasi mahasiswa yang adaptif, transparan, dan berdampak nyata bagi seluruh civitas akademika.",
      misi: [
        "Menampung, mengadvokasi, dan merealisasikan aspirasi serta hak-hak mahasiswa.",
        "Mengembangkan potensi kepemimpinan dan keilmuan melalui program kerja strategis.",
        "Membangun sinergi kolaboratif lintas organisasi dan komunitas di dalam maupun luar kampus.",
        "Mendorong pengabdian masyarakat yang berorientasi pada pemecahan masalah riil."
      ],
      bidang: [
        { nama: "Departemen Advokasi & Kesejahteraan", deskripsi: "Menangani isu UKT, beasiswa, dan perlindungan hak mahasiswa." },
        { nama: "Departemen PSDM", deskripsi: "Kaderisasi, pelatihan kepemimpinan, dan peningkatan kapasitas organisasi." }
      ],
      kontak: {
        email: "bem.universitas@kampus.ac.id",
        narahubung: "0812-3456-7890 (Sekretaris Jenderal)",
        instagram: "@bem_universitas"
      }
    }
  };

  const current = ormawaData[activeTab] || ormawaData["MPM"];

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
            {/* Memperbaiki path tujuan rute ke /kegiatan-agenda */}
            <Link to="/kegiatan-agenda" className="text-gray-600 hover:text-blue-600 py-5 transition">
              Agenda &amp; Kegiatan
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link 
              to="/ormawa/login" 
              className="px-4 py-2 text-gray-500 hover:text-white hover:bg-[#0B1E36] text-xs font-bold rounded-xl transition"
            >
              Login Ormawa
            </Link>
            <Link 
              to="/biro/login" 
              className="px-4 py-2 text-gray-500 hover:text-white hover:bg-[#0B1E36] text-xs font-bold rounded-xl transition"
            >
              Login Biro
            </Link>
          </div>
        </div>
      </header>

      {/* ================= HERO HEADER (Tanpa Tombol Tab Pilihan) ================= */}
      <section className="bg-gradient-to-r from-[#0B1E36] via-[#12365F] to-[#1B437C] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-amber-300 font-bold">
            <Link to="/ormawa" className="hover:underline">Ormawa</Link>
            <span>/</span>
            <span>Profil Organisasi</span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              {current.nama}
            </h1>
            <p className="text-xs sm:text-sm text-gray-200 mt-1">
              Pengelola: <strong>{current.pengelola}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ================= KONTEN DETAIL ================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        
        <div className="mb-6 flex justify-start">
          <button 
            onClick={() => navigate("/ormawa")}
            className="px-3.5 py-2 text-gray-500 hover:text-white hover:bg-[#0B1E36] rounded-xl text-xs font-bold transition cursor-pointer shadow-xs bg-white border border-gray-200"
          >
            Kembali ke Daftar Ormawa
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          <div className="lg:col-span-2 space-y-6">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
              <h2 className="text-base font-bold text-gray-900">
                Tentang Organisasi
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                {current.tentang}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
              <h2 className="text-base font-bold text-gray-900">
                Visi Organisasi
              </h2>
              <p className="text-xs text-gray-700 leading-relaxed p-3 bg-amber-50/60 border border-amber-200/50 rounded-xl font-medium">
                "{current.visi}"
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
              <h2 className="text-base font-bold text-gray-900">
                Misi Organisasi
              </h2>
              <ul className="space-y-2.5 text-xs text-gray-700 leading-relaxed">
                {current.misi.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-blue-600 font-bold mt-0.5">✓</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 border-t-4 border-t-blue-600 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-gray-900">
                Kontak
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Email</span>
                  <span className="font-semibold text-blue-600">{current.kontak.email}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Narahubung (No. Telp Mhs)</span>
                  <span className="font-semibold text-gray-800">{current.kontak.narahubung}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Instagram</span>
                  <span className="font-semibold text-blue-600">{current.kontak.instagram}</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50/70 p-5 rounded-2xl border border-amber-200 text-xs space-y-2 text-amber-950">
              <span className="font-bold block">Tertarik Bergabung?</span>
              <p className="text-[11px] leading-relaxed text-amber-900">
                Perekrutan anggota baru dan magang kepengurusan dibuka setiap awal semester melalui portal SI-BEO.
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="mt-auto bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row justify-between gap-8 pb-8">
            <div className="flex items-start gap-3.5 max-w-md">
              <img 
                src="/logo sibeo.jpeg" 
                alt="Logo SI-BEO" 
                className="w-10 h-10 object-contain rounded-xl bg-white p-0.5 shadow shrink-0 border border-gray-100"
              />
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
            <p>© 2026 SI-BEO · Satu Akses, Beragam Peluang.</p>
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