import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DokumenItem {
  id: string;
  kegiatan: string;
  ormawa: string;
  jenisDokumen: string;
  tahunAkademik: string;
  status: 'Menunggu' | 'Revisi' | 'Diterima' | 'Ditolak';
  fileNama: string;
  deskripsiFile: string;
}

export const ProposalLaporan: React.FC = () => {
  const navigate = useNavigate();
  const [isBeasiswaOpen, setIsBeasiswaOpen] = useState(false);
  const [isRekapOpen, setIsRekapOpen] = useState(false);
  const [tahunAkademik, setTahunAkademik] = useState('2026/2027');
  
  // State Modal Filter
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterJenis, setFilterJenis] = useState('Proposal');
  const [filterStatus, setFilterStatus] = useState('Menunggu');
  const [filterOrmawa, setFilterOrmawa] = useState('BEM');

  // State Dokumen yang sedang dipilih untuk diperiksa
  const [selectedDokumen, setSelectedDokumen] = useState<DokumenItem>({
    id: '1',
    kegiatan: 'Proposal Bakti Sosial',
    ormawa: 'BEM',
    jenisDokumen: 'Proposal',
    tahunAkademik: '2026/2027',
    status: 'Menunggu',
    fileNama: 'Proposal_Bakti_Sosial.pdf',
    deskripsiFile: 'Lampiran proposal - contoh'
  });

  const [catatanPemeriksa, setCatatanPemeriksa] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/biro/login';
  };

  const daftarDokumen: DokumenItem[] = [
    {
      id: '1',
      kegiatan: 'Bakti Sosial',
      ormawa: 'BEM',
      jenisDokumen: 'Proposal',
      tahunAkademik: '2026/2027',
      status: 'Menunggu',
      fileNama: 'Proposal_Bakti_Sosial.pdf',
      deskripsiFile: 'Lampiran proposal - contoh'
    },
    {
      id: '2',
      kegiatan: 'Pekan Seni',
      ormawa: 'UKM Seni',
      jenisDokumen: 'Laporan',
      tahunAkademik: '2026/2027',
      status: 'Revisi',
      fileNama: 'Laporan_Pekan_Seni.pdf',
      deskripsiFile: 'Lampiran laporan akhir - contoh'
    }
  ];

  const handleAksiStatus = (statusBaru: 'Diterima' | 'Ditolak' | 'Revisi') => {
    alert(`Dokumen "${selectedDokumen.kegiatan}" berhasil diberi status: ${statusBaru}. Catatan: ${catatanPemeriksa || '-'}`);
    // Setelah aksi, langsung arahkan ke halaman detail laporan
    navigate('/biro/detail-laporan');
  };

  // Fungsi saat tombol "Periksa" pada tabel diklik
  const handlePeriksaClick = (item: DokumenItem) => {
    setSelectedDokumen(item);
    // Langsung arahkan ke halaman detail laporan
    navigate('/biro/detail-laporan');
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
              <a href="/biro/proposal" className="flex items-center gap-3 px-3 py-2.5 bg-blue-600/30 text-blue-300 font-semibold rounded-lg transition">
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
            <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">LAPORAN / VERIFIKASI</p>
            <h1 className="text-xl font-bold text-gray-900">Proposal & Laporan</h1>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Proposal & Laporan Kegiatan</h2>
            <p className="text-xs text-gray-500 mt-1">Periksa dokumen yang dikirim ormawa dan pantau status pengumpulan.</p>
          </div>

          {/* FILTER & TAHUN AKADEMIK BAR */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-5">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Tahun akademik</label>
                <input 
                  type="text" 
                  value={tahunAkademik} 
                  onChange={(e) => setTahunAkademik(e.target.value)} 
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                />
              </div>

              <div className="md:col-span-7">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Filter</label>
                <div 
                  onClick={() => setIsFilterOpen(true)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs flex justify-between items-center cursor-pointer bg-white text-gray-500 hover:border-blue-400 transition"
                >
                  <span>Filter ..........</span>
                  <span>⚙️</span>
                </div>
              </div>
            </div>
          </div>

          {/* TABEL DAFTAR DOKUMEN */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-900">Daftar dokumen</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 text-gray-500 font-semibold uppercase text-[10px]">
                  <tr>
                    <th className="p-3">KEGIATAN</th>
                    <th className="p-3">ORMAWA</th>
                    <th className="p-3">DOKUMEN</th>
                    <th className="p-3">TAHUN AKADEMIK</th>
                    <th className="p-3">STATUS</th>
                    <th className="p-3 text-right">AKSI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {daftarDokumen.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition">
                      <td className="p-3 font-bold text-gray-900">{item.kegiatan}</td>
                      <td className="p-3 text-gray-600">{item.ormawa}</td>
                      <td className="p-3 text-gray-600">{item.jenisDokumen}</td>
                      <td className="p-3 text-gray-600">{item.tahunAkademik}</td>
                      <td className="p-3">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-semibold ${
                          item.status === 'Menunggu' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <button 
                          onClick={() => handlePeriksaClick(item)}
                          className="text-blue-600 hover:underline font-semibold text-xs"
                        >
                          Periksa
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* PANEL DETAIL PEMERIKSAAN DOKUMEN */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8 space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-base font-bold text-gray-900">Detail: {selectedDokumen.kegiatan}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{selectedDokumen.ormawa} - Tahun akademik {selectedDokumen.tahunAkademik}</p>
              </div>
              <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-[11px] font-semibold">
                Menunggu verifikasi
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Sisi Kiri: File Viewer & Catatan */}
              <div className="lg:col-span-7 space-y-4">
                <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg font-bold flex items-center justify-center text-xs">
                      PDF
                    </div>
                    <div>
                      <p className="font-bold text-xs text-gray-900">{selectedDokumen.fileNama}</p>
                      <p className="text-[10px] text-gray-500">{selectedDokumen.deskripsiFile}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => alert(`Membuka/mengunduh file: ${selectedDokumen.fileNama}`)}
                    className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg shadow-sm transition"
                  >
                    Lihat file
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Catatan pemeriksa</label>
                  <textarea 
                    rows={3}
                    value={catatanPemeriksa}
                    onChange={(e) => setCatatanPemeriksa(e.target.value)}
                    placeholder="Isi alasan penolakan atau catatan revisi jika diperlukan."
                    className="w-full p-3 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  ></textarea>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button 
                    onClick={() => handleAksiStatus('Diterima')}
                    className="px-6 py-2.5 bg-[#0B2545] hover:bg-[#133763] text-white rounded-lg text-xs font-semibold shadow transition"
                  >
                    Terima
                  </button>
                  <button 
                    onClick={() => handleAksiStatus('Ditolak')}
                    className="px-6 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-xs font-semibold transition"
                  >
                    Tolak
                  </button>
                  <button 
                    onClick={() => handleAksiStatus('Revisi')}
                    className="px-6 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-xs font-semibold transition"
                  >
                    Minta Revisi
                  </button>
                </div>
              </div>

              {/* Sisi Kanan: Panduan Riwayat Status */}
              <div className="lg:col-span-5 bg-gray-50/70 p-5 rounded-xl border border-gray-100 space-y-3">
                <p className="text-xs font-bold text-gray-800 uppercase tracking-wide">RIWAYAT STATUS</p>
                
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 font-semibold rounded-full text-[10px] w-20 text-center">Dikirim</span>
                  <span className="text-gray-600">Dokumen masuk ke sistem</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 font-semibold rounded-full text-[10px] w-20 text-center">Menunggu</span>
                  <span className="text-gray-600">Menunggu pemeriksaan</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 font-semibold rounded-full text-[10px] w-20 text-center">Revisi</span>
                  <span className="text-gray-600">Diperlukan revisi</span>
                </div>

                <div className="pt-2 border-t border-gray-200">
                  <p className="text-[11px] text-red-600 font-semibold">Jika ditolak, alasan wajib dicatat.</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Dokumen yang diterima dapat diminta revisi.</p>
                </div>
              </div>
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

      {/* ================= MODAL FILTER (DENGAN BLUR BACKGROUND) ================= */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 space-y-4 animate-in fade-in zoom-in duration-200 relative">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <h3 className="text-sm font-bold text-gray-900">Filter Proposal & Laporan</h3>
              <button onClick={() => setIsFilterOpen(false)} className="text-gray-400 hover:text-gray-600 font-bold text-sm">✕</button>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2">Jenis Dokumen</label>
              <div className="flex flex-wrap gap-2">
                {['Proposal', 'Laporan'].map((j) => (
                  <button
                    key={j}
                    onClick={() => setFilterJenis(j)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold ${filterJenis === j ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}
                  >
                    {j}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2">Status</label>
              <div className="flex flex-wrap gap-2">
                {['Menunggu', 'Revisi', 'Diterima', 'Ditolak'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setFilterStatus(s)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold ${filterStatus === s ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2">Ormawa</label>
              <div className="flex flex-wrap gap-2">
                {['BEM', 'BPM', 'MPM', 'UKM Seni'].map((o) => (
                  <button
                    key={o}
                    onClick={() => setFilterOrmawa(o)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold ${filterOrmawa === o ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <button 
                onClick={() => { setFilterJenis(''); setFilterStatus(''); setFilterOrmawa(''); }} 
                className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg transition"
              >
                RESET
              </button>
              <div className="flex gap-2">
                <button 
                  onClick={() => setIsFilterOpen(false)} 
                  className="px-5 py-2 border border-gray-300 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-50"
                >
                  Batal
                </button>
                <button 
                  onClick={() => setIsFilterOpen(false)} 
                  className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold rounded-lg"
                >
                  TERAPKAN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProposalLaporan;