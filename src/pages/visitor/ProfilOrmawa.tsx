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
  tipe: "paragraf" | "daftar";
  isi: string[];
}

/* ===================== Data ===================== */
const navItems: NavItem[] = [
  { label: "Beranda" },
  { label: "Beasiswa" },
  { label: "Ormawa", active: true },
  { label: "Berita & Kegiatan" },
];

const tabs: TabItem[] = [
  { label: "MPM" },
  { label: "BEM", active: true },
  { label: "BPM" },
];

const sections: InfoSection[] = [
  {
    judul: "Tentang Organisasi",
    tipe: "paragraf",
    isi: [
      "BEM menjadi penghubung antara mahasiswa dan pihak kampus, mengoordinasikan kegiatan kemahasiswaan, serta mendorong lingkungan kampus yang aktif, inklusif, dan kolaboratif.",
    ],
  },
  {
    judul: "Visi",
    tipe: "paragraf",
    isi: [
      "Mewujudkan organisasi mahasiswa yang responsif, inklusif, dan kolaboratif, dan bermanfaat bagi seluruh mahasiswa.",
    ],
  },
  {
    judul: "Misi",
    tipe: "daftar",
    isi: [
      "Menampung dan menindaklanjuti aspirasi mahasiswa",
      "Mengembangkan program kerja yang relevan",
      "Membangun kolaborasi lintas organisasi",
      "Mendorong partisipasi dan kepemimpinan mahasiswa",
    ],
  },
  {
    judul: "Bidang / Departemen",
    tipe: "daftar",
    isi: [
      "PSDM — pengembangan sumber daya mahasiswa",
      "Kominfo — komunikasi dan publikasi",
      "Advokasi — aspirasi dan kesejahteraan mahasiswa",
      "Minat & Bakat — kreativitas dan potensi mahasiswa",
    ],
  },
];

