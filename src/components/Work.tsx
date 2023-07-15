import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/utils/urlBuilder";
interface WorkProps {
  value: any;
}

export const Work: React.FC<WorkProps> = ({ value }) => {
  return (
    <div className="flex flex-col my-4 gap-8" id="work">
      {value.projectCases.map((p: any) => (
        <Link
          key={p._key}
          href={`${p.link}`}
          className="flex flex-col gap-5 items-start"
        >
          <Image
            width={800}
            height={300}
            src={urlFor(p.image).url()}
            alt="Reel"
          />
          <h1 className="text-lg">{p.name}</h1>
        </Link>
      ))}
    </div>
  );
};
