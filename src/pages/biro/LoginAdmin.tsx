import { type FormEvent, useState, type JSX } from "react";

// CATATAN: Jika file gambar ini belum ada di folder src/pages/biro/, 
// biarkan tetap menggunakan tanda // (komentar) agar aplikasi tidak error.
// Jika file sudah Anda unduh ke folder tersebut, silakan hapus tanda //

// import image from "./image.svg";
// import image2 from "./image-2.png";
// import simbolPenghubung from "./simbol-penghubung.svg";
// import vector from "./vector.svg";
// import vector2 from "./vector-2.svg";
// import vector3 from "./vector-3.svg";
// import vector4 from "./vector-4.svg";
// import vector5 from "./vector-5.svg";
// import vector6 from "./vector-6.svg";

const featureItems = [
  {
    title: "Informasi beasiswa",
    description: "Publikasi, persyaratan, dan tenggat",
    image: "", // Ganti "" dengan {vector} jika gambar sudah ada
    imageAlt: "Ikon informasi beasiswa",
    imageClassName: "absolute w-[95.30%] h-[82.81%] top-[17.19%] left-[4.70%]",
  },
  {
    title: "Organisasi mahasiswa",
    description: "Profil, kegiatan, dan rekrutmen",
    image: "", // Ganti "" dengan {image} jika gambar sudah ada
    imageAlt: "Ikon organisasi mahasiswa",
    imageClassName: "absolute w-[95.31%] h-[91.14%] top-[8.86%] left-[4.69%]",
  },
];

