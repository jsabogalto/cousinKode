import CarouselServices from "./CarouselServices";

export function ExperencesCarouselComponent() {
    const experences = [
        { src: "./images_carouse_experences/pc.png", price: 300000, w:500, h:500 }
    ];

    return <CarouselServices services={experences} buttonName={"nuestros servicios"} />;
}