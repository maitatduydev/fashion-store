import HeroBannerImage from "../../assets/images/banner.png";

export default function HeroBanner() {
    return (
        <div
            className="relative flex items-center justify-start h-svh w-full bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(${HeroBannerImage})`,
            }}
        >
            <div className="absolute inset-0 flex items-center">
                <main className="flex flex-col gap-10 px-10 lg:px-24">
                    <p className="text-white text-[32px]">T-shirt / Tops</p>
                    <h1 className="text-white text-[60px]">Summer Value Pack</h1>
                    <p className="text-white text-[32px]">Cool / Colorful / Comfy</p>
                    <button className="bg-white self-start cursor-pointer transition duration-300 text-[#FF6B6B] text-2xl font-medium px-18 py-4 rounded-md hover:bg-gray-200">
                        Shop Now
                    </button>
                </main>
            </div>
        </div>
    );
}
