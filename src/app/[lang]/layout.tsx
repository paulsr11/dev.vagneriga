import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSettings } from "@/lib/wp";

export const metadata: Metadata = {
  title: "Vagneriga",
  description: "Vagneriga project",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const settings = await getSettings();

  return (
    <html lang={lang}>
      <head>
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header lang={lang} />
        <div className="pt-[112px]">
          {children}
        </div>
        <Footer settings={settings} lang={lang} />
      </body>
    </html>
  );
}
