import React from "react";

/* ===================== Types ===================== */
interface NavItem {
  label: string;
  active?: boolean;
}

interface KegiatanCard {
  judul: string;
  deskripsi: string;
}

/* ===================== Data ===================== */
const navItems: NavItem[] = [
  { label: "Beranda" },
  { label: "Beasiswa" },
  { label: "Ormawa", active: true },
  { label: "Berita & Kegiatan" },
];

const kegiatan: KegiatanCard[] = [
  { judul: "Bakti Sosial Mahasiswa", deskripsi: "Pengumuman kegiatan dan informasi pelaksanaan." },
  { judul: "Pekan Seni Kampus", deskripsi: "Kabar kegiatan dan organisasi mahasiswa." },
  { judul: "Seminar Karier", deskripsi: "Informasi acara dan pengumuman terbaru." },
];

/* ===================== Icons ===================== */
const EmblemIcon: React.FC = () => (
  <svg width="26" height="26" viewBox="0 0 32 32">
    <path d="M16 2 L28 7 V16 C28 23 22 28 16 30 C10 28 4 23 4 16 V7 Z" fill="#2f8f6b" stroke="#f0b429" strokeWidth="2" />
    <circle cx="16" cy="15" r="5" fill="#f0b429" />
  </svg>
);

const LogoutIcon: React.FC = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
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
.or-root { font-family: 'Inter', 'Segoe UI', Arial, sans-serif; color:#1e293b; background:#f4f6fb; min-height:100vh; display:flex; flex-direction:column; font-size:11px; }

/* Navbar */
.or-nav { background:#fff; height:42px; display:flex; align-items:center; justify-content:space-between; padding:0 24px; border-bottom:1px solid #e5e9f2; position:relative; }
.or-logo { display:flex; align-items:center; gap:10px; }
.or-logo-small { font-size:6px; color:#475569; letter-spacing:.3px; }
.or-logo-title { font-size:9px; font-weight:700; color:#12365f; }
.or-nav-links { position:absolute; left:50%; transform:translateX(-30%); display:flex; gap:28px; font-size:8px; color:#334155; }
.or-nav-links .active { font-weight:700; color:#12365f; }
.or-logout { display:flex; align-items:center; gap:5px; background:#e11d2e; color:#fff; border:none; border-radius:5px; padding:4px 10px; font-size:8px; font-weight:700; cursor:pointer; }

/* Hero */
.or-hero { background:#12365f; padding:24px 34px; display:flex; align-items:center; justify-content:space-between; min-height:195px; }
.or-hero-left { max-width:300px; }
.or-eyebrow { font-size:6.5px; font-weight:700; color:#f0b429; margin-bottom:10px; }
.or-hero h1 { margin:0; font-size:19px; line-height:1.28; font-weight:700; color:#fff; }
.or-hero p { margin:12px 0 0; font-size:8.5px; line-height:1.6; color:#e2e8f0; }
.or-hero-btns { display:flex; gap:12px; margin-top:14px; align-items:center; }
.or-btn-ghost { background:transparent; color:#fff; border:none; font-size:7.5px; font-weight:700; padding:8px 14px; cursor:pointer; }
.or-btn-light { background:#fff; color:#12365f; border:none; border-radius:5px; font-size:7.5px; font-weight:700; padding:8px 16px; cursor:pointer; }
.or-hero-art { width:274px; height:158px; background:#1f5f96; border-radius:12px; position:relative; flex-shrink:0; margin-right:30px; }
.or-art-roof { position:absolute; left:40px; top:35px; width:176px; height:20px; background:#ebbb50; border-radius:2px; }
.or-art-body { position:absolute; left:27px; top:55px; width:218px; height:80px; background:#dce7f3; border-radius:4px; display:flex; gap:8px; padding:0 10px; box-sizing:border-box; }
.or-art-col { flex:1; background:#fff; margin-top:5px; border-radius:2px; }
.or-art-col.narrow { flex:0 0 10px; }
.or-art-base { position:absolute; left:20px; top:135px; width:234px; height:5px; background:#ebbb50; border-radius:3px; }

/* Section */
.or-section { padding:16px 34px 14px; background:#f4f6fb; }
.or-section h2 { margin:0; font-size:13px; font-weight:700; }
.or-section .sub { margin:4px 0 0; font-size:8px; color:#64748b; }
.or-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:9px; margin-top:12px; }

.or-card { background:#fff; border:1px solid #e5e9f2; border-top:4px solid #ebbb50; border-radius:6px; padding:8px 8px 8px; height:150px; box-sizing:border-box; display:flex; flex-direction:column; }
.or-card h3 { margin:0; font-size:8.5px; font-weight:700; }
.or-img { height:48px; background:#e5e5e5; border:1px solid #1e293b; border-radius:6px; margin-top:5px; }
.or-card p { margin:4px 0 0; font-size:6px; color:#64748b; flex:1; }
.or-card a { font-size:6.5px; font-weight:700; color:#1f5fa8; text-decoration:none; }

/* Footer */
.or-footer { background:#fff; padding:14px 34px 10px; }
.or-footer-top { display:flex; gap:40px; }
.or-footer-brand { width:180px; }
.or-footer-logo { display:flex; align-items:center; gap:8px; }
.or-footer-logo-box { width:24px; height:24px; background:#12365f; border-radius:5px; display:flex; align-items:center; justify-content:center; }
.or-footer-logo-title { font-size:11px; font-weight:700; color:#12365f; }
.or-footer-logo-sub { font-size:6px; color:#475569; }
.or-footer-desc { font-size:8.5px; color:#475569; margin:8px 0 0; line-height:1.5; }
.or-contact { width:130px; font-size:7.5px; }
.or-contact h4 { margin:0 0 6px; font-size:7.5px; font-weight:700; }
.or-contact p { margin:0 0 6px; line-height:1.4; }
.or-contact b { color:#1f5fa8; font-weight:700; }
.or-footer-bottom { display:flex; justify-content:space-between; font-size:6.5px; color:#475569; border-top:1px solid #e5e9f2; margin-top:18px; padding-top:10px; }
.or-footer-links span + span::before { content:' · '; }
`;

/* ===================== Component ===================== */
const Ormawa: React.FC = () => {
  return (
    <div className="or-root">
      <style>{css}</style>

      {/* ---------- Navbar ---------- */}
      <header className="or-nav">
        <div className="or-logo">
          <EmblemIcon />
          <div>
            <div className="or-logo-small">UNIVERSITAS</div>
            <div className="or-logo-title">PORTAL KEMAHASISWAAN</div>
          </div>
        </div>
        <nav className="or-nav-links">
          {navItems.map((n) => (
            <span key={n.label} className={n.active ? "active" : undefined}>
              {n.label}
            </span>
          ))}
        </nav>
        <button className="or-logout" type="button">
          <LogoutIcon />
          Logout
        </button>
      </header>

      {/* ---------- Hero ---------- */}
      <section className="or-hero">
        <div className="or-hero-left">
          <div className="or-eyebrow">PORTAL KEMAHASISWAAN</div>
          <h1>Kembangkan Potensimu Lewat Beasiswa &amp; Organisasi Mahasiswa</h1>
          <p>Informasi beasiswa, organisasi, dan kegiatan mahasiswa dalam satu portal kampus.</p>
          <div className="or-hero-btns">
            <button className="or-btn-ghost" type="button">Jelajahi Beasiswa</button>
            <button className="or-btn-light" type="button">Lihat Kegiatan</button>
          </div>
        </div>

        <div className="or-hero-art" aria-hidden="true">
          <div className="or-art-roof" />
          <div className="or-art-body">
            <div className="or-art-col" />
            <div className="or-art-col" />
            <div className="or-art-col" />
            <div className="or-art-col" />
            <div className="or-art-col" />
            <div className="or-art-col narrow" />
          </div>
          <div className="or-art-base" />
        </div>
      </section>

      {/* ---------- Kegiatan & Berita Ormawa ---------- */}
      <section className="or-section">
        <h2>Kegiatan &amp; Berita Ormawa</h2>
        <p className="sub">Temukan informasi dan pengumuman beasiswa terbaru.</p>
        <div className="or-grid">
          {kegiatan.map((k) => (
            <article key={k.judul} className="or-card">
              <h3>{k.judul}</h3>
              <div className="or-img" />
              <p>{k.deskripsi}</p>
              <a href="#">Baca selengkapnya</a>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="or-footer">
        <div className="or-footer-top">
          <div className="or-footer-brand">
            <div className="or-footer-logo">
              <div className="or-footer-logo-box"><SiBeoIcon /></div>
              <div>
                <div className="or-footer-logo-title">SI-BEO</div>
                <div className="or-footer-logo-sub">Sistem Informasi Beasiswa dan Organisasi Mahasiswa</div>
              </div>
            </div>
            <p className="or-footer-desc">
              Platform informasi beasiswa dan organisasi kemahasiswaan untuk memudahkan pencarian peluang dan pengembangan diri di kampus.
            </p>
          </div>

          <div className="or-contact">
            <h4>Kontak Kampus</h4>
            <p>Email: <b>[tempatkan email resmi]</b></p>
            <p>Telepon: <b>[tempatkan nomor resmi]</b></p>
            <p>Lokasi: <b>[tempatkan alamat resmi]</b></p>
          </div>
        </div>

        <div className="or-footer-bottom">
          <span>© 2026 SIMPUL · Satu Akses, Beragam Peluang.</span>
          <span className="or-footer-links">
            <span>Konten program ilustratif</span>
            <span>Pusat bantuan</span>
            <span>Kebijakan privasi</span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Ormawa;