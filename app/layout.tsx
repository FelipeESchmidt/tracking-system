import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { IWithChildren } from "@/types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tracking System",
  description: "Innovative Tracking System using maps",
};

export const RootLayout = ({ children }: IWithChildren) => {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
};
export default RootLayout;
