import React, { useState } from 'react';
import { SidebarAdmin } from './components/SidebarAdmin';

interface DokumenPengumpulan {
  id: number;
  organisasi: string;
  jenisDokumen: string;
  tanggalMasuk: string;
  status: 'Menunggu' | 'Perlu Revisi' | 'Terverifikasi';
  fileNama: string;
  catatan?: string;
}

export const MPMPengumpulanLaporan: React.FC = () => {
  const [daftarPengumpulan, setDaftarPengumpulan] = useState<DokumenPengumpulan[]>([
    {
      id: 1,
      organisasi: 'BEM Fakultas Teknik',
      jenisDokumen: 'Proposal Program Kerja',
      tanggalMasuk: '28 Okt 2026',
      status: 'Menunggu',
      fileNama: 'Proposal_BEM.pdf',
      catatan: 'Proposal sedang dalam proses peninjauan oleh tim verifikasi MPM.'
    },
    {
      id: 2,
      organisasi: 'BPM Fakultas Ekonomi',
      jenisDokumen: 'Laporan Kegiatan',
      tanggalMasuk: '26 Okt 2026',
      status: 'Perlu Revisi',
      fileNama: 'Laporan_BPM.pdf',
      catatan: 'Format rincian anggaran pengeluaran perlu disesuaikan dengan template standar MPM 2026.'
    },
    {
      id: 3,
      organisasi: 'BEM Fakultas Hukum',
      jenisDokumen: 'Laporan Pertanggungjawaban',
      tanggalMasuk: '24 Okt 2026',
      status: 'Terverifikasi',
      fileNama: 'LPJ_BEM.pdf',
      catatan: 'Dokumen LPJ telah lengkap dan memenuhi semua kriteria pelaporan MPM.'
    },
    {
      id: 4,
      organisasi: 'BPM Fakultas Pertanian',
      jenisDokumen: 'Proposal Kegiatan',
      tanggalMasuk: '22 Okt 2026',
      status: 'Menunggu',
      fileNama: 'Proposal_BPM.pdf',
      catatan: 'Menunggu tanda tangan pengesahan dari pimpinan komisi legislatif.'
    },
    {
      id: 5,
      organisasi: 'BEM Fakultas Ilmu Sosial',
      jenisDokumen: 'Laporan Kegiatan',
      tanggalMasuk: '20 Okt 2026',
      status: 'Terverifikasi',
      fileNama: 'Laporan_BEM.pdf',
      catatan: 'Laporan kegiatan telah diverifikasi dan diarsipkan ke sistem pengawasan MPM.'
    }
  ]);

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDoc, setSelectedDoc] = useState<DokumenPengumpulan | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // Form input catat pengumpulan baru oleh MPM
  const [formData, setFormData] = useState({
    organisasi: '',
    jenisDokumen: 'Proposal Program Kerja',
    tanggalMasuk: 'Hari ini',
    fileNama: '',
    catatan: ''
  });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.organisasi.trim()) return;

    const newItem: DokumenPengumpulan = {
      id: Date.now(),
      organisasi: formData.organisasi,
      jenisDokumen: formData.jenisDokumen,
      tanggalMasuk: 'Hari ini',
      status: 'Menunggu',
      fileNama: formData.fileNama || 'Dokumen_Baru.pdf',
      catatan: formData.catatan || 'Dokumen baru dicatat ke dalam buku pengawasan MPM.'
    };

    setDaftarPengumpulan([newItem, ...daftarPengumpulan]);
    setShowAddModal(false);
    setFormData({
      organisasi: '',
      jenisDokumen: 'Proposal Program Kerja',
      tanggalMasuk: 'Hari ini',
      fileNama: '',
      catatan: ''
    });
  };

  const filteredList = daftarPengumpulan.filter((item) => {
    const q = search.toLowerCase();
    return item.organisasi.toLowerCase().includes(q) ||
      item.jenisDokumen.toLowerCase().includes(q) ||
      item.fileNama.toLowerCase().includes(q);
  });

  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col font-sans text-gray-800 relative">
      <div className="flex flex-1">
        
        {/* ================= SIDEBAR SESUAI GAMBAR 1 (IKUT ADMIN ORMAWA DENGAN FITUR KHUSUS MPM) ================= */}
        <SidebarAdmin currentMenu="pengumpulan-laporan" />

        {/* ================= KONTEN UTAMA AKUN MPM ================= */}
        <main className="flex-1 p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Breadcrumb Bar Atas dengan User Profile */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                  MPM / PENGUMPULAN PROPOSAL &amp; LAPORAN BEM/BPM
                </p>
                <h1 className="text-xl font-bold text-gray-900">
                  Pengumpulan Proposal &amp; Laporan BEM/BPM
                </h1>
              </div>

              {/* Profile Avatar Kanan */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">
                  A
                </div>
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-bold text-gray-900 leading-tight">Nama Admin</p>
                  <p className="text-[10px] text-gray-400">Admin MPM</p>
                </div>
              </div>
            </div>

            {/* Header Judul Halaman & Tombol Catat Pengumpulan */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Pengumpulan Proposal &amp; Laporan BEM/BPM
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Kelola data organisasi mahasiswa melalui portal SI-BEO.
                </p>
                <p className="text-xs text-gray-500">
                  Pantau dan verifikasi dokumen proposal serta laporan dari BEM/BPM.
                </p>
              </div>

              <button 
                onClick={() => setShowAddModal(true)}
                className="px-5 py-2.5 bg-[#1B437C] hover:bg-blue-900 text-white text-xs font-bold rounded-xl shadow transition cursor-pointer flex items-center gap-2"
              >
                <span>+</span>
                <span>Catat Pengumpulan</span>
              </button>
            </div>

            {/* 4 Summary Cards (KPI Metrics Sesuai Referensi Gambar) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Total Dokumen */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl shrink-0">
                  📑
                </div>
                <div>
                  <span className="text-[11px] text-gray-500 font-medium block">Total Dokumen</span>
                  <span className="text-2xl font-extrabold text-blue-900">32</span>
                </div>
              </div>

              {/* Menunggu Verifikasi */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl shrink-0">
                  ⏳
                </div>
                <div>
                  <span className="text-[11px] text-gray-500 font-medium block">Menunggu Verifikasi</span>
                  <span className="text-2xl font-extrabold text-amber-500">08</span>
                </div>
              </div>

              {/* Perlu Revisi */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-xl shrink-0">
                  ⚠️
                </div>
                <div>
                  <span className="text-[11px] text-gray-500 font-medium block">Perlu Revisi</span>
                  <span className="text-2xl font-extrabold text-rose-500">05</span>
                </div>
              </div>

              {/* Terverifikasi */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl shrink-0">
                  ✅
                </div>
                <div>
                  <span className="text-[11px] text-gray-500 font-medium block">Terverifikasi</span>
                  <span className="text-2xl font-extrabold text-emerald-600">19</span>
                </div>
              </div>
            </div>

            {/* Kartu Tabel Utama */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
              {/* Header Tabel & Input Pencarian */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5">
                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    Daftar Pengumpulan Dokumen
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Dokumen BEM/BPM yang masuk untuk ditinjau oleh MPM.
                  </p>
                </div>

                <div className="w-full sm:w-80">
                  <div className="relative">
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Cari nama dokumen atau organisasi..."
                      className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-xs text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition"
                    />
                    <span className="absolute left-3 top-2.5 text-gray-400 text-xs">🔍</span>
                  </div>
                </div>
              </div>

              {/* Tabel Dokumen */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/70 border-b border-gray-100 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      <th className="py-3 px-4">ORGANISASI</th>
                      <th className="py-3 px-4">JENIS DOKUMEN</th>
                      <th className="py-3 px-4">TANGGAL MASUK</th>
                      <th className="py-3 px-4 text-center">STATUS</th>
                      <th className="py-3 px-4">FILE</th>
                      <th className="py-3 px-4 text-right">AKSI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 text-xs">
                    {filteredList.length > 0 ? (
                      filteredList.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50/60 transition">
                          <td className="py-3.5 px-4 font-bold text-gray-900">
                            {item.organisasi}
                          </td>
                          <td className="py-3.5 px-4 text-gray-600">
                            {item.jenisDokumen}
                          </td>
                          <td className="py-3.5 px-4 text-gray-500">
                            {item.tanggalMasuk}
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            {item.status === 'Menunggu' && (
                              <span className="inline-block px-3 py-1 bg-amber-100/80 text-amber-800 text-[11px] font-semibold rounded-full">
                                Menunggu
                              </span>
                            )}
                            {item.status === 'Perlu Revisi' && (
                              <span className="inline-block px-3 py-1 bg-rose-100 text-rose-700 text-[11px] font-semibold rounded-full">
                                Perlu Revisi
                              </span>
                            )}
                            {item.status === 'Terverifikasi' && (
                              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-[11px] font-semibold rounded-full">
                                Terverifikasi
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-blue-600 font-medium hover:underline cursor-pointer">
                            <span className="flex items-center gap-1.5" onClick={() => alert(`Mengunduh berkas: ${item.fileNama}`)}>
                              <span>📄</span>
                              <span>{item.fileNama}</span>
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <button
                              onClick={() => setSelectedDoc(item)}
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
                          Tidak ditemukan data pengumpulan yang cocok.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Footer Tabel dengan Info Jumlah & Paginasi */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-4 border-t border-gray-100 text-xs text-gray-500 mt-2">
                <span>Menampilkan 1-5 dari 32 dokumen</span>
                <div className="flex items-center gap-1 font-semibold text-xs">
                  <button 
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 cursor-pointer"
                  >
                    ‹
                  </button>
                  <button 
                    onClick={() => setCurrentPage(1)}
                    className={`w-7 h-7 flex items-center justify-center rounded-lg ${currentPage === 1 ? 'bg-[#1B437C] text-white font-bold' : 'border border-gray-200 hover:bg-gray-50 text-gray-700'} cursor-pointer`}
                  >
                    1
                  </button>
                  <button 
                    onClick={() => setCurrentPage(2)}
                    className={`w-7 h-7 flex items-center justify-center rounded-lg ${currentPage === 2 ? 'bg-[#1B437C] text-white font-bold' : 'border border-gray-200 hover:bg-gray-50 text-gray-700'} cursor-pointer`}
                  >
                    2
                  </button>
                  <button 
                    onClick={() => setCurrentPage(3)}
                    className={`w-7 h-7 flex items-center justify-center rounded-lg ${currentPage === 3 ? 'bg-[#1B437C] text-white font-bold' : 'border border-gray-200 hover:bg-gray-50 text-gray-700'} cursor-pointer`}
                  >
                    3
                  </button>
                  <button 
                    disabled={currentPage === 3}
                    onClick={() => setCurrentPage(prev => Math.min(3, prev + 1))}
                    className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 cursor-pointer"
                  >
                    ›
                  </button>
                </div>
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
                    Portal terpadu pengawasan, verifikasi berkas, dan evaluasi laporan pertanggungjawaban organisasi mahasiswa.
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

      {/* ================= MODAL CATAT PENGUMPULAN BARU ================= */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <h3 className="text-base font-bold text-gray-900">Catat Pengumpulan Dokumen BEM/BPM</h3>
                <p className="text-xs text-gray-500">Pencatatan berkas proposal atau laporan yang masuk untuk diverifikasi MPM.</p>
              </div>
              <button 
                onClick={() => setShowAddModal(false)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  Nama Organisasi Pengirim <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" required
                  value={formData.organisasi}
                  onChange={(e) => setFormData({ ...formData, organisasi: e.target.value })}
                  placeholder="Contoh: BEM Fakultas Ilmu Komputer..."
                  className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  Jenis Dokumen <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.jenisDokumen}
                  onChange={(e) => setFormData({ ...formData, jenisDokumen: e.target.value })}
                  className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Proposal Program Kerja">Proposal Program Kerja</option>
                  <option value="Proposal Kegiatan">Proposal Kegiatan</option>
                  <option value="Laporan Kegiatan">Laporan Kegiatan</option>
                  <option value="Laporan Pertanggungjawaban">Laporan Pertanggungjawaban</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  Berkas File (PDF)
                </label>
                <div className="border border-dashed border-gray-300 rounded-xl p-4 text-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                  <span className="text-xl block mb-1">📁</span>
                  <p className="font-semibold text-gray-700">Unggah Berkas Dokumen</p>
                  <p className="text-[10px] text-gray-400">Format PDF maksimal 10MB</p>
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Catatan Verifikasi</label>
                <textarea 
                  rows={3}
                  value={formData.catatan}
                  onChange={(e) => setFormData({ ...formData, catatan: e.target.value })}
                  placeholder="Catatan peninjauan awal dokumen..."
                  className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#1B437C] hover:bg-blue-900 text-white rounded-xl font-bold shadow cursor-pointer"
                >
                  Simpan ke Arsip MPM
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL DETAIL PEMERIKSAAN ================= */}
      {selectedDoc && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <h3 className="text-base font-bold text-gray-900">Verifikasi Dokumen BEM/BPM</h3>
                <p className="text-xs text-gray-500">{selectedDoc.organisasi}</p>
              </div>
              <button 
                onClick={() => setSelectedDoc(null)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Jenis Dokumen</span>
                  <span className="font-semibold text-gray-800">{selectedDoc.jenisDokumen}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Tanggal Masuk</span>
                  <span className="font-semibold text-gray-800">{selectedDoc.tanggalMasuk}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Lembaga Pengusul</span>
                  <span className="font-semibold text-gray-800">{selectedDoc.organisasi}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Status Verifikasi</span>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                    selectedDoc.status === 'Terverifikasi' ? 'bg-emerald-100 text-emerald-700' :
                    selectedDoc.status === 'Perlu Revisi' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {selectedDoc.status}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-gray-600 font-bold mb-1">Catatan Evaluasi MPM</label>
                <div className="p-3 bg-blue-50/50 border border-blue-100 rounded-xl text-gray-700 leading-relaxed">
                  {selectedDoc.catatan || 'Belum ada catatan evaluasi khusus.'}
                </div>
              </div>

              <div>
                <label className="block text-gray-600 font-bold mb-1">File Berkas Masuk</label>
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition">
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">📄</span>
                    <span className="font-medium text-gray-800">{selectedDoc.fileNama}</span>
                  </div>
                  <button 
                    onClick={() => alert(`Mengunduh berkas: ${selectedDoc.fileNama}`)}
                    className="px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded-lg text-[11px] transition cursor-pointer"
                  >
                    Unduh File
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-3 border-t">
              <button
                onClick={() => setSelectedDoc(null)}
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

export default MPMPengumpulanLaporan;

