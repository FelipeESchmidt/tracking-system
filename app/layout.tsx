import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tracking System",
  description: "Innovative Tracking System using maps",
};

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
};
export default RootLayout;
