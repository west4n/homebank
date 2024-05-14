import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { ClerkProvider } from "@clerk/nextjs";

import { ruRU } from "@clerk/localizations";

import "./globals.css";

export const metadata: Metadata = {
  title: "HOMEBANK | Домашний банк",
  description: "Домашний банк",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ruRU}>
      <html lang="ru">
        <body className={GeistSans.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
