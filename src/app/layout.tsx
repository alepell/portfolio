import type { Metadata } from "next";
import { Inconsolata } from 'next/font/google'
import "./globals.css";
import NavBar from "./components/NavBar";
import { SocialIcon } from "react-social-icons/component";
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'
import 'react-social-icons/whatsapp'
const inter = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Alexandre Pellegrino",
  description: "Desenvolvedor Frontend com experiência em React, Next.js, e Flutter. Criação de sites, automações e e-commerce com soluções personalizadas para transformar negócios digitais. Confira meu portfólio e entre em contato para saber mais sobre como posso ajudar a impulsionar seu projeto.",
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
        <div className="flex absolute left-1/2 top-[-240px] transform -translate-x-1/2 items-center justify-center">
          <div className="w-[400px] h-[400px] sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-b from-violet-900 via-violet-700 via-opacity-80 to-transparent bg-opacity-20 shadow-lg shadow-violet-900 blur-xl" />
        </div>
        <header className="w-full px-8 md:px-24 py-8">
          <NavBar />
        </header>
        {children}
        <footer id="contato" className="w-full p-12 flex flex-col space-y-12 items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white text-4xl">Contato</h1>
            <div className="flex space-x-4 mt-8">
              <SocialIcon className="w-8 h-8" bgColor="white" fgColor="black" href="https://www.instagram.com/ale.pell_/" url="www.instagram.com" />
              <SocialIcon className="w-8 h-8" bgColor="white" fgColor="black" href="https://www.linkedin.com/in/alexandre-freire-pellegrino-b09b88171/" url="www.linkedin.com" />
              <SocialIcon className="w-8 h-8" bgColor="white" fgColor="black" href="https://wa.me/5511954893231" url="www.whatsapp.com" />
            </div>
          </div>
          <h1 className="text-white text-opacity-40">© 2024 Alexandre Pellegrino Portfolio</h1>
        </footer>
      </body>
    </html>
  );
}
