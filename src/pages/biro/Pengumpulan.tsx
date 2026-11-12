import React, { useState } from 'react';

interface PengumpulanItem {
  id: string;
  ormawa: string;
  namaKegiatan: string;
  jenisLaporan: string;
  tanggalKumpul: string;
  status: 'Menunggu' | 'Disetujui' | 'Revisi';
  fileNama: string;
}

export const Pengumpulan: React.FC = () => {
  const [isBeasiswaOpen, setIsBeasiswaOpen] = useState(false);
  const [isRekapOpen, setIsRekapOpen] = useState(false);
  const [search, setSearch] = useState('');
  
  // State Modal Filter & Aksi Detail
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PengumpulanItem | null>(null);
  const [catatanReview, setCatatanReview] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/biro/login';
  };

  const daftarPengumpulan: PengumpulanItem[] = [
    {
      id: '1',
      ormawa: 'BEM',
      namaKegiatan: 'Bakti Sosial Desa Sejahtera',
      jenisLaporan: 'Laporan Pertanggungjawaban (LPJ)',
      tanggalKumpul: '10 Oktober 2026',
      status: 'Menunggu',
      fileNama: 'LPJ_Bakti_Sosial_2026.pdf'
    },
    {
      id: '2',
      ormawa: 'UKM Seni',
      namaKegiatan: 'Pentas Seni Kampus',
      jenisLaporan: 'Laporan Keuangan & Kegiatan',
      tanggalKumpul: '12 Oktober 2026',
      status: 'Revisi',
      fileNama: 'Laporan_Pentas_Seni.pdf'
    },
    {
      id: '3',
      ormawa: 'MPM',
      namaKegiatan: 'Sidang Pleno Mahasiswa',
      jenisLaporan: 'Notulensi & Laporan Akhir',
      tanggalKumpul: '05 Oktober 2026',
      status: 'Disetujui',
      fileNama: 'Laporan_Sidang_Pleno.pdf'
    }
  ];

  const handleOpenDetail = (item: PengumpulanItem) => {
    setSelectedItem(item);
    setCatatanReview('');
    setIsDetailOpen(true);
  };

  const handleSimpanReview = (statusHasil: 'Disetujui' | 'Revisi') => {
    alert(`Laporan "${selectedItem?.namaKegiatan}" berhasil diberi status: ${statusHasil}. Catatan: ${catatanReview || '-'}`);
    setIsDetailOpen(false);
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
              <a href="/biro/pengumpulan" className="flex items-center gap-3 px-3 py-2.5 bg-blue-600/30 text-blue-300 font-semibold rounded-lg transition">
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
            <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">ORMAWA / PENGUMPULAN</p>
            <h1 className="text-xl font-bold text-gray-900">Pengumpulan Laporan</h1>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Pengumpulan Laporan Kegiatan</h2>
            <p className="text-xs text-gray-500 mt-1">Pantau dan kelola berkas laporan pertanggungjawaban yang diunggah oleh setiap ormawa.</p>
          </div>

          {/* SEARCH & FILTER BAR */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-8">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Cari kegiatan atau ormawa</label>
                <input 
                  type="text" 
                  value={search} 
                  onChange={(e) => setSearch(e.target.value)} 
                  placeholder="Ketik nama kegiatan..." 
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                />
              </div>
              <div className="md:col-span-4">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Filter</label>
                <button 
                  onClick={() => setIsFilterOpen(true)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs flex justify-between items-center cursor-pointer bg-white text-gray-500 hover:border-blue-400 transition"
                >
                  <span>Filter Status & Ormawa</span>
                  <span>⚙️</span>
                </button>
              </div>
            </div>
          </div>

          {/* TABEL DAFTAR PENGUMPULAN */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-gray-900">Daftar Berkas Masuk</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 text-gray-500 font-semibold uppercase text-[10px]">
                  <tr>
                    <th className="p-3">ORMAWA</th>
                    <th className="p-3">NAMA KEGIATAN</th>
                    <th className="p-3">JENIS LAPORAN</th>
                    <th className="p-3 text-center">TANGGAL KUMPUL</th>
                    <th className="p-3 text-center">STATUS</th>
                    <th className="p-3 text-right">AKSI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {daftarPengumpulan.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition">
                      <td className="p-3 font-bold text-gray-900">{item.ormawa}</td>
                      <td className="p-3 text-gray-800 font-semibold">{item.namaKegiatan}</td>
                      <td className="p-3 text-gray-600">{item.jenisLaporan}</td>
                      <td className="p-3 text-center text-gray-600">{item.tanggalKumpul}</td>
                      <td className="p-3 text-center">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-semibold ${
                          item.status === 'Disetujui' ? 'bg-emerald-100 text-emerald-700' :
                          item.status === 'Revisi' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <button 
                          onClick={() => handleOpenDetail(item)}
                          className="text-blue-600 hover:underline font-semibold text-xs"
                        >
                          Periksa Berkas
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

      {/* ================= MODAL DETAIL & PEMERIKSAAN BERKAS (DENGAN BLUR BACKGROUND) ================= */}
      {isDetailOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{selectedItem.ormawa}</span>
                <h3 className="text-base font-bold text-gray-900 mt-1">{selectedItem.namaKegiatan}</h3>
              </div>
              <button onClick={() => setIsDetailOpen(false)} className="text-gray-400 hover:text-gray-600 font-bold text-sm">✕</button>
            </div>

            <div className="space-y-3 text-xs text-gray-700">
              <div className="p-3 bg-gray-50 rounded-xl flex justify-between items-center">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">Berkas Diunggah</p>
                  <p className="font-semibold text-gray-900 mt-0.5">{selectedItem.fileNama}</p>
                </div>
                <button 
                  onClick={() => alert(`Mengunduh/membuka file: ${selectedItem.fileNama}`)}
                  className="px-3 py-1.5 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold shadow-sm"
                >
                  Lihat Berkas
                </button>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1">Catatan Pemeriksa / Alasan Revisi</label>
                <textarea 
                  rows={3}
                  value={catatanReview}
                  onChange={(e) => setCatatanReview(e.target.value)}
                  placeholder="Tuliskan catatan jika laporan perlu direvisi..."
                  className="w-full p-3 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-gray-100">
              <button 
                onClick={() => handleSimpanReview('Revisi')} 
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold"
              >
                Minta Revisi
              </button>
              <div className="flex gap-2">
                <button 
                  onClick={() => setIsDetailOpen(false)} 
                  className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-xs font-semibold"
                >
                  Batal
                </button>
                <button 
                  onClick={() => handleSimpanReview('Disetujui')} 
                  className="px-5 py-2 bg-[#0B2545] hover:bg-[#133763] text-white rounded-lg text-xs font-semibold shadow-sm"
                >
                  Setujui Laporan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL FILTER (DENGAN BLUR BACKGROUND) ================= */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl p-6 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <h3 className="text-xs font-bold text-gray-800">Filter Pengumpulan</h3>
              <button onClick={() => setIsFilterOpen(false)} className="text-gray-400 hover:text-gray-600 font-bold text-xs">✕</button>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2">Status Berkas</label>
              <div className="flex flex-wrap gap-2">
                {['Menunggu', 'Disetujui', 'Revisi'].map((s) => (
                  <button
                    key={s}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 hover:bg-blue-500 hover:text-white text-gray-600 transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-4 border-t border-gray-100">
              <button onClick={() => setIsFilterOpen(false)} className="px-4 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg">
                RESET
              </button>
              <button onClick={() => setIsFilterOpen(false)} className="px-4 py-1.5 bg-blue-500 text-white text-xs font-semibold rounded-lg">
                TERAPKAN
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Pengumpulan;