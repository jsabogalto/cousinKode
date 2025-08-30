import CarouselServices from "./CarouselServices";

export function BrandingServicesComponentCarousel() {
    const brandingServices = [
        { title: "Branding Base", description: "Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio.", src: "Pixel-base.png", price: 300000, w:250, h:250 },
        { title: "Brading X", description: "Tiene sus raíces en una pieza clásica de la literatura del Latin.", src: "Cisuin-X.png", price: 1200000, w:250, h:250 },
        { title: "Brading Pro", description: "El texto de Lorem Ipsum no es simplemente texto aleatorio.", src: "Free-Code.png", price: 1200000, w:250, h:250 },
        { title: "Branding Flow", description: "Se ha utilizado desde el siglo XVI.", src: "Code-Flow.png", price: 1200000, w:250, h:250 }
    ];

    return <CarouselServices services={brandingServices} />;
}