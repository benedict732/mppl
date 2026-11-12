import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PengumpulanData {
  id: number;
  namaDokumen: string;
  kategori: 'Proposal' | 'LPJ' | 'Administrasi' | 'Surat Pengantar';
  tanggalKumpul: string;
  status: 'Menunggu' | 'Disetujui' | 'Revisi';
  fileNama: string;
  keterangan: string;
  verifikator?: string;
}

export const Pengumpulan: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('ormawaToken');
    navigate('/ormawa/login');
  };

  const [daftarPengumpulan, setDaftarPengumpulan] = useState<PengumpulanData[]>([
    {
      id: 1,
      namaDokumen: 'LPJ Bakti Sosial Desa Sejahtera 2026',
      kategori: 'LPJ',
      tanggalKumpul: '12 Oktober 2026',
      status: 'Menunggu',
      fileNama: 'LPJ_Bakti_Sosial_Final.pdf',
      keterangan: 'Laporan pertanggungjawaban kegiatan bakti sosial semester ganjil.',
      verifikator: 'Biro Kemahasiswaan'
    },
    {
      id: 2,
      namaDokumen: 'Proposal Pekan Seni Budaya Kampus',
      kategori: 'Proposal',
      tanggalKumpul: '18 Oktober 2026',
      status: 'Revisi',
      fileNama: 'Proposal_Pekan_Seni_Rev1.pdf',
      keterangan: 'Rancangan anggaran biaya konsumsi perlu diperjelas rinciannya.',
      verifikator: 'Bagian Keuangan Kemahasiswaan'
    },
    {
      id: 3,
      namaDokumen: 'Surat Pengantar Delegasi Lomba Nasional',
      kategori: 'Surat Pengantar',
      tanggalKumpul: '22 Oktober 2026',
      status: 'Disetujui',
      fileNama: 'Surat_Delegasi_Lomba.pdf',
      keterangan: 'Disetujui dan ditandatangani oleh Wakil Rektor Bidang Kemahasiswaan.',
      verifikator: 'Admin Kemahasiswaan'
    },
    {
      id: 4,
      namaDokumen: 'Berkas Registrasi Ulang Kepengurusan Ormawa',
      kategori: 'Administrasi',
      tanggalKumpul: '01 November 2026',
      status: 'Disetujui',
      fileNama: 'SK_Kepengurusan_2026_2027.pdf',
      keterangan: 'Pembaruan SK dan susunan kepengurusan periode aktif 2026/2027.',
      verifikator: 'Biro Administrasi Akademik'
    }
  ]);

  const [search, setSearch] = useState('');
  const [filterKategori, setFilterKategori] = useState('Semua Kategori');
  const [filterStatus, setFilterStatus] = useState('Semua Status');

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState<PengumpulanData | null>(null);

  // Form input pengumpulan baru
  const [newFormData, setNewFormData] = useState({
    namaDokumen: '',
    kategori: 'Proposal' as 'Proposal' | 'LPJ' | 'Administrasi' | 'Surat Pengantar',
    fileNama: '',
    keterangan: ''
  });

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFormData.namaDokumen.trim()) return;

    const newItem: PengumpulanData = {
      id: Date.now(),
      namaDokumen: newFormData.namaDokumen,
      kategori: newFormData.kategori,
      tanggalKumpul: 'Hari ini',
      status: 'Menunggu',
      fileNama: newFormData.fileNama || 'Berkas_Pengumpulan.pdf',
      keterangan: newFormData.keterangan || 'Menunggu peninjauan verifikator.',
      verifikator: 'Biro Kemahasiswaan'
    };

    setDaftarPengumpulan([newItem, ...daftarPengumpulan]);
    setShowUploadModal(false);
    setNewFormData({ namaDokumen: '', kategori: 'Proposal', fileNama: '', keterangan: '' });
  };

  const filteredList = daftarPengumpulan.filter((item) => {
    const matchSearch = item.namaDokumen.toLowerCase().includes(search.toLowerCase()) ||
      item.fileNama.toLowerCase().includes(search.toLowerCase());
    const matchKategori = filterKategori === 'Semua Kategori' || item.kategori === filterKategori;
    const matchStatus = filterStatus === 'Semua Status' || item.status === filterStatus;
    return matchSearch && matchKategori && matchStatus;
  });

  // KPI Metrics
  const totalCount = daftarPengumpulan.length;
  const menungguCount = daftarPengumpulan.filter(x => x.status === 'Menunggu').length;
  const disetujuiCount = daftarPengumpulan.filter(x => x.status === 'Disetujui').length;
  const revisiCount = daftarPengumpulan.filter(x => x.status === 'Revisi').length;

  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col font-sans text-gray-800 relative">
      <div className="flex flex-1">
        
        {/* ================= SIDEBAR KIRI ORMAWA ================= */}
        <aside className="w-64 bg-[#0B1E36] text-white flex flex-col justify-between p-4 shrink-0">
          <div>
            <div className="flex items-center gap-3 mb-8 px-2 pt-2">
              <img 
                src="/logo.jpg" 
                alt="Logo Kampus" 
                className="w-10 h-10 object-contain rounded-lg shrink-0 bg-white p-1 shadow"
              />
              <div>
                <span className="text-[11px] font-extrabold text-amber-400 tracking-wider uppercase block">
                  ORMAWA
                </span>
                <span className="text-[11px] text-gray-400 block">Portal Manajemen</span>
              </div>
            </div>

            <nav className="space-y-1 text-xs">
              <a 
                href="/ormawa/dashboard" 
                className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition"
              >
                <span>📊</span>
                <span>Dashboard</span>
              </a>
              <a 
                href="/ormawa/data-ormawa" 
                className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition"
              >
                <span>👥</span>
                <span>Data Ormawa</span>
              </a>
              <a 
                href="/ormawa/pengumuman" 
                className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition"
              >
                <span>📢</span>
                <span>Pengumuman</span>
              </a>
              <a 
                href="/ormawa/proposal" 
                className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition"
              >
                <span>📄</span>
                <span>Proposal &amp; Laporan</span>
              </a>
              <a 
                href="/ormawa/pengumpulan" 
                className="flex items-center gap-3 px-3 py-2.5 bg-blue-600/40 text-blue-300 font-semibold rounded-lg transition border-l-4 border-blue-400"
              >
                <span>📁</span>
                <span>Pengumpulan</span>
              </a>
              <a 
                href="/ormawa/pengumpulan-laporan" 
                className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition"
              >
                <span>📥</span>
                <span>Pengumpulan Laporan</span>
              </a>
              <a 
                href="/ormawa/detail-kegiatan" 
                className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition"
              >
                <span>📋</span>
                <span>Detail Kegiatan</span>
              </a>
              <a 
                href="/ormawa/struktur" 
                className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition"
              >
                <span>🌿</span>
                <span>Struktur Kepengurusan</span>
              </a>
              <a 
                href="/ormawa/revisi" 
                className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition"
              >
                <span>🔄</span>
                <span>Revisi Dokumen</span>
              </a>
              <a 
                href="/ormawa/edit-profil" 
                className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition"
              >
                <span>✏️</span>
                <span>Edit Profil</span>
              </a>
            </nav>
          </div>

          <div className="pt-4 border-t border-gray-700/50">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 px-3 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition shadow cursor-pointer"
            >
              <span>🚪</span>
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* ================= KONTEN UTAMA ================= */}
        <main className="flex-1 p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Breadcrumb Header */}
            <div className="mb-6">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                ORMAWA / PENGUMPULAN
              </p>
              <h1 className="text-xl font-bold text-gray-900">
                Pengumpulan Dokumen
              </h1>
            </div>

            {/* Judul & Subjudul */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Pengumpulan Dokumen &amp; Berkas
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Kelola dan pantau seluruh pengumpulan berkas, proposal, serta laporan pertanggungjawaban kegiatan ormawa.
                </p>
              </div>
              <button 
                onClick={() => setShowUploadModal(true)}
                className="px-5 py-2.5 bg-[#1B437C] hover:bg-blue-900 text-white text-xs font-bold rounded-xl shadow transition cursor-pointer flex items-center gap-2"
              >
                <span>+</span>
                <span>Unggah Berkas Baru</span>
              </button>
            </div>

            {/* KPI Cards Ringkasan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Total Pengumpulan</span>
                <span className="text-2xl font-bold text-gray-900">{totalCount}</span>
                <p className="text-[11px] text-gray-400 mt-1">Dokumen terdaftar</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider block mb-1">Menunggu Review</span>
                <span className="text-2xl font-bold text-amber-600">{menungguCount}</span>
                <p className="text-[11px] text-gray-400 mt-1">Dalam proses verifikasi</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block mb-1">Disetujui</span>
                <span className="text-2xl font-bold text-emerald-600">{disetujuiCount}</span>
                <p className="text-[11px] text-gray-400 mt-1">Telah diverifikasi biro</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1">Perlu Revisi</span>
                <span className="text-2xl font-bold text-blue-600">{revisiCount}</span>
                <p className="text-[11px] text-gray-400 mt-1">Membutuhkan perbaikan</p>
              </div>
            </div>

            {/* Filter Bar & Pencarian */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Cari Berkas</label>
                  <input 
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Ketik nama berkas / dokumen..."
                    className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Filter Kategori</label>
                  <select
                    value={filterKategori}
                    onChange={(e) => setFilterKategori(e.target.value)}
                    className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl text-xs font-medium text-gray-700 outline-none cursor-pointer"
                  >
                    <option>Semua Kategori</option>
                    <option>Proposal</option>
                    <option>LPJ</option>
                    <option>Administrasi</option>
                    <option>Surat Pengantar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Filter Status</label>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl text-xs font-medium text-gray-700 outline-none cursor-pointer"
                  >
                    <option>Semua Status</option>
                    <option>Menunggu</option>
                    <option>Disetujui</option>
                    <option>Revisi</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Tabel Daftar Pengumpulan */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
              <h3 className="text-sm font-bold text-gray-900 mb-4">
                Riwayat Pengumpulan Berkas
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      <th className="py-3 px-4">NAMA DOKUMEN</th>
                      <th className="py-3 px-4">KATEGORI</th>
                      <th className="py-3 px-4">TANGGAL KUMPUL</th>
                      <th className="py-3 px-4">FILE</th>
                      <th className="py-3 px-4 text-center">STATUS</th>
                      <th className="py-3 px-4 text-right">AKSI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 text-xs">
                    {filteredList.length > 0 ? (
                      filteredList.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50/60 transition">
                          <td className="py-3.5 px-4 font-bold text-gray-900">
                            {item.namaDokumen}
                          </td>
                          <td className="py-3.5 px-4 text-gray-600">
                            <span className="px-2.5 py-0.5 bg-gray-100 text-gray-700 rounded-md text-[10px] font-medium">
                              {item.kategori}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-gray-500">
                            {item.tanggalKumpul}
                          </td>
                          <td className="py-3.5 px-4 text-gray-700 font-medium">
                            📄 {item.fileNama}
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            {item.status === 'Menunggu' && (
                              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-[11px] font-semibold rounded-full">
                                Menunggu
                              </span>
                            )}
                            {item.status === 'Disetujui' && (
                              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-[11px] font-semibold rounded-full">
                                Disetujui
                              </span>
                            )}
                            {item.status === 'Revisi' && (
                              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-[11px] font-semibold rounded-full">
                                Revisi
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <button
                              onClick={() => setSelectedDetail(item)}
                              className="text-blue-600 hover:text-blue-800 font-bold text-xs cursor-pointer transition underline-offset-2 hover:underline"
                            >
                              Detail
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-gray-400">
                          Tidak ada berkas pengumpulan yang sesuai filter.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* ================= FOOTER SI-BEO ================= */}
          <footer className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between gap-6 pb-6">
              <div className="flex items-start gap-3 max-w-lg">
                <div className="w-10 h-10 rounded-xl bg-[#1B437C] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="18" r="2.5" />
                    <circle cx="18" cy="6" r="2.5" />
                    <path d="M7.5 16.5 L16.5 7.5" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-extrabold text-sm text-gray-900 tracking-tight">SI-BEO</span>
                    <span className="text-[10px] text-gray-500">Sistem Informasi Beasiswa dan Organisasi Mahasiswa</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                    Platform informasi beasiswa dan organisasi kemahasiswaan untuk memudahkan pencarian peluang dan pengembangan diri di kampus.
                  </p>
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <p className="font-bold text-gray-800 text-xs mb-1.5">Kontak Kampus</p>
                <p className="text-gray-600">Email: <span className="text-blue-600 font-medium">[tempatkan email resmi]</span></p>
                <p className="text-gray-600">Telepon: <span className="text-blue-600 font-medium">[tempatkan nomor resmi]</span></p>
                <p className="text-gray-600">Lokasi: <span className="text-blue-600 font-medium">[tempatkan alamat resmi]</span></p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-[10px] text-gray-400 gap-2">
              <p>© 2026 SIMPUL · Satu Akses, Beragam Peluang.</p>
              <div className="flex items-center gap-4">
                <span className="hover:text-gray-600 cursor-pointer">Konten program ilustratif</span>
                <span>•</span>
                <span className="hover:text-gray-600 cursor-pointer">Pusat bantuan</span>
                <span>•</span>
                <span className="hover:text-gray-600 cursor-pointer">Kebijakan privasi</span>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* ================= MODAL TAMBAH PENGUMPULAN ================= */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <h3 className="text-base font-bold text-gray-900">Unggah Berkas Pengumpulan</h3>
                <p className="text-xs text-gray-500">Ajukan dokumen atau berkas laporan baru ke biro kemahasiswaan.</p>
              </div>
              <button 
                onClick={() => setShowUploadModal(false)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  Nama Dokumen / Kegiatan <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" required
                  value={newFormData.namaDokumen}
                  onChange={(e) => setNewFormData({ ...newFormData, namaDokumen: e.target.value })}
                  placeholder="Contoh: LPJ Lomba Debat Nasional 2026..."
                  className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  Kategori Berkas <span className="text-red-500">*</span>
                </label>
                <select
                  value={newFormData.kategori}
                  onChange={(e) => setNewFormData({ ...newFormData, kategori: e.target.value as any })}
                  className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Proposal">Proposal</option>
                  <option value="LPJ">LPJ</option>
                  <option value="Administrasi">Administrasi</option>
                  <option value="Surat Pengantar">Surat Pengantar</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  Unggah File (PDF / Dokumen) <span className="text-red-500">*</span>
                </label>
                <div className="border border-dashed border-gray-300 rounded-xl p-4 text-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                  <span className="text-xl block mb-1">📁</span>
                  <p className="font-semibold text-gray-700">Pilih berkas dokumen Anda</p>
                  <p className="text-[10px] text-gray-400">Maksimal ukuran file 10MB (PDF, DOCX)</p>
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Keterangan Tambahan</label>
                <textarea 
                  rows={3}
                  value={newFormData.keterangan}
                  onChange={(e) => setNewFormData({ ...newFormData, keterangan: e.target.value })}
                  placeholder="Tuliskan catatan atau keterangan pengantar berkas..."
                  className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#1B437C] hover:bg-blue-900 text-white rounded-xl font-bold shadow cursor-pointer"
                >
                  Kirim Berkas
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL DETAIL PENGUMPULAN ================= */}
      {selectedDetail && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <h3 className="text-base font-bold text-gray-900">Detail Berkas Pengumpulan</h3>
                <p className="text-xs text-gray-500">{selectedDetail.namaDokumen}</p>
              </div>
              <button 
                onClick={() => setSelectedDetail(null)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Kategori</span>
                  <span className="font-semibold text-gray-800">{selectedDetail.kategori}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Tanggal Pengumpulan</span>
                  <span className="font-semibold text-gray-800">{selectedDetail.tanggalKumpul}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Verifikator</span>
                  <span className="font-semibold text-gray-800">{selectedDetail.verifikator || 'Biro Kemahasiswaan'}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Status</span>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                    selectedDetail.status === 'Disetujui' ? 'bg-emerald-100 text-emerald-700' :
                    selectedDetail.status === 'Revisi' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {selectedDetail.status}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-gray-600 font-bold mb-1">Catatan &amp; Keterangan</label>
                <div className="p-3 bg-blue-50/50 border border-blue-100 rounded-xl text-gray-700 leading-relaxed">
                  {selectedDetail.keterangan}
                </div>
              </div>

              <div>
                <label className="block text-gray-600 font-bold mb-1">Berkas Terlampir</label>
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition">
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">📄</span>
                    <span className="font-medium text-gray-800">{selectedDetail.fileNama}</span>
                  </div>
                  <button 
                    onClick={() => alert(`Mengunduh file: ${selectedDetail.fileNama}`)}
                    className="px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded-lg text-[11px] transition cursor-pointer"
                  >
                    Unduh File
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-3 border-t">
              <button
                onClick={() => setSelectedDetail(null)}
                className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold transition cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Pengumpulan;

