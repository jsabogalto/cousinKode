"use client";
import styles from "./CarouselServicesComponent.module.css"
import Image from "next/image";
import ButtonLiquidGlassComponent from "../ButtonLiquidGlassComponent/ButtonLiquidGlassComponent";

export default function CarouselServices({ services, buttonName }) {
    return (
        <div className={`w-full max-w-5xl mx-auto overflow-x-scroll flex p-6 gap-2  overflow-hidden no-scrollbar ${styles["no-scrollbar"]}`}>
            {services.map((service, i) => (
                <div
                    key={i}
                    className="min-w-[20rem] max-w-xs flex-shrink-0 snap-center liquid_glass_card text-black p-4 flex flex-col justify-between items-center h-[500px]"
                >
                    {/* Header */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                            {service.title}
                        </h3>
                        <p className="mb-2 text-gray-700 text-center">
                            {service.description}
                        </p>
                        <p className="font-bold text-gray-900 mb-2">
                            Precio: {service.price.toLocaleString()}
                        </p>
                    </div>

                    {/* Imagen centrada */}
                    <figure className={`flex justify-center items-center w-[${service.w}] h-[${service.h}]`}>
                        <Image
                            src={service.src}
                            alt={service.title}
                            width={service.w}
                            height={service.h}
                            className="object-contain"
                        />
                    </figure>

                    {/* Botón al fondo */}
                    <div className="w-full flex justify-center">
                        <ButtonLiquidGlassComponent title={buttonName} />
                    </div>
                </div>
            ))}
        </div>
    );
}

