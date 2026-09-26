'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavItem {
    name: string;
    path: string;
    badge?: string;
}

const NAV_ITEMS: NavItem[] = [
    { name: 'HOME', path: '/' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'ABOUT_ME', path: '/about' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#050b07]/90 backdrop-blur-md border-b border-emerald-900/60 shadow-[0_4px_20px_rgba(16,185,129,0.1)]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center space-x-2 group"
        >
          <div className="w-8 h-8 rounded bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400 font-bold group-hover:bg-emerald-500 group-hover:text-black transition-all shadow-[0_0_10px_rgba(16,185,129,0.3)]">
            S
          </div>
          <span className="font-bold tracking-wider text-emerald-400 group-hover:text-emerald-300">
            SETH<span className="text-emerald-600">.HUB</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-4 py-2 text-xs font-semibold tracking-widest transition-all uppercase rounded ${
                  isActive
                    ? 'text-emerald-300 bg-emerald-950/80 border border-emerald-500/50 shadow-[0_0_12px_rgba(16,185,129,0.25)]'
                    : 'text-emerald-600/80 hover:text-emerald-400 hover:bg-emerald-950/30'
                }`}
              >
                {isActive && (
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                )}
                <span className={isActive ? 'pl-2' : ''}>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle Button */}
        <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-emerald-400 p-2 focus:outline-none border border-emerald-800 rounded"
            aria-label="Toggle Navigation Menu"
        >
            {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-emerald-900/60 bg-[#050b07] px-4 py-3 space-y-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 text-sm font-semibold tracking-wider rounded transition-all ${
                  isActive
                    ? 'text-emerald-300 bg-emerald-900/40 border border-emerald-500/50'
                    : 'text-emerald-600 hover:text-emerald-400'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}