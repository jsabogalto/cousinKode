"use client";
import { useState } from "react";

const images = [
    "/image_screen_keyboard.jpeg",
    "/image_screen_keyboard.jpeg",
    "/image_screen_keyboard.jpeg",
    "/image_screen_keyboard.jpeg",
    "/image_screen_keyboard.jpeg",
];

export default function Carousel() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full h-full">
            {/* Imagen */}
            <div className="overflow-hidden">
                <img
                    src={images[current]}
                    alt={`Slide ${current + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500"
                />
            </div>

            {/* Indicadores */}
            <div className="flex justify-center items-center mt-4 space-x-2">
                {images.map((_, index) => {
                    const distance = Math.abs(current - index); // distancia al seleccionado
                    // Tamaño decrece con la distancia, mínimo 1, máximo 4 (por ejemplo)
                    const size = Math.max(1, 4 - distance);
                    // Mapear tamaño a clases Tailwind (ejemplo: 4 = w-4 h-4, 1 = w-1 h-1)
                    const sizeClass = {
                        4: "w-4 h-4",
                        3: "w-3 h-3",
                        2: "w-2 h-2",
                        1: "w-1 h-1",
                    }[size] || "w-1 h-1";

                    // Color más oscuro cerca del seleccionado, más claro cuanto más lejos
                    const colorClass = distance === 0
                        ? "bg-gray-800"
                        : distance === 1
                            ? "bg-gray-600"
                            : "bg-gray-400";

                    return (
                        <button
                            key={index}
                            className={`${sizeClass} rounded-full transition-all duration-300 ${colorClass}`}
                            onClick={() => setCurrent(index)}
                            aria-label={`Ir a la imagen ${index + 1}`}
                        />
                    );
                })}
            </div>
        </div>
    );
}
