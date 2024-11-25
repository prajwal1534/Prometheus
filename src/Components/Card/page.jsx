"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/Components/ui/3d-card";

export default function Card() {
  return (
    <div className="flex flex-row  items-center justify-evenly ">
      <CardContainer className="inter-var w-96 bg-base-100  shadow-xl  ">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-logo_dark dark:bg-base-100 dark:border-logo_light border-black/[0.1] w-96 sm:w-[30rem] h-auto rounded-xl p-6 border  ">
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
            Solar Farms
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Expected Yield:- <span className=" font-bold">15% APY </span>
          </CardItem>
          <div className="flex justify-between items-center mt-6 ">
            <a href="/Solar">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Know more
              </CardItem>
            </a>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var w-96 bg-base-100  shadow-xl  ">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-logo_dark dark:bg-base-100 dark:border-logo_light border-black/[0.1] w-96 sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem translateZ="100" className="w-full mt-4 object-fill">
            <figure
              className={cn(
                " group w-full cursor-pointer overflow-hidden relative card h-[250px] rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                "bg-[url(https://nationaltoday.com/wp-content/uploads/2022/05/National-Windmill-Day-min.jpg)] bg-cover",
                // Preload hover image by setting it in a pseudo-element
                "before:bg-[url(https://i.gifer.com/cLv.gif)] before:fixed  before:opacity-0 before:z-[-1]",
                "hover:bg-[url(https://i.gifer.com/cLv.gif)]",
                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                "transition-all duration-500"
              )}
            ></figure>
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white mt-10 "
          >
            Wind Farms
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Expected Yield:- <span className=" font-bold">11% APY </span>{" "}
          </CardItem>
          <div className="flex justify-between items-center mt-6 ">
            <a href="/gaali">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Know more
              </CardItem>
            </a>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var w-96 bg-base-100  shadow-xl  ">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-logo_dark dark:bg-base-100 dark:border-logo_light border-black/[0.1] w-96 sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem translateZ="100" className="w-full mt-4 object-fill">
            <figure
              className={cn(
                " group w-full cursor-pointer overflow-hidden relative card h-[250px] rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                "bg-[url(https://img.decrypt.co/insecure/rs:fit:1920:0:0:0/plain/https://cdn.decrypt.co/wp-content/uploads/2024/11/chillguy-gID_7.jpg@webp)] bg-cover",
                // Preload hover image by setting it in a pseudo-element
                "before:bg-[url(https://gifdb.com/images/high/chill-guy-my-new-character-i2famz4hp1dnzdzv.gif)] before:fixed  before:opacity-0 before:z-[-1]",
                "hover:bg-[url(https://gifdb.com/images/high/chill-guy-my-new-character-i2famz4hp1dnzdzv.gif)]",
                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                "transition-all duration-500"
              )}
            ></figure>
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white mt-10 "
          >
            Chill Guy
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Invest and just be like a chill guy
          </CardItem>
          <div className="flex justify-between items-center mt-6 ">
            <a href="/Dsu">
              {" "}
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Know more
              </CardItem>
            </a>
          </div>
        </CardBody>
      </CardContainer>
      {/*<div className="card bg-base-100 w-96 shadow-xl border-[2px] border-green-400">
        <figure>
          <img
            className=" h-[250px]  w-[375px]"
            src="https://static.wixstatic.com/media/9934d5_940d1291c69f46a08fd07fe18822e86d~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSU%205.jpg"
            alt="RWA"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">DSU</h2>
          <p>
            <span className=" font-bold">Buy Dayanand Sagar </span>{" "}
          </p>
          <div className="card-actions justify-end">
            <a href="/Dsu">
              <button className="btn btn-primary">Know More</button>
            </a>{" "}
          </div>
        </div>
      </div>*/}
    </div>
  );
}
