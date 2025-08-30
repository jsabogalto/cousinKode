import "./LavaScreenMidleBrandingService.css"

export default function LavaScreenMidleBrandingService({ children }) {
    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Fondo animado */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 flex items-center justify-around filter-[url('#goo')]">
                    {/* blobs animados */}
                    <div className="blob_midle_component_branding w-[70px] h-[70px] left-[35%] animate-blob-one-horizontal-develop"></div>
                    <div className="blob_midle_component_branding w-[100px] h-[100px] left-[35%] animate-blob-one-horizontal-develop"></div>
                    <div className="blob_midle_component_branding w-[130px] h-[130px] right-[24%]  animate-blob-two-horizontal-develop"></div>
                    <div className="blob_midle_component_branding w-[160px] h-[160px] left-[34%]  animate-blob-three-horizontal-develop"></div>
                    <div className="blob_midle_component_branding w-[190px] h-[190px] left-[30%]  animate-blob-four-horizontal-develop"></div>
                    <div className="blob_midle_component_branding w-[220px] h-[220px] left-[30%]  animate-blob-five-horizontal-develop"></div>

                    <div className="blob_midle_component_branding left-[-35px] w-10 h-full top-[-3%]"></div>
                    <div className="blob_midle_component_branding right-[-35px] w-10 h-full top-[-3%]"></div>
                </div>
            </div>
            {/* Contenedor centrado */}
            <div className="relative w-full h-full flex items-center justify-center px-4">
                {children}
            </div>
            {/* Filtro Goo */}
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="hidden">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 18 -7"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
}
