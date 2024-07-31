import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Ensure this points to the correct global CSS file

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Account Security Dashboard",
  description: "A user interface to manage account security settings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
