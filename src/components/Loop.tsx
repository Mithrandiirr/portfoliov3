import Image from "next/image";
import React from "react";
import { Homepage, Loop as LoopStacks, TechStacks } from "@/lib/sanity.types";
import { urlFor } from "@/utils/urlBuilder";
interface LoopProps {
  techs: Homepage;
}

export const Loop: React.FC<LoopProps> = ({ techs }) => {
  return (
    <div>
      <div className="w-full overflow-hidden flex relative mt-3">
        <div className="loop-content scroll">
          {techs.loop.techStacks.map((t) => (
            <Image
              key={t._key}
              src={urlFor(t.image).url()}
              width={200}
              height={100}
              alt="next"
            />
          ))}
        </div>
        {techs.loop.techStacks.map((t) => (
          <Image
            key={t._key}
            src={urlFor(t.image).url()}
            width={200}
            height={100}
            alt="next"
          />
        ))}
      </div>
      <div className="w-full overflow-hidden flex relative mt-3">
        <div className="loop-content scrollr">
          {techs.loop.techStacksReversed.map((t) => (
            <Image
              key={t._key}
              src={urlFor(t.image).url()}
              width={200}
              height={100}
              alt="next"
            />
          ))}
        </div>
        <div className="loop-content scrollr">
          {techs.loop.techStacksReversed.map((t) => (
            <Image
              key={t._key}
              src={urlFor(t.image).url()}
              width={200}
              height={100}
              alt="next"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
