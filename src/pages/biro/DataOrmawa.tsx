import React, { useState } from 'react';

interface AnggotaOrmawa {
  nim: string;
  nama: string;
  statusKeanggotaan: string;
  semester: number;
  fakultas: string;
  prodi: string;
  ormawa: string;
  jabatan: string;
  periode?: string;
}

const prodiMapping: Record<string, string[]> = {
  'TEKNIK': ['Informatika', 'Elektro', 'Sipil', 'Industri'],
  'PERTANIAN': ['Agribisnis'],
  'EKONOMI DAN BISNIS': ['Manajemen', 'Akuntansi'],
  'HUKUM': ['Ilmu Hukum'],
  'KEPERAWATAN': ['Fisioterapi', 'Ilmu Keperawatan', 'Profesi Ners'],
  'PARIWISATA': ['Hospitality dan Pariwisata'],
  'ILMU PENDIDIKAN': ['Pendidikan Guru SD'],
  'KEDOKTERAN': ['Kedokteran']
};

export const DataAnggotaOrmawa: React.FC = () => {
  const [isBeasiswaOpen, setIsBeasiswaOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [periode, setPeriode] = useState('2026/2027');
  const [selectedOrmawaTab, setSelectedOrmawaTab] = useState<string>('Semua');

  const [activeModal, setActiveModal] = useState<'tambah' | 'edit' | 'filter' | null>(null);
  const [, setSelectedAnggota] = useState<AnggotaOrmawa | null>(null);
  const [filterStep, setFilterStep] = useState<number>(1);

  // State untuk Pop-up Konfirmasi Logout
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    nama: '',
    nim: '',
    semester: '1',
    fakultas: 'TEKNIK',
    prodi: 'Informatika',
    ormawa: 'BEM',
    statusKeanggotaan: 'AKTIF',
    jabatan: 'Anggota',
    periode: '2026/2027'
  });

  const [filterState, setFilterState] = useState({
    ormawa: 'Semua',
    fakultas: 'TEKNIK',
    prodi: 'Informatika',
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
      fakultas: 'TEKNIK',
      prodi: 'Informatika',
      ormawa: 'BPM',
      jabatan: 'Ketua',
      periode: '2026/2027'
    },
    {
      nim: '23021005',
      nama: 'Maria Lestari',
      statusKeanggotaan: 'AKTIF',
      semester: 4,
      fakultas: 'EKONOMI DAN BISNIS',
      prodi: 'Manajemen',
      ormawa: 'BPM',
      jabatan: 'Sekretaris',
      periode: '2026/2027'
    },
    {
      nim: '22031012',
      nama: 'Rizky Saputra',
      statusKeanggotaan: 'AKTIF',
      semester: 6,
      fakultas: 'HUKUM',
      prodi: 'Ilmu Hukum',
      ormawa: 'BEM',
      jabatan: 'Anggota',
      periode: '2026/2027'
    },
    {
      nim: '24011009',
      nama: 'Clara Manoppo',
      statusKeanggotaan: 'TIDAK AKTIF',
      semester: 2,
      fakultas: 'KEPERAWATAN',
      prodi: 'Ilmu Keperawatan',
      ormawa: 'BEM',
      jabatan: 'Bendahara',
      periode: '2025/2026'
    },
    {
      nim: '23051007',
      nama: 'Daniel Rondonuwu',
      statusKeanggotaan: 'TIDAK AKTIF',
      semester: 4,
      fakultas: 'PERTANIAN',
      prodi: 'Agribisnis',
      ormawa: 'MPM',
      jabatan: 'Koordinator',
      periode: '2025/2026'
    },
    {
      nim: '22041022',
      nama: 'Siti Rahmawati',
      statusKeanggotaan: 'AKTIF',
      semester: 6,
      fakultas: 'TEKNIK',
      prodi: 'Elektro',
      ormawa: 'BEM',
      jabatan: 'Wakil Ketua',
      periode: '2026/2027'
    },
    {
      nim: '23021088',
      nama: 'Kevin Lumingkewas',
      statusKeanggotaan: 'AKTIF',
      semester: 4,
      fakultas: 'EKONOMI DAN BISNIS',
      prodi: 'Akuntansi',
      ormawa: 'MPM',
      jabatan: 'Sekretaris',
      periode: '2026/2027'
    },
    {
      nim: '24041015',
      nama: 'Priscilla Tangkudung',
      statusKeanggotaan: 'AKTIF',
      semester: 2,
      fakultas: 'PARIWISATA',
      prodi: 'Hospitality dan Pariwisata',
      ormawa: 'BPM',
      jabatan: 'Anggota',
      periode: '2026/2027'
    },
    {
      nim: '21061003',
      nama: 'Yohanes Kakunsi',
      statusKeanggotaan: 'TIDAK AKTIF',
      semester: 8,
      fakultas: 'KEDOKTERAN',
      prodi: 'Kedokteran',
      ormawa: 'BEM',
      jabatan: 'Ketua',
      periode: '2025/2026'
    },
    {
      nim: '23011044',
      nama: 'Angelina Sumilat',
      statusKeanggotaan: 'AKTIF',
      semester: 4,
      fakultas: 'ILMU PENDIDIKAN',
      prodi: 'Pendidikan Guru SD',
      ormawa: 'MPM',
      jabatan: 'Bendahara',
      periode: '2026/2027'
    }
  ];

  const handleOpenEdit = (item: AnggotaOrmawa) => {
    setSelectedAnggota(item);
    setFormData({
      nama: item.nama,
      nim: item.nim,
      semester: String(item.semester),
      fakultas: item.fakultas,
      prodi: item.prodi,
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
      semester: '1',
      fakultas: 'TEKNIK',
      prodi: 'Informatika',
      ormawa: 'BEM',
      statusKeanggotaan: 'AKTIF',
      jabatan: 'Anggota',
      periode: '2026/2027'
    });
    setActiveModal('tambah');
  };

  const availableProdiForm = prodiMapping[formData.fakultas] || ['Umum'];
  const availableProdiFilter = prodiMapping[filterState.fakultas] || ['Umum'];

  const filteredAnggota = dataAnggota.filter((item) => {
    const matchSearch = item.nama.toLowerCase().includes(search.toLowerCase()) || item.nim.includes(search);
    const matchOrmawaTab = selectedOrmawaTab === 'Semua' || item.ormawa === selectedOrmawaTab;
    const matchPeriode = item.periode === periode;
    return matchSearch && matchOrmawaTab && matchPeriode;
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
                  className="w-full flex items-center justify-between px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg text-left cursor-pointer"
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

              <a href="/biro/ormawa" className="flex items-center gap-3 px-3 py-2.5 bg-blue-600/30 text-blue-300 font-semibold rounded-lg transition">
                <span>👥</span>
                <span>Data Ormawa</span>
              </a>
              <a href="/biro/pengumuman" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📢</span>
                <span>Pengumuman</span>
              </a>

              <a href="/biro/agenda-kegiatan" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📅</span>
                <span>Agenda & Kegiatan</span>
              </a>

              <a href="/biro/proposal" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📄</span>
                <span>Proposal & Laporan</span>
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
              <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">ORMAWA / ANGGOTA</p>
              <h1 className="text-2xl font-bold text-gray-900 mt-0.5">Data Anggota Ormawa</h1>
              <p className="text-xs text-gray-500 mt-0.5">Kelola anggota, jabatan, struktur, dan riwayat kepengurusan tiap ormawa.</p>
            </div>

            <div>
              <button
                onClick={handleOpenTambah}
                className="px-4 py-2.5 bg-[#0B2545] hover:bg-[#133763] text-white text-xs font-semibold rounded-xl shadow-sm transition cursor-pointer"
              >
                Tambah Anggota
              </button>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm mb-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-8">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Cari Anggota</label>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Nama atau NIM..."
                  className="w-full px-4 py-2 border border-gray-200/80 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white/90"
                />
              </div>

              <div className="md:col-span-4">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Filter</label>
                <div 
                  onClick={() => { setFilterStep(1); setActiveModal('filter'); }}
                  className="w-full px-4 py-2 border border-gray-200/80 rounded-xl text-xs flex justify-between items-center cursor-pointer bg-white/90 text-gray-600 hover:border-blue-400 transition"
                >
                  <span>Filter berdasarkan kriteria...</span>
                  <span>🔍</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-gray-200/60 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-600">Periode:</span>
              <select
                value={periode}
                onChange={(e) => setPeriode(e.target.value)}
                className="bg-white px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-gray-800 outline-none cursor-pointer shadow-sm"
              >
                <option value="2026/2027">2026/2027</option>
                <option value="2025/2026">2025/2026</option>
                <option value="2024/2025">2024/2025</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-600">Ormawa:</span>
              <select
                value={selectedOrmawaTab}
                onChange={(e) => setSelectedOrmawaTab(e.target.value)}
                className="bg-white px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-blue-700 outline-none cursor-pointer shadow-sm"
              >
                <option value="Semua">Semua Ormawa</option>
                <option value="MPM">MPM</option>
                <option value="BPM">BPM</option>
                <option value="BEM">BEM</option>
              </select>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm mb-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Anggota</h3>
              </div>
              <span className="text-xs bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded-xl border border-blue-100">
                Total Anggota: {filteredAnggota.length} Mahasiswa
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs whitespace-nowrap">
                <thead className="bg-gray-50/80 text-gray-500 font-semibold uppercase text-[10px]">
                  <tr>
                    <th className="p-3">NIM</th>
                    <th className="p-3">NAMA LENGKAP</th>
                    <th className="p-3 text-center">SEMESTER</th>
                    <th className="p-3">FAKULTAS</th>
                    <th className="p-3">PROGRAM STUDI</th>
                    <th className="p-3">ORMAWA</th>
                    <th className="p-3">JABATAN</th>
                    <th className="p-3">STATUS KEANGGOTAAN</th>
                    <th className="p-3 text-right">AKSI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredAnggota.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/60 transition">
                      <td className="p-3 text-gray-600 font-medium">{item.nim}</td>
                      <td className="p-3 font-bold text-gray-900">{item.nama}</td>
                      <td className="p-3 text-center text-gray-600">{item.semester}</td>
                      <td className="p-3 text-gray-600">{item.fakultas}</td>
                      <td className="p-3 text-gray-600">{item.prodi}</td>
                      <td className="p-3 font-semibold text-gray-800">{item.ormawa}</td>
                      <td className="p-3 text-gray-600 font-medium">{item.jabatan}</td>
                      <td className="p-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-semibold ${
                          item.statusKeanggotaan === 'AKTIF' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-600'
                        }`}>
                          {item.statusKeanggotaan}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <button 
                          onClick={() => handleOpenEdit(item)}
                          className="p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs transition inline-flex items-center justify-center cursor-pointer shadow-sm"
                          title="Edit"
                        >
                          ✏️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500">
              <span>Menampilkan data 1-10 dari {filteredAnggota.length} total data</span>
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 bg-[#0B1E36] hover:bg-[#133763] text-white rounded-xl flex items-center justify-center cursor-pointer shadow-sm transition" title="Sebelumnya">◄</button>
                <button className="w-10 h-10 bg-[#0B1E36] hover:bg-[#133763] text-white rounded-xl flex items-center justify-center cursor-pointer shadow-sm transition" title="Selanjutnya">►</button>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div>
              <h3 className="text-sm font-bold text-gray-900">Riwayat kepengurusan</h3>
              <p className="text-[11px] text-gray-500">Simpan daftar pengurus dan jabatan per tahun; anggota lama tetap tercatat.</p>
            </div>
            <a href="/biro/struktur" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition cursor-pointer shadow-sm inline-flex items-center gap-2">
              <span>🌿</span>
              <span>Lihat struktur</span>
            </a>
          </div>

          <footer className="pt-6 border-t border-gray-200 text-[11px] text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo sibeo.jpeg" alt="Logo SI-BEO" className="w-8 h-8 object-contain rounded-xl bg-white p-0.5 shadow border border-gray-100" />
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

      {activeModal === 'filter' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-100 p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Filter Berurutan</span>
                <h3 className="text-xs font-bold text-gray-800">
                  {filterStep === 1 ? '1. Pilih Ormawa' : filterStep === 2 ? '2. Pilih Fakultas' : filterStep === 3 ? `3. Pilih Prodi (${filterState.fakultas})` : '4. Status Keanggotaan'}
                </h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-gray-600 font-bold text-xs cursor-pointer">✕</button>
            </div>

            {filterStep === 1 && (
              <div className="space-y-2">
                <div className="flex flex-col gap-2">
                  {['Semua', 'BEM', 'BPM', 'MPM'].map((b) => (
                    <button key={b} onClick={() => setFilterState({ ...filterState, ormawa: b })} className={`w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-left cursor-pointer transition ${filterState.ormawa === b ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{b}</button>
                  ))}
                </div>
              </div>
            )}

            {filterStep === 2 && (
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                  {['TEKNIK', 'PERTANIAN', 'EKONOMI DAN BISNIS', 'HUKUM', 'KEPERAWATAN', 'PARIWISATA', 'ILMU PENDIDIKAN', 'KEDOKTERAN'].map((f) => (
                    <button key={f} onClick={() => { const firstProdi = prodiMapping[f]?.[0] || ''; setFilterState({ ...filterState, fakultas: f, prodi: firstProdi }); }} className={`px-3 py-2 rounded-xl text-[10px] font-semibold text-center cursor-pointer transition ${filterState.fakultas === f ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{f}</button>
                  ))}
                </div>
              </div>
            )}

            {filterStep === 3 && (
              <div className="space-y-2">
                <div className="flex flex-col gap-2 max-h-48 overflow-y-auto">
                  {availableProdiFilter.map((p) => (
                    <button key={p} onClick={() => setFilterState({ ...filterState, prodi: p })} className={`w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-left cursor-pointer transition ${filterState.prodi === p ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{p}</button>
                  ))}
                </div>
              </div>
            )}

            {filterStep === 4 && (
              <div className="space-y-2">
                <div className="flex flex-col gap-2">
                  {['AKTIF', 'TIDAK AKTIF'].map((s) => (
                    <button key={s} onClick={() => setFilterState({ ...filterState, statusKeanggotaan: s })} className={`w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-left cursor-pointer transition ${filterState.statusKeanggotaan === s ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{s}</button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <div>
                {filterStep > 1 && (
                  <button onClick={() => setFilterStep(filterStep - 1)} className="px-4 py-1.5 bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg cursor-pointer">Kembali</button>
                )}
              </div>
              <div>
                {filterStep < 4 ? (
                  <button onClick={() => setFilterStep(filterStep + 1)} className="px-4 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-lg cursor-pointer">Lanjut ➔</button>
                ) : (
                  <button onClick={() => setActiveModal(null)} className="px-4 py-1.5 bg-emerald-600 text-white text-xs font-semibold rounded-lg cursor-pointer">Terapkan Filter</button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'tambah' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="p-1 bg-blue-600 text-white text-xs rounded-xl font-bold">+</span>
                <h3 className="text-sm font-bold text-gray-900">Tambah Anggota</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-gray-600 font-bold text-sm cursor-pointer">✕</button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setActiveModal(null); alert('Anggota berhasil ditambahkan!'); }} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Nama Mahasiswa</label>
                  <input type="text" placeholder="Masukkan Nama Lengkap" value={formData.nama} onChange={(e) => setFormData({ ...formData, nama: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" required />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">NIM</label>
                  <input type="text" placeholder="Masukkan NIM" value={formData.nim} onChange={(e) => setFormData({ ...formData, nim: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" required />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Semester (1-8)</label>
                  <select value={formData.semester} onChange={(e) => setFormData({ ...formData, semester: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                      <option key={sem} value={sem}>Semester {sem}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Fakultas</label>
                  <select value={formData.fakultas} onChange={(e) => { const selectedFak = e.target.value; const firstProdi = prodiMapping[selectedFak]?.[0] || ''; setFormData({ ...formData, fakultas: selectedFak, prodi: firstProdi }); }} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer">
                    {['TEKNIK', 'PERTANIAN', 'EKONOMI DAN BISNIS', 'HUKUM', 'KEPERAWATAN', 'PARIWISATA', 'ILMU PENDIDIKAN', 'KEDOKTERAN'].map((fak) => (
                      <option key={fak} value={fak}>{fak}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Program Studi</label>
                  <select value={formData.prodi} onChange={(e) => setFormData({ ...formData, prodi: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer">
                    {availableProdiForm.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Ormawa</label>
                  <select value={formData.ormawa} onChange={(e) => setFormData({ ...formData, ormawa: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer">
                    {['BEM', 'BPM', 'MPM'].map((orm) => (
                      <option key={orm} value={orm}>{orm}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Jabatan</label>
                  <select value={formData.jabatan} onChange={(e) => setFormData({ ...formData, jabatan: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer">
                    {['Ketua', 'Wakil Ketua', 'Sekretaris', 'Bendahara', 'Koordinator', 'Anggota'].map((jbt) => (
                      <option key={jbt} value={jbt}>{jbt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Status Keanggotaan</label>
                  <select value={formData.statusKeanggotaan} onChange={(e) => setFormData({ ...formData, statusKeanggotaan: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer">
                    {['AKTIF', 'TIDAK AKTIF'].map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Periode</label>
                  <select value={formData.periode} onChange={(e) => setFormData({ ...formData, periode: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer">
                    {['2026/2027', '2025/2026', '2024/2025'].map((prd) => (
                      <option key={prd} value={prd}>{prd}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-gray-100 mt-6">
                <button type="submit" className="px-6 py-2 bg-[#1B5299] hover:bg-[#143E75] text-white text-xs font-semibold rounded-xl cursor-pointer">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {activeModal === 'edit' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="p-1 bg-blue-600 text-white text-xs rounded-xl font-bold">✏️</span>
                <h3 className="text-sm font-bold text-gray-900">Edit Data Anggota Ormawa</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-gray-600 font-bold text-sm cursor-pointer">✕</button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setActiveModal(null); alert('Perubahan disimpan!'); }} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Nama Mahasiswa</label>
                  <input type="text" value={formData.nama} onChange={(e) => setFormData({ ...formData, nama: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" required />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">NIM</label>
                  <input type="text" value={formData.nim} onChange={(e) => setFormData({ ...formData, nim: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" required />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Semester (1-8)</label>
                  <select value={formData.semester} onChange={(e) => setFormData({ ...formData, semester: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                      <option key={sem} value={sem}>Semester {sem}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Fakultas</label>
                  <select value={formData.fakultas} onChange={(e) => { const selectedFak = e.target.value; const firstProdi = prodiMapping[selectedFak]?.[0] || ''; setFormData({ ...formData, fakultas: selectedFak, prodi: firstProdi }); }} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer">
                    {['TEKNIK', 'PERTANIAN', 'EKONOMI DAN BISNIS', 'HUKUM', 'KEPERAWATAN', 'PARIWISATA', 'ILMU PENDIDIKAN', 'KEDOKTERAN'].map((fak) => (
                      <option key={fak} value={fak}>{fak}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Program Studi</label>
                  <select value={formData.prodi} onChange={(e) => setFormData({ ...formData, prodi: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer">
                    {availableProdiForm.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Ormawa</label>
                  <select value={formData.ormawa} onChange={(e) => setFormData({ ...formData, ormawa: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer">
                    {['BEM', 'BPM', 'MPM'].map((orm) => (
                      <option key={orm} value={orm}>{orm}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Jabatan</label>
                  <select value={formData.jabatan} onChange={(e) => setFormData({ ...formData, jabatan: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer">
                    {['Ketua', 'Wakil Ketua', 'Sekretaris', 'Bendahara', 'Koordinator', 'Anggota'].map((jbt) => (
                      <option key={jbt} value={jbt}>{jbt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Status Keanggotaan</label>
                  <select value={formData.statusKeanggotaan} onChange={(e) => setFormData({ ...formData, statusKeanggotaan: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer">
                    {['AKTIF', 'TIDAK AKTIF'].map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Periode</label>
                  <select value={formData.periode} onChange={(e) => setFormData({ ...formData, periode: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer">
                    {['2026/2027', '2025/2026', '2024/2025'].map((prd) => (
                      <option key={prd} value={prd}>{prd}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-gray-100 mt-6">
                <button type="submit" className="px-6 py-2 bg-[#1B5299] hover:bg-[#143E75] text-white text-xs font-semibold rounded-xl cursor-pointer">Simpan Perubahan</button>
              </div>
            </form>
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

export default DataAnggotaOrmawa;