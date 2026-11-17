import React, { useState } from 'react';
import { SidebarAdmin } from './components/SidebarAdmin';

export const RevisiDokumenOrmawa: React.FC = () => {

  const [selectedDokumen, setSelectedDokumen] = useState('Proposal Bakti Sosial');
  const [keterangan, setKeterangan] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('File revisi dokumen berhasil dikirim ke biro!');
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col font-sans text-gray-800 relative">
      <div className="flex flex-1">
        
        {/* ================= SIDEBAR KIRI (ORMAWA / MPM) ================= */}
        <SidebarAdmin currentMenu="revisi" />

        {/* ================= KONTEN UTAMA ================= */}
        <main className="flex-1 p-8 overflow-y-auto space-y-6">
          
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                ORMAWA / PROPOSAL &amp; LAPORAN
              </p>
              <h1 className="text-xl font-bold text-gray-900">Pengumpulan Revisi</h1>
            </div>
            <div className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200/80 rounded-full text-xs font-bold shadow-sm">
              BEM •
            </div>
          </div>

          {/* Header Box Utama (GLASSMORPHISM) */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm space-y-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Kirim Revisi Dokumen</h2>
              <p className="text-xs text-gray-500 mt-0.5">Unggah kembali proposal atau laporan kegiatan setelah melakukan perbaikan sesuai catatan biro.</p>
            </div>

            {/* Banner Peringatan Kuning */}
            <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl flex items-start gap-3">
              <span className="text-amber-600 text-base font-bold">⚠️</span>
              <div>
                <p className="text-xs font-bold text-amber-900">Ada dokumen yang perlu diperbaiki</p>
                <p className="text-[11px] text-amber-700 mt-0.5">Periksa catatan dari biro, perbaiki dokumen, lalu unggah file revisi melalui halaman ini.</p>
              </div>
            </div>
          </div>

          {/* 2 Kolom: Form Kirim Revisi & Catatan dari Biro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            
            {/* Kolom Kiri: Formulir Pengiriman Revisi (GLASSMORPHISM) */}
            <div className="lg:col-span-8 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm space-y-5">
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
                    className="w-full p-3 bg-white/90 border border-gray-200/80 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 cursor-pointer font-medium"
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
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center bg-white/50 hover:bg-white/80 transition cursor-pointer">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold shadow-sm">
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
                    className="w-full p-3 bg-white/90 border border-gray-200/80 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <p className="text-[10px] text-gray-400 mb-4">Dokumen akan diteruskan kembali ke biro untuk diverifikasi.</p>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <button 
                      type="button" 
                      onClick={() => setKeterangan('')}
                      className="px-6 py-2.5 bg-white/90 border border-gray-300 hover:bg-white text-gray-700 rounded-xl font-bold transition cursor-pointer"
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

            {/* Kolom Kanan: Catatan dari Biro (GLASSMORPHISM) */}
            <div className="lg:col-span-4 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <h3 className="text-sm font-bold text-gray-900">Catatan dari biro</h3>
                <span className="px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-lg text-[10px] font-bold">
                  Perlu diperbaiki
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-gray-900 text-xs">Proposal Bakti Sosial</h4>
                <p className="text-[10px] text-gray-400">Dikembalikan • 12 Oktober 2026</p>
              </div>

              <div className="bg-amber-50/70 border border-amber-100 rounded-xl p-4 space-y-2">
                <p className="text-xs font-bold text-gray-800">Mohon lakukan perbaikan berikut:</p>
                <ol className="list-decimal pl-4 space-y-1.5 text-[11px] text-gray-700 leading-relaxed">
                  <li>Lengkapi rincian anggaran kegiatan.</li>
                  <li>Perbaiki jadwal pelaksanaan.</li>
                  <li>Tambahkan tanda tangan ketua Ormawa pada halaman pengesahan.</li>
                </ol>
              </div>
            </div>

          </div>

          {/* ================= FOOTER BAWAH (TANPA BLOK KONTAK KAMPUS) ================= */}
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
    </div>
  );
};

export default RevisiDokumenOrmawa;