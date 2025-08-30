"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ images }) {
    const [current, setCurrent] = useState(1);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-full">
            {/* Imagen */}
            <div className="overflow-hidden object-cover">
                <figure className="h-full">
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            width={400}
                            height={500}
                            className={`object-cover ${current === index ? "block" : "hidden"}`}
                        />
                    ))}
                </figure>
            </div>
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 border border-white/50 rounded-3xl transition shadow-lg hover:scale-95 active:scale-95 active:shadow-inner active:bg-white/10 items-center h-min[4]">
                <ChevronLeft size={34} strokeWidth={3} className="ml-[-2px] text-white/50 w-full h-full"/>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 border border-white/50 rounded-3xl transition shadow-sm hover:scale-95 active:scale-95 active:shadow-inner active:bg-white/10"
            >
                <ChevronRight size={34} strokeWidth={3} className="mr-[-2px] text-white/50 w-full h-full" />
            </button>
            {/* Indicadores */}
            <div className="flex justify-center items-center space-x-2">
                <div className="flex gap-2 mt-3">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full transition-all ${current === index ? "bg-white/50" : "bg-white/10 border border-white/50 rounded-3xl"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
