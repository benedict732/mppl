import React, { useState } from 'react';

interface Mahasiswa {
  nim: string;
  nama: string;
  semester: number | string;
  fakultas: string;
  prodi: string;
  keterangan: string;
  beasiswa: string;
  status: string;
}

export const KelolaDataMahasiswa: React.FC = () => {
  const [isBeasiswaOpen, setIsBeasiswaOpen] = useState(true);
  const [isRekapOpen, setIsRekapOpen] = useState(false);
  const [search, setSearch] = useState('');

  // State Modal Popup
  const [activeModal, setActiveModal] = useState<'tambah' | 'edit' | 'hapus' | 'filter' | null>(null);
  const [selectedMahasiswa, setSelectedMahasiswa] = useState<Mahasiswa | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    nama: 'Benedictus Siby',
    nim: '22041001',
    semester: '6',
    fakultas: 'Teknik',
    beasiswaAktif: 'VDMI',
    statusMahasiswa: 'Aktif',
    keterangan: 'Penerima'
  });

  // Filter Chips State
  const [filterState, setFilterState] = useState({
    beasiswa: 'KIP',
    fakultas: 'TEKNIK',
    statusMahasiswa: 'AKTIF',
    statusPenerimaan: 'Penerima'
  });

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/biro/login';
  };

  const dataMahasiswa: Mahasiswa[] = [
    {
      nim: '22041001',
      nama: 'Benedictus Siby',
      semester: 6,
      fakultas: 'Teknik',
      prodi: 'Teknik / Informatika',
      keterangan: 'Penerima',
      beasiswa: 'KIP Kuliah',
      status: 'Aktif'
    },
    {
      nim: '23021005',
      nama: 'Maria Lestari',
      semester: 4,
      fakultas: 'Ekonomi',
      prodi: 'Ekonomi / Manajemen',
      keterangan: 'Calon Penerima',
      beasiswa: 'Kebanksentralan',
      status: 'Aktif'
    },
    {
      nim: '23051007',
      nama: 'Daniel Rondonuwu',
      semester: 4,
      fakultas: 'Pertanian',
      prodi: 'Pertanian / Agroteknologi',
      keterangan: 'Penerima',
      beasiswa: 'VDMI',
      status: 'Aktif'
    }
  ];

  const handleOpenEdit = (mhs: Mahasiswa) => {
    setSelectedMahasiswa(mhs);
    setFormData({
      nama: mhs.nama,
      nim: mhs.nim,
      semester: String(mhs.semester),
      fakultas: mhs.fakultas,
      beasiswaAktif: mhs.beasiswa,
      statusMahasiswa: mhs.status,
      keterangan: mhs.keterangan
    });
    setActiveModal('edit');
  };

  const handleOpenHapus = (mhs: Mahasiswa) => {
    setSelectedMahasiswa(mhs);
    setActiveModal('hapus');
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col font-sans text-gray-800 relative">
      <div className="flex flex-1">
        
        {/* SIDEBAR KIRI (11 MENU KONSISTEN DENGAN LOGO /logo.jpg) */}
        <aside className="w-64 bg-[#0B1E36] text-white flex flex-col justify-between p-4 shrink-0">
          <div>
            {/* LOGO KAMPUS /logo.jpg */}
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
                  className="w-full flex items-center justify-between px-3 py-2.5 bg-blue-600/30 text-blue-300 font-semibold rounded-lg text-left"
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
                    <a href="/biro/beasiswa/kelola" className="block py-1.5 px-2 text-xs text-blue-300 font-semibold bg-white/10 rounded">
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

        {/* AREA KONTEN UTAMA */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="mb-6">
            <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">BEASISWA / DATABASE</p>
            <h1 className="text-xl font-bold text-gray-900">Data Beasiswa</h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Kelola Data Mahasiswa</h2>
              <p className="text-xs text-gray-500 mt-1">Data mahasiswa penerima beasiswa dan riwayat penerimaannya.</p>
            </div>
            <button
              onClick={() => setActiveModal('tambah')}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#0B2545] hover:bg-[#133763] text-white text-xs font-semibold rounded-lg shadow-sm transition"
            >
              <span className="text-sm font-bold">+</span>
              <span>Tambah Data Mahasiswa</span>
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-8">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Cari nama mahasiswa</label>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Nama atau NIM..."
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>

              <div className="md:col-span-4">
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

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-900">Daftar mahasiswa</h3>
              <p className="text-[11px] text-gray-400 mt-0.5">Menampilkan data contoh untuk rancangan UI</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 text-gray-500 font-semibold uppercase text-[10px]">
                  <tr>
                    <th className="p-3">NIM</th>
                    <th className="p-3">NAMA LENGKAP</th>
                    <th className="p-3 text-center">SEMESTER</th>
                    <th className="p-3">FAKULTAS / PRODI</th>
                    <th className="p-3">KETERANGAN</th>
                    <th className="p-3">BEASISWA AKTIF</th>
                    <th className="p-3 text-center">STATUS MAHASISWA</th>
                    <th className="p-3 text-center">AKSI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {dataMahasiswa.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition">
                      <td className="p-3 text-gray-600 font-medium">{item.nim}</td>
                      <td className="p-3 font-bold text-gray-900">{item.nama}</td>
                      <td className="p-3 text-center text-gray-600">{item.semester}</td>
                      <td className="p-3 text-gray-600">{item.prodi}</td>
                      <td className="p-3 text-gray-600 font-medium">{item.keterangan}</td>
                      <td className="p-3 text-gray-600 font-medium">{item.beasiswa}</td>
                      <td className="p-3 text-center">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-semibold">
                          {item.status}
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <div className="flex justify-center items-center gap-1.5">
                          <button 
                            onClick={() => handleOpenEdit(item)}
                            className="p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs transition"
                          >
                            ✏️
                          </button>
                          <button 
                            onClick={() => handleOpenHapus(item)}
                            className="p-1.5 bg-red-600 hover:bg-red-700 text-white rounded text-xs transition"
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

      {/* MODAL TAMBAH DATA */}
      {activeModal === 'tambah' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="p-1 bg-blue-600 text-white text-xs rounded font-bold">+</span>
                <h3 className="text-sm font-bold text-gray-900">Tambah Data Mahasiswa</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-gray-600 font-bold text-sm">✕</button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setActiveModal(null); }} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Nama Mahasiswa</label>
                  <input type="text" value={formData.nama} onChange={(e) => setFormData({ ...formData, nama: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" required />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Nim</label>
                  <input type="text" value={formData.nim} onChange={(e) => setFormData({ ...formData, nim: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" required />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Semester</label>
                  <input type="text" value={formData.semester} onChange={(e) => setFormData({ ...formData, semester: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" required />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Fakultas</label>
                  <input type="text" value={formData.fakultas} onChange={(e) => setFormData({ ...formData, fakultas: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" required />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Beasiswa Aktif</label>
                  <input type="text" value={formData.beasiswaAktif} onChange={(e) => setFormData({ ...formData, beasiswaAktif: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" required />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Status Mahasiswa</label>
                  <input type="text" value={formData.statusMahasiswa} onChange={(e) => setFormData({ ...formData, statusMahasiswa: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" required />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1">Penerima / Calon Penerima</label>
                <input type="text" value={formData.keterangan} onChange={(e) => setFormData({ ...formData, keterangan: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" required />
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-6">
                <button type="button" onClick={() => setActiveModal(null)} className="px-6 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-lg">Batal</button>
                <button type="submit" className="px-6 py-2 bg-[#1B5299] hover:bg-[#143E75] text-white text-xs font-semibold rounded-lg">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL EDIT DATA */}
      {activeModal === 'edit' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="p-1 bg-blue-600 text-white text-xs rounded font-bold">✏️</span>
                <h3 className="text-sm font-bold text-gray-900">Edit Data Mahasiswa</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-gray-600 font-bold text-sm">✕</button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setActiveModal(null); }} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Nama Mahasiswa</label>
                  <input type="text" value={formData.nama} onChange={(e) => setFormData({ ...formData, nama: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" required />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Nim</label>
                  <input type="text" value={formData.nim} onChange={(e) => setFormData({ ...formData, nim: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" required />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Semester</label>
                  <input type="text" value={formData.semester} onChange={(e) => setFormData({ ...formData, semester: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" required />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Fakultas</label>
                  <input type="text" value={formData.fakultas} onChange={(e) => setFormData({ ...formData, fakultas: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" required />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Beasiswa Aktif</label>
                  <input type="text" value={formData.beasiswaAktif} onChange={(e) => setFormData({ ...formData, beasiswaAktif: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" required />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Status Mahasiswa</label>
                  <input type="text" value={formData.statusMahasiswa} onChange={(e) => setFormData({ ...formData, statusMahasiswa: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" required />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1">Penerima / Calon Penerima</label>
                <input type="text" value={formData.keterangan} onChange={(e) => setFormData({ ...formData, keterangan: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" required />
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-6">
                <button type="button" onClick={() => setActiveModal(null)} className="px-6 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-lg">Batal</button>
                <button type="submit" className="px-6 py-2 bg-[#1B5299] hover:bg-[#143E75] text-white text-xs font-semibold rounded-lg">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL HAPUS DATA */}
      {activeModal === 'hapus' && selectedMahasiswa && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200 p-6 text-center">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <span className="text-red-500">🗑️</span>
                <h3 className="text-xs font-bold text-gray-800">Hapus Data Mahasiswa</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-gray-600 font-bold text-xs">✕</button>
            </div>

            <div className="my-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-3xl font-extrabold border-4 border-red-200">
                !
              </div>
            </div>

            <h4 className="text-sm font-bold text-gray-900 mb-1">Apakah Anda yakin ingin menghapus data mahasiswa ini?</h4>
            <p className="text-[11px] text-gray-400 mb-4">Data yang telah dihapus tidak dapat dikembalikan dan akan hilang dari sistem</p>

            <div className="bg-red-50 border border-red-100 rounded-xl p-4 text-left text-xs mb-6 space-y-1">
              <div className="flex"><span className="w-20 text-gray-500 font-medium">Nama</span><span className="font-bold text-gray-800">: {selectedMahasiswa.nama}</span></div>
              <div className="flex"><span className="w-20 text-gray-500 font-medium">NIM</span><span className="font-bold text-gray-800">: {selectedMahasiswa.nim}</span></div>
              <div className="flex"><span className="w-20 text-gray-500 font-medium">Fakultas</span><span className="font-bold text-gray-800">: {selectedMahasiswa.fakultas}</span></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => setActiveModal(null)} className="py-2.5 border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-lg">Batal</button>
              <button onClick={() => setActiveModal(null)} className="py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg">Hapus</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL FILTER */}
      {activeModal === 'filter' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200 p-6 space-y-5">
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2">Beasiswa</label>
              <div className="flex flex-wrap gap-2">
                {['KIP', 'VDMI', 'BI'].map((b) => (
                  <button key={b} onClick={() => setFilterState({ ...filterState, beasiswa: b })} className={`px-4 py-1.5 rounded-lg text-xs font-semibold ${filterState.beasiswa === b ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}>{b}</button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2">Fakultas</label>
              <div className="flex flex-wrap gap-2">
                {['TEKNIK', 'HUKUM', 'FEB', 'PGSD', 'KEPERAWATAN', 'KEDOKTERAN', 'PARIWISATA', 'AGRIBISNIS'].map((f) => (
                  <button key={f} onClick={() => setFilterState({ ...filterState, fakultas: f })} className={`px-3 py-1.5 rounded-lg text-[10px] font-semibold ${filterState.fakultas === f ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}>{f}</button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2">Status Mahasiswa</label>
              <div className="flex flex-wrap gap-2">
                {['AKTIF', 'TIDAK AKTIF'].map((s) => (
                  <button key={s} onClick={() => setFilterState({ ...filterState, statusMahasiswa: s })} className={`px-4 py-1.5 rounded-lg text-xs font-semibold ${filterState.statusMahasiswa === s ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}>{s}</button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2">Status Penerimaan</label>
              <div className="flex flex-wrap gap-2">
                {['Penerima', 'Calon Penerima'].map((sp) => (
                  <button key={sp} onClick={() => setFilterState({ ...filterState, statusPenerimaan: sp })} className={`px-4 py-1.5 rounded-lg text-xs font-semibold ${filterState.statusPenerimaan === sp ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}>{sp}</button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-4">
              <button onClick={() => setFilterState({ beasiswa: '', fakultas: '', statusMahasiswa: '', statusPenerimaan: '' })} className="px-5 py-2 bg-red-600 text-white text-xs font-semibold rounded-lg">RESET</button>
              <div className="flex gap-2">
                <button onClick={() => setActiveModal(null)} className="px-5 py-2 border border-gray-300 text-gray-700 text-xs font-semibold rounded-lg">Batal</button>
                <button onClick={() => setActiveModal(null)} className="px-5 py-2 bg-blue-500 text-white text-xs font-semibold rounded-lg">TERAPKAN</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default KelolaDataMahasiswa;