import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Space_Grotesk} from "next/font/google"
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Header from "./sharedComp/Header";
import Footer from "./sharedComp/Footer";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})
const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});
export const metadata: Metadata = {
  title: "Nimbleminds",
  description: "Accelerating access to innovation with AI",
  icons:{
    icon:'/logoai.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dm_sans.variable} ${space_grotesk.variable} ${inter.variable}`}>
      <body  className="bg-[#070815] text-white">
        <Header />
        <main className=" mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
