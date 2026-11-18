import React, { useState } from 'react';

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
  const [isBeasiswaOpen, setIsBeasiswaOpen] = useState(false);
  
  // State Pilihan Menu Utama di Halaman (Dropdown Kanan Atas, Pengumpulan Laporan dihapus)
  const [activeSubTab, setActiveSubTab] = useState<'proposal' | 'rekap-beasiswa' | 'rekap-ormawa'>('proposal');

  // Format Tahun Akademik menggunakan Dropdown
  const [tahunAkademik, setTahunAkademik] = useState('2026/2027');
  const [periodeRekap, setPeriodeRekap] = useState('2026/2027');
  
  // State Filter untuk Dokumen
  const [filterJenis, setFilterJenis] = useState('Semua');
  const [filterStatus, setFilterStatus] = useState('Semua');
  const [filterOrmawa, setFilterOrmawa] = useState('Semua');

  // State Modal Filter & Modal Detail Dokumen Proposal
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // State untuk Pop-up Konfirmasi Logout
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  // State Dokumen Proposal yang sedang dipilih
  const [selectedDokumen, setSelectedDokumen] = useState<DokumenItem>({
    id: '1',
    kegiatan: 'Bakti Sosial',
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
      ormawa: 'BEM',
      jenisDokumen: 'Laporan',
      tahunAkademik: '2026/2027',
      status: 'Revisi',
      fileNama: 'Laporan_Pekan_Seni.pdf',
      deskripsiFile: 'Lampiran laporan akhir - contoh'
    }
  ];

  const handleAksiStatus = (statusBaru: 'Diterima' | 'Ditolak' | 'Revisi') => {
    alert(`Dokumen "${selectedDokumen.kegiatan}" berhasil diberi status: ${statusBaru}. Catatan: ${catatanPemeriksa || '-'}`);
    setIsDetailModalOpen(false);
  };

  const handleDetailClick = (item: DokumenItem) => {
    setSelectedDokumen(item);
    setCatatanPemeriksa('');
    setIsDetailModalOpen(true);
  };

  const handleExport = (jenis: string) => {
    alert(`Memproses Export Laporan Rekapitulasi ${jenis}...`);
  };

  // Fungsi helper untuk menentukan Header dinamis sesuai menu yang dipilih
  const getHeaderInfo = () => {
    switch (activeSubTab) {
      case 'rekap-beasiswa':
        return {
          subtitle: 'KEPALA BIRO / REKAPITULASI',
          title: 'Rekapitulasi Beasiswa',
          desc: 'Pantau perkembangan data beasiswa dan pendaftar dalam satu periode akademik.'
        };
      case 'rekap-ormawa':
        return {
          subtitle: 'KEPALA BIRO / REKAPITULASI',
          title: 'Rekapitulasi Kegiatan Ormawa',
          desc: 'Pantau kegiatan per tahun akademik dan kelengkapan laporan.'
        };
      default:
        return {
          subtitle: 'PENGELOLAAN / LAPORAN',
          title: 'Proposal & Laporan Kegiatan',
          desc: 'Periksa dokumen yang dikirim ormawa dan pantau status pengumpulan.'
        };
    }
  };

  const currentHeader = getHeaderInfo();

  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col font-sans text-gray-800 relative">
      <div className="flex flex-1">
        
        {/* SIDEBAR KIRI (Proposal & Laporan Tanpa Dropdown) */}
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

              {/* Data Beasiswa (Tetap dengan Dropdown) */}
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


              {/* Proposal & Laporan (Tanpa Dropdown / Menu Biasa) */}
              <a href="/biro/proposal" className="flex items-center gap-3 px-3 py-2.5 bg-blue-600/30 text-blue-300 font-semibold rounded-lg transition">
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
              className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold transition cursor-pointer"
            >
              <span>🚪</span>
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* AREA KONTEN UTAMA */}
        <main className="flex-1 p-8 overflow-y-auto">
          
          {/* HEADER DINAMIS & DROPDOWN PEMILIHAN MENU UTAMA (Hanya Berisi 3 Pilihan) */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">{currentHeader.subtitle}</p>
              <h1 className="text-2xl font-bold text-gray-900 mt-0.5">{currentHeader.title}</h1>
              <p className="text-xs text-gray-500 mt-0.5">{currentHeader.desc}</p>
            </div>

            {/* Dropdown Kanan Atas (Pengumpulan Laporan Sudah Dihapus, Tersisa 3) */}
            <div className="flex items-center gap-2 bg-white px-4 py-2 border border-gray-200 rounded-xl shadow-sm">
              <span className="text-xs font-bold text-gray-500 uppercase">MENU:</span>
              <select
                value={activeSubTab}
                onChange={(e) => setActiveSubTab(e.target.value as any)}
                className="text-xs font-bold text-blue-600 outline-none bg-transparent cursor-pointer"
              >
                <option value="proposal">📄 Verifikasi Proposal & Laporan</option>
                <option value="rekap-beasiswa">📈 Rekapitulasi Beasiswa</option>
                <option value="rekap-ormawa">📊 Rekapitulasi Ormawa</option>
              </select>
            </div>
          </div>

          {/* ================= KONTEN 1: VERIFIKASI PROPOSAL & LAPORAN ================= */}
          {activeSubTab === 'proposal' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5">
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Tahun akademik</label>
                    <select 
                      value={tahunAkademik} 
                      onChange={(e) => setTahunAkademik(e.target.value)} 
                      className="w-full px-4 py-2 border border-gray-200/80 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white/90 font-medium cursor-pointer"
                    >
                      <option value="2026/2027">2026/2027</option>
                      <option value="2025/2026">2025/2026</option>
                      <option value="2024/2025">2024/2025</option>
                    </select>
                  </div>

                  <div className="md:col-span-7">
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Filter</label>
                    <button 
                      onClick={() => setIsFilterOpen(true)}
                      className="w-full px-4 py-2 border border-gray-200/80 rounded-xl text-xs flex justify-between items-center cursor-pointer bg-white/90 text-gray-600 hover:border-blue-400 transition"
                    >
                      <span>Filter Berdasarkan Kategori...</span>
                      <span>⚙️</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm mb-8">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Daftar dokumen</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-gray-50/80 text-gray-500 font-semibold uppercase text-[10px]">
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
                        <tr key={item.id} className="hover:bg-white/60 transition">
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
                              onClick={() => handleDetailClick(item)}
                              className="text-blue-600 hover:underline font-semibold text-xs cursor-pointer"
                            >
                              Detail
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ================= KONTEN 2: REKAPITULASI BEASISWA ================= */}
          {activeSubTab === 'rekap-beasiswa' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="flex flex-col">
                    <label className="text-[10px] font-bold text-gray-700 mb-1">Periode Rekapitulasi</label>
                    <div className="flex gap-2">
                      <select 
                        value={periodeRekap} 
                        onChange={(e) => setPeriodeRekap(e.target.value)} 
                        className="bg-white/90 border border-gray-200/80 rounded-xl px-4 py-2 text-xs font-medium text-gray-600 outline-none shadow-sm min-w-[200px] cursor-pointer"
                      >
                        <option value="2026/2027">2026/2027</option>
                        <option value="2025/2026">2025/2026</option>
                        <option value="2024/2025">2024/2025</option>
                        <option value="Semua periode">Semua periode</option>
                      </select>
                      <button className="px-5 py-2 bg-[#1B437C] hover:bg-[#143463] text-white text-xs font-semibold rounded-xl shadow-sm cursor-pointer">Terapkan</button>
                    </div>
                  </div>
                </div>
                <button onClick={() => handleExport('Beasiswa')} className="px-6 py-2.5 bg-[#22C55E] hover:bg-[#16A34A] text-white text-xs font-bold rounded-xl shadow-sm cursor-pointer">Export File</button>
              </div>

              {/* Kartu Metrik Beasiswa */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-sm border-l-4 border-l-blue-600">
                  <p className="text-[11px] text-gray-500 font-medium">Total penerima beasiswa</p>
                  <p className="text-3xl font-extrabold text-gray-900 mt-1">358</p>
                  <p className="text-[10px] text-gray-400 mt-1">Orang</p>
                </div>
                <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-sm border-l-4 border-l-emerald-600">
                  <p className="text-[11px] text-gray-500 font-medium">Total pendaftar</p>
                  <p className="text-3xl font-extrabold text-gray-900 mt-1">876</p>
                  <p className="text-[10px] text-gray-400 mt-1">Orang</p>
                </div>
                <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-sm border-l-4 border-l-amber-500">
                  <p className="text-[11px] text-gray-500 font-medium">Total penerima beasiswa aktif</p>
                  <p className="text-3xl font-extrabold text-gray-900 mt-1">256</p>
                </div>
              </div>

              {/* Grafik Progress Bar Kategori Beasiswa */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm">
                  <h3 className="text-sm font-bold text-gray-900 mb-1">Total Penerimaan Beasiswa per Kategori</h3>
                  <p className="text-[11px] text-gray-400 mb-6">Jumlah penerima berdasarkan kategori beasiswa</p>
                  <div className="space-y-5 text-xs">
                    <div>
                      <div className="flex justify-between font-semibold mb-1.5"><span className="text-gray-800">Beasiswa VDMI</span><span className="text-gray-500 font-bold">45/60</span></div>
                      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-[#1B437C] rounded-full" style={{ width: '75%' }}></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between font-semibold mb-1.5"><span className="text-gray-800">Beasiswa KIP Kuliah</span><span className="text-gray-500 font-bold">32/50</span></div>
                      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-[#1B437C] rounded-full" style={{ width: '64%' }}></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between font-semibold mb-1.5"><span className="text-gray-800">Beasiswa BI</span><span className="text-gray-500 font-bold">28/40</span></div>
                      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-[#1B437C] rounded-full" style={{ width: '70%' }}></div></div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm space-y-3">
                  <h3 className="text-sm font-bold text-gray-900 mb-4">Status Pendaftar</h3>
                  <div className="p-4 bg-[#1B65A4] text-white rounded-xl flex justify-between items-center shadow-sm"><span className="text-xs font-semibold">Total penerima beasiswa</span><span className="text-xl font-extrabold">358</span></div>
                  <div className="p-4 bg-[#168553] text-white rounded-xl flex justify-between items-center shadow-sm"><span className="text-xs font-semibold">Total pendaftar</span><span className="text-xl font-extrabold">876</span></div>
                  <div className="p-4 bg-[#E2D4A8] text-amber-900 rounded-xl flex justify-between items-center shadow-sm"><span className="text-xs font-semibold">Total penerima beasiswa aktif</span><span className="text-xl font-extrabold">256</span></div>
                </div>
              </div>

              {/* Tabel Beasiswa Dibuka */}
              <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm mb-8">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Beasiswa yang sedang dibuka</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-gray-50/80 text-gray-500 font-semibold uppercase text-[10px]">
                      <tr><th className="p-3">NAMA BEASISWA</th><th className="p-3">PERIODE PENDAFTARAN</th><th className="p-3 text-center">STATUS</th></tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-white/60 transition"><td className="p-3 font-semibold text-gray-800">Beasiswa VDMI</td><td className="p-3 text-gray-600">01 Mar 2026 – 30 Apr 2026</td><td className="p-3 text-center"><span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-semibold">Masih dibuka</span></td></tr>
                      <tr className="hover:bg-white/60 transition"><td className="p-3 font-semibold text-gray-800">Beasiswa KIP Kuliah</td><td className="p-3 text-gray-600">10 Feb 2026 – 15 Apr 2026</td><td className="p-3 text-center"><span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-semibold">Masih dibuka</span></td></tr>
                      <tr className="hover:bg-white/60 transition"><td className="p-3 font-semibold text-gray-800">Beasiswa BI</td><td className="p-3 text-gray-600">05 Jan 2026 – 28 Feb 2026</td><td className="p-3 text-center"><span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-semibold">Ditutup</span></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ================= KONTEN 3: REKAPITULASI ORMAWA ================= */}
          {activeSubTab === 'rekap-ormawa' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="flex flex-col">
                    <label className="text-[10px] font-bold text-gray-700 mb-1">Periode Rekapitulasi</label>
                    <div className="flex gap-2">
                      <select 
                        value={periodeRekap} 
                        onChange={(e) => setPeriodeRekap(e.target.value)} 
                        className="bg-white/90 border border-gray-200/80 rounded-xl px-4 py-2 text-xs font-medium text-gray-600 outline-none shadow-sm min-w-[200px] cursor-pointer"
                      >
                        <option value="2026/2027">2026/2027</option>
                        <option value="2025/2026">2025/2026</option>
                        <option value="2024/2025">2024/2025</option>
                        <option value="Semua periode">Semua periode</option>
                      </select>
                      <button className="px-5 py-2 bg-[#1B437C] hover:bg-[#133360] text-white text-xs font-semibold rounded-xl shadow-sm transition cursor-pointer">Terapkan</button>
                    </div>
                  </div>
                </div>
                <button onClick={() => handleExport('Ormawa')} className="px-6 py-2.5 bg-[#22C55E] hover:bg-[#16A34A] text-white text-xs font-bold rounded-xl shadow-sm cursor-pointer">Export File</button>
              </div>

              {/* Kartu Metrik Ormawa */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-sm border-l-4 border-l-blue-600">
                  <p className="text-[11px] text-gray-500 font-medium">Total kegiatan</p>
                  <p className="text-3xl font-extrabold text-gray-900 mt-1">36</p>
                  <p className="text-[10px] text-gray-400 mt-1">Contoh data</p>
                </div>
                <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-sm border-l-4 border-l-emerald-600">
                  <p className="text-[11px] text-gray-500 font-medium">Laporan terkumpul</p>
                  <p className="text-3xl font-extrabold text-gray-900 mt-1">24</p>
                  <p className="text-[10px] text-gray-400 mt-1">Contoh data</p>
                </div>
                <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-sm border-l-4 border-l-amber-500">
                  <p className="text-[11px] text-gray-500 font-medium">Belum dikumpulkan</p>
                  <p className="text-3xl font-extrabold text-gray-900 mt-1">6</p>
                  <p className="text-[10px] text-amber-600 font-semibold mt-1">Perlu tindak lanjut</p>
                </div>
                <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-sm border-l-4 border-l-blue-400">
                  <p className="text-[11px] text-gray-500 font-medium">Menunggu verifikasi</p>
                  <p className="text-3xl font-extrabold text-gray-900 mt-1">6</p>
                  <p className="text-[10px] text-gray-400 mt-1">Contoh data</p>
                </div>
              </div>

              {/* Grafik Progress Bar Kelengkapan Laporan Ormawa */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm">
                  <h3 className="text-sm font-bold text-gray-900 mb-1">Kelengkapan laporan per ormawa</h3>
                  <p className="text-[11px] text-gray-400 mb-6">Jumlah laporan terkumpul dibanding total kegiatan</p>
                  <div className="space-y-5 text-xs">
                    <div>
                      <div className="flex justify-between font-semibold mb-1.5"><span className="text-gray-800">BEM</span><span className="text-gray-500 font-bold">5/5</span></div>
                      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-[#1B437C] rounded-full" style={{ width: '100%' }}></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between font-semibold mb-1.5"><span className="text-gray-800">Himpunan Mahasiswa</span><span className="text-gray-500 font-bold">4/6</span></div>
                      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-[#1B437C] rounded-full" style={{ width: '66%' }}></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between font-semibold mb-1.5"><span className="text-gray-800">UKM Seni</span><span className="text-gray-500 font-bold">7/9</span></div>
                      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-[#1B437C] rounded-full" style={{ width: '77%' }}></div></div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm space-y-3">
                  <h3 className="text-sm font-bold text-gray-900 mb-4">Status laporan</h3>
                  <div className="p-4 bg-[#EAF7ED] text-emerald-900 rounded-xl flex justify-between items-center shadow-sm"><span className="text-xs font-semibold">Terkumpul</span><span className="text-2xl font-extrabold text-emerald-800">24</span></div>
                  <div className="p-4 bg-[#FCE8E8] text-red-900 rounded-xl flex justify-between items-center shadow-sm"><span className="text-xs font-semibold">Belum dikumpulkan</span><span className="text-2xl font-extrabold text-red-800">6</span></div>
                  <div className="p-4 bg-[#FEF6E6] text-amber-900 rounded-xl flex justify-between items-center shadow-sm"><span className="text-xs font-semibold">Menunggu verifikasi</span><span className="text-2xl font-extrabold text-amber-800">6</span></div>
                </div>
              </div>

              {/* Tabel Ormawa Belum Mengumpulkan */}
              <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm mb-8">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Ormawa yang belum mengumpulkan laporan</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-gray-50/80 text-gray-500 font-semibold uppercase text-[10px]">
                      <tr><th className="p-3">KEGIATAN</th><th className="p-3">TANGGAL KEGIATAN</th><th className="p-3 text-center">STATUS</th></tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-white/60 transition"><td className="p-3 font-semibold text-gray-800">Seminar Karier</td><td className="p-3 text-gray-600">08 - 10 - 2026</td><td className="p-3 text-center"><span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-[10px] font-semibold">Belum dikumpulkan</span></td></tr>
                      <tr className="hover:bg-white/60 transition"><td className="p-3 font-semibold text-gray-800">Turnamen Internal</td><td className="p-3 text-gray-600">05 - 09 - 2026</td><td className="p-3 text-center"><span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-[10px] font-semibold">Belum dikumpulkan</span></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* FOOTER BAWAH */}
          <footer className="pt-6 border-t border-gray-200 text-[11px] text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4 mt-auto">
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

      {/* ================= MODAL DETAIL PROPOSAL / LAPORAN ================= */}
      {isDetailModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl p-6 space-y-6 animate-in fade-in zoom-in duration-200 relative border border-gray-100 my-8">
            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-base font-bold text-gray-900">Detail: {selectedDokumen.kegiatan}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{selectedDokumen.ormawa} · Tahun akademik {selectedDokumen.tahunAkademik}</p>
              </div>
              <button onClick={() => setIsDetailModalOpen(false)} className="text-gray-400 hover:text-gray-600 font-bold text-sm cursor-pointer w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition">✕</button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="p-4 border border-gray-200/80 bg-white/90 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg font-bold flex items-center justify-center text-xs">PDF</div>
                    <div>
                      <p className="font-bold text-xs text-gray-900">{selectedDokumen.fileNama}</p>
                      <p className="text-[10px] text-gray-500">{selectedDokumen.deskripsiFile}</p>
                    </div>
                  </div>
                  <button onClick={() => alert(`Membuka file: ${selectedDokumen.fileNama}`)} className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg shadow-sm cursor-pointer">Lihat file</button>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Catatan pemeriksa</label>
                  <textarea 
                    rows={3}
                    value={catatanPemeriksa}
                    onChange={(e) => setCatatanPemeriksa(e.target.value)}
                    placeholder="Isi alasan penolakan atau catatan revisi jika diperlukan."
                    className="w-full p-3 border border-gray-200/80 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white/90"
                  ></textarea>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button onClick={() => handleAksiStatus('Diterima')} className="px-6 py-2.5 bg-white border border-gray-300 hover:bg-emerald-50 text-gray-700 rounded-xl text-xs font-semibold shadow-sm cursor-pointer">Terima</button>
                  <button onClick={() => handleAksiStatus('Ditolak')} className="px-6 py-2.5 bg-white border border-gray-300 hover:bg-red-50 text-gray-700 rounded-xl text-xs font-semibold shadow-sm cursor-pointer">Tolak</button>
                  <button onClick={() => handleAksiStatus('Revisi')} className="px-6 py-2.5 bg-white border border-gray-300 hover:bg-amber-50 text-gray-700 rounded-xl text-xs font-semibold cursor-pointer">Minta Revisi</button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-gray-50 p-5 rounded-xl border border-gray-100 space-y-3">
                <p className="text-xs font-bold text-gray-800 uppercase tracking-wide">RIWAYAT STATUS</p>
                <div className="flex items-center gap-3 text-xs"><span className="px-3 py-1 bg-emerald-100 text-emerald-700 font-semibold rounded-full text-[10px] w-20 text-center">Dikirim</span><span className="text-gray-600">Dokumen masuk ke sistem</span></div>
                <div className="flex items-center gap-3 text-xs"><span className="px-3 py-1 bg-amber-100 text-amber-700 font-semibold rounded-full text-[10px] w-20 text-center">Menunggu</span><span className="text-gray-600">Menunggu pemeriksaan</span></div>
                <div className="flex items-center gap-3 text-xs"><span className="px-3 py-1 bg-orange-100 text-orange-700 font-semibold rounded-full text-[10px] w-20 text-center">Revisi</span><span className="text-gray-600">Diperlukan revisi</span></div>
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-[11px] text-red-600 font-semibold">Jika ditolak, alasan wajib dicatat.</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Dokumen yang diterima dapat diminta revisi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL FILTER (STATUS 3 KOLOM RAPI) ================= */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-5 space-y-4 animate-in fade-in zoom-in duration-200 relative border border-gray-100">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2.5">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Filter Data Dokumen</h3>
              <button onClick={() => setIsFilterOpen(false)} className="text-gray-400 hover:text-gray-600 font-bold text-sm cursor-pointer w-6 h-6 flex items-center justify-center rounded-lg hover:bg-gray-100 transition">✕</button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Jenis Dokumen / Kategori</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {['Semua', 'Proposal', 'Laporan'].map((j) => (
                    <button
                      key={j}
                      onClick={() => setFilterJenis(j)}
                      className={`py-1 rounded-xl text-[11px] font-semibold cursor-pointer transition text-center ${filterJenis === j ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                      {j}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Status</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {['Semua', 'Menunggu', 'Revisi', 'Diterima', 'Ditolak', 'Disetujui'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setFilterStatus(s)}
                      className={`py-1 rounded-xl text-[11px] font-semibold cursor-pointer transition text-center ${filterStatus === s ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Ormawa</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {['Semua', 'BEM', 'BPM', 'MPM'].map((o) => (
                    <button
                      key={o}
                      onClick={() => setFilterOrmawa(o)}
                      className={`py-1 rounded-xl text-[11px] font-semibold cursor-pointer transition text-center ${filterOrmawa === o ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-gray-100">
              <button 
                onClick={() => { setFilterJenis('Semua'); setFilterStatus('Semua'); setFilterOrmawa('Semua'); }} 
                className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white text-[11px] font-semibold rounded-xl transition cursor-pointer shadow-sm"
              >
                RESET
              </button>
              <div className="flex gap-2">
                <button 
                  onClick={() => setIsFilterOpen(false)} 
                  className="px-4 py-1.5 border border-gray-300 text-gray-700 text-[11px] font-semibold rounded-xl hover:bg-gray-50 cursor-pointer"
                >
                  Batal
                </button>
                <button 
                  onClick={() => setIsFilterOpen(false)} 
                  className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-semibold rounded-xl cursor-pointer shadow-sm"
                >
                  TERAPKAN
                </button>
              </div>
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

export default ProposalLaporan;