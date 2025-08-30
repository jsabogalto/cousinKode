import Image from "next/image";
import LavaScreen from "./components/lavascreen/LavaScreen";
import Carousel from "./components/ui/Carousel/Carousel";
import SectionComponent from "./components/ui/SectionComponent/SectionComponent";
import LavaScreenMidleDevelopService from "./components/lavascreen/LavaScreenMidleDevelopService";
import LavaScreenMidleBrandingService from "./components/lavascreen/LavaScreenMidleBrandingService";
import LiquidGlassCard from "./components/ui/LiquidGlassCard"
import ButtonLiquidGlassComponent from "./components/ui/ButtonLiquidGlassComponent/ButtonLiquidGlassComponent";
import { DevelopServicesComponentCarousel } from "./components/ui/CarouselServicesComponent/DevelopServicesComponentCarousel";
import { BrandingServicesComponentCarousel } from "./components/ui/CarouselServicesComponent/BrandingServicesComponentCarousel";
import CarouselExperences from "./components/ui/Carousel/CarouselExperences";




export default function Home() {
  return (
    <main className="flex flex-col bg-white-200">
      {/* Sección con fondo y contenido */}
      <section className="h-screen">
        <LavaScreen>
          <div className="flex flex-col items-center text-center max-w-sm w-full margin_general_phone px-4">
            <Image src="/logotipo.png" alt="Descripción" width={300} height={300} />
            <div className="liquid_glass_card p-6 shadow-sm text-black mt-6">
              <h1 className="text-2xl mb-2">
                Diseñamos y codificamos tu próxima gran idea.
              </h1>
              <ButtonLiquidGlassComponent title={"comencemos"} />
            </div>
          </div>
        </LavaScreen>
      </section>
      {/* prevew carousel with images */}
      <section className="h-screen flex flex-col *:gap-2 class_background_section_experences">
  
        <div className="flex flex-col items-center text-center max-w-sm w-full margin_general_phone pt-2 ">
          <h2 className="text-2xl font-normal text-white pt-4">
            Creamos <strong className="italic">experiencias</strong> digitales que importan.
          </h2>
          <CarouselExperences />
          <div className="pt-4">
            <ButtonLiquidGlassComponent title={"nuestros servicios"} />
          </div>
        </div>
      </section>
      <section className="h-screen flex flex-col items-start bg-gray-400">
        <div className="flex justify-center items-center px-4 pt-2">
          <Image
            src="/logo_inicio.png"
            alt="Descripción"
            width={85}
            height={40}
            className="liquid_glass_card px-2 pt-2 pb-2"
          />
        </div>
        <LavaScreenMidleDevelopService>
          <LiquidGlassCard title={"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, relleno estándar de las industrias desde el año 1500"} buttonText={"Desarrollo Web"} />
        </LavaScreenMidleDevelopService>
        <div className="px-2 w-full">
          <div className="backdrop-blur-lg bg-transparent border border-white/50 rounded-4xl p-2 shadow-sm flex flex-col justify-center items-center w-full">
          </div>
        </div>
        <LavaScreenMidleBrandingService>
          <LiquidGlassCard title={"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, relleno estándar de las industrias desde el año 1500"} buttonText={"Branding"} />
        </LavaScreenMidleBrandingService>
      </section>

      <SectionComponent title={"Desarrollo Web"} background_color={"bg-gray-500"}>
        <DevelopServicesComponentCarousel />
      </SectionComponent>
      <SectionComponent title={"Branding"} backGroung={"bg-gray-500"}>
        <BrandingServicesComponentCarousel />
      </SectionComponent>
      <SectionComponent title={"Hablanos!"} backGroung={"bg-gray-500"}>
        
      </SectionComponent>
    </main>
  );
}
