import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <>
      <div className="bg-[#002A3A] text-white">
        <div
          className="relative"
          style={{
            backgroundImage: "url('/footerimage2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0 bg-[#002A3A] opacity-50"
            style={{ zIndex: 1 }}
          ></div>

          <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
            {" "}
            <div className="flex flex-col lg:flex-row justify-between items-center mb-16">
              <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 z-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Let's work Together
                </h2>
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Mattis cursus nulla
                  ornare tristique euismod rcu tristique nisl id nibh. viverra
                  feugiat viverra. Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
              <div className="lg:w-auto z-20">
                {" "}
                <button className="bg-white text-gray-900 font-bold px-8 py-4 rounded-lg shadow hover:bg-gray-200">
                  View Vacancies
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#002A3A] py-0 mt-10 mx-10 px-2 ">
          <ul className="flex flex-col lg:flex-row md:flex-row  md:gap-6 space-y-4 md:space-y-0">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>

            <li>
              <a href="#" className="hover:text-yellow-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Portfolios
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Insights
              </a>
            </li>
          </ul>
        </div>

        <div className="py-8 xs:hidden sm:hidden  md:block lg:block ">
          <div className="border-t border-[#FFFFFF1C] w-full"></div>

          <div className="md:flex justify-between mt-4 lg:flex ">
            <div className="md:flex-col space-y-2 items-center justify-center ">
              <h1 className="p-4 bg-[#214655cc] w-64 ml-10 ">
                Lorem ipsum dolor sit amet
              </h1>
              <h1 className="p-4 bg-[#214655cc] w-64 ml-10">
                Lorem ipsum dolor sit amet
              </h1>
              <h1 className="p-4 bg-[#214655cc] w-64 ml-10">
                Lorem ipsum dolor sit amet
              </h1>
            </div>

            <div className="border-l border-[#FFFFFF1C] mx-2 "></div>

            <div className="mt-20 md:mt-0 sm:absolute md:relative sm:py-20 md:py-0 items-center justify-center sm:ml-20 sm:pl-20 md:-ml-20">
              <div className="flex-col space-y-2 items-center justify-center">
                <h1 className="p-4 bg-[#214655cc] w-64">Lorem</h1>
                <h1 className="p-4 bg-[#214655cc] w-64">ipsum</h1>
                <h1 className="p-4 bg-[#214655cc] w-64">Consectetur</h1>
                <h1 className="p-4 bg-[#214655cc] w-64">Efficitur</h1>
              </div>
            </div>

            <div className="border-l border-[#FFFFFF1C] mx-2 md:-ml-20"></div>

            <div className="flex-col space-y-2 my-10 aboslute w-[140px] xs:pr-40">
              <h3 className="text-lg font-bold mb-4 md:-ml-40">Contact Us</h3>
              <p className="mb-4 aboslute ">
                <span className="aboslute mb-4 md:-ml-40">Lorem ipsum,</span>
                <br />
                <span className="aboslute mb-4 md:-ml-40"> Iso lorem,</span>
                <br />
              </p>
              <p className="aboslute mb-4 md:-ml-40 xs:ml-10 sm:ml-10">
                +91 10000 00000
                <br />
                info@demo.com
              </p>
              <h3 className="md:-ml-40"> Follow us on</h3>
              <div className="flex space-x-4 mt-2  md:-ml-40">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon className=" hover:text-blue-800" />
                </a>
                <a
                  href="https://www.whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className=" hover:text-green-800" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon className=" hover:text-blue-900" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeIcon className=" hover:text-red-800" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-b border-[#FFFFFF1C] w-full mt-4"></div>
        </div>
      </div>

      <div className="bg-[#002A3A] text-gray-400 text-start py-6">
        <p className="ml-3">© 2024 Demo. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
