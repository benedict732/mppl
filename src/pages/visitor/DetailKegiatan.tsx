import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { listPengumuman, type ItemPengumuman } from "../biro/Pengumuman";

const urlKeyByPengumumanId: Record<number, string> = {
  1: "kip-kuliah-2026",
  2: "oprec-bem-2026",
  3: "wawancara-kebanksentralan",
  4: "pekan-seni-budaya",
  5: "sosialisasi-vdmi-2026",
  6: "rapat-evaluasi-bpm",
  7: "sidang-pleno-mpm",
  8: "bakti-sosial-desa-binaan"
};

const agendaAcaraByPengumumanId: Record<number, string[]> = {
  1: [
    "Pembukaan dan sambutan oleh pimpinan Biro Kemahasiswaan.",
    "Pemaparan alur pendaftaran dan syarat berkas KIP Kuliah 2026.",
    "Verifikasi dokumen administratif dan transkrip nilai.",
    "Sesi tanya jawab terbuka (Q&A) bersama tim pengelola.",
    "Penutupan dan informasi lanjutan di portal SI-BEO."
  ],
  2: [
    "Pembukaan dan pengenalan profil kepengurusan BEM.",
    "Pemaparan program kerja divisi dan syarat pendaftaran anggota.",
    "Sesi diskusi interaktif bersama pengurus aktif.",
    "Penjelasan jadwal seleksi wawancara dan administrasi.",
    "Penutupan dan sesi tanya jawab."
  ],
  3: [
    "Registrasi peserta yang lolos seleksi administrasi.",
    "Arahan teknis pelaksanaan sesi wawancara tatap muka.",
    "Pelaksanaan sesi wawancara per kandidat.",
    "Rekapitulasi penilaian tim pewawancara.",
    "Penutupan."
  ],
  4: [
    "Pembukaan Pekan Seni & Budaya Kampus.",
    "Pameran karya seni dan pertunjukan budaya mahasiswa.",
    "Pentas seni kolaborasi unit kegiatan mahasiswa.",
    "Apresiasi peserta dan dokumentasi kegiatan.",
    "Penutupan acara."
  ],
  5: [
    "Pembukaan sosialisasi Beasiswa VDMI 2026.",
    "Pemaparan kriteria berkas dan tahapan verifikasi awal.",
    "Panduan pengisian formulir dan kelengkapan administrasi.",
    "Sesi tanya jawab peserta.",
    "Penutupan."
  ],
  6: [
    "Pembukaan rapat evaluasi program kerja dan anggaran.",
    "Pemaparan capaian program kerja per organisasi.",
    "Evaluasi penggunaan anggaran dan kendala pelaksanaan.",
    "Perumusan rekomendasi tindak lanjut.",
    "Penutupan rapat."
  ],
  7: [
    "Pembukaan sidang pleno terbuka.",
    "Penyampaian laporan pertanggungjawaban kegiatan.",
    "Tanggapan dan evaluasi peserta sidang.",
    "Pengesahan hasil sidang pleno.",
    "Penutupan sidang."
  ],
  8: [
    "Persiapan dan keberangkatan tim menuju desa binaan.",
    "Koordinasi bersama perangkat desa setempat.",
    "Pelaksanaan edukasi lingkungan dan layanan kesehatan gratis.",
    "Interaksi bersama warga desa binaan.",
    "Penutupan dan kepulangan tim."
  ]
};

export const DetailKegiatan: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const kegiatanParam = params.get("kegiatan");

  const detailData: Record<
    string,
    {
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
    }
  > = listPengumuman.reduce((acc, item: ItemPengumuman) => {
    const key = urlKeyByPengumumanId[item.id] || String(item.id);
    const tanggalGabung = [
      item.tanggalAcara || item.tanggal,
      item.waktuPelaksanaan ? `Pukul ${item.waktuPelaksanaan}` : ""
    ]
      .filter(Boolean)
      .join(", ");

    acc[key] = {
      judul: item.judul,
      jenis: item.kategori,
      kategori: item.kategori,
      kategoriBadge:
        item.kategori === "Beasiswa"
          ? "bg-amber-400 text-gray-950"
          : "bg-blue-600 text-white",
      penyelenggara: item.organisasi,
      tanggal: tanggalGabung,
      lokasi: item.lokasi || "Kampus Utama",
      foto:
        item.gambar[0] ||
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
      tentang: item.isi,
      agendaAcara: agendaAcaraByPengumumanId[item.id] || [
        "Pembukaan kegiatan.",
        "Pelaksanaan agenda utama sesuai jadwal.",
        "Sesi diskusi dan tanya jawab.",
        "Penutupan kegiatan."
      ]
    };
    return acc;
  }, {} as Record<string, {
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
  }>);

  const defaultKey = urlKeyByPengumumanId[1] || "kip-kuliah-2026";
  const current = (kegiatanParam && detailData[kegiatanParam]) || detailData[defaultKey];

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
            <Link to="/kegiatan-agenda" className="hover:underline">Pengumuman</Link>
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