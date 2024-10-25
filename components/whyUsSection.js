import React from "react";

const WhyUsSection = () => {
  return (
    <div className="md:px-20 px-2 py-20">
      <h1 className="text-5xl text-[#002A3A]">Lorem Ipsum</h1>
      <div className="md:w-[900px]">
        {" "}
        <p className="text-md py-10   text-[#002A3A]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          velit nulla. In hac habitasse platea dictumst. Fusce non venenatis
          velit. Proin luctus malesuada mauris vitae mattis. Pellentesque
          iaculis elit lorem, et varius ipsum dictum.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <div className="flex-1 bg-[#ECFAFF] p-6 rounded-lg shadow-md ">
          <h3 className="text-xl font-bold text-[#002A3A]">01</h3>
          <hr className="border-t border-[#00466D] my-2" />

          <h5 className="mt-2 text-[#002A3A] text-xl font-bold">
            Lorem ipsum dolor sit amet,
            <br /> consectetur{" "}
          </h5>
          <p className="mt-2 text-[#002A3A]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis velit nulla. In hac habitasse platea dictumst. Fusce non
            venenatis velit. Proin luctus malesuada mauris vitae mattis.
            Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam
            congue non sem et efficitur. Donec in dolor nec tellus iaculis
            sagittis. Sed sit amet aliquam augue.{" "}
          </p>
        </div>

        <div className="flex-1 bg-[#ECFAFF] p-6 rounded-lg shadow-md ">
          <h3 className="text-xl font-bold text-[#002A3A]">02</h3>
          <hr className="border-t border-[#00466D] my-2" />

          <h5 className="mt-2 text-[#002A3A] text-xl font-bold">
            Lorem ipsum dolor sit amet,
            <br /> consectetur{" "}
          </h5>
          <p className="mt-2 text-[#002A3A]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis velit nulla. In hac habitasse platea dictumst. Fusce non
            venenatis velit. Proin luctus malesuada mauris vitae mattis.
            Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam
            congue non sem et efficitur. Donec in dolor nec tellus iaculis
            sagittis. Sed sit amet aliquam augue.{" "}
          </p>
        </div>

        <div className="flex-1 bg-[#002A3A] p-6 rounded-lg shadow-md ">
          <h3 className="text-xl font-bold text-white">03</h3>
          <hr className="border-t border-[#00466D] my-2" />

          <h5 className="mt-2 text-white text-xl font-bold">
            Lorem ipsum dolor sit amet,
            <br /> consectetur{" "}
          </h5>
          <p className="mt-2 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis velit nulla. In hac habitasse platea dictumst. Fusce non
            venenatis velit. Proin luctus malesuada mauris vitae mattis.
            Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam
            congue non sem et efficitur. Donec in dolor nec tellus iaculis
            sagittis. Sed sit amet aliquam augue.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
