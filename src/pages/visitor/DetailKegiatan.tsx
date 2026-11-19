import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const DetailKegiatan: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Mengambil parameter URL (misal: ?kegiatan=Bakti Sosial) untuk menentukan kegiatan mana yang ditampilkan
  const params = new URLSearchParams(location.search);
  const kegiatanParam = params.get("kegiatan");
  
  const validKegiatan = [
    "Sosialisasi KIP", 
    "Bakti Sosial", 
    "Workshop BI", 
    "Pekan Kreasi", 
    "Sosialisasi VDMI", 
    "Musyawarah Kerja"
  ];

  // Default ke "Sosialisasi KIP" jika parameter tidak valid atau kosong
  const activeTab = kegiatanParam && validKegiatan.includes(kegiatanParam) 
    ? kegiatanParam 
    : "Sosialisasi KIP";

  const detailData: Record<string, {
    judul: string;
    jenis: string;
    kategori: string;
    kategoriBadge: string;
    penyelenggara: string;
    tanggal: string;
    lokasi: string;
    foto: string;
    tentang: string;
    agendaAcara: string[];
  }> = {
    "Sosialisasi KIP": {
      judul: "Sosialisasi & Bedah Persyaratan KIP Kuliah 2026",
      jenis: "Beasiswa",
      kategori: "Beasiswa",
      kategoriBadge: "bg-amber-400 text-gray-950",
      penyelenggara: "Biro Kemahasiswaan",
      tanggal: "20 November 2026, Pukul 09.00 WITA - Selesai",
      lokasi: "Aula Utama Kampus & Daring via Zoom Meeting",
      foto: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      tentang: "Kegiatan sosialisasi resmi yang diselenggarakan khusus bagi mahasiswa baru maupun aktif guna memberikan pemahaman menyeluruh mengenai mekanisme pendaftaran, kriteria kelayakan, pemberkasan Gform, hingga alur wawancara program bantuan sosial pendidikan KIP Kuliah tahun 2026/2027.",
      agendaAcara: [
        "Pembukaan dan sambutan oleh Wakil Rektor Bidang Kemahasiswaan dan Alumni.",
        "Pemaparan materi tata cara pengisian berkas KIP Kuliah oleh Kepala Biro Kemahasiswaan.",
        "Sesi simulasi pengunggahan berkas melalui portal kampus dan Google Form.",
        "Sesi tanya jawab terbuka (Q&A) bersama tim verifikator beasiswa.",
        "Penutupan dan dokumentasi bersama."
      ]
    },
    "Bakti Sosial": {
      judul: "Bakti Sosial Mahasiswa Peduli Lingkungan & Kesehatan Desa Binaan",
      jenis: "Ormawa",
      kategori: "Ormawa",
      kategoriBadge: "bg-blue-600 text-white",
      penyelenggara: "BEM Universitas",
      tanggal: "25 November 2026, Pukul 08.00 WITA - Selesai",
      lokasi: "Desa Sukamaju, Kec. Cisarua",
      foto: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80",
      tentang: "Program pengabdian masyarakat unggulan yang diinisiasi oleh Badan Eksekutif Mahasiswa (BEM) sebagai implementasi nyata Tri Dharma Perguruan Tinggi. Kegiatan ini berfokus pada penyuluhan kesehatan, pembagian sembako gratis, serta kerja bakti pembersihan fasilitas umum desa.",
      agendaAcara: [
        "Apel pelepasan kontingen relawan mahasiswa di halaman rektorat.",
        "Perjalanan menuju lokasi desa binaan dan koordinasi bersama perangkat desa.",
        "Pelaksanaan penyuluhan sanitasi air bersih dan pemeriksaan kesehatan gratis.",
        "Penyerahan bantuan sosial paket sembako secara simbolis kepada warga kurang mampu.",
        "Evaluasi kegiatan dan ramah tamah bersama warga setempat."
      ]
    },
    "Workshop BI": {
      judul: "Workshop Kepemimpinan & Management Beasiswa Prestasi Bank Indonesia",
      jenis: "Beasiswa",
      kategori: "Beasiswa",
      kategoriBadge: "bg-amber-400 text-gray-950",
      penyelenggara: "Kantor Perwakilan Bank Indonesia & Biro Kemahasiswaan",
      tanggal: "02 Desember 2026, Pukul 13.00 WITA - Selesai",
      lokasi: "Ruang Teater Hall B Kampus Terpadu",
      foto: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
      tentang: "Pelatihan eksklusif dan bedah esai motivasi untuk mempersiapkan mahasiswa menghadapi seleksi ketat Beasiswa Bank Indonesia (GenBI). Peserta akan mendapatkan wawasan langsung mengenai kepemimpinan, literasi keuangan, serta peluang pengembangan karier masa depan.",
      agendaAcara: [
        "Registrasi peserta dan pengecekan persyaratan administratif awal.",
        "Keynote speech dari pimpinan Kantor Perwakilan Bank Indonesia.",
        "Sesi bedah tips & trik penulisan esai serta simulasi wawancara beasiswa.",
        "Diskusi interaktif dan sharing session bersama alumni penerima beasiswa GenBI.",
        "Pengumuman doorprize dan sesi foto bersama."
      ]
    },
    "Pekan Kreasi": {
      judul: "Pekan Kreasi & Seni Mahasiswa: Harmoni Kampus Inklusif",
      jenis: "Ormawa",
      kategori: "Ormawa",
      kategoriBadge: "bg-blue-600 text-white",
      penyelenggara: "BEM & BPM Universitas",
      tanggal: "10 - 12 Desember 2026, Pukul 15.00 WITA - Selesai",
      lokasi: "Gedung Auditorium Utama Kampus",
      foto: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
      tentang: "Pagelaran festival seni, pentas tari daerah, konser akustik, dan pameran karya kreasi mahasiswa dari berbagai fakultas untuk mempererat kebersamaan serta menyalurkan bakat kreatif civitas akademika.",
      agendaAcara: [
        "Seremonial pembukaan oleh Rektor dan Presiden Mahasiswa.",
        "Penampilan pameran seni rupa dan karya inovasi mahasiswa.",
        "Lomba akustik antar program studi.",
        "Pentas puncak festival tari kreasi nusantara.",
        "Pengumuman pemenang lomba dan penutupan."
      ]
    },
    "Sosialisasi VDMI": {
      judul: "Sosialisasi Program Bantuan Pendidikan VDMI 2027",
      jenis: "Beasiswa",
      kategori: "Beasiswa",
      kategoriBadge: "bg-amber-400 text-gray-950",
      penyelenggara: "Yayasan VDMI & Biro Kemahasiswaan",
      tanggal: "15 Desember 2026, Pukul 10.00 WITA - Selesai",
      lokasi: "Auditorium Fakultas Teknik",
      foto: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      tentang: "Pemaparan lengkap mengenai persyaratan administratif, benefit tunjangan dana pendidikan bulanan, pelatihan kepemimpinan, serta tips lolos seleksi beasiswa internasional Van Deventer-Maas Indonesia.",
      agendaAcara: [
        "Pembukaan dan pengantar oleh perwakilan Yayasan VDMI.",
        "Penjelasan mendalam kriteria dan syarat kelayakan pendaftar.",
        "Tata cara pengunggahan berkas ke link resmi pengelola beasiswa.",
        "Sesi tanya jawab interaktif seputar kendala pemberkasan.",
        "Selesai dan penyerahan cinderamata."
      ]
    },
    "Musyawarah Kerja": {
      judul: "Musyawarah Kerja & Sidang Pleno Mahasiswa Semester Genap",
      jenis: "Ormawa",
      kategori: "Ormawa",
      kategoriBadge: "bg-blue-600 text-white",
      penyelenggara: "MPM & BPM Kampus",
      tanggal: "20 Desember 2026, Pukul 09.00 WITA - Selesai",
      lokasi: "Gedung Student Center Lt. 3",
      foto: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
      tentang: "Sidang pleno resmi organisasi kemahasiswaan untuk mengevaluasi laporan pertanggungjawaban tengah semester BEM, membahas revisi garis-garis besar haluan organisasi, serta pengesahan rancangan peraturan legislatif terbaru.",
      agendaAcara: [
        "Pembukaan sidang pleno dan pengesahan tata tertib sidang.",
        "Penyampaian laporan pertanggungjawaban (LPJ) program kerja BEM.",
        "Sesi tanggapan kritis, sanggahan, dan evaluasi dari Komisi MPM/BPM.",
        "Penetapan hasil sidang pleno dan penandatanganan berita acara.",
        "Doa penutup dan pembubaran sidang."
      ]
    }
  };

  const current = detailData[activeTab] || detailData["Sosialisasi KIP"];

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
            {/* Diperbaiki menjadi Agenda & Kegiatan */}
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

      {/* ================= HERO HEADER ================= */}
      <section className="bg-gradient-to-r from-[#0B1E36] via-[#12365F] to-[#1B437C] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-amber-300 font-bold">
            <Link to="/kegiatan-agenda" className="hover:underline">Agenda &amp; Kegiatan</Link>
            <span>/</span>
            <span>Detail Kegiatan</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className={`px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider shadow-sm ${current.kategoriBadge}`}>
              Jenis: {current.jenis}
            </span>
            <span className="text-xs text-gray-300 font-medium">Penyelenggara: <strong>{current.penyelenggara}</strong></span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
            {current.judul}
          </h1>
        </div>
      </section>

      {/* ================= KONTEN DETAIL KEGIATAN ================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        
        <div className="mb-6 flex justify-start">
          <button 
            onClick={() => navigate("/kegiatan-agenda")}
            className="px-3.5 py-2 text-gray-500 hover:text-white hover:bg-[#0B1E36] rounded-xl text-xs font-bold transition cursor-pointer shadow-xs bg-white border border-gray-200"
          >
            ← Kembali ke Daftar Kegiatan
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden bg-gray-100">
                <img 
                  src={current.foto} 
                  alt={current.judul} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
              <h2 className="text-base font-bold text-gray-900">
                Tentang Kegiatan
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {current.tentang}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
              <h2 className="text-base font-bold text-gray-900">
                Rangkaian &amp; Susunan Acara
              </h2>
              <ul className="space-y-2.5 text-xs text-gray-700">
                {current.agendaAcara.map((agenda, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-blue-600 font-bold mt-0.5">{idx + 1}.</span>
                    <span>{agenda}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 border-t-4 border-t-blue-600 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-gray-900">
                Informasi Pelaksanaan
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Jenis Kegiatan</span>
                  <span className="font-bold text-blue-600 uppercase tracking-wide">{current.jenis}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Tanggal &amp; Waktu</span>
                  <span className="font-semibold text-gray-800">{current.tanggal}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Lokasi / Tempat</span>
                  <span className="font-semibold text-gray-800 leading-relaxed block">{current.lokasi}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Penyelenggara</span>
                  <span className="font-semibold text-gray-800">{current.penyelenggara}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 text-xs space-y-2 text-blue-900">
              <span className="font-bold block">Butuh Informasi Tambahan?</span>
              <p className="text-blue-800 text-[11px] leading-relaxed">
                Silakan hubungi Biro Kemahasiswaan atau narahubung panitia penyelenggara jika Anda memiliki pertanyaan seputar agenda ini.
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
              <p className="font-bold text-gray-800 text-xs mb-1.5">Kontak Kampus</p>
              <p className="text-gray-600">Email: <span className="text-blue-600 font-medium">[tempatkan email resmi]</span></p>
              <p className="text-gray-600">Telepon: <span className="text-blue-600 font-medium">[tempatkan nomor resmi]</span></p>
              <p className="text-gray-600">Lokasi: <span className="text-blue-600 font-medium">[tempatkan alamat resmi]</span></p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-[10px] text-gray-400 gap-2">
            <p>© 2026 SI-BEO · Satu Akses, Beragam Peluang.</p>
            <div className="flex items-center gap-4">
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

export default DetailKegiatan;