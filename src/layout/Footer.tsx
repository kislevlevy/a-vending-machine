export default function Footer() {
  return (
    <div className="flex bg-[#4492b8]/80 justify-between p-3 items-center mt-52">
      <div dir="rtl" className="w-full flex flex-col items-center text-white">
        <p>AVM {new Date().getFullYear()} © - All rights Reserved</p>
        <p className="text-sm" dir="ltr">
          {'Built and designed by '}
          <a
            href="https://kislev.me"
            target="_blank"
            className="hover:text-white/80"
          >
            Kislev Levy
          </a>
        </p>
      </div>
    </div>
  );
}
