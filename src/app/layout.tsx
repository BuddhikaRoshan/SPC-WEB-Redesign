import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Achiever's Choice",
  description: "SPC - Delivering innovative solutions for your business",
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicon-128x64.png", sizes: "128x64" },
      { rel: "icon", url: "/favicon-192x192.png", sizes: "192x192" },
      { rel: "icon", url: "/favicon-512x512.png", sizes: "512x512" },
      { rel: "shortcut icon", url: "/favicon.ico" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>

    
      </body>
    </html>
  );
}
