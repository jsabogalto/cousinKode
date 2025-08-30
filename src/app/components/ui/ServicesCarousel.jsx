"use client";
import Image from "next/image";
import { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";

const MAX_VISIBILITY = 3;

function ServicesCarousel({ services }) {
    const [active, setActive] = useState(0);
    const count = services.length;

    return (
        <div
            className="relative top-0"
            style={{
                width: "32rem",
                height: "32rem",
                perspective: "500px",
                transformStyle: "preserve-3d",
            }}
        >
            {active > 0 && (
                <button
                    className="absolute top-1/2 -translate-y-1/2 left-0 flex items-center justify-center text-white text-5xl z-10 cursor-pointer"
                    onClick={() => setActive((i) => i - 1)}
                >
                    <TiChevronLeftOutline />
                </button>
            )}

            {services.map((service, i) => {
                const offset = (active - i) / 3;
                const absOffset = Math.abs(active - i) / 3;
                const direction = Math.sign(active - i);

                return (
                    <div
                        key={i}
                        className="absolute w-full h-full transition-all duration-300"
                        style={{
                            transform: `
                rotateY(${offset * 50}deg)
                scaleY(${1 + absOffset * -0.4})
                translateZ(${absOffset * -30}rem)
                translateX(${direction * -5}rem)
              `,
                            filter: `blur(${absOffset * 1}rem)`,
                            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? 0 : 1,
                            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
                            pointerEvents: active === i ? "auto" : "none",
                        }}
                    >
                        <div className="flex flex-col justify-between items-center px-2 backdrop-blur-lg bg-transparent border border-white/50 rounded-4xl shadow-sm text-black w-full h-full text-center transition-all duration-300 ">
                            <h3 className="text-center text-2xl font-bold text-gray-800 mb-2">
                                {service.title}
                            </h3>
                            <p className="mb-2 font-bold">{service.description}</p>
                            <p className="">Precio: {service.price.toLocaleString()}</p>
                            <figure className="justify-center flex items-center">
                                <Image
                                    src={service.src}
                                    alt={service.title}
                                    width={250}
                                    height={250}
                                />
                            </figure>
                            <button className="px-4 py-2 bg-white/10 border border-black/30 rounded-3xl hover:bg-black/10 transition shadow-sm text-lg mb-4">
                                cotizar
                            </button>
                        </div>
                    </div>
                );
            })}

            {active < count - 1 && (
                <button
                    className="absolute top-1/2 -translate-y-1/2 right-0 flex items-center justify-center text-white text-5xl z-10 cursor-pointer"
                    onClick={() => setActive((i) => i + 1)}
                >
                    <TiChevronRightOutline />
                </button>
            )}
        </div>
    );
}

export default function DevelopServices() {
    const developServices = [
        { title: "Pixel Base", description: "Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin", src: "Pixel-base.png", price: 800000 },
        { title: "Cousin X", description: "Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin", src: "Cisuin-X.png", price: 1200000 },
        { title: "Pixel Pro", description: "Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin", src: "Free-Code.png", price: 1200000 },
        { title: "Pixel Flow", description: "Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin", src: "Code-Flow.png", price: 1200000 }
    ];

    return <ServicesCarousel services={developServices} />;
}

export function BrandingService() {
    const brandingServices = [
        { title: "Brand Base", description: "Servicio de branding inicial", src: "Brand-Base.png", price: 600000 },
        { title: "Logo Pack", description: "Diseño de logotipos profesionales", src: "Logo-Pack.png", price: 900000 },
        { title: "Full Identity", description: "Identidad corporativa completa", src: "Identity.png", price: 1500000 }
    ];

    return <ServicesCarousel services={brandingServices} />;
}
