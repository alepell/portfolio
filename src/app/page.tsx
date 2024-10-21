'use client'
import Image from "next/image";
import { Instrument_Serif } from 'next/font/google'
import useEmblaCarousel from 'embla-carousel-react'
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'
import 'react-social-icons/whatsapp'
import { useEffect } from "react";
import Autoplay from 'embla-carousel-autoplay'
import Bg1 from '@/assets/bg1.png'
import Bg2 from '@/assets/bg2.png'
import Bg3 from '@/assets/bg3.png'
import Bg4 from '@/assets/bg4.png'
import { motion } from "framer-motion";
import CareerSection from "./components/CareerSection";
import TechSection from "./components/TechSection";
const instrument = Instrument_Serif(
  {
    subsets: ['latin'],
    display: 'swap',
    weight: "400"
  }
)

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 2 }, [Autoplay()])
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])
  return (
    <>
      <motion.section className="flex h-screen flex-col py-4 items-center mt-4 md:mt-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative flex items-center justify-center">
          <div className="bg-white bg-opacity-10 rounded-full p-4">
            <Image
              src="https://scontent.fcgh10-1.fna.fbcdn.net/v/t1.6435-9/120290117_3392580947470354_7915877092020441808_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_ohc=LoYNgf6xRsMQ7kNvgEWX8hb&_nc_ht=scontent.fcgh10-1.fna&_nc_gid=A4WRJEnlGgY8MBfTS_eJMum&oh=00_AYAqFqT65tMltX8-CCL9PifJ7g9XCeTcDK19RdRVO7u3nA&oe=673DD475"
              alt="Foto de Alexandre Pellegrino"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <a href="#contact" className="absolute z-10 flex items-center backdrop-blur-sm bottom-[-10px] px-4 py-2 text-sm bg-white bg-opacity-10 rounded-full">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-md mr-2 animate-pulse" /> Online
          </a>

        </div>
        <h1 className={`${instrument.className} mt-12 h-32 text-4xl md:text-8xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-500 bg-clip-text text-transparent`}>
          Alexandre Pellegrino
        </h1>
        <p className="text-xs md:text-md">Desenvolvedor Web - São Paulo - Brazil</p>
        <motion.div
          className="mt-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-b-0 border-transparent border-t-white mx-auto"
          animate={{ y: [0, 10, 0] }} // Animação de bounce
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.section>
      <CareerSection />
      <TechSection />
      <motion.div id="works" className="my-12 w-full md:w-[1024px] flex flex-col justify-center items-center mx-auto px-4 md:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 id="works" className="text-3xl md:text-6xl  my-12">Trabalhos Realizados</h1>
        <div className="embla overflow-hidden rounded-lg" ref={emblaRef}>
          <div className="embla__container flex">
            <div className="embla__slide flex-[0_0_100%] opacity-55">
              <Image src={Bg1} alt="Image 1" className="w-full h-auto" />
            </div>
            <div className="embla__slide flex-[0_0_100%] opacity-55">
              <Image src={Bg2} alt="Image 2" className="w-full h-auto" />
            </div>
            <div className="embla__slide flex-[0_0_100%] opacity-55">
              <Image src={Bg3} alt="Image 3" className="w-full h-auto" />
            </div>
            <div className="embla__slide flex-[0_0_100%] opacity-55">
              <Image src={Bg4} alt="Image 4" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
