import React, { useState } from 'react';

export const EditProfil: React.FC = () => {
  const [isBeasiswaOpen, setIsBeasiswaOpen] = useState(false);
  const [isRekapOpen, setIsRekapOpen] = useState(false);

  const [formData, setFormData] = useState({
    namaBeasiswa: 'KIP Kuliah',
    deskripsi: 'Tujuan, sasaran, dan gambaran umum program beasiswa.',
    persyaratan: 'Mahasiswa aktif; memenuhi kriteria; melengkapi dokumen persyaratan.',
    manfaat: 'Bantuan biaya pendidikan dan/atau biaya hidup sesuai ketentuan.',
    caraMendaftar: 'Isi formulir, unggah dokumen, dan ikuti tahapan seleksi.',
    informasiKontak: 'Periode pendaftaran dan kontak resmi pengelola beasiswa.'
  });

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/biro/login';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Perubahan profil beasiswa berhasil disimpan!');
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col font-sans text-gray-800">
      <div className="flex flex-1">
        
        {/* SIDEBAR KIRI KONSISTEN DENGAN LOGO.JPG */}
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
              <a href="/biro/edit-profil" className="flex items-center gap-3 px-3 py-2.5 bg-blue-600/30 text-blue-300 font-semibold rounded-lg">
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

        {/* AREA KONTEN UTAMA LENGKAP */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="mb-6">
            <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">PROFIL / EDIT</p>
            <h1 className="text-xl font-bold text-gray-900">Edit Profil Beasiswa</h1>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Edit Profil Beasiswa</h2>
            <p className="text-xs text-gray-500 mt-1">Sesuaikan informasi profil beasiswa yang ditampilkan kepada visitor.</p>
          </div>

          {/* FORM CARD STACK LENGKAP */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-8">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-3">Informasi Utama</h3>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">NAMA BEASISWA</label>
                <input type="text" value={formData.namaBeasiswa} onChange={(e) => setFormData({ ...formData, namaBeasiswa: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 font-medium text-gray-800" />
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-3">Tentang Beasiswa</h3>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">DESKRIPSI</label>
                <input type="text" value={formData.deskripsi} onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-600" />
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-3">Persyaratan Umum</h3>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">PERSYARATAN</label>
                <input type="text" value={formData.persyaratan} onChange={(e) => setFormData({ ...formData, persyaratan: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-600" />
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-3">Benefit Beasiswa</h3>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">MANFAAT</label>
                <input type="text" value={formData.manfaat} onChange={(e) => setFormData({ ...formData, manfaat: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-600" />
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-3">Cara Mendaftar</h3>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">LANGKAH PENDAFTARAN</label>
                <input type="text" value={formData.caraMendaftar} onChange={(e) => setFormData({ ...formData, caraMendaftar: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-600" />
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-3">Informasi Pendaftaran & Kontak</h3>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">PERIODE / NARAHUBUNG</label>
                <input type="text" value={formData.informasiKontak} onChange={(e) => setFormData({ ...formData, informasiKontak: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-600" />
              </div>
            </div>

            <div className="flex justify-end items-center gap-3 pt-4">
              <button type="button" onClick={() => window.location.href = '/biro/dashboard'} className="px-6 py-2.5 border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-lg">Batal</button>
              <button type="submit" className="px-6 py-2.5 bg-[#0B2545] hover:bg-[#133763] text-white text-xs font-semibold rounded-lg shadow-sm">Simpan Perubahan</button>
            </div>
          </form>

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

export default EditProfil;