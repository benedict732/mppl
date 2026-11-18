import React, { useState, useEffect } from 'react';

interface BeasiswaDetail {
  nama: string;
  instansi: string;
  deskripsi: string;
  persyaratan: string[];
  manfaat: string[];
  caraMendaftar: string[];
  informasiKontak: string;
}

const masterBeasiswaData: Record<string, BeasiswaDetail> = {
  "KIP Kuliah": {
    nama: "Kartu Indonesia Pintar Kuliah (KIP Kuliah 2026)",
    instansi: "Puslapdik Kemendikbudristek RI",
    deskripsi: "KIP Kuliah adalah program bantuan sosial pemerintah berupa pembebasan biaya kuliah dan pemberian uang saku bulanan guna menjamin keberlanjutan studi mahasiswa dari keluarga berpenghasilan rendah.",
    persyaratan: [
      "Siswa SMA/SMK/MA sederajat yang lulus pada tahun berjalan atau maksimal 2 tahun sebelumnya.",
      "Terdaftar sebagai mahasiswa aktif tahun akademik 2026/2027.",
      "Memiliki Kartu KIP / terdata dalam DTKS Kementerian Sosial atau bukti keterangan penghasilan keluarga.",
      "Memiliki potensi akademik baik dan lolos seleksi penerimaan mahasiswa baru."
    ],
    manfaat: [
      "Pembebasan biaya kuliah (UKT) 100% langsung ke rekening universitas.",
      "Bantuan biaya hidup bulanan yang disalurkan per semester.",
      "Pendampingan dan pembinaan berkala dari Biro Kemahasiswaan."
    ],
    caraMendaftar: [
      "Mengunggah berkas melalui Gform yang dibagikan Biro Kemahasiswaan.",
      "Setelah dinyatakan lolos seleksi mengumpulkan hard file di ruangan Biro Kemahasiswaan.",
      "Setelah itu dilakukan seleksi wawancara dan penandatanganan surat pernyataan.",
      "Penentuan Penerima Beasiswa KIP Kuliah.",
      "Pengusulan ke pihak pengelola beasiswa (Pemerintah)."
    ],
    informasiKontak: "Periode pendaftaran dibuka awal semester ganjil. Narahubung: Biro Kemahasiswaan (Gedung Rektorat Lt. 1)."
  },
  "VDMI": {
    nama: "Beasiswa Van Deventer-Maas Indonesia (VDMI)",
    instansi: "Yayasan Van Deventer-Maas Stichting",
    deskripsi: "Beasiswa internasional yang mendanai mahasiswa berprestasi dari latar belakang keluarga sederhana dengan komitmen sosial tinggi.",
    persyaratan: [
      "Mahasiswa aktif jenjang S1/D4 minimal semester 2 hingga semester 6.",
      "IPK minimal 3.00 pada semester terakhir.",
      "Berasal dari keluarga kurang mampu secara finansial.",
      "Aktif dalam kegiatan kemahasiswaan atau sosial kemasyarakatan."
    ],
    manfaat: [
      "Tunjangan dana pendidikan bulanan sebesar Rp 750.000,-.",
      "Pelatihan kepemimpinan, workshop kewirausahaan, dan kursus bahasa Inggris.",
      "Bonus kelulusan tepat waktu."
    ],
    caraMendaftar: [
      "Mendapatkan informasi melalui promosi, flyer digital di media sosial dan Biro Kemahasiswaan.",
      "Mengunggah berkas pendaftaran melalui link resmi dari pihak pengelola Beasiswa VDMI.",
      "Setelah dinyatakan lolos seleksi awal, mengumpulkan hard file di ruangan Biro Kemahasiswaan.",
      "Menerima hasil lulus seleksi dari pihak pengelola dilanjutkan pengumuman resmi."
    ],
    informasiKontak: "Pendaftaran online dibuka setiap awal tahun akademik. Narahubung: Staf Layanan Beasiswa VDMI Kampus."
  },
  "Bank Indonesia": {
    nama: "Beasiswa Prestasi Generasi Baru Indonesia (GenBI)",
    instansi: "Kantor Perwakilan Bank Indonesia",
    deskripsi: "Program beasiswa unggulan Bank Indonesia untuk membentuk calon pemimpin masa depan yang berintegritas dan siap mengabdi bagi negeri.",
    persyaratan: [
      "Telah menyelesaikan minimal 40 SKS dengan IPK minimal 3.00 (skala 4.00).",
      "Usia maksimal 23 tahun pada saat mendaftar.",
      "Tidak sedang menerima beasiswa lain atau berada dalam ikatan dinas.",
      "Menulis esai motivasi dan resume portofolio prestasi."
    ],
    manfaat: [
      "Dana beasiswa sebesar Rp 1.000.000,- per bulan selama satu tahun kepengurusan.",
      "Keanggotaan resmi komunitas GenBI dengan akses ke program leadership camp BI.",
      "Peluang magang di lingkungan Kantor Perwakilan Bank Indonesia."
    ],
    caraMendaftar: [
      "Mendapatkan informasi melalui promosi penerimaan mahasiswa baru dan flyer digital.",
      "Mengumpulkan berkas pendaftaran secara langsung di Biro Kemahasiswaan.",
      "Ketika dinyatakan lulus berkas, dilanjutkan dengan seleksi wawancara oleh pihak pengurus Bank Indonesia.",
      "Menunggu pengumuman kelulusan seleksi akhir."
    ],
    informasiKontak: "Informasi resmi dikoordinasikan melalui Kantor Perwakilan Bank Indonesia setempat dan Biro Kemahasiswaan."
  }
};

