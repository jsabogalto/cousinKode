import Image from "next/image";
import LavaScreen from "./components/lavascreen/LavaScreen";
import Carousel from "./components/ui/Carousel";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#f7f7f7]">
      {/* Sección con fondo y contenido */}
      <section className="h-screen">
        <LavaScreen>
          <div className="flex flex-col items-center text-center max-w-sm w-full margin_general_phone">
            <Image src="/logotipo.png" alt="Descripción" width={300} height={300} />
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-4xl p-6 shadow text-black mt-6">
              <h1 className="text-xl font-semibold mb-2">
                Diseñamos y codificamos tu próxima gran idea
              </h1>
              <button className="mt-2 px-4 py-2 bg-white/10 border border-black/30 rounded-2xl hover:bg-black/10 transition shadow-sm text-lg">
                Comencemos
              </button>
            </div>
          </div>
        </LavaScreen>
      </section>

      <section className="h-screen flex flex-col items-start px-6 gap-4">
        <div className="flex justify-start w-full max-w-sm pb-8 pt-6">
          <Image
            src="/logo_inicio.png"
            alt="Descripción"
            width={80}
            height={80}
            className="mx-0"
          />
        </div>
        <div className="flex flex-col items-center text-center max-w-sm w-full margin_general_phone pt-4">
          <h2 className="text-2xl font-normal mb-2">
            Creamos <strong className="italic">experiencias</strong> digitales que importan
          </h2>
          <Carousel />
          <button className="mt-4 px-4 py-2 bg-white/10 border border-black/30 rounded-2xl hover:bg-black/10 transition shadow-sm text-lg">
            Servicios
          </button>
        </div>
      </section>

      <section className="h-screen flex flex-col items-start px-6 gap-8">
        <div className="flex justify-start w-full max-w-sm pb-8 pt-6">
          <Image
            src="/logo_inicio.png"  
            alt="Descripción"
            width={80}
            height={80}
            className="mx-0"
          />
        </div>
        <div className="w-80 h-48 flex items-center justify-center backdrop-blur-lg bg-white/10 border border-white/20 rounded-4xl p-6 shadow text-black">
          <h3 className="text-xl font-semibold text-center">Desarrollo Web</h3>
        </div>
        
        <div className="w-80 h-48 flex items-center justify-center backdrop-blur-lg bg-white/10 border border-white/20 rounded-4xl p-6 shadow text-black">
          <h3 className="text-xl font-semibold text-center">Branding</h3>
        </div>

      </section>

    </main>
  );
}
