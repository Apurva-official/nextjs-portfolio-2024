import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small section of <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects?.map(({ id, title, des, img, iconLists, link }) => {
          return (
            <div
              key={id}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rouded-3xl bg-[#13162d]">
                    <img src={"./bg.png"} alt={title} />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-10"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                  {des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((itm, index) => {
                      return (
                        <div
                          key={itm}
                          className="border border-white/[0.2] rounded-full bg-black lg:h-10 lg:w-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index * 2}px)`,
                          }}
                        >
                          <img src={itm} alt={itm} className="p-2" />
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                      <FaLocationArrow className="ms-3 mt-1" color="#CBACF9" />
                    </p>
                  </div>
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;