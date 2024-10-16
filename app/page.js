import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative max-container flex flex-col gap-20  pb-32 md:gap-28 lg:py-20">
        <div className="relative w-full h-screen ">
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

          <div className="relative z-20 flex flex-col items-start justify-center h-full px-16 mt-32 ">
            {" "}
            <h1 className="bold-52 font-semibold text-4xl text-white ">
              Putuk Truno Camp Area
            </h1>
            <p className="regular-16 text-xl text-white mt-4  w-[900px]">
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
