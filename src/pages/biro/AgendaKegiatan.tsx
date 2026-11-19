import React, { useState } from 'react';
import { listPengumuman, type ItemPengumuman } from './Pengumuman';

type StatusKegiatan = 'Akan Datang' | 'Sedang Berlangsung' | 'Selesai';
type StatusLaporan = 'Belum Dikirim' | 'Menunggu' | 'Revisi' | 'Disetujui' | 'Ditolak';

interface AgendaItem {
  id: number;
  pengumumanId: number;
  namaKegiatan: string;
  penyelenggara: string;
  kategori: 'Beasiswa' | 'Ormawa';
  tanggal: string;
  waktu: string;
  lokasi: string;
  deskripsi: string;
  statusKegiatan: StatusKegiatan;
  statusLaporan: StatusLaporan;
  fileNama: string;
  deskripsiFile: string;
}

const metaAgendaByPengumumanId: Record<
  number,
  {
    penyelenggara: string;
    statusKegiatan: StatusKegiatan;
    statusLaporan: StatusLaporan;
    fileNama: string;
  }
> = {
  1: {
    penyelenggara: 'Biro Kemahasiswaan',
    statusKegiatan: 'Selesai',
    statusLaporan: 'Disetujui',
    fileNama: 'Laporan_Pendaftaran_KIP_Kuliah_2026.pdf'
  },
  2: {
    penyelenggara: 'BEM',
    statusKegiatan: 'Selesai',
    statusLaporan: 'Menunggu',
    fileNama: 'Laporan_Oprec_Anggota_BEM_2026.pdf'
  },
  3: {
    penyelenggara: 'Biro Kemahasiswaan',
    statusKegiatan: 'Sedang Berlangsung',
    statusLaporan: 'Belum Dikirim',
    fileNama: 'Laporan_Wawancara_Kebanksentralan.pdf'
  },
  4: {
    penyelenggara: 'BEM',
    statusKegiatan: 'Selesai',
    statusLaporan: 'Disetujui',
    fileNama: 'Laporan_Pekan_Seni_Budaya_BEM.pdf'
  },
  5: {
    penyelenggara: 'Biro Kemahasiswaan',
    statusKegiatan: 'Akan Datang',
    statusLaporan: 'Belum Dikirim',
    fileNama: 'Laporan_Sosialisasi_VDMI_2026.pdf'
  },
  6: {
    penyelenggara: 'BPM',
    statusKegiatan: 'Akan Datang',
    statusLaporan: 'Belum Dikirim',
    fileNama: 'Laporan_Rapat_Evaluasi_BPM.pdf'
  },
  7: {
    penyelenggara: 'MPM',
    statusKegiatan: 'Selesai',
    statusLaporan: 'Revisi',
    fileNama: 'Laporan_Sidang_Pleno_MPM.pdf'
  },
  8: {
    penyelenggara: 'BEM',
    statusKegiatan: 'Selesai',
    statusLaporan: 'Ditolak',
    fileNama: 'Laporan_Bakti_Sosial_BEM.pdf'
  }
};