export const EditProfil: React.FC = () => {
  const [isBeasiswaOpen, setIsBeasiswaOpen] = useState(false);

  const [selectedBeasiswaKey, setSelectedBeasiswaKey] = useState<string>("KIP Kuliah");
  const [formData, setFormData] = useState<BeasiswaDetail>(masterBeasiswaData["KIP Kuliah"]);

  // State untuk Pop-up Konfirmasi Logout
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  useEffect(() => {
    if (masterBeasiswaData[selectedBeasiswaKey]) {
      setFormData(masterBeasiswaData[selectedBeasiswaKey]);
    }
  }, [selectedBeasiswaKey]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/biro/login';
  };

  const handleArrayChange = (field: 'persyaratan' | 'manfaat' | 'caraMendaftar', index: number, value: string) => {
    const updated = [...formData[field]];
    updated[index] = value;
    setFormData({ ...formData, [field]: updated });
  };

  const handleAddItem = (field: 'persyaratan' | 'manfaat' | 'caraMendaftar') => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  const handleRemoveItem = (field: 'persyaratan' | 'manfaat' | 'caraMendaftar', index: number) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus poin ini?");
    if (confirmDelete) {
      const updated = formData[field].filter((_, i) => i !== index);
      setFormData({ ...formData, [field]: updated });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Informasi untuk beasiswa "${selectedBeasiswaKey}" berhasil diperbarui!`);
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col font-sans text-gray-800 relative">
      <div className="flex flex-1">
        
        {/* SIDEBAR KIRI */}
        <aside className="w-64 bg-[#0B1E36] text-white flex flex-col justify-between p-4 shrink-0">
          <div>
            <div className="flex items-center gap-3 mb-6 px-2 pt-2">
              <img 
                src="/logo.jpg" 
                alt="Logo Kampus" 
                className="w-9 h-9 object-contain rounded-lg shrink-0 bg-white p-0.5 shadow"
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
                  className="w-full flex items-center justify-between px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg text-left transition cursor-pointer"
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

              <a href="/biro/agenda-kegiatan" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📅</span>
                <span>Agenda & Kegiatan</span>
              </a>

              <a href="/biro/proposal" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>📄</span>
                <span>Proposal & Laporan</span>
              </a>

              <a href="/biro/manajemen-akun" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>👤</span>
                <span>Manajemen Akun</span>
              </a>
              <a href="/biro/edit-profil" className="flex items-center gap-3 px-3 py-2.5 bg-blue-600/30 text-blue-300 font-semibold rounded-lg transition">
                <span>✏️</span>
                <span>Ubah Informasi Beasiswa</span>
              </a>
              <a href="/biro/struktur" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition">
                <span>🌿</span>
                <span>Struktur Kepengurusan</span>
              </a>
            </nav>
          </div>

          <div className="pt-4 border-t border-gray-700/50">
            <button 
              onClick={() => setIsLogoutModalOpen(true)}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold transition cursor-pointer"
            >
              <span>🚪</span>
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* AREA KONTEN UTAMA */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="mb-6">
            <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">BEASISWA / UBAH INFORMASI</p>
            <h1 className="text-2xl font-bold text-gray-900 mt-0.5">Ubah Informasi Beasiswa</h1>
            <p className="text-xs text-gray-500 mt-0.5">Pilih program beasiswa dan sesuaikan informasi profil yang ditampilkan kepada visitor.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 mb-8">
            
            {/* INFORMASI UTAMA */}
            <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-3">Informasi Utama</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">PILIH PROGRAM BEASISWA</label>
                  <select 
                    value={selectedBeasiswaKey} 
                    onChange={(e) => setSelectedBeasiswaKey(e.target.value)} 
                    className="w-full px-4 py-2 border border-gray-200/80 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 font-medium text-gray-800 bg-white/90 cursor-pointer"
                  >
                    <option value="KIP Kuliah">KIP Kuliah</option>
                    <option value="VDMI">VDMI</option>
                    <option value="Bank Indonesia">Bank Indonesia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">NAMA LENGKAP / JUDUL PROGRAM</label>
                  <input 
                    type="text" 
                    value={formData.nama} 
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })} 
                    className="w-full px-4 py-2 border border-gray-200/80 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 font-medium text-gray-800 bg-white/90" 
                  />
                </div>
              </div>
            </div>

            {/* TENTANG BEASISWA */}
            <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-3">Tentang Beasiswa</h3>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">DESKRIPSI</label>
                <input 
                  type="text"
                  value={formData.deskripsi} 
                  onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })} 
                  className="w-full px-4 py-2 border border-gray-200/80 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 bg-white/90" 
                />
              </div>
            </div>

            {/* PERSYARATAN UMUM */}
            <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-sm space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold text-gray-900">Persyaratan Umum</h3>
                <button
                  type="button"
                  onClick={() => handleAddItem('persyaratan')}
                  className="px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-[11px] font-bold cursor-pointer transition"
                >
                  + Tambah Poin
                </button>
              </div>

              <div className="space-y-2">
                {formData.persyaratan.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-6 text-center text-xs font-bold text-gray-500">{index + 1}.</span>
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => handleArrayChange('persyaratan', index, e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-200/80 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white/90"
                      placeholder={`Persyaratan ${index + 1}...`}
                    />
                    {formData.persyaratan.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveItem('persyaratan', index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg text-xs font-bold cursor-pointer transition"
                        title="Hapus poin"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* BENEFIT BEASISWA */}
            <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-sm space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold text-gray-900">Benefit Beasiswa</h3>
                <button
                  type="button"
                  onClick={() => handleAddItem('manfaat')}
                  className="px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-[11px] font-bold cursor-pointer transition"
                >
                  + Tambah Poin
                </button>
              </div>

              <div className="space-y-2">
                {formData.manfaat.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-6 text-center text-xs font-bold text-gray-500">{index + 1}.</span>
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => handleArrayChange('manfaat', index, e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-200/80 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white/90"
                      placeholder={`Benefit ${index + 1}...`}
                    />
                    {formData.manfaat.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveItem('manfaat', index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg text-xs font-bold cursor-pointer transition"
                        title="Hapus poin"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CARA MENDAFTAR */}
            <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-sm space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold text-gray-900">Cara Mendaftar</h3>
                <button
                  type="button"
                  onClick={() => handleAddItem('caraMendaftar')}
                  className="px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-[11px] font-bold cursor-pointer transition"
                >
                  + Tambah Tahap
                </button>
              </div>

              <div className="space-y-2">
                {formData.caraMendaftar.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-6 text-center text-xs font-bold text-gray-500">{index + 1}.</span>
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => handleArrayChange('caraMendaftar', index, e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-200/80 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white/90"
                      placeholder={`Langkah ${index + 1}...`}
                    />
                    {formData.caraMendaftar.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveItem('caraMendaftar', index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg text-xs font-bold cursor-pointer transition"
                        title="Hapus tahap"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* INFORMASI PENDAFTARAN & KONTAK */}
            <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-3">Informasi Pendaftaran & Kontak</h3>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">PERIODE / NARAHUBUNG</label>
                <input 
                  type="text" 
                  value={formData.informasiKontak} 
                  onChange={(e) => setFormData({ ...formData, informasiKontak: e.target.value })} 
                  className="w-full px-4 py-2 border border-gray-200/80 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 bg-white/90" 
                />
              </div>
            </div>

            <div className="flex justify-end items-center gap-3 pt-4">
              <button type="button" onClick={() => window.location.href = '/biro/dashboard'} className="px-6 py-2.5 border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-xl cursor-pointer">Batal</button>
              <button type="submit" className="px-6 py-2.5 bg-[#0B2545] hover:bg-[#133763] text-white text-xs font-semibold rounded-xl shadow-sm cursor-pointer">Simpan Perubahan</button>
            </div>
          </form>

          {/* FOOTER BAWAH */}
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

      {/* ================= MODAL KONFIRMASI LOGOUT ================= */}
      {isLogoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 text-center animate-in fade-in zoom-in duration-200 border border-gray-100">
            <div className="my-3 flex justify-center">
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-2xl font-black border-4 border-red-50">
                🚪
              </div>
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-1">Konfirmasi Keluar</h4>
            <p className="text-xs text-gray-500 mb-5 px-2">
              Apakah Anda yakin ingin keluar dari sesi admin <br />
              <span className="font-bold text-gray-800">Biro Kemahasiswaan SI-BEO</span>?
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setIsLogoutModalOpen(false)} 
                className="py-2.5 border border-gray-300 text-gray-700 text-xs font-semibold rounded-xl hover:bg-gray-50 cursor-pointer transition"
              >
                Batal
              </button>
              <button 
                onClick={handleLogout} 
                className="py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-xl shadow cursor-pointer transition"
              >
                Ya, Keluar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default EditProfil;