import BackgroundImage from "@/modules/BackgroundImage";
import Footer from "@/modules/Footer";

export default function Home() {
  return (
    <>
      <div>
        <BackgroundImage />
        <div>
          <div className="flex flex-col items-center justify-center mt-20 px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Currency Tracker
            </h1>
            <p className="text-gray-300 text-center text-lg max-w-2xl leading-relaxed font-medium">
              View Currency Rates, Cryptocurrency Rates and Convert different
              Currencies all in one place.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
