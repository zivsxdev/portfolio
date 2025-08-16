import type { Metadata } from "next";
import { Archivo } from 'next/font/google';
import Providers from './providers';

import "./globals.css";

const archivo = Archivo({
    display: "swap",
    weight: "variable",
    subsets: ["latin"],
    variable: "--font-archivo",

});

export const metadata: Metadata = {
  title: "zivsxdev",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-stone-200 text-stone-900 ${archivo.variable} font-sans`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
