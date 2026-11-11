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
  { label: "Ormawa" },
  { label: "Berita & Kegiatan", active: true },
];

const kegiatan: KegiatanCard[] = [
  { judul: "Bakti Sosial Mahasiswa", deskripsi: "Pengumuman kegiatan dan informasi pelaksanaan." },
  { judul: "Pekan Seni Kampus", deskripsi: "Kabar kegiatan dan organisasi mahasiswa." },
  { judul: "Seminar Karier", deskripsi: "Informasi acara dan pengumuman terbaru." },
];

/* ===================== Icons ===================== */
const EmblemIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 32 32">
    <path d="M16 2 L28 7 V16 C28 23 22 28 16 30 C10 28 4 23 4 16 V7 Z" fill="#2f8f6b" stroke="#f0b429" strokeWidth="2" />
    <circle cx="16" cy="15" r="5" fill="#f0b429" />
  </svg>
);

const SiBeoIcon: React.FC = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="6" r="2" />
    <path d="M7.5 16.5 L16.5 7.5" />
  </svg>
);

/* ===================== Styles ===================== */
const css = `
.bk-root { font-family: 'Inter', 'Segoe UI', Arial, sans-serif; color:#1e293b; background:#f4f6fb; min-height:100vh; display:flex; flex-direction:column; font-size:11px; }

/* Navbar */
.bk-nav { background:#fff; height:36px; display:flex; align-items:center; padding:0 22px; border-bottom:1px solid #e5e9f2; position:relative; }
.bk-logo { display:flex; align-items:center; gap:9px; }
.bk-logo-small { font-size:5.5px; color:#475569; letter-spacing:.3px; }
.bk-logo-title { font-size:8px; font-weight:700; color:#12365f; }
.bk-nav-links { position:absolute; left:50%; transform:translateX(-30%); display:flex; gap:24px; font-size:7px; color:#334155; }
.bk-nav-links .active { font-weight:700; color:#12365f; }

/* Hero */
.bk-hero { background:#12365f; padding:22px 30px; display:flex; align-items:center; justify-content:space-between; min-height:170px; }
.bk-hero-left { max-width:260px; }
.bk-eyebrow { font-size:5.5px; font-weight:700; color:#f0b429; margin-bottom:9px; }
.bk-hero h1 { margin:0; font-size:16px; line-height:1.28; font-weight:700; color:#fff; }
.bk-hero p { margin:11px 0 0; font-size:7.5px; line-height:1.6; color:#e2e8f0; }
.bk-hero-btns { display:flex; gap:10px; margin-top:12px; align-items:center; }
.bk-btn-ghost { background:transparent; color:#fff; border:none; font-size:6.5px; font-weight:700; padding:7px 12px; cursor:pointer; }
.bk-btn-light { background:#fff; color:#12365f; border:none; border-radius:4px; font-size:6.5px; font-weight:700; padding:7px 14px; cursor:pointer; }
.bk-hero-art { width:242px; height:138px; background:#1f5f96; border-radius:10px; position:relative; flex-shrink:0; margin-right:26px; }
.bk-art-roof { position:absolute; left:35px; top:30px; width:155px; height:18px; background:#ebbb50; border-radius:2px; }
.bk-art-body { position:absolute; left:24px; top:48px; width:192px; height:70px; background:#dce7f3; border-radius:4px; display:flex; gap:7px; padding:0 9px; box-sizing:border-box; }
.bk-art-col { flex:1; background:#fff; margin-top:5px; border-radius:2px; }
.bk-art-col.narrow { flex:0 0 9px; }
.bk-art-base { position:absolute; left:17px; top:118px; width:208px; height:5px; background:#ebbb50; border-radius:3px; }

/* Section */
.bk-section { padding:14px 28px 14px; background:#f4f6fb; }
.bk-section h2 { margin:0; font-size:11px; font-weight:700; }
.bk-section .sub { margin:3px 0 0; font-size:7px; color:#64748b; }
.bk-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-top:10px; }

.bk-card { background:#fff; border:1px solid #e5e9f2; border-top:4px solid #ebbb50; border-radius:6px; padding:7px 8px; height:132px; box-sizing:border-box; display:flex; flex-direction:column; }
.bk-card h3 { margin:0; font-size:7.5px; font-weight:700; }
.bk-img { height:42px; background:#e5e5e5; border:1px solid #1e293b; border-radius:5px; margin-top:5px; }
.bk-card p { margin:4px 0 0; font-size:5.5px; color:#64748b; flex:1; }
.bk-card a { font-size:6px; font-weight:700; color:#1f5fa8; text-decoration:none; }

/* Footer */
.bk-footer { background:#fff; padding:14px 30px 10px; }
.bk-footer-top { display:flex; gap:36px; }
.bk-footer-brand { width:150px; }
.bk-footer-logo { display:flex; align-items:center; gap:7px; }
.bk-footer-logo-box { width:22px; height:22px; background:#12365f; border-radius:5px; display:flex; align-items:center; justify-content:center; }
.bk-footer-logo-title { font-size:10px; font-weight:700; color:#12365f; }
.bk-footer-logo-sub { font-size:5.5px; color:#475569; }
.bk-footer-desc { font-size:7.5px; color:#475569; margin:7px 0 0; line-height:1.5; }
.bk-contact { width:110px; font-size:6.5px; }
.bk-contact h4 { margin:0 0 5px; font-size:6.5px; font-weight:700; }
.bk-contact p { margin:0 0 5px; line-height:1.4; }
.bk-contact b { color:#1f5fa8; font-weight:700; }
.bk-footer-bottom { display:flex; justify-content:space-between; font-size:6px; color:#475569; border-top:1px solid #e5e9f2; margin-top:16px; padding-top:9px; }
.bk-footer-links span + span::before { content:' · '; }
`;

