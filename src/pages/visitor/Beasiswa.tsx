import React from "react";
 
/* ===================== Types ===================== */
interface NavItem {
  label: string;
  active?: boolean;
}
 
interface BeasiswaCard {
  judul: string;
  deskripsi: string;
}
 
/* ===================== Data ===================== */
const navItems: NavItem[] = [
  { label: "Beranda" },
  { label: "Beasiswa", active: true },
  { label: "Ormawa" },
  { label: "Berita & Kegiatan" },
];
 
const beasiswa: BeasiswaCard[] = [
  { judul: "KIP Kuliah", deskripsi: "Informasi pembukaan dan persyaratan beasiswa." },
  { judul: "Bantuan Kebanksentralan", deskripsi: "Informasi beasiswa dan pengumuman terkait." },
  { judul: "Beasiswa Prestasi", deskripsi: "Informasi beasiswa untuk mahasiswa." },
];
 
/* ===================== Icons ===================== */
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
.bs-root { font-family: 'Inter', 'Segoe UI', Arial, sans-serif; color:#1e293b; background:#f4f6fb; min-height:100vh; display:flex; flex-direction:column; font-size:11px; }
 
/* Navbar */
.bs-nav { background:#fff; height:52px; display:flex; align-items:center; padding:0 24px; border-bottom:1px solid #e5e9f2; position:relative; }
.bs-logo { display:flex; align-items:center; gap:10px; }
.bs-logo-small { font-size:7px; color:#475569; letter-spacing:.3px; }
.bs-logo-title { font-size:10px; font-weight:700; color:#12365f; }
.bs-nav-links { position:absolute; left:50%; transform:translateX(-18%); display:flex; gap:28px; font-size:9px; color:#334155; }
.bs-nav-links .active { font-weight:700; color:#12365f; }
 
/* Hero */
.bs-hero { background:#12365f; padding:24px 40px; display:flex; align-items:center; justify-content:space-between; min-height:210px; }
.bs-hero-left { max-width:300px; }
.bs-eyebrow { font-size:7px; font-weight:700; color:#f0b429; margin-bottom:12px; }
.bs-hero h1 { margin:0; font-size:23px; line-height:1.28; font-weight:700; color:#fff; }
.bs-hero p { margin:16px 0 0; font-size:10px; line-height:1.6; color:#e2e8f0; }
.bs-hero-btns { display:flex; gap:14px; margin-top:16px; align-items:center; }
.bs-btn-ghost { background:transparent; color:#fff; border:none; font-size:8.5px; font-weight:700; padding:9px 18px; cursor:pointer; }
.bs-btn-light { background:#fff; color:#12365f; border:none; border-radius:5px; font-size:8.5px; font-weight:700; padding:9px 20px; cursor:pointer; }
.bs-hero-art { width:372px; height:213px; background:#1f5f96; border-radius:14px; position:relative; flex-shrink:0; margin-right:40px; }
.bs-art-roof { position:absolute; left:54px; top:47px; width:240px; height:27px; background:#ebbb50; border-radius:2px; }
.bs-art-body { position:absolute; left:36px; top:74px; width:296px; height:108px; background:#dce7f3; border-radius:5px; display:flex; gap:10px; padding:0 14px; box-sizing:border-box; }
.bs-art-col { flex:1; background:#fff; margin-top:7px; border-radius:2px; }
.bs-art-col.narrow { flex:0 0 14px; }
.bs-art-base { position:absolute; left:27px; top:182px; width:318px; height:7px; background:#ebbb50; border-radius:4px; }
 
/* Section */
.bs-section { padding:16px 30px 20px; background:#f4f6fb; }
.bs-section h2 { margin:0; font-size:15px; font-weight:700; }
.bs-section .sub { margin:4px 0 0; font-size:9px; color:#64748b; }
.bs-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-top:12px; }
 
.bs-card { background:#fff; border:1px solid #e5e9f2; border-top:4px solid #ebbb50; border-radius:5px; padding:10px 8px 10px; height:136px; box-sizing:border-box; display:flex; flex-direction:column; }
.bs-card h3 { margin:0; font-size:11px; font-weight:700; }
.bs-img { height:46px; background:#e5e5e5; border:1px solid #cfcfcf; border-radius:4px; margin-top:6px; }
.bs-card p { margin:6px 0 0; font-size:7px; color:#64748b; flex:1; }
.bs-card a { font-size:7.5px; font-weight:700; color:#1f5fa8; text-decoration:none; }
 
/* Footer */
.bs-footer { background:#fff; padding:14px 30px 10px; }
.bs-footer-top { display:flex; gap:40px; }
.bs-footer-brand { width:180px; }
.bs-footer-logo { display:flex; align-items:center; gap:8px; }
.bs-footer-logo-box { width:24px; height:24px; background:#12365f; border-radius:5px; display:flex; align-items:center; justify-content:center; }
.bs-footer-logo-title { font-size:12px; font-weight:700; color:#12365f; }
.bs-footer-logo-sub { font-size:6.5px; color:#475569; }
.bs-footer-desc { font-size:9px; color:#475569; margin:8px 0 0; line-height:1.5; }
.bs-contact { width:130px; font-size:8px; }
.bs-contact h4 { margin:0 0 6px; font-size:8px; font-weight:700; }
.bs-contact p { margin:0 0 6px; line-height:1.4; }
.bs-contact b { color:#1f5fa8; font-weight:700; }
.bs-footer-bottom { display:flex; justify-content:space-between; font-size:7px; color:#475569; border-top:1px solid #e5e9f2; margin-top:22px; padding-top:10px; }
.bs-footer-links span + span::before { content:' · '; }
`;
 
/* ===================== Component ===================== */
const Beasiswa: React.FC = () => {
  return (
    <div className="bs-root">
      <style>{css}</style>
 
      {/* ---------- Navbar ---------- */}
      <header className="bs-nav">
        <div className="bs-logo">
          <EmblemIcon />
          <div>
            <div className="bs-logo-small">UNIVERSITAS</div>
            <div className="bs-logo-title">PORTAL KEMAHASISWAAN</div>
          </div>
        </div>
        <nav className="bs-nav-links">
          {navItems.map((n) => (
            <span key={n.label} className={n.active ? "active" : undefined}>
              {n.label}
            </span>
          ))}
        </nav>
      </header>
 
      {/* ---------- Hero ---------- */}
      <section className="bs-hero">
        <div className="bs-hero-left">
          <div className="bs-eyebrow">PORTAL KEMAHASISWAAN</div>
          <h1>Kembangkan Potensimu Lewat Beasiswa &amp; Organisasi Mahasiswa</h1>
          <p>Informasi beasiswa, organisasi, dan kegiatan mahasiswa dalam satu portal kampus.</p>
          <div className="bs-hero-btns">
            <button className="bs-btn-ghost" type="button">Jelajahi Beasiswa</button>
            <button className="bs-btn-light" type="button">Lihat Kegiatan</button>
          </div>
        </div>
 
        <div className="bs-hero-art" aria-hidden="true">
          <div className="bs-art-roof" />
          <div className="bs-art-body">
            <div className="bs-art-col" />
            <div className="bs-art-col" />
            <div className="bs-art-col" />
            <div className="bs-art-col" />
            <div className="bs-art-col" />
            <div className="bs-art-col narrow" />
          </div>
          <div className="bs-art-base" />
        </div>
      </section>
 
      {/* ---------- Informasi Beasiswa ---------- */}
      <section className="bs-section">
        <h2>Informasi Beasiswa</h2>
        <p className="sub">Temukan informasi dan pengumuman beasiswa terbaru.</p>
        <div className="bs-grid">
          {beasiswa.map((b) => (
            <article key={b.judul} className="bs-card">
              <h3>{b.judul}</h3>
              <div className="bs-img" />
              <p>{b.deskripsi}</p>
              <a href="#">Baca selengkapnya</a>
            </article>
          ))}
        </div>
      </section>
 
      {/* ---------- Footer ---------- */}
      <footer className="bs-footer">
        <div className="bs-footer-top">
          <div className="bs-footer-brand">
            <div className="bs-footer-logo">
              <div className="bs-footer-logo-box"><SiBeoIcon /></div>
              <div>
                <div className="bs-footer-logo-title">SI-BEO</div>
                <div className="bs-footer-logo-sub">Sistem Informasi Beasiswa dan Organisasi Mahasiswa</div>
              </div>
            </div>
            <p className="bs-footer-desc">
              Platform informasi beasiswa dan organisasi kemahasiswaan untuk memudahkan pencarian peluang dan pengembangan diri di kampus.
            </p>
          </div>
 
          <div className="bs-contact">
            <h4>Kontak Kampus</h4>
            <p>Email: <b>[tempatkan email resmi]</b></p>
            <p>Telepon: <b>[tempatkan nomor resmi]</b></p>
            <p>Lokasi: <b>[tempatkan alamat resmi]</b></p>
          </div>
        </div>
 
        <div className="bs-footer-bottom">
          <span>© 2026 SIMPUL · Satu Akses, Beragam Peluang.</span>
          <span className="bs-footer-links">
            <span>Konten program ilustratif</span>
            <span>Pusat bantuan</span>
            <span>Kebijakan privasi</span>
          </span>
        </div>
      </footer>
    </div>
  );
};
 
export default Beasiswa;
 