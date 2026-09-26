export default function MatrixBg() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-15 overflow-hidden">
      {/* Matrix Mesh Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#052e16_1px,transparent_1px),linear-gradient(to_bottom,#052e16_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Center Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px]" />
    </div>
  );
}