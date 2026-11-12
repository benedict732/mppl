import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SidebarAdmin } from './components/SidebarAdmin';

interface AnggotaItem {
  id: number;
  nim: string;
  nama: string;
  semester: number;
  status: 'AKTIF' | 'TIDAK AKTIF';
  fakultas: string;
  jabatan: string;
  ormawa: string;
  periode: string;
}

export const DataAnggotaOrmawa: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prefix = location.pathname.startsWith('/mpm') ? '/mpm' : '/ormawa';
  const [daftarAnggota, setDaftarAnggota] = useState<AnggotaItem[]>([
    { id: 1, nim: '22041001', nama: 'Andi Pratama', semester: 6, status: 'AKTIF', fakultas: 'Teknik Informatika', jabatan: 'Ketua', ormawa: 'BEM', periode: '2026/2027' },
    { id: 2, nim: '23021005', nama: 'Maria Lestari', semester: 4, status: 'AKTIF', fakultas: 'Ekonomi / Manajemen', jabatan: 'Sekretaris', ormawa: 'BEM', periode: '2026/2027' },
    { id: 3, nim: '22031012', nama: 'Rizky Saputra', semester: 6, status: 'AKTIF', fakultas: 'Hukum / Ilmu Hukum', jabatan: 'Anggota', ormawa: 'BPM', periode: '2026/2027' },
    { id: 4, nim: '24011009', nama: 'Clara Manoppo', semester: 2, status: 'TIDAK AKTIF', fakultas: 'Keperawatan / Ners', jabatan: 'Bendahara', ormawa: 'MPM', periode: '2026/2027' },
    { id: 5, nim: '23051007', nama: 'Daniel Rondonuwu', semester: 4, status: 'TIDAK AKTIF', fakultas: 'Pertanian / Agroteknologi', jabatan: 'Koordinator', ormawa: 'BEM', periode: '2026/2027' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  // State Filter Pop-up di Tengah dengan Blur
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedOrmawa, setSelectedOrmawa] = useState('BEM');
  const [selectedFakultas, setSelectedFakultas] = useState('TEKNIK');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('AKTIF');

  // State Modal Tambah Anggota
  const [showAddModal, setShowAddModal] = useState(false);
  const [newAnggota, setNewAnggota] = useState({
    nama: '', nim: '', semester: '', fakultas: '', ormawa: 'BEM', jabatan: 'Ketua', statusKeanggotaan: 'Aktif', periode: '2026/2027'
  });

  // State Modal Edit Anggota
  const [showEditModal, setShowEditModal] = useState(false);
  const [editAnggota, setEditAnggota] = useState<AnggotaItem | null>(null);

  const [currentPage, setCurrentPage] = useState(1);

  const handleOpenEdit = (item: AnggotaItem) => {
    setEditAnggota(item);
    setShowEditModal(true);
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editAnggota) return;
    setDaftarAnggota(daftarAnggota.map(item => item.id === editAnggota.id ? editAnggota : item));
    setShowEditModal(false);
    setEditAnggota(null);
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: AnggotaItem = {
      id: Date.now(),
      nim: newAnggota.nim || '25011000',
      nama: newAnggota.nama || 'Mahasiswa Baru',
      semester: parseInt(newAnggota.semester) || 1,
      status: newAnggota.statusKeanggotaan.toUpperCase() === 'AKTIF' ? 'AKTIF' : 'TIDAK AKTIF',
      fakultas: newAnggota.fakultas || 'Teknik',
      jabatan: newAnggota.jabatan || 'Anggota',
      ormawa: newAnggota.ormawa || 'BEM',
      periode: newAnggota.periode || '2026/2027',
    };
    setDaftarAnggota([newItem, ...daftarAnggota]);
    setShowAddModal(false);
    setNewAnggota({ nama: '', nim: '', semester: '', fakultas: '', ormawa: 'BEM', jabatan: 'Ketua', statusKeanggotaan: 'Aktif', periode: '2026/2027' });
  };

  const filteredData = daftarAnggota.filter(item => {
    const matchesSearch = item.nama.toLowerCase().includes(searchQuery.toLowerCase()) || item.nim.includes(searchQuery);
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col font-sans text-gray-800 relative">
      <div className="flex flex-1">

        {/* ================= SIDEBAR KIRI (ORMAWA / MPM) ================= */}
        <SidebarAdmin currentMenu="data-ormawa" />

        {/* ================= KONTEN UTAMA ================= */}
        <main className="flex-1 p-8 overflow-y-auto">

          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">ORMAWA / ANGGOTA</p>
              <h1 className="text-xl font-bold text-gray-900">Data Anggota Ormawa</h1>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 bg-[#1B437C] hover:bg-blue-900 text-white text-xs font-bold rounded-lg shadow transition flex items-center gap-2 cursor-pointer"
            >
              <span>+ Tambah Anggota</span>
            </button>
          </div>

          {/* Card Box Utama Pencaian & Filter */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-6 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-gray-900">Data Anggota Ormawa</h3>
              <p className="text-xs text-gray-500 mt-0.5">Kelola anggota, jabatan, struktur, dan riwayat kepengurusan tiap ormawa.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              <div className="md:col-span-7">
                <label className="block text-[11px] font-bold text-gray-700 mb-1">Cari nama anggota</label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Nama atau NIM..."
                  className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-3">
                <label className="block text-[11px] font-bold text-gray-700 mb-1">Filter</label>
                <button
                  onClick={() => setShowFilterModal(true)}
                  className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-600 text-left flex justify-between items-center hover:bg-gray-50 cursor-pointer"
                >
                  <span>{selectedOrmawa ? `Ormawa: ${selectedOrmawa}` : 'Filter data...'}</span>
                  <span>⚙️</span>
                </button>
              </div>

              <div className="md:col-span-2">
                <button
                  onClick={() => { setSearchQuery(''); setSelectedOrmawa('BEM'); setSelectedStatusFilter('AKTIF'); setSelectedFakultas('TEKNIK'); }}
                  className="w-full px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-bold rounded-lg transition cursor-pointer"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Tabel Daftar Anggota */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-6">
            <h3 className="text-sm font-bold text-gray-900 mb-1">Daftar anggota</h3>
            <p className="text-[11px] text-gray-500 mb-4">Data dibagi berdasarkan ormawa</p>

            <div className="overflow-x-auto border border-gray-100 rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-[10px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                    <th className="py-3 px-4">NIM</th>
                    <th className="py-3 px-4">NAMA LENGKAP</th>
                    <th className="py-3 px-4">SEMESTER</th>
                    <th className="py-3 px-4">STATUS KEANGGOTAAN</th>
                    <th className="py-3 px-4">FAKULTAS / PRODI</th>
                    <th className="py-3 px-4">JABATAN</th>
                    <th className="py-3 px-4 text-right">AKSI</th>
                  </tr>
                </thead>
                <tbody className="text-xs divide-y divide-gray-100">
                  {filteredData.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50/50">
                      <td className="py-3.5 px-4 font-medium text-gray-800">{item.nim}</td>
                      <td className="py-3.5 px-4 font-bold text-gray-900">{item.nama}</td>
                      <td className="py-3.5 px-4 text-gray-600">{item.semester}</td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${item.status === 'AKTIF' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-gray-600">{item.fakultas}</td>
                      <td className="py-3.5 px-4 text-blue-600 font-semibold">{item.jabatan}</td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => handleOpenEdit(item)}
                          className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition cursor-pointer inline-flex items-center justify-center"
                        >
                          ✏️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination 1-5 */}
            <div className="flex justify-end items-center gap-1.5 mt-6 pt-4 border-t border-gray-100">
              <button className="w-8 h-8 rounded-lg border flex items-center justify-center text-xs bg-gray-100 cursor-pointer">◀</button>
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => setCurrentPage(num)}
                  className={`w-8 h-8 rounded-lg border text-xs font-bold transition cursor-pointer ${currentPage === num ? 'bg-[#1B437C] text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                >
                  {num}
                </button>
              ))}
              <button className="w-8 h-8 rounded-lg border flex items-center justify-center text-xs bg-white hover:bg-gray-50 cursor-pointer">▶</button>
            </div>
          </div>

          {/* Riwayat Kepengurusan Box dengan Navigasi ke Struktur */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8 flex justify-between items-center">
            <div>
              <h3 className="text-sm font-bold text-gray-900">Riwayat kepengurusan</h3>
              <p className="text-[11px] text-gray-500 mt-0.5">Simpan daftar pengurus dan jabatan per tahun; anggota lama tetap tercatat.</p>
            </div>
            <button
              onClick={() => navigate(`${prefix}/struktur`)}
              className="px-5 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-bold rounded-xl shadow-sm transition cursor-pointer"
            >
              Lihat struktur
            </button>
          </div>

          {/* Footer */}
          <footer className="pt-6 border-t border-gray-200 text-[11px] text-gray-500 flex flex-col md:flex-row justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-gray-800">
                <div className="p-1.5 bg-[#1B437C] rounded-lg text-white text-xs">🛡️</div>
                <span>SI-BEO</span>
                <span className="text-[10px] text-gray-400 font-normal">Sistem Informasi Beasiswa dan Organisasi Mahasiswa</span>
              </div>
              <p className="text-[10px] text-gray-400 max-w-sm leading-relaxed">
                Platform informasi beasiswa dan organisasi kemahasiswaan untuk memudahkan pencarian peluang dan pengembangan diri di kampus.
              </p>
            </div>
            <div className="space-y-1.5">
              <p className="font-bold text-gray-700 uppercase tracking-wider text-[10px]">Kontak Kampus</p>
              <p>Email: <span className="text-blue-600 underline cursor-pointer">[tempatkan email resmi]</span></p>
              <p>Telepon: <span className="text-blue-600 underline cursor-pointer">[tempatkan nomor resmi]</span></p>
              <p>Lokasi: <span className="text-blue-600 underline cursor-pointer">[tempatkan alamat resmi]</span></p>
            </div>
          </footer>
        </main>
      </div>

      {/* ================= MODAL FILTER DI TENGAH DENGAN BLUR ================= */}
      {showFilterModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b pb-3">
              <span className="text-xs font-bold text-gray-900">Filter Data</span>
              <button onClick={() => setShowFilterModal(false)} className="text-gray-400 font-bold hover:text-gray-600 cursor-pointer">✕</button>
            </div>

            <div>
              <p className="text-[11px] font-bold text-gray-700 mb-2">Jenis Ormawa</p>
              <div className="flex gap-2">
                {['BEM', 'BPM', 'MPM'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSelectedOrmawa(item)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${selectedOrmawa === item ? 'bg-blue-600 text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold text-gray-700 mb-2">Fakultas</p>
              <div className="flex flex-wrap gap-1.5">
                {['TEKNIK', 'HUKUM', 'FEB', 'PGSD', 'KEPERAWATAN', 'KEDOKTERAN', 'PARIWISATA', 'AGRIBISNIS'].map((fak) => {
                  const isSelected = selectedFakultas === fak;
                  return (
                    <button
                      key={fak}
                      type="button"
                      onClick={() => setSelectedFakultas(fak)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition cursor-pointer ${isSelected ? 'bg-blue-600 text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                      {fak}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold text-gray-700 mb-2">Status Keanggotaan</p>
              <div className="flex gap-2">
                {['AKTIF', 'TIDAK AKTIF'].map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setSelectedStatusFilter(st)}
                    className={`px-3 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${selectedStatusFilter === st ? 'bg-blue-600 text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-3 border-t">
              <button
                onClick={() => { setSelectedOrmawa(''); setSelectedStatusFilter(''); setSelectedFakultas(''); }}
                className="px-4 py-2 bg-red-600 text-white rounded-xl text-xs font-bold hover:bg-red-700 cursor-pointer"
              >
                RESET
              </button>
              <button
                onClick={() => setShowFilterModal(false)}
                className="px-5 py-2 bg-[#1B437C] text-white rounded-xl text-xs font-bold hover:bg-blue-900 cursor-pointer"
              >
                TERAPKAN
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL TAMBAH ANGGOTA ================= */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 space-y-5 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b pb-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-blue-100 text-blue-600 rounded-lg">➕</span>
                <h3 className="text-sm font-bold text-gray-900">Tambah Anggota</h3>
              </div>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600 font-bold cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Nama Mahasiswa *</label>
                  <input
                    type="text" required
                    value={newAnggota.nama}
                    onChange={(e) => setNewAnggota({ ...newAnggota, nama: e.target.value })}
                    placeholder="Masukkan Nama Lengkap"
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">NIM *</label>
                  <input
                    type="text" required
                    value={newAnggota.nim}
                    onChange={(e) => setNewAnggota({ ...newAnggota, nim: e.target.value })}
                    placeholder="Masukkan NIM"
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Semester</label>
                  <input
                    type="text"
                    value={newAnggota.semester}
                    onChange={(e) => setNewAnggota({ ...newAnggota, semester: e.target.value })}
                    placeholder="Pilih Semester"
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Fakultas / Prodi</label>
                  <input
                    type="text"
                    value={newAnggota.fakultas}
                    onChange={(e) => setNewAnggota({ ...newAnggota, fakultas: e.target.value })}
                    placeholder="Pilih Fakultas"
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Ormawa</label>
                  <select
                    value={newAnggota.ormawa}
                    onChange={(e) => setNewAnggota({ ...newAnggota, ormawa: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none"
                  >
                    <option>BEM</option>
                    <option>BPM</option>
                    <option>MPM</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Jabatan</label>
                  <select
                    value={newAnggota.jabatan}
                    onChange={(e) => setNewAnggota({ ...newAnggota, jabatan: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none"
                  >
                    <option>Ketua</option>
                    <option>Sekretaris</option>
                    <option>Bendahara</option>
                    <option>Anggota</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-5 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-xl font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#1B437C] hover:bg-blue-900 text-white rounded-xl font-bold shadow cursor-pointer"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL EDIT ANGGOTA ================= */}
      {showEditModal && editAnggota && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 space-y-5 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b pb-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-blue-600 text-white rounded-lg">✏️</span>
                <h3 className="text-sm font-bold text-gray-900">Edit Data Anggota Ormawa</h3>
              </div>
              <button onClick={() => setShowEditModal(false)} className="text-gray-400 hover:text-gray-600 font-bold cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleEditSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Nama Mahasiswa</label>
                  <input
                    type="text" required
                    value={editAnggota.nama}
                    onChange={(e) => setEditAnggota({ ...editAnggota, nama: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">NIM</label>
                  <input
                    type="text" required
                    value={editAnggota.nim}
                    onChange={(e) => setEditAnggota({ ...editAnggota, nim: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Semester</label>
                  <input
                    type="number" required
                    value={editAnggota.semester}
                    onChange={(e) => setEditAnggota({ ...editAnggota, semester: parseInt(e.target.value) || 1 })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Fakultas / Prodi</label>
                  <input
                    type="text" required
                    value={editAnggota.fakultas}
                    onChange={(e) => setEditAnggota({ ...editAnggota, fakultas: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Status Keanggotaan</label>
                  <select
                    value={editAnggota.status}
                    onChange={(e) => setEditAnggota({ ...editAnggota, status: e.target.value as 'AKTIF' | 'TIDAK AKTIF' })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none"
                  >
                    <option value="AKTIF">Aktif</option>
                    <option value="TIDAK AKTIF">Tidak Aktif</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Jabatan</label>
                  <input
                    type="text" required
                    value={editAnggota.jabatan}
                    onChange={(e) => setEditAnggota({ ...editAnggota, jabatan: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-5 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-xl font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#1B437C] hover:bg-blue-900 text-white rounded-xl font-bold shadow cursor-pointer"
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

export default DataAnggotaOrmawa;