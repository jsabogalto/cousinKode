import ButtonLiquidGlassComponent from "./ButtonLiquidGlassComponent/ButtonLiquidGlassComponent";

const LiquidGlassCard = ({ title, buttonText }) => {
    return (
        <>
            <div className="liquid_glass_card p-4 text-black px-4 flex flex-col justify-center items-center">
                <h3 className="text-lg text-center sm:text-2xl">
                    {title}
                </h3>
                <ButtonLiquidGlassComponent title={buttonText} />
            </div>
        </>
    )
}
export default LiquidGlassCard;