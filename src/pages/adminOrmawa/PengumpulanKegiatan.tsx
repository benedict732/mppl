import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PengumpulanKegiatan: React.FC = () => {
  const navigate = useNavigate();

  // Fungsi logout yang mengarah dengan benar ke login ormawa
  const handleLogout = () => {
    localStorage.removeItem('ormawaToken');
    navigate('/ormawa/login');
  };

  const [jenisDokumen, setJenisDokumen] = useState<'Proposal Kegiatan' | 'Laporan Kegiatan'>('Proposal Kegiatan');
  const [namaKegiatan, setNamaKegiatan] = useState('Seminar Kepemimpinan Mahasiswa 2026');
  const [lokasi, setLokasi] = useState('Aula utama kampus');
  const [tanggal, setTanggal] = useState('2026-11-12');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Dokumen berhasil diunggah!');
  };

  const handleReset = () => {
    setNamaKegiatan('');
    setLokasi('');
    setTanggal('');
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
              <a href="/ormawa/pengumuman" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📢</span>
                <span>Pengumuman</span>
              </a>
              <a href="/ormawa/proposal" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📄</span>
                <span>Proposal & Laporan</span>
              </a>
              <a href="/ormawa/pengumpulan" className="flex items-center gap-3 px-3 py-2.5 bg-blue-600/40 text-blue-300 font-semibold rounded-lg transition border-l-4 border-blue-400">
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
          
          <div className="flex gap-6">
            
            {/* Form Pengajuan Utama */}
            <div className="flex-1 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
              <div className="flex justify-between items-center border-b pb-4">
                <h2 className="text-sm font-bold text-gray-900">Detail pengajuan</h2>
                <span className="text-[10px] text-gray-400">* Wajib diisi</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                
                {/* Jenis Dokumen */}
                <div>
                  <label className="block font-bold text-gray-700 mb-1.5">
                    Jenis Dokumen <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setJenisDokumen('Proposal Kegiatan')}
                      className={`py-2.5 px-4 rounded-xl font-bold border transition cursor-pointer ${jenisDokumen === 'Proposal Kegiatan' ? 'bg-white border-blue-600 text-blue-600 shadow-sm' : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'}`}
                    >
                      Proposal Kegiatan
                    </button>
                    <button
                      type="button"
                      onClick={() => setJenisDokumen('Laporan Kegiatan')}
                      className={`py-2.5 px-4 rounded-xl font-bold border transition cursor-pointer ${jenisDokumen === 'Laporan Kegiatan' ? 'bg-white border-blue-600 text-blue-600 shadow-sm' : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'}`}
                    >
                      Laporan Kegiatan
                    </button>
                  </div>
                </div>

                {/* Nama Kegiatan */}
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Nama Kegiatan <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" required
                    value={namaKegiatan}
                    onChange={(e) => setNamaKegiatan(e.target.value)}
                    placeholder="Masukkan nama kegiatan..."
                    className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  />
                </div>

                {/* Lokasi & Tanggal Pelaksanaan */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Lokasi <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" required
                      value={lokasi}
                      onChange={(e) => setLokasi(e.target.value)}
                      placeholder="Lokasi kegiatan..."
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Tanggal Pelaksanaan <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="date" required
                      value={tanggal}
                      onChange={(e) => setTanggal(e.target.value)}
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    />
                  </div>
                </div>

                {/* Upload Dokumen */}
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Upload Dokumen <span className="text-red-500">*</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center bg-gray-50/50 hover:bg-gray-50 transition cursor-pointer">
                    <p className="text-xs text-gray-600 mb-1">
                      Seret dokumen ke sini atau <span className="text-blue-600 font-bold underline">pilih berkas</span>
                    </p>
                    <p className="text-[10px] text-gray-400">Format: PDF, DOC, DOCX (Maks. 10 MB)</p>
                  </div>
                </div>

                {/* Tombol Aksi Bawah Form */}
                <div className="flex justify-between items-center pt-4 border-t">
                  <button 
                    type="button" 
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-white border border-red-300 hover:bg-red-50 text-red-600 rounded-xl font-bold transition cursor-pointer"
                  >
                    Hapus
                  </button>
                  <button 
                    type="submit"
                    className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow transition cursor-pointer"
                  >
                    Upload
                  </button>
                </div>
              </form>
            </div>

            {/* Sidebar Informasi Kanan */}
            <div className="w-80 shrink-0">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                <h3 className="text-sm font-bold text-gray-900 text-center border-pb pb-2">Informasi</h3>
                <p className="text-[11px] text-gray-500 text-center">Lengkapi pengajuan agar proses verifikasi berjalan lancar.</p>
                <div className="space-y-2 text-xs text-gray-600 pt-2 border-t border-gray-100">
                  <p className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Gunakan format proposal atau laporan sesuai ketentuan.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Pastikan data lengkap dan disetujui pembina.</span>
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <footer className="pt-8 mt-12 border-t border-gray-200 text-[11px] text-gray-500 flex flex-col md:flex-row justify-between gap-6">
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

export default PengumpulanKegiatan;