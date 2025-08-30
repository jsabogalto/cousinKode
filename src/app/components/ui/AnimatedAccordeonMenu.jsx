"use client";

import { useState, useRef, useEffect } from "react";

const accordionData = [
    { id: 1, title: "Desarrollo Web", content: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de texto." },
    { id: 2, title: "Branding", content: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum." }
]

function AccordionItem({ title, content, isExpanded, onToggle }) {
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isExpanded) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isExpanded]);

    return (
        <div className="bg-white/10 border border-black/30 rounded-4xl hover:bg-black/10 shadow-sm text-2xl transition-all duration-300 overflow-hidden">
            <div className="flex justify-between items-start p-6 cursor-pointer" onClick={onToggle}>
                <div className="text-2xl font-bold pb-4">{title}</div>
            </div>
            <div
                ref={contentRef}
                style={{ maxHeight: `${height}px` }}
                className="px-5 pb-5 overflow-hidden transition-all duration-300 py-5"
            >
                <div>{content}</div>
            </div>
        </div>
    );
}

export default function AnimatedAccordionMenu() {
    const [expandedId, setexpandedId] = useState(null);

    const toggleExpandId = (id) => {
        setexpandedId(expandedId === id ? null : id)
    }

    return (
        <div className="min-h-screen flex items-center justify-center w-full">
            <div className="flex flex-col gap-3 max-w-md mx-auto">
                {accordionData.map((item) => (
                    <AccordionItem
                        key={item.id}
                        {...item}
                        isExpanded={expandedId === item.id}
                        onToggle={() => toggleExpandId(item.id)}
                    />
                ))}
            </div>
        </div>
    )
}