import './globals.css';
import type { Metadata } from 'next';
import { Inter, Readex_Pro, Roboto } from 'next/font/google';
import Navbar from './components/Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto',
});
const readexPro = Readex_Pro({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-read-ex',
});
export const metadata: Metadata = {
  title: 'Reddit',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${readexPro.className} ${roboto.className}  `}>
        <Navbar />
        <div className="w-full bg-orange-500 h-2"></div>
        {children}
      </body>
    </html>
  );
}
