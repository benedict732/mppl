import React, { useState } from 'react';

interface AgendaItem {
  id: number;
  namaKegiatan: string;
  penyelenggara: string;
  kategori: 'Biro Kemahasiswaan' | 'Beasiswa' | 'Ormawa';
  tanggal: string;
  waktu: string;
  lokasi: string;
  deskripsi: string;
  status: 'Akan Datang' | 'Sedang Berlangsung' | 'Selesai';
  gambar?: string[];
}

export const AgendaKegiatan: React.FC = () => {
  const [isBeasiswaOpen, setIsBeasiswaOpen] = useState(false);
  const [filterKategori, setFilterKategori] = useState('Semua');
  const [search, setSearch] = useState('');

  // State Modal Tambah Agenda Baru
  const [isModalTambahOpen, setIsModalTambahOpen] = useState(false);
  
  // State Modal Konfirmasi Hapus
  const [isModalHapusOpen, setIsModalHapusOpen] = useState(false);
  const [selectedAgendaHapus, setSelectedAgendaHapus] = useState<AgendaItem | null>(null);

  // State untuk Pop-up Konfirmasi Logout
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const [formAgenda, setFormAgenda] = useState({
    namaKegiatan: '',
    kategori: 'Biro Kemahasiswaan' as 'Biro Kemahasiswaan' | 'Beasiswa' | 'Ormawa',
    penyelenggara: 'Biro Kemahasiswaan',
    tanggal: '',
    jamMulai: '08:00',
    jamSelesai: '12:00',
    lokasi: '',
    deskripsi: '',
    status: 'Akan Datang' as const,
    gambarPreview: ''
  });

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/biro/login';
  };

  // 6 Data Dummy Lengkap Kembali
  const [daftarAgenda, setDaftarAgenda] = useState<AgendaItem[]>([
    {
      id: 1,
      namaKegiatan: 'Sosialisasi & Pendaftaran Beasiswa KIP Kuliah 2026',
      penyelenggara: 'Biro Kemahasiswaan',
      kategori: 'Biro Kemahasiswaan',
      tanggal: '15 November 2026',
      waktu: '09:00 - Selesai WITA',
      lokasi: 'Auditorium Utama Kampus',
      deskripsi: 'Pertemuan wajib bagi seluruh calon pendaftar beasiswa KIP Kuliah angkatan 2026 untuk verifikasi berkas awal.',
      status: 'Akan Datang',
      gambar: ['https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&q=80']
    },
    {
      id: 2,
      namaKegiatan: 'Seleksi Wawancara Beasiswa Kebanksentralan',
      penyelenggara: 'Biro Kemahasiswaan & Bank Indonesia',
      kategori: 'Beasiswa',
      tanggal: '08 November 2026',
      waktu: '08:30 - 15:00 WITA',
      lokasi: 'Ruang Rapat Biro Kemahasiswaan Lt. 1',
      deskripsi: 'Sesi wawancara akhir bagi kandidat penerima beasiswa Kebanksentralan.',
      status: 'Sedang Berlangsung',
      gambar: ['https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&q=80']
    },
    {
      id: 3,
      namaKegiatan: 'Open Recruitment Pengurus BEM & Ormawa',
      penyelenggara: 'BEM Universitas',
      kategori: 'Ormawa',
      tanggal: '12 November 2026',
      waktu: '14:00 - 17:00 WITA',
      lokasi: 'Gedung Sekretariat Ormawa',
      deskripsi: 'Perekrutan terbuka anggota baru pengurus organisasi mahasiswa periode mendatang.',
      status: 'Akan Datang',
      gambar: ['https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80']
    },
    {
      id: 4,
      namaKegiatan: 'Workshop Penulisan Proposal Program Kreativitas Mahasiswa (PKM)',
      penyelenggara: 'Biro Kemahasiswaan',
      kategori: 'Biro Kemahasiswaan',
      tanggal: '22 November 2026',
      waktu: '10:00 - 14:00 WITA',
      lokasi: 'Lab Komputer Terpadu Lt. 3',
      deskripsi: 'Pelatihan intensif bagi mahasiswa yang ingin mengajukan proposal pendanaan PKM nasional tahun 2026.',
      status: 'Akan Datang',
      gambar: ['https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&q=80']
    },
    {
      id: 5,
      namaKegiatan: 'Sidang Pleno Terbuka Majelis Permusyawaratan Mahasiswa',
      penyelenggara: 'MPM Universitas',
      kategori: 'Ormawa',
      tanggal: '28 November 2026',
      waktu: '13:00 - 17:00 WITA',
      lokasi: 'Ruang Sidang Utama Kampus',
      deskripsi: 'Penyampaian laporan pertanggungjawaban kegiatan seluruh ormawa semester ganjil.',
      status: 'Akan Datang',
      gambar: ['https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&q=80']
    },
    {
      id: 6,
      namaKegiatan: 'Coaching Clinic & Penyerahan Buku Rekening Beasiswa VDMI',
      penyelenggara: 'Yayasan Van Deventer-Maas (VDMI)',
      kategori: 'Beasiswa',
      tanggal: '02 Desember 2026',
      waktu: '09:00 - 12:00 WITA',
      lokasi: 'Aula Lantai 2 Gedung Rektorat',
      deskripsi: 'Pengarahan administratif dan aktivasi rekening bagi penerima baru beasiswa Van Deventer-Maas Indonesia.',
      status: 'Akan Datang',
      gambar: ['https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&q=80']
    }
  ]);

  const handleKategoriChange = (kategoriBaru: 'Biro Kemahasiswaan' | 'Beasiswa' | 'Ormawa') => {
    let defaultPenyelenggara = 'Biro Kemahasiswaan';
    if (kategoriBaru === 'Beasiswa') defaultPenyelenggara = 'Biro Kemahasiswaan & Bank Indonesia';
    if (kategoriBaru === 'Ormawa') defaultPenyelenggara = 'BEM Universitas';

    setFormAgenda({
      ...formAgenda,
      kategori: kategoriBaru,
      penyelenggara: defaultPenyelenggara
    });
  };

  const formatTanggalIndo = (tanggalStr: string) => {
    if (!tanggalStr) return '';
    const dateObj = new Date(tanggalStr);
    return dateObj.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleSubmitAgenda = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formattedTanggal = formatTanggalIndo(formAgenda.tanggal);
    const formattedWaktu = `${formAgenda.jamMulai} - ${formAgenda.jamSelesai} WITA`;

    const newItem: AgendaItem = {
      id: Date.now(),
      namaKegiatan: formAgenda.namaKegiatan,
      penyelenggara: formAgenda.penyelenggara,
      kategori: formAgenda.kategori,
      tanggal: formattedTanggal || formAgenda.tanggal,
      waktu: formattedWaktu,
      lokasi: formAgenda.lokasi,
      deskripsi: formAgenda.deskripsi,
      status: 'Akan Datang',
      gambar: formAgenda.gambarPreview ? [formAgenda.gambarPreview] : []
    };

    setDaftarAgenda([newItem, ...daftarAgenda]);
    setIsModalTambahOpen(false);
    setFormAgenda({
      namaKegiatan: '',
      kategori: 'Biro Kemahasiswaan',
      penyelenggara: 'Biro Kemahasiswaan',
      tanggal: '',
      jamMulai: '08:00',
      jamSelesai: '12:00',
      lokasi: '',
      deskripsi: '',
      status: 'Akan Datang',
      gambarPreview: ''
    });
    alert('Agenda kegiatan baru berhasil ditambahkan!');
  };

  const filteredAgenda = daftarAgenda.filter((item: AgendaItem) => {
    const matchKategori = filterKategori === 'Semua' || item.kategori === filterKategori;
    const matchSearch = item.namaKegiatan.toLowerCase().includes(search.toLowerCase()) || item.penyelenggara.toLowerCase().includes(search.toLowerCase());
    return matchKategori && matchSearch;
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
              className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold transition cursor-pointer"
            >
              <span>🚪</span>
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* AREA KONTEN UTAMA */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">JADWAL & ACARA</p>
              <h1 className="text-2xl font-bold text-gray-900 mt-0.5">Agenda & Kegiatan Kampus</h1>
              <p className="text-xs text-gray-500 mt-0.5">Pantau seluruh jadwal kegiatan resmi dari Biro Kemahasiswaan dan Ormawa.</p>
            </div>
            
            <button
              onClick={() => {
                setFormAgenda({
                  namaKegiatan: '',
                  kategori: 'Biro Kemahasiswaan',
                  penyelenggara: 'Biro Kemahasiswaan',
                  tanggal: '',
                  jamMulai: '08:00',
                  jamSelesai: '12:00',
                  lokasi: '',
                  deskripsi: '',
                  status: 'Akan Datang',
                  gambarPreview: ''
                });
                setIsModalTambahOpen(true);
              }}
              className="px-5 py-2.5 bg-[#0B2545] hover:bg-[#133763] text-white text-xs font-semibold rounded-xl shadow-sm transition cursor-pointer"
            >
              Tambah Agenda Baru
            </button>
          </div>

          {/* FILTER & PENCARIAN AGENDA */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm mb-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-8">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Cari agenda atau penyelenggara</label>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Ketik nama kegiatan..."
                  className="w-full px-4 py-2 border border-gray-200/80 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white/90"
                />
              </div>

              <div className="md:col-span-4">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Filter Kategori</label>
                <select
                  value={filterKategori}
                  onChange={(e) => setFilterKategori(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200/80 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white/90 cursor-pointer"
                >
                  <option value="Semua">Semua Kategori</option>
                  <option value="Biro Kemahasiswaan">Biro Kemahasiswaan</option>
                  <option value="Beasiswa">Beasiswa</option>
                  <option value="Ormawa">Ormawa</option>
                </select>
              </div>
            </div>
          </div>

          {/* DAFTAR KARTU AGENDA */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm mb-8 space-y-4">
            <h3 className="text-sm font-bold text-gray-900 mb-2">Daftar Agenda Terjadwal ({filteredAgenda.length})</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredAgenda.map((agenda: AgendaItem) => (
                <div key={agenda.id} className="border border-gray-200/80 rounded-2xl p-5 bg-white/90 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                  <div>
                    {/* BANNER / POSTER (DIUBAH KE ASPECT 16/9 AGAR LEBIH COMPACT / TIDAK TERLALU TINGGI) */}
                    <div className="w-full aspect-[16/9] bg-gray-200 rounded-xl overflow-hidden mb-3 relative">
                      {agenda.gambar && agenda.gambar.length > 0 ? (
                        <img 
                          src={agenda.gambar[0]} 
                          alt={agenda.namaKegiatan}
                          className="w-full h-full object-cover" 
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-400 bg-gray-100">
                          Tidak ada gambar
                        </div>
                      )}
                      <span className="absolute top-2 left-2 px-2.5 py-1 rounded-md text-[10px] font-bold text-white shadow-sm bg-blue-600">
                        {agenda.kategori}
                      </span>
                    </div>

                    <div className="flex justify-between items-start mb-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                        agenda.status === 'Sedang Berlangsung' ? 'bg-emerald-100 text-emerald-700 animate-pulse' : 
                        agenda.status === 'Akan Datang' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {agenda.status}
                      </span>
                    </div>

                    <h4 className="font-bold text-sm text-gray-900 mb-1">{agenda.namaKegiatan}</h4>
                    <p className="text-xs text-gray-500 font-semibold mb-3">Penyelenggara: {agenda.penyelenggara}</p>

                    <div className="space-y-1.5 text-xs text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100 mb-4">
                      <div className="flex items-center gap-2">
                        <span>📅</span> <span className="font-medium">{agenda.tanggal}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>⏰</span> <span className="font-medium">{agenda.waktu}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📍</span> <span className="font-medium">{agenda.lokasi}</span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 leading-relaxed mb-4">{agenda.deskripsi}</p>
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-gray-100 text-[11px] text-gray-400">
                    <span>Resmi Biro SI-BEO</span>
                    <button 
                      onClick={() => {
                        setSelectedAgendaHapus(agenda);
                        setIsModalHapusOpen(true);
                      }}
                      className="text-red-600 hover:text-red-700 font-semibold cursor-pointer flex items-center gap-1"
                    >
                      <span>🗑️</span> Hapus Agenda
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

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

      {/* ================= MODAL TAMBAH AGENDA BARU ================= */}
      {isModalTambahOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 my-8">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-gray-50/50">
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase">Biro Kemahasiswaan</span>
                <h3 className="text-base font-bold text-gray-900 mt-0.5">Tambah Agenda & Kegiatan Baru</h3>
              </div>
              <button onClick={() => setIsModalTambahOpen(false)} className="text-gray-400 hover:text-gray-600 font-bold text-sm cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleSubmitAgenda} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Nama Kegiatan <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  placeholder="Contoh: Seminar Nasional Kepemimpinan Mahasiswa"
                  value={formAgenda.namaKegiatan}
                  onChange={(e) => setFormAgenda({ ...formAgenda, namaKegiatan: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Kategori <span className="text-red-500">*</span></label>
                  <select
                    value={formAgenda.kategori}
                    onChange={(e) => handleKategoriChange(e.target.value as any)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none bg-white cursor-pointer"
                  >
                    <option value="Biro Kemahasiswaan">Biro Kemahasiswaan</option>
                    <option value="Beasiswa">Beasiswa</option>
                    <option value="Ormawa">Ormawa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Penyelenggara <span className="text-red-500">*</span></label>
                  <select
                    value={formAgenda.penyelenggara}
                    onChange={(e) => setFormAgenda({ ...formAgenda, penyelenggara: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none bg-white cursor-pointer"
                    required
                  >
                    {formAgenda.kategori === 'Biro Kemahasiswaan' && (
                      <>
                        <option value="Biro Kemahasiswaan">Biro Kemahasiswaan</option>
                        <option value="Bagian Kemahasiswaan & Akademik">Bagian Kemahasiswaan &amp; Akademik</option>
                      </>
                    )}
                    {formAgenda.kategori === 'Beasiswa' && (
                      <>
                        <option value="Biro Kemahasiswaan & Bank Indonesia">Biro Kemahasiswaan &amp; Bank Indonesia</option>
                        <option value="Yayasan Van Deventer-Maas (VDMI)">Yayasan Van Deventer-Maas (VDMI)</option>
                        <option value="Puslapdik Kemendikbudristek (KIP Kuliah)">Puslapdik Kemendikbudristek (KIP Kuliah)</option>
                      </>
                    )}
                    {formAgenda.kategori === 'Ormawa' && (
                      <>
                        <option value="BEM Universitas">BEM Universitas (Badan Eksekutif Mahasiswa)</option>
                        <option value="BPM Universitas">BPM Universitas (Badan Perwakilan Mahasiswa)</option>
                        <option value="MPM Universitas">MPM Universitas (Majelis Permusyawaratan Mahasiswa)</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">📅 Tanggal Acara <span className="text-red-500">*</span></label>
                  <input
                    type="date"
                    value={formAgenda.tanggal}
                    onChange={(e) => setFormAgenda({ ...formAgenda, tanggal: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">⏰ Waktu / Pukul (Mulai - Selesai) <span className="text-red-500">*</span></label>
                  <div className="flex items-center gap-2">
                    <input
                      type="time"
                      value={formAgenda.jamMulai}
                      onChange={(e) => setFormAgenda({ ...formAgenda, jamMulai: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer text-center"
                      required
                    />
                    <span className="text-xs font-bold text-gray-400">s/d</span>
                    <input
                      type="time"
                      value={formAgenda.jamSelesai}
                      onChange={(e) => setFormAgenda({ ...formAgenda, jamSelesai: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer text-center"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">📍 Lokasi Kegiatan <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  placeholder="Contoh: Gedung Auditorium Utama"
                  value={formAgenda.lokasi}
                  onChange={(e) => setFormAgenda({ ...formAgenda, lokasi: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Deskripsi Singkat / Keterangan <span className="text-red-500">*</span></label>
                <textarea
                  rows={3}
                  placeholder="Tuliskan detail atau ajakan mengikuti kegiatan..."
                  value={formAgenda.deskripsi}
                  onChange={(e) => setFormAgenda({ ...formAgenda, deskripsi: e.target.value })}
                  className="w-full p-3 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  required
                ></textarea>
              </div>

              {/* UPLOAD FOTO / POSTER (DIUBAH PREVIEW-NYA JADI LEBIH PROPORSIONAL/COMPACT) */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Upload Foto / Poster (Banner) <span className="text-gray-400 font-normal">· Opsional</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      const reader = new FileReader();
                      reader.onload = (uploadEvent) => {
                        setFormAgenda({ ...formAgenda, gambarPreview: uploadEvent.target?.result as string });
                      };
                      reader.readAsDataURL(e.target.files[0]);
                    }
                  }}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 bg-white cursor-pointer"
                />
                {formAgenda.gambarPreview && (
                  <div className="mt-2 w-40 aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 shadow-sm relative">
                    <img src={formAgenda.gambarPreview} alt="Preview Poster" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsModalTambahOpen(false)}
                  className="px-5 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-xl transition cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#0B2545] hover:bg-[#133763] text-white text-xs font-semibold rounded-xl shadow-sm transition cursor-pointer"
                >
                  Simpan Agenda
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL KONFIRMASI HAPUS AGENDA ================= */}
      {isModalHapusOpen && selectedAgendaHapus && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 text-center animate-in fade-in zoom-in duration-200 border border-gray-100">
            <div className="my-3 flex justify-center">
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-2xl font-black border-4 border-red-50">
                🗑️
              </div>
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-1">Hapus Agenda Ini?</h4>
            <p className="text-xs text-gray-500 mb-5 px-2">
              Apakah Anda yakin ingin menghapus kegiatan <br />
              <span className="font-bold text-gray-800">"{selectedAgendaHapus.namaKegiatan}"</span>? Tindakan ini tidak dapat dibatalkan.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => {
                  setIsModalHapusOpen(false);
                  setSelectedAgendaHapus(null);
                }} 
                className="py-2.5 border border-gray-300 text-gray-700 text-xs font-semibold rounded-xl hover:bg-gray-50 cursor-pointer transition"
              >
                Batal
              </button>
              <button 
                onClick={() => {
                  setDaftarAgenda(daftarAgenda.filter(item => item.id !== selectedAgendaHapus.id));
                  setIsModalHapusOpen(false);
                  setSelectedAgendaHapus(null);
                  alert('Agenda berhasil dihapus.');
                }} 
                className="py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-xl shadow cursor-pointer transition"
              >
                Ya, Hapus
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

export default AgendaKegiatan;