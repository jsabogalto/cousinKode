"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SectionComponent({ title, children, background_images = false, background_color = false }) {
  return (
    <section className={`h-screen flex flex-col items-start justify-start overflow-hidden ${background_color} ${background_images}`}>
      <div className="relative flex flex-nowrap justify-start w-full max-w-sm pt-2 px-6">
        <Image
          src="/title_component.png"
          alt="Descripción"
          width={345}
          height={40}
          className="liquid_glass_card px-2 pt-2 pb-2"
        />
        <div className="absolute top-[-6px] pt-6 px-4 left-30 text-white z-10">
          <h3 className="text-white text-2xl ">{title}</h3>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        {children}
      </div>
      <div className="flex justify-start px-6">
        <button className="left-4 top-1/2 -translate-y-1/2 bg-white/10 border border-white/50 rounded-3xl transition shadow-lg hover:scale-95 active:scale-95 active:shadow-inner active:bg-white/10 items-center h-min[6]">
          <ChevronLeft size={34} strokeWidth={3} className="ml-[-2px] text-white/50 w-full h-full" />
        </button>
      </div>
    </section>
  );
}
