import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { pageMetadata } from "@/lib/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = pageMetadata(
  "/",
  "庄司剛 | Freelance Software Engineer",
  "札幌を拠点に活動するフリーランスソフトウェアエンジニア、庄司剛のポートフォリオ。ビジネスの目的を理解し、設計から実装まで一貫して取り組みます。",
);

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="initial-scroll-position" strategy="beforeInteractive">
          {`(() => {
            const navigation = performance.getEntriesByType('navigation')[0];
            if (location.hash || navigation?.type === 'back_forward') return;
            history.scrollRestoration = 'manual';
            const resetScroll = () => {
              if (!location.hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            };
            resetScroll();
            window.addEventListener('pageshow', (event) => {
              if (!event.persisted) resetScroll();
            });
            window.addEventListener('pagehide', () => {
              history.scrollRestoration = 'auto';
            });
          })();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
