import React, { useState } from 'react';
import { Shield, Eye, EyeOff, User, Lock, GraduationCap, Users } from 'lucide-react';

export const LoginOrmawa: React.FC = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      const isMpm = identifier.toLowerCase().includes('mpm') || password === 'mpm123';
      const isOrmawa = password === 'ormawa123';

      if (isMpm) {
        localStorage.setItem('mpmToken', 'mpm-token');
        window.location.href = '/mpm/pengumpulan-laporan';
      } else if (isOrmawa && identifier.trim().length > 0) {
        localStorage.setItem('ormawaToken', 'ormawa-token');
        window.location.href = '/ormawa/dashboard';
      } else {
        setError('Email/username atau kata sandi tidak valid. Gunakan sandi: ormawa123 (Ormawa) atau mpm123 (MPM)');
        setLoading(false);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[580px]">
        
        {/* SISI KIRI: FORM LOGIN ORMAWA */}
        <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-between relative bg-white order-1">
          <div className="absolute top-6 left-6 md:left-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100">
              <Shield className="w-3.5 h-3.5" />
              Akses administrator ormawa
            </span>
          </div>

          <div className="flex flex-col items-center mt-8">
            <img
              src="/logo.jpg" 
              alt="Logo Kampus"
              className="w-24 h-24 object-contain mb-6"
            />

            <h3 className="text-2xl font-bold text-gray-800">Login Ormawa &amp; MPM</h3>
            <p className="text-xs text-gray-500 mt-1">
              Masuk untuk mengelola kegiatan ormawa atau pengawasan laporan MPM.
            </p>

            {error && (
              <div className="w-full mt-4 p-3 bg-red-50 text-red-600 text-xs rounded-lg border border-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="w-full mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email atau username
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="Masukkan email atau username"
                    className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Kata sandi
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan kata sandi (ormawa123 / mpm123)"
                    className="w-full pl-9 pr-10 py-2.5 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs rounded-lg shadow transition duration-200 mt-2"
              >
                {loading ? 'Memproses...' : 'Login'}
              </button>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-[11px] text-gray-600 space-y-1">
                <p className="font-semibold text-gray-700">Akun Pengujian Demo:</p>
                <div className="flex flex-wrap gap-2 text-[10px]">
                  <span className="bg-blue-100/70 text-blue-800 px-2 py-0.5 rounded">
                    Ormawa: sandi <code className="font-mono font-bold">ormawa123</code>
                  </span>
                  <span className="bg-amber-100/70 text-amber-800 px-2 py-0.5 rounded">
                    MPM: sandi <code className="font-mono font-bold">mpm123</code>
                  </span>
                </div>
              </div>
            </form>
          </div>

          <div className="flex justify-between items-center text-[10px] text-gray-400 border-t border-gray-100 pt-4 mt-8">
            <span>© 2026 SI-BEO</span>
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3" /> Hanya untuk pengelola berwenang
            </span>
          </div>
        </div>

        {/* SISI KANAN: PANEL INFORMASI ORMAWA */}
        <div className="w-full md:w-5/12 bg-[#1B437C] text-white p-8 flex flex-col justify-between order-2">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-wide">SI-BEO</span>
            </div>

            <div className="mt-4 border-t border-blue-400/30 pt-4">
              <p className="text-xs font-semibold text-blue-200 tracking-wider uppercase">
                RUANG ADMINISTRASI
              </p>
              <h1 className="text-lg font-bold">Organisasi Mahasiswa</h1>
            </div>

            <div className="mt-10">
              <div className="w-8 h-1 bg-amber-400 mb-4 rounded-full"></div>
              <h2 className="text-2xl font-bold leading-tight">
                Kolaborasi aktif, transparansi laporan kegiatan.
              </h2>
              <p className="text-sm text-blue-100 mt-3 leading-relaxed">
                Kelola proposal, laporan kegiatan, serta data anggota organisasi dengan terarah dan terintegrasi langsung.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-blue-400/30">
            <div className="flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold">Pengajuan & Laporan</p>
                <p className="text-[11px] text-blue-200">Unggah proposal dan pertanggungjawaban</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold">Manajemen Anggota</p>
                <p className="text-[11px] text-blue-200">Pendataan struktur dan kepengurusan</p>
              </div>
            </div>

            <p className="text-[10px] text-blue-300 italic pt-2">Satu Akses, Beragam Peluang.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginOrmawa;