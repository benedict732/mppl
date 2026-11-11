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
 
interface KegiatanCard {
  judul: string;
  deskripsi: string;
}
 
/* ===================== Data ===================== */
const navItems: NavItem[] = [
  { label: "Beranda", active: true },
  { label: "Beasiswa" },
  { label: "Ormawa" },
  { label: "Berita & Kegiatan" },
];
 
const beasiswa: BeasiswaCard[] = [
  { judul: "KIP Kuliah", deskripsi: "Informasi pembukaan dan persyaratan beasiswa." },
  { judul: "Bantuan Kebanksentralan", deskripsi: "Informasi beasiswa dan pengumuman terkait." },
  { judul: "Beasiswa Prestasi", deskripsi: "Informasi beasiswa untuk mahasiswa." },
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
 
const SiBeoIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="6" r="2" />
    <path d="M7.5 16.5 L16.5 7.5" />
  </svg>
);
 
/* ===================== Styles ===================== */
const css = `
.br-root { font-family: 'Inter', 'Segoe UI', Arial, sans-serif; color:#1e293b; background:#f4f6fb; min-height:100vh; display:flex; flex-direction:column; font-size:11px; }
 
/* Navbar */
.br-nav { background:#fff; height:52px; display:flex; align-items:center; padding:0 24px; border-bottom:1px solid #e5e9f2; position:relative; }
.br-logo { display:flex; align-items:center; gap:10px; }
.br-logo-small { font-size:7px; color:#475569; letter-spacing:.3px; }
.br-logo-title { font-size:10px; font-weight:700; color:#12365f; }
.br-nav-links { position:absolute; left:50%; transform:translateX(-18%); display:flex; gap:28px; font-size:9px; color:#334155; }
.br-nav-links .active { font-weight:700; color:#12365f; }
 
/* Hero */
.br-hero { background:#12365f; padding:24px 40px; display:flex; align-items:center; justify-content:space-between; min-height:210px; }
.br-hero-left { max-width:300px; }
.br-eyebrow { font-size:7px; font-weight:700; color:#f0b429; margin-bottom:12px; }
.br-hero h1 { margin:0; font-size:23px; line-height:1.28; font-weight:700; color:#fff; }
.br-hero p { margin:16px 0 0; font-size:10px; line-height:1.6; color:#e2e8f0; }
.br-hero-btns { display:flex; gap:14px; margin-top:16px; align-items:center; }
.br-btn-ghost { background:transparent; color:#fff; border:none; font-size:8.5px; font-weight:700; padding:9px 18px; cursor:pointer; }
.br-btn-light { background:#fff; color:#12365f; border:none; border-radius:5px; font-size:8.5px; font-weight:700; padding:9px 20px; cursor:pointer; }
.br-hero-art { width:372px; height:213px; background:#1f5f96; border-radius:14px; position:relative; flex-shrink:0; margin-right:40px; }
.br-art-roof { position:absolute; left:54px; top:47px; width:240px; height:27px; background:#ebbb50; border-radius:2px; }
.br-art-body { position:absolute; left:36px; top:74px; width:296px; height:108px; background:#dce7f3; border-radius:5px; display:flex; gap:10px; padding:0 14px; box-sizing:border-box; }
.br-art-col { flex:1; background:#fff; margin-top:7px; border-radius:2px; }
.br-art-col.narrow { flex:0 0 14px; }
.br-art-base { position:absolute; left:27px; top:182px; width:318px; height:7px; background:#ebbb50; border-radius:4px; }
 
/* Sections */
.br-section { padding:16px 40px 0; }
.br-section h2 { margin:0; font-size:15px; font-weight:700; }
.br-section .sub { margin:4px 0 0; font-size:9px; color:#64748b; }
.br-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-top:12px; }
 
.br-card-bea { background:#fff; border:1px solid #e5e9f2; border-top:4px solid #ebbb50; border-radius:5px; padding:12px 12px 10px; height:100px; box-sizing:border-box; display:flex; flex-direction:column; }
.br-card-bea h3 { margin:0; font-size:11px; font-weight:700; }
.br-card-bea p { margin:8px 0 0; font-size:8px; color:#64748b; flex:1; }
.br-card-bea a { font-size:8px; font-weight:700; color:#1f5fa8; text-decoration:none; }
 
.br-card-keg { background:#fff; border:1px solid #e5e9f2; border-radius:6px; padding:0 8px 0 10px; height:49px; display:flex; align-items:center; justify-content:space-between; gap:6px; }
.br-card-keg h3 { margin:0; font-size:9.5px; font-weight:700; }
.br-card-keg p { margin:5px 0 0; font-size:7px; color:#64748b; }
.br-thumb { width:54px; height:38px; background:#d9d9d9; border-radius:50%; flex-shrink:0; }
 
/* Footer */
.br-footer { background:#fff; margin-top:22px; padding:14px 42px 10px; }
.br-footer-top { display:flex; gap:40px; }
.br-footer-brand { width:180px; }
.br-footer-logo { display:flex; align-items:center; gap:8px; }
.br-footer-logo-box { width:24px; height:24px; background:#12365f; border-radius:5px; display:flex; align-items:center; justify-content:center; }
.br-footer-logo-title { font-size:12px; font-weight:700; color:#12365f; }
.br-footer-logo-sub { font-size:6.5px; color:#475569; }
.br-footer-desc { font-size:9px; color:#475569; margin:8px 0 0; line-height:1.5; }
.br-contact { width:130px; font-size:8px; }
.br-contact h4 { margin:0 0 6px; font-size:8px; font-weight:700; }
.br-contact p { margin:0 0 6px; line-height:1.4; }
.br-contact b { color:#1f5fa8; font-weight:700; }
.br-footer-bottom { display:flex; justify-content:space-between; font-size:7px; color:#475569; border-top:1px solid #e5e9f2; margin-top:22px; padding-top:10px; }
.br-footer-links span + span::before { content:' · '; }
`;
 
