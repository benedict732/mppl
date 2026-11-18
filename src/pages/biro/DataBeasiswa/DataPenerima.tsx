import React, { useState } from 'react';

interface MahasiswaPenerima {
  nim: string;
  nama: string;
  semester: number | string;
  fakultas: string;
  prodi: string;
  beasiswa: string;
  status: string; // 'Penerima' | 'Mantan Penerima' | 'Dikeluarkan'
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

export const DataPenerima: React.FC = () => {
  const [isBeasiswaOpen, setIsBeasiswaOpen] = useState(true);
  const [search, setSearch] = useState('');
  const [periode, setPeriode] = useState('2026');
  const [currentPage, setCurrentPage] = useState(1);
  
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterStep, setFilterStep] = useState<number>(1);
  const [selectedMhs, setSelectedMhs] = useState<MahasiswaPenerima | null>(null);

  // State Modal CRUD (Tambah, Edit, Hapus)
  const [activeModal, setActiveModal] = useState<'tambah' | 'edit' | 'hapus' | null>(null);

  // State untuk Pop-up Konfirmasi Logout
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    nim: '',
    nama: '',
    semester: '6',
    fakultas: 'TEKNIK',
    prodi: 'Informatika',
    beasiswa: 'KIP Kuliah',
    status: 'Penerima'
  });

  const [filterState, setFilterState] = useState({
    beasiswa: 'KIP Kuliah',
    fakultas: 'TEKNIK',
    prodi: 'Informatika',
    statusMahasiswa: 'Penerima'
  });

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/biro/login';
  };

  const [dataMahasiswa, setDataMahasiswa] = useState<MahasiswaPenerima[]>([
    {
      nim: '22041001',
      nama: 'Benedictus Siby',
      semester: 6,
      fakultas: 'TEKNIK',
      prodi: 'Informatika',
      beasiswa: 'KIP Kuliah',
      status: 'Penerima'
    },
    {
      nim: '23021005',
      nama: 'Maria Lestari',
      semester: 4,
      fakultas: 'EKONOMI DAN BISNIS',
      prodi: 'Manajemen',
      beasiswa: 'Kebanksentralan',
      status: 'Penerima'
    },
    {
      nim: '23051007',
      nama: 'Daniel Rondonuwu',
      semester: 4,
      fakultas: 'PERTANIAN',
      prodi: 'Agribisnis',
      beasiswa: 'VDMI',
      status: 'Mantan Penerima'
    },
    {
      nim: '21011012',
      nama: 'Sarah Wowor',
      semester: 8,
      fakultas: 'HUKUM',
      prodi: 'Ilmu Hukum',
      beasiswa: 'KIP Kuliah',
      status: 'Dikeluarkan'
    }
  ]);

  const handleOpenDetail = (mhs: MahasiswaPenerima) => {
    setSelectedMhs(mhs);
    setIsDetailOpen(true);
  };

  const handleOpenEdit = (mhs: MahasiswaPenerima) => {
    setSelectedMhs(mhs);
    setFormData({
      nim: mhs.nim,
      nama: mhs.nama,
      semester: String(mhs.semester),
      fakultas: mhs.fakultas,
      prodi: mhs.prodi,
      beasiswa: mhs.beasiswa,
      status: mhs.status
    });
    setActiveModal('edit');
  };

  const handleOpenHapus = (mhs: MahasiswaPenerima) => {
    setSelectedMhs(mhs);
    setActiveModal('hapus');
  };

  const availableProdi = prodiMapping[filterState.fakultas] || ['Umum'];
  const availableProdiForm = prodiMapping[formData.fakultas] || ['Informatika'];

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
                  className="w-full flex items-center justify-between px-3 py-2.5 bg-blue-600/30 text-blue-300 font-semibold rounded-lg text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span>🎓</span>
                    <span>Data Beasiswa</span>
                  </div>
                  <span className="text-[10px]">{isBeasiswaOpen ? '▲' : '▼'}</span>
                </button>

                {isBeasiswaOpen && (
                  <div className="ml-6 mt-1 space-y-1 border-l border-blue-400/30 pl-3">
                    <a href="/biro/beasiswa/penerima" className="block py-1.5 px-2 text-xs text-blue-300 font-semibold bg-white/10 rounded">
                      › Data Penerima
                    </a>
                    <a href="/biro/beasiswa/calon" className="block py-1.5 px-2 text-xs text-gray-300 hover:text-white transition">
                      › Data Calon Penerima
                    </a>
                  </div>
                )}
              </div>

              <a href="/biro/ormawa" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
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
          <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">BEASISWA / BASIS DATA</p>
              <h1 className="text-2xl font-bold text-gray-900 mt-0.5">Data Penerima</h1>
              <p className="text-xs text-gray-500 mt-0.5">Data mahasiswa penerima beasiswa, riwayat penerimaan, serta pengelolaan data.</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/40 shadow-sm">
                <span className="text-xs font-bold text-gray-500">Periode:</span>
                <select
                  value={periode}
                  onChange={(e) => setPeriode(e.target.value)}
                  className="bg-transparent text-xs font-semibold text-gray-800 outline-none cursor-pointer"
                >
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                </select>
              </div>

              <button
                onClick={() => {
                  setFormData({ nim: '', nama: '', semester: '1', fakultas: 'TEKNIK', prodi: 'Informatika', beasiswa: 'KIP Kuliah', status: 'Penerima' });
                  setActiveModal('tambah');
                }}
                className="px-4 py-2 bg-[#0B2545] hover:bg-[#133763] text-white text-xs font-semibold rounded-xl shadow-sm transition cursor-pointer"
              >
                Tambah Data
              </button>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm mb-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-8">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Cari nama mahasiswa</label>
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
                  onClick={() => { setFilterStep(1); setIsFilterOpen(true); }}
                  className="w-full px-4 py-2 border border-gray-200/80 rounded-xl text-xs flex justify-between items-center cursor-pointer bg-white/90 text-gray-600 hover:border-blue-400 transition"
                >
                  <span>Filter berdasarkan kriteria...</span>
                  <span>🔍</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm mb-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Daftar mahasiswa</h3>
                <p className="text-[11px] text-gray-400 mt-0.5">Menampilkan data mahasiswa penerima beasiswa</p>
              </div>
              <span className="text-xs bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded-xl border border-blue-100">
                Total Penerima: {dataMahasiswa.length} Mahasiswa
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
                    <th className="p-3">BEASISWA AKTIF</th>
                    <th className="p-3 text-center">KETERANGAN</th>
                    <th className="p-3 text-center">AKSI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {dataMahasiswa.map((item: MahasiswaPenerima, idx: number) => (
                    <tr key={idx} className="hover:bg-white/60 transition">
                      <td className="p-3 text-gray-600 font-medium">{item.nim}</td>
                      <td className="p-3 font-bold text-gray-900">{item.nama}</td>
                      <td className="p-3 text-center text-gray-600">{item.semester}</td>
                      <td className="p-3 text-gray-600">{item.fakultas}</td>
                      <td className="p-3 text-gray-600">{item.prodi}</td>
                      <td className="p-3 text-gray-600 font-medium">{item.beasiswa}</td>
                      <td className="p-3 text-center">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-semibold ${
                          item.status === 'Penerima' ? 'bg-emerald-100 text-emerald-700' :
                          item.status === 'Mantan Penerima' ? 'bg-blue-100 text-blue-700' :
                          'bg-red-100 text-red-600'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <div className="flex justify-center items-center gap-1.5">
                          <button 
                            onClick={() => handleOpenDetail(item)}
                            className="px-2.5 py-1 text-blue-600 hover:underline font-semibold text-xs cursor-pointer"
                          >
                            Detail
                          </button>
                          <button 
                            onClick={() => handleOpenEdit(item)}
                            className="p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs transition cursor-pointer shadow-sm"
                            title="Edit"
                          >
                            ✏️
                          </button>
                          <button 
                            onClick={() => handleOpenHapus(item)}
                            className="p-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs transition cursor-pointer shadow-sm"
                            title="Hapus"
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500">
              <span>Halaman {currentPage} dari total data</span>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  className="w-8 h-8 bg-[#0B1E36] hover:bg-[#133763] text-white rounded-lg flex items-center justify-center cursor-pointer shadow-sm transition"
                >
                  ◄
                </button>
                <button 
                  onClick={() => setCurrentPage(p => p + 1)}
                  className="w-8 h-8 bg-[#0B1E36] hover:bg-[#133763] text-white rounded-lg flex items-center justify-center cursor-pointer shadow-sm transition"
                >
                  ►
                </button>
              </div>
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

      {/* MODAL DETAIL */}
      {isDetailOpen && selectedMhs && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-100 p-6 space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-base font-bold text-[#0B2545]">Riwayat Beasiswa</h3>
              <button onClick={() => setIsDetailOpen(false)} className="text-gray-400 hover:text-gray-600 font-bold cursor-pointer">✕</button>
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-lg">👤</div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">{selectedMhs.nama}</h4>
                  <p className="text-[11px] text-gray-500">NIM {selectedMhs.nim}</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-semibold">● Penerima Aktif</span>
            </div>

            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">BEASISWA AKTIF</p>
              <div className="p-3 border border-gray-100 bg-gray-50/50 rounded-xl flex justify-between items-center">
                <div>
                  <p className="font-bold text-xs text-gray-900">{selectedMhs.beasiswa}</p>
                  <p className="text-[10px] text-gray-400">Tahun Akademik 2026/2027</p>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-semibold">Aktif</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button onClick={() => setIsDetailOpen(false)} className="px-5 py-2 bg-[#1B5299] text-white rounded-lg font-semibold text-xs cursor-pointer">
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL TAMBAH DATA */}
      {activeModal === 'tambah' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 p-6">
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <h3 className="text-sm font-bold text-gray-900">Tambah Data Penerima</h3>
              <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-gray-600 font-bold text-sm cursor-pointer">✕</button>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              setDataMahasiswa([...dataMahasiswa, formData]);
              setActiveModal(null);
            }} className="space-y-4 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Nama Lengkap</label>
                  <input type="text" value={formData.nama} onChange={(e) => setFormData({ ...formData, nama: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none bg-white" required />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">NIM</label>
                  <input type="text" value={formData.nim} onChange={(e) => setFormData({ ...formData, nim: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none bg-white" required />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Semester</label>
                  <select value={formData.semester} onChange={(e) => setFormData({ ...formData, semester: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none bg-white cursor-pointer">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((s: number) => <option key={s} value={s}>Semester {s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Fakultas</label>
                  <select value={formData.fakultas} onChange={(e) => {
                    const fak = e.target.value;
                    setFormData({ ...formData, fakultas: fak, prodi: prodiMapping[fak]?.[0] || '' });
                  }} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none bg-white cursor-pointer">
                    {Object.keys(prodiMapping).map((f: string) => <option key={f} value={f}>{f}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Program Studi</label>
                  <select value={formData.prodi} onChange={(e) => setFormData({ ...formData, prodi: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none bg-white cursor-pointer">
                    {availableProdiForm.map((p: string) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Beasiswa</label>
                  <select value={formData.beasiswa} onChange={(e) => setFormData({ ...formData, beasiswa: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none bg-white cursor-pointer">
                    <option value="KIP Kuliah">KIP Kuliah</option>
                    <option value="VDMI">VDMI</option>
                    <option value="Kebanksentralan">Kebanksentralan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Status Keterangan</label>
                  <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none bg-white cursor-pointer">
                    <option value="Penerima">Penerima</option>
                    <option value="Mantan Penerima">Mantan Penerima</option>
                    <option value="Dikeluarkan">Dikeluarkan</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-6">
                <button type="button" onClick={() => setActiveModal(null)} className="px-6 py-2 border border-gray-300 text-gray-700 text-xs font-semibold rounded-xl cursor-pointer">Batal</button>
                <button type="submit" className="px-6 py-2 bg-[#1B5299] text-white text-xs font-semibold rounded-xl cursor-pointer">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL EDIT DATA */}
      {activeModal === 'edit' && selectedMhs && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 p-6">
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <h3 className="text-sm font-bold text-gray-900">Edit Data Penerima</h3>
              <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-gray-600 font-bold text-sm cursor-pointer">✕</button>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              setDataMahasiswa(dataMahasiswa.map((m: MahasiswaPenerima) => m.nim === selectedMhs.nim ? formData : m));
              setActiveModal(null);
            }} className="space-y-4 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Nama Lengkap</label>
                  <input type="text" value={formData.nama} onChange={(e) => setFormData({ ...formData, nama: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none bg-white" required />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">NIM</label>
                  <input type="text" value={formData.nim} onChange={(e) => setFormData({ ...formData, nim: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none bg-white" required />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Semester</label>
                  <select value={formData.semester} onChange={(e) => setFormData({ ...formData, semester: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none bg-white cursor-pointer">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((s: number) => <option key={s} value={s}>Semester {s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Fakultas</label>
                  <select value={formData.fakultas} onChange={(e) => {
                    const fak = e.target.value;
                    setFormData({ ...formData, fakultas: fak, prodi: prodiMapping[fak]?.[0] || '' });
                  }} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none bg-white cursor-pointer">
                    {Object.keys(prodiMapping).map((f: string) => <option key={f} value={f}>{f}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Program Studi</label>
                  <select value={formData.prodi} onChange={(e) => setFormData({ ...formData, prodi: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none bg-white cursor-pointer">
                    {availableProdiForm.map((p: string) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Beasiswa</label>
                  <select value={formData.beasiswa} onChange={(e) => setFormData({ ...formData, beasiswa: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none bg-white cursor-pointer">
                    <option value="KIP Kuliah">KIP Kuliah</option>
                    <option value="VDMI">VDMI</option>
                    <option value="Kebanksentralan">Kebanksentralan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Status Keterangan</label>
                  <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none bg-white cursor-pointer">
                    <option value="Penerima">Penerima</option>
                    <option value="Mantan Penerima">Mantan Penerima</option>
                    <option value="Dikeluarkan">Dikeluarkan</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-6">
                <button type="button" onClick={() => setActiveModal(null)} className="px-6 py-2 border border-gray-300 text-gray-700 text-xs font-semibold rounded-xl cursor-pointer">Batal</button>
                <button type="submit" className="px-6 py-2 bg-[#1B5299] text-white text-xs font-semibold rounded-xl cursor-pointer">Simpan Perubahan</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL HAPUS */}
      {activeModal === 'hapus' && selectedMhs && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 text-center">
            <div className="my-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-3xl font-extrabold border-4 border-red-200">!</div>
            </div>
            <h4 className="text-sm font-bold text-gray-900 mb-1">Hapus data penerima ini?</h4>
            <p className="text-[11px] text-gray-400 mb-4">{selectedMhs.nama} ({selectedMhs.nim})</p>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => setActiveModal(null)} className="py-2.5 border border-gray-300 text-gray-700 text-xs font-semibold rounded-xl cursor-pointer">Batal</button>
              <button onClick={() => {
                setDataMahasiswa(dataMahasiswa.filter((m: MahasiswaPenerima) => m.nim !== selectedMhs.nim));
                setActiveModal(null);
              }} className="py-2.5 bg-red-600 text-white text-xs font-semibold rounded-xl cursor-pointer">Hapus</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL FILTER */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <h3 className="text-xs font-bold text-gray-800">Filter Berurutan</h3>
              <button onClick={() => setIsFilterOpen(false)} className="text-gray-400 hover:text-gray-600 font-bold text-xs cursor-pointer">✕</button>
            </div>
            {filterStep === 1 && (
              <div className="flex flex-col gap-2">
                {['KIP Kuliah', 'VDMI', 'Kebanksentralan'].map((b: string) => (
                  <button key={b} onClick={() => setFilterState({ ...filterState, beasiswa: b })} className={`w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-left cursor-pointer transition ${filterState.beasiswa === b ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>{b}</button>
                ))}
              </div>
            )}
            {filterStep === 2 && (
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(prodiMapping).map((f: string) => (
                  <button key={f} onClick={() => setFilterState({ ...filterState, fakultas: f })} className={`px-3 py-2 rounded-xl text-[10px] font-semibold text-center cursor-pointer transition ${filterState.fakultas === f ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>{f}</button>
                ))}
              </div>
            )}
            {filterStep === 3 && (
              <div className="flex flex-col gap-2">
                {availableProdi.map((p: string) => (
                  <button key={p} onClick={() => setFilterState({ ...filterState, prodi: p })} className={`w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-left cursor-pointer transition ${filterState.prodi === p ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>{p}</button>
                ))}
              </div>
            )}
            {filterStep === 4 && (
              <div className="flex flex-col gap-2">
                {['Penerima', 'Mantan Penerima', 'Dikeluarkan'].map((s: string) => (
                  <button key={s} onClick={() => setFilterState({ ...filterState, statusMahasiswa: s })} className={`w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-left cursor-pointer transition ${filterState.statusMahasiswa === s ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>{s}</button>
                ))}
              </div>
            )}
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              {filterStep > 1 ? <button onClick={() => setFilterStep(filterStep - 1)} className="px-4 py-1.5 bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg cursor-pointer">Kembali</button> : <div />}
              {filterStep < 4 ? <button onClick={() => setFilterStep(filterStep + 1)} className="px-4 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-lg cursor-pointer">Lanjut ➔</button> : <button onClick={() => setIsFilterOpen(false)} className="px-4 py-1.5 bg-emerald-600 text-white text-xs font-semibold rounded-lg cursor-pointer">Terapkan</button>}
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

export default DataPenerima;