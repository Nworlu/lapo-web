"use client";
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/layout/Sidebar";
import Navbar from "@/layout/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="flex fixed left-0 top-0 w-full h-screen">
              <Sidebar />
              <div className="w-full overflow-y-scroll h-full">
                <Navbar />
                <div className="w-full h-full overflow-y-scroll mt-20cre pt-2 lg:pt-0 lg:mt-0">
                  {children}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
