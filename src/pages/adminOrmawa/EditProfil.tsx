import React, { useState } from 'react';
import { SidebarAdmin } from './components/SidebarAdmin';

export const EditProfilOrmawa: React.FC = () => {

  const initialData = {
    namaOrmawa: 'BEM Universitas',
    deskripsi: 'Gambaran umum, tujuan, dan peran organisasi mahasiswa.',
    visiMisi: 'Visi organisasi dan misi yang menjadi arah kepengurusan.',
    bidangDepartemen: 'Nama bidang/departemen beserta deskripsi singkat tugasnya.',
    lingkupTahun: 'Universitas - Tahun Kepengurusan 2026/2027',
    kontakBergabung: 'Email organisasi, narahubung, dan informasi pendaftaran anggota.',
  };

  const [formData, setFormData] = useState(initialData);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  const handleReset = () => {
    setFormData(initialData);
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col font-sans text-gray-800 relative">
      <div className="flex flex-1">
        
        {/* ================= SIDEBAR KIRI (ORMAWA / MPM) ================= */}
        <SidebarAdmin currentMenu="edit-profil" />

        {/* ================= KONTEN UTAMA ================= */}
        <main className="flex-1 p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Breadcrumb & Header Title */}
            <div className="mb-6">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                PROFIL / EDIT
              </p>
              <h1 className="text-xl font-bold text-gray-900">
                Edit Profil Ormawa
              </h1>
            </div>

            {/* Sub-judul Halaman */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Edit Profil Ormawa
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Sesuaikan informasi profil organisasi yang ditampilkan kepada visitor.
              </p>
            </div>

            {/* Form Edit Profil (6 Kartu dengan GLASSMORPHISM) */}
            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
              
              {/* 1. Informasi Utama */}
              <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-sm">
                <h3 className="text-sm font-bold text-gray-900 mb-1">
                  Informasi Utama
                </h3>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    NAMA ORMAWA
                  </label>
                  <input 
                    type="text" 
                    name="namaOrmawa"
                    value={formData.namaOrmawa}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white/90 border border-gray-200/80 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 font-medium text-gray-800 transition"
                    placeholder="Nama organisasi mahasiswa..."
                  />
                </div>
              </div>

              {/* 2. Tentang Organisasi */}
              <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-sm">
                <h3 className="text-sm font-bold text-gray-900 mb-1">
                  Tentang Organisasi
                </h3>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    DESKRIPSI ORGANISASI
                  </label>
                  <input 
                    type="text" 
                    name="deskripsi"
                    value={formData.deskripsi}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white/90 border border-gray-200/80 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 transition"
                    placeholder="Deskripsi singkat organisasi..."
                  />
                </div>
              </div>

              {/* 3. Visi dan Misi */}
              <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-sm">
                <h3 className="text-sm font-bold text-gray-900 mb-1">
                  Visi dan Misi
                </h3>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    VISI &amp; MISI
                  </label>
                  <input 
                    type="text" 
                    name="visiMisi"
                    value={formData.visiMisi}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white/90 border border-gray-200/80 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 transition"
                    placeholder="Visi dan misi organisasi..."
                  />
                </div>
              </div>

              {/* 4. Bidang / Departemen */}
              <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-sm">
                <h3 className="text-sm font-bold text-gray-900 mb-1">
                  Bidang / Departemen
                </h3>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    DAFTAR BIDANG ATAU DEPARTEMEN
                  </label>
                  <input 
                    type="text" 
                    name="bidangDepartemen"
                    value={formData.bidangDepartemen}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white/90 border border-gray-200/80 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 transition"
                    placeholder="Daftar divisi/bidang/departemen..."
                  />
                </div>
              </div>

              {/* 5. Informasi Organisasi */}
              <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-sm">
                <h3 className="text-sm font-bold text-gray-900 mb-1">
                  Informasi Organisasi
                </h3>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    LINGKUP / TAHUN KEPENGURUSAN
                  </label>
                  <input 
                    type="text" 
                    name="lingkupTahun"
                    value={formData.lingkupTahun}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white/90 border border-gray-200/80 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 transition"
                    placeholder="Contoh: Universitas - Tahun Kepengurusan 2026/2027"
                  />
                </div>
              </div>

              {/* 6. Kontak Pengurus & Informasi Bergabung */}
              <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-sm">
                <h3 className="text-sm font-bold text-gray-900 mb-1">
                  Kontak Pengurus &amp; Informasi Bergabung
                </h3>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    KONTAK / CARA BERGABUNG
                  </label>
                  <input 
                    type="text" 
                    name="kontakBergabung"
                    value={formData.kontakBergabung}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white/90 border border-gray-200/80 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 transition"
                    placeholder="Kontak, narahubung, atau info registrasi..."
                  />
                </div>
              </div>

              {/* Tombol Aksi Kanan Bawah */}
              <div className="flex justify-end items-center gap-3 pt-2">
                <button 
                  type="button" 
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-white/90 border border-gray-200/80 hover:bg-white text-gray-700 text-xs font-bold rounded-xl shadow-sm transition cursor-pointer"
                >
                  Batal
                </button>
                <button 
                  type="submit" 
                  className="px-6 py-2.5 bg-[#1B437C] hover:bg-blue-900 text-white text-xs font-bold rounded-xl shadow transition cursor-pointer"
                >
                  Simpan Perubahan
                </button>
              </div>

            </form>
          </div>

          {/* ================= FOOTER SI-BEO (TANPA BLOK KONTAK KAMPUS) ================= */}
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

      {/* Modal Notifikasi Sukses Simpan */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center space-y-4 animate-in fade-in zoom-in duration-200 border border-gray-100">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>
            <h3 className="text-base font-bold text-gray-900">Perubahan Disimpan!</h3>
            <p className="text-xs text-gray-500">
              Informasi profil organisasi mahasiswa berhasil diperbarui dan siap ditampilkan kepada visitor.
            </p>
            <div className="pt-2">
              <button 
                onClick={() => setShowSuccessModal(false)}
                className="w-full px-5 py-2.5 bg-[#1B437C] hover:bg-blue-900 text-white rounded-xl text-xs font-bold shadow transition cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default EditProfilOrmawa;