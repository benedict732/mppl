import React, { useState } from 'react';
import { SidebarAdmin } from './components/SidebarAdmin';

interface DokumenItem {
  id: number;
  kegiatan: string;
  dokumen: 'Proposal' | 'Laporan';
  tahunAkademik: string;
  status: 'Menunggu' | 'Revisi' | 'Disetujui';
  tanggalPengajuan: string;
  catatan?: string;
  fileUrl: string;
}

export const ProposalLaporanKegiatan: React.FC = () => {
  const [tahunAkademik, setTahunAkademik] = useState('2026/2027');

  const [daftarDokumen] = useState<DokumenItem[]>([
    {
      id: 1,
      kegiatan: 'Bakti Sosial',
      dokumen: 'Proposal',
      tahunAkademik: '2026/2027',
      status: 'Menunggu',
      tanggalPengajuan: '14 Oktober 2026',
      catatan: 'Dokumen sedang dalam antrean verifikasi oleh Biro Kemahasiswaan.',
      fileUrl: 'Proposal_Bakti_Sosial_2026.pdf',
    },
    {
      id: 2,
      kegiatan: 'Pekan Seni',
      dokumen: 'Laporan',
      tahunAkademik: '2026/2027',
      status: 'Revisi',
      tanggalPengajuan: '20 Oktober 2026',
      catatan: 'Perlu melampirkan bukti kuitansi konsumsi dan daftar presensi peserta.',
      fileUrl: 'LPJ_Pekan_Seni_2026.pdf',
    },
    {
      id: 3,
      kegiatan: 'Seminar Kepemimpinan Mahasiswa',
      dokumen: 'Proposal',
      tahunAkademik: '2026/2027',
      status: 'Disetujui',
      tanggalPengajuan: '05 September 2026',
      catatan: 'Proposal telah disetujui. Silakan lanjut ke tahap pencairan dana.',
      fileUrl: 'Proposal_Seminar_Kepemimpinan.pdf',
    },
    {
      id: 4,
      kegiatan: 'Festival Olahraga Kampus',
      dokumen: 'Laporan',
      tahunAkademik: '2026/2027',
      status: 'Disetujui',
      tanggalPengajuan: '28 September 2026',
      catatan: 'Laporan pertanggungjawaban lengkap dan memenuhi syarat.',
      fileUrl: 'LPJ_Festival_Olahraga.pdf',
    },
  ]);

  const [selectedDokumen, setSelectedDokumen] = useState<DokumenItem | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handlePeriksa = (item: DokumenItem) => {
    setSelectedDokumen(item);
    setShowModal(true);
  };

  const filteredDokumen = daftarDokumen.filter(
    (item) => item.tahunAkademik === tahunAkademik
  );

  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col font-sans text-gray-800 relative">
      <div className="flex flex-1">
        
        {/* ================= SIDEBAR KIRI (ORMAWA / MPM) ================= */}
        <SidebarAdmin currentMenu="proposal" />

        {/* ================= KONTEN UTAMA ================= */}
        <main className="flex-1 p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Breadcrumb Header */}
            <div className="mb-6">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                LAPORAN / VERIFIKASI
              </p>
              <h1 className="text-xl font-bold text-gray-900">
                Proposal &amp; Laporan
              </h1>
            </div>

            {/* Judul & Subjudul Halaman */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Proposal &amp; Laporan Kegiatan
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Periksa dokumen yang dikirim ormawa dan pantau status pengumpulan.
              </p>
            </div>

            {/* Card Filter Tahun Akademik */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-6">
              <label className="block text-[11px] font-bold text-gray-700 mb-2">
                Tahun akademik
              </label>
              <div className="max-w-xs">
                <select
                  value={tahunAkademik}
                  onChange={(e) => setTahunAkademik(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-medium text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-sm transition"
                >
                  <option value="2026/2027">2026/2027</option>
                  <option value="2025/2026">2025/2026</option>
                  <option value="2024/2025">2024/2025</option>
                </select>
              </div>
            </div>

            {/* Card Tabel Daftar Dokumen */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
              <h3 className="text-sm font-bold text-gray-900 mb-4">
                Daftar dokumen
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      <th className="py-3 px-4">KEGIATAN</th>
                      <th className="py-3 px-4">DOKUMEN</th>
                      <th className="py-3 px-4">TAHUN AKADEMIK</th>
                      <th className="py-3 px-4 text-center">STATUS</th>
                      <th className="py-3 px-4 text-right">AKSI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 text-xs">
                    {filteredDokumen.length > 0 ? (
                      filteredDokumen.map((doc) => (
                        <tr key={doc.id} className="hover:bg-gray-50/60 transition">
                          <td className="py-3.5 px-4 font-bold text-gray-900">
                            {doc.kegiatan}
                          </td>
                          <td className="py-3.5 px-4 text-gray-600">
                            {doc.dokumen}
                          </td>
                          <td className="py-3.5 px-4 text-gray-500">
                            {doc.tahunAkademik}
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            {doc.status === 'Menunggu' && (
                              <span className="inline-block px-3 py-1 bg-amber-100/80 text-amber-800 text-[11px] font-semibold rounded-full">
                                Menunggu
                              </span>
                            )}
                            {doc.status === 'Revisi' && (
                              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-[11px] font-semibold rounded-full">
                                Revisi
                              </span>
                            )}
                            {doc.status === 'Disetujui' && (
                              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-[11px] font-semibold rounded-full">
                                Disetujui
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <button
                              onClick={() => handlePeriksa(doc)}
                              className="text-blue-600 hover:text-blue-800 font-bold text-xs cursor-pointer transition underline-offset-2 hover:underline"
                            >
                              Periksa
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="py-8 text-center text-gray-400">
                          Tidak ada dokumen untuk tahun akademik {tahunAkademik}.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* ================= FOOTER SI-BEO ================= */}
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

      {/* ================= MODAL DETAIL PEMERIKSAAN DOKUMEN ================= */}
      {showModal && selectedDokumen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <h3 className="text-base font-bold text-gray-900">Detail Pemeriksaan Dokumen</h3>
                <p className="text-xs text-gray-500">{selectedDokumen.kegiatan}</p>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Jenis Dokumen</span>
                  <span className="font-semibold text-gray-800">{selectedDokumen.dokumen}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Tahun Akademik</span>
                  <span className="font-semibold text-gray-800">{selectedDokumen.tahunAkademik}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Tanggal Pengajuan</span>
                  <span className="font-semibold text-gray-800">{selectedDokumen.tanggalPengajuan}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Status Saat Ini</span>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                    selectedDokumen.status === 'Disetujui' ? 'bg-emerald-100 text-emerald-700' :
                    selectedDokumen.status === 'Revisi' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {selectedDokumen.status}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-gray-600 font-bold mb-1">Catatan Verifikator</label>
                <div className="p-3 bg-blue-50/50 border border-blue-100 rounded-xl text-gray-700 leading-relaxed">
                  {selectedDokumen.catatan || 'Belum ada catatan khusus.'}
                </div>
              </div>

              <div>
                <label className="block text-gray-600 font-bold mb-1">Berkas Terlampir</label>
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition">
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">📄</span>
                    <span className="font-medium text-gray-800">{selectedDokumen.fileUrl}</span>
                  </div>
                  <button 
                    onClick={() => alert(`Mengunduh berkas: ${selectedDokumen.fileUrl}`)}
                    className="px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded-lg text-[11px] transition cursor-pointer"
                  >
                    Unduh File
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-3 border-t">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold transition cursor-pointer"
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

export default ProposalLaporanKegiatan;
