import React, { useState } from 'react';

export interface ItemPengumuman {
  id: number;
  judul: string;
  kategori: 'Beasiswa' | 'Ormawa';
  organisasi: string;
  tahunAkademik: string;
  gambar: string[];
  isi: string;
  tanggal: string;
  lokasi?: string;
  waktuPelaksanaan?: string;
  tanggalAcara?: string;
}

export const listPengumuman: ItemPengumuman[] = [
  {
    id: 1,
    judul: 'Pembukaan Pendaftaran Beasiswa KIP Kuliah 2026',
    kategori: 'Beasiswa',
    organisasi: 'KIP Kuliah',
    tahunAkademik: '2026/2027',
    gambar: ['https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&q=80'],
    isi: 'Pendaftaran beasiswa KIP Kuliah resmi dibuka untuk mahasiswa aktif angkatan 2026. Segera lengkapi persyaratan berkas administratif dan transkrip nilai sebelum tenggat waktu yang ditentukan.',
    tanggal: '10 November 2026',
    lokasi: 'Auditorium Utama Kampus',
    tanggalAcara: '15 November 2026',
    waktuPelaksanaan: '09:00 - Selesai WITA'
  },
  {
    id: 2,
    judul: 'Open Recruitment Anggota BEM 2026',
    kategori: 'Ormawa',
    organisasi: 'BEM',
    tahunAkademik: '2026/2027',
    gambar: ['https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80'],
    isi: 'Mari bergabung dan berkontribusi aktif dalam kepengurusan Badan Eksekutif Mahasiswa (BEM) periode 2026/2027. Terbuka bagi seluruh mahasiswa aktif semester 2 sampai semester 4.',
    tanggal: '05 November 2026',
    lokasi: 'Gedung Sekretariat Ormawa Lt. 2',
    tanggalAcara: '12 November 2026',
    waktuPelaksanaan: '14:00 - 17:00 WITA'
  },
  {
    id: 3,
    judul: 'Seleksi Wawancara Beasiswa Kebanksentralan',
    kategori: 'Beasiswa',
    organisasi: 'Kebanksentralan',
    tahunAkademik: '2026/2027',
    gambar: ['https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&q=80'],
    isi: 'Pengumuman penting bagi seluruh kandidat lolos administrasi beasiswa Kebanksentralan. Jadwal sesi wawancara tatap muka dapat langsung dicek pada lampiran dokumen.',
    tanggal: '01 November 2026',
    lokasi: 'Ruang Rapat Biro Kemahasiswaan Lt. 1',
    tanggalAcara: '19 November 2026',
    waktuPelaksanaan: '08:30 - 15:00 WITA'
  },
  {
    id: 4,
    judul: 'Pekan Seni & Budaya Kampus - BEM',
    kategori: 'Ormawa',
    organisasi: 'BEM',
    tahunAkademik: '2025/2026',
    gambar: ['https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&q=80'],
    isi: 'Saksikan pertunjukan pameran seni dan pentas budaya tahunan yang diselenggarakan secara meriah oleh BEM bersama seluruh unit kegiatan mahasiswa.',
    tanggal: '25 Oktober 2026',
    lokasi: 'Lapangan Basket Kampus Utama',
    tanggalAcara: '30 Oktober 2026',
    waktuPelaksanaan: '16:00 - 21:00 WITA'
  },
  {
    id: 5,
    judul: 'Sosialisasi & Verifikasi Berkas Beasiswa VDMI 2026',
    kategori: 'Beasiswa',
    organisasi: 'VDMI',
    tahunAkademik: '2026/2027',
    gambar: ['https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80'],
    isi: 'Sosialisasi teknis pengisian formulir, surat keterangan tidak mampu, dan verifikasi berkas awal bagi calon penerima Beasiswa VDMI.',
    tanggal: '12 November 2026',
    lokasi: 'Ruang Seminar Gedung Utama Lt. 2',
    tanggalAcara: '24 November 2026',
    waktuPelaksanaan: '10:00 - 13:00 WITA'
  },
  {
    id: 6,
    judul: 'Rapat Evaluasi Program Kerja & Anggaran Ormawa',
    kategori: 'Ormawa',
    organisasi: 'BPM',
    tahunAkademik: '2026/2027',
    gambar: ['https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80'],
    isi: 'Rapat koordinasi dan pengawasan pelaksanaan program kerja serta realisasi anggaran seluruh organisasi kemahasiswaan.',
    tanggal: '14 November 2026',
    lokasi: 'Lab Komputer Terpadu Lt. 3',
    tanggalAcara: '22 November 2026',
    waktuPelaksanaan: '10:00 - 14:00 WITA'
  },
  {
    id: 7,
    judul: 'Sidang Pleno Terbuka Majelis Permusyawaratan Mahasiswa',
    kategori: 'Ormawa',
    organisasi: 'MPM',
    tahunAkademik: '2026/2027',
    gambar: ['https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80'],
    isi: 'Penyampaian laporan pertanggungjawaban dan evaluasi kegiatan seluruh ormawa dalam sidang pleno terbuka.',
    tanggal: '29 Oktober 2026',
    lokasi: 'Ruang Sidang Utama Kampus',
    tanggalAcara: '04 November 2026',
    waktuPelaksanaan: '13:00 - 17:00 WITA'
  },
  {
    id: 8,
    judul: 'Bakti Sosial & Edukasi Lingkungan Desa Binaan',
    kategori: 'Ormawa',
    organisasi: 'BEM',
    tahunAkademik: '2026/2027',
    gambar: ['https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&q=80'],
    isi: 'Kegiatan pengabdian masyarakat, edukasi pengelolaan lingkungan, dan pemeriksaan kesehatan gratis di desa binaan.',
    tanggal: '20 Oktober 2026',
    lokasi: 'Desa Binaan Kampus',
    tanggalAcara: '28 Oktober 2026',
    waktuPelaksanaan: '08:00 - 15:00 WITA'
  }
];

