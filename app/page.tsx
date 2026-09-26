import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center min-h-[75vh] space-y-8">
      
      {/* Terminal Header Info */}
      <div className="inline-flex items-center space-x-2 text-xs text-emerald-500/80 bg-emerald-950/40 border border-emerald-900/50 px-3 py-1.5 rounded-full w-fit">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>STATUS: ONLINE // CORE_SYSTEM_ACTIVE</span>
      </div>

      {/* Main Hero Header */}
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-green-500 drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">
          WELCOME TO SETH'S HUB
        </h1>
        <p className="text-emerald-400/80 text-lg sm:text-xl max-w-2xl font-light leading-relaxed">
          This is a personal portfolio and project showcase, highlighting my skills in software development, web design, and system programming. Explore my work, learn about my experience, and connect with me through the provided links.
        </p>
      </div>

      {/* Quick Terminal Stats Box */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border border-emerald-900/60 bg-[#08120c]/80 p-5 rounded-lg backdrop-blur">
        <div>
          <div className="text-xs text-emerald-600 uppercase font-bold">OPERATIONAL STATUS</div>
          <div className="text-sm text-emerald-300 font-semibold mt-1">Ready for Deployment</div>
        </div>
        <div>
          <div className="text-xs text-emerald-600 uppercase font-bold">PRIMARY DIRECTIVE</div>
          <div className="text-sm text-emerald-300 font-semibold mt-1">Software Engineering</div>
        </div>
        <div>
          <div className="text-xs text-emerald-600 uppercase font-bold">CORE EXPERIENCE</div>
          <div className="text-sm text-emerald-300 font-semibold mt-1">2+ Years Active</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 pt-4">
        <Link
          href="/portfolio"
          className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-black uppercase tracking-widest bg-emerald-400 rounded overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:bg-emerald-300 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>PROCEED TO PORTFOLIO</span>
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Link>

        <Link
          href="/about"
          className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/50 border border-emerald-600/50 rounded hover:bg-emerald-900/50 hover:border-emerald-400 transition-all"
        >
          READ MISSION BRIEF
        </Link>
      </div>

    </div>
  );
}