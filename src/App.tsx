import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// ================= AUTH =================
import LoginAdmin from './pages/biro/LoginAdmin';
import LoginOrmawa from './pages/adminOrmawa/LoginOrmawa';

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
import PengumpulanLaporanOrmawa from './pages/adminOrmawa/PengumpulanKegiatan';
import LaporanKegiatanOrmawa from './pages/adminOrmawa/LaporanKegiatan';
import DetailKegiatan from './pages/adminOrmawa/DetailKegiatan';
import RevisiDokumenOrmawa from './pages/adminOrmawa/RevisiDokumen';
import StrukturKepengurusanOrmawa from './pages/adminOrmawa/StrukturKepengurusanOrmawa';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= AUTH ROUTES ================= */}
        <Route path="/biro/login" element={<LoginAdmin />} />
        <Route path="/ormawa/login" element={<LoginOrmawa />} />
        <Route path="/" element={<Navigate to="/biro/login" replace />} />

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
        <Route path="/ormawa/pengumpulan" element={<PengumpulanLaporanOrmawa />} />
        <Route path="/ormawa/laporan-kegiatan" element={<LaporanKegiatanOrmawa />} />
        <Route path="/ormawa/detail-kegiatan" element={<DetailKegiatan />} />
        <Route path="/ormawa/revisi" element={<RevisiDokumenOrmawa />} />
        <Route path="/ormawa/struktur" element={<StrukturKepengurusanOrmawa />} />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/biro/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;