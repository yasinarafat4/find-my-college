import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/home/Navbars/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="lg:max-w-[980px] xl:max-w-7xl px-[10px] mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
