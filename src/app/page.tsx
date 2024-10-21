import Image from "next/image";
import NavBar from "./components/NavBar";
import { Instrument_Serif } from 'next/font/google'

const instrument = Instrument_Serif(
  {
    subsets: ['latin'],
    display: 'swap',
    weight: "400"
  }
)

export default function Home() {
  return (
    <>
      <header className="w-full px-8 md:px-24 py-8">
        <NavBar />
      </header>
      <section className="flex h-screen flex-col py-4 items-center mt-12">
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
          <div className="flex absolute items-center justify-center h-screen">
            <div className="w-96 h-96 z-[-999] rounded-full bg-violet-900 bg-opacity-20 shadow-lg shadow-violet-900 blur-xl"></div>
          </div>
        </div>
        <h1 className={`${instrument.className} mt-12 h-32 text-6xl md:text-8xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-500 bg-clip-text text-transparent`}>
          Alê Pellegrino
        </h1>
        <p>Desenvolvedor Web - São Paulo - Brazil</p>

      </section>
      <footer>

      </footer>
    </>
  );
}