// Perbaikan: Hapus 'export' di sini karena sudah ada 'export default' di bawah
const LoginAdmin = (): JSX.Element => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="flex w-full min-h-screen items-start relative bg-white">
      <section
        aria-labelledby="admin-area-title"
        className="w-[600px] justify-between p-16 bg-[#173a6a] flex flex-col items-start relative self-stretch"
      >
        <div className="gap-10 w-full flex-[0_0_auto] flex flex-col items-start relative self-stretch">
          <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
            <div className="flex w-11 h-11 items-center justify-center relative bg-[#2f6fed] rounded-lg overflow-hidden">
              <div className="relative w-[26px] h-[26px]">
                {/* Gambar Logo Dinonaktifkan Sementara */}
                {/* <img
                  className="absolute w-[93.59%] h-[93.59%] top-[6.41%] left-[6.41%]"
                  alt=""
                  aria-hidden="true"
                  src={simbolPenghubung}
                /> */}
              </div>
            </div>
            <div className="relative w-fit [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-white text-2xl tracking-[0.24px] leading-[normal]">
              SI-BEO
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 pt-6 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#ffffff26]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#cbd8eb] text-[11px] tracking-[0.15px] leading-[normal] whitespace-nowrap">
              RUANG ADMINISTRASI
            </div>
            <h1
              id="admin-area-title"
              className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap"
            >
              Biro Kemahasiswaan
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 w-full flex-[0_0_auto] relative self-stretch">
          <div className="relative w-10 h-[3px] bg-[#2f6fed]" />
          <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[42px] tracking-[-0.42px] leading-[50.4px] relative self-stretch">
            Informasi yang jelas, peluang yang terbuka.
          </p>
          <p className="self-stretch text-[#cbd8eb] text-base leading-[27.2px] relative [font-family:'Inter-Regular',Helvetica] font-normal tracking-[0]">
            Kelola informasi beasiswa dan organisasi mahasiswa secara terpusat,
            terarah, dan bertanggung jawab.
          </p>
        </div>
        <div className="flex-col items-start flex relative self-stretch w-full flex-[0_0_auto]">
          {featureItems.map((feature) => (
            <div
              key={feature.title}
              className="items-center gap-4 px-0 py-[22px] border-t [border-top-style:solid] border-[#ffffff26] flex relative self-stretch w-full flex-[0_0_auto]"
            >
              <div className="relative w-[22px] h-[22px]">
                {/* <img
                  className={feature.imageClassName}
                  alt={feature.imageAlt}
                  src={feature.image}
                /> */}
              </div>
              <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal]">
                  {feature.title}
                </div>
                <div className="w-fit text-[#cbd8eb] text-xs leading-[normal] relative [font-family:'Inter-Regular',Helvetica] font-normal tracking-[0]">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
          <div className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[#cbd8eb] text-xs tracking-[0] leading-[18px]">
            Satu Akses, Beragam Peluang.
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-between pt-16 pb-10 px-16 relative flex-1 self-stretch grow bg-slate-50">
        <div className="flex items-center justify-around relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 relative flex-[0_0_auto] bg-[#edf3ff] rounded-md overflow-hidden">
            <div className="relative w-3.5 h-3.5">
              {/* <img
                className="absolute w-[89.05%] h-[97.39%] top-[2.61%] left-[10.95%]"
                alt=""
                aria-hidden="true"
                src={vector2}
              /> */}
            </div>
            <div className="relative w-fit mt-[-0.50px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2f6fed] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
              Akses administrator
            </div>
          </div>
        </div>
        
        {/* Placeholder untuk Gambar Ilustrasi Besar */}
        <div className="w-[179px] h-[190px] bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-sm">
          [Gambar Ilustrasi]
        </div>
        
        {/* <img
          className="relative w-[179px] h-[190px] aspect-[0.94] object-cover"
          alt="Lambang institusi"
          src={image2}
        /> */}

        <form
          className="flex flex-col w-[432px] items-start gap-8 relative flex-[0_0_auto]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#173a6a] text-[32px] tracking-[-0.22px] leading-10">
              Login
            </h2>
            <p className="self-stretch text-slate-500 text-sm leading-[22.4px] relative [font-family:'Inter-Regular',Helvetica] font-normal tracking-[0]">
              Masuk untuk mengelola informasi beasiswa dan ormawa.
            </p>
          </div>
          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <label
                htmlFor="email-or-username"
                className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#192b45] text-sm tracking-[0] leading-[normal]"
              >
                Email atau Username
              </label>
              <div className="flex h-[52px] items-center gap-3 px-4 py-0 relative self-stretch w-full bg-white rounded-lg overflow-hidden border border-solid border-slate-300">
                <div className="relative w-[18px] h-[18px]">
                  {/* <img
                    className="absolute w-[87.78%] h-[91.95%] top-[8.05%] left-[12.22%]"
                    alt=""
                    aria-hidden="true"
                    src={vector3}
                  /> */}
                </div>
                <input
                  id="email-or-username"
                  name="emailOrUsername"
                  type="text"
                  autoComplete="username"
                  value={emailOrUsername}
                  onChange={(event) => setEmailOrUsername(event.target.value)}
                  placeholder="Masukkan email atau ID Staf"
                  className="relative flex-1 min-w-0 [font-family:'Inter-Regular',Helvetica] font-normal text-slate-800 text-sm tracking-[0] leading-[normal] placeholder:text-slate-400 outline-none"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <label
                htmlFor="password"
                className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#192b45] text-sm tracking-[0] leading-[normal]"
              >
                Kata sandi
              </label>
              <div className="flex h-[52px] items-center gap-3 px-4 py-0 relative self-stretch w-full bg-white rounded-lg overflow-hidden border border-solid border-slate-300">
                <div className="relative w-[18px] h-[18px]">
                  {/* <img
                    className="absolute w-[91.95%] h-[96.12%] top-[3.88%] left-[8.05%]"
                    alt=""
                    aria-hidden="true"
                    src={vector4}
                  /> */}
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Masukkan kata sandi"
                  className="relative flex-1 min-w-0 [font-family:'Inter-Regular',Helvetica] font-normal text-slate-800 text-sm tracking-[0] leading-[normal] placeholder:text-slate-400 outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  className="inline-flex items-center gap-1.5 relative flex-[0_0_auto] cursor-pointer"
                >
                  <span className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-slate-500 text-xs tracking-[0] leading-[normal] hover:text-slate-700">
                    {showPassword ? "Sembunyikan" : "Tampilkan"}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
            <button
              type="submit"
              className="flex h-[52px] items-center justify-center gap-2 px-5 py-0 relative self-stretch w-full bg-[#2f6fed] hover:bg-blue-700 transition-colors rounded-lg overflow-hidden cursor-pointer"
            >
              <span className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                Masuk Sistem
              </span>
            </button>
          </div>
        </form>
        <footer className="flex items-center justify-between pt-5 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#e9eef5]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-slate-500 text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
            © 2026 SI-BEO
          </div>
          <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-slate-500 text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
              Hanya untuk Staf Biro Kemahasiswaan
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
};

export default LoginAdmin;