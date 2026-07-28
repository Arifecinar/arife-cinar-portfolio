import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arife Çınar — Frontend & Full-Stack Geliştirici",
  description:
    "Pamukkale Üniversitesi Bilgisayar Mühendisliği mezunu. React, Next.js, Node.js, PostgreSQL ve React Native ile kullanıcı deneyimi odaklı projeler geliştiriyorum.",
  keywords: [
    "Arife Çınar",
    "Frontend Geliştirici",
    "Full-Stack",
    "React",
    "Next.js",
    "portfolyo",
  ],
  authors: [{ name: "Arife Çınar" }],
  openGraph: {
    title: "Arife Çınar — Frontend & Full-Stack Geliştirici",
    description:
      "React, Next.js, Node.js, PostgreSQL ve React Native ile kullanıcı deneyimi odaklı projeler geliştiriyorum.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
