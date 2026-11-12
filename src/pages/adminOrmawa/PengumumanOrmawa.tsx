import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PengumumanItem {
  id: number;
  judul: string;
  kategori: string;
  tanggal: string;
  penerbit: string;
  ormawa: string;
  tahunAkademik: string;
  isi: string;
  jadwal: string;
  persyaratan: string[];
  lampiran?: string;
  imageUrl: string;
}

export const PengumumanOrmawa: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('ormawaToken');
    navigate('/ormawa/login');
  };

  const [daftarPengumuman, setDaftarPengumuman] = useState<PengumumanItem[]>([
    {
      id: 1,
      judul: 'Pendaftaran Anggota Baru UKM 2026',
      kategori: 'Akademik',
      tanggal: 'Dipublikasikan pada 15 Oktober 2026',
      penerbit: 'Biro Kemahasiswaan',
      ormawa: 'UKM Seni dan Budaya',
      tahunAkademik: '2026/2027',
      isi: 'Diberitahukan kepada seluruh mahasiswa bahwa pendaftaran anggota baru UKM Seni dan Budaya telah dibuka. Mahasiswa yang berminat dapat mengikuti proses pendaftaran sesuai jadwal dan persyaratan yang telah ditentukan.',
      jadwal: '20 Oktober – 10 November 2026',
      persyaratan: [
        'Mahasiswa aktif tahun akademik 2026/2027.',
        'Mengisi formulir pendaftaran dan melengkapi berkas yang diminta.'
      ],
      lampiran: 'Panduan_Pendaftaran.pdf (1,2 MB)',
      imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      judul: 'Sosialisasi Program Kreativitas Mahasiswa (PKM)',
      kategori: 'Informasi',
      tanggal: 'Dipublikasikan pada 18 Oktober 2026',
      penerbit: 'Biro Kemahasiswaan',
      ormawa: 'BEM Universitas',
      tahunAkademik: '2026/2027',
      isi: 'Kegiatan sosialisasi wajib bagi seluruh ketua kelompok pengusul proposal PKM pendanaan tahun 2027.',
      jadwal: '25 Oktober 2026',
      persyaratan: ['Wajib dihadiri oleh seluruh calon ketua tim pengusul.'],
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      judul: 'Jadwal Laporan Pertanggungjawaban (LPJ)',
      kategori: 'Keuangan',
      tanggal: 'Dipublikasikan pada 20 Oktober 2026',
      penerbit: 'Biro Kemahasiswaan',
      ormawa: 'MPM Kampus',
      tahunAkademik: '2026/2027',
      isi: 'Pengumpulan berkas LPJ kegiatan semester ganjil paling lambat akhir bulan ini.',
      jadwal: '30 Oktober 2026',
      persyaratan: ['Menyerahkan berkas fisik dan softcopy laporan ke portal.'],
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      judul: 'Festival Olahraga Antar Fakultas',
      kategori: 'Kemahasiswaan',
      tanggal: 'Dipublikasikan pada 22 Oktober 2026',
      penerbit: 'Biro Kemahasiswaan',
      ormawa: 'Unit Olahraga',
      tahunAkademik: '2026/2027',
      isi: 'Pendaftaran cabang lomba futsal, basket, dan bulu tangkis telah dibuka untuk umum.',
      jadwal: '01 - 05 November 2026',
      persyaratan: ['Menyerahkan surat rekomendasi dari fakultas masing-masing.'],
      imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=500&q=80'
    }
  ]);

  const [currentView, setCurrentView] = useState<'list' | 'detail'>('list');
  const [selectedItem, setSelectedItem] = useState<PengumumanItem | null>(null);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Form input tambah pengumuman sesuai dengan screenshot referensi
  const [formData, setFormData] = useState({
    judul: '',
    kategori: '',
    ormawa: '',
    isi: '',
    tanggal: '',
    lampiran: ''
  });

  const handleOpenDetail = (item: PengumumanItem) => {
    setSelectedItem(item);
    setCurrentView('detail');
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.judul.trim()) return;
    const newItem: PengumumanItem = {
      id: Date.now(),
      judul: formData.judul,
      kategori: formData.kategori || 'Informasi',
      tanggal: formData.tanggal ? `Dipublikasikan pada ${formData.tanggal}` : 'Dipublikasikan hari ini',
      penerbit: 'Admin Ormawa',
      ormawa: formData.ormawa || 'Ormawa Aktif',
      tahunAkademik: '2026/2027',
      isi: formData.isi || 'Isi pengumuman belum ditambahkan.',
      jadwal: 'Sesuai ketentuan',
      persyaratan: ['Mengikuti seluruh ketentuan yang berlaku.'],
      lampiran: formData.lampiran || undefined,
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80'
    };
    setDaftarPengumuman([newItem, ...daftarPengumuman]);
    setShowAddModal(false);
    setFormData({ judul: '', kategori: '', ormawa: '', isi: '', tanggal: '', lampiran: '' });
  };

  const handleDeleteConfirm = () => {
    if (daftarPengumuman.length > 0) {
      setDaftarPengumuman(daftarPengumuman.slice(1));
    }
    setShowDeleteModal(false);
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
              <a href="/ormawa/dashboard" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📊</span>
                <span>Dashboard</span>
              </a>
              <a href="/ormawa/data-ormawa" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>👥</span>
                <span>Data Ormawa</span>
              </a>
              <a href="/ormawa/pengumuman" className="flex items-center gap-3 px-3 py-2.5 bg-blue-600/40 text-blue-300 font-semibold rounded-lg transition border-l-4 border-blue-400">
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
        <main className="flex-1 p-8 overflow-y-auto">
          
          <div className="mb-6">
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
              {currentView === 'list' ? 'ORMAWA / PENGUMUMAN' : 'ORMAWA / PENGUMUMAN / DETAIL'}
            </p>
            <h1 className="text-xl font-bold text-gray-900">
              {currentView === 'list' ? 'Pengumuman Ormawa' : 'Detail Pengumuman'}
            </h1>
          </div>

          {currentView === 'list' ? (
            <>
              {/* Box Filter & Aksi */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-6 space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">Pengumuman</h2>
                    <p className="text-xs text-gray-500 mt-0.5">Kelola informasi dan pengumuman untuk pengguna SI-BEO.</p>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setShowDeleteModal(true)}
                      className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow transition cursor-pointer"
                    >
                      Hapus
                    </button>
                    <button 
                      onClick={() => setShowAddModal(true)}
                      className="px-5 py-2.5 bg-[#1B437C] hover:bg-blue-900 text-white text-xs font-bold rounded-xl shadow transition cursor-pointer"
                    >
                      + Postingan
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1">Pilih Beasiswa atau Ormawa</label>
                    <select className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700 outline-none cursor-pointer">
                      <option>Semua Kategori</option>
                      <option>Beasiswa</option>
                      <option>Ormawa</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1">Filter Tahun Akademik</label>
                    <select className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700 outline-none cursor-pointer">
                      <option>2026/2027</option>
                      <option>2025/2026</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Grid 4 Kartu Pengumuman dengan Gambar Asli */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {daftarPengumuman.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-2xl overflow-hidden flex flex-col justify-between bg-white shadow-sm hover:shadow-md transition">
                      <div>
                        <div className="w-full h-36 relative overflow-hidden bg-gray-100">
                          <img 
                            src={item.imageUrl} 
                            alt={item.judul}
                            className="w-full h-full object-cover hover:scale-105 transition duration-300"
                          />
                          <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/60 text-white rounded text-[9px] font-bold uppercase tracking-wider backdrop-blur-sm">
                            {item.kategori}
                          </span>
                        </div>
                        <div className="p-4">
                          <h4 className="text-xs font-bold text-gray-900 line-clamp-2 min-h-[32px]">
                            {item.judul}
                          </h4>
                        </div>
                      </div>
                      <div className="px-4 pb-4 pt-2 border-t border-gray-100 flex justify-end">
                        <button 
                          onClick={() => handleOpenDetail(item)}
                          className="text-[11px] text-blue-600 font-bold hover:underline cursor-pointer"
                        >
                          Selengkapnya →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* ================= TAMPILAN DETAIL PENGUMUMAN ================= */
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm mb-8 space-y-6">
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {selectedItem?.kategori}
                  </span>
                  <p className="text-[11px] text-gray-400 mt-2">{selectedItem?.tanggal}</p>
                </div>
                <button 
                  onClick={() => setCurrentView('list')}
                  className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-bold rounded-xl shadow-sm transition flex items-center gap-1.5 cursor-pointer"
                >
                  <span>←</span> Kembali
                </button>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-extrabold text-gray-900">{selectedItem?.judul}</h2>
                <p className="text-xs text-gray-600 leading-relaxed">{selectedItem?.isi}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-100 text-xs">
                <div>
                  <p className="text-gray-400 font-semibold uppercase text-[10px]">Penerbit</p>
                  <p className="font-bold text-gray-800 mt-0.5">{selectedItem?.penerbit}</p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold uppercase text-[10px]">Ormawa</p>
                  <p className="font-bold text-gray-800 mt-0.5">{selectedItem?.ormawa}</p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold uppercase text-[10px]">Tahun Akademik</p>
                  <p className="font-bold text-gray-800 mt-0.5">{selectedItem?.tahunAkademik}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-3 text-xs">
                <h3 className="font-bold text-gray-900">Jadwal Pelaksanaan:</h3>
                <p className="text-gray-600">{selectedItem?.jadwal}</p>

                <h3 className="font-bold text-gray-900 pt-2">Persyaratan:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  {selectedItem?.persyaratan.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>

              {selectedItem?.lampiran && (
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold text-gray-700 mb-2">Lampiran</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-blue-600 cursor-pointer hover:bg-gray-100">
                    <span>📄 {selectedItem.lampiran}</span>
                  </div>
                </div>
              )}
            </div>
          )}

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

      {/* ================= POPUP MODAL TAMBAH POSTINGAN (PERSIS SEPERTI GAMBAR REFERENSI) DENGAN BLUR ================= */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 space-y-5 animate-in fade-in zoom-in duration-200 relative">
            
            {/* Header Modal */}
            <div className="flex justify-between items-start border-b pb-4">
              <div>
                <h3 className="text-base font-bold text-gray-900">Informasi Pengumuman</h3>
                <p className="text-xs text-gray-500 mt-0.5">Lengkapi detail berikut sebelum menerbitkan pengumuman.</p>
              </div>
              <button 
                onClick={() => setShowAddModal(false)} 
                className="text-gray-400 hover:text-gray-600 font-bold text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateSubmit} className="space-y-4 text-xs">
              
              {/* Judul Pengumuman */}
              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  Judul Pengumuman <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" required
                  value={formData.judul}
                  onChange={(e) => setFormData({...formData, judul: e.target.value})}
                  placeholder="Contoh: Pendaftaran Anggota Baru UKM 2026"
                  className="w-full p-2.5 bg-white border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
              </div>

              {/* Kategori */}
              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  Kategori <span className="text-red-500">*</span>
                </label>
                <select 
                  value={formData.kategori}
                  onChange={(e) => setFormData({...formData, kategori: e.target.value})}
                  className="w-full p-2.5 bg-white border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 cursor-pointer"
                >
                  <option value="">Pilih kategori pengumuman</option>
                  <option value="Akademik">Akademik</option>
                  <option value="Informasi">Informasi</option>
                  <option value="Keuangan">Keuangan</option>
                  <option value="Kemahasiswaan">Kemahasiswaan</option>
                </select>
              </div>

              {/* Ormawa */}
              <div>
                <label className="block font-bold text-gray-700 mb-1">Ormawa</label>
                <input 
                  type="text"
                  value={formData.ormawa}
                  onChange={(e) => setFormData({...formData, ormawa: e.target.value})}
                  placeholder="Nama Ormawa atau Biro"
                  className="w-full p-2.5 bg-white border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
              </div>

              {/* Isi Pengumuman */}
              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  Isi Pengumuman <span className="text-red-500">*</span>
                </label>
                <textarea 
                  rows={5} required
                  value={formData.isi}
                  onChange={(e) => setFormData({...formData, isi: e.target.value})}
                  placeholder="Tuliskan detail, jadwal, persyaratan, dan informasi kontak...&#10;Gunakan bahasa yang jelas agar mudah dipahami oleh pembaca."
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 resize-none"
                />
              </div>

              {/* Tanggal Publikasi & Lampiran (2 Kolom) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Tanggal Publikasi</label>
                  <div className="relative">
                    <input 
                      type="date"
                      value={formData.tanggal}
                      onChange={(e) => setFormData({...formData, tanggal: e.target.value})}
                      className="w-full p-2.5 bg-white border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Lampiran (opsional)</label>
                  <div className="border border-dashed border-gray-300 rounded-lg p-3 text-center bg-white hover:bg-gray-50 transition cursor-pointer">
                    <p className="text-[11px] text-gray-500">+ Tambahkan PDF / gambar / dokumen pendukung</p>
                  </div>
                </div>
              </div>

              {/* Tombol Aksi Bawah */}
              <div className="flex justify-end gap-3 pt-4 border-t mt-4">
                <button 
                  type="button" 
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl text-xs font-bold cursor-pointer transition"
                >
                  Batal
                </button>
                <button 
                  type="submit"
                  className="px-6 py-2.5 bg-[#1B437C] hover:bg-blue-900 text-white rounded-xl text-xs font-bold shadow cursor-pointer transition"
                >
                  Terbitkan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= POPUP MODAL KONFIRMASI HAPUS DENGAN BLUR ================= */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 text-center space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              !
            </div>
            <h3 className="text-base font-bold text-gray-900">Hapus Pengumuman?</h3>
            <p className="text-xs text-gray-500">
              Apakah Anda yakin ingin menghapus pengumuman teratas? Tindakan ini tidak dapat dibatalkan.
            </p>

            <div className="flex justify-center gap-3 pt-3">
              <button 
                onClick={() => setShowDeleteModal(false)}
                className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer"
              >
                Batal
              </button>
              <button 
                onClick={handleDeleteConfirm}
                className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow cursor-pointer"
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PengumumanOrmawa;