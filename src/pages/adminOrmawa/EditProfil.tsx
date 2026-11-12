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

            {/* Form Edit Profil (6 Kartu Sesuai Gambar 1) */}
            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
              
              {/* 1. Informasi Utama */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
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
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 font-medium text-gray-800 transition"
                    placeholder="Nama organisasi mahasiswa..."
                  />
                </div>
              </div>

              {/* 2. Tentang Organisasi */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
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
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 transition"
                    placeholder="Deskripsi singkat organisasi..."
                  />
                </div>
              </div>

              {/* 3. Visi dan Misi */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
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
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 transition"
                    placeholder="Visi dan misi organisasi..."
                  />
                </div>
              </div>

              {/* 4. Bidang / Departemen */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
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
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 transition"
                    placeholder="Daftar divisi/bidang/departemen..."
                  />
                </div>
              </div>

              {/* 5. Informasi Organisasi */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
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
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 transition"
                    placeholder="Contoh: Universitas - Tahun Kepengurusan 2026/2027"
                  />
                </div>
              </div>

              {/* 6. Kontak Pengurus & Informasi Bergabung */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
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
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 transition"
                    placeholder="Kontak, narahubung, atau info registrasi..."
                  />
                </div>
              </div>

              {/* Tombol Aksi Kanan Bawah */}
              <div className="flex justify-end items-center gap-3 pt-2">
                <button 
                  type="button" 
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-bold rounded-xl shadow-sm transition cursor-pointer"
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

          {/* ================= FOOTER SI-BEO (SESUAI GAMBAR 1) ================= */}
          <footer className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between gap-6 pb-6">
              {/* Sisi Kiri: Logo & Deskripsi SI-BEO */}
              <div className="flex items-start gap-3 max-w-lg">
                <div className="w-10 h-10 rounded-xl bg-[#1B437C] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="18" r="2.5" />
                    <circle cx="18" cy="6" r="2.5" />
                    <path d="M7.5 16.5 L16.5 7.5" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-extrabold text-sm text-gray-900 tracking-tight">SI-BEO</span>
                    <span className="text-[10px] text-gray-500">Sistem Informasi Beasiswa dan Organisasi Mahasiswa</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                    Platform informasi beasiswa dan organisasi kemahasiswaan untuk memudahkan pencarian peluang dan pengembangan diri di kampus.
                  </p>
                </div>
              </div>

              {/* Sisi Kanan: Kontak Kampus */}
              <div className="space-y-1 text-xs">
                <p className="font-bold text-gray-800 text-xs mb-1.5">Kontak Kampus</p>
                <p className="text-gray-600">Email: <span className="text-blue-600 font-medium">[tempatkan email resmi]</span></p>
                <p className="text-gray-600">Telepon: <span className="text-blue-600 font-medium">[tempatkan nomor resmi]</span></p>
                <p className="text-gray-600">Lokasi: <span className="text-blue-600 font-medium">[tempatkan alamat resmi]</span></p>
              </div>
            </div>

            {/* Baris Bawah: Hak Cipta & Link Bantuan */}
            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-[10px] text-gray-400 gap-2">
              <p>© 2026 SIMPUL · Satu Akses, Beragam Peluang.</p>
              <div className="flex items-center gap-4">
                <span className="hover:text-gray-600 cursor-pointer">Konten program ilustratif</span>
                <span>•</span>
                <span className="hover:text-gray-600 cursor-pointer">Pusat bantuan</span>
                <span>•</span>
                <span className="hover:text-gray-600 cursor-pointer">Kebijakan privasi</span>
              </div>
            </div>
          </footer>
        </main>

      </div>

      {/* Modal Notifikasi Sukses Simpan */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center space-y-4 animate-in fade-in zoom-in duration-200">
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

