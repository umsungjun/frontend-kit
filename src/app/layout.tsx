import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/providers/ThemeProvider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "프론트엔드 개발자 면접 준비 | Frontend Kit",
  description:
    "JavaScript, React, CS, HTML/CSS, 자료구조, 알고리즘 등 프론트엔드 핵심 개념을 플래시카드로 빠르게 복습하세요. 취업 준비생·현직 개발자를 위한 무료 학습 앱.",
  keywords: [
    "프론트엔드 면접",
    "개발자 면접 준비",
    "프론트엔드",
    "플래시카드",
    "JavaScript",
    "자바스크립트 개념",
    "React",
    "리액트 면접",
    "CS",
    "면접 질문",
    "취업 준비",
    "개념 정리",
    "PWA",
  ],
  authors: [{ name: "Frontend Kit" }],
  creator: "Frontend Kit",
  metadataBase: new URL("https://frontend-kit.vercel.app"),
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "프론트엔드 개발자 면접 준비 | Frontend Kit",
    description:
      "JavaScript, React, CS 등 프론트엔드 핵심 개념을 플래시카드로 빠르게 복습하세요. 취업 준비생·현직 개발자를 위한 무료 학습 앱.",
    siteName: "Frontend Kit",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "프론트엔드 개발자 면접 준비 | Frontend Kit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "프론트엔드 개발자 면접 준비 | Frontend Kit",
    description:
      "JavaScript, React, CS 등 프론트엔드 핵심 개념을 플래시카드로 빠르게 복습하세요. 취업 준비생·현직 개발자를 위한 무료 학습 앱.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "프론트엔드 개발자 면접 준비 | Frontend Kit",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
