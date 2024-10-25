import Image from "next/image";
import Navbar from "./navbar";

export default function Hero() {
  return (
    <>
      <section className="relative max-container flex flex-col gap-10 md:gap-16 lg:gap-20">
        <div className="relative w-full h-screen">
          <div className="absolute inset-0">
            <Image
              alt="Background Image"
              src="/hero_image_m1.jpeg"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-30" />
          </div>

          <div className="absolute top-0 left-0 w-full">
            <Navbar />
          </div>

          <div className="relative z-20 flex flex-col items-start justify-center h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mt-16 md:mt-20 lg:mt-32">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white">
              Lorem ipsum dolor sit amet{" "}
            </h1>
            <p className="text-white mt-4 text-base sm:text-lg md:text-md lg:text-xl max-w-full sm:max-w-[600px] md:max-w-[750px] lg:max-w-[900px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. In hac habitasse platea dictumst. Fusce non
              venenatis velit. Proin luctus malesuada mauris vitae mattis.
              Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
              velit nulla. In hac habitasse platea dictumst.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
