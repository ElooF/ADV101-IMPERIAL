'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
  tag: string;
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'EcoScan System UI',
    category: 'Web App',
    description: 'An AI-driven waste identification scanner dashboard designed with futuristic green telemetry UI elements.',
    tag: 'HTML / JS / CSS',
    image: '/gallery/ecoscan.png',
  },
  {
    id: 2,
    title: 'Terminal Snake Game',
    category: 'Game Dev',
    description: 'A classic snake game implemented in C++ with terminal graphics, featuring dynamic speed adjustments and score tracking. ',
    tag: 'C++',
    image: '/gallery/cplusplus.png',
  },
  {
    id: 3,
    title: 'Standard Web App Bank System',
    category: 'Web App',
    description: 'A simple banking system web application with user authentication, account management, and transaction history features.',
    tag: 'HTML / SQL/ JS / CSS',
    image: '/gallery/bank.png',
  },
  {
    id: 4,
    title: '2D Java Shooting Game',
    category: 'Java GUI',
    description: 'A 2D shooting game built with Java Swing, featuring player movement, enemy AI, and score tracking.',
    tag: 'Java',
    image: '/gallery/shooting.png',
  },
  {
    id: 5,
    title: 'Student LMS Web App',
    category: 'Web App',
    description: 'A learning management system web application for students, providing course materials, assignments, and progress tracking.',
    tag: 'PHP / SQL / JS / CSS',
    image: '/gallery/learnity.png',
  },
  {
    id: 6,
    title: 'BNW Digital Web Design',
    category: 'Graphics',
    description: 'A digital graphic design project showcasing a monochromatic black-and-white theme with modern UI elements and typography.',
    tag: 'Design / UI',
    image: '/gallery/graphic.png',
  },
];

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <div className="space-y-8">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-extrabold text-emerald-400 tracking-wider">
          PROJECT_GALLERY // ARCHIVE
        </h1>
        <p className="text-xs text-emerald-600 mt-1">CLICK ANY ITEM TO INSPECT DETAILS</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group cursor-pointer border border-emerald-900/60 bg-[#08120c]/80 rounded-lg overflow-hidden hover:border-emerald-500/80 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] flex flex-col"
          >
            {/* Image Container */}
            <div className="h-44 bg-emerald-950/70 border-b border-emerald-900/60 relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
              <div className="absolute top-2 left-2 z-10">
                <span className="text-[10px] font-mono text-emerald-300 border border-emerald-700 bg-black/80 px-2 py-0.5 rounded backdrop-blur">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="p-4 flex flex-col justify-between flex-grow bg-emerald-950/20 space-y-2">
              <div className="text-emerald-300 font-bold group-hover:text-emerald-400 transition-colors">
                {item.title}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-emerald-600 font-mono">{item.tag}</span>
                <span className="text-xs text-emerald-400 font-bold group-hover:translate-x-1 transition-transform">
                  INSPECT →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="border border-emerald-500 bg-[#050b07] max-w-lg w-full p-6 rounded-lg shadow-[0_0_30px_rgba(16,185,129,0.3)] relative space-y-4">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-4 text-emerald-500 hover:text-emerald-300 text-lg font-bold z-10"
            >
              ✕
            </button>

            <div className="text-xs text-emerald-600 uppercase font-mono">
              INSPECTION // ID #{selectedItem.id}
            </div>

            {/* Modal Image */}
            <div className="w-full h-56 bg-emerald-950 rounded border border-emerald-900 overflow-hidden relative">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <h3 className="text-xl font-bold text-emerald-400">{selectedItem.title}</h3>

            <div className="p-4 bg-emerald-950/40 border border-emerald-900 rounded text-xs text-emerald-300 leading-relaxed font-sans">
              {selectedItem.description}
            </div>

            <div className="flex items-center justify-between text-xs pt-2">
              <span className="text-emerald-500">TAG: {selectedItem.tag}</span>
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-1.5 bg-emerald-500 text-black font-bold rounded hover:bg-emerald-400 transition"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}