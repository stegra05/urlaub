import type { Metadata } from "next";
import { Nunito, Quicksand } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Konfiguration der Schriftarten
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito", // CSS-Variable für Fließtext
  display: "swap",
  weight: ["400", "500", "600", "700"], // Verschiedene Schriftschnitte
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand", // CSS-Variable für Überschriften
  display: "swap",
  weight: ["500", "600", "700"], // Mittlere bis fette Schnitte für Überschriften
});

export const metadata: Metadata = {
  title: "Europäische Strandziele",
  description:
    "Entdecken Sie die schönsten Strandziele in Europa im Ghibli-Stil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Kombiniere die Font-Variablen im html-Tag
    <html lang="de" className={`${nunito.variable} ${quicksand.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Europäische Strandziele" />
        <meta property="og:description" content="Entdecken Sie die schönsten Strandziele in Europa im Ghibli-Stil" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://europaeische-strandziele.de" />
        <meta property="og:image" content="https://europaeische-strandziele.de/images/og-image.jpg" />
      </head>
      {/* Weise Nunito als Hauptschriftart dem Body zu */}
      <body className={`font-sans ${nunito.className}`}>
        <Header />
        <div className="flex min-h-screen flex-col">
          <main className="flex-grow py-8">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
