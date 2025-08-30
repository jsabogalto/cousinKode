import Carousel from "./Carousel";

export default function CarouselExperences() {
    const experencesImages = [
        { src: "./images_carouse_experences/phone.png", alt: "images shows responsive design in phone"},
        { src: "/images_carouse_experences/pc.png", alt: "images shows responsive design in mobil" },
        { src: "/images_carouse_experences/ipad.png", alt: "images shows responsive design in ipad"}
    ];
    return <Carousel images={experencesImages}/>
}