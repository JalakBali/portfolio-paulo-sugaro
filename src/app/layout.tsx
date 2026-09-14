import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

// NOTE (branch portfolio-freelance): metadataBase & openGraph.url masih
// mengarah ke paulosugaro.com karena subdomain khusus branch ini belum
// ditentukan (Langkah 8). Update ke subdomain final begitu sudah live.
export const metadata: Metadata = {
  metadataBase: new URL("https://paulosugaro.com"),
  title: "Jasa Bikin Sistem Booking & Reservasi Online | Paulo Sugaro",
  description:
    "Jasa bikin sistem booking dan reservasi online custom—anti bentrok jadwal, konfirmasi otomatis. Developer sistem reservasi untuk UMKM dan bisnis lokal.",
  alternates: {
    canonical: "/",
  },
  // Branch ini khusus dikirim manual lewat proposal/chat (mis. Projects.co.id),
  // bukan untuk ditemukan lewat pencarian organik.
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Paulo Sugaro — Jasa Sistem Booking & Reservasi Online",
    description:
      "Sistem booking online yang anti bentrok jadwal, dibangun sesuai alur bisnis Anda.",
    url: "https://paulosugaro.com",
    siteName: "Paulo Sugaro",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulo Sugaro — Jasa Sistem Booking & Reservasi Online",
    description:
      "Sistem booking online yang anti bentrok jadwal, dibangun sesuai alur bisnis Anda.",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} min-h-full flex flex-col`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