const informasiOrganisasi: string[] = [
  "Periode: 2026 / 2027",
  "Keanggotaan: mahasiswa aktif",
  "Kontak: bem@kampus.ac.id (contoh)",
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
.po-root { font-family: 'Inter', 'Segoe UI', Arial, sans-serif; color:#1e293b; background:#f4f6fb; min-height:100vh; display:flex; flex-direction:column; font-size:11px; }

/* Navbar */
.po-nav { background:#fff; height:40px; display:flex; align-items:center; padding:0 24px; border-bottom:1px solid #e5e9f2; position:relative; }
.po-logo { display:flex; align-items:center; gap:9px; }
.po-logo-small { font-size:6px; color:#475569; letter-spacing:.3px; }
.po-logo-title { font-size:8.5px; font-weight:700; color:#12365f; }
.po-nav-links { position:absolute; left:50%; transform:translateX(-30%); display:flex; gap:24px; font-size:7.5px; color:#334155; }
.po-nav-links .active { font-weight:700; color:#12365f; }

/* Hero */
.po-hero { background:#12365f; padding:18px 28px 14px; color:#fff; }
.po-eyebrow { font-size:6px; font-weight:700; color:#f0b429; margin-bottom:8px; }
.po-hero h1 { margin:0; font-size:19px; line-height:1.25; font-weight:700; }
.po-hero-sub { margin:8px 0 0; font-size:12px; color:#e2e8f0; }
.po-hero p { margin:12px 0 0; font-size:7.5px; line-height:1.6; color:#e2e8f0; max-width:300px; }
.po-tabs { display:flex; gap:12px; margin-top:16px; }
.po-tab { background:#2d5f93; color:#fff; border:none; border-radius:3px; font-size:6.5px; font-weight:700; width:48px; padding:5px 0; cursor:pointer; }
.po-tab.active { background:#5b92d1; box-shadow:0 0 0 1px #ffffff55 inset; }

/* Content */
.po-content { padding:14px 28px 16px; background:#f4f6fb; }
.po-content h2 { margin:0; font-size:11px; font-weight:700; }
.po-content .sub { margin:3px 0 0; font-size:6.5px; color:#64748b; }
.po-grid { display:grid; grid-template-columns:297fr 157fr; gap:12px; margin-top:12px; align-items:start; }
.po-left { display:flex; flex-direction:column; gap:8px; }

.po-card { background:#fff; border:1px solid #e5e9f2; border-radius:5px; padding:10px 12px; }
.po-card h3 { margin:0 0 6px; font-size:9px; font-weight:700; }
.po-card p { margin:0; font-size:6.5px; color:#475569; line-height:1.5; }
.po-card ul { margin:0; padding:0; list-style:none; }
.po-card li { font-size:6.5px; color:#475569; line-height:1.5; margin-bottom:3px; }
.po-card li::before { content:'• '; }
.po-card li:last-child { margin-bottom:0; }
.po-card.tentang { min-height:56px; }
.po-card.visi { min-height:52px; }

.po-side { background:#fff; border:1px solid #e5e9f2; border-top:4px solid #ebbb50; border-radius:5px; padding:10px 12px 14px; }
.po-side h3 { margin:0 0 10px; font-size:9px; font-weight:700; }
.po-side .line { margin:0 0 8px; font-size:6.5px; color:#475569; }
.po-side-btn { display:block; width:100%; margin-top:12px; background:#12365f; color:#fff; border:none; border-radius:4px; padding:7px 0; font-size:6.5px; font-weight:700; cursor:pointer; }

/* Footer */
.po-footer { background:#fff; padding:14px 28px 10px; }
.po-footer-top { display:flex; gap:36px; }
.po-footer-brand { width:150px; }
.po-footer-logo { display:flex; align-items:center; gap:7px; }
.po-footer-logo-box { width:22px; height:22px; background:#12365f; border-radius:5px; display:flex; align-items:center; justify-content:center; }
.po-footer-logo-title { font-size:10px; font-weight:700; color:#12365f; }
.po-footer-logo-sub { font-size:5.5px; color:#475569; }
.po-footer-desc { font-size:7.5px; color:#475569; margin:7px 0 0; line-height:1.5; }
.po-contact { width:110px; font-size:6.5px; }
.po-contact h4 { margin:0 0 5px; font-size:6.5px; font-weight:700; }
.po-contact p { margin:0 0 5px; line-height:1.4; }
.po-contact b { color:#1f5fa8; font-weight:700; }
.po-footer-bottom { display:flex; justify-content:space-between; font-size:6px; color:#475569; border-top:1px solid #e5e9f2; margin-top:16px; padding-top:9px; }
.po-footer-links span + span::before { content:' · '; }
`;

/* ===================== Component ===================== */
const ProfilOrmawa: React.FC = () => {
  return (
    <div className="po-root">
      <style>{css}</style>

      {/* ---------- Navbar ---------- */}
      <header className="po-nav">
        <div className="po-logo">
          <EmblemIcon />
          <div>
            <div className="po-logo-small">UNIVERSITAS</div>
            <div className="po-logo-title">PORTAL KEMAHASISWAAN</div>
          </div>
        </div>
        <nav className="po-nav-links">
          {navItems.map((n) => (
            <span key={n.label} className={n.active ? "active" : undefined}>
              {n.label}
            </span>
          ))}
        </nav>
      </header>

      {/* ---------- Hero ---------- */}
      <section className="po-hero">
        <div className="po-eyebrow">PROFIL ORGANISASI</div>
        <h1>Badan Eksekutif Mahasiswa (BEM)</h1>
        <div className="po-hero-sub">Universitas De La Salle</div>
        <p>
          BEM adalah organisasi eksekutif mahasiswa yang menjadi wadah aspirasi, pengembangan kepemimpinan, dan kolaborasi kegiatan mahasiswa di tingkat universitas.
        </p>
        <div className="po-tabs">
          {tabs.map((t) => (
            <button key={t.label} type="button" className={`po-tab${t.active ? " active" : ""}`}>
              {t.label}
            </button>
          ))}
        </div>
      </section>

      {/* ---------- Informasi Lengkap ---------- */}
      <section className="po-content">
        <h2>Informasi Lengkap</h2>
        <p className="sub">Detail profil untuk membantu menelaah program dan langkah selanjutnya.</p>

        <div className="po-grid">
          <div className="po-left">
            {sections.map((s) => (
              <article
                key={s.judul}
                className={`po-card${s.judul === "Tentang Organisasi" ? " tentang" : ""}${s.judul === "Visi" ? " visi" : ""}`}
              >
                <h3>{s.judul}</h3>
                {s.tipe === "paragraf" ? (
                  <p>{s.isi[0]}</p>
                ) : (
                  <ul>
                    {s.isi.map((baris) => (
                      <li key={baris}>{baris}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          <aside className="po-side">
            <h3>Informasi Organisasi</h3>
            {informasiOrganisasi.map((baris) => (
              <div key={baris} className="line">{baris}</div>
            ))}
            <button className="po-side-btn" type="button">Hubungi pengurus organisasi</button>
          </aside>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="po-footer">
        <div className="po-footer-top">
          <div className="po-footer-brand">
            <div className="po-footer-logo">
              <div className="po-footer-logo-box"><SiBeoIcon /></div>
              <div>
                <div className="po-footer-logo-title">SI-BEO</div>
                <div className="po-footer-logo-sub">Sistem Informasi Beasiswa dan Organisasi Mahasiswa</div>
              </div>
            </div>
            <p className="po-footer-desc">
              Platform informasi beasiswa dan organisasi kemahasiswaan untuk memudahkan pencarian peluang dan pengembangan diri di kampus.
            </p>
          </div>

          <div className="po-contact">
            <h4>Kontak Kampus</h4>
            <p>Email: <b>[tempatkan email resmi]</b></p>
            <p>Telepon: <b>[tempatkan nomor resmi]</b></p>
            <p>Lokasi: <b>[tempatkan alamat resmi]</b></p>
          </div>
        </div>

        <div className="po-footer-bottom">
          <span>© 2026 SIMPUL · Satu Akses, Beragam Peluang.</span>
          <span className="po-footer-links">
            <span>Konten program ilustratif</span>
            <span>Pusat bantuan</span>
            <span>Kebijakan privasi</span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default ProfilOrmawa;