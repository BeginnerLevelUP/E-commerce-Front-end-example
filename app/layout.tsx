import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SearchBar from "./components/SearchBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce Example ",
  description: "Front End E-commerce example made with nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <SearchBar></SearchBar>
        {children}
        </body>
    </html>
  );
}
