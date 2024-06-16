"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems?.map((itm, idx) => {
          return (
            <BentoGridItem
              id={itm.id}
              key={itm.id}
              title={itm.title}
              description={itm.description}
              className={itm.className}
              img={itm.img}
              imgClassName={itm.imgClassName}
              titleClassName={itm.titleClassName}
              spareImg={itm.spareImg}
            />
          );
        })}
      </BentoGrid>
    </section>
  );
};

export default Grid;
