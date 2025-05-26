import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LGDeviveLogo from "@/components/ui/LGDeviveLogo";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MH Jim | MERN Stack Developer",
  keywords: [
    "MERN Stack Developer",
    "Web Developer",
    "Full Stack Developer",
    "JavaScript Developer",
    "React Developer",
    "Node.js Developer",
    "Express.js Developer",
    "MongoDB Developer",
  ],
  description:
    "Hi, I'm Jim- a passionate MERN Stack Developer focused on building fast, responsive, and scalable web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LGDeviveLogo />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
