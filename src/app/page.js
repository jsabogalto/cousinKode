import ChatWithIA from "../../components/ChatWithIA"
import LiquidGlassCard from "../../components/LiquidGlassCard"
export default function Home() {
  return (
    <>

      <div className="relative flex justify-center mt-[100px]">
        <img src="https://www.textrazor.com/img/letters_inverse.png"
          className="w-full h-auto"
          alt="background">
        </img>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <LiquidGlassCard />
        </div>

      </div>

      {/* <ChatWithIA /> */}
    </>

  );
}
