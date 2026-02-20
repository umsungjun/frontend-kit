import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "프론트엔드 개발자 면접 준비 | Frontend Kit",
    short_name: "Frontend Kit",
    description: "JavaScript, React, CS 등 프론트엔드 핵심 개념을 플래시카드로 빠르게 복습하세요. 취업 준비생·현직 개발자를 위한 무료 학습 앱.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#f97316",
    orientation: "portrait",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
