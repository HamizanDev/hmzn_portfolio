import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Readex_Pro } from 'next/font/google'
import { Source_Serif_4 } from 'next/font/google'

const readex_init = Readex_Pro({
  subsets: ['latin'],
  weight: ['300','400','500', '700'],
  variable: '--font-readex',
});

const source_init = Source_Serif_4({
  subsets: ['latin'],
  weight: ['500', '600','700', '800'],
  variable: '--font-source',
  style: 'italic',
});

export const metadata: Metadata = {
  title: "Hamizan's Portfolio",
  description: "Nice to meet you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${readex_init.variable} ${source_init.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
