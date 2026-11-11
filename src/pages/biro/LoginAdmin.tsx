import { type FormEvent, useState, type JSX } from "react";

const featureItems = [
  {
    title: "Informasi beasiswa",
    description: "Publikasi, persyaratan, dan tenggat",
  },
  {
    title: "Organisasi mahasiswa",
    description: "Profil, kegiatan, dan rekrutmen",
  },
];

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
              <div className="relative w-[26px] h-[26px]" />
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
              <div className="relative w-[22px] h-[22px]" />
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
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 relative flex-[0_0_auto] bg-[#edf3ff] rounded-md overflow-hidden">
            <div className="relative w-3.5 h-3.5" />
            <div className="left w-fit ml-[-0.50px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2f6fed] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
              Akses administrator
            </div>
          </div>
        </div>
        
        {/* Container Logo / Gambar Kosong Siap Akses Image Luar */}
        <div className="relative my-auto flex items-center justify-center">
          <img
            src="" 
            alt="Logo Institusi"
            className="relative w-[179px] h-[190px] aspect-[0.94] object-contain"
          />
        </div>

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
                <div className="relative w-[18px] h-[18px]" />
                <input
                  id="email-or-username"
                  name="emailOrUsername"
                  type="text"
                  autoComplete="username"
                  value={emailOrUsername}
                  onChange={(event) => setEmailOrUsername(event.target.value)}
                  placeholder="Masukkan email atau username"
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
                <div className="relative w-[18px] h-[18px]" />
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