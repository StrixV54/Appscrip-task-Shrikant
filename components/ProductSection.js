"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ProductSection({ list }) {
  const [productList, setProductList] = useState(list);
  const sidebarRef = useRef(null);
  const [isSidebarToggle, setIsSidebarToggle] = useState(true);
  const [isSortListToggle, setIsSortListToggle] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarToggle((prev) => !prev);
  };

  const toggleSortList = () => {
    setIsSortListToggle((prev) => !prev);
  };

  return (
    <>
      <div className="flex sm:mx-[100px] border border-x-0 border-b-[#E5E5E5] py-4 items-center sm:justify-normal">
        <div className="sm:block hidden uppercase text-[1.13rem] font-bold">3425 items</div>
        <div
          className="hidden uppercase mr-auto text-[#888792] ml-20 underline sm:flex gap-2 items-center cursor-pointer"
          onClick={toggleSidebar}
        >
          <Image
            src="/arrow-left.png"
            height={16}
            width={16}
            alt="down"
            className={`transition duration-300 ${isSidebarToggle ? "rotate-0" : "rotate-180"}`}
          />
          {isSidebarToggle ? "Hide filter" : "Show filter"}
        </div>
        <div className="sm:hidden block uppercase text-[1.13rem] font-bold flex-1 text-center">
          Filter
        </div>
        <hr className="h-8 w-0 border sm:hidden" />
        <div className="uppercase text-[1.13rem] font-bold sm:flex-none flex-1  relative px-2">
          <div
            className="flex items-center justify-center gap-2 cursor-pointer"
            onClick={toggleSortList}
          >
            Recommended
            <Image src="/arrow-down.png" height={16} width={16} alt="down" />
          </div>
          {isSortListToggle && (
            <ul className="flex flex-col py-4 items-end shadow-xl absolute top-[40px] right-0 z-50 bg-white w-[280px] border-2">
              {[
                "recommended",
                "Newest first",
                "popular",
                "Price : high to low",
                "Price : low to high",
              ].map((item, idx) => (
                <li className="text-[1.13rem] flex justify-end uppercase w-full py-4 px-10 hover:bg-slate-200 cursor-pointer">
                  {idx === 0 ? (
                    <strong className="flex gap-3">
                      <span>&#10004;</span>
                      {item}
                    </strong>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex flex-row gap-4 sm:px-[100px] px-4">
        {isSidebarToggle && (
          <ul className="hidden sm:block min-w-[300px]" ref={sidebarRef}>
            <li className="flex gap-2 py-6 border-0 border-b-[1px] border-b-[#E5E5E5] ">
              <Image src="/Checkbox.png" height={24} width={24} className=" cursor-pointer" />
              Customizable
            </li>
            {[
              "IDEAL FOR",
              "OCCASION",
              "WORK",
              "FABRIC",
              "SEGMENT",
              "SUITABLE FOR",
              "RAW MATERIALS",
              "PATTERN",
            ].map((item, index) => (
              <li
                key={index}
                className="flex flex-col items-start justify-center py-6 gap-2 border-0 border-b-[1px] border-b-[#E5E5E5]"
              >
                <div className="text-[1.13rem] font-bold flex justify-between items-center w-full">
                  {item}
                  <Image src="/arrow-down.png" height={16} width={16} className="cursor-pointer" />
                </div>
                <div>All</div>
              </li>
            ))}
          </ul>
        )}

        <ul className="flex flex-wrap flex-row gap-4 sm:mt-8 mt-4 items-start sm:justify-between justify-evenly">
          {productList &&
            productList.map((item, index) => (
              <li
                key={index}
                className="sm:max-w-[300px] sm:h-[465px] max-w-[190px] h-fit flex flex-col items-center justify-between overflow-hidden"
              >
                <div className="relative sm:w-[300px] sm:h-[400px] h-[200px] w-[160px]">
                  <Image
                    src={item?.image}
                    alt={item.title}
                    objectFit="contain"
                    layout="fill"
                    objectPosition="center"
                    className="border"
                  />
                </div>
                <div className="flex w-full items-center sm:mt-2 mt-2 gap-1">
                  <div className="truncate text-sm sm:text-[1.13rem] font-bold text-start uppercase">
                    {item.title}
                  </div>
                  <Image
                    src={index === 2 ? "/heart-selected.png" : "/heart.png"}
                    height={24}
                    width={24}
                    className="w-[24px] h-[24px] sm:hidden block"
                  />
                </div>
                <div className="flex w-full justify-between sm:text-sm text-[#888792] text-[0.64rem] items-center sm:mt-1">
                  <div>
                    <span className="underline">Sign in</span> or Create an account to see pricing
                  </div>
                  <Image
                    src={index === 2 ? "/heart-selected.png" : "/heart.png"}
                    height={24}
                    width={24}
                    className="hidden sm:block"
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
