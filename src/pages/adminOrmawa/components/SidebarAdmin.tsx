import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

interface SidebarAdminProps {
  currentMenu?: string;
}

export const SidebarAdmin: React.FC<SidebarAdminProps> = ({ currentMenu }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Deteksi otomatis apakah pengguna berada pada akses akun MPM atau Ormawa
  const isMpm = location.pathname.startsWith('/mpm');
  const prefix = isMpm ? '/mpm' : '/ormawa';

  const handleLogout = () => {
    if (isMpm) {
      localStorage.removeItem('mpmToken');
    } else {
      localStorage.removeItem('ormawaToken');
    }
    navigate('/ormawa/login');
  };

  // Daftar menu yang disesuaikan berdasarkan peran
  const menuList = [
    { key: 'dashboard', label: 'Dashboard', path: `${prefix}/dashboard` },
    { key: 'data-ormawa', label: 'Data Ormawa', path: `${prefix}/data-ormawa` },
    { key: 'pengumuman', label: 'Pengumuman', path: `${prefix}/pengumuman` },
    { key: 'proposal', label: 'Proposal & Laporan', path: `${prefix}/proposal` },
    { key: 'pengumpulan', label: 'Pengumpulan Laporan', path: `${prefix}/pengumpulan` },
    { key: 'detail-kegiatan', label: 'Detail Kegiatan', path: `${prefix}/detail-kegiatan` },
    { key: 'struktur', label: 'Struktur Kepengurusan', path: `${prefix}/struktur` },
    { key: 'revisi', label: 'Revisi Dokumen', path: `${prefix}/revisi` },
  ];

  // Item ke-9 khusus: Untuk MPM adalah "Pengumpulan Proposal & Laporan BEM/BPM", untuk Ormawa adalah "Edit Profil"
  if (isMpm) {
    menuList.push({
      key: 'pengumpulan-laporan',
      label: 'Pengumpulan Proposal & Laporan BEM/BPM',
      path: '/mpm/pengumpulan-laporan',
    });
  } else {
    menuList.push({
      key: 'edit-profil',
      label: 'Edit Profil',
      path: `${prefix}/edit-profil`,
    });
  }

  const isItemActive = (item: { key: string; path: string }) => {
    if (currentMenu) {
      return currentMenu === item.key;
    }
    return location.pathname === item.path;
  };

  return (
    <aside className="w-64 bg-[#0B1E36] text-white flex flex-col justify-between p-4 shrink-0 min-h-screen">
      <div>
        {/* Header Identitas Sesuai Gambar: MPM / ORMAWA */}
        <div className="flex items-center gap-3 mb-8 px-2 pt-2">
          <img 
            src="/logo.jpg" 
            alt="Logo Kampus" 
            className="w-10 h-10 object-contain rounded-xl shrink-0 bg-white p-1 shadow-sm"
          />
          <div>
            <span className="text-xs font-black text-amber-400 tracking-wider uppercase block">
              {isMpm ? 'MPM' : 'ORMAWA'}
            </span>
            <span className="text-[11px] text-gray-400 block font-normal">
              Portal Manajemen
            </span>
          </div>
        </div>

        {/* Menu Navigasi Sesuai Referensi Gambar */}
        <nav className="space-y-1.5 text-xs">
          {menuList.map((item) => {
            const active = isItemActive(item);
            return (
              <Link
                key={item.key}
                to={item.path}
                className={`relative flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition duration-150 ${
                  active
                    ? 'bg-[#133E6D] text-white font-semibold shadow-md overflow-hidden'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {/* Indikator Kuning di Sisi Kiri untuk Menu Aktif */}
                {active && (
                  <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-400 rounded-l-xl" />
                )}
                
                {/* Bullet titik sesuai referensi screenshot */}
                <span className={`text-base leading-none ${active ? 'text-amber-400 font-bold' : 'text-gray-400'}`}>
                  •
                </span>
                
                <span className="leading-snug">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Tombol Logout */}
      <div className="pt-4 border-t border-gray-700/50 mt-6">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-3 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition shadow cursor-pointer"
        >
          <span>🚪</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default SidebarAdmin;

