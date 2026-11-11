import React from "react";
 
/* ===================== Types ===================== */
interface MenuItem {
  label: string;
  active?: boolean;
  hasArrow?: boolean;
}
 
interface StatCard {
  label: string;
  value: number;
  note: string;
  color: string;
}
 
type StatusProposal = "Menunggu" | "Revisi";
 
interface DokumenTerbaru {
  kegiatan: string;
  tanggal: string;
  ormawa: string;
  jenis: "Proposal" | "Laporan";
  status: StatusProposal;
}
 
interface AksesCepat {
  judul: string;
  deskripsi: string;
}
 
interface PengingatLaporan {
  kegiatan: string;
  tahunAkademik: string;
  status: string;
}
 
/* ===================== Data ===================== */
const menuItems: MenuItem[] = [
  { label: "Dashboard", active: true },
  { label: "Data Beasiswa" },
  { label: "Data Ormawa" },
  { label: "Pengumuman" },
  { label: "Proposal & Laporan" },
  { label: "Rekapitulasi"},
  { label: "Manajemen Akun", hasArrow: true},
];
 
const stats: StatCard[] = [
  { label: "Total Penerima Beasiswa", value: 128, note: "Data dummy", color: "#1f5fa8" },
  { label: "Laporan selesai", value: 12, note: "Data dummy", color: "#f0b429" },
  { label: "Laporan menunggu", value: 8, note: "Perlu diperiksa", color: "#e8a317" },
  { label: "Pengumuman", value: 5, note: "Data dummy", color: "#2f8f6b" },
];
 
const dokumenTerbaru: DokumenTerbaru[] = [
  { kegiatan: "Bakti Sosial", tanggal: "12/12/2026", ormawa: "BEM", jenis: "Proposal", status: "Menunggu" },
  { kegiatan: "Pekan Seni", tanggal: "2/12/2026", ormawa: "UKM Seni", jenis: "Laporan", status: "Revisi" },
  { kegiatan: "Seminar Karier", tanggal: "2/11/2026", ormawa: "HIMA", jenis: "Proposal", status: "Menunggu" },
];
 
const aksesCepat: AksesCepat[] = [
  { judul: "Data beasiswa", deskripsi: "Kelola data mahasiswa" },
  { judul: "Data ormawa", deskripsi: "Anggota & struktur" },
  { judul: "Pengumuman", deskripsi: "Informasi beasiswa/kegiatan" },
  { judul: "Rekapitulasi", deskripsi: "Khusus Kepala Biro" },
];
 
const pengingat: PengingatLaporan[] = [
  { kegiatan: "Seminar Karier", tahunAkademik: "08 - 10 - 2026", status: "Belum dikumpulkan" },
  { kegiatan: "Pekan Seni", tahunAkademik: "05 - 09 - 2026", status: "Belum dikumpulkan" },
];
 
/* ===================== Icons ===================== */
const ArrowIcon: React.FC = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1f5fa8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
 
const ChevronRight: React.FC = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
 
const ChevronDown: React.FC = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
 
const LogoutIcon: React.FC = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);
 
const EmblemIcon: React.FC = () => (
  <svg width="26" height="26" viewBox="0 0 32 32">
    <path d="M16 2 L28 7 V16 C28 23 22 28 16 30 C10 28 4 23 4 16 V7 Z" fill="#2f8f6b" stroke="#f0b429" strokeWidth="2" />
    <circle cx="16" cy="15" r="5" fill="#f0b429" />
  </svg>
);
 
const SiBeoIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="6" r="2" />
    <path d="M7.5 16.5 L16.5 7.5" />
  </svg>
);
 
