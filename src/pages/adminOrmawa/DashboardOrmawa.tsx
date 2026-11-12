import React from 'react';
import { useNavigate } from 'react-router-dom';

export const DashboardOrmawa: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('ormawaToken');
    navigate('/ormawa/login');
  };

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
              <a href="/ormawa/dashboard" className="flex items-center gap-3 px-3 py-2.5 bg-blue-600/40 text-blue-300 font-semibold rounded-lg transition border-l-4 border-blue-400">
                <span>📊</span>
                <span>Dashboard</span>
              </a>
              <a href="/ormawa/data-ormawa" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>👥</span>
                <span>Data Ormawa</span>
              </a>
              <a href="/ormawa/pengumuman" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📢</span>
                <span>Pengumuman</span>
              </a>
              <a href="/ormawa/proposal" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📄</span>
                <span>Proposal & Laporan</span>
              </a>
              <a href="/ormawa/pengumpulan" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📥</span>
                <span>Pengumpulan Laporan</span>
              </a>
              <a href="/ormawa/detail-kegiatan" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📋</span>
                <span>Detail Kegiatan</span>
              </a>
              <a href="/ormawa/struktur" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>🌿</span>
                <span>Struktur Kepengurusan</span>
              </a>
              <a href="/ormawa/revisi" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>🔄</span>
                <span>Revisi Dokumen</span>
              </a>
              <a href="/ormawa/edit-profil" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
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
        <main className="flex-1 p-8 overflow-y-auto space-y-6">
          
          <div>
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">PORTAL / DASHBOARD</p>
            <h1 className="text-xl font-bold text-gray-900">Dashboard Ormawa</h1>
          </div>

          {/* Selamat Datang & Filter */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <div>
              <h2 className="text-sm font-bold text-gray-900">Selamat datang</h2>
              <p className="text-xs text-gray-500">Kelola data Ormawa</p>
            </div>
            <div className="flex items-end gap-4">
              <div className="w-64">
                <label className="block text-[11px] font-bold text-gray-700 mb-1">PERIODE DATA ORMAWA</label>
                <select className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700 outline-none">
                  <option>Semua periode</option>
                </select>
              </div>
              <button className="px-5 py-2.5 bg-[#1B437C] text-white rounded-lg text-xs font-bold hover:bg-blue-900 cursor-pointer">
                Terapkan
              </button>
            </div>
          </div>

          {/* 3 Kotak Statistik Atas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-[11px] text-gray-500 font-bold mb-1">Anggota Ormawa Aktif</p>
              <p className="text-2xl font-extrabold text-gray-900 mb-2">12</p>
              <p className="text-[10px] text-gray-400">Data dermy</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-[11px] text-gray-500 font-bold mb-1">Keseluruhan Anggota</p>
              <p className="text-2xl font-extrabold text-gray-900 mb-2">8</p>
              <p className="text-[10px] text-gray-400">Data dermy</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-[11px] text-gray-500 font-bold mb-1">Pengumuman</p>
              <p className="text-2xl font-extrabold text-gray-900 mb-2">5</p>
              <p className="text-[10px] text-gray-400">Data dermy</p>
            </div>
          </div>

          {/* Kegiatan Unggulan Organisasi */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-gray-900">Kegiatan Unggulan Organisasi</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Card 1 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between bg-white">
                <div>
                  <div className="h-28 bg-gray-200 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=60" alt="Kegiatan" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 space-y-1">
                    <p className="text-[10px] text-blue-600 font-bold">📅 12 - 14 Okt 2026</p>
                    <p className="text-xs font-bold text-gray-900 leading-snug">Pelatihan Kepemimpinan Mahasiswa (LKMM-TD)</p>
                  </div>
                </div>
                <div className="p-3 pt-0 text-right">
                  <button onClick={() => navigate('/ormawa/detail-kegiatan')} className="text-xs font-bold text-blue-600 hover:underline cursor-pointer">Selengkapnya →</button>
                </div>
              </div>

              {/* Card 2 (Diperbaiki gambarnya agar tidak hilang) */}
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between bg-white">
                <div>
                  <div className="h-28 bg-gray-200 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&auto=format&fit=crop&q=60" alt="Kegiatan" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 space-y-1">
                    <p className="text-[10px] text-blue-600 font-bold">📅 05 - 10 Nov 2026</p>
                    <p className="text-xs font-bold text-gray-900 leading-snug">Pekan Olahraga dan Seni (PORSENI)</p>
                  </div>
                </div>
                <div className="p-3 pt-0 text-right">
                  <button onClick={() => navigate('/ormawa/detail-kegiatan')} className="text-xs font-bold text-blue-600 hover:underline cursor-pointer">Selengkapnya →</button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between bg-white">
                <div>
                  <div className="h-28 bg-gray-200 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=60" alt="Kegiatan" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 space-y-1">
                    <p className="text-[10px] text-blue-600 font-bold">📅 20 Nov 2026</p>
                    <p className="text-xs font-bold text-gray-900 leading-snug">Seminar Nasional Teknologi & Kewirausahaan</p>
                  </div>
                </div>
                <div className="p-3 pt-0 text-right">
                  <button onClick={() => navigate('/ormawa/detail-kegiatan')} className="text-xs font-bold text-blue-600 hover:underline cursor-pointer">Selengkapnya →</button>
                </div>
              </div>

              {/* Card 4 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between bg-white">
                <div>
                  <div className="h-28 bg-gray-200 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&auto=format&fit=crop&q=60" alt="Kegiatan" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 space-y-1">
                    <p className="text-[10px] text-blue-600 font-bold">📅 02 Des 2026</p>
                    <p className="text-xs font-bold text-gray-900 leading-snug">Bakti Sosial & Pengabdian Masyarakat</p>
                  </div>
                </div>
                <div className="p-3 pt-0 text-right">
                  <button onClick={() => navigate('/ormawa/detail-kegiatan')} className="text-xs font-bold text-blue-600 hover:underline cursor-pointer">Selengkapnya →</button>
                </div>
              </div>

            </div>
          </div>

          {/* Pengingat Laporan Kegiatan */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <div>
              <h3 className="text-sm font-bold text-gray-900">Pengingat laporan kegiatan</h3>
              <p className="text-[11px] text-gray-500">Laporan kegiatan yang belum dikumpulkan / perlu ditinjau.</p>
            </div>

            <div className="overflow-x-auto border border-gray-100 rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-[10px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                    <th className="py-3 px-4">KEGIATAN</th>
                    <th className="py-3 px-4">TAHUN AKADEMIK</th>
                    <th className="py-3 px-4">STATUS LAPORAN</th>
                    <th className="py-3 px-4 text-right">DETAIL</th>
                  </tr>
                </thead>
                <tbody className="text-xs divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50/50">
                    <td className="py-3.5 px-4 font-bold text-gray-900">Seminar Karier</td>
                    <td className="py-3.5 px-4 text-gray-600">2026/2027</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-100 text-rose-700">
                        Belum dikumpulkan
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button 
                        onClick={() => navigate('/ormawa/detail-kegiatan')}
                        className="px-3.5 py-1.5 bg-[#1B437C] hover:bg-blue-900 text-white rounded-lg font-bold transition shadow-sm cursor-pointer"
                      >
                        Cek Kegiatan
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="py-3.5 px-4 font-bold text-gray-900">Pekan Seni</td>
                    <td className="py-3.5 px-4 text-gray-600">2026/2027</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-100 text-rose-700">
                        Belum dikumpulkan
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button 
                        onClick={() => navigate('/ormawa/detail-kegiatan')}
                        className="px-3.5 py-1.5 bg-[#1B437C] hover:bg-blue-900 text-white rounded-lg font-bold transition shadow-sm cursor-pointer"
                      >
                        Cek Kegiatan
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
    </div>
  );
};

export default DashboardOrmawa;