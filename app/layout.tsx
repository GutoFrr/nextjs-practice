import Link from 'next/link';
import { ReactNode } from 'react';
import '../styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Browse a list of React memes',
  title: 'RandoMemes',
};
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html>
      <body>
        <div className="bg-teal-700 shadow-md fixed top-0 w-screen z-10">
          <header className="container mx-auto flex justify-between items-center py-3 text-white font-semibold">
            <Link
              href="/"
              className="text-2xl cursor-pointer hover:text-teal-100"
            >
              RandoMemes
            </Link>
            <nav className="flex gap-3">
              <Link href="/" className="hover:text-teal-100">
                All Memes
              </Link>
              <Link href="/new-meme" className="hover:text-teal-100">
                Add New Meme
              </Link>
            </nav>
          </header>
        </div>
        <main className="container mx-auto py-14">{children}</main>
      </body>
    </html>
  );
}
