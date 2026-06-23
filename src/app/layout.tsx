import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "تطبيق النسر للعقود الدائمة",
  description:
    "Internal HR & Contracts Management System for collecting employee permanent contract data, managing document uploads, and synchronizing records with spreadsheets using cloud storage links.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="en" className={cairo.className}>
      <body>{children}</body>
    </html>
  );
}
