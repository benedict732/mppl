import React, { useState } from 'react';
import { SidebarAdmin } from './components/SidebarAdmin';

export const StrukturKepengurusanOrmawa: React.FC = () => {

  const [showEditModal, setShowEditModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const handleOpenEdit = (bagian: string) => {
    setModalTitle(`Edit Bagian: ${bagian}`);
    setShowEditModal(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col font-sans text-gray-800 relative">
      <div className="flex flex-1">
        
        {/* ================= SIDEBAR KIRI (ORMAWA / MPM) ================= */}
        <SidebarAdmin currentMenu="struktur" />

        {/* ================= KONTEN UTAMA ================= */}
        <main className="flex-1 p-8 overflow-y-auto">
          
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                ORMAWA
              </p>
              <h1 className="text-xl font-bold text-gray-900">Universitas Nusantara</h1>
            </div>
            <div className="px-4 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold shadow-sm flex items-center gap-2">
              <span>📅</span> Periode 2026/2027
            </div>
          </div>

          {/* Banner Utama */}
          <div className="bg-gradient-to-r from-[#0B1E36] via-indigo-900 to-blue-900 text-white p-8 rounded-2xl shadow-sm mb-8 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
            <div className="space-y-2 z-10">
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                Kenali Tim Kami
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Struktur Kepengurusan</h2>
              <p className="text-xs text-blue-100 max-w-xl">
                Satu visi, banyak kolaborasi, bergerak untuk mahasiswa[cite: 20, 21].
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl text-center shrink-0 z-10 w-44">
              <p className="text-3xl font-extrabold text-amber-300">24</p>
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-200 mt-0.5">Pengurus aktif</p>
              <p className="text-[9px] text-gray-300 mt-1">T.A. 2026-2027</p>
            </div>
          </div>

          {/* Bagian Bagan Organisasi */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm mb-8 space-y-8">
            <div className="flex justify-between items-center border-b pb-4">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Bagan Organisasi</h3>
                <p className="text-xs text-gray-500 mt-0.5">Kenali peran dan divisi yang bekerja bersama dalam satu kepengurusan[cite: 20, 21].</p>
              </div>
              <button 
                onClick={() => handleOpenEdit('Keseluruhan Kepengurusan')}
                className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-bold rounded-xl shadow-sm transition flex items-center gap-2 cursor-pointer"
              >
                <span>✏️</span> Edit Kepengurusan
              </button>
            </div>

            {/* Struktur Bagan Hirarki */}
            <div className="flex flex-col items-center space-y-6 py-4">
              
              {/* 1. Pembina Organisasi */}
              <div className="w-full max-w-sm bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm flex items-center justify-between relative">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center font-bold text-sm">
                    👤
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Pembina Organisasi</p>
                    <p className="text-[11px] text-gray-500">Dr. Nama Pembina, M.Si.</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleOpenEdit('Pembina Organisasi')}
                  className="p-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition cursor-pointer"
                  title="Edit Pembina"
                >
                  ✏️
                </button>
              </div>

              <div className="w-0.5 h-6 bg-gray-300"></div>

              {/* 2. Ketua Umum */}
              <div className="w-full max-w-sm bg-blue-50/50 border border-blue-200 rounded-xl p-4 shadow-sm flex items-center justify-between relative">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm shadow">
                    ⭐
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-bold text-gray-900">Ketua Umum</p>
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded text-[9px] font-bold">LEADER</span>
                    </div>
                    <p className="text-[11px] text-gray-500">Nama Ketua Umum</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleOpenEdit('Ketua Umum')}
                  className="p-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition cursor-pointer"
                  title="Edit Ketua Umum"
                >
                  ✏️
                </button>
              </div>

              <div className="w-0.5 h-6 bg-gray-300"></div>

              {/* 3. Wakil Ketua */}
              <div className="w-full max-w-sm bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm flex items-center justify-between relative">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-indigo-100 text-indigo-700 rounded-lg flex items-center justify-center font-bold text-sm">
                    👥
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Wakil Ketua</p>
                    <p className="text-[11px] text-gray-500">Nama Wakil Ketua</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleOpenEdit('Wakil Ketua')}
                  className="p-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition cursor-pointer"
                  title="Edit Wakil Ketua"
                >
                  ✏️
                </button>
              </div>

              <div className="w-0.5 h-6 bg-gray-300"></div>

              {/* 4. Sekretaris & Bendahara */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm flex items-center justify-between relative">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center font-bold text-xs">
                      📄
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Sekretaris</p>
                      <p className="text-[11px] text-gray-500">Nama Sekretaris</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleOpenEdit('Sekretaris')}
                    className="p-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition cursor-pointer"
                    title="Edit Sekretaris"
                  >
                    ✏️
                  </button>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm flex items-center justify-between relative">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center font-bold text-xs">
                      💰
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Bendahara</p>
                      <p className="text-[11px] text-gray-500">Nama Bendahara</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleOpenEdit('Bendahara')}
                    className="p-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition cursor-pointer"
                    title="Edit Bendahara"
                  >
                    ✏️
                  </button>
                </div>
              </div>

              <div className="w-0.5 h-6 bg-gray-300"></div>

              {/* 5. Kartu Divisi-Divisi dengan Logo Pensil di Pojok Kanan Atas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full pt-2">
                
                {/* Divisi PSDM */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm space-y-2 relative hover:shadow-md transition">
                  <div className="flex justify-between items-start">
                    <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg text-sm font-bold">💡</span>
                    <button 
                      onClick={() => handleOpenEdit('Divisi PSDM')}
                      className="p-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition cursor-pointer"
                      title="Edit Divisi PSDM"
                    >
                      ✏️
                    </button>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Divisi PSDM</h4>
                    <p className="text-[10px] text-gray-500 mt-0.5">Pengembangan sumber daya mahasiswa[cite: 20, 21].</p>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-[9px] text-gray-400 uppercase font-bold">Koordinator</p>
                    <p className="text-[11px] font-semibold text-gray-800">Nama Koordinator</p>
                  </div>
                </div>

                {/* Divisi Kominfo */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm space-y-2 relative hover:shadow-md transition">
                  <div className="flex justify-between items-start">
                    <span className="p-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-bold">📢</span>
                    <button 
                      onClick={() => handleOpenEdit('Divisi Kominfo')}
                      className="p-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition cursor-pointer"
                      title="Edit Divisi Kominfo"
                    >
                      ✏️
                    </button>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Divisi Kominfo</h4>
                    <p className="text-[10px] text-gray-500 mt-0.5">Komunikasi, informasi, dan media[cite: 20, 21].</p>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-[9px] text-gray-400 uppercase font-bold">Koordinator</p>
                    <p className="text-[11px] font-semibold text-gray-800">Nama Koordinator</p>
                  </div>
                </div>

                {/* Divisi Minat & Bakat */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm space-y-2 relative hover:shadow-md transition">
                  <div className="flex justify-between items-start">
                    <span className="p-2 bg-amber-50 text-amber-600 rounded-lg text-sm font-bold">🎨</span>
                    <button 
                      onClick={() => handleOpenEdit('Divisi Minat & Bakat')}
                      className="p-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition cursor-pointer"
                      title="Edit Divisi Minat & Bakat"
                    >
                      ✏️
                    </button>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Divisi Minat & Bakat</h4>
                    <p className="text-[10px] text-gray-500 mt-0.5">Wadah kreativitas dan potensi mahasiswa[cite: 20, 21].</p>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-[9px] text-gray-400 uppercase font-bold">Koordinator</p>
                    <p className="text-[11px] font-semibold text-gray-800">Nama Koordinator</p>
                  </div>
                </div>

                {/* Divisi Advokasi */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm space-y-2 relative hover:shadow-md transition">
                  <div className="flex justify-between items-start">
                    <span className="p-2 bg-rose-50 text-rose-600 rounded-lg text-sm font-bold">⚖️</span>
                    <button 
                      onClick={() => handleOpenEdit('Divisi Advokasi')}
                      className="p-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition cursor-pointer"
                      title="Edit Divisi Advokasi"
                    >
                      ✏️
                    </button>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Divisi Advokasi</h4>
                    <p className="text-[10px] text-gray-500 mt-0.5">Aspirasi dan kesejahteraan mahasiswa[cite: 20, 21].</p>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-[9px] text-gray-400 uppercase font-bold">Koordinator</p>
                    <p className="text-[11px] font-semibold text-gray-800">Nama Koordinator</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Quote Box Bawah */}
            <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <span className="text-emerald-600 font-bold text-base">✓</span>
                <div>
                  <p className="font-bold text-emerald-900">Bersama, kita bertumbuh.</p>
                  <p className="text-[11px] text-emerald-700">Setiap divisi punya peran penting untuk mewujudkan organisasi yang inklusif dan berdampak.</p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-emerald-800 hidden sm:block">#KolaborasiUntukMahasiswa</span>
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

      {/* Modal Edit */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-sm font-bold text-gray-900">{modalTitle}</h3>
              <button onClick={() => setShowEditModal(false)} className="text-gray-400 hover:text-gray-600 font-bold cursor-pointer">✕</button>
            </div>
            <p className="text-xs text-gray-500">Formulir untuk memperbarui nama pejabat atau pengurus di posisi ini.</p>
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-gray-700 mb-1">Nama Pejabat / Pengurus</label>
                <input type="text" placeholder="Masukkan nama..." className="w-full p-2.5 border rounded-lg outline-none" />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-3 border-t">
              <button onClick={() => setShowEditModal(false)} className="px-4 py-2 bg-gray-200 rounded-lg font-bold text-xs cursor-pointer">Batal</button>
              <button onClick={() => { alert('Perubahan disimpan!'); setShowEditModal(false); }} className="px-5 py-2 bg-[#1B437C] text-white rounded-lg font-bold text-xs cursor-pointer">Simpan</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StrukturKepengurusanOrmawa;