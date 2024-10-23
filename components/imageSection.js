import Image from "next/image";

const ImageSection = () => {
  return (
    <div className="mt-20 bg-[#F2F2F2]">
      <h1 className="px-4 md:px-20 text-3xl md:text-5xl py-10 text-center md:text-left">
        Lorem ipsum dolor sit amet,
        <br /> consectetur{" "}
      </h1>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4 px-4 md:px-20 py-10">
        <div className="relative h-[300px] md:h-[350px] lg:h-[400px]">
          <Image
            src="/image12.jpeg"
            alt="Image 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-end pb-4 text-white bg-black bg-opacity-50 rounded-lg">
            <span className="px-6 text-lg md:text-2xl">
              Consectetur adipiscing elit
            </span>
            <span className="px-6 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. In hac habitasse platea dictumst.
            </span>
          </div>
        </div>

        <div className="relative h-[300px] md:h-[300px] lg:h-[350px]">
          <Image
            src="/place.jpeg"
            alt="Image 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-end pb-4 text-white bg-black bg-opacity-50 rounded-lg">
            <span className="px-6 text-lg md:text-2xl">
              Consectetur adipiscing elit
            </span>
            <span className="px-6 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. In hac habitasse platea dictumst.
            </span>
          </div>
        </div>

        <div className="relative h-[300px] md:h-[300px] lg:h-[350px]">
          <Image
            src="/image13.jpeg"
            alt="Image 3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-end pb-4 text-white bg-black bg-opacity-50 rounded-lg">
            <span className="px-6 text-lg md:text-2xl">
              Consectetur adipiscing elit
            </span>
            <span className="px-6 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. In hac habitasse platea dictumst.
            </span>
          </div>
        </div>

        <div className="relative h-[300px] md:h-[350px] lg:h-[400px] md:-mt-12">
          <Image
            src="/image14.jpeg"
            alt="Image 4"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-end pb-4 text-white bg-black bg-opacity-50 rounded-lg">
            <span className="px-6 text-lg md:text-2xl">
              Consectetur adipiscing elit
            </span>
            <span className="px-6 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. In hac habitasse platea dictumst.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
