import React from "react";
import Image from "next/image";
import { Loop } from "./Loop";
import Link from "next/link";
import { Header } from "./Header";
import { Work } from "./Work";
import { urlFor } from "@/utils/urlBuilder";
import { PortableText } from "@portabletext/react";
interface ContainerProps {
  value: any;
}
const myPortableTextComponents = {
  types: {
    projectCases: ({ value }: any) => <Work value={value} />,
  },

  marks: {},
};
export const Container: React.FC<ContainerProps> = ({ value }) => {
  return (
    <div className="">
      <Header />
      <div className="mt-16 flex flex-row gap-16 pl-32 2xl:pl-24 xl:pl-10 base:flex-col lg:px-8">
        <div className="flex justify-start mt-24  items-start gap-4 text-center lg:pl-0 lg:items-center font-roslindale text-8xl pl-8 text-black flex-col lg:text-7xl sm:text-4xl">
          <Image
            priority
            width={100}
            height={100}
            src={urlFor(value.picture).url()}
            alt="Profile"
            className="rounded-full"
          />
          {value.name}

          <div className="flex flex-row gap-8 items-center">
            <Link
              href={
                "https://www.linkedin.com/in/el-yaakoubi-mohammed-52552010b/"
              }
            >
              <svg
                width="30"
                className="sm:w-6"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.6667 0C27.5507 0 28.3986 0.351189 29.0237 0.976311C29.6488 1.60143 30 2.44928 30 3.33333V26.6667C30 27.5507 29.6488 28.3986 29.0237 29.0237C28.3986 29.6488 27.5507 30 26.6667 30H3.33333C2.44928 30 1.60143 29.6488 0.976311 29.0237C0.351189 28.3986 0 27.5507 0 26.6667V3.33333C0 2.44928 0.351189 1.60143 0.976311 0.976311C1.60143 0.351189 2.44928 0 3.33333 0H26.6667ZM25.8333 25.8333V17C25.8333 15.559 25.2609 14.177 24.2419 13.1581C23.223 12.1391 21.841 11.5667 20.4 11.5667C18.9833 11.5667 17.3333 12.4333 16.5333 13.7333V11.8833H11.8833V25.8333H16.5333V17.6167C16.5333 16.3333 17.5667 15.2833 18.85 15.2833C19.4688 15.2833 20.0623 15.5292 20.4999 15.9668C20.9375 16.4043 21.1833 16.9978 21.1833 17.6167V25.8333H25.8333ZM6.46667 9.26667C7.20927 9.26667 7.92146 8.97167 8.44657 8.44657C8.97167 7.92146 9.26667 7.20927 9.26667 6.46667C9.26667 4.91667 8.01667 3.65 6.46667 3.65C5.71964 3.65 5.00321 3.94675 4.47498 4.47498C3.94675 5.00321 3.65 5.71964 3.65 6.46667C3.65 8.01667 4.91667 9.26667 6.46667 9.26667ZM8.78333 25.8333V11.8833H4.16667V25.8333H8.78333Z"
                  fill="black"
                />
              </svg>
            </Link>
            <Link href={"https://github.com/Mithrandiirr"}>
              <svg
                width="25"
                className="sm:w-6"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 0C10.8585 0 9.23303 0.323322 7.71646 0.951506C6.19989 1.57969 4.8219 2.50043 3.66117 3.66117C1.31696 6.00537 0 9.18479 0 12.5C0 18.025 3.5875 22.7125 8.55 24.375C9.175 24.475 9.375 24.0875 9.375 23.75V21.6375C5.9125 22.3875 5.175 19.9625 5.175 19.9625C4.6 18.5125 3.7875 18.125 3.7875 18.125C2.65 17.35 3.875 17.375 3.875 17.375C5.125 17.4625 5.7875 18.6625 5.7875 18.6625C6.875 20.5625 8.7125 20 9.425 19.7C9.5375 18.8875 9.8625 18.3375 10.2125 18.025C7.4375 17.7125 4.525 16.6375 4.525 11.875C4.525 10.4875 5 9.375 5.8125 8.4875C5.6875 8.175 5.25 6.875 5.9375 5.1875C5.9375 5.1875 6.9875 4.85 9.375 6.4625C10.3625 6.1875 11.4375 6.05 12.5 6.05C13.5625 6.05 14.6375 6.1875 15.625 6.4625C18.0125 4.85 19.0625 5.1875 19.0625 5.1875C19.75 6.875 19.3125 8.175 19.1875 8.4875C20 9.375 20.475 10.4875 20.475 11.875C20.475 16.65 17.55 17.7 14.7625 18.0125C15.2125 18.4 15.625 19.1625 15.625 20.325V23.75C15.625 24.0875 15.825 24.4875 16.4625 24.375C21.425 22.7 25 18.025 25 12.5C25 10.8585 24.6767 9.23303 24.0485 7.71646C23.4203 6.19989 22.4996 4.8219 21.3388 3.66117C20.1781 2.50043 18.8001 1.57969 17.2835 0.951506C15.767 0.323322 14.1415 0 12.5 0Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex flex-row w-full justify-center pt-4 pb-12 gap-8 max-h-[650px] les base:max-h-full base:justify-start base:flex-col  overflow-y-scroll details pr-40 2xl:pr-20 xl:pr-9 lg:pr-0">
          <div className="flex flex-col flex-[.6] mt-4">
            <p className="font-sora font-extralight text-black text-2xl lg:text-xl">
              Developer and designer based in Morocco.
            </p>
            <p className="font-sora font-extralight text-black text-2xl mt-2 lg:text-xl">
              I build blazingly fast, craft sophiscated and visually captivating
              web applications.
            </p>
            <p className="font-sora font-extralight text-black text-2xl mt-2 lg:text-xl">
              I work as freelancer, in both Jam-stack and Full-stack roles.
            </p>
            <span className="text-black font-extralight font-sora text-xl mt-4 lg:text-lg">
              Reply time: ~ 1 hour.
            </span>
            <div className="flex flex-col">
              <h2 className="font-sora font-normal text-2xl mt-8">
                Technologies:
              </h2>
              <Loop techs={value} />
            </div>
            <div className="flex flex-col mt-4">
              <h2 className="font-sora font-normal text-2xl mt-8">Work:</h2>
              <PortableText
                components={myPortableTextComponents}
                value={value.content}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
