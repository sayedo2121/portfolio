import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Cursor from "./components/Cursor";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sayed Portfolio",
  description: "Pushing All Boundries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor />
        <div><Toaster/></div>
        <main className="w-full h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
