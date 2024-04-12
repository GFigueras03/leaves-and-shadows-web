import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import Link from "next/link";
import Cookies from 'js-cookie';
import { cinzel } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Leaves & Shadows",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="w-screen h-screen bg-zinc-950 flex flex-col items-center">

        {children}
        </body>
    </html>
  );
}