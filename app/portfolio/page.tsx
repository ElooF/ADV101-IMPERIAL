import Image from 'next/image';

interface Achievement {
  label: string;
  value: string;
  desc: string;
}

interface Language {
  name: string;
  level: string;
  color: string;
}

const ACHIEVEMENTS: Achievement[] = [
  { label: 'SMALL PROJECTS', value: '33', desc: 'Mini-apps, utilities & tools completed' },
  { label: 'MAJOR SYSTEMS', value: '02', desc: 'Full-scale deployed platforms' },
  { label: 'CODING EXPERIENCE', value: '2+ Yrs', desc: 'Continuous development & study' },
];

const LANGUAGES: Language[] = [
  { name: 'C++', level: 'Advanced', color: 'border-emerald-500/80' },
  { name: 'JavaScript', level: 'Advanced', color: 'border-emerald-500/80' },
  { name: 'C#', level: 'Intermediate', color: 'border-emerald-600/60' },
  { name: 'Java', level: 'Intermediate', color: 'border-emerald-600/60' },
  { name: 'HTML5', level: 'Expert', color: 'border-emerald-400' },
  { name: 'CSS3', level: 'Expert', color: 'border-emerald-400' },
  { name: 'PHP', level: 'Intermediate', color: 'border-emerald-600/60' },
  { name: 'MySQL', level: 'Intermediate', color: 'border-emerald-600/60' },
  { name: 'Python', level: 'Intermediate', color: 'border-emerald-600/60' },
];

export default function PortfolioPage() {
  return (
    <div className="space-y-10">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-emerald-400 tracking-wider">
          SYSTEM_PORTFOLIO // METRICS
        </h1>
        <p className="text-xs text-emerald-600 mt-1">DATA REPOSITORY & TECH SPECS</p>
      </div>

      {/* Profile Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center border border-emerald-900/60 bg-[#08120c]/80 p-6 rounded-lg backdrop-blur">
        
        {/* Avatar Placeholder */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="relative w-36 h-36 rounded-full border-2 border-emerald-500 p-1 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <div className="w-full h-full rounded-full bg-emerald-950 flex items-center justify-center text-emerald-400 font-bold text-xl border border-emerald-800 overflow-hidden relative">
              {/* Placeholder for Avatar Image */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/30 to-emerald-950 flex items-center justify-center">
                <Image 
                  src="/seth.jpg"
                  alt="Seth"
                  width={144}
                  height={144}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold text-emerald-300">SETH</h2>
            <p className="text-xs text-emerald-600">BSIT STUDENT & DEVELOPER</p>
          </div>
        </div>

        {/* Quick Bios Specs */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-emerald-400 font-semibold text-sm border-b border-emerald-900 pb-2">
            OPERATOR BIO
          </h3>
          <p className="text-sm text-emerald-300/80 leading-relaxed">
            Passionate software developer specializing in backend systems, web applications, and low-level programming. Experienced in C++, JavaScript, and Python, with a strong foundation in algorithms and data structures. Dedicated to continuous learning and contributing to innovative projects.
          </p>

          {/* Social Links */}
          <div className="pt-2 flex flex-wrap gap-3">
            <a 
              href="https://github.com/ElooF" 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2 text-xs font-bold border border-emerald-700 bg-emerald-950/60 text-emerald-400 rounded hover:bg-emerald-900/60 transition"
            >
              GITHUB ↗
            </a>
            <a 
              href="https://www.instagram.com/cnukaba.j/" 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2 text-xs font-bold border border-emerald-700 bg-emerald-950/60 text-emerald-400 rounded hover:bg-emerald-900/60 transition"
            >
              INSTAGRAM ↗
            </a>
            <a 
              href="https://www.facebook.com/jarrylseth.imperial.14" 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2 text-xs font-bold border border-emerald-700 bg-emerald-950/60 text-emerald-400 rounded hover:bg-emerald-900/60 transition"
            >
              FACEBOOK ↗
            </a>
          </div>
        </div>
      </div>

      {/* Key Metrics / Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ACHIEVEMENTS.map((item, idx) => (
          <div 
            key={idx}
            className="border border-emerald-900/70 bg-[#08120c]/90 p-5 rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
          >
            <div className="text-3xl font-black text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">
              {item.value}
            </div>
            <div className="text-xs font-bold text-emerald-300 mt-1">{item.label}</div>
            <div className="text-xs text-emerald-600 mt-2">{item.desc}</div>
          </div>
        ))}
      </div>

      {/* Technical Stack / Languages */}
      <div className="border border-emerald-900/60 bg-[#08120c]/80 p-6 rounded-lg">
        <h3 className="text-emerald-400 font-semibold text-sm border-b border-emerald-900 pb-3 mb-4">
          ACQUIRED_PROGRAMMING_LANGUAGES
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3">
          {LANGUAGES.map((lang, idx) => (
            <div 
              key={idx}
              className={`p-3 rounded border bg-emerald-950/30 ${lang.color} flex flex-col justify-between`}
            >
              <span className="text-emerald-200 font-bold text-sm">{lang.name}</span>
              <span className="text-[10px] text-emerald-500 uppercase mt-2 tracking-wider">
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}