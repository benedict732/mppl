import React, { useState } from 'react';

interface BaganItem {
  id: string;
  peran: string;
  nama: string;
  keterangan?: string;
}

export const StrukturKepengurusanAdmin: React.FC = () => {
  // Filter Kategori Utama: 'Biro Kemahasiswaan' atau 'Ormawa'
  const [kategoriUtama, setKategoriUtama] = useState<'Biro' | 'Ormawa'>('Biro');
  
  // Filter Ormawa jika kategori utama 'Ormawa' dipilih
  const [subOrmawa, setSubOrmawa] = useState<'MPM' | 'BEM' | 'BPM'>('BEM');
  
  // Format Periode
  const [periode, setPeriode] = useState('2026/2027');
  
  const [isBeasiswaOpen, setIsBeasiswaOpen] = useState(false);

  // State Modal Edit Bagan
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedBagan, setSelectedBagan] = useState<BaganItem | null>(null);
  const [formData, setFormData] = useState({ peran: '', nama: '', keterangan: '' });

  // State untuk Pop-up Konfirmasi Logout
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  // Data Struktur untuk Biro Kemahasiswaan & Ormawa (MPM, BEM, BPM)
  const [strukturData, setStrukturData] = useState<Record<string, BaganItem[]>>({
    Biro: [
      { id: '1', peran: 'Kepala Biro Kemahasiswaan', nama: 'Dr. H. Ahmad Fauzi, M.Pd.', keterangan: 'PIMPINAN BIRO' },
      { id: '2', peran: 'Sekretariat Biro', nama: 'Dra. Siti Aminah', keterangan: 'Koordinator Administrasi' },
      { id: '3', peran: 'Bidang Pembinaan & Pengembangan', nama: 'Rian Hidayat, S.Kom.', keterangan: 'Koordinator Bidang' },
      { id: '4', peran: 'Bidang Beasiswa & Kesejahteraan', nama: 'Dewi Lestari, S.E.', keterangan: 'Koordinator Layanan' },
      { id: '5', peran: 'Bidang Ormawa & Alumni', nama: 'Budi Santoso, M.Sos.', keterangan: 'Koordinator Ormawa' },
    ],
    BEM: [
      { id: '1', peran: 'Pembina Organisasi', nama: 'Dr. Nama Pembina, M.Si.' },
      { id: '2', peran: 'Ketua Umum', nama: 'Nama Ketua Umum', keterangan: 'LEADER' },
      { id: '3', peran: 'Wakil Ketua', nama: 'Nama Wakil Ketua' },
      { id: '4', peran: 'Sekretaris', nama: 'Nama Sekretaris' },
      { id: '5', peran: 'Bendahara', nama: 'Nama Bendahara' },
      { id: '6', peran: 'Divisi PSDM', nama: 'Pengembangan sumber daya mahasiswa', keterangan: 'Nama Koordinator' },
      { id: '7', peran: 'Divisi Kominfo', nama: 'Komunikasi, informasi, dan media', keterangan: 'Nama Koordinator' },
      { id: '8', peran: 'Divisi Minat & Bakat', nama: 'Wadah kreativitas dan potensi mahasiswa', keterangan: 'Nama Koordinator' },
      { id: '9', peran: 'Divisi Advokasi', nama: 'Aspirasi dan kesejahteraan mahasiswa', keterangan: 'Nama Koordinator' },
    ],
    MPM: [
      { id: '1', peran: 'Pembina MPM', nama: 'Dr. Pembina MPM, M.H.' },
      { id: '2', peran: 'Ketua MPM', nama: 'Ketua MPM Utama', keterangan: 'LEADER' },
      { id: '3', peran: 'Wakil Ketua MPM', nama: 'Wakil Ketua MPM' },
      { id: '4', peran: 'Sekretaris MPM', nama: 'Sekretaris MPM' },
      { id: '5', peran: 'Bendahara MPM', nama: 'Bendahara MPM' },
      { id: '6', peran: 'Komisi A (Legislasi)', nama: 'Pembentukan Undang-Undang Mahasiswa', keterangan: 'Koordinator Komisi A' },
      { id: '7', peran: 'Komisi B (Pengawasan)', nama: 'Mengawasi kinerja eksekutif mahasiswa', keterangan: 'Koordinator Komisi B' },
    ],
    BPM: [
      { id: '1', peran: 'Pembina BPM', nama: 'Prof. Dr. Pembina BPM' },
      { id: '2', peran: 'Ketua BPM', nama: 'Ketua BPM Utama', keterangan: 'LEADER' },
      { id: '3', peran: 'Wakil Ketua BPM', nama: 'Wakil Ketua BPM' },
      { id: '4', peran: 'Sekretaris BPM', nama: 'Sekretaris BPM' },
      { id: '5', peran: 'Bendahara BPM', nama: 'Bendahara BPM' },
      { id: '6', peran: 'Komisi Aspirasi', nama: 'Menampung aspirasi mahasiswa fakultas', keterangan: 'Koordinator Aspirasi' },
    ]
  });

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/biro/login';
  };

  const handleOpenEdit = (item: BaganItem) => {
    setSelectedBagan(item);
    setFormData({ peran: item.peran, nama: item.nama, keterangan: item.keterangan || '' });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBagan) return;

    const activeKey = kategoriUtama === 'Biro' ? 'Biro' : subOrmawa;
    const updatedList = strukturData[activeKey].map((el) => 
      el.id === selectedBagan.id ? { ...el, peran: formData.peran, nama: formData.nama, keterangan: formData.keterangan } : el
    );

    setStrukturData({ ...strukturData, [activeKey]: updatedList });
    setIsEditModalOpen(false);
    alert('Perubahan struktur berhasil disimpan!');
  };

  const activeKey = kategoriUtama === 'Biro' ? 'Biro' : subOrmawa;
  const currentList = strukturData[activeKey] || [];

  // Helper untuk mendapatkan nama kepanjangan Ormawa
  const getNamaOrmawaPanjang = (sub: 'MPM' | 'BEM' | 'BPM') => {
    switch (sub) {
      case 'MPM': return 'Majelis Permusyawaratan Mahasiswa';
      case 'BEM': return 'Badan Eksekutif Mahasiswa';
      case 'BPM': return 'Badan Perwakilan Mahasiswa';
      default: return sub;
    }
  };

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

              <a href="/biro/manajemen-akun" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>👤</span>
                <span>Manajemen Akun</span>
              </a>
              <a href="/biro/edit-profil" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>✏️</span>
                <span>Ubah Informasi Beasiswa</span>
              </a>
              <a href="/biro/struktur" className="flex items-center gap-3 px-3 py-2.5 bg-blue-600/30 text-blue-300 font-semibold rounded-lg transition">
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
          
          {/* HEADER & FILTER DROPDOWN KEPENGURUSAN + PERIODE */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">PENGELOLAAN / STRUKTUR</p>
              <h1 className="text-xl font-bold text-gray-900 mt-0.5">STRUKTUR KEPENGURUSAN ORGANISASI</h1>
            </div>

            <div className="flex items-center gap-3">
              {/* Filter Dropdown Kepengurusan (Biro Kemahasiswaan & Ormawa) */}
              <div className="flex items-center gap-2 bg-white px-3 py-2 border border-gray-200 rounded-xl shadow-sm">
                <span className="text-[11px] font-bold text-gray-500 uppercase">Kepengurusan:</span>
                <select 
                  value={kategoriUtama} 
                  onChange={(e) => setKategoriUtama(e.target.value as 'Biro' | 'Ormawa')}
                  className="text-xs font-bold text-blue-600 outline-none bg-transparent cursor-pointer"
                >
                  <option value="Biro">Biro Kemahasiswaan</option>
                  <option value="Ormawa">Ormawa</option>
                </select>
              </div>

              {/* Filter Periode Format 2026/2027 */}
              <div className="flex items-center gap-2 bg-white px-3 py-2 border border-gray-200 rounded-xl shadow-sm">
                <span className="text-[11px] font-bold text-gray-500 uppercase">Periode:</span>
                <select 
                  value={periode} 
                  onChange={(e) => setPeriode(e.target.value)}
                  className="text-xs font-bold text-gray-700 outline-none bg-transparent cursor-pointer"
                >
                  <option value="2026/2027">2026/2027</option>
                  <option value="2025/2026">2025/2026</option>
                  <option value="2024/2025">2024/2025</option>
                </select>
              </div>
            </div>
          </div>

          {/* BANNER UTAMA */}
          <div className="bg-[#1B2A57] text-white p-8 rounded-2xl shadow-lg mb-8 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
            <div className="space-y-2 z-10">
              <span className="text-[10px] uppercase tracking-widest text-blue-300 font-semibold">KENALI TIM KAMI</span>
              <h2 className="text-2xl md:text-3xl font-extrabold">
                {kategoriUtama === 'Biro' ? 'Biro Kemahasiswaan' : getNamaOrmawaPanjang(subOrmawa)}
              </h2>
              <p className="text-xs text-blue-100 max-w-lg">Satu visi, banyak kolaborasi, bergerak untuk mahasiswa.</p>
              
              {/* Jika memilih Ormawa, tampilkan sub menu MPM, BEM, BPM */}
              {kategoriUtama === 'Ormawa' && (
                <div className="flex flex-wrap gap-2 pt-4">
                  {(['MPM', 'BEM', 'BPM'] as const).map((tab) => (
                    <button 
                      key={tab}
                      onClick={() => setSubOrmawa(tab)} 
                      className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                        subOrmawa === tab ? 'bg-blue-600 text-white shadow' : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-white/10 px-6 py-4 rounded-xl border border-white/10 text-center shrink-0 z-10">
              <p className="text-2xl font-black">{currentList.length * 3}</p>
              <p className="text-[10px] text-gray-300 uppercase tracking-wider">Pengurus aktif</p>
              <p className="text-[9px] text-blue-200 mt-0.5">T.A. {periode}</p>
            </div>
          </div>

          {/* BAGAN ORGANISASI */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm mb-8 space-y-6">
            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-base font-bold text-gray-900">
                  Bagan Organisasi ({kategoriUtama === 'Biro' ? 'Biro Kemahasiswaan' : getNamaOrmawaPanjang(subOrmawa)})
                </h3>
                <p className="text-xs text-gray-500">Kenali peran dan divisi yang bekerja bersama dalam satu kepengurusan.</p>
              </div>
            </div>

            {/* CONTAINER VISUAL BAGAN */}
            <div className="flex flex-col items-center py-6 bg-slate-50 rounded-xl border border-gray-100 p-6 relative">
              
              {/* Tingkat 1 */}
              {currentList[0] && (
                <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm w-full max-w-sm flex justify-between items-center relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-bold">👤</div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold">{currentList[0].peran}</p>
                      <p className="text-xs font-bold text-gray-900">{currentList[0].nama}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleOpenEdit(currentList[0])}
                    className="p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs transition shadow cursor-pointer"
                    title="Ganti petugas"
                  >
                    ✏️
                  </button>
                </div>
              )}

              {currentList[0] && currentList[1] && <div className="w-0.5 h-6 bg-blue-300"></div>}

              {/* Tingkat 2 */}
              {currentList[1] && (
                <div className="bg-emerald-50/60 border border-emerald-200 p-4 rounded-xl shadow-sm w-full max-w-sm flex justify-between items-center relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold">👤</div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-[10px] text-gray-400 uppercase font-bold">{currentList[1].peran}</p>
                        {currentList[1].keterangan && (
                          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[9px] font-bold rounded">
                            {currentList[1].keterangan}
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-bold text-gray-900">{currentList[1].nama}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleOpenEdit(currentList[1])}
                    className="p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs transition shadow cursor-pointer"
                    title="Ganti petugas"
                  >
                    ✏️
                  </button>
                </div>
              )}

              {currentList[1] && currentList[2] && <div className="w-0.5 h-6 bg-blue-300"></div>}

              {/* Tingkat 3 */}
              {currentList[2] && (
                <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm w-full max-w-sm flex justify-between items-center relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-bold">👤</div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold">{currentList[2].peran}</p>
                      <p className="text-xs font-bold text-gray-900">{currentList[2].nama}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleOpenEdit(currentList[2])}
                    className="p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs transition shadow cursor-pointer"
                    title="Ganti petugas"
                  >
                    ✏️
                  </button>
                </div>
              )}

              {currentList[2] && (currentList[3] || currentList[4]) && <div className="w-0.5 h-6 bg-blue-300"></div>}

              {/* Tingkat 4: Sekretaris & Bendahara */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl relative z-10">
                {currentList[3] && (
                  <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm">📄</div>
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">{currentList[3].peran}</p>
                        <p className="text-xs font-bold text-gray-900">{currentList[3].nama}</p>
                      </div>
                    </div>
                    <button onClick={() => handleOpenEdit(currentList[3])} className="p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs cursor-pointer">✏️</button>
                  </div>
                )}
                {currentList[4] && (
                  <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 font-bold text-sm">💰</div>
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">{currentList[4].peran}</p>
                        <p className="text-xs font-bold text-gray-900">{currentList[4].nama}</p>
                      </div>
                    </div>
                    <button onClick={() => handleOpenEdit(currentList[4])} className="p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs cursor-pointer">✏️</button>
                  </div>
                )}
              </div>

              {currentList.slice(5).length > 0 && <div className="w-0.5 h-6 bg-blue-300"></div>}

              {/* Tingkat 5: Divisi / Komisi */}
              <div className={`grid gap-4 w-full relative z-10 ${
                currentList.slice(5).length === 1 ? 'max-w-md mx-auto grid-cols-1' :
                currentList.slice(5).length === 2 ? 'max-w-xl mx-auto grid-cols-1 md:grid-cols-2' :
                'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
              }`}>
                {currentList.slice(5).map((divisi) => (
                  <div key={divisi.id} className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm flex flex-col justify-between space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs font-bold text-gray-900">{divisi.peran}</p>
                        <p className="text-[10px] text-gray-500 mt-0.5">{divisi.nama}</p>
                      </div>
                      <button 
                        onClick={() => handleOpenEdit(divisi)}
                        className="p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-[10px] cursor-pointer"
                        title="Ganti divisi/koordinator"
                      >
                        ✏️
                      </button>
                    </div>
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-[9px] text-gray-400 uppercase font-semibold">KOORDINATOR</p>
                      <p className="text-xs font-semibold text-blue-600">{divisi.keterangan || 'Nama Koordinator'}</p>
                    </div>
                  </div>
                ))}
              </div>

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

      {/* ================= MODAL EDIT BAGAN ================= */}
      {isEditModalOpen && selectedBagan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 space-y-4 animate-in fade-in zoom-in duration-200 border border-gray-100">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <h3 className="text-sm font-bold text-gray-900">
                Ganti Petugas / Peran ({kategoriUtama === 'Biro' ? 'Biro' : subOrmawa})
              </h3>
              <button onClick={() => setIsEditModalOpen(false)} className="text-gray-400 hover:text-gray-600 font-bold text-sm cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Nama Peran / Jabatan / Divisi</label>
                <input 
                  type="text" 
                  value={formData.peran} 
                  onChange={(e) => setFormData({ ...formData, peran: e.target.value })} 
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                  required 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Nama Petugas / Deskripsi Singkat</label>
                <input 
                  type="text" 
                  value={formData.nama} 
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })} 
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                  required 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Koordinator / Keterangan Tambahan</label>
                <input 
                  type="text" 
                  value={formData.keterangan} 
                  onChange={(e) => setFormData({ ...formData, keterangan: e.target.value })} 
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                />
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

export default StrukturKepengurusanAdmin;