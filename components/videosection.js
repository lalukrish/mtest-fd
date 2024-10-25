import Image from "next/image";

const VideoSection = () => {
  return (
    <>
      <div className="px-2 md:px-20">
        <div className="w-full p-4 flex justify-center items-center mt-10">
          <div className="relative w-full max-w-[1200px] h-[200px] sm:h-[300px] md:h-[640px] lg:h-[450px]">
            <Image
              alt="Video Thumbnail"
              src="/home2.jpeg"
              className="object-cover rounded-lg"
              priority
              fill
              style={{ objectFit: "cover" }}
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center md:justify-start md:items-start md:py-48 md:mx-20">
              <Image
                alt="Play Icon"
                src="/videoIcon.png"
                width={48}
                height={48}
                className="object-contain mb-2 sm:mb-4 md:mb-4"
              />

              <p className="text-white font-medium text-sm sm:text-xl md:text-2xl ml-2 md:ml-3">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-white font-medium text-xs sm:text-lg md:text-xl mt-2 md:mt-3 ml-2 md:ml-3">
                Sanchez Alexis
              </p>
              <p className="text-white font-medium text-xs sm:text-base md:text-lg ml-2 md:ml-3">
                CEO & Founder of Demo
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 items-center justify-center gap-6 py-12">
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl">
              Lorem ipsum dolor sit amet,
              <br /> consectetur{" "}
            </div>
            <div className="py-8 sm:py-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. In hac habitasse platea dictumst. Fusce non
              venenatis velit. Proin luctus malesuada mauris vitae mattis.
              Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam
              congue non sem et efficitur. Donec in dolor nec tellus iaculis
              sagittis. Sed sit amet aliquam augue. Praesent auctor, purus non
              convallis accumsan, nibh odio gravida felis, vitae mollis massa
              lectus a neque. Mauris mollis elit quis iaculis iaculis.
              Vestibulum molestie nisl eget aliquet scelerisque. Vivamus
              efficitur dui eget velit interdum, non dapibus nisi fringilla.
              Mauris fermentum venenatis volutpat. Quisque efficitur ultricies
              erat eget rutrum. Phasellus feugiat quam eget est dapibus, non
              eleifend justo fermentum. Sed et commodo arcu, id euismod dui.
            </div>
          </div>

          <div className="flex flex-col justify-start gap-8 mt-8 md:mt-0 relative">
            <div className="flex items-start gap-4">
              <div className="w-[2px] h-16 sm:h-20 bg-black"></div>
              <div>
                <h3 className="text-base sm:text-lg font-bold">Lorem ipsum</h3>
                <p className="text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis velit nulla. In hac habitasse platea dictumst. Fusce
                  non venenatis velit. Proin luctus malesuada mauris vitae
                  mattis. Pellentesque iaculis elit lorem.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-[2px] h-16 sm:h-20 bg-black"></div>
              <div>
                <h3 className="text-base sm:text-lg font-bold">Lorem ipsum</h3>
                <p className="text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis velit nulla. In hac habitasse platea dictumst. Fusce
                  non venenatis velit. Proin luctus malesuada mauris vitae
                  mattis. Pellentesque iaculis elit lorem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
