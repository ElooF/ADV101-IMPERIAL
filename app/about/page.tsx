export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-extrabold text-emerald-400 tracking-wider">
          MISSION_LOG // ABOUT
        </h1>
        <p className="text-xs text-emerald-600 mt-1">ORIGIN STORY & PHILOSOPHY</p>
      </div>

      {/* Primary Narrative Quote Box */}
      <div className="relative border-l-4 border-emerald-500 bg-[#08120c]/90 p-6 sm:p-8 rounded-r-lg border-y border-r border-emerald-900/60 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
        <div className="text-xs text-emerald-500 mb-4 font-bold tracking-widest uppercase">
          [ STATEMENT_LOG_#01 ]
        </div>
        <p className="text-emerald-200 text-base sm:text-lg leading-relaxed italic font-sans">
          "I started my BSIT journey because I was inspired to create something to share with the world. I was obsessed with creating things that people could enjoy, and because of that, I started learning how to code. With every line I create, it brings joy to my heart and warms me up."
        </p>
      </div>

      {/* Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1 */}
        <div className="border border-emerald-900/60 bg-[#08120c]/80 p-6 rounded-lg space-y-3">
          <h2 className="text-emerald-400 font-bold text-sm tracking-wider uppercase border-b border-emerald-900 pb-2">
            HOW I GOT THIS FAR
          </h2>
          <p className="text-emerald-300/80 text-sm leading-relaxed">
            I got this far because of my sheer eagerness to learn how to code and contribute to society. I believe that coding is not just for money, but for the sake of creativity and the freedom to create whatever little ideas you have in your head.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-emerald-900/60 bg-[#08120c]/80 p-6 rounded-lg space-y-3">
          <h2 className="text-emerald-400 font-bold text-sm tracking-wider uppercase border-b border-emerald-900 pb-2">
            PURPOSE OF THIS HUB
          </h2>
          <p className="text-emerald-300/80 text-sm leading-relaxed">
            This website serves as a central repository to display what I have accomplished, learned, and refined throughout my years of study and development.
          </p>
        </div>

      </div>

      {/* Core Values */}
      <div className="border border-emerald-900/60 bg-[#08120c]/80 p-6 rounded-lg">
        <h3 className="text-emerald-400 font-bold text-sm uppercase mb-4">CORE_VALS</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-emerald-300/90">
          <li className="p-3 bg-emerald-950/40 border border-emerald-900/50 rounded">
            <strong className="block text-emerald-400 mb-1">01. CREATIVITY FIRST</strong>
            Coding as an art form rather than routine computation.
          </li>
          <li className="p-3 bg-emerald-950/40 border border-emerald-900/50 rounded">
            <strong className="block text-emerald-400 mb-1">02. DRIVEN BY IMPACT</strong>
            Building applications that deliver real enjoyment and utility.
          </li>
          <li className="p-3 bg-emerald-950/40 border border-emerald-900/50 rounded">
            <strong className="block text-emerald-400 mb-1">03. ADAPTABILITY</strong>
            Continuously mastering new tech languages and architectures.
          </li>
        </ul>
      </div>

    </div>
  );
}