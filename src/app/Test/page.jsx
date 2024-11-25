"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/Components/ui/3d-card";
import Link from "next/link";

export default function ThreeDCardDemo() {
  return (
    <>
      <h1 className="text-3xl font-bold p-4">Listed Assets</h1>

      <div className="flex flex-row  items-center justify-evenly">
        <CardContainer className="inter-var w-96">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-96 sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="100" className="w-full mt-4 object-fill">
              <figure
                className={cn(
                  " group w-full cursor-pointer overflow-hidden relative card h-[250px] rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                  "bg-[url(https://images.pexels.com/photos/9893729/pexels-photo-9893729.jpeg?cs=srgb&dl=pexels-tomfisk-9893729.jpg&fm=jpg)] bg-cover",
                  // Preload hover image by setting it in a pseudo-element
                  "before:bg-[url(https://scitechdaily.com/images/Photovoltaic-Panels-Solar-Farm.gif)] before:fixed  before:opacity-0 before:z-[-1]",
                  "hover:bg-[url(https://scitechdaily.com/images/Photovoltaic-Panels-Solar-Farm.gif)]",
                  "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                  "transition-all duration-500"
                )}
              ></figure>
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white mt-10 "
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <div className="flex justify-between items-center mt-6 ">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var w-96">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-96 sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="100" className="w-full mt-4 object-fill">
              <figure
                className={cn(
                  " group w-full cursor-pointer overflow-hidden relative card h-[250px] rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                  "bg-[url(https://images.pexels.com/photos/9893729/pexels-photo-9893729.jpeg?cs=srgb&dl=pexels-tomfisk-9893729.jpg&fm=jpg)] bg-cover",
                  // Preload hover image by setting it in a pseudo-element
                  "before:bg-[url(https://scitechdaily.com/images/Photovoltaic-Panels-Solar-Farm.gif)] before:fixed  before:opacity-0 before:z-[-1]",
                  "hover:bg-[url(https://scitechdaily.com/images/Photovoltaic-Panels-Solar-Farm.gif)]",
                  "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                  "transition-all duration-500"
                )}
              ></figure>
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white mt-10 "
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <div className="flex justify-between items-center mt-6 ">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var w-96">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-96 sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="100" className="w-full mt-4 object-fill">
              <figure
                className={cn(
                  " group w-full cursor-pointer overflow-hidden relative card h-[250px] rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                  "bg-[url(https://images.pexels.com/photos/9893729/pexels-photo-9893729.jpeg?cs=srgb&dl=pexels-tomfisk-9893729.jpg&fm=jpg)] bg-cover",
                  // Preload hover image by setting it in a pseudo-element
                  "before:bg-[url(https://scitechdaily.com/images/Photovoltaic-Panels-Solar-Farm.gif)] before:fixed  before:opacity-0 before:z-[-1]",
                  "hover:bg-[url(https://scitechdaily.com/images/Photovoltaic-Panels-Solar-Farm.gif)]",
                  "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                  "transition-all duration-500"
                )}
              ></figure>
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white mt-10 "
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <div className="flex justify-between items-center mt-6 ">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </>
  );
}
