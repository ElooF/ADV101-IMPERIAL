import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MatrixBg from '@/components/MatrixBg';

export const metadata: Metadata = {
  title: 'SETH // NEXUS MATRIX',
  description: 'Seth\'s Developer Portfolio & Creative Hub',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050b07] text-[#a0f0c0] font-mono min-h-screen flex flex-col selection:bg-emerald-500 selection:text-black antialiased overflow-x-hidden">
        <MatrixBg />
        <Header />
        <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-8 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}