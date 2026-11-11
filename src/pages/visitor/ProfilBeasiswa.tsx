import React from "react";

/* ===================== Types ===================== */
interface NavItem {
  label: string;
  active?: boolean;
}

interface TabItem {
  label: string;
  active?: boolean;
}

interface InfoSection {
  judul: string;
  isi: string[];
  paragraf?: boolean;
}

/* ===================== Data ===================== */
const navItems: NavItem[] = [
  { label: "Beranda" },
  { label: "Beasiswa", active: true },
  { label: "Ormawa" },
  { label: "Berita & Kegiatan" },
];

const tabs: TabItem[] = [
  { label: "KIP Kuliah", active: true },
  { label: "VDMI" },
  { label: "SI" },
];

const sections: InfoSection[] = [
  {
    judul: "Tentang Beasiswa",
    paragraf: true,
    isi: [
      "Beasiswa ini dirancang untuk mendukung keberlanjutan studi dan mendorong mahasiswa mengembangkan potensi. Informasi periode, kuota, dan nilai bantuan mengikuti pengumuman resmi kampus.",
    ],
  },
  {
    judul: "Persyaratan Umum",
    isi: [
      "Terdaftar sebagai mahasiswa aktif",
      "Memenuhi ketentuan akademik pada pengumuman",
      "Menyiapkan dokumen pendukung yang diminta",
      "Mengikuti proses seleksi sesuai jadwal.",
    ],
  },
  {
    judul: "Benefit",
    isi: [
      "Dukungan biaya pendidikan sesuai ketentuan",
      "Apresiasi terhadap prestasi dan pengembangan diri",
      "Kesempatan mengikuti program pengembangan mahasiswa",
    ],
  },
  {
    judul: "Status Pendaftaran",
    isi: ["Pendaftaran belum dibuka"],
  },
];

