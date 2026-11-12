import React, { useState } from 'react';

export const DashboardAdmin: React.FC = () => {
  const [isBeasiswaOpen, setIsBeasiswaOpen] = useState(false);
  const [isRekapOpen, setIsRekapOpen] = useState(false);
  const [tahunAkademik, setTahunAkademik] = useState('2026/2027');

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/biro/login';
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col font-sans text-gray-800">
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
              <a href="/biro/dashboard" className="flex items-center gap-3 px-3 py-2.5 bg-blue-600/30 text-blue-300 font-semibold rounded-lg">
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
                    <a href="/biro/beasiswa/penerima" className="block py-1.5 px-2 text-xs text-gray-300 hover:text-white transition">
                      › Data Penerima
                    </a>
                    <a href="/biro/beasiswa/calon" className="block py-1.5 px-2 text-xs text-gray-300 hover:text-white transition">
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
              className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold transition shadow-sm"
            >
              <span>🚪</span>
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* KONTEN UTAMA DASHBOARD (PERSIS DESAIN SCREENSHOT) */}
        <main className="flex-1 p-8 overflow-y-auto">
          
          {/* HEADER UTAMA & FILTER TAHUN */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">PORTAL / DASHBOARD</p>
              <h1 className="text-xl font-bold text-gray-900">Dashboard Staf Biro</h1>
            </div>

            <div className="flex items-center gap-4">
              <select
                value={tahunAkademik}
                onChange={(e) => setTahunAkademik(e.target.value)}
                className="bg-white border border-gray-200 rounded-lg px-4 py-1.5 text-xs font-semibold text-gray-700 outline-none shadow-sm cursor-pointer"
              >
                <option value="2026/2027">2026/2027</option>
                <option value="2025/2026">2025/2026</option>
              </select>
              <span className="text-xs font-bold text-gray-400">1</span>
            </div>
          </div>

          {/* SUBTITLE */}
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold text-gray-900">Selamat datang, Admin</h2>
            <p className="text-xs text-gray-500 mt-0.5">Kelola data beasiswa, ormawa, pengumuman, dan laporan kegiatan.</p>
          </div>

          {/* 4 KARTU METRIK UTAMA (PERSIS SCREENSHOT) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
              <p className="text-[11px] text-gray-500 font-medium">Total Penerima Beasiswa</p>
              <p className="text-3xl font-extrabold text-gray-900 mt-1">128</p>
              <p className="text-[10px] text-gray-400 mt-1">Data dummy</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-amber-500">
              <p className="text-[11px] text-gray-500 font-medium">Laporan selesai</p>
              <p className="text-3xl font-extrabold text-gray-900 mt-1">12</p>
              <p className="text-[10px] text-gray-400 mt-1">Data dummy</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-amber-500">
              <p className="text-[11px] text-gray-500 font-medium">Laporan menunggu</p>
              <p className="text-3xl font-extrabold text-gray-900 mt-1">8</p>
              <p className="text-[10px] text-amber-600 font-semibold mt-1">Perlu diperiksa</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-blue-400">
              <p className="text-[11px] text-gray-500 font-medium">Pengumuman</p>
              <p className="text-3xl font-extrabold text-gray-900 mt-1">5</p>
              <p className="text-[10px] text-gray-400 mt-1">Data dummy</p>
            </div>
          </div>

          {/* SECTION UTAMA: PROPOSAL & LAPORAN TERBARU + AKSES CEPAT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            
            {/* TABEL PROPOSAL & LAPORAN TERBARU (8 KOLOM) */}
            <div className="lg:col-span-8 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Proposal & laporan terbaru</h3>
                  <p className="text-[11px] text-gray-400 mt-0.5">Dokumen yang membutuhkan tindak lanjut</p>
                </div>
                <button className="px-4 py-1.5 border border-gray-200 hover:bg-gray-50 rounded-lg text-xs font-semibold text-gray-700 transition">
                  Lihat semua
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-gray-50 text-gray-500 font-semibold uppercase text-[10px]">
                    <tr>
                      <th className="p-3">KEGIATAN</th>
                      <th className="p-3">TANGGAL</th>
                      <th className="p-3">ORMAWA</th>
                      <th className="p-3">JENIS</th>
                      <th className="p-3 text-center">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50 transition">
                      <td className="p-3 font-semibold text-gray-900 underline cursor-pointer">Bakti Sosial</td>
                      <td className="p-3 text-gray-600">12/12/2026</td>
                      <td className="p-3 text-gray-600">BEM</td>
                      <td className="p-3 text-gray-600">Proposal</td>
                      <td className="p-3 text-center">
                        <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] font-semibold">
                          Menunggu
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition">
                      <td className="p-3 font-semibold text-gray-900 underline cursor-pointer">Pekan Seni</td>
                      <td className="p-3 text-gray-600">2/12/2026</td>
                      <td className="p-3 text-gray-600">BEM Fakultas</td>
                      <td className="p-3 text-gray-600">Laporan</td>
                      <td className="p-3 text-center">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-semibold">
                          Revisi
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition">
                      <td className="p-3 font-semibold text-gray-900 underline cursor-pointer">Seminar Karier</td>
                      <td className="p-3 text-gray-600">2/11/2026</td>
                      <td className="p-3 text-gray-600">HIMA</td>
                      <td className="p-3 text-gray-600">Proposal</td>
                      <td className="p-3 text-center">
                        <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] font-semibold">
                          Menunggu
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* KARTU AKSES CEPAT (4 KOLOM PERSIS SCREENSHOT) */}
            <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-4">Akses cepat</h3>
                
                <div className="space-y-3">
                  <a 
                    href="/biro/beasiswa/penerima" 
                    className="flex items-center justify-between p-3 bg-blue-50/50 hover:bg-blue-100/50 rounded-xl transition border border-blue-100/50 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xs">
                        →
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">Data beasiswa</p>
                        <p className="text-[10px] text-gray-400">Kelola data mahasiswa</p>
                      </div>
                    </div>
                    <span className="text-gray-400 text-xs group-hover:translate-x-1 transition">›</span>
                  </a>

                  <a 
                    href="/biro/ormawa" 
                    className="flex items-center justify-between p-3 bg-blue-50/50 hover:bg-blue-100/50 rounded-xl transition border border-blue-100/50 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xs">
                        →
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">Data ormawa</p>
                        <p className="text-[10px] text-gray-400">Anggota & struktur</p>
                      </div>
                    </div>
                    <span className="text-gray-400 text-xs group-hover:translate-x-1 transition">›</span>
                  </a>

                  <a 
                    href="/biro/pengumuman" 
                    className="flex items-center justify-between p-3 bg-blue-50/50 hover:bg-blue-100/50 rounded-xl transition border border-blue-100/50 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xs">
                        →
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">Pengumuman</p>
                        <p className="text-[10px] text-gray-400">Informasi beasiswa/kegiatan</p>
                      </div>
                    </div>
                    <span className="text-gray-400 text-xs group-hover:translate-x-1 transition">›</span>
                  </a>

                  <a 
                    href="/biro/rekapitulasi/beasiswa" 
                    className="flex items-center justify-between p-3 bg-blue-50/50 hover:bg-blue-100/50 rounded-xl transition border border-blue-100/50 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xs">
                        →
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">Rekapitulasi</p>
                        <p className="text-[10px] text-gray-400">Khusus Kepala Biro</p>
                      </div>
                    </div>
                    <span className="text-gray-400 text-xs group-hover:translate-x-1 transition">›</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* TABEL PENGINGAT LAPORAN KEGIATAN (PERSIS SCREENSHOT) */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-900">Pengingat laporan kegiatan</h3>
              <p className="text-[11px] text-gray-400 mt-0.5">Ormawa yang belum mengirimkan laporan setelah kegiatan selesai</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 text-gray-500 font-semibold uppercase text-[10px]">
                  <tr>
                    <th className="p-3">KEGIATAN</th>
                    <th className="p-3 text-center">TAHUN AKADEMIK</th>
                    <th className="p-3 text-center">STATUS LAPORAN</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition">
                    <td className="p-3 font-medium text-gray-900">Seminar Karier</td>
                    <td className="p-3 text-center text-gray-600">08 - 10 - 2026</td>
                    <td className="p-3 text-center">
                      <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-[10px] font-semibold">
                        Belum dikumpulkan
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="p-3 font-medium text-gray-900">Pekan Seni</td>
                    <td className="p-3 text-center text-gray-600">05 - 09 - 2026</td>
                    <td className="p-3 text-center">
                      <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-[10px] font-semibold">
                        Belum dikumpulkan
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FOOTER BAWAH */}
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
    </div>
  );
};

export default DashboardAdmin;