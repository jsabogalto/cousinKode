export default function LavaScreen({ children }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 filter-[url('#goo')]">
          {/* blobs animados */}
          <div className="blob w-[200px] h-[200px] left-[35%] bottom-[-15%] animate-blob-one"></div>
          <div className="blob w-[330px] h-[330px] right-[24%] bottom-[-65%] animate-blob-two"></div>
          <div className="blob_color_1 w-[150px] h-[150px] left-[34%] bottom-[-15%] animate-blob-three"></div>
          <div className="blob_color_1 w-[235px] h-[235px] left-[30%] bottom-[-19%] animate-blob-four"></div>
          <div className="blob_color_2 w-[55px] h-[55px] left-[34%] bottom-[-25%] animate-blob-five"></div>
          <div className="blob_color_2 w-[35px] h-[35px] right-[34%] bottom-[-25%] animate-blob-six"></div>
          <div className="blob w-[435px] h-[435px] right-[40%] bottom-[-85%] animate-blob-seven"></div>
          <div className="blob top w-full h-[4%] top-[-3%]"></div>
          <div className="blob bottom w-full h-[4.5%] bottom-[-3%]"></div>
        </div>
      </div>

      {/* Contenedor centrado */}
      <div className="relative w-full h-full flex items-center justify-center">
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
