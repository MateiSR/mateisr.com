import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: "MateiSR.com",
  description: "Matei Radu - Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased h-screen w-screen flex flex-col`}>
        <div className="m-4 mb-0">
          <Navbar />
        </div>
        <div className="flex-1 p-4">
          {children}
        </div>
      </body>
    </html>
  );
}

