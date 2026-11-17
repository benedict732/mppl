import React, { useState } from 'react';

interface MahasiswaCalon {
  nim: string;
  nama: string;
  semester: number;
  fakultas: string;
  prodi: string;
  mendaftarBeasiswa: string;
  status: string; // 'Penerima' | 'Calon Penerima' | 'Tidak Lulus'
}

const prodiMapping: Record<string, string[]> = {
  'TEKNIK': ['Informatika', 'Elektro', 'Sipil', 'Industri'],
  'FEB': ['Manajemen', 'Akuntansi'],
  'HUKUM': ['Ilmu Hukum'],
  'PGSD': ['Ilmu Pendidikan'],
  'KEPERAWATAN': ['Keperawatan'],
  'KEDOKTERAN': ['Kedokteran'],
  'PARIWISATA': ['Pariwisata'],
  'AGRIBISNIS': ['Agribisnis']
};

export const DataCalonPenerima: React.FC = () => {
  const [isBeasiswaOpen, setIsBeasiswaOpen] = useState(true);
  const [isRekapOpen, setIsRekapOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [periode, setPeriode] = useState('2026');
  const [currentPage, setCurrentPage] = useState(1);

  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterStep, setFilterStep] = useState<number>(1);
  const [selectedMhs, setSelectedMhs] = useState<MahasiswaCalon | null>(null);

  const [filterState, setFilterState] = useState({
    beasiswa: 'KIP Kuliah',
    fakultas: 'TEKNIK',
    prodi: 'Informatika',
    statusMahasiswa: 'Calon Penerima'
  });

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/biro/login';
  };

  const dataCalonMahasiswa: MahasiswaCalon[] = [
    {
      nim: '22031012',
      nama: 'Rizky Saputra',
      semester: 6,
      fakultas: 'HUKUM',
      prodi: 'Ilmu Hukum',
      mendaftarBeasiswa: 'Prestasi',
      status: 'Tidak Lulus'
    },
    {
      nim: '24011009',
      nama: 'Clara Manoppo',
      semester: 2,
      fakultas: 'KEPERAWATAN',
      prodi: 'Keperawatan',
      mendaftarBeasiswa: 'KIP Kuliah',
      status: 'Calon Penerima'
    }
  ];

  const handleOpenDetail = (mhs: MahasiswaCalon) => {
    setSelectedMhs(mhs);
    setIsDetailOpen(true);
  };

  const availableProdi = prodiMapping[filterState.fakultas] || ['Umum'];

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
                    <a href="/biro/beasiswa/penerima" className="block py-1.5 px-2 text-xs text-gray-300 hover:text-white transition">
                      › Data Penerima
                    </a>
                    <a href="/biro/beasiswa/calon" className="block py-1.5 px-2 text-xs text-blue-300 font-semibold bg-white/10 rounded">
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

              <div>
                <button
                  onClick={() => setIsRekapOpen(!isRekapOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg text-left transition cursor-pointer"
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
              className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold transition cursor-pointer"
            >
              <span>🚪</span>
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* AREA KONTEN UTAMA */}
        <main className="flex-1 p-8 overflow-y-auto">
          {/* HEADER TUNGGAL YANG RAPI */}
          <div className="mb-6 flex justify-between items-center">
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">BEASISWA / BASIS DATA</p>
              <h1 className="text-2xl font-bold text-gray-900 mt-0.5">Data Calon Penerima</h1>
              <p className="text-xs text-gray-500 mt-0.5">Data mahasiswa pendaftar beasiswa dan riwayat seleksinya.</p>
            </div>
            
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
          </div>

          {/* SEARCH & FILTER BAR */}
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

          {/* TABEL CALON PENERIMA */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm mb-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Daftar mahasiswa</h3>
                <p className="text-[11px] text-gray-400 mt-0.5">Menampilkan data mahasiswa calon penerima beasiswa</p>
              </div>
              <span className="text-xs bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded-xl border border-blue-100">
                Total Calon Penerima: {dataCalonMahasiswa.length} Mahasiswa
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50/80 text-gray-500 font-semibold uppercase text-[10px]">
                  <tr>
                    <th className="p-3">NIM</th>
                    <th className="p-3">NAMA LENGKAP</th>
                    <th className="p-3 text-center">SEMESTER</th>
                    <th className="p-3">FAKULTAS</th>
                    <th className="p-3">PROGRAM STUDI</th>
                    <th className="p-3">MENDAFTAR BEASISWA</th>
                    <th className="p-3 text-center">KETERANGAN</th>
                    <th className="p-3 text-right">AKSI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {dataCalonMahasiswa.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/60 transition">
                      <td className="p-3 text-gray-600 font-medium">{item.nim}</td>
                      <td className="p-3 font-bold text-gray-900">{item.nama}</td>
                      <td className="p-3 text-center text-gray-600">{item.semester}</td>
                      <td className="p-3 text-gray-600">{item.fakultas}</td>
                      <td className="p-3 text-gray-600">{item.prodi}</td>
                      <td className="p-3 text-gray-600 font-medium">{item.mendaftarBeasiswa}</td>
                      <td className="p-3 text-center">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-semibold ${
                          item.status === 'Calon Penerima' ? 'bg-amber-100 text-amber-700' :
                          item.status === 'Penerima' ? 'bg-emerald-100 text-emerald-700' :
                          'bg-red-100 text-red-600'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <button 
                          onClick={() => handleOpenDetail(item)}
                          className="text-blue-600 hover:underline font-semibold text-xs cursor-pointer"
                        >
                          Detail
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* PAGINATION HANYA PANAH KIRI KANAN */}
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

      {/* MODAL DETAIL RIWAYAT CALON */}
      {isDetailOpen && selectedMhs && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-100 p-6 space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-base font-bold text-[#0B2545]">Riwayat Calon Penerima Beasiswa</h3>
              <button onClick={() => setIsDetailOpen(false)} className="text-gray-400 hover:text-gray-600 font-bold cursor-pointer">✕</button>
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-lg">👤</div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">{selectedMhs.nama}</h4>
                  <p className="text-[11px] text-gray-500">NIM {selectedMhs.nim} · {selectedMhs.prodi}</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] font-semibold">● Calon Penerima</span>
            </div>

            <div className="pt-2 flex justify-end">
              <button onClick={() => setIsDetailOpen(false)} className="px-5 py-2 bg-[#1B5299] text-white rounded-lg font-semibold text-xs cursor-pointer">
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL FILTER BERTAHAP */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-100 p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Filter Berurutan</span>
                <h3 className="text-xs font-bold text-gray-800">
                  {filterStep === 1 ? '1. Pilih Beasiswa' : filterStep === 2 ? '2. Pilih Fakultas' : filterStep === 3 ? `3. Pilih Prodi (${filterState.fakultas})` : '4. Status Mahasiswa'}
                </h3>
              </div>
              <button onClick={() => setIsFilterOpen(false)} className="text-gray-400 hover:text-gray-600 font-bold text-xs cursor-pointer">✕</button>
            </div>

            {filterStep === 1 && (
              <div className="space-y-2">
                <div className="flex flex-col gap-2">
                  {['KIP Kuliah', 'VDMI', 'Kebanksentralan'].map((b) => (
                    <button key={b} onClick={() => setFilterState({ ...filterState, beasiswa: b })} className={`w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-left cursor-pointer transition ${filterState.beasiswa === b ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{b}</button>
                  ))}
                </div>
              </div>
            )}

            {filterStep === 2 && (
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                  {['TEKNIK', 'HUKUM', 'FEB', 'PGSD', 'KEPERAWATAN', 'KEDOKTERAN', 'PARIWISATA', 'AGRIBISNIS'].map((f) => (
                    <button key={f} onClick={() => { const firstProdi = prodiMapping[f]?.[0] || ''; setFilterState({ ...filterState, fakultas: f, prodi: firstProdi }); }} className={`px-3 py-2 rounded-xl text-[10px] font-semibold text-center cursor-pointer transition ${filterState.fakultas === f ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{f}</button>
                  ))}
                </div>
              </div>
            )}

            {filterStep === 3 && (
              <div className="space-y-2">
                <div className="flex flex-col gap-2 max-h-48 overflow-y-auto">
                  {availableProdi.map((p) => (
                    <button key={p} onClick={() => setFilterState({ ...filterState, prodi: p })} className={`w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-left cursor-pointer transition ${filterState.prodi === p ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{p}</button>
                  ))}
                </div>
              </div>
            )}

            {filterStep === 4 && (
              <div className="space-y-2">
                <div className="flex flex-col gap-2">
                  {['Penerima', 'Calon Penerima', 'Tidak Lulus'].map((s) => (
                    <button key={s} onClick={() => setFilterState({ ...filterState, statusMahasiswa: s })} className={`w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-left cursor-pointer transition ${filterState.statusMahasiswa === s ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{s}</button>
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
                  <button onClick={() => setIsFilterOpen(false)} className="px-4 py-1.5 bg-emerald-600 text-white text-xs font-semibold rounded-lg cursor-pointer">Terapkan Filter</button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataCalonPenerima;