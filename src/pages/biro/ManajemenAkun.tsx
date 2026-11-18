import React, { useState } from 'react';

interface AkunItem {
  id: string;
  namaOrmawa: string;
  email: string;
  status: 'Aktif' | 'Tidak Aktif';
}

export const ManajemenAkun: React.FC = () => {
  const [isBeasiswaOpen, setIsBeasiswaOpen] = useState(false);

  // State Modal Tambah Akun
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addForm, setAddForm] = useState({
    namaOrmawa: '',
    email: '',
    status: 'Aktif' as 'Aktif' | 'Tidak Aktif',
  });

  // State Modal Edit Akun
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedAkun, setSelectedAkun] = useState<AkunItem | null>(null);
  const [editForm, setEditForm] = useState({
    namaOrmawa: '',
    email: '',
    status: 'Aktif' as 'Aktif' | 'Tidak Aktif',
  });

  // State Modal Hapus Akun
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [akunToDelete, setAkunToDelete] = useState<AkunItem | null>(null);

  // State untuk Pop-up Konfirmasi Logout
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  // Data Akun Admin Ormawa
  const [daftarAkun, setDaftarAkun] = useState<AkunItem[]>([
    { id: '1', namaOrmawa: 'BEM', email: 'admin.bem@kampus.ac.id', status: 'Aktif' },
    { id: '2', namaOrmawa: 'BPM', email: 'admin.bpm@kampus.ac.id', status: 'Aktif' },
    { id: '3', namaOrmawa: 'MPM', email: 'admin.mpm@kampus.ac.id', status: 'Aktif' },
    { id: '4', namaOrmawa: 'BEM', email: 'admin.bemteknik@kampus.ac.id', status: 'Tidak Aktif' },
  ]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/biro/login';
  };

  const handleOpenEdit = (akun: AkunItem) => {
    setSelectedAkun(akun);
    setEditForm({
      namaOrmawa: akun.namaOrmawa,
      email: akun.email,
      status: akun.status,
    });
    setIsEditModalOpen(true);
  };

  const handleOpenDelete = (akun: AkunItem) => {
    setAkunToDelete(akun);
    setIsDeleteModalOpen(true);
  };

  const handleSaveAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!addForm.namaOrmawa) {
      alert('Silakan pilih Ormawa terlebih dahulu!');
      return;
    }
    const newAkun: AkunItem = {
      id: String(Date.now()),
      namaOrmawa: addForm.namaOrmawa,
      email: addForm.email,
      status: addForm.status,
    };
    setDaftarAkun([newAkun, ...daftarAkun]);
    setIsAddModalOpen(false);
    setAddForm({ namaOrmawa: '', email: '', status: 'Aktif' });
    alert('Akun Admin Ormawa berhasil ditambahkan!');
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAkun) return;

    setDaftarAkun(
      daftarAkun.map((item) =>
        item.id === selectedAkun.id
          ? { ...item, namaOrmawa: editForm.namaOrmawa, email: editForm.email, status: editForm.status }
          : item
      )
    );
    setIsEditModalOpen(false);
    alert('Perubahan akun berhasil disimpan!');
  };

  const handleConfirmDelete = () => {
    if (!akunToDelete) return;
    setDaftarAkun(daftarAkun.filter((item) => item.id !== akunToDelete.id));
    setIsDeleteModalOpen(false);
    setAkunToDelete(null);
    alert('Akun admin berhasil dihapus!');
  };

  const totalAkun = daftarAkun.length;
  const akunAktif = daftarAkun.filter((item) => item.status === 'Aktif').length;
  const akunTidakAktif = daftarAkun.filter((item) => item.status === 'Tidak Aktif').length;

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

              <a href="/biro/manajemen-akun" className="flex items-center gap-3 px-3 py-2.5 bg-blue-600/30 text-blue-300 font-semibold rounded-lg transition">
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
          {/* HEADER UTAMA */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">BIRO / MANAJEMEN AKUN</p>
              <h1 className="text-2xl font-bold text-gray-900 mt-0.5">Manajemen Akun</h1>
              <p className="text-xs text-gray-500 mt-0.5">Kelola akun Admin Ormawa dan atur status akses ke sistem SI-BEO.</p>
            </div>

            <button
              onClick={() => {
                setAddForm({ namaOrmawa: '', email: '', status: 'Aktif' });
                setIsAddModalOpen(true);
              }}
              className="px-4 py-2.5 bg-[#0B2545] hover:bg-[#133763] text-white text-xs font-semibold rounded-xl shadow transition cursor-pointer"
            >
              Tambah Akun
            </button>
          </div>

          {/* KARTU RINGKASAN AKUN */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="px-4">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">TOTAL AKUN</p>
              <p className="text-3xl font-extrabold text-gray-900 mt-2">{totalAkun}</p>
              <p className="text-xs text-gray-500 mt-0.5">Akun terdaftar</p>
            </div>
            <div className="px-4 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-gray-100">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">AKUN AKTIF</p>
              <p className="text-3xl font-extrabold text-emerald-600 mt-2">{akunAktif}</p>
              <p className="text-xs text-gray-500 mt-0.5">Dapat mengakses sistem</p>
            </div>
            <div className="px-4 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-gray-100">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">TIDAK AKTIF</p>
              <p className="text-3xl font-extrabold text-amber-600 mt-2">{akunTidakAktif}</p>
              <p className="text-xs text-gray-500 mt-0.5">Akses ditangguhkan</p>
            </div>
          </div>

          {/* TABEL DAFTAR AKUN ADMIN ORMAWA */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm mb-8">
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-900">Daftar Akun Admin Ormawa</h3>
              <p className="text-[11px] text-gray-400 mt-0.5">Kelola akses akun administrator setiap organisasi mahasiswa.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50/80 text-gray-500 font-semibold uppercase text-[10px]">
                  <tr>
                    <th className="p-3">ORMAWA</th>
                    <th className="p-3">EMAIL</th>
                    <th className="p-3">STATUS AKUN</th>
                    <th className="p-3 text-center">AKSI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {daftarAkun.map((akun) => (
                    <tr key={akun.id} className="hover:bg-white/60 transition">
                      <td className="p-3 font-bold text-gray-900">{akun.namaOrmawa}</td>
                      <td className="p-3 text-gray-600">{akun.email}</td>
                      <td className="p-3">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-semibold ${
                          akun.status === 'Aktif' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {akun.status}
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <div className="flex justify-center items-center gap-1.5">
                          <button 
                            onClick={() => handleOpenEdit(akun)}
                            className="p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs transition cursor-pointer shadow-sm"
                            title="Edit"
                          >
                            ✏️
                          </button>
                          <button 
                            onClick={() => handleOpenDelete(akun)}
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
          </div>

          {/* FOOTER BAWAH */}
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

      {/* ================= MODAL TAMBAH AKUN ================= */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 space-y-4 animate-in fade-in zoom-in duration-200 border border-gray-100">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <h3 className="text-sm font-bold text-gray-900">Tambah Akun Admin Ormawa</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-gray-400 hover:text-gray-600 font-bold text-sm cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleSaveAdd} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Ormawa</label>
                <select 
                  value={addForm.namaOrmawa}
                  onChange={(e) => setAddForm({ ...addForm, namaOrmawa: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                  required
                >
                  <option value="" disabled>-- Pilih Ormawa --</option>
                  <option value="MPM">MPM</option>
                  <option value="BPM">BPM</option>
                  <option value="BEM">BEM</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Email Resmi</label>
                <input 
                  type="email" 
                  value={addForm.email} 
                  onChange={(e) => setAddForm({ ...addForm, email: e.target.value })} 
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                  required 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Status Akun</label>
                <select 
                  value={addForm.status}
                  onChange={(e) => setAddForm({ ...addForm, status: e.target.value as 'Aktif' | 'Tidak Aktif' })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Tidak Aktif">Tidak Aktif</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-gray-100">
                <button 
                  type="button" 
                  onClick={() => setIsAddModalOpen(false)} 
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl text-xs font-semibold hover:bg-gray-50 cursor-pointer"
                >
                  Batal
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm cursor-pointer"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL EDIT AKUN ================= */}
      {isEditModalOpen && selectedAkun && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 space-y-4 animate-in fade-in zoom-in duration-200 border border-gray-100">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <h3 className="text-sm font-bold text-gray-900">Edit Akun Admin Ormawa</h3>
              <button onClick={() => setIsEditModalOpen(false)} className="text-gray-400 hover:text-gray-600 font-bold text-sm cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Ormawa</label>
                <select 
                  value={editForm.namaOrmawa}
                  onChange={(e) => setEditForm({ ...editForm, namaOrmawa: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                  required
                >
                  <option value="" disabled>-- Pilih Ormawa --</option>
                  <option value="MPM">MPM</option>
                  <option value="BPM">BPM</option>
                  <option value="BEM">BEM</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Email Resmi</label>
                <input 
                  type="email" 
                  value={editForm.email} 
                  onChange={(e) => setEditForm({ ...editForm, email: e.target.value })} 
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                  required 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Status Akun</label>
                <select 
                  value={editForm.status}
                  onChange={(e) => setEditForm({ ...editForm, status: e.target.value as 'Aktif' | 'Tidak Aktif' })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Tidak Aktif">Tidak Aktif</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-gray-100">
                <button 
                  type="button" 
                  onClick={() => setIsEditModalOpen(false)} 
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl text-xs font-semibold hover:bg-gray-50 cursor-pointer"
                >
                  Batal
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm cursor-pointer"
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL KONFIRMASI HAPUS AKUN ================= */}
      {isDeleteModalOpen && akunToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 text-center animate-in fade-in zoom-in duration-200 border border-gray-100">
            <div className="my-3 flex justify-center">
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-2xl font-black border-4 border-red-50">
                🗑️
              </div>
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-1">Hapus Akun Ini?</h4>
            <p className="text-xs text-gray-500 mb-5 px-2">
              Apakah Anda yakin ingin menghapus akun admin <br />
              <span className="font-bold text-gray-800">"{akunToDelete.namaOrmawa} ({akunToDelete.email})"</span>? Tindakan ini tidak dapat dibatalkan.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => {
                  setIsDeleteModalOpen(false);
                  setAkunToDelete(null);
                }} 
                className="py-2.5 border border-gray-300 text-gray-700 text-xs font-semibold rounded-xl hover:bg-gray-50 cursor-pointer transition"
              >
                Batal
              </button>
              <button 
                onClick={handleConfirmDelete} 
                className="py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-xl shadow cursor-pointer transition"
              >
                Ya, Hapus
              </button>
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

export default ManajemenAkun;