import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// ================= AUTH =================
import LoginAdmin from './pages/biro/LoginAdmin';
import LoginOrmawa from './pages/adminOrmawa/LoginOrmawa';

// ================= HALAMAN VISITOR =================
import Beranda from './pages/visitor/Beranda';
import Beasiswa from './pages/visitor/Beasiswa';
import ProfilBeasiswa from './pages/visitor/ProfilBeasiswa';
import Ormawa from './pages/visitor/Ormawa';
import ProfilOrmawa from './pages/visitor/ProfilOrmawa';
import BeritaKegiatan from './pages/visitor/BeritaKegiatan';

// ================= HALAMAN BIRO KEMAHASISWAAN =================
import DashboardAdmin from './pages/biro/DashboardAdmin';
import DataPenerima from './pages/biro/DataBeasiswa/DataPenerima';
import DataCalonPenerima from './pages/biro/DataBeasiswa/DataCalonPenerima';
import KelolaDataMahasiswa from './pages/biro/DataBeasiswa/KelolaDataMahasiswa';
import DataAnggotaOrmawaBiro from './pages/biro/DataOrmawa';
import StrukturKepengurusanAdmin from './pages/biro/StrukturKepengurusanAdmin';
import ProposalLaporan from './pages/biro/ProposalLaporan';
import DetailLaporan from './pages/biro/DetailLaporan';
import PengumpulanBiro from './pages/biro/Pengumpulan';
import ManajemenAkun from './pages/biro/ManajemenAkun';
import RekapBeasiswa from './pages/biro/Rekapitulasi/Beasiswa';
import RekapOrmawa from './pages/biro/Rekapitulasi/Ormawa';
import EditProfil from './pages/biro/EditProfil';
import PengumumanBiro from './pages/biro/Pengumuman';

// ================= HALAMAN ADMIN ORMAWA =================
import DashboardOrmawa from './pages/adminOrmawa/DashboardOrmawa';
import DataAnggotaOrmawa from './pages/adminOrmawa/DataOrmawa';
import PengumumanOrmawa from './pages/adminOrmawa/PengumumanOrmawa';
import ProposalLaporanKegiatan from './pages/adminOrmawa/ProposalLaporanKegiatan';
import PengumpulanLaporanOrmawa from './pages/adminOrmawa/PengumpulanKegiatan';
import LaporanKegiatanOrmawa from './pages/adminOrmawa/LaporanKegiatan';
import DetailKegiatan from './pages/adminOrmawa/DetailKegiatan';
import RevisiDokumenOrmawa from './pages/adminOrmawa/RevisiDokumen';
import StrukturKepengurusanOrmawa from './pages/adminOrmawa/StrukturKepengurusanOrmawa';
import EditProfilOrmawa from './pages/adminOrmawa/EditProfil';

// ================= HALAMAN AKUN MPM =================
import MPMPengumpulanLaporan from './pages/adminOrmawa/MPMPengumpulanLaporan';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= HALAMAN VISITOR ================= */}
        <Route path="/" element={<Beranda />} />
        <Route path="/beasiswa" element={<Beasiswa />} />
        <Route path="/beasiswa/detail" element={<ProfilBeasiswa />} />
        <Route path="/ormawa" element={<Ormawa />} />
        <Route path="/ormawa/profil" element={<ProfilOrmawa />} />
        <Route path="/berita-kegiatan" element={<BeritaKegiatan />} />
        <Route path="/berita" element={<Navigate to="/berita-kegiatan" replace />} />

        {/* ================= AUTH ROUTES ================= */}
        <Route path="/biro/login" element={<LoginAdmin />} />
        <Route path="/ormawa/login" element={<LoginOrmawa />} />

        {/* ================= HAK AKSES: BIRO KEMAHASISWAAN ================= */}
        <Route path="/biro/dashboard" element={<DashboardAdmin />} />
        <Route path="/biro/beasiswa" element={<Navigate to="/biro/beasiswa/penerima" replace />} />
        <Route path="/biro/beasiswa/penerima" element={<DataPenerima />} />
        <Route path="/biro/beasiswa/calon" element={<DataCalonPenerima />} />
        <Route path="/biro/beasiswa/kelola" element={<KelolaDataMahasiswa />} />
        <Route path="/biro/ormawa" element={<DataAnggotaOrmawaBiro />} />
        <Route path="/biro/struktur" element={<StrukturKepengurusanAdmin />} />
        <Route path="/biro/proposal" element={<ProposalLaporan />} />
        <Route path="/biro/pengumpulan" element={<PengumpulanBiro />} />
        <Route path="/biro/detail-laporan" element={<DetailLaporan />} />
        <Route path="/biro/rekapitulasi" element={<Navigate to="/biro/rekapitulasi/beasiswa" replace />} />
        <Route path="/biro/rekapitulasi/beasiswa" element={<RekapBeasiswa />} />
        <Route path="/biro/rekapitulasi/ormawa" element={<RekapOrmawa />} />
        <Route path="/biro/manajemen-akun" element={<ManajemenAkun />} />
        <Route path="/biro/pengumuman" element={<PengumumanBiro />} />
        <Route path="/biro/edit-profil" element={<EditProfil />} />

        {/* ================= HAK AKSES: ADMIN ORMAWA ================= */}
        <Route path="/ormawa/dashboard" element={<DashboardOrmawa />} />
        <Route path="/ormawa/data-ormawa" element={<DataAnggotaOrmawa />} />
        <Route path="/ormawa/pengumuman" element={<PengumumanOrmawa />} />
        <Route path="/ormawa/proposal" element={<ProposalLaporanKegiatan />} />
        <Route path="/ormawa/pengumpulan" element={<PengumpulanLaporanOrmawa />} />
        <Route path="/ormawa/pengumpulan-laporan" element={<PengumpulanLaporanOrmawa />} />
        <Route path="/ormawa/pengumpulan-kegiatan" element={<PengumpulanLaporanOrmawa />} />
        <Route path="/ormawa/laporan-kegiatan" element={<LaporanKegiatanOrmawa />} />
        <Route path="/ormawa/detail-kegiatan" element={<DetailKegiatan />} />
        <Route path="/ormawa/revisi" element={<RevisiDokumenOrmawa />} />
        <Route path="/ormawa/struktur" element={<StrukturKepengurusanOrmawa />} />
        <Route path="/ormawa/edit-profil" element={<EditProfilOrmawa />} />

        {/* ================= HAK AKSES: AKUN MPM ================= */}
        <Route path="/mpm" element={<Navigate to="/mpm/dashboard" replace />} />
        <Route path="/mpm/dashboard" element={<DashboardOrmawa />} />
        <Route path="/mpm/data-ormawa" element={<DataAnggotaOrmawa />} />
        <Route path="/mpm/pengumuman" element={<PengumumanOrmawa />} />
        <Route path="/mpm/proposal" element={<ProposalLaporanKegiatan />} />
        <Route path="/mpm/pengumpulan" element={<PengumpulanLaporanOrmawa />} />
        <Route path="/mpm/pengumpulan-laporan" element={<MPMPengumpulanLaporan />} />
        <Route path="/mpm/detail-kegiatan" element={<DetailKegiatan />} />
        <Route path="/mpm/struktur" element={<StrukturKepengurusanOrmawa />} />
        <Route path="/mpm/revisi" element={<RevisiDokumenOrmawa />} />
        <Route path="/mpm/edit-profil" element={<EditProfilOrmawa />} />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/biro/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;