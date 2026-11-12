import React, { useState } from 'react';

export const RekapOrmawa: React.FC = () => {
  const [isBeasiswaOpen, setIsBeasiswaOpen] = useState(false);
  const [isRekapOpen, setIsRekapOpen] = useState(true);
  const [periode, setPeriode] = useState('Semua periode');

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/biro/login';
  };

  const handleExport = () => {
    alert('Memproses Export Laporan Rekapitulasi Ormawa...');
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col font-sans text-gray-800">
      <div className="flex flex-1">
        
        {/* SIDEBAR KIRI KONSISTEN DENGAN LOGO KAMPUS */}
        <aside className="w-64 bg-[#0B1E36] text-white flex flex-col justify-between p-4 shrink-0">
          <div>
            <div className="flex items-center gap-3 mb-6 px-2 pt-2">
             <img 
             src="/logo.jpg" 
             alt="Logo.jpg" 
             className="w-9 h-9 object-contain shrink-0"
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
                  className="w-full flex items-center justify-between px-3 py-2.5 bg-blue-600/30 text-blue-300 font-semibold rounded-lg text-left"
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
                    <a href="/biro/rekapitulasi/ormawa" className="block py-1.5 px-2 text-xs text-blue-300 font-semibold bg-white/10 rounded">› Ormawa</a>
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
            <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold transition">
              <span>🚪</span>
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* KONTEN UTAMA LENGKAP UTUH */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="mb-6">
            <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">KEPALA BIRO / REKAPITULASI</p>
            <h1 className="text-xl font-bold text-gray-900">Rekapitulasi Kegiatan</h1>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Rekapitulasi Kegiatan Ormawa</h2>
            <p className="text-xs text-gray-500 mt-1">Pantau kegiatan per tahun akademik dan kelengkapan laporan.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="flex flex-col">
                <label className="text-[10px] font-bold text-gray-700 mb-1">Periode Rekapitulasi</label>
                <div className="flex gap-2">
                  <select
                    value={periode}
                    onChange={(e) => setPeriode(e.target.value)}
                    className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-xs font-medium text-gray-600 outline-none shadow-sm min-w-[200px]"
                  >
                    <option value="Semua periode">Semua periode</option>
                    <option value="2026/2027">2026/2027</option>
                    <option value="2025/2026">2025/2026</option>
                  </select>
                  <button className="px-5 py-2 bg-[#1B437C] hover:bg-[#133360] text-white text-xs font-semibold rounded-lg shadow-sm transition">
                    Terapkan
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={handleExport}
              className="px-6 py-2.5 bg-[#22C55E] hover:bg-[#16A34A] text-white text-xs font-bold rounded-lg shadow-sm transition flex items-center gap-2 self-end md:self-auto"
            >
              <span>Export File</span>
            </button>
          </div>

          {/* KARTU METRIK UTAMA */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
              <p className="text-[11px] text-gray-500 font-medium">Total kegiatan</p>
              <p className="text-3xl font-extrabold text-gray-900 mt-1">36</p>
              <p className="text-[10px] text-gray-400 mt-1">Contoh data</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-emerald-600">
              <p className="text-[11px] text-gray-500 font-medium">Laporan terkumpul</p>
              <p className="text-3xl font-extrabold text-gray-900 mt-1">24</p>
              <p className="text-[10px] text-gray-400 mt-1">Contoh data</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-amber-500">
              <p className="text-[11px] text-gray-500 font-medium">Belum dikumpulkan</p>
              <p className="text-3xl font-extrabold text-gray-900 mt-1">6</p>
              <p className="text-[10px] text-amber-600 font-semibold mt-1">Perlu tindak lanjut</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-blue-400">
              <p className="text-[11px] text-gray-500 font-medium">Menunggu verifikasi</p>
              <p className="text-3xl font-extrabold text-gray-900 mt-1">6</p>
              <p className="text-[10px] text-gray-400 mt-1">Contoh data</p>
            </div>
          </div>

          {/* GRID PROGRESS & STATUS CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            <div className="lg:col-span-8 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-1">Kelengkapan laporan per ormawa</h3>
              <p className="text-[11px] text-gray-400 mb-6">Jumlah laporan terkumpul dibanding total kegiatan</p>

              <div className="space-y-5 text-xs">
                <div>
                  <div className="flex justify-between font-semibold mb-1.5">
                    <span className="text-gray-800">BEM</span>
                    <span className="text-gray-500 font-bold">5/5</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#1B437C] rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-semibold mb-1.5">
                    <span className="text-gray-800">Himpunan Mahasiswa</span>
                    <span className="text-gray-500 font-bold">4/6</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#1B437C] rounded-full" style={{ width: '66%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-semibold mb-1.5">
                    <span className="text-gray-800">UKM Seni</span>
                    <span className="text-gray-500 font-bold">7/9</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#1B437C] rounded-full" style={{ width: '77%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-semibold mb-1.5">
                    <span className="text-gray-800">UKM Olahraga</span>
                    <span className="text-gray-500 font-bold">3/5</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#1B437C] rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-3">
              <h3 className="text-sm font-bold text-gray-900 mb-4">Status laporan</h3>

              <div className="p-4 bg-[#EAF7ED] text-emerald-900 rounded-xl flex justify-between items-center shadow-sm">
                <span className="text-xs font-semibold">Terkumpul</span>
                <span className="text-2xl font-extrabold text-emerald-800">24</span>
              </div>

              <div className="p-4 bg-[#FCE8E8] text-red-900 rounded-xl flex justify-between items-center shadow-sm">
                <span className="text-xs font-semibold">Belum dikumpulkan</span>
                <span className="text-2xl font-extrabold text-red-800">6</span>
              </div>

              <div className="p-4 bg-[#FEF6E6] text-amber-900 rounded-xl flex justify-between items-center shadow-sm">
                <span className="text-xs font-semibold">Menunggu verifikasi</span>
                <span className="text-2xl font-extrabold text-amber-800">6</span>
              </div>
            </div>
          </div>

          {/* TABEL DATA */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
            <h3 className="text-sm font-bold text-gray-900 mb-4">Ormawa yang belum mengumpulkan laporan</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 text-gray-500 font-semibold uppercase text-[10px]">
                  <tr>
                    <th className="p-3">KEGIATAN</th>
                    <th className="p-3">TANGGAL KEGIATAN</th>
                    <th className="p-3 text-center">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 font-semibold text-gray-800">Seminar Karier</td>
                    <td className="p-3 text-gray-600">08 - 10 - 2026</td>
                    <td className="p-3 text-center">
                      <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-[10px] font-semibold">Belum dikumpulkan</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-gray-800">Turnamen Internal</td>
                    <td className="p-3 text-gray-600">05 - 09 - 2026</td>
                    <td className="p-3 text-center">
                      <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-[10px] font-semibold">Belum dikumpulkan</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <footer className="pt-6 border-t border-gray-200 text-[11px] text-gray-500 flex flex-col md:flex-row justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-bold text-gray-800">
                <div className="p-1 bg-blue-900 rounded text-white text-xs">🛡️</div>
                <span>SI-BEO</span>
              </div>
              <p className="text-[10px] text-gray-400 max-w-sm">Platform informasi beasiswa dan organisasi kemahasiswaan untuk memudahkan pencarian peluang dan pengembangan diri di kampus.</p>
            </div>
            <div className="space-y-1">
              <p className="font-bold text-gray-700">Kontak Kampus</p>
              <p>Email: <span className="text-blue-600 underline">[tempatkan email resmi]</span></p>
              <p>Telepon: <span className="text-blue-600 underline">[tempatkan nomor resmi]</span></p>
              <p>Lokasi: <span className="text-blue-600 underline">[tempatkan alamat resmi]</span></p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default RekapOrmawa;