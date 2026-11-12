import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LaporanItem {
  id: number;
  namaKegiatan: string;
  tanggalPelaksanaan: string;
  ketuaPanitia: string;
  status: 'DISETUJUI' | 'MENUNGGU' | 'REVISI';
  fileLaporan: string;
}

export const LaporanKegiatanOrmawa: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('ormawaToken');
    navigate('/ormawa/login');
  };

  const [daftarLaporan, setDaftarLaporan] = useState<LaporanItem[]>([
    { id: 1, namaKegiatan: 'Seminar Kepemimpinan Mahasiswa 2026', tanggalPelaksanaan: '12 Mei 2026', ketuaPanitia: 'Andi Pratama', status: 'DISETUJUI', fileLaporan: 'LPJ_Seminar_2026.pdf' },
    { id: 2, namaKegiatan: 'Bakti Sosial Desa Binaan', tanggalPelaksanaan: '25 Juni 2026', ketuaPanitia: 'Maria Lestari', status: 'MENUNGGU', fileLaporan: 'LPJ_Baksos_2026.pdf' },
    { id: 3, namaKegiatan: 'Pekan Seni & Olahraga Kampus', tanggalPelaksanaan: '10 Agustus 2026', ketuaPanitia: 'Rizky Saputra', status: 'REVISI', fileLaporan: 'LPJ_Pekanseni_2026.pdf' },
  ]);

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [formData, setFormData] = useState({
    namaKegiatan: '',
    tanggal: '',
    ketua: '',
  });

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.namaKegiatan) return;
    const newItem: LaporanItem = {
      id: Date.now(),
      namaKegiatan: formData.namaKegiatan,
      tanggalPelaksanaan: formData.tanggal || 'Hari ini',
      ketuaPanitia: formData.ketua || 'Pengurus Ormawa',
      status: 'MENUNGGU',
      fileLaporan: 'LPJ_Baru.pdf'
    };
    setDaftarLaporan([newItem, ...daftarLaporan]);
    setShowUploadModal(false);
    setFormData({ namaKegiatan: '', tanggal: '', ketua: '' });
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
              <a href="/ormawa/laporan-kegiatan" className="flex items-center gap-3 px-3 py-2.5 bg-blue-600/40 text-blue-300 font-semibold rounded-lg transition border-l-4 border-blue-400">
                <span>📈</span>
                <span>Laporan Kegiatan</span>
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
          
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">ORMAWA / LPJ</p>
              <h1 className="text-xl font-bold text-gray-900">Laporan Pertanggungjawaban (LPJ)</h1>
            </div>
            <button 
              onClick={() => setShowUploadModal(true)}
              className="px-4 py-2 bg-[#1B437C] hover:bg-blue-900 text-white text-xs font-bold rounded-lg shadow transition flex items-center gap-2 cursor-pointer"
            >
              <span>+ Unggah LPJ Baru</span>
            </button>
          </div>

          {/* Statistik Ringkas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl text-xl font-bold">✅</div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase">Disetujui Biro</p>
                <p className="text-lg font-extrabold text-gray-900">1 Kegiatan</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-xl text-xl font-bold">⏳</div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase">Menunggu Verifikasi</p>
                <p className="text-lg font-extrabold text-gray-900">1 Kegiatan</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl text-xl font-bold">🔄</div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase">Perlu Revisi</p>
                <p className="text-lg font-extrabold text-gray-900">1 Kegiatan</p>
              </div>
            </div>
          </div>

          {/* Tabel Daftar Laporan */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
            <h3 className="text-sm font-bold text-gray-900 mb-1">Riwayat Pengumpulan Laporan</h3>
            <p className="text-[11px] text-gray-500 mb-4">Daftar laporan kegiatan yang telah diserahkan kepada Biro Kemahasiswaan.</p>

            <div className="overflow-x-auto border border-gray-100 rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-[10px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                    <th className="py-3 px-4">NAMA KEGIATAN</th>
                    <th className="py-3 px-4">TANGGAL PELAKSANAAN</th>
                    <th className="py-3 px-4">KETUA PANITIA</th>
                    <th className="py-3 px-4">STATUS LPJ</th>
                    <th className="py-3 px-4">BERKAS</th>
                    <th className="py-3 px-4 text-right">AKSI</th>
                  </tr>
                </thead>
                <tbody className="text-xs divide-y divide-gray-100">
                  {daftarLaporan.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50/50">
                      <td className="py-3.5 px-4 font-bold text-gray-900">{item.namaKegiatan}</td>
                      <td className="py-3.5 px-4 text-gray-600">{item.tanggalPelaksanaan}</td>
                      <td className="py-3.5 px-4 text-gray-600">{item.ketuaPanitia}</td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          item.status === 'DISETUJUI' ? 'bg-emerald-100 text-emerald-700' :
                          item.status === 'REVISI' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-blue-600 font-semibold">{item.fileLaporan}</td>
                      <td className="py-3.5 px-4 text-right">
                        <button 
                          onClick={() => alert(`Memeriksa laporan: ${item.namaKegiatan}`)}
                          className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition cursor-pointer shadow-sm"
                        >
                          Periksa
                        </button>
                      </td>
                    </tr>
                  ))}
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

      {/* ================= MODAL UNGGAH LPJ BARU DENGAN BLUR ================= */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-sm font-bold text-gray-900">Unggah Laporan Pertanggungjawaban (LPJ)</h3>
              <button onClick={() => setShowUploadModal(false)} className="text-gray-400 font-bold hover:text-gray-600 cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleUploadSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-gray-700 mb-1">Nama Kegiatan *</label>
                <input 
                  type="text" required
                  value={formData.namaKegiatan}
                  onChange={(e) => setFormData({...formData, namaKegiatan: e.target.value})}
                  placeholder="Contoh: Seminar Nasional Teknologi 2026"
                  className="w-full p-2.5 border rounded-lg outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Tanggal Pelaksanaan *</label>
                <input 
                  type="date" required
                  value={formData.tanggal}
                  onChange={(e) => setFormData({...formData, tanggal: e.target.value})}
                  className="w-full p-2.5 border rounded-lg outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Nama Ketua Panitia *</label>
                <input 
                  type="text" required
                  value={formData.ketua}
                  onChange={(e) => setFormData({...formData, ketua: e.target.value})}
                  placeholder="Nama ketua pelaksana..."
                  className="w-full p-2.5 border rounded-lg outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">File Dokumen LPJ (PDF) *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center bg-gray-50 cursor-pointer">
                  <p className="text-xs text-gray-600">Seret berkas PDF ke sini atau <span className="text-blue-600 font-bold">pilih berkas</span></p>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button type="button" onClick={() => setShowUploadModal(false)} className="px-4 py-2 bg-gray-200 rounded-lg font-bold cursor-pointer">Batal</button>
                <button type="submit" className="px-5 py-2 bg-[#1B437C] text-white rounded-lg font-bold shadow cursor-pointer">Kirim LPJ</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LaporanKegiatanOrmawa;