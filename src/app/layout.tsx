import type { Metadata } from "next";
import { Inconsolata } from 'next/font/google'
import "./globals.css";

const inter = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Alê Pellegrino 💻",
  description: "Desenvolvendo Soluções para seu negócio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
