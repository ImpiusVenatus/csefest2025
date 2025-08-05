import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CSE Fest 2025",
  description: "Hehe CSE Fest 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="cursor-none">
      <body className="antialiased">
        <div className={`${anton.variable} min-h-screen`}>
          <CustomCursor />
          {children}
        </div>
      </body>
    </html>
  );
}
