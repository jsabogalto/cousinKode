import styles from "./ButtonLiquidGlassComponent.module.css";

export default function ButtonLiquidGlassComponent({ title }) {
    return (
        <button className="mt-2 px-4 py-2 bg-white/10 border border-white/50 rounded-3xl transition shadow-sm hover:scale-95 active:scale-95 active:shadow-inner active:bg-white/10">
            <span className={`${styles["shimmer-text"]} text-xl font-semibold`}>
                {title}
            </span>
        </button>
    );
}
