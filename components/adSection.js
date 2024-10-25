import Image from "next/image";

const AdSection = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch">
      <div className="relative z-10 flex-1 lg:pl-12 p-8 bg-white">
        <h2 className="text-4xl font-bold mb-4">
          Lorem Ipsum
          <br />
          <span>dolor sit consectetur</span>
        </h2>
        <p className="sm:text-xl md:text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          velit nulla. In hac habitasse platea dictumst. Fusce non venenatis
          velit. Proin luctus malesuada mauris vitae mattis. Pellentesque
          iaculis elit lorem, et varius ipsum dictum. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac
          habitasse platea dictumst. Fusce non venenatis velit. Proin luctus
          malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et
          varius ipsum dictum.
        </p>
      </div>

      <div className="relative flex-1 h-[600px] lg:h-[600px] hidden lg:flex">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/place.jpeg"
            alt="Ad Image"
            layout="fill"
            objectFit="cover"
            className="rounded-none"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent mask-image-[linear-gradient(120deg, transparent 80%, white 80%)]"></div>

        <div className="relative mt-10 left-40 bg-white p-6 shadow-lg rounded-lg w-[400px] h-[470px]">
          <div className="relative h-64 ">
            <Image
              src="/boximage.png"
              alt="Small Preview Image"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
          </div>

          <div className="relative">
            <h3 className="text-xl font-bold mb-2">Lorem Ipsum?</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. In hac habitasse platea dictumst. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="sm:absolute top-1/2 right-[-0px] transform -translate-y-1/2 rounded-full bg-white shadow-lg p-3 cursor-pointer z-10 lg:flex sm:flex">
            <Image
              alt="Play Icon"
              src="/videoIcon.png"
              width={48}
              height={48}
            />
          </div>
        </div>
      </div>

      <div className="relative lg:hidden flex flex-col w-full mt-6">
        <div className="relative w-full h-[600px]">
          <Image
            src="/place.jpeg"
            alt="Ad Image"
            layout="fill"
            objectFit="cover"
            className="rounded-none"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-4 shadow-lg rounded-lg max-w-[300px] h-[400px] m-auto">
            <h3 className="text-xl font-bold mb-2">Lorem Ipsum?</h3>
            <div className="relative h-40 mb-4 w-full">
              <Image
                src="/home2.jpeg"
                alt="Small Preview Image"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg p-3 cursor-pointer z-10">
                <Image
                  alt="Play Icon"
                  src="/videoIcon.png"
                  width={48}
                  height={48}
                />
              </div>
            </div>
            <p className="text-gray-600 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdSection;
