import type { Metadata } from "next";
import Cursor from "./components/Cursor";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Sayed Portfolio",
  description: "Sayed's little knock in space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className=''>
        <Cursor />
        <div><Toaster/></div>
        <main className="w-full h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