export const AgendaKegiatan: React.FC = () => {
  const [isBeasiswaOpen, setIsBeasiswaOpen] = useState(false);
  const [filterKategori, setFilterKategori] = useState('Semua');
  const [filterLaporan, setFilterLaporan] = useState('Semua');
  const [search, setSearch] = useState('');

  // State Modal Detail Laporan
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedAgenda, setSelectedAgenda] = useState<AgendaItem | null>(null);
  const [catatanPemeriksa, setCatatanPemeriksa] = useState('');

  // State untuk Pop-up Konfirmasi Logout
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/biro/login';
  };

  // Data Agenda disinkronkan langsung dari daftar Pengumuman
  const [daftarAgenda] = useState<AgendaItem[]>(() =>
    listPengumuman.map((p: ItemPengumuman) => {
      const meta = metaAgendaByPengumumanId[p.id] ?? {
        penyelenggara: p.kategori === 'Beasiswa' ? 'Biro Kemahasiswaan' : p.organisasi,
        statusKegiatan: 'Akan Datang' as StatusKegiatan,
        statusLaporan: 'Belum Dikirim' as StatusLaporan,
        fileNama: `Laporan_Kegiatan_${p.id}.pdf`
      };

      return {
        id: p.id,
        pengumumanId: p.id,
        namaKegiatan: p.judul,
        penyelenggara: meta.penyelenggara,
        kategori: p.kategori,
        tanggal: p.tanggalAcara || p.tanggal,
        waktu: p.waktuPelaksanaan || 'Menyesuaikan',
        lokasi: p.lokasi || 'Kampus Utama',
        deskripsi: p.isi,
        statusKegiatan: meta.statusKegiatan,
        statusLaporan: meta.statusLaporan,
        fileNama: meta.fileNama,
        deskripsiFile: 'Lampiran laporan kegiatan - contoh'
      };
    })
  );

  const handleDetailClick = (item: AgendaItem) => {
    setSelectedAgenda(item);
    setCatatanPemeriksa('');
    setIsDetailModalOpen(true);
  };

  const getBadgeStatusKegiatan = (status: StatusKegiatan) => {
    switch (status) {
      case 'Sedang Berlangsung':
        return 'bg-emerald-100 text-emerald-700';
      case 'Akan Datang':
        return 'bg-amber-100 text-amber-700';
      case 'Selesai':
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  const getBadgeStatusLaporan = (status: StatusLaporan) => {
    switch (status) {
      case 'Disetujui':
        return 'bg-emerald-100 text-emerald-700';
      case 'Menunggu':
        return 'bg-amber-100 text-amber-700';
      case 'Revisi':
        return 'bg-orange-100 text-orange-700';
      case 'Ditolak':
        return 'bg-red-100 text-red-700';
      case 'Belum Dikirim':
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getPemberitahuanLaporan = (status: StatusLaporan) => {
    switch (status) {
      case 'Disetujui':
        return {
          boxClass: 'bg-emerald-50/90 border-emerald-200 text-emerald-800',
          badgeClass: 'bg-emerald-100 text-emerald-700',
          title: 'Laporan Disetujui',
          message: 'Laporan kegiatan ini telah disetujui dan tercatat pada sistem.'
        };
      case 'Ditolak':
        return {
          boxClass: 'bg-red-50/90 border-red-200 text-red-800',
          badgeClass: 'bg-red-100 text-red-700',
          title: 'Laporan Ditolak',
          message: 'Laporan kegiatan ini berstatus ditolak. Silakan periksa catatan pemeriksa.'
        };
      case 'Revisi':
        return {
          boxClass: 'bg-orange-50/90 border-orange-200 text-orange-800',
          badgeClass: 'bg-orange-100 text-orange-700',
          title: 'Perlu Revisi',
          message: 'Laporan kegiatan ini memerlukan revisi sesuai catatan pemeriksa.'
        };
      case 'Menunggu':
        return {
          boxClass: 'bg-amber-50/90 border-amber-200 text-amber-800',
          badgeClass: 'bg-amber-100 text-amber-700',
          title: 'Menunggu Pemeriksaan',
          message: 'Laporan kegiatan telah dikirim dan sedang menunggu pemeriksaan.'
        };
      case 'Belum Dikirim':
      default:
        return {
          boxClass: 'bg-gray-50 border-gray-200 text-gray-700',
          badgeClass: 'bg-gray-200 text-gray-700',
          title: 'Belum Dikirim',
          message: 'Laporan kegiatan belum dikirim ke sistem.'
        };
    }
  };

  const filteredAgenda = daftarAgenda.filter((item: AgendaItem) => {
    const matchKategori = filterKategori === 'Semua' || item.kategori === filterKategori;
    const matchLaporan = filterLaporan === 'Semua' || item.statusLaporan === filterLaporan;
    const matchSearch =
      item.namaKegiatan.toLowerCase().includes(search.toLowerCase()) ||
      item.penyelenggara.toLowerCase().includes(search.toLowerCase()) ||
      item.lokasi.toLowerCase().includes(search.toLowerCase());
    return matchKategori && matchLaporan && matchSearch;
  });

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
              <a href="/biro/agenda-kegiatan" className="flex items-center gap-3 px-3 py-2.5 bg-blue-600/30 text-blue-300 font-semibold rounded-lg">
                <span>📅</span>
                <span>Agenda &amp; Kegiatan</span>
              </a>
              <a href="/biro/proposal" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📄</span>
                <span>Proposal &amp; Laporan</span>
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
        <main className="flex-1 p-8 overflow-y-auto flex flex-col">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">JADWAL &amp; ACARA</p>
              <h1 className="text-2xl font-bold text-gray-900 mt-0.5">Agenda &amp; Kegiatan Kampus</h1>
              <p className="text-xs text-gray-500 mt-0.5">Pantau jadwal pelaksanaan kegiatan, status acara, dan status laporan kegiatan.</p>
            </div>
          </div>

          {/* FILTER & PENCARIAN AGENDA */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm mb-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-6">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Cari kegiatan</label>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Ketik nama kegiatan atau lokasi..."
                  className="w-full px-4 py-2 border border-gray-200/80 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white/90"
                />
              </div>

              <div className="md:col-span-3">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Filter Kategori</label>
                <select
                  value={filterKategori}
                  onChange={(e) => setFilterKategori(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200/80 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white/90 cursor-pointer"
                >
                  <option value="Semua">Semua Kategori</option>
                  <option value="Beasiswa">Beasiswa</option>
                  <option value="Ormawa">Ormawa</option>
                </select>
              </div>

              <div className="md:col-span-3">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Status Laporan Kegiatan</label>
                <select
                  value={filterLaporan}
                  onChange={(e) => setFilterLaporan(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200/80 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white/90 cursor-pointer"
                >
                  <option value="Semua">Semua Status Laporan</option>
                  <option value="Belum Dikirim">Belum Dikirim</option>
                  <option value="Menunggu">Menunggu</option>
                  <option value="Revisi">Revisi</option>
                  <option value="Disetujui">Disetujui</option>
                  <option value="Ditolak">Ditolak</option>
                </select>
              </div>
            </div>
          </div>

          {/* TABEL AGENDA & LAPORAN KEGIATAN */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-gray-900">
                Daftar Agenda &amp; Status Laporan ({filteredAgenda.length})
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50/80 text-gray-500 font-semibold uppercase text-[10px]">
                  <tr>
                    <th className="p-3">KEGIATAN</th>
                    <th className="p-3">TANGGAL PELAKSANAAN</th>
                    <th className="p-3">LOKASI</th>
                    <th className="p-3">STATUS KEGIATAN</th>
                    <th className="p-3">LAPORAN KEGIATAN</th>
                    <th className="p-3 text-right">AKSI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredAgenda.length > 0 ? (
                    filteredAgenda.map((agenda: AgendaItem) => (
                      <tr key={agenda.id} className="hover:bg-white/60 transition align-top">
                        <td className="p-3">
                          <p className="font-bold text-gray-900">{agenda.namaKegiatan}</p>
                          <p className="text-[11px] text-gray-500 mt-0.5">
                            {agenda.penyelenggara} · <span className="text-gray-500 font-medium">{agenda.kategori}</span>
                          </p>
                        </td>
                        <td className="p-3 text-gray-700 whitespace-nowrap">
                          <p className="font-semibold">{agenda.tanggal}</p>
                          <p className="text-[11px] text-gray-400">{agenda.waktu}</p>
                        </td>
                        <td className="p-3 text-gray-600">
                          {agenda.lokasi}
                        </td>
                        <td className="p-3 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-semibold inline-block ${getBadgeStatusKegiatan(agenda.statusKegiatan)}`}>
                            {agenda.statusKegiatan}
                          </span>
                        </td>
                        <td className="p-3 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-semibold inline-block ${getBadgeStatusLaporan(agenda.statusLaporan)}`}>
                            {agenda.statusLaporan}
                          </span>
                        </td>
                        <td className="p-3 text-right whitespace-nowrap">
                          <button
                            onClick={() => handleDetailClick(agenda)}
                            className="text-blue-600 hover:underline font-semibold text-xs cursor-pointer"
                          >
                            Detail
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="p-6 text-center text-xs text-gray-400">
                        Tidak ada data agenda yang sesuai dengan filter.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

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

      {/* ================= MODAL DETAIL AGENDA & LAPORAN ================= */}
      {isDetailModalOpen && selectedAgenda && (() => {
        const infoLaporan = getPemberitahuanLaporan(selectedAgenda.statusLaporan);
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 overflow-y-auto">
            <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 relative border border-gray-100 my-8">
              
              {/* Header Modal Soft */}
              <div className="flex justify-between items-start px-6 py-4 border-b border-gray-100 bg-gray-50/60">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                      selectedAgenda.kategori === 'Beasiswa'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {selectedAgenda.kategori}
                    </span>
                    <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${getBadgeStatusLaporan(selectedAgenda.statusLaporan)}`}>
                      Laporan: {selectedAgenda.statusLaporan}
                    </span>
                    <span className="text-[11px] text-gray-400">· {selectedAgenda.penyelenggara}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{selectedAgenda.namaKegiatan}</h3>
                </div>
                <button
                  onClick={() => setIsDetailModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 font-bold text-sm cursor-pointer w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-200/60 transition shrink-0"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-4">
                {/* Grid Info Jadwal & Lokasi */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 bg-blue-50/50 border border-blue-100/80 p-3.5 rounded-xl text-xs">
                  <div>
                    <span className="block text-[10px] font-bold text-gray-400 uppercase">📅 Tanggal</span>
                    <span className="font-semibold text-gray-900">{selectedAgenda.tanggal}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-gray-400 uppercase">⏰ Waktu</span>
                    <span className="font-semibold text-gray-900">{selectedAgenda.waktu}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-gray-400 uppercase">📍 Lokasi</span>
                    <span className="font-semibold text-gray-900">{selectedAgenda.lokasi}</span>
                  </div>
                </div>

                {/* Keterangan Kegiatan */}
                <div className="p-3.5 bg-gray-50/80 border border-gray-100 rounded-xl text-xs text-gray-600 leading-relaxed">
                  <span className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Keterangan Kegiatan</span>
                  {selectedAgenda.deskripsi}
                </div>

                {/* Lampiran File Laporan */}
                <div className="p-4 border border-gray-200/90 bg-white rounded-xl flex items-center justify-between gap-3 shadow-2xs">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 bg-red-50 border border-red-100 text-red-600 rounded-xl font-bold flex items-center justify-center text-xs shrink-0">
                      PDF
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-xs text-gray-900 truncate">{selectedAgenda.fileNama}</p>
                      <p className="text-[10px] text-gray-500 truncate">{selectedAgenda.deskripsiFile}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => alert(`Membuka file: ${selectedAgenda.fileNama}`)}
                    className="px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-xl shadow-2xs transition cursor-pointer shrink-0"
                  >
                    Lihat file
                  </button>
                </div>

                {/* Catatan Pemeriksa */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Catatan pemeriksa</label>
                  <textarea 
                    rows={3}
                    value={catatanPemeriksa}
                    onChange={(e) => setCatatanPemeriksa(e.target.value)}
                    placeholder="Isi alasan penolakan atau catatan revisi jika diperlukan."
                    className="w-full p-3 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white resize-none"
                  ></textarea>
                </div>

                {/* Pemberitahuan Status Laporan */}
                <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${infoLaporan.boxClass}`}>
                  <div className="text-xs">
                    <p className="font-bold">{infoLaporan.title}</p>
                    <p className="text-[11px] opacity-90 mt-0.5">{infoLaporan.message}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold shrink-0 ${infoLaporan.badgeClass}`}>
                    {selectedAgenda.statusLaporan}
                  </span>
                </div>
              </div>

            </div>
          </div>
        );
      })()}

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

export default AgendaKegiatan;