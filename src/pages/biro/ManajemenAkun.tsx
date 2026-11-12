import React, { useState } from 'react';

interface AkunItem {
  id: string;
  namaOrmawa: string;
  username: string;
  email: string;
  status: 'Aktif' | 'Tidak Aktif';
  jenis: string;
}

export const ManajemenAkun: React.FC = () => {
  const [isBeasiswaOpen, setIsBeasiswaOpen] = useState(false);
  const [isRekapOpen, setIsRekapOpen] = useState(false);
  
  // State Filter & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [filterJenis, setFilterJenis] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  // State Modal Edit Akun
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedAkun, setSelectedAkun] = useState<AkunItem | null>(null);
  const [formData, setFormData] = useState({ namaOrmawa: '', username: '', email: '', status: 'Aktif' as 'Aktif' | 'Tidak Aktif' });

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/biro/login';
  };

  const daftarAkun: AkunItem[] = [
    { id: '1', namaOrmawa: 'BEM Universitas', username: 'admin_bem', email: 'admin.bem@kampus.ac.id', status: 'Aktif', jenis: 'BEM' },
    { id: '2', namaOrmawa: 'BPM Universitas', username: 'admin_bpm', email: 'admin.bpm@kampus.ac.id', status: 'Aktif', jenis: 'BPM' },
    { id: '3', namaOrmawa: 'UKM Seni dan Budaya', username: 'admin_seni', email: 'admin.seni@kampus.ac.id', status: 'Tidak Aktif', jenis: 'UKM' },
    { id: '4', namaOrmawa: 'MPM Universitas', username: 'admin_mpm', email: 'admin.mpm@kampus.ac.id', status: 'Aktif', jenis: 'MPM' },
    { id: '5', namaOrmawa: 'UKM Olahraga', username: 'admin_olahraga', email: 'admin.olahraga@kampus.ac.id', status: 'Aktif', jenis: 'UKM' },
  ];

  const handleOpenEdit = (akun: AkunItem) => {
    setSelectedAkun(akun);
    setFormData({ namaOrmawa: akun.namaOrmawa, username: akun.username, email: akun.email, status: akun.status });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Akun untuk "${formData.namaOrmawa}" berhasil diperbarui!`);
    setIsEditModalOpen(false);
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

              <a href="/biro/ormawa" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
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

              <a href="/biro/manajemen-akun" className="flex items-center gap-3 px-3 py-2.5 bg-blue-600/30 text-blue-300 font-semibold rounded-lg transition">
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
            <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">BIRO / MANAJEMEN AKUN</p>
            <h1 className="text-xl font-bold text-gray-900">Manajemen Akun</h1>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Manajemen Akun</h2>
            <p className="text-xs text-gray-500 mt-1">Kelola akun Admin Ormawa dan atur status akses ke sistem SI-BEO.</p>
          </div>

          {/* KARTU RINGKASAN AKUN */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-6 grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="px-4">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">RINGKASAN AKUN ADMIN ORMAWA</p>
              <p className="text-3xl font-extrabold text-gray-900 mt-2">24</p>
              <p className="text-xs text-gray-500 mt-0.5">Total akun</p>
            </div>
            <div className="px-4 pt-4 md:pt-0">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">&nbsp;</p>
              <p className="text-3xl font-extrabold text-emerald-600 mt-2">20</p>
              <p className="text-xs text-gray-500 mt-0.5">Akun aktif</p>
            </div>
            <div className="px-4 pt-4 md:pt-0">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">&nbsp;</p>
              <p className="text-3xl font-extrabold text-amber-600 mt-2">4</p>
              <p className="text-xs text-gray-500 mt-0.5">Tidak aktif</p>
            </div>
            <div className="px-4 pt-4 md:pt-0">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">&nbsp;</p>
              <p className="text-3xl font-extrabold text-blue-600 mt-2">8</p>
              <p className="text-xs text-gray-500 mt-0.5">Jenis Ormawa</p>
            </div>
          </div>

          {/* FILTER & PENCARIAN BAR */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              <div className="md:col-span-5">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Cari nama Ormawa / username</label>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Masukkan nama atau username..." 
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                />
              </div>

              <div className="md:col-span-3">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Jenis Ormawa</label>
                <select 
                  value={filterJenis}
                  onChange={(e) => setFilterJenis(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-600 cursor-pointer"
                >
                  <option value="">Semua jenis Ormawa</option>
                  <option value="BEM">BEM</option>
                  <option value="BPM">BPM</option>
                  <option value="MPM">MPM</option>
                  <option value="UKM">UKM</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Status akun</label>
                <select 
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-600 cursor-pointer"
                >
                  <option value="">Semua status</option>
                  <option value="Aktif">Aktif</option>
                  <option value="Tidak Aktif">Tidak Aktif</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <button 
                  onClick={() => alert('Filter diterapkan!')}
                  className="w-full py-2 bg-[#0B2545] hover:bg-[#133763] text-white text-xs font-semibold rounded-lg shadow transition"
                >
                  Terapkan Filter
                </button>
              </div>
            </div>
          </div>

          {/* TABEL DAFTAR AKUN ADMIN ORMAWA */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-900">Daftar Akun Admin Ormawa</h3>
              <p className="text-[11px] text-gray-400 mt-0.5">Kelola akses akun administrator setiap organisasi mahasiswa.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 text-gray-500 font-semibold uppercase text-[10px]">
                  <tr>
                    <th className="p-3">NAMA ORMAWA</th>
                    <th className="p-3">USERNAME</th>
                    <th className="p-3">EMAIL</th>
                    <th className="p-3">STATUS AKUN</th>
                    <th className="p-3 text-right">AKSI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {daftarAkun.map((akun) => (
                    <tr key={akun.id} className="hover:bg-gray-50 transition">
                      <td className="p-3 font-bold text-gray-900">{akun.namaOrmawa}</td>
                      <td className="p-3 text-gray-600">{akun.username}</td>
                      <td className="p-3 text-gray-600">{akun.email}</td>
                      <td className="p-3">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-semibold ${
                          akun.status === 'Aktif' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {akun.status}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <button 
                          onClick={() => handleOpenEdit(akun)}
                          className="text-blue-600 hover:underline font-semibold text-xs"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

      {/* ================= MODAL EDIT AKUN (DENGAN BLUR BACKGROUND) ================= */}
      {isEditModalOpen && selectedAkun && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <h3 className="text-sm font-bold text-gray-900">Edit Akun Admin Ormawa</h3>
              <button onClick={() => setIsEditModalOpen(false)} className="text-gray-400 hover:text-gray-600 font-bold text-sm">✕</button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Nama Ormawa</label>
                <input 
                  type="text" 
                  value={formData.namaOrmawa} 
                  onChange={(e) => setFormData({ ...formData, namaOrmawa: e.target.value })} 
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                  required 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Username</label>
                <input 
                  type="text" 
                  value={formData.username} 
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })} 
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                  required 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Email Resmi</label>
                <input 
                  type="email" 
                  value={formData.email} 
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                  required 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Status Akun</label>
                <select 
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as 'Aktif' | 'Tidak Aktif' })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Tidak Aktif">Tidak Aktif</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-gray-100">
                <button 
                  type="button" 
                  onClick={() => setIsEditModalOpen(false)} 
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-50"
                >
                  Batal
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-sm"
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default ManajemenAkun;