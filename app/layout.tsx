import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Splash from "./Splash";
import "@radix-ui/themes/styles.css";
import "@/app/theme-config.css";
import { Theme } from "@radix-ui/themes";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Toaster />
        <Theme>
          <Splash />
          <Navbar />
          <main className="px-16">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
