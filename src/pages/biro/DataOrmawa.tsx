import React, { useState } from 'react';

interface AnggotaOrmawa {
  nim: string;
  nama: string;
  statusKeanggotaan: string;
  semester: number;
  fakultas: string;
  ormawa: string;
  jabatan: string;
  periode?: string;
}

export const DataAnggotaOrmawa: React.FC = () => {
  const [isBeasiswaOpen, setIsBeasiswaOpen] = useState(false);
  const [isRekapOpen, setIsRekapOpen] = useState(false);
  const [search, setSearch] = useState('');

  // State Modal Pop-up ('tambah' | 'edit' | 'filter' | null)
  const [activeModal, setActiveModal] = useState<'tambah' | 'edit' | 'filter' | null>(null);
  const [, setSelectedAnggota] = useState<AnggotaOrmawa | null>(null);

  // Form State untuk Tambah & Edit
  const [formData, setFormData] = useState({
    nama: '',
    nim: '',
    semester: '',
    fakultas: '',
    ormawa: '',
    statusKeanggotaan: 'Aktif',
    jabatan: '',
    periode: '2026/2027'
  });

  // Filter State
  const [filterState, setFilterState] = useState({
    jenisOrmawa: 'BEM',
    fakultas: 'TEKNIK',
    statusKeanggotaan: 'AKTIF'
  });

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/biro/login';
  };

  const dataAnggota: AnggotaOrmawa[] = [
    {
      nim: '22041001',
      nama: 'Andi Pratama',
      statusKeanggotaan: 'AKTIF',
      semester: 6,
      fakultas: 'Teknik / Informatika',
      ormawa: 'BPM',
      jabatan: 'Ketua',
      periode: '2026/2027'
    },
    {
      nim: '23021005',
      nama: 'Maria Lestari',
      statusKeanggotaan: 'AKTIF',
      semester: 4,
      fakultas: 'Ekonomi / Manajemen',
      ormawa: 'BPM',
      jabatan: 'Sekretaris',
      periode: '2026/2027'
    },
    {
      nim: '22031012',
      nama: 'Rizky Saputra',
      statusKeanggotaan: 'AKTIF',
      semester: 6,
      fakultas: 'Hukum / Ilmu Hukum',
      ormawa: 'BEM',
      jabatan: 'Anggota',
      periode: '2026/2027'
    },
    {
      nim: '24011009',
      nama: 'Clara Manoppo',
      statusKeanggotaan: 'TIDAK AKTIF',
      semester: 2,
      fakultas: 'Keperawatan / Ners',
      ormawa: 'BEM',
      jabatan: 'Bendahara',
      periode: '2025/2026'
    },
    {
      nim: '23051007',
      nama: 'Daniel Rondonuwu',
      statusKeanggotaan: 'TIDAK AKTIF',
      semester: 4,
      fakultas: 'Pertanian / Agroteknologi',
      ormawa: 'MPM',
      jabatan: 'Koordinator',
      periode: '2025/2026'
    }
  ];

  const handleOpenEdit = (item: AnggotaOrmawa) => {
    setSelectedAnggota(item);
    setFormData({
      nama: item.nama,
      nim: item.nim,
      semester: String(item.semester),
      fakultas: item.fakultas,
      ormawa: item.ormawa,
      statusKeanggotaan: item.statusKeanggotaan,
      jabatan: item.jabatan,
      periode: item.periode || '2026/2027'
    });
    setActiveModal('edit');
  };

  const handleOpenTambah = () => {
    setSelectedAnggota(null);
    setFormData({
      nama: '',
      nim: '',
      semester: '',
      fakultas: '',
      ormawa: '',
      statusKeanggotaan: 'Aktif',
      jabatan: '',
      periode: '2026/2027'
    });
    setActiveModal('tambah');
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col font-sans text-gray-800 relative">
      <div className="flex flex-1">
        
        {/* SIDEBAR KIRI (11 MENU KONSISTEN DENGAN LOGO /logo.jpg) */}
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
                    <a href="/biro/beasiswa/penerima" className="block py-1.5 px-2 text-xs text-gray-300 hover:text-white transition">› Data Penerima</a>
                    <a href="/biro/beasiswa/calon" className="block py-1.5 px-2 text-xs text-gray-300 hover:text-white transition">› Data Calon Penerima</a>
                    <a href="/biro/beasiswa/kelola" className="block py-1.5 px-2 text-xs text-gray-300 hover:text-white transition">› Kelola Data Mahasiswa</a>
                  </div>
                )}
              </div>

              <a href="/biro/ormawa" className="flex items-center gap-3 px-3 py-2.5 bg-blue-600/30 text-blue-300 font-semibold rounded-lg transition">
                <span>👥</span>
                <span>Data Anggota Ormawa</span>
              </a>
              <a href="/biro/pengumuman" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
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
                    <a href="/biro/rekapitulasi/beasiswa" className="block py-1.5 px-2 text-xs text-gray-300 hover:text-white transition">› Beasiswa</a>
                    <a href="/biro/rekapitulasi/ormawa" className="block py-1.5 px-2 text-xs text-gray-300 hover:text-white transition">› Ormawa</a>
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

        {/* AREA KONTEN UTAMA */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="mb-6">
            <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">ORMAWA / ANGGOTA</p>
            <h1 className="text-xl font-bold text-gray-900">Data Anggota Ormawa</h1>
          </div>

          {/* HEADER SECTION & TOMBOL TAMBAH */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Data Anggota Ormawa</h2>
              <p className="text-xs text-gray-500 mt-1">Kelola anggota, jabatan, struktur, dan riwayat kepengurusan tiap ormawa.</p>
            </div>
            <button
              onClick={handleOpenTambah}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#0B2545] hover:bg-[#133763] text-white text-xs font-semibold rounded-lg shadow-sm transition"
            >
              <span>+ Tambah Anggota</span>
            </button>
          </div>

          {/* SEARCH & FILTER BAR */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-6">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Cari nama anggota</label>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Nama atau NIM..."
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>

              <div className="md:col-span-6">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Filter</label>
                <div 
                  onClick={() => setActiveModal('filter')}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs flex justify-between items-center cursor-pointer bg-white text-gray-500 hover:border-blue-400 transition"
                >
                  <span>Filter ..........</span>
                  <span>🔍</span>
                </div>
              </div>
            </div>
          </div>

          {/* TABEL DAFTAR ANGGOTA ORMAWA */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-900">Daftar anggota</h3>
              <p className="text-[11px] text-gray-400 mt-0.5">Data dibagi berdasarkan ormawa</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 text-gray-500 font-semibold uppercase text-[10px]">
                  <tr>
                    <th className="p-3">NIM</th>
                    <th className="p-3">NAMA LENGKAP</th>
                    <th className="p-3">STATUS KEANGGOTAAN</th>
                    <th className="p-3 text-center">SEMESTER</th>
                    <th className="p-3">FAKULTAS / PRODI</th>
                    <th className="p-3">ORMAWA</th>
                    <th className="p-3">JABATAN</th>
                    <th className="p-3 text-right">AKSI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {dataAnggota.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition">
                      <td className="p-3 text-gray-600 font-medium">{item.nim}</td>
                      <td className="p-3 font-bold text-gray-900">{item.nama}</td>
                      <td className="p-3 text-gray-600 font-semibold">{item.statusKeanggotaan}</td>
                      <td className="p-3 text-center text-gray-600">{item.semester}</td>
                      <td className="p-3 text-gray-600">{item.fakultas}</td>
                      <td className="p-3 font-semibold text-gray-800">{item.ormawa}</td>
                      <td className="p-3 text-gray-600">{item.jabatan}</td>
                      <td className="p-3 text-right">
                        <button 
                          onClick={() => handleOpenEdit(item)}
                          className="p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs transition inline-flex items-center justify-center"
                        >
                          ✏️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* PAGINATION */}
            <div className="flex justify-end items-center gap-1 mt-6">
              <button className="w-6 h-6 bg-black text-white rounded text-xs flex items-center justify-center">◄</button>
              <button className="w-6 h-6 border border-gray-300 text-xs font-bold rounded flex items-center justify-center bg-gray-50">1</button>
              <button className="w-6 h-6 border border-gray-300 text-xs rounded flex items-center justify-center">2</button>
              <button className="w-6 h-6 border border-gray-300 text-xs rounded flex items-center justify-center">3</button>
              <button className="w-6 h-6 border border-gray-300 text-xs rounded flex items-center justify-center">4</button>
              <button className="w-6 h-6 border border-gray-300 text-xs rounded flex items-center justify-center">5</button>
              <button className="w-6 h-6 bg-black text-white rounded text-xs flex items-center justify-center">►</button>
            </div>
          </div>

          {/* SECTION RIWAYAT KEPENGURUSAN */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div>
              <h3 className="text-sm font-bold text-gray-900">Riwayat kepengurusan</h3>
              <p className="text-[11px] text-gray-500">Simpan daftar pengurus dan jabatan per tahun; anggota lama tetap tercatat.</p>
            </div>
            <button 
              onClick={() => alert('Membuka struktur kepengurusan...')}
              className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-lg transition"
            >
              Lihat struktur
            </button>
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

      {/* ================= MODAL FILTER (DENGAN BLUR BACKGROUND) ================= */}
      {activeModal === 'filter' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 space-y-4 animate-in fade-in zoom-in duration-200 relative">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <h3 className="text-sm font-bold text-gray-900">Filter Data Anggota Ormawa</h3>
              <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-gray-600 font-bold text-sm">✕</button>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2">Jenis Ormawa</label>
              <div className="flex flex-wrap gap-2">
                {['BEM', 'BPM', 'MPM'].map((b) => (
                  <button
                    key={b}
                    onClick={() => setFilterState({ ...filterState, jenisOrmawa: b })}
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold ${filterState.jenisOrmawa === b ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2">Fakultas</label>
              <div className="flex flex-wrap gap-2">
                {['TEKNIK', 'HUKUM', 'FEB', 'PGSD', 'KEPERAWATAN', 'KEDOKTERAN', 'PARIWISATA', 'AGRIBISNIS'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilterState({ ...filterState, fakultas: f })}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-semibold ${filterState.fakultas === f ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2">Status Keanggotaan</label>
              <div className="flex flex-wrap gap-2">
                {['AKTIF', 'TIDAK AKTIF'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setFilterState({ ...filterState, statusKeanggotaan: s })}
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold ${filterState.statusKeanggotaan === s ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <button 
                onClick={() => setFilterState({ jenisOrmawa: '', fakultas: '', statusKeanggotaan: '' })} 
                className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg transition"
              >
                RESET
              </button>
              <div className="flex gap-2">
                <button 
                  onClick={() => setActiveModal(null)} 
                  className="px-5 py-2 border border-gray-300 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-50"
                >
                  Batal
                </button>
                <button 
                  onClick={() => setActiveModal(null)} 
                  className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold rounded-lg"
                >
                  TERAPKAN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL TAMBAH ANGGOTA (DENGAN BLUR BACKGROUND) ================= */}
      {activeModal === 'tambah' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="p-1 bg-blue-600 text-white text-xs rounded font-bold">+</span>
                <h3 className="text-sm font-bold text-gray-900">Tambah Anggota</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-gray-600 font-bold text-sm">✕</button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setActiveModal(null); }} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Nama Mahasiswa</label>
                  <input 
                    type="text" 
                    placeholder="Masukkan Nama Lengkap" 
                    value={formData.nama} 
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })} 
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Nim</label>
                  <input 
                    type="text" 
                    placeholder="Masukkan Nim" 
                    value={formData.nim} 
                    onChange={(e) => setFormData({ ...formData, nim: e.target.value })} 
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Semester</label>
                  <input 
                    type="text" 
                    placeholder="Semester" 
                    value={formData.semester} 
                    onChange={(e) => setFormData({ ...formData, semester: e.target.value })} 
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Fakultas</label>
                  <input 
                    type="text" 
                    placeholder="Fakultas" 
                    value={formData.fakultas} 
                    onChange={(e) => setFormData({ ...formData, fakultas: e.target.value })} 
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Ormawa</label>
                  <input 
                    type="text" 
                    placeholder="Ormawa" 
                    value={formData.ormawa} 
                    onChange={(e) => setFormData({ ...formData, ormawa: e.target.value })} 
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Status Keanggotaan</label>
                  <input 
                    type="text" 
                    placeholder="Status Keanggotaan" 
                    value={formData.statusKeanggotaan} 
                    onChange={(e) => setFormData({ ...formData, statusKeanggotaan: e.target.value })} 
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Jabatan</label>
                  <input 
                    type="text" 
                    placeholder="Jabatan" 
                    value={formData.jabatan} 
                    onChange={(e) => setFormData({ ...formData, jabatan: e.target.value })} 
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Periode</label>
                  <input 
                    type="text" 
                    placeholder="ex. 2026/2027" 
                    value={formData.periode} 
                    onChange={(e) => setFormData({ ...formData, periode: e.target.value })} 
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                    required 
                  />
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-6">
                <button type="button" onClick={() => setActiveModal(null)} className="px-6 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-lg">Batal</button>
                <button type="submit" className="px-6 py-2 bg-[#1B5299] hover:bg-[#143E75] text-white text-xs font-semibold rounded-lg">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL EDIT ANGGOTA (DENGAN BLUR BACKGROUND) ================= */}
      {activeModal === 'edit' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="p-1 bg-blue-600 text-white text-xs rounded font-bold">✏️</span>
                <h3 className="text-sm font-bold text-gray-900">Edit Data Anggota Ormawa</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-gray-600 font-bold text-sm">✕</button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setActiveModal(null); }} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Nama Mahasiswa</label>
                  <input 
                    type="text" 
                    value={formData.nama} 
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })} 
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Nim</label>
                  <input 
                    type="text" 
                    value={formData.nim} 
                    onChange={(e) => setFormData({ ...formData, nim: e.target.value })} 
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Semester</label>
                  <input 
                    type="text" 
                    value={formData.semester} 
                    onChange={(e) => setFormData({ ...formData, semester: e.target.value })} 
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Fakultas</label>
                  <input 
                    type="text" 
                    value={formData.fakultas} 
                    onChange={(e) => setFormData({ ...formData, fakultas: e.target.value })} 
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Ormawa</label>
                  <input 
                    type="text" 
                    value={formData.ormawa} 
                    onChange={(e) => setFormData({ ...formData, ormawa: e.target.value })} 
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Status Keanggotaan</label>
                  <input 
                    type="text" 
                    value={formData.statusKeanggotaan} 
                    onChange={(e) => setFormData({ ...formData, statusKeanggotaan: e.target.value })} 
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Jabatan</label>
                  <input 
                    type="text" 
                    value={formData.jabatan} 
                    onChange={(e) => setFormData({ ...formData, jabatan: e.target.value })} 
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Periode</label>
                  <input 
                    type="text" 
                    value={formData.periode} 
                    onChange={(e) => setFormData({ ...formData, periode: e.target.value })} 
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                    required 
                  />
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-6">
                <button type="button" onClick={() => setActiveModal(null)} className="px-6 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-lg">Batal</button>
                <button type="submit" className="px-6 py-2 bg-[#1B5299] hover:bg-[#143E75] text-white text-xs font-semibold rounded-lg">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default DataAnggotaOrmawa;