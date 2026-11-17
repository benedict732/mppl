import React, { useState } from "react";
import { Link } from "react-router-dom";

interface BeasiswaItem {
  id: number;
  judul: string;
  kategori: string;
  tagFilter: 'KIP' | 'VDMI' | 'BI';
  deskripsi: string;
  pengumumanBiro: string;
}

interface KegiatanItem {
  id: number;
  judul: string;
  penyelenggara: string;
  tagFilter: 'MPM' | 'BPM' | 'BEM';
  tanggal: string;
  deskripsi: string;
  pengumumanBiro: string;
}

export const Beranda: React.FC = () => {
  // State Filter Beasiswa & Ormawa
  const [filterBeasiswa, setFilterBeasiswa] = useState<string>("semua");
  const [filterOrmawa, setFilterOrmawa] = useState<string>("semua");

  // State Pop-up Modal
  const [selectedItem, setSelectedItem] = useState<{
    tipe: 'beasiswa' | 'kegiatan';
    judul: string;
    penyelenggaraOrKategori: string;
    tanggalOrDeskripsi: string;
    isiFormatBiro: string;
  } | null>(null);

  const beasiswaList: BeasiswaItem[] = [
    {
      id: 1,
      judul: "KIP Kuliah 2026",
      kategori: "Pemerintah",
      tagFilter: "KIP",
      deskripsi: "Bantuan biaya pendidikan penuh dan tunjangan biaya hidup bagi mahasiswa berprestasi dari keluarga prasejahtera.",
      pengumumanBiro: "PENGUMUMAN RESMI BIRO KEMAHASISWAAN: Seleksi administrasi dan verifikasi berkas fisik KIP Kuliah 2026 wajib melampirkan KHS semester terakhir, slip rekening listrik, serta surat pernyataan keaktifan organisasi. Batas pengumpulan berkas ke loket biro adalah tanggal 28 November 2026."
    },
    {
      id: 2,
      judul: "Beasiswa Kebanksentralan BI",
      kategori: "Instansi",
      tagFilter: "BI",
      deskripsi: "Program beasiswa Bank Indonesia untuk mahasiswa semester 3-6 dengan IPK memuaskan dan aktif berorganisasi.",
      pengumumanBiro: "PENGUMUMAN RESMI BIRO KEMAHASISWAAN: Pendaftaran Beasiswa Bank Indonesia (BI) dibuka untuk mahasiswa aktif S1. Syarat utama minimal IPK 3.00, melampirkan surat rekomendasi akademisi, dan bersedia aktif dalam komunitas Generasi Baru Indonesia (GenBI)."
    },
    {
      id: 3,
      judul: "Beasiswa VDMI (Vanguard Fellowship)",
      kategori: "Yayasan",
      tagFilter: "VDMI",
      deskripsi: "Dukungan finansial dan program pengembangan kepemimpinan bagi mahasiswa terpilih dari yayasan VDMI.",
      pengumumanBiro: "PENGUMUMAN RESMI BIRO KEMAHASISWAAN: Pengumuman kelayakan penerima beasiswa VDMI tahap wawancara akan dilaksanakan secara daring. Peserta diharapkan menyiapkan transkrip nilai resmi dan esai motivasi dalam bahasa Inggris."
    }
  ];

  const kegiatanList: KegiatanItem[] = [
    {
      id: 1,
      judul: "Bakti Sosial Mahasiswa Peduli",
      penyelenggara: "BEM Universitas",
      tagFilter: "BEM",
      tanggal: "15 November 2026",
      deskripsi: "Kegiatan pengabdian masyarakat di desa binaan, pembagian paket sembako, dan edukasi kesehatan keluarga.",
      pengumumanBiro: "CATATAN & PENGUMUMAN BIRO: Seluruh proposal kegiatan bakti sosial yang dikoordinasikan oleh BEM telah diverifikasi dan disetujui untuk dilaksanakan dengan tetap memperhatikan protokol ketertiban kampus."
    },
    {
      id: 2,
      judul: "Rapat Koordinasi Pengawasan Anggaran",
      penyelenggara: "BPM Fakultas",
      tagFilter: "BPM",
      tanggal: "22 November 2026",
      deskripsi: "Peninjauan draf laporan pertanggungjawaban kegiatan dan transparansi alokasi dana organisasi mahasiswa.",
      pengumumanBiro: "CATATAN & PENGUMUMAN BIRO: Sidang pleno terbuka pengawasan anggaran oleh BPM wajib dihadiri oleh seluruh ketua divisi keuangan masing-masing ormawa."
    },
    {
      id: 3,
      judul: "Sidang Pleno Terbuka Evaluasi Kinerja",
      penyelenggara: "MPM Kampus",
      tagFilter: "MPM",
      tanggal: "30 November 2026",
      deskripsi: "Sidang akbar tahunan untuk mengevaluasi produk hukum kemahasiswaan dan kinerja eksekutif-legislatif.",
      pengumumanBiro: "CATATAN & PENGUMUMAN BIRO: Pemberitahuan resmi kepada seluruh ormawa untuk menyerahkan laporan tengah tahun kepengurusan paling lambat 3 hari sebelum sidang dimulai."
    }
  ];

  // Filter Data Beasiswa
  const filteredBeasiswa = beasiswaList.filter(item => {
    if (filterBeasiswa === "semua") return true;
    return item.tagFilter.toLowerCase() === filterBeasiswa.toLowerCase();
  });

  // Filter Data Kegiatan Ormawa
  const filteredKegiatan = kegiatanList.filter(item => {
    if (filterOrmawa === "semua") return true;
    return item.tagFilter.toLowerCase() === filterOrmawa.toLowerCase();
  });

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

          {/* Tombol Akses Portal Login (Keduanya Polos, Muncul Bar Saat Hover) */}
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

          {/* Hero Banner Card dengan Logo SI-BEO */}
          <div className="w-full lg:w-96 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo sibeo.jpeg" 
                alt="Logo SI-BEO" 
                className="w-10 h-10 object-contain rounded-xl bg-white p-1 shadow"
              />
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
                <span className="block font-bold text-amber-400 text-base">MPM, BEM, BPM</span>
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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Informasi Beasiswa
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Temukan peluang beasiswa internal dan eksternal terbaru berdasarkan pengumuman resmi biro.
            </p>
          </div>

          {/* Filter Dropdown Beasiswa (semua, KIP, VDMI, BI) */}
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-gray-600">Filter:</span>
            <select
              value={filterBeasiswa}
              onChange={(e) => setFilterBeasiswa(e.target.value)}
              className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-xs"
            >
              <option value="semua">Semua</option>
              <option value="KIP">KIP</option>
              <option value="VDMI">VDMI</option>
              <option value="BI">BI</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredBeasiswa.length > 0 ? (
            filteredBeasiswa.map((item) => (
              <div 
                key={item.id} 
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
                <button 
                  onClick={() => setSelectedItem({
                    tipe: 'beasiswa',
                    judul: item.judul,
                    penyelenggaraOrKategori: item.kategori,
                    tanggalOrDeskripsi: item.deskripsi,
                    isiFormatBiro: item.pengumumanBiro
                  })}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 transition flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <span>Baca selengkapnya</span>
                  <span>→</span>
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-3 py-8 text-center text-gray-400 text-xs">
              Tidak ada data beasiswa untuk kategori ini.
            </div>
          )}
        </div>
      </section>

      {/* ================= SECTION KEGIATAN & BERITA ORMAWA ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-16 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Kegiatan &amp; Berita Ormawa
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Kabar kegiatan mahasiswa terkini berdasarkan pengumuman resmi lembaga kampus.
            </p>
          </div>

          {/* Filter Dropdown Kegiatan & Berita Ormawa (semua, MPM, BPM, BEM) */}
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-gray-600">Filter:</span>
            <select
              value={filterOrmawa}
              onChange={(e) => setFilterOrmawa(e.target.value)}
              className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-xs"
            >
              <option value="semua">Semua</option>
              <option value="MPM">MPM</option>
              <option value="BPM">BPM</option>
              <option value="BEM">BEM</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredKegiatan.length > 0 ? (
            filteredKegiatan.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex justify-between items-center text-[11px] text-gray-400 mb-2">
                    <span className="font-semibold text-blue-600 px-2 py-0.5 bg-blue-50/60 rounded">{item.penyelenggara}</span>
                    <span>{item.tanggal}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {item.judul}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {item.deskripsi}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedItem({
                    tipe: 'kegiatan',
                    judul: item.judul,
                    penyelenggaraOrKategori: item.penyelenggara,
                    tanggalOrDeskripsi: item.tanggal,
                    isiFormatBiro: item.pengumumanBiro
                  })}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 transition flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <span>Baca selengkapnya</span>
                  <span>→</span>
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-3 py-8 text-center text-gray-400 text-xs">
              Tidak ada data kegiatan untuk lembaga ini.
            </div>
          )}
        </div>
      </section>

      {/* ================= MODAL POP-UP BACA SELENGKAPNYA ================= */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider block">
                  {selectedItem.tipe === 'beasiswa' ? `Kategori: ${selectedItem.penyelenggaraOrKategori}` : `Penyelenggara: ${selectedItem.penyelenggaraOrKategori}`}
                </span>
                <h3 className="text-base font-bold text-gray-900 mt-0.5">{selectedItem.judul}</h3>
              </div>
              <button 
                onClick={() => setSelectedItem(null)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition cursor-pointer font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 bg-blue-50/60 border border-blue-100 rounded-xl text-gray-700 leading-relaxed space-y-2">
                <p className="font-bold text-blue-900">Format / Pengumuman Resmi Biro:</p>
                <p>{selectedItem.isiFormatBiro}</p>
              </div>
            </div>

            <div className="flex justify-end pt-3 border-t">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2 bg-[#1B437C] hover:bg-blue-900 text-white rounded-xl text-xs font-bold transition cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= FOOTER SI-BEO ================= */}
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