export const Pengumuman: React.FC = () => {
  const [isBeasiswaOpen, setIsBeasiswaOpen] = useState(false);

  // Filter State
  const [filterKategori, setFilterKategori] = useState<string>('Semua');

  // Modal State
  const [activeModal, setActiveModal] = useState<'buat' | 'hapus' | 'detail' | null>(null);
  const [selectedPengumuman, setSelectedPengumuman] = useState<ItemPengumuman | null>(null);

  // State untuk Pop-up Konfirmasi Logout
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  // Tanggal Hari Ini untuk Otomatisasi Tanggal Publikasi
  const tanggalHariIni = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Form State untuk Buat Pengumuman Baru
  const [formBuat, setFormBuat] = useState({
    judul: '',
    kategori: '' as '' | 'Beasiswa' | 'Ormawa',
    subKategori: '',
    isi: '',
    lokasi: '',
    tanggalAcara: '',
    jamMulai: '08:00',
    jamSelesai: '12:00',
    tanggal: tanggalHariIni,
    gambarPreview: ''
  });

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/biro/login';
  };

  const pengumumanFiltered = listPengumuman.filter((item) => {
    return filterKategori === 'Semua' || item.kategori === filterKategori;
  });

  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col font-sans text-gray-800 relative">
      <div className="flex flex-1">
        
        {/* SIDEBAR KIRI */}
        <aside className="w-64 bg-[#0B1E36] text-white flex flex-col justify-between p-4 shrink-0">
          <div>
            <div className="flex items-center gap-3 mb-6 px-2 pt-2">
              <img 
                src="/logo.jpg" 
                alt="Logo Kampus" 
                className="w-9 h-9 object-contain rounded-lg shrink-0 bg-white p-0.5 shadow"
              />
              <div>
                <span className="text-[10px] font-bold text-blue-300 tracking-wider uppercase block">
                  KEMAHASISWAAN
                </span>
                <span className="text-xs text-gray-400 block mt-0.5">Portal Manajemen</span>
              </div>
            </div>

            <nav className="space-y-1 text-xs">
              <a href="/biro/dashboard" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📊</span>
                <span>Dashboard</span>
              </a>

              <div>
                <button
                  onClick={() => setIsBeasiswaOpen(!isBeasiswaOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg text-left transition cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span>🎓</span>
                    <span>Data Beasiswa</span>
                  </div>
                  <span className="text-[10px]">{isBeasiswaOpen ? '▲' : '▼'}</span>
                </button>

                {isBeasiswaOpen && (
                  <div className="ml-6 mt-1 space-y-1 border-l border-blue-400/30 pl-3">
                    <a href="/biro/beasiswa/penerima" className="block py-1.5 px-2 text-xs text-gray-300 hover:text-white transition">› Data Penerima</a>
                    <a href="/biro/beasiswa/calon" className="block py-1.5 px-2 text-xs text-gray-300 hover:text-white transition">› Data Calon Penerima</a>
                  </div>
                )}
              </div>

              <a href="/biro/ormawa" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>👥</span>
                <span>Data Ormawa</span>
              </a>
              <a href="/biro/pengumuman" className="flex items-center gap-3 px-3 py-2.5 bg-blue-600/30 text-blue-300 font-semibold rounded-lg">
                <span>📢</span>
                <span>Pengumuman</span>
              </a>

              <a href="/biro/agenda-kegiatan" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📅</span>
                <span>Agenda &amp; Kegiatan</span>
              </a>

              <a href="/biro/proposal" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📄</span>
                <span>Proposal &amp; Laporan</span>
              </a>

              <a href="/biro/manajemen-akun" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>👤</span>
                <span>Manajemen Akun</span>
              </a>
              <a href="/biro/edit-profil" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>✏️</span>
                <span>Ubah Informasi Beasiswa</span>
              </a>
              <a href="/biro/struktur" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>🌿</span>
                <span>Struktur Kepengurusan</span>
              </a>
            </nav>
          </div>

          <div className="pt-4 border-t border-gray-700/50">
            <button 
              onClick={() => setIsLogoutModalOpen(true)}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold transition cursor-pointer"
            >
              <span>🚪</span>
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* AREA KONTEN UTAMA */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">PENGUMUMAN</p>
              <h1 className="text-2xl font-bold text-gray-900 mt-0.5">Pengumuman</h1>
              <p className="text-xs text-gray-500 mt-0.5">Kelola informasi dan pengumuman untuk pengguna SI-BEO.</p>
            </div>
            
            <button
              onClick={() => {
                setFormBuat({
                  judul: '',
                  kategori: '',
                  subKategori: '',
                  isi: '',
                  lokasi: '',
                  tanggalAcara: '',
                  jamMulai: '08:00',
                  jamSelesai: '12:00',
                  tanggal: tanggalHariIni,
                  gambarPreview: ''
                });
                setActiveModal('buat');
              }}
              className="px-5 py-2.5 bg-[#0B2545] hover:bg-[#133763] text-white text-xs font-semibold rounded-xl shadow-sm transition cursor-pointer"
            >
              Buat Pengumuman
            </button>
          </div>

          {/* CARD FILTER */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm mb-6">
            <div className="w-full max-w-md">
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Pilih Kategori
              </label>
              <select
                value={filterKategori}
                onChange={(e) => setFilterKategori(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200/80 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white/90 cursor-pointer"
              >
                <option value="Semua">Semua Kategori</option>
                <option value="Beasiswa">Beasiswa</option>
                <option value="Ormawa">Ormawa</option>
              </select>
            </div>
          </div>

          {/* GRID KARTU PENGUMUMAN */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pengumumanFiltered.map((item) => (
                <div 
                  key={item.id}
                  className="border border-gray-200/80 rounded-2xl p-4 flex flex-col justify-between hover:shadow-md transition bg-white/90 relative group"
                >
                  <div>
                    <div className="w-full aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden mb-3 relative">
                      {item.gambar.length > 0 ? (
                        <img 
                          src={item.gambar[0]} 
                          alt={item.judul}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-400 bg-gray-100">
                          Tidak ada gambar
                        </div>
                      )}
                      <span className={`absolute top-2 left-2 px-2.5 py-1 rounded-md text-[10px] font-bold text-white shadow-sm ${item.kategori === 'Beasiswa' ? 'bg-blue-600' : 'bg-emerald-600'}`}>
                        {item.kategori}
                      </span>
                    </div>

                    <h3 className="font-bold text-xs text-gray-800 line-clamp-2 mb-1">
                      {item.judul}
                    </h3>
                    <p className="text-[10px] text-gray-400 mb-3">{item.organisasi} · {item.tanggal}</p>
                  </div>

                  <div className="flex justify-between items-center border-t border-gray-100 pt-3 mt-2">
                    <button 
                      onClick={() => { setSelectedPengumuman(item); setActiveModal('detail'); }}
                      className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
                    >
                      Selengkapnya
                    </button>
                    <button 
                      onClick={() => { setSelectedPengumuman(item); setActiveModal('hapus'); }}
                      className="p-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-xs font-bold transition cursor-pointer"
                      title="Hapus Pengumuman"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <footer className="pt-6 border-t border-gray-200 text-[11px] text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo sibeo.jpeg" 
                alt="Logo SI-BEO" 
                className="w-8 h-8 object-contain rounded-xl bg-white p-0.5 shadow border border-gray-100"
              />
              <div>
                <span className="font-extrabold text-xs text-gray-900 tracking-tight block">SI-BEO</span>
                <span className="text-[10px] text-gray-400">Sistem Informasi Beasiswa &amp; Ormawa</span>
              </div>
            </div>

            <div className="text-center md:text-right text-xs text-gray-400">
              <p>© 2026 SI-BEO · Satu Akses, Beragam Peluang.</p>
            </div>
          </footer>
        </main>
      </div>

      {/* MODAL BUAT PENGUMUMAN */}
      {activeModal === 'buat' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200 my-8">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-gray-50/50">
              <div>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Admin Biro Kemahasiswaan</span>
                <h3 className="text-base font-bold text-gray-900 mt-1">Buat Pengumuman</h3>
                <p className="text-[11px] text-gray-400">Publikasikan informasi dan detail jadwal kegiatan untuk mahasiswa.</p>
              </div>
              <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-gray-600 font-bold text-sm cursor-pointer">✕</button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setActiveModal(null); alert('Pengumuman berhasil diunggah!'); }} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Judul Pengumuman <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Sosialisasi Beasiswa KIP Kuliah 2026"
                  value={formBuat.judul}
                  onChange={(e) => setFormBuat({ ...formBuat, judul: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Pilih Kategori <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formBuat.kategori}
                    onChange={(e) => {
                      const val = e.target.value as '' | 'Beasiswa' | 'Ormawa';
                      setFormBuat({ 
                        ...formBuat, 
                        kategori: val, 
                        subKategori: val === 'Beasiswa' ? 'VDMI' : val === 'Ormawa' ? 'BEM' : '' 
                      });
                    }}
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                    required
                  >
                    <option value="" disabled hidden>Pilih kategori...</option>
                    <option value="Beasiswa">Beasiswa</option>
                    <option value="Ormawa">Ormawa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Detail Kategori / Organisasi <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formBuat.subKategori}
                    onChange={(e) => setFormBuat({ ...formBuat, subKategori: e.target.value })}
                    disabled={!formBuat.kategori}
                    className={`w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 ${!formBuat.kategori ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white cursor-pointer'}`}
                    required
                  >
                    {!formBuat.kategori ? (
                      <option value="">Pilih kategori terlebih dahulu...</option>
                    ) : formBuat.kategori === 'Beasiswa' ? (
                      <>
                        <option value="VDMI">VDMI</option>
                        <option value="KIP Kuliah">KIP Kuliah</option>
                        <option value="Kebanksentralan">Kebanksentralan</option>
                      </>
                    ) : (
                      <>
                        <option value="BEM">BEM</option>
                        <option value="BPM">BPM</option>
                        <option value="MPM">MPM</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              {/* INFORMASI DETAIL WAKTU & LOKASI KEGIATAN DENGAN LOGO KALENDER, JAM & LOKASI */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                
                {/* TANGGAL ACARA */}
                <div className="md:col-span-4">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">📅 Tanggal Kegiatan</label>
                  <input
                    type="date"
                    value={formBuat.tanggalAcara}
                    onChange={(e) => setFormBuat({ ...formBuat, tanggalAcara: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none bg-white cursor-pointer"
                  />
                </div>

                {/* WAKTU / PUKUL */}
                <div className="md:col-span-5">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">⏰ Waktu / Pukul (Mulai - Selesai)</label>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="time"
                      value={formBuat.jamMulai}
                      onChange={(e) => setFormBuat({ ...formBuat, jamMulai: e.target.value })}
                      className="w-full px-2 py-2 border border-gray-200 rounded-lg text-xs outline-none bg-white cursor-pointer text-center"
                    />
                    <span className="text-[11px] font-bold text-gray-400">s/d</span>
                    <input
                      type="time"
                      value={formBuat.jamSelesai}
                      onChange={(e) => setFormBuat({ ...formBuat, jamSelesai: e.target.value })}
                      className="w-full px-2 py-2 border border-gray-200 rounded-lg text-xs outline-none bg-white cursor-pointer text-center"
                    />
                  </div>
                </div>

                {/* LOKASI KEGIATAN */}
                <div className="md:col-span-3">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">📍 Lokasi Kegiatan</label>
                  <input
                    type="text"
                    placeholder="Contoh: Auditorium"
                    value={formBuat.lokasi}
                    onChange={(e) => setFormBuat({ ...formBuat, lokasi: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none bg-white"
                  />
                </div>

              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Isi Pengumuman / Deskripsi <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Tuliskan detail lengkap, persyaratan, dan ajakan mengikuti kegiatan..."
                  value={formBuat.isi}
                  onChange={(e) => setFormBuat({ ...formBuat, isi: e.target.value })}
                  className="w-full p-3 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Unggah Foto / Poster <span className="text-gray-400 font-normal">· Opsional</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      const reader = new FileReader();
                      reader.onload = (uploadEvent) => {
                        setFormBuat({ ...formBuat, gambarPreview: uploadEvent.target?.result as string });
                      };
                      reader.readAsDataURL(e.target.files[0]);
                    }
                  }}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 bg-white cursor-pointer"
                />
                {formBuat.gambarPreview && (
                  <div className="mt-2 w-32 aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 shadow-sm relative">
                    <img src={formBuat.gambarPreview} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-5 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-xl transition cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#0B2545] hover:bg-[#133763] text-white text-xs font-semibold rounded-xl shadow-sm transition cursor-pointer"
                >
                  Unggah Pengumuman
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL HAPUS PENGUMUMAN */}
      {activeModal === 'hapus' && selectedPengumuman && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200 p-6 text-center">
            <h4 className="text-base font-bold text-gray-900 mb-1">Hapus Pengumuman?</h4>
            <p className="text-xs text-gray-500 mb-4">
              Apakah Anda yakin ingin menghapus pengumuman <br />
              <span className="font-bold text-gray-800">"{selectedPengumuman.judul}"</span>?
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => setActiveModal(null)} className="py-2.5 border border-gray-300 text-gray-700 text-xs font-semibold rounded-xl cursor-pointer">Batal</button>
              <button onClick={() => { setActiveModal(null); alert('Pengumuman dihapus!'); }} className="py-2.5 bg-red-600 text-white text-xs font-semibold rounded-xl cursor-pointer">Ya, Hapus</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DETAIL PENGUMUMAN */}
      {activeModal === 'detail' && selectedPengumuman && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200 p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            {selectedPengumuman.gambar.length > 0 && (
              <div className="w-full aspect-[16/9] rounded-xl overflow-hidden">
                <img src={selectedPengumuman.gambar[0]} alt={selectedPengumuman.judul} className="w-full h-full object-cover" />
              </div>
            )}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold px-2.5 py-0.5 bg-blue-100 text-blue-700 rounded-full">{selectedPengumuman.kategori}</span>
                <span className="text-[10px] text-gray-400">Diterbitkan: {selectedPengumuman.tanggal}</span>
              </div>
              <h3 className="text-base font-bold text-gray-900">{selectedPengumuman.judul}</h3>
              <p className="text-xs text-blue-600 font-semibold mt-0.5">Oleh: {selectedPengumuman.organisasi}</p>
            </div>

            {/* KOTAK INFORMASI DETAIL ACARA (LOKASI, TANGGAL, WAKTU) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-blue-50/60 border border-blue-100 p-3.5 rounded-xl text-xs text-gray-700">
              <div>
                <span className="block text-[10px] font-bold text-gray-400 uppercase">📅 Tanggal Acara</span>
                <span className="font-semibold text-gray-900">{selectedPengumuman.tanggalAcara || 'Segera'}</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-gray-400 uppercase">⏰ Waktu / Pukul</span>
                <span className="font-semibold text-gray-900">{selectedPengumuman.waktuPelaksanaan || 'Menyesuaikan'}</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-gray-400 uppercase">📍 Lokasi</span>
                <span className="font-semibold text-gray-900 truncate block">{selectedPengumuman.lokasi || 'Kampus Utama'}</span>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">Isi Pengumuman</p>
              <p className="text-xs text-gray-600 leading-relaxed bg-gray-50 p-3.5 rounded-xl border border-gray-100">{selectedPengumuman.isi}</p>
            </div>

            {/* TOMBOL AKSI DI MODAL */}
            <div className="flex justify-between items-center pt-3 border-t border-gray-100">
              <a 
                href="/biro/agenda-kegiatan" 
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl shadow-sm transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>📅 Cek Kegiatan di Agenda</span>
              </a>
              <button onClick={() => setActiveModal(null)} className="px-5 py-2 bg-[#0B2545] hover:bg-[#133763] text-white text-xs font-semibold rounded-xl cursor-pointer">Tutup</button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL KONFIRMASI LOGOUT ================= */}
      {isLogoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 text-center animate-in fade-in zoom-in duration-200 border border-gray-100">
            <div className="my-3 flex justify-center">
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-2xl font-black border-4 border-red-50">
                🚪
              </div>
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-1">Konfirmasi Keluar</h4>
            <p className="text-xs text-gray-500 mb-5 px-2">
              Apakah Anda yakin ingin keluar dari sesi admin <br />
              <span className="font-bold text-gray-800">Biro Kemahasiswaan SI-BEO</span>?
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setIsLogoutModalOpen(false)} 
                className="py-2.5 border border-gray-300 text-gray-700 text-xs font-semibold rounded-xl hover:bg-gray-50 cursor-pointer transition"
              >
                Batal
              </button>
              <button 
                onClick={handleLogout} 
                className="py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-xl shadow cursor-pointer transition"
              >
                Ya, Keluar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Pengumuman;