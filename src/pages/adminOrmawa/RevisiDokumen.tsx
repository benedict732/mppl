import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RevisiDokumenOrmawa: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('ormawaToken');
    navigate('/ormawa/login');
  };

  const [selectedDokumen, setSelectedDokumen] = useState('Proposal Bakti Sosial');
  const [keterangan, setKeterangan] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('File revisi dokumen berhasil dikirim ke biro!');
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
              <a href="/ormawa/revisi" className="flex items-center gap-3 px-3 py-2.5 bg-blue-600/40 text-blue-300 font-semibold rounded-lg transition border-l-4 border-blue-400">
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
          
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                ORMAWA / PROPOSAL & LAPORAN
              </p>
              <h1 className="text-xl font-bold text-gray-900">Pengumpulan Revisi</h1>
            </div>
            <div className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold shadow-sm">
              BEM •
            </div>
          </div>

          {/* Header Box Utama */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-6 space-y-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Kirim Revisi Dokumen</h2>
              <p className="text-xs text-gray-500 mt-0.5">Unggah kembali proposal atau laporan kegiatan setelah melakukan perbaikan sesuai catatan biro.</p>
            </div>

            {/* Banner Peringatan Kuning */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
              <span className="text-amber-600 text-base font-bold">⚠️</span>
              <div>
                <p className="text-xs font-bold text-amber-900">Ada dokumen yang perlu diperbaiki</p>
                <p className="text-[11px] text-amber-700 mt-0.5">Periksa catatan dari biro, perbaiki dokumen, lalu unggah file revisi melalui halaman ini.</p>
              </div>
            </div>
          </div>

          {/* 2 Kolom: Form Kirim Revisi & Catatan dari Biro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            
            {/* Kolom Kiri: Formulir Pengiriman Revisi */}
            <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-5">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Formulir pengiriman revisi</h3>
                <p className="text-[11px] text-gray-500 mt-0.5">Pastikan file yang dikirim sudah sesuai dengan catatan perbaikan.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Pilih dokumen yang akan direvisi</label>
                  <select 
                    value={selectedDokumen}
                    onChange={(e) => setSelectedDokumen(e.target.value)}
                    className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 cursor-pointer font-medium"
                  >
                    <option value="Proposal Bakti Sosial">Proposal Bakti Sosial</option>
                    <option value="Laporan Pekan Seni">Laporan Pekan Seni</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block font-bold text-gray-700">
                      File revisi <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[10px] text-gray-400">Format PDF, maksimal 10 MB. Unggah dokumen versi terbaru.</span>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center bg-gray-50/50 hover:bg-gray-50 transition cursor-pointer">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                      ⬆️
                    </div>
                    <p className="text-xs font-bold text-gray-700 mb-1">
                      Klik untuk mengunggah atau tarik file ke sini
                    </p>
                    <p className="text-[10px] text-gray-400">PDF • Maksimal 10 MB</p>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Keterangan perbaikan (opsional)</label>
                  <textarea 
                    rows={3}
                    value={keterangan}
                    onChange={(e) => setKeterangan(e.target.value)}
                    placeholder="Tuliskan bagian yang sudah diperbaiki, jika diperlukan..."
                    className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <p className="text-[10px] text-gray-400 mb-4">Dokumen akan diteruskan kembali ke biro untuk diverifikasi.</p>
                  <div className="flex justify-between items-center pt-3 border-t">
                    <button 
                      type="button" 
                      onClick={() => setKeterangan('')}
                      className="px-6 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-xl font-bold transition cursor-pointer"
                    >
                      Batal
                    </button>
                    <button 
                      type="submit"
                      className="px-6 py-2.5 bg-[#0B1E36] hover:bg-blue-900 text-white rounded-xl font-bold shadow transition cursor-pointer"
                    >
                      Kirim file revisi
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Kolom Kanan: Catatan dari Biro */}
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <h3 className="text-sm font-bold text-gray-900">Catatan dari biro</h3>
                <span className="px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-md text-[10px] font-bold">
                  Perlu diperbaiki
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-gray-900 text-xs">Proposal Bakti Sosial</h4>
                <p className="text-[10px] text-gray-400">Dikembalikan • 12 Oktober 2026</p>
              </div>

              <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-4 space-y-2">
                <p className="text-xs font-bold text-gray-800">Mohon lakukan perbaikan berikut:</p>
                <ol className="list-decimal pl-4 space-y-1.5 text-[11px] text-gray-700 leading-relaxed">
                  <li>Lengkapi rincian anggaran kegiatan.</li>
                  <li>Perbaiki jadwal pelaksanaan.</li>
                  <li>Tambahkan tanda tangan ketua Ormawa pada halaman pengesahan.</li>
                </ol>
              </div>
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

export default RevisiDokumenOrmawa;