import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const ProfilBeasiswa: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Mengambil parameter URL (misal: ?tab=VDMI) untuk menentukan beasiswa mana yang ditampilkan
  const params = new URLSearchParams(location.search);
  const tabParam = params.get("tab");
  
  // Default ke "KIP Kuliah" jika parameter tidak valid atau kosong
  const activeTab = tabParam && ["KIP Kuliah", "VDMI", "Bank Indonesia"].includes(tabParam) 
    ? tabParam 
    : "KIP Kuliah";

  const beasiswaData: Record<string, {
    nama: string;
    instansi: string;
    deskripsi: string;
    persyaratan: string[];
    benefit: string[];
    caraMendaftar: string[];
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
      caraMendaftar: [
        "Mengunggah berkas melalui Gform yang dibagikan Biro Kemahasiswaan.",
        "Setelah dinyatakan lolos seleksi mengumpulkan hard file di ruangan Biro Kemahasiswaan.",
        "Setelah itu dilakukan seleksi wawancara dan penandatanganan surat pernyataan.",
        "Penentuan Penerima Beasiswa KIP Kuliah.",
        "Pengusulan ke pihak pengelola beasiswa (Pemerintah)."
      ]
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
      caraMendaftar: [
        "Mendapatkan informasi melalui promosi, flyer digital di media sosial dan Biro Kemahasiswaan, penempelan flyer di kampus, serta sosialisasi kegiatan.",
        "Mengunggah berkas pendaftaran melalui link resmi dari pihak pengelola Beasiswa VDMI.",
        "Setelah dinyatakan lolos seleksi awal, mengumpulkan hard file di ruangan Biro Kemahasiswaan.",
        "Menerima hasil lulus seleksi dari pihak pengelola Beasiswa VDMI dilanjutkan pengumuman resmi.",
        "Melakukan penandatanganan surat pernyataan."
      ]
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
      caraMendaftar: [
        "Mendapatkan informasi melalui promosi penerimaan mahasiswa baru, flyer digital, serta sosialisasi di kegiatan mahasiswa.",
        "Mengumpulkan berkas pendaftaran secara langsung di Biro Kemahasiswaan.",
        "Ketika dinyatakan lulus berkas, dilanjutkan dengan seleksi wawancara oleh pihak pengurus Bantuan Pendidikan Kebanksentralan (Bank Indonesia).",
        "Menunggu pengumuman kelulusan seleksi akhir."
      ]
    }
  };

  const current = beasiswaData[activeTab] || beasiswaData["KIP Kuliah"];

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
            <Link to="/kegiatan-agenda" className="text-gray-600 hover:text-blue-600 py-5 transition">
              Pengumuman
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

      {/* ================= HERO HEADER ================= */}
      <section className="bg-gradient-to-r from-[#0B1E36] via-[#12365F] to-[#1B437C] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          
          <div className="flex items-center gap-2 text-xs text-amber-300 font-bold">
            <Link to="/beasiswa" className="hover:underline">Beasiswa</Link>
            <span>/</span>
            <span>Detail Program</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              {current.nama}
            </h1>
            <p className="text-xs sm:text-sm text-gray-200">
              Dikelola oleh: <strong>{current.instansi}</strong>
            </p>
          </div>

        </div>
      </section>

      {/* ================= KONTEN DETAIL ================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        
        {/* Tombol Kembali */}
        <div className="mb-6 flex justify-start">
          <button 
            onClick={() => navigate("/beasiswa")}
            className="px-3.5 py-2 text-gray-500 hover:text-white hover:bg-[#0B1E36] rounded-xl text-xs font-bold transition cursor-pointer shadow-xs bg-white border border-gray-200"
          >
            Kembali ke Daftar Beasiswa
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          <div className="lg:col-span-2 space-y-6">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
              <h2 className="text-base font-bold text-gray-900">
                Tentang Beasiswa
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                {current.deskripsi}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
              <h2 className="text-base font-bold text-gray-900">
                Persyaratan Umum
              </h2>
              <ul className="space-y-2.5 text-xs text-gray-700 leading-relaxed">
                {current.persyaratan.map((syarat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-blue-600 font-bold mt-0.5">✓</span>
                    <span>{syarat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
              <h2 className="text-base font-bold text-gray-900">
                Benefit &amp; Manfaat
              </h2>
              <ul className="space-y-2.5 text-xs text-gray-700 leading-relaxed">
                {current.benefit.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold mt-0.5">★</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 border-t-4 border-t-amber-400 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-gray-900">
                Cara Mendaftar
              </h3>
              
              <ol className="space-y-3 text-xs text-gray-700 list-decimal list-inside leading-relaxed">
                {current.caraMendaftar.map((langkah, idx) => (
                  <li key={idx} className="pl-1">
                    <span className="font-medium text-gray-800">{langkah}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 text-xs space-y-2 text-blue-900">
              <span className="font-bold block">Punya Pertanyaan?</span>
              <p className="text-blue-800 text-[11px] leading-relaxed">
                Hubungi narahubung Biro Kemahasiswaan jika Anda mengalami kendala persyaratan berkas.
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

export default ProfilBeasiswa;