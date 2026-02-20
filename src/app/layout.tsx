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
  title: "Frontend Kit - 프론트엔드 플래시카드",
  description:
    "CS, JavaScript, React, HTML/CSS, 자료구조, 알고리즘 등 프론트엔드 지식을 플래시카드로 학습하세요. 스와이프로 간편하게 넘기고, 오프라인에서도 사용할 수 있는 PWA 앱입니다.",
  keywords: [
    "프론트엔드",
    "플래시카드",
    "JavaScript",
    "React",
    "CS",
    "면접준비",
    "개발자",
    "학습",
    "PWA",
  ],
  authors: [{ name: "Frontend Kit" }],
  creator: "Frontend Kit",
  metadataBase: new URL("https://frontend-kit.vercel.app"),
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "Frontend Kit - 프론트엔드 플래시카드",
    description:
      "CS, JavaScript, React 등 프론트엔드 지식을 플래시카드로 학습하세요.",
    siteName: "Frontend Kit",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Frontend Kit - 프론트엔드 지식을 학습하는 플래시카드 앱",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Kit - 프론트엔드 플래시카드",
    description:
      "CS, JavaScript, React 등 프론트엔드 지식을 플래시카드로 학습하세요.",
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
    title: "Frontend Kit",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
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