/* ===================== Styles ===================== */
const css = `
.da-root { font-family: 'Inter', 'Segoe UI', Arial, sans-serif; color:#1e293b; background:#f4f6fb; min-height:100vh; display:flex; flex-direction:column; font-size:11px; }
.da-top { display:flex; flex:1; }
 
/* Sidebar */
.da-sidebar { width:130px; flex-shrink:0; background:#12365f; color:#fff; display:flex; flex-direction:column; padding:12px 8px; min-height:535px; }
.da-brand { display:flex; align-items:center; gap:8px; padding:0 4px 12px; border-bottom:1px solid rgba(255,255,255,.12); }
.da-brand-title { font-weight:700; font-size:10px; line-height:1.2; }
.da-brand-sub { font-size:8px; opacity:.8; }
.da-menu { list-style:none; margin:10px 0 0; padding:0; display:flex; flex-direction:column; gap:6px; }
.da-menu-item { position:relative; display:flex; align-items:center; gap:10px; padding:10px 10px; border-radius:4px; font-size:10px; cursor:pointer; }
.da-menu-item.active { background:rgba(255,255,255,.12); }
.da-menu-item.active::before { content:''; position:absolute; left:-8px; top:0; bottom:0; width:3px; background:#f0b429; }
.da-dot { width:6px; height:6px; border-radius:50%; background:#fff; flex-shrink:0; }
.da-menu-arrow { position:absolute; left:-4px; font-size:9px; }
.da-spacer { flex:1; }
.da-logout { align-self:flex-start; display:flex; align-items:center; gap:5px; background:#e11d2e; color:#fff; border:none; border-radius:4px; padding:4px 10px; font-size:10px; font-weight:700; cursor:pointer; margin:0 0 4px 30px; }
 
/* Main */
.da-main { flex:1; min-width:0; display:flex; flex-direction:column; }
.da-header { background:#fff; display:flex; justify-content:space-between; align-items:center; padding:8px 16px; border-bottom:1px solid #e5e9f2; }
.da-crumb { font-size:7px; color:#64748b; letter-spacing:.2px; }
.da-header-title { font-size:13px; font-weight:700; }
.da-header-right { font-size:12px; }
.da-content { padding:16px 16px 12px; display:flex; flex-direction:column; gap:14px; }
 
.da-welcome { display:flex; justify-content:space-between; align-items:flex-start; }
.da-welcome h1 { margin:0; font-size:19px; font-weight:700; }
.da-welcome p { margin:4px 0 0; font-size:9px; color:#64748b; }
.da-select { display:flex; align-items:center; justify-content:space-between; width:80px; border:1px solid #cbd5e1; background:#fff; border-radius:5px; padding:6px 8px; font-size:10px; font-weight:600; }
 
.da-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:8px; }
.da-stat { background:#fff; border:1px solid #e5e9f2; border-left-width:3px; border-radius:5px; padding:10px 10px 8px; height:62px; box-sizing:border-box; }
.da-stat-label { font-size:8px; font-weight:600; color:#334155; }
.da-stat-value { font-size:20px; font-weight:700; line-height:1.1; margin-top:4px; }
.da-stat-note { font-size:8px; color:#64748b; }
 
.da-grid { display:grid; grid-template-columns:1fr 222px; gap:12px; }
.da-card { background:#fff; border:1px solid #e5e9f2; border-radius:8px; padding:14px; }
.da-card-head { display:flex; justify-content:space-between; align-items:flex-start; }
.da-card-title { font-size:12px; font-weight:700; margin:0; }
.da-card-sub { font-size:8px; color:#64748b; margin-top:3px; }
.da-btn-outline { background:#fff; border:1px solid #cbd5e1; border-radius:5px; padding:7px 16px; font-size:9px; font-weight:700; cursor:pointer; color:#1e293b; }
 
.da-table { width:100%; border-collapse:collapse; margin-top:14px; }
.da-table th { background:#f1f3f9; text-align:left; font-size:7px; font-weight:700; color:#475569; padding:7px 8px; letter-spacing:.3px; }
.da-table td { font-size:8.5px; padding:11px 8px; border-bottom:1px solid #e5e9f2; color:#334155; }
.da-table td.kegiatan { font-weight:700; text-decoration:underline; color:#1e293b; }
.da-table tbody tr:last-child td { border-bottom:1px solid #e5e9f2; }
 
.da-badge { display:inline-block; font-size:7px; font-weight:700; padding:3px 12px; border-radius:20px; }
.da-badge.menunggu { background:#fdecc0; color:#8a5a00; }
.da-badge.revisi { background:#dbe6f8; color:#1f4f9c; }
.da-badge.belum { background:#fde1e1; color:#b42318; padding:3px 14px; }
 
.da-quick { display:flex; flex-direction:column; gap:7px; margin-top:20px; }
.da-quick-item { display:flex; align-items:center; gap:8px; background:#f1f3f9; border-radius:5px; padding:8px; cursor:pointer; }
.da-quick-icon { width:18px; height:18px; border-radius:4px; background:#dbe6f8; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.da-quick-text { flex:1; }
.da-quick-title { font-size:8.5px; font-weight:700; }
.da-quick-desc { font-size:7px; color:#64748b; margin-top:1px; }
 
.da-reminder { margin:0 16px 12px; }
.da-reminder .da-table th, .da-reminder .da-table td { padding-left:14px; }
.da-reminder .da-table th.center, .da-reminder .da-table td.center { text-align:center; }
.da-reminder .da-table td { border-bottom:1px solid #e5e9f2; padding-top:9px; padding-bottom:9px; }
 
/* Footer */
.da-footer { background:#fff; border-top:1px solid #e5e9f2; padding:14px 50px 10px; }
.da-footer-top { display:flex; gap:40px; }
.da-footer-brand { width:180px; }
.da-footer-logo { display:flex; align-items:center; gap:8px; }
.da-footer-logo-box { width:24px; height:24px; background:#12365f; border-radius:5px; display:flex; align-items:center; justify-content:center; }
.da-footer-logo-title { font-size:12px; font-weight:700; color:#12365f; }
.da-footer-logo-sub { font-size:6.5px; color:#475569; }
.da-footer-desc { font-size:9px; color:#475569; margin:8px 0 0; line-height:1.5; }
.da-contact { width:120px; font-size:8px; }
.da-contact h4 { margin:0 0 6px; font-size:8px; font-weight:700; }
.da-contact p { margin:0 0 6px; line-height:1.4; }
.da-contact b { color:#1f5fa8; font-weight:700; }
.da-footer-bottom { display:flex; justify-content:space-between; font-size:7px; color:#475569; border-top:1px solid #e5e9f2; margin-top:22px; padding-top:10px; }
.da-footer-links span + span::before { content:' · '; }
`;
 
