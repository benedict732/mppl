import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface KegiatanItem {
  id: number;
  judul: string;
  jenis: "beasiswa" | "ormawa";
  kategori: string;
  tanggal: string;
  penyelenggara: string;
  deskripsi: string;
  lokasi: string;
  foto: string;
  urlKey: string; // Kunci unik untuk parameter URL
}

export const KegiatanAgenda: React.FC = () => {
  const [filter, setFilter] = useState<string>("semua");
  const navigate = useNavigate();

  const daftarKegiatan: KegiatanItem[] = [
    {
      id: 1,
      judul: "Sosialisasi & Bedah Persyaratan KIP Kuliah 2026",
      jenis: "beasiswa",
      kategori: "Beasiswa",
      tanggal: "20 November 2026",
      penyelenggara: "Biro Kemahasiswaan",
      deskripsi: "Panduan lengkap tata cara pendaftaran, verifikasi berkas, dan sesi tanya jawab langsung seputar beasiswa KIP Kuliah tahun akademik 2026/2027.",
      lokasi: "Aula Utama & Daring Zoom",
      foto: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      urlKey: "Sosialisasi KIP"
    },
    {
      id: 2,
      judul: "Bakti Sosial Mahasiswa Peduli Lingkungan & Kesehatan Desa Binaan",
      jenis: "ormawa",
      kategori: "Ormawa",
      tanggal: "25 November 2026",
      penyelenggara: "BEM Universitas",
      deskripsi: "Penyuluhan sanitasi air bersih, pembagian sembako, dan pengobatan gratis bagi 200 warga desa binaan universitas sebagai wujud Tri Dharma Perguruan Tinggi.",
      lokasi: "Desa Sukamaju, Kec. Cisarua",
      foto: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      urlKey: "Bakti Sosial"
    },
    {
      id: 3,
      judul: "Workshop Kepemimpinan & Management Beasiswa Prestasi Bank Indonesia",
      jenis: "beasiswa",
      kategori: "Beasiswa",
      tanggal: "02 Desember 2026",
      penyelenggara: "Kantor Perwakilan Bank Indonesia & Biro Kemahasiswaan",
      deskripsi: "Pelatihan pengembangan soft skills, personal branding, serta persiapan seleksi wawancara khusus calon penerima beasiswa Bank Indonesia (GenBI).",
      lokasi: "Ruang Teater Hall B",
      foto: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      urlKey: "Workshop BI"
    },
    {
      id: 4,
      judul: "Pekan Kreasi & Seni Mahasiswa: Harmoni Kampus Inklusif",
      jenis: "ormawa",
      kategori: "Ormawa",
      tanggal: "10 - 12 Desember 2026",
      penyelenggara: "BEM & BPM Universitas",
      deskripsi: "Pagelaran festival tari daerah, konser akustik, dan pameran karya kreasi mahasiswa untuk mempererat kebersamaan antar program studi.",
      lokasi: "Gedung Auditorium Utama Kampus",
      foto: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
      urlKey: "Pekan Kreasi"
    },
    {
      id: 5,
      judul: "Sosialisasi Program Bantuan Pendidikan VDMI 2027",
      jenis: "beasiswa",
      kategori: "Beasiswa",
      tanggal: "15 Desember 2026",
      penyelenggara: "Yayasan VDMI & Biro Kemahasiswaan",
      deskripsi: "Pemaparan persyaratan, benefit tunjangan dana pendidikan, serta tips lolos seleksi beasiswa internasional Van Deventer-Maas Indonesia.",
      lokasi: "Auditorium Fakultas Teknik",
      foto: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      urlKey: "Sosialisasi VDMI"
    },
    {
      id: 6,
      judul: "Musyawarah Kerja & Sidang Pleno Mahasiswa Semester Genap",
      jenis: "ormawa",
      kategori: "Ormawa",
      tanggal: "20 Desember 2026",
      penyelenggara: "MPM & BPM Kampus",
      deskripsi: "Penyampaian evaluasi laporan pertanggungjawaban tengah semester BEM serta pembahasan rancangan peraturan organisasi kemahasiswaan terbaru.",
      lokasi: "Gedung Student Center Lt. 3",
      foto: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      urlKey: "Musyawarah Kerja"
    }
  ];

  const filteredKegiatan = daftarKegiatan.filter((item) => {
    if (filter === "semua") return true;
    return item.jenis === filter;
  });

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
            <Link to="/kegiatan-agenda" className="text-blue-600 font-bold border-b-2 border-blue-600 py-5 transition">
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

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-[#0B1E36] via-[#12365F] to-[#1B437C] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-full text-xs font-bold uppercase tracking-wider">
            ✦ Publikasi &amp; Agenda Kampus
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Agenda &amp; Kegiatan Mahasiswa
          </h1>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl">
            Temukan berbagai informasi jadwal penting, sosialisasi program beasiswa resmi, hingga kegiatan organisasi kemahasiswaan (BEM &amp; BPM) untuk mendukung pengembangan potensi diri Anda di kampus.
          </p>
        </div>
      </section>

      {/* ================= DAFTAR KEGIATAN & AGENDA ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        
        <div className="mb-6 flex justify-start">
          <button 
            onClick={() => navigate("/")}
            className="px-3.5 py-2 text-gray-500 hover:text-white hover:bg-[#0B1E36] rounded-xl text-xs font-bold transition cursor-pointer shadow-xs bg-white border border-gray-200"
          >
            Kembali ke Beranda
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-gray-900">
            Daftar Agenda &amp; Kegiatan ({filteredKegiatan.length})
          </h2>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-500">Filter Kategori:</span>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-white border border-gray-300 text-gray-800 text-xs font-semibold rounded-xl px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition cursor-pointer"
            >
              <option value="semua">Semua Kategori</option>
              <option value="beasiswa">Beasiswa</option>
              <option value="ormawa">Ormawa</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredKegiatan.map((item) => (
            <article 
              key={item.id} 
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full bg-gray-100 overflow-hidden">
                  <img 
                    src={item.foto} 
                    alt={item.judul} 
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm ${
                    item.jenis === "beasiswa" ? "bg-amber-400 text-gray-950" : "bg-blue-600 text-white"
                  }`}>
                    {item.kategori}
                  </span>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="text-[11px] font-semibold text-blue-600">
                    📅 {item.tanggal}
                  </div>

                  <h3 className="text-base font-bold text-gray-900 leading-snug">
                    {item.judul}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                    {item.deskripsi}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 space-y-3">
                <div className="pt-3 border-t border-gray-100 text-[11px] text-gray-500 space-y-1">
                  <p className="truncate">🏛️ <strong className="text-gray-700">{item.penyelenggara}</strong></p>
                  <p className="truncate">📍 <span className="text-gray-400">{item.lokasi}</span></p>
                </div>

                {/* Mengarahkan ke halaman detail dengan membawa parameter query key */}
                <Link 
                  to={`/kegiatan-agenda/detail?kegiatan=${encodeURIComponent(item.urlKey)}`} 
                  className="w-full block text-center py-2.5 bg-[#1B437C] hover:bg-blue-900 text-white rounded-xl text-xs font-bold shadow-sm transition"
                >
                  Lihat Detail →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

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

export default KegiatanAgenda;