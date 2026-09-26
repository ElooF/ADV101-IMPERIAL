export default function Footer() {
  return (
    <footer className="border-t border-emerald-900/60 bg-[#050b07] py-6 relative z-10 text-center text-xs text-emerald-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div>
          © {new Date().getFullYear()} SETH. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}