const infoPendaftaran: string[] = [
  "Periode: cek pengumuman resmi",
  "Pendaftaran: melalui kanal resmi kampus",
  "Dokumen: sesuai ketentuan program",
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
.pb-root { font-family: 'Inter', 'Segoe UI', Arial, sans-serif; color:#1e293b; background:#f4f6fb; min-height:100vh; display:flex; flex-direction:column; font-size:11px; }

/* Navbar */
.pb-nav { background:#fff; height:40px; display:flex; align-items:center; padding:0 24px; border-bottom:1px solid #e5e9f2; position:relative; }
.pb-logo { display:flex; align-items:center; gap:9px; }
.pb-logo-small { font-size:6px; color:#475569; letter-spacing:.3px; }
.pb-logo-title { font-size:8.5px; font-weight:700; color:#12365f; }
.pb-nav-links { position:absolute; left:50%; transform:translateX(-30%); display:flex; gap:24px; font-size:7.5px; color:#334155; }
.pb-nav-links .active { font-weight:700; color:#12365f; }

/* Hero */
.pb-hero { background:#12365f; padding:18px 24px 14px; color:#fff; }
.pb-eyebrow { font-size:6px; font-weight:700; color:#f0b429; margin-bottom:8px; }
.pb-hero h1 { margin:0; font-size:19px; line-height:1.25; font-weight:700; }
.pb-hero-sub { margin:8px 0 0; font-size:12px; color:#e2e8f0; }
.pb-hero p { margin:12px 0 0; font-size:7.5px; line-height:1.6; color:#e2e8f0; max-width:300px; }
.pb-tabs { display:flex; gap:10px; margin-top:16px; }
.pb-tab { background:#2d5f93; color:#fff; border:none; border-radius:3px; font-size:6.5px; font-weight:700; width:48px; padding:5px 0; cursor:pointer; }
.pb-tab.active { background:#5b92d1; box-shadow:0 0 0 1px #ffffff55 inset; }

/* Content */
.pb-content { padding:14px 24px 16px; background:#f4f6fb; }
.pb-content h2 { margin:0; font-size:11px; font-weight:700; }
.pb-content .sub { margin:3px 0 0; font-size:6.5px; color:#64748b; }
.pb-grid { display:grid; grid-template-columns:289fr 155fr; gap:11px; margin-top:12px; align-items:start; }
.pb-left { display:flex; flex-direction:column; gap:6px; }

.pb-card { background:#fff; border:1px solid #e5e9f2; border-radius:5px; padding:10px 12px; }
.pb-card h3 { margin:0 0 6px; font-size:9px; font-weight:700; }
.pb-card p, .pb-card div.line { margin:0 0 5px; font-size:6.5px; color:#475569; line-height:1.5; }
.pb-card .line:last-child, .pb-card p:last-child { margin-bottom:0; }
.pb-card.tentang { min-height:46px; }

.pb-side { background:#fff; border:1px solid #e5e9f2; border-top:4px solid #ebbb50; border-radius:5px; padding:10px 12px 14px; }
.pb-side h3 { margin:0 0 10px; font-size:9px; font-weight:700; }
.pb-side .line { margin:0 0 8px; font-size:6.5px; color:#475569; }
.pb-side-btn { display:block; width:100%; margin-top:12px; background:#12365f; color:#fff; border:none; border-radius:4px; padding:7px 0; font-size:6.5px; font-weight:700; cursor:pointer; }

/* Footer */
.pb-footer { background:#fff; padding:14px 24px 10px; }
.pb-footer-top { display:flex; gap:36px; }
.pb-footer-brand { width:150px; }
.pb-footer-logo { display:flex; align-items:center; gap:7px; }
.pb-footer-logo-box { width:22px; height:22px; background:#12365f; border-radius:5px; display:flex; align-items:center; justify-content:center; }
.pb-footer-logo-title { font-size:10px; font-weight:700; color:#12365f; }
.pb-footer-logo-sub { font-size:5.5px; color:#475569; }
.pb-footer-desc { font-size:7.5px; color:#475569; margin:7px 0 0; line-height:1.5; }
.pb-contact { width:110px; font-size:6.5px; }
.pb-contact h4 { margin:0 0 5px; font-size:6.5px; font-weight:700; }
.pb-contact p { margin:0 0 5px; line-height:1.4; }
.pb-contact b { color:#1f5fa8; font-weight:700; }
.pb-footer-bottom { display:flex; justify-content:space-between; font-size:6px; color:#475569; border-top:1px solid #e5e9f2; margin-top:16px; padding-top:9px; }
.pb-footer-links span + span::before { content:' · '; }
`;

/* ===================== Component ===================== */
const ProfilBeasiswa: React.FC = () => {
  return (
    <div className="pb-root">
      <style>{css}</style>

      {/* ---------- Navbar ---------- */}
      <header className="pb-nav">
        <div className="pb-logo">
          <EmblemIcon />
          <div>
            <div className="pb-logo-small">UNIVERSITAS</div>
            <div className="pb-logo-title">PORTAL KEMAHASISWAAN</div>
          </div>
        </div>
        <nav className="pb-nav-links">
          {navItems.map((n) => (
            <span key={n.label} className={n.active ? "active" : undefined}>
              {n.label}
            </span>
          ))}
        </nav>
      </header>

      {/* ---------- Hero ---------- */}
      <section className="pb-hero">
        <div className="pb-eyebrow">PROGRAM BEASISWA</div>
        <h1>Kartu Indonesia Pintar Kuliah (KIP Kuliah)</h1>
        <div className="pb-hero-sub">Nama Penyelenggara</div>
        <p>
          Program bantuan pendidikan bagi mahasiswa aktif yang memiliki prestasi akademik maupun non-akademik, dengan komitmen berkontribusi untuk lingkungan kampus.
        </p>
        <div className="pb-tabs">
          {tabs.map((t) => (
            <button key={t.label} type="button" className={`pb-tab${t.active ? " active" : ""}`}>
              {t.label}
            </button>
          ))}
        </div>
      </section>

      {/* ---------- Informasi Lengkap ---------- */}
      <section className="pb-content">
        <h2>Informasi Lengkap</h2>
        <p className="sub">Detail arahkan ke tab membantu visitor memahami program dan langkah selanjutnya.</p>

        <div className="pb-grid">
          <div className="pb-left">
            {sections.map((s) => (
              <article key={s.judul} className={`pb-card${s.paragraf ? " tentang" : ""}`}>
                <h3>{s.judul}</h3>
                {s.isi.map((baris) =>
                  s.paragraf ? (
                    <p key={baris}>{baris}</p>
                  ) : (
                    <div key={baris} className="line">{baris}</div>
                  )
                )}
              </article>
            ))}
          </div>

          <aside className="pb-side">
            <h3>Informasi Pendaftaran</h3>
            {infoPendaftaran.map((baris) => (
              <div key={baris} className="line">{baris}</div>
            ))}
            <button className="pb-side-btn" type="button">Kunjungi kanal resmi beasiswa</button>
          </aside>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="pb-footer">
        <div className="pb-footer-top">
          <div className="pb-footer-brand">
            <div className="pb-footer-logo">
              <div className="pb-footer-logo-box"><SiBeoIcon /></div>
              <div>
                <div className="pb-footer-logo-title">SI-BEO</div>
                <div className="pb-footer-logo-sub">Sistem Informasi Beasiswa dan Organisasi Mahasiswa</div>
              </div>
            </div>
            <p className="pb-footer-desc">
              Platform informasi beasiswa dan organisasi kemahasiswaan untuk memudahkan pencarian peluang dan pengembangan diri di kampus.
            </p>
          </div>

          <div className="pb-contact">
            <h4>Kontak Kampus</h4>
            <p>Email: <b>[tempatkan email resmi]</b></p>
            <p>Telepon: <b>[tempatkan nomor resmi]</b></p>
            <p>Lokasi: <b>[tempatkan alamat resmi]</b></p>
          </div>
        </div>

        <div className="pb-footer-bottom">
          <span>© 2026 SIMPUL · Satu Akses, Beragam Peluang.</span>
          <span className="pb-footer-links">
            <span>Konten program ilustratif</span>
            <span>Pusat bantuan</span>
            <span>Kebijakan privasi</span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default ProfilBeasiswa;