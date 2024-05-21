import '@/styles/globals.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainHeader from '@/components/MainHeader';
import { ThemeProvider } from 'next-themes';
import myIamge from '@images/alireza_bagheri.jpg';

const inter = Inter({
  subsets: ['latin'],
  variable: '--cm-fontFamily-inter',
});

export const metadata: Metadata = {
  title: "Alireza Bagheri",
  description: "Senior frontend developer passionate about building fast, high-performance applications with modern web technologies.",
  openGraph: {
    title: '',
    type: "website",
    locale: "en_US",
    url: "https://alireza-bagheri.me",
    siteName: "Alireza Bagheri's Portfolio",
    images: [
      {
        url: myIamge.src,
        width: 640,
        height: 640,
        alt: "Alireza-Bagheri",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable}`}>
        <ThemeProvider>
          <div className="min-h-[100vh] flex flex-col">
            <MainHeader />
            <main className="grow cm-scrollbar">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
