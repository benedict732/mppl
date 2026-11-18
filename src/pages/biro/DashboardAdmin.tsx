import React, { useState } from 'react';

export const DashboardAdmin: React.FC = () => {
  const [isBeasiswaOpen, setIsBeasiswaOpen] = useState(false);
  const [tahunAkademik, setTahunAkademik] = useState('2026/2027');
  
  // State untuk Pop-up Total Penerima Beasiswa (VDMI, KIP, Bank Indonesia)
  const [isPopupPenerimaOpen, setIsPopupPenerimaOpen] = useState(false);

  // State untuk Pop-up Konfirmasi Logout
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/biro/login';
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col font-sans text-gray-800">
      <div className="flex flex-1">
        
        {/* SIDEBAR KIRI */}
        <aside className="w-64 bg-[#0B1E36] text-white flex flex-col justify-between p-4 shrink-0">
          <div>
            {/* LOGO KAMPUS DI ATAS SIDEBAR */}
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
              <a href="/biro/dashboard" className="flex items-center gap-3 px-3 py-2.5 bg-blue-600/30 text-blue-300 font-semibold rounded-lg">
                <span>📊</span>
                <span>Dashboard</span>
              </a>

              {/* ACCORDION DATA BEASISWA */}
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
                    <a href="/biro/beasiswa/penerima" className="block py-1.5 px-2 text-xs text-gray-300 hover:text-white transition">
                      › Data Penerima
                    </a>
                    <a href="/biro/beasiswa/calon" className="block py-1.5 px-2 text-xs text-gray-300 hover:text-white transition">
                      › Data Calon Penerima
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

              {/* MENU AGENDA & KEGIATAN */}
              <a href="/biro/agenda-kegiatan" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📅</span>
                <span>Agenda & Kegiatan</span>
              </a>

              <a href="/biro/proposal" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📄</span>
                <span>Proposal & Laporan</span>
              </a>

              <a href="/biro/manajemen-akun" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
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
              className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold transition shadow-sm cursor-pointer"
            >
              <span>🚪</span>
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* KONTEN UTAMA DASHBOARD */}
        <main className="flex-1 p-8 overflow-y-auto">
          
          {/* HEADER UTAMA */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">PORTAL / DASHBOARD</p>
              <h1 className="text-xl font-bold text-gray-900">Dashboard Staf Biro</h1>
            </div>
          </div>

          {/* SUBTITLE & FILTER TAHUN AKADEMIK DIBAWAHNYA */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">Selamat datang, Staff Biro Kemahasiswaan</h2>
              <p className="text-xs text-gray-500 mt-0.5">Kelola data beasiswa, ormawa, pengumuman, dan laporan kegiatan.</p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-bold text-gray-500">Tahun Akademik:</span>
              <select
                value={tahunAkademik}
                onChange={(e) => setTahunAkademik(e.target.value)}
                className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 outline-none shadow-sm cursor-pointer"
              >
                <option value="2026/2027">2026/2027</option>
                <option value="2025/2026">2025/2026</option>
              </select>
            </div>
          </div>

          {/* 4 KARTU METRIK UTAMA */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            
            {/* KARTU 1: TOTAL PENERIMA BEASISWA */}
            <div 
              onClick={() => setIsPopupPenerimaOpen(true)}
              className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-blue-600 hover:shadow-md transition cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start">
                  <p className="text-[11px] text-gray-500 font-medium">Total Penerima Beasiswa</p>
                  <span className="text-[10px] font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition">
                    Detail
                  </span>
                </div>
                <p className="text-3xl font-extrabold text-gray-900 mt-1">128</p>
              </div>
              <p className="text-[10px] text-blue-600 font-semibold mt-3 pt-2 border-t border-gray-50">
                Klik untuk rincian (VDMI, KIP, BI) →
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-emerald-600 flex flex-col justify-between">
              <div>
                <p className="text-[11px] text-gray-500 font-medium">Total Beasiswa (3)</p>
                <p className="text-3xl font-extrabold text-gray-900 mt-1">3</p>
              </div>
              <p className="text-[10px] text-emerald-600 font-semibold mt-3 pt-2 border-t border-gray-50">
                Program aktif (VDMI, KIP, BI)
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-amber-500 flex flex-col justify-between">
              <div>
                <p className="text-[11px] text-gray-500 font-medium">Proposal & Laporan menunggu</p>
                <p className="text-3xl font-extrabold text-gray-900 mt-1">8</p>
              </div>
              <p className="text-[10px] text-amber-600 font-semibold mt-3 pt-2 border-t border-gray-50">
                Perlu diperiksa
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-blue-400 flex flex-col justify-between">
              <div>
                <p className="text-[11px] text-gray-500 font-medium">Kegiatan Beasiswa & Ormawa</p>
                <p className="text-3xl font-extrabold text-gray-900 mt-1">5</p>
              </div>
              <p className="text-[10px] text-gray-400 mt-3 pt-2 border-t border-gray-50">
                Agenda aktif kampus
              </p>
            </div>
          </div>

          {/* SECTION UTAMA: GRAFIK PENERIMA BEASISWA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            <div className="lg:col-span-12 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Grafik Penerima Beasiswa (VDMI, BI, KIP)</h3>
                  <p className="text-[11px] text-gray-400 mt-0.5">Statistik sebaran mahasiswa penerima beasiswa utama tahun akademik {tahunAkademik}</p>
                </div>
                <span className="text-xs bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded-lg">
                  Total Aktif: 128 Mahasiswa
                </span>
              </div>

              {/* SIMULASI GRAFIK BATANG (BAR CHART) */}
              <div className="space-y-4 py-4 px-2">
                <div>
                  <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                    <span>KIP Kuliah (Kartu Indonesia Pintar)</span>
                    <span className="text-blue-600">65 Mahasiswa (51%)</span>
                  </div>
                  <div className="w-full bg-gray-100 h-4 rounded-full overflow-hidden p-0.5">
                    <div className="bg-blue-600 h-full rounded-full transition-all duration-500" style={{ width: '51%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                    <span>Beasiswa Bank Indonesia (GenBI)</span>
                    <span className="text-emerald-600">40 Mahasiswa (31%)</span>
                  </div>
                  <div className="w-full bg-gray-100 h-4 rounded-full overflow-hidden p-0.5">
                    <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: '31%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                    <span>Van Deventer-Maas Indonesia (VDMI)</span>
                    <span className="text-amber-600">23 Mahasiswa (18%)</span>
                  </div>
                  <div className="w-full bg-gray-100 h-4 rounded-full overflow-hidden p-0.5">
                    <div className="bg-amber-400 h-full rounded-full transition-all duration-500" style={{ width: '18%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TABEL PROPOSAL & LAPORAN TERBARU (DENGAN LINK KE HALAMAN PROPOSAL) */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Proposal & laporan terbaru</h3>
                <p className="text-[11px] text-gray-400 mt-0.5">Dokumen kegiatan yang membutuhkan tindak lanjut</p>
              </div>
              <a 
                href="/biro/proposal"
                className="px-4 py-1.5 border border-gray-200 hover:bg-gray-50 rounded-lg text-xs font-semibold text-gray-700 transition cursor-pointer inline-block"
              >
                Lihat semua
              </a>
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
                    <td className="p-3 font-semibold text-gray-900">
                      <a href="/biro/proposal" className="underline hover:text-blue-600 transition cursor-pointer">
                        Bakti Sosial
                      </a>
                    </td>
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
                    <td className="p-3 font-semibold text-gray-900">
                      <a href="/biro/proposal" className="underline hover:text-blue-600 transition cursor-pointer">
                        Pekan Seni
                      </a>
                    </td>
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
                    <td className="p-3 font-semibold text-gray-900">
                      <a href="/biro/proposal" className="underline hover:text-blue-600 transition cursor-pointer">
                        Seminar Karier
                      </a>
                    </td>
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

          {/* FOOTER BAWAH LENGKAP */}
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

      {/* ================= POP-UP RINCIAN TOTAL PENERIMA BEASISWA ================= */}
      {isPopupPenerimaOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-6 animate-in fade-in zoom-in duration-200 border border-gray-100">
            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Rincian Beasiswa Utama</span>
                <h3 className="text-lg font-bold text-gray-900">Total Penerima Beasiswa</h3>
              </div>
              <button 
                onClick={() => setIsPopupPenerimaOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold flex items-center justify-center transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3.5 bg-blue-50/60 rounded-xl border border-blue-100">
                <div>
                  <p className="text-xs font-bold text-blue-900">KIP Kuliah</p>
                  <p className="text-[10px] text-blue-600">Puslapdik Kemendikbudristek</p>
                </div>
                <span className="text-base font-black text-blue-700">65 Mhs</span>
              </div>

              <div className="flex items-center justify-between p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-100">
                <div>
                  <p className="text-xs font-bold text-emerald-900">Bank Indonesia (GenBI)</p>
                  <p className="text-[10px] text-emerald-600">Kantor Perwakilan BI</p>
                </div>
                <span className="text-base font-black text-emerald-700">40 Mhs</span>
              </div>

              <div className="flex items-center justify-between p-3.5 bg-amber-50/60 rounded-xl border border-amber-100">
                <div>
                  <p className="text-xs font-bold text-amber-900">Van Deventer-Maas (VDMI)</p>
                  <p className="text-[10px] text-amber-600">Yayasan VDMI Stichting</p>
                </div>
                <span className="text-base font-black text-amber-700">23 Mhs</span>
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={() => setIsPopupPenerimaOpen(false)}
                className="w-full py-2.5 bg-[#0B1E36] hover:bg-blue-900 text-white rounded-xl text-xs font-bold shadow transition cursor-pointer"
              >
                Tutup Rincian
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

export default DashboardAdmin;