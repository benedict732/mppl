import React, { useState } from 'react';

interface ItemPengumuman {
  id: number;
  judul: string;
  kategori: 'Beasiswa' | 'Ormawa';
  organisasi: string;
  tahunAkademik: string;
  gambar: string;
  isi: string;
  tanggal: string;
}

export const Pengumuman: React.FC = () => {
  const [isBeasiswaOpen, setIsBeasiswaOpen] = useState(false);
  const [isRekapOpen, setIsRekapOpen] = useState(false);

  // Filter State
  const [filterKategori, setFilterKategori] = useState<string>('Semua');
  const [filterTahun, setFilterTahun] = useState<string>('Semua');

  // Modal State
  const [activeModal, setActiveModal] = useState<'buat' | 'hapus' | 'detail' | null>(null);
  const [selectedPengumuman, setSelectedPengumuman] = useState<ItemPengumuman | null>(null);

  // Form State untuk Buat Pengumuman Baru
  const [formBuat, setFormBuat] = useState({
    judul: '',
    kategori: 'Beasiswa',
    organisasi: '',
    isi: '',
    tanggal: '',
    lampiran: ''
  });

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/biro/login';
  };

  // Dummy Data Pengumuman Lengkap
  const listPengumuman: ItemPengumuman[] = [
    {
      id: 1,
      judul: 'Pembukaan Pendaftaran Beasiswa KIP Kuliah 2026',
      kategori: 'Beasiswa',
      organisasi: 'Biro Kemahasiswaan',
      tahunAkademik: '2026/2027',
      gambar: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&q=80',
      isi: 'Pendaftaran beasiswa KIP Kuliah resmi dibuka untuk mahasiswa angkatan 2026. Lengkapi berkas sebelum tenggat waktu.',
      tanggal: '10 November 2026'
    },
    {
      id: 2,
      judul: 'Open Recruitment Anggota BEM Universitas 2026',
      kategori: 'Ormawa',
      organisasi: 'BEM',
      tahunAkademik: '2026/2027',
      gambar: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80',
      isi: 'Mari berkontribusi aktif dalam kepengurusan BEM periode 2026/2027. Terbuka bagi seluruh mahasiswa aktif semester 2-4.',
      tanggal: '05 November 2026'
    },
    {
      id: 3,
      judul: 'Seleksi Wawancara Beasiswa Bank Indonesia (GenBI)',
      kategori: 'Beasiswa',
      organisasi: 'Biro Kemahasiswaan',
      tahunAkademik: '2026/2027',
      gambar: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&q=80',
      isi: 'Jadwal wawancara kandidat penerima beasiswa GenBI dapat dilihat pada dokumen terlampir.',
      tanggal: '01 November 2026'
    },
    {
      id: 4,
      judul: 'Pentas Seni & Budaya Kampus - UKM Seni',
      kategori: 'Ormawa',
      organisasi: 'UKM Seni',
      tahunAkademik: '2025/2026',
      gambar: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&q=80',
      isi: 'Saksikan pertunjukan seni tahunan yang diselenggarakan oleh UKM Seni Unika De La Salle Manado.',
      tanggal: '25 Oktober 2026'
    }
  ];

  const pengumumanFiltered = listPengumuman.filter((item) => {
    const matchKategori = filterKategori === 'Semua' || filterKategori === '' || item.kategori === filterKategori;
    const matchTahun = filterTahun === 'Semua' || filterTahun === '' || item.tahunAkademik === filterTahun;
    return matchKategori && matchTahun;
  });

  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col font-sans text-gray-800 relative">
      <div className="flex flex-1">
        
        {/* SIDEBAR KIRI KONSISTEN DENGAN LOGO.JPG */}
        <aside className="w-64 bg-[#0B1E36] text-white flex flex-col justify-between p-4 shrink-0">
          <div>
            <div className="flex items-center gap-3 mb-6 px-2 pt-2">
              <img 
                src="/logo.jpg" 
                alt="Logo Kampus" 
                className="w-9 h-9 object-contain rounded-lg shrink-0"
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

              {/* ACCORDION DATA BEASISWA */}
              <div>
                <button
                  onClick={() => setIsBeasiswaOpen(!isBeasiswaOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg text-left transition"
                >
                  <div className="flex items-center gap-3">
                    <span>🎓</span>
                    <span>Data Beasiswa</span>
                  </div>
                  <span className="text-[10px]">{isBeasiswaOpen ? '▲' : '▼'}</span>
                </button>

                {isBeasiswaOpen && (
                  <div className="ml-6 mt-1 space-y-1 border-l border-blue-400/30 pl-3">
                    <a href="/biro/beasiswa/penerima" className="block py-1.5 px-2 text-xs text-gray-300 hover:text-white transition">
                      › Data Penerima
                    </a>
                    <a href="/biro/beasiswa/calon" className="block py-1.5 px-2 text-xs text-gray-300 hover:text-white transition">
                      › Data Calon Penerima
                    </a>
                    <a href="/biro/beasiswa/kelola" className="block py-1.5 px-2 text-xs text-gray-300 hover:text-white transition">
                      › Kelola Data Mahasiswa
                    </a>
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
              <a href="/biro/proposal" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📄</span>
                <span>Proposal & Laporan</span>
              </a>
              <a href="/biro/pengumpulan" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📥</span>
                <span>Pengumpulan Laporan</span>
              </a>
              <a href="/biro/detail-laporan" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📋</span>
                <span>Detail Laporan</span>
              </a>

              {/* ACCORDION REKAPITULASI */}
              <div>
                <button
                  onClick={() => setIsRekapOpen(!isRekapOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg text-left transition"
                >
                  <div className="flex items-center gap-3">
                    <span>📈</span>
                    <span>Rekapitulasi</span>
                  </div>
                  <span className="text-[10px]">{isRekapOpen ? '▲' : '▼'}</span>
                </button>

                {isRekapOpen && (
                  <div className="ml-6 mt-1 space-y-1 border-l border-blue-400/30 pl-3">
                    <a href="/biro/rekapitulasi/beasiswa" className="block py-1.5 px-2 text-xs text-gray-300 hover:text-white transition">
                      › Beasiswa
                    </a>
                    <a href="/biro/rekapitulasi/ormawa" className="block py-1.5 px-2 text-xs text-gray-300 hover:text-white transition">
                      › Ormawa
                    </a>
                  </div>
                )}
              </div>

              <a href="/biro/manajemen-akun" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>👤</span>
                <span>Manajemen Akun</span>
              </a>
              <a href="/biro/edit-profil" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>✏️</span>
                <span>Edit Profil</span>
              </a>
              <a href="/biro/struktur" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>🌿</span>
                <span>Struktur Kepengurusan</span>
              </a>
            </nav>
          </div>

          <div className="pt-4 border-t border-gray-700/50">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold transition"
            >
              <span>🚪</span>
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* AREA KONTEN UTAMA LENGKAP */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="mb-6">
            <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">PENGUMUMAN</p>
            <h1 className="text-xl font-bold text-gray-900">Pengumuman Beasiswa & Ormawa</h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Pengumuman</h2>
              <p className="text-xs text-gray-500 mt-1">Kelola Informasi dan pengumuman untuk pengguna SI-BEO.</p>
            </div>
            <button
              onClick={() => setActiveModal('buat')}
              className="px-5 py-2.5 bg-[#0B2545] hover:bg-[#133763] text-white text-xs font-semibold rounded-lg shadow-sm transition flex items-center gap-2"
            >
              <span>+</span>
              <span>Buat Pengumuman</span>
            </button>
          </div>

          {/* CARD FILTER LENGKAP */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              <div className="md:col-span-5">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Pilih Beasiswa atau Ormawa
                </label>
                <select
                  value={filterKategori}
                  onChange={(e) => setFilterKategori(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white"
                >
                  <option value="Semua">Semua Kategori</option>
                  <option value="Beasiswa">Beasiswa</option>
                  <option value="Ormawa">Ormawa</option>
                </select>
              </div>

              <div className="md:col-span-5">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Filter Tahun Akademik
                </label>
                <select
                  value={filterTahun}
                  onChange={(e) => setFilterTahun(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white"
                >
                  <option value="Semua">Semua Tahun Akademik</option>
                  <option value="2026/2027">2026/2027</option>
                  <option value="2025/2026">2025/2026</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <button
                  onClick={() => { setFilterKategori('Semua'); setFilterTahun('Semua'); }}
                  className="w-full py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg shadow-sm transition"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* GRID KARTU PENGUMUMAN LENGKAP */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pengumumanFiltered.map((item) => (
                <div 
                  key={item.id}
                  className="border border-gray-200 rounded-2xl p-4 flex flex-col justify-between hover:shadow-md transition bg-white relative group"
                >
                  <div>
                    <div className="w-full h-40 bg-gray-200 rounded-xl overflow-hidden mb-3 relative">
                      <img 
                        src={item.gambar} 
                        alt={item.judul}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
                      />
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
                      className="text-xs font-semibold text-blue-600 hover:underline"
                    >
                      Selengkapnya
                    </button>
                    <button 
                      onClick={() => { setSelectedPengumuman(item); setActiveModal('hapus'); }}
                      className="p-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-xs font-bold transition"
                      title="Hapus Pengumuman"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <footer className="pt-6 border-t border-gray-200 text-[11px] text-gray-500 flex flex-col md:flex-row justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-bold text-gray-800">
                <div className="p-1 bg-blue-900 rounded text-white text-xs">🛡️</div>
                <span>SI-BEO</span>
              </div>
              <p className="text-[10px] text-gray-400 max-w-sm">
                Platform informasi beasiswa dan organisasi kemahasiswaan untuk memudahkan pencarian peluang dan pengembangan diri di kampus.
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-bold text-gray-700">Kontak Kampus</p>
              <p>Email: <span className="text-blue-600 underline">[tempatkan email resmi]</span></p>
              <p>Telepon: <span className="text-blue-600 underline">[tempatkan nomor resmi]</span></p>
              <p>Lokasi: <span className="text-blue-600 underline">[tempatkan alamat resmi]</span></p>
            </div>
          </footer>

          <div className="mt-6 flex justify-between items-center text-[10px] text-gray-400">
            <p>© 2026 SIMPUL - Satu Akses, Beragam Peluang.</p>
            <p>Konten program ilustratif - Pusat bantuan - Kebijakan privasi</p>
          </div>

        </main>
      </div>

      {/* MODAL BUAT PENGUMUMAN */}
      {activeModal === 'buat' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200 my-8">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-gray-50/50">
              <div>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Admin Ormawa / Biro</span>
                <h3 className="text-base font-bold text-gray-900 mt-1">Buat Pengumuman</h3>
                <p className="text-[11px] text-gray-400">Publikasikan informasi penting untuk mahasiswa dan anggota organisasi.</p>
              </div>
              <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-gray-600 font-bold text-sm">✕</button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setActiveModal(null); alert('Pengumuman berhasil diterbitkan!'); }} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Judul Pengumuman <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Pendaftaran Anggota Baru UKM 2026"
                  value={formBuat.judul}
                  onChange={(e) => setFormBuat({ ...formBuat, judul: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Kategori <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formBuat.kategori}
                    onChange={(e) => setFormBuat({ ...formBuat, kategori: e.target.value as 'Beasiswa' | 'Ormawa' })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="Beasiswa">Beasiswa (KIP, GenBI, VDMI)</option>
                    <option value="Ormawa">Ormawa (BEM, BPM, UKM, HIMA)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Ormawa / Penyelenggara
                  </label>
                  <input
                    type="text"
                    placeholder="Nama Ormawa atau Biro"
                    value={formBuat.organisasi}
                    onChange={(e) => setFormBuat({ ...formBuat, organisasi: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Isi Pengumuman <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Tuliskan detail, jadwal, persyaratan, dan informasi kontak..."
                  value={formBuat.isi}
                  onChange={(e) => setFormBuat({ ...formBuat, isi: e.target.value })}
                  className="w-full p-3 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Tanggal Publikasi</label>
                <input
                  type="date"
                  value={formBuat.tanggal}
                  onChange={(e) => setFormBuat({ ...formBuat, tanggal: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-5 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-lg transition"
                >
                  Simpan Draf
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#0B2545] hover:bg-[#133763] text-white text-xs font-semibold rounded-lg shadow-sm transition"
                >
                  Terbitkan
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
              <button onClick={() => setActiveModal(null)} className="py-2.5 border border-gray-300 text-gray-700 text-xs font-semibold rounded-lg">Batal</button>
              <button onClick={() => { setActiveModal(null); alert('Pengumuman dihapus!'); }} className="py-2.5 bg-red-600 text-white text-xs font-semibold rounded-lg">Ya, Hapus</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DETAIL PENGUMUMAN */}
      {activeModal === 'detail' && selectedPengumuman && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200 p-6 space-y-4">
            <div className="w-full h-48 rounded-xl overflow-hidden">
              <img src={selectedPengumuman.gambar} alt={selectedPengumuman.judul} className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">{selectedPengumuman.kategori}</span>
              <h3 className="text-lg font-bold text-gray-900 mt-2">{selectedPengumuman.judul}</h3>
              <p className="text-[11px] text-gray-400 mt-0.5">Diterbitkan oleh: {selectedPengumuman.organisasi} · {selectedPengumuman.tanggal}</p>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed border-t border-b border-gray-100 py-3">{selectedPengumuman.isi}</p>
            <div className="flex justify-end">
              <button onClick={() => setActiveModal(null)} className="px-5 py-2 bg-[#0B2545] text-white text-xs font-semibold rounded-lg">Tutup</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Pengumuman;