// components/Navbar.tsx
"use client";

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import AnimatedLink from "./AnimatedLink";
import { motion } from "framer-motion";
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'
import 'react-social-icons/whatsapp'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="relative">
      <div className="flex items-center justify-between">
        <h1 className="md:hidden text-lg">Alê Pellegrino</h1>
        <button onClick={toggleMenu} className="md:hidden p-2 z-50">
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* Menu para dispositivos móveis */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} // Inicia com escala em 0.95
          animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.95 }} // Aumenta a escala para 1
          exit={{ opacity: 0, scale: 0.95 }} // Diminui a escala ao sair
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 400, // Rigidez da mola
            damping: 20, // Amortecimento da mola
          }}
          className="absolute z-50 top-14 left-0 right-0 bg-zinc-900 p-4 rounded-lg shadow-lg md:hidden origin-top overflow-hidden"
        >
          <ul className="flex flex-col space-y-8">
            <li>
              <AnimatedLink href="#sobre" className="w-full">
                Sobre
              </AnimatedLink>
            </li>
            <li>
              <AnimatedLink href="#works" className="w-full">
                Works
              </AnimatedLink>
            </li>
            <li>
              <AnimatedLink href="#stack" className="w-full">
                Stack
              </AnimatedLink>
            </li>
            <li>
              <AnimatedLink href="#contato" className="w-full">
                Contato
              </AnimatedLink>
            </li>
          </ul>
          <div className="flex space-x-4 mt-8">
            <SocialIcon className="w-8 h-8" bgColor="white" fgColor="black" href="https://www.instagram.com/ale.pell_/" url="www.instagram.com" />
            <SocialIcon className="w-8 h-8" bgColor="white" fgColor="black" href="https://www.linkedin.com/in/alexandre-freire-pellegrino-b09b88171/" url="www.linkedin.com" />
            <SocialIcon className="w-8 h-8" bgColor="white" fgColor="black" href="https://wa.me/5511954893231" url="www.whatsapp.com" />
          </div>
        </motion.div>
      )}

      {/* Menu para dispositivos maiores */}
      <ul className="hidden md:flex items-center justify-between">
        <li>
          <AnimatedLink href="#sobre" className={""}>
            Sobre
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink href="#works" className={""}>
            Works
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink href="/" className="text-lg">
            Alexandre Pellegrino
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink href="#stack" className={""}>
            Stack
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink href="#contato" className={""}>
            Contato
          </AnimatedLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
