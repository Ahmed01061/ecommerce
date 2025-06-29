import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce App",
  description: "An e-commerce application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-full flex-col ${josefin.className}`}>
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
