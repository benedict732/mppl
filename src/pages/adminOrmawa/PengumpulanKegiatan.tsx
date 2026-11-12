import React, { useState } from 'react';
import { SidebarAdmin } from './components/SidebarAdmin';

export const PengumpulanKegiatan: React.FC = () => {

  const [pilihOrmawa, setPilihOrmawa] = useState('Badan Eksekutif Mahasiswa');
  const [tahunAkademik, setTahunAkademik] = useState('2026 / 2027');
  const [jenisDokumen, setJenisDokumen] = useState<'Proposal Kegiatan' | 'Laporan Kegiatan'>('Proposal Kegiatan');
  const [namaKegiatan, setNamaKegiatan] = useState('Seminar Kepemimpinan Mahasiswa 2026');
  const [lokasi, setLokasi] = useState('Aula utama kampus');
  const [tanggal, setTanggal] = useState('12 November 2026');
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  const handleReset = () => {
    setNamaKegiatan('');
    setLokasi('');
    setTanggal('');
    setUploadedFileName('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadedFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col font-sans text-gray-800 relative">
      <div className="flex flex-1">
        
        {/* ================= SIDEBAR KIRI (ORMAWA / MPM) ================= */}
        <SidebarAdmin currentMenu="pengumpulan" />

        {/* ================= KONTEN UTAMA SESUAI GAMBAR REFERENSI 2 ================= */}
        <main className="flex-1 p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Breadcrumb Header */}
            <div className="mb-6">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                Pengumpulan
              </p>
              <h1 className="text-base font-bold text-gray-900">
                Pengumpulan Proposal &amp; Laporan Kegiatan
              </h1>
            </div>

            {/* Header Judul Halaman & Subtitle */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Pengumpulan Proposal &amp; Laporan Kegiatan
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Ajukan proposal dan laporan kegiatan organisasi mahasiswa dalam satu tempat.
              </p>
            </div>

            {/* Filter Card Atas: Pilih Ormawa & Tahun Akademik */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Pilih Ormawa
                </label>
                <div className="relative">
                  <select 
                    value={pilihOrmawa}
                    onChange={(e) => setPilihOrmawa(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 cursor-pointer appearance-none pr-9"
                  >
                    <option value="Badan Eksekutif Mahasiswa">Badan Eksekutif Mahasiswa</option>
                    <option value="Badan Perwakilan Mahasiswa">Badan Perwakilan Mahasiswa</option>
                  </select>
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none">
                    ▼
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Tahun Akademik
                </label>
                <div className="relative">
                  <select 
                    value={tahunAkademik}
                    onChange={(e) => setTahunAkademik(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 cursor-pointer appearance-none pr-9"
                  >
                    <option value="2026 / 2027">2026 / 2027</option>
                    <option value="2025 / 2026">2025 / 2026</option>
                  </select>
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none">
                    ▼
                  </span>
                </div>
              </div>
            </div>

            {/* Layout 2 Kolom: Kiri (Detail Pengajuan) & Kanan (Informasi & Bantuan) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-start">
              
              {/* ================= KOLOM KIRI: FORM DETAIL PENGAJUAN ================= */}
              <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-5">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <h3 className="text-sm font-bold text-gray-900">Detail pengajuan</h3>
                  <span className="text-[11px] text-gray-400">* Wajib diisi</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {/* Jenis Dokumen */}
                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">
                      Jenis Dokumen <span className="text-blue-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Radio Proposal Kegiatan */}
                      <label 
                        onClick={() => setJenisDokumen('Proposal Kegiatan')}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition ${
                          jenisDokumen === 'Proposal Kegiatan'
                            ? 'border-blue-500 bg-blue-50/40 text-blue-900 font-semibold shadow-sm'
                            : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          jenisDokumen === 'Proposal Kegiatan' ? 'border-blue-600' : 'border-gray-400'
                        }`}>
                          {jenisDokumen === 'Proposal Kegiatan' && (
                            <div className="w-2 h-2 rounded-full bg-blue-600" />
                          )}
                        </div>
                        <span>Proposal Kegiatan</span>
                      </label>

                      {/* Radio Laporan Kegiatan */}
                      <label 
                        onClick={() => setJenisDokumen('Laporan Kegiatan')}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition ${
                          jenisDokumen === 'Laporan Kegiatan'
                            ? 'border-blue-500 bg-blue-50/40 text-blue-900 font-semibold shadow-sm'
                            : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          jenisDokumen === 'Laporan Kegiatan' ? 'border-blue-600' : 'border-gray-400'
                        }`}>
                          {jenisDokumen === 'Laporan Kegiatan' && (
                            <div className="w-2 h-2 rounded-full bg-blue-600" />
                          )}
                        </div>
                        <span>Laporan Kegiatan</span>
                      </label>
                    </div>
                  </div>

                  {/* Nama Kegiatan */}
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1.5">
                      Nama Kegiatan <span className="text-blue-500">*</span>
                    </label>
                    <input 
                      type="text"
                      required
                      value={namaKegiatan}
                      onChange={(e) => setNamaKegiatan(e.target.value)}
                      placeholder="Seminar Kepemimpinan Mahasiswa 2026"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 text-xs bg-white"
                    />
                  </div>

                  {/* Grid 2 Kolom: Lokasi & Tanggal Pelaksanaan */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-gray-700 mb-1.5">
                        Lokasi <span className="text-blue-500">*</span>
                      </label>
                      <div className="relative">
                        <input 
                          type="text"
                          required
                          value={lokasi}
                          onChange={(e) => setLokasi(e.target.value)}
                          placeholder="Aula utama kampus"
                          className="w-full pl-4 pr-10 py-2.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 text-xs bg-white"
                        />
                        <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                          📍
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-gray-700 mb-1.5">
                        Tanggal Pelaksanaan <span className="text-blue-500">*</span>
                      </label>
                      <div className="relative">
                        <input 
                          type="text"
                          required
                          value={tanggal}
                          onChange={(e) => setTanggal(e.target.value)}
                          placeholder="12 November 2026"
                          className="w-full pl-4 pr-10 py-2.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 text-xs bg-white"
                        />
                        <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                          📅
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Upload Dokumen Box (Dashed Area) */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="font-semibold text-gray-700">
                        Upload Dokumen <span className="text-blue-500">*</span>
                      </label>
                      <span className="text-[11px] text-gray-400">Maksimal 10 MB</span>
                    </div>

                    <div className="relative border-2 border-dashed border-blue-200 bg-blue-50/20 rounded-2xl p-7 text-center flex flex-col items-center justify-center hover:bg-blue-50/35 transition cursor-pointer">
                      <input 
                        type="file" 
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />
                      <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl mb-2.5 shadow-sm">
                        ☁️
                      </div>
                      <p className="text-xs text-gray-700 font-medium">
                        Seret dokumen ke sini atau <span className="text-blue-600 font-bold underline">pilih berkas</span>
                      </p>
                      <p className="text-[10px] text-gray-400 mt-1">
                        Format yang didukung: PDF, DOC, DOCX
                      </p>
                      {uploadedFileName && (
                        <p className="text-xs font-bold text-emerald-600 mt-2 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                          ✓ Berkas terpilih: {uploadedFileName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Tombol Aksi Hapus & Upload */}
                  <div className="flex justify-end gap-3 pt-4">
                    <button 
                      type="button"
                      onClick={handleReset}
                      className="flex items-center gap-1.5 px-5 py-2.5 bg-white border border-rose-200 text-rose-600 hover:bg-rose-50 rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
                    >
                      <span>🗑️</span>
                      <span>Hapus</span>
                    </button>
                    <button 
                      type="submit"
                      className="flex items-center gap-1.5 px-6 py-2.5 bg-[#1B437C] hover:bg-blue-900 text-white rounded-xl text-xs font-bold shadow-md transition cursor-pointer"
                    >
                      <span>⬆️</span>
                      <span>Upload</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* ================= KOLOM KANAN: INFORMASI & BUTUH BANTUAN SESUAI GAMBAR 2 ================= */}
              <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                <div>
                  {/* Ilustrasi Grafis Dokumen & Upload Badge */}
                  <div className="w-full py-6 flex items-center justify-center">
                    <div className="relative w-36 h-28 flex items-center justify-center">
                      {/* Background circular soft blue */}
                      <div className="absolute w-28 h-28 rounded-full bg-blue-50/80 -z-0"></div>
                      
                      {/* Ilustrasi Dokumen Kertas */}
                      <div className="relative z-10 w-20 h-24 bg-white rounded-lg shadow-md border border-blue-100 p-2.5 flex flex-col justify-between">
                        <div className="space-y-1.5">
                          <div className="w-8 h-1.5 bg-blue-600 rounded"></div>
                          <div className="w-14 h-1 bg-gray-200 rounded"></div>
                          <div className="w-12 h-1 bg-gray-200 rounded"></div>
                          <div className="w-10 h-1 bg-gray-200 rounded"></div>
                        </div>
                        <div className="w-full flex justify-end">
                          <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[8px] font-bold">
                            ✓
                          </div>
                        </div>
                      </div>

                      {/* Floating Upload Badge Lingkaran Biru */}
                      <div className="absolute bottom-1 right-3 z-20 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg text-xs font-bold">
                        ⬆️
                      </div>
                    </div>
                  </div>

                  {/* Judul Informasi */}
                  <h3 className="text-sm font-bold text-gray-900 mt-2">
                    Informasi
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                    Lengkapi pengajuan agar proses verifikasi dokumen berjalan lancar.
                  </p>

                  {/* Daftar Checklist Sesuai Gambar 2 */}
                  <div className="mt-4 space-y-3 text-xs text-gray-600">
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span className="text-[11px] leading-snug">
                        Gunakan format proposal atau laporan sesuai ketentuan kampus.
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span className="text-[11px] leading-snug">
                        Pastikan data kegiatan lengkap dan dokumen telah disetujui pembina.
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span className="text-[11px] leading-snug">
                        Periksa kembali berkas sebelum menekan tombol Upload.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Section Butuh Bantuan di Bawah */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-gray-900 mb-1">
                    Butuh bantuan?
                  </h4>
                  <p className="text-[11px] text-gray-500 mb-3">
                    Hubungi Biro Kemahasiswaan.
                  </p>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-blue-600 font-medium">
                      <span>✉️</span>
                      <a href="mailto:kemahasiswaan@kampus.ac.id" className="hover:underline text-[11px]">
                        [email resmi kampus]
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <span>📞</span>
                      <span className="text-[11px]">[nomor telepon kampus]</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* ================= FOOTER SI-BEO ================= */}
          <footer className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between gap-6 pb-6">
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

              <div className="space-y-1 text-xs">
                <p className="font-bold text-gray-800 text-xs mb-1.5">Kontak Kampus</p>
                <p className="text-gray-600">Email: <span className="text-blue-600 font-medium">[tempatkan email resmi]</span></p>
                <p className="text-gray-600">Telepon: <span className="text-blue-600 font-medium">[tempatkan nomor resmi]</span></p>
                <p className="text-gray-600">Lokasi: <span className="text-blue-600 font-medium">[tempatkan alamat resmi]</span></p>
              </div>
            </div>

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

      {/* Modal Sukses Pengajuan Dokumen */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>
            <h3 className="text-base font-bold text-gray-900">Dokumen Berhasil Diunggah!</h3>
            <p className="text-xs text-gray-500">
              {jenisDokumen} "{namaKegiatan}" untuk {pilihOrmawa} ({tahunAkademik}) telah dikirim dan tercatat dalam sistem.
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

export default PengumpulanKegiatan;
