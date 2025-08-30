import styles from './LavaScreen.module.css';

export default function LavaScreen({ children }) {
  return (
    <div className={styles.container}>
      {/* Fondo animado */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 filter-[url('#goo')]">
          <div className={`${styles.blob} w-[200px] h-[200px] left-[35%] bottom-[-15%] ${styles.animateBlobOne}`}></div>
          <div className={`${styles.blob} w-[330px] h-[330px] right-[24%] bottom-[-65%] ${styles.animateBlobTwo}`}></div>
          <div className={`${styles.blob_color_1} w-[150px] h-[150px] left-[34%] bottom-[-15%] ${styles.animateBlobThree}`}></div>
          <div className={`${styles.blob_color_1} w-[235px] h-[235px] left-[30%] bottom-[-19%] ${styles.animateBlobFour}`}></div>
          <div className={`${styles.blob_color_2} w-[55px] h-[55px] left-[34%] bottom-[-25%] ${styles.animateBlobFive}`}></div>
          <div className={`${styles.blob_color_2} w-[35px] h-[35px] right-[34%] bottom-[-25%] ${styles.animateBlobSix}`}></div>
          <div className={`${styles.blob} w-[435px] h-[435px] right-[40%] bottom-[-85%] ${styles.animateBlobSeven}`}></div>
          <div className={`${styles.blob} ${styles.top} w-full h-[4%] top-[-3%]`}></div>
          <div className={`${styles.blob} ${styles.bottom} w-full h-[4.5%] bottom-[-3%]`}></div>
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
