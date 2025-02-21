import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/layout/Sidebar";
import Navbar from "@/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex fixed left-0 top-0 w-full h-screen">
          <Sidebar />
          <div className="w-full overflow-y-scroll h-full">
            <Navbar />
            <div className="w-full h-full overflow-y-scroll">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