/* ===================== Component ===================== */
const DashboardAdmin: React.FC = () => {
  return (
    <div className="da-root">
      <style>{css}</style>
 
      <div className="da-top">
        {/* ---------- Sidebar ---------- */}
        <aside className="da-sidebar">
          <div className="da-brand">
            <EmblemIcon />
            <div>
              <div className="da-brand-title">KEMAHASISWAAN</div>
              <div className="da-brand-sub">Portal Manajemen</div>
            </div>
          </div>
 
          <ul className="da-menu">
            {menuItems.map((item) => (
              <li key={item.label} className={`da-menu-item${item.active ? " active" : ""}`}>
                {item.hasArrow && <span className="da-menu-arrow">›</span>}
                <span className="da-dot" />
                {item.label}
              </li>
            ))}
          </ul>
 
          <div className="da-spacer" />
 
          <button className="da-logout" type="button">
            <LogoutIcon />
            Logout
          </button>
        </aside>
 
        {/* ---------- Main ---------- */}
        <div className="da-main">
          <header className="da-header">
            <div>
              <div className="da-crumb">PORTAL / DASHBOARD</div>
              <div className="da-header-title">Dashboard Staf Biro</div>
            </div>
            <div className="da-header-right">1</div>
          </header>
 
          <div className="da-content">
            <div className="da-welcome">
              <div>
                <h1>Selamat datang, Admin</h1>
                <p>Kelola data beasiswa, ormawa, pengumuman, dan laporan kegiatan.</p>
              </div>
              <div className="da-select">
                <span>2026/2027</span>
                <ChevronDown />
              </div>
            </div>
 
            <div className="da-stats">
              {stats.map((s) => (
                <div key={s.label} className="da-stat" style={{ borderLeftColor: s.color }}>
                  <div className="da-stat-label">{s.label}</div>
                  <div className="da-stat-value">{s.value}</div>
                  <div className="da-stat-note">{s.note}</div>
                </div>
              ))}
            </div>
 
            <div className="da-grid">
              {/* Proposal & laporan terbaru */}
              <section className="da-card">
                <div className="da-card-head">
                  <div>
                    <h2 className="da-card-title">Proposal &amp; laporan terbaru</h2>
                    <div className="da-card-sub">Dokumen yang membutuhkan tindak lanjut</div>
                  </div>
                  <button className="da-btn-outline" type="button">Lihat semua</button>
                </div>
 
                <table className="da-table">
                  <thead>
                    <tr>
                      <th>KEGIATAN</th>
                      <th>TANGGAL</th>
                      <th>ORMAWA</th>
                      <th>JENIS</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dokumenTerbaru.map((d) => (
                      <tr key={d.kegiatan}>
                        <td className="kegiatan">{d.kegiatan}</td>
                        <td>{d.tanggal}</td>
                        <td>{d.ormawa}</td>
                        <td>{d.jenis}</td>
                        <td>
                          <span className={`da-badge ${d.status.toLowerCase()}`}>{d.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
 
              {/* Akses cepat */}
              <section className="da-card">
                <h2 className="da-card-title">Akses cepat</h2>
                <div className="da-quick">
                  {aksesCepat.map((a) => (
                    <div key={a.judul} className="da-quick-item">
                      <span className="da-quick-icon"><ArrowIcon /></span>
                      <div className="da-quick-text">
                        <div className="da-quick-title">{a.judul}</div>
                        <div className="da-quick-desc">{a.deskripsi}</div>
                      </div>
                      <ChevronRight />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
 
          {/* Pengingat laporan kegiatan */}
          <section className="da-card da-reminder">
            <h2 className="da-card-title">Pengingat laporan kegiatan</h2>
            <div className="da-card-sub">Ormawa yang belum mengirimkan laporan setelah kegiatan selesai</div>
 
            <table className="da-table">
              <thead>
                <tr>
                  <th>KEGIATAN</th>
                  <th className="center">TAHUN AKADEMIK</th>
                  <th className="center">STATUS LAPORAN</th>
                </tr>
              </thead>
              <tbody>
                {pengingat.map((p) => (
                  <tr key={p.kegiatan}>
                    <td>{p.kegiatan}</td>
                    <td className="center">{p.tahunAkademik}</td>
                    <td className="center">
                      <span className="da-badge belum">{p.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
 
      {/* ---------- Footer ---------- */}
      <footer className="da-footer">
        <div className="da-footer-top">
          <div className="da-footer-brand">
            <div className="da-footer-logo">
              <div className="da-footer-logo-box"><SiBeoIcon /></div>
              <div>
                <div className="da-footer-logo-title">SI-BEO</div>
                <div className="da-footer-logo-sub">Sistem Informasi Beasiswa dan Organisasi Mahasiswa</div>
              </div>
            </div>
            <p className="da-footer-desc">
              Platform informasi beasiswa dan organisasi kemahasiswaan untuk memudahkan pencarian peluang dan pengembangan diri di kampus.
            </p>
          </div>
 
          <div className="da-contact">
            <h4>Kontak Kampus</h4>
            <p>Email: <b>[tempatkan email resmi]</b></p>
            <p>Telepon: <b>[tempatkan nomor resmi]</b></p>
            <p>Lokasi: <b>[tempatkan alamat resmi]</b></p>
          </div>
        </div>
 
        <div className="da-footer-bottom">
          <span>© 2026 SIMPUL · Satu Akses, Beragam Peluang.</span>
          <span className="da-footer-links">
            <span>Konten program ilustratif</span>
            <span>Pusat bantuan</span>
            <span>Kebijakan privasi</span>
          </span>
        </div>
      </footer>
    </div>
  );
};
 
export default DashboardAdmin