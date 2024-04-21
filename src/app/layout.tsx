import '@/styles/globals.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainHeader from '@/components/MainHeader';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--cm-fontFamily-inter',
});
export const metadata: Metadata = {
  title: "Alireza Bagheri",
  description: "Senior Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <div className="min-h-[100vh] flex flex-col">
          <MainHeader />
          <main className="grow pt-18">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