/* ===================== Component ===================== */
const BeritaKegiatan: React.FC = () => {
  return (
    <div className="bk-root">
      <style>{css}</style>

      {/* ---------- Navbar ---------- */}
      <header className="bk-nav">
        <div className="bk-logo">
          <EmblemIcon />
          <div>
            <div className="bk-logo-small">UNIVERSITAS</div>
            <div className="bk-logo-title">PORTAL KEMAHASISWAAN</div>
          </div>
        </div>
        <nav className="bk-nav-links">
          {navItems.map((n) => (
            <span key={n.label} className={n.active ? "active" : undefined}>
              {n.label}
            </span>
          ))}
        </nav>
      </header>

      {/* ---------- Hero ---------- */}
      <section className="bk-hero">
        <div className="bk-hero-left">
          <div className="bk-eyebrow">PORTAL KEMAHASISWAAN</div>
          <h1>Kembangkan Potensimu Lewat Beasiswa &amp; Organisasi Mahasiswa</h1>
          <p>Informasi beasiswa, organisasi, dan kegiatan mahasiswa dalam satu portal kampus.</p>
          <div className="bk-hero-btns">
            <button className="bk-btn-ghost" type="button">Jelajahi Beasiswa</button>
            <button className="bk-btn-light" type="button">Lihat Kegiatan</button>
          </div>
        </div>

        <div className="bk-hero-art" aria-hidden="true">
          <div className="bk-art-roof" />
          <div className="bk-art-body">
            <div className="bk-art-col" />
            <div className="bk-art-col" />
            <div className="bk-art-col" />
            <div className="bk-art-col" />
            <div className="bk-art-col" />
            <div className="bk-art-col narrow" />
          </div>
          <div className="bk-art-base" />
        </div>
      </section>

      {/* ---------- Berita & Kegiatan ---------- */}
      <section className="bk-section">
        <h2>Berita &amp; Kegiatan</h2>
        <p className="sub">Temukan informasi dan pengumuman beasiswa terbaru.</p>
        <div className="bk-grid">
          {kegiatan.map((k) => (
            <article key={k.judul} className="bk-card">
              <h3>{k.judul}</h3>
              <div className="bk-img" />
              <p>{k.deskripsi}</p>
              <a href="#">Baca selengkapnya</a>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="bk-footer">
        <div className="bk-footer-top">
          <div className="bk-footer-brand">
            <div className="bk-footer-logo">
              <div className="bk-footer-logo-box"><SiBeoIcon /></div>
              <div>
                <div className="bk-footer-logo-title">SI-BEO</div>
                <div className="bk-footer-logo-sub">Sistem Informasi Beasiswa dan Organisasi Mahasiswa</div>
              </div>
            </div>
            <p className="bk-footer-desc">
              Platform informasi beasiswa dan organisasi kemahasiswaan untuk memudahkan pencarian peluang dan pengembangan diri di kampus.
            </p>
          </div>

          <div className="bk-contact">
            <h4>Kontak Kampus</h4>
            <p>Email: <b>[tempatkan email resmi]</b></p>
            <p>Telepon: <b>[tempatkan nomor resmi]</b></p>
            <p>Lokasi: <b>[tempatkan alamat resmi]</b></p>
          </div>
        </div>

        <div className="bk-footer-bottom">
          <span>© 2026 SIMPUL · Satu Akses, Beragam Peluang.</span>
          <span className="bk-footer-links">
            <span>Konten program ilustratif</span>
            <span>Pusat bantuan</span>
            <span>Kebijakan privasi</span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default BeritaKegiatan;