/* ===================== Component ===================== */
const Beranda: React.FC = () => {
  return (
    <div className="br-root">
      <style>{css}</style>
 
      {/* ---------- Navbar ---------- */}
      <header className="br-nav">
        <div className="br-logo">
          <EmblemIcon />
          <div>
            <div className="br-logo-small">UNIVERSITAS</div>
            <div className="br-logo-title">PORTAL KEMAHASISWAAN</div>
          </div>
        </div>
        <nav className="br-nav-links">
          {navItems.map((n) => (
            <span key={n.label} className={n.active ? "active" : undefined}>
              {n.label}
            </span>
          ))}
        </nav>
      </header>
 
      {/* ---------- Hero ---------- */}
      <section className="br-hero">
        <div className="br-hero-left">
          <div className="br-eyebrow">PORTAL KEMAHASISWAAN</div>
          <h1>Kembangkan Potensimu Lewat Beasiswa &amp; Organisasi Mahasiswa</h1>
          <p>Informasi beasiswa, organisasi, dan kegiatan mahasiswa dalam satu portal kampus.</p>
          <div className="br-hero-btns">
            <button className="br-btn-ghost" type="button">Jelajahi Beasiswa</button>
            <button className="br-btn-light" type="button">Lihat Kegiatan</button>
          </div>
        </div>
 
        <div className="br-hero-art" aria-hidden="true">
          <div className="br-art-roof" />
          <div className="br-art-body">
            <div className="br-art-col" />
            <div className="br-art-col" />
            <div className="br-art-col" />
            <div className="br-art-col" />
            <div className="br-art-col" />
            <div className="br-art-col narrow" />
          </div>
          <div className="br-art-base" />
        </div>
      </section>
 
      {/* ---------- Informasi Beasiswa ---------- */}
      <section className="br-section">
        <h2>Informasi Beasiswa</h2>
        <p className="sub">Temukan informasi dan pengumuman beasiswa terbaru.</p>
        <div className="br-grid">
          {beasiswa.map((b) => (
            <article key={b.judul} className="br-card-bea">
              <h3>{b.judul}</h3>
              <p>{b.deskripsi}</p>
              <a href="#">Baca selengkapnya</a>
            </article>
          ))}
        </div>
      </section>
 
      {/* ---------- Kegiatan & Berita Ormawa ---------- */}
      <section className="br-section" style={{ paddingTop: 22 }}>
        <h2>Kegiatan &amp; Berita Ormawa</h2>
        <p className="sub">Informasi kegiatan organisasi mahasiswa terbaru.</p>
        <div className="br-grid">
          {kegiatan.map((k) => (
            <article key={k.judul} className="br-card-keg">
              <div>
                <h3>{k.judul}</h3>
                <p>{k.deskripsi}</p>
              </div>
              <div className="br-thumb" />
            </article>
          ))}
        </div>
      </section>
 
      {/* ---------- Footer ---------- */}
      <footer className="br-footer">
        <div className="br-footer-top">
          <div className="br-footer-brand">
            <div className="br-footer-logo">
              <div className="br-footer-logo-box"><SiBeoIcon /></div>
              <div>
                <div className="br-footer-logo-title">SI-BEO</div>
                <div className="br-footer-logo-sub">Sistem Informasi Beasiswa dan Organisasi Mahasiswa</div>
              </div>
            </div>
            <p className="br-footer-desc">
              Platform informasi beasiswa dan organisasi kemahasiswaan untuk memudahkan pencarian peluang dan pengembangan diri di kampus.
            </p>
          </div>
 
          <div className="br-contact">
            <h4>Kontak Kampus</h4>
            <p>Email: <b>[tempatkan email resmi]</b></p>
            <p>Telepon: <b>[tempatkan nomor resmi]</b></p>
            <p>Lokasi: <b>[tempatkan alamat resmi]</b></p>
          </div>
        </div>
 
        <div className="br-footer-bottom">
          <span>© 2026 SIMPUL · Satu Akses, Beragam Peluang.</span>
          <span className="br-footer-links">
            <span>Konten program ilustratif</span>
            <span>Pusat bantuan</span>
            <span>Kebijakan privasi</span>
          </span>
        </div>
      </footer>
    </div>
  );
};
 
export default Beranda;
 