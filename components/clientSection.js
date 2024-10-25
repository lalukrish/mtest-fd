import React from "react";

const ClientSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-16 lg:space-x-28">
          <div className="flex items-center">
            <div className="ml-4 text-center md:text-left">
              <h3 className="text-3xl sm:text-4xl font-bold">
                8 Years of <br />
                <span className="text-3xl sm:text-4xl font-normal">
                  success
                </span>
              </h3>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <div className="w-[1px] h-32 bg-[#002A3A]"></div>
          </div>

          <div className="flex items-center">
            <div className="ml-4 text-center md:text-left">
              <h3 className="text-3xl sm:text-4xl font-bold">
                200+ <br />
                <span className="text-2xl sm:text-3xl font-normal">
                  Members
                </span>
              </h3>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <div className="w-[1px] h-32 bg-[#002A3A]"></div>
          </div>

          <div className="flex items-center">
            <div className="ml-4 text-center md:text-left">
              <h3 className="text-3xl sm:text-4xl font-bold">
                155+ <br />
                <span className="text-2xl sm:text-3xl font-normal">
                  All Over The USA
                </span>
              </h3>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <div className="w-[1px] h-32 bg-[#002A3A]"></div>
          </div>

          <div className="flex items-center">
            <div className="ml-4 text-center md:text-left">
              <h3 className="text-3xl sm:text-4xl font-bold">
                200k <br />
                <span className="text-2xl sm:text-3xl font-normal">
                  Satisfied Clients
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
