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
      <div className="product-container">
        <div className="product-item-count">3425 items</div>
        <div
          className="product-filter-toggle"
          onClick={toggleSidebar}
        >
          <Image
            src="/arrow-left.png"
            height={16}
            width={16}
            alt="Left Arrow"
            className={`product-filter-toggle-icon ${isSidebarToggle ? "" : "product-filter-toggle-icon-rotated"}`}
          />
          {isSidebarToggle ? "Hide filter" : "Show filter"}
        </div>
        <div className="product-mobile-filter">
          Filter
        </div>
        <hr className="product-divider" />
        <div className="product-sort-container">
          <div
            className="product-sort-button"
            onClick={toggleSortList}
          >
            Recommended
            <Image src="/arrow-down.png" height={16} width={16} alt="Down Arrow" />
          </div>
          {isSortListToggle && (
            <ul className="product-sort-dropdown">
              {[
                "recommended",
                "Newest first",
                "popular",
                "Price : high to low",
                "Price : low to high",
              ].map((item, idx) => (
                <li key={item} className="product-sort-option">
                  {idx === 0 ? (
                    <strong className="product-sort-option-selected">
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

      <div className="product-main-content">
        {isSidebarToggle && (
          <ul className="product-sidebar" ref={sidebarRef}>
            <li className="product-sidebar-item">
              <Image
                src="/checkbox.png"
                height={24}
                width={24}
                className="product-checkbox"
                alt="Checkbox"
              />
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
                className="product-sidebar-category"
              >
                <div className="product-category-header">
                  {item}
                  <Image
                    src="/arrow-down.png"
                    height={16}
                    width={16}
                    className="product-arrow-icon"
                    alt="Down Arrow"
                  />
                </div>
                <div className="product-category-all">All</div>
              </li>
            ))}
          </ul>
        )}

        <ul className="product-grid">
          {productList &&
            productList.map((item, index) => (
              <li
                key={index}
                className="product-card"
              >
                <div className="product-image-container">
                  <Image
                    src={item?.image}
                    alt={item?.title}
                    objectFit="contain"
                    layout="fill"
                    objectPosition="center"
                  />
                </div>
                <div className="product-title">
                  <div className="product-title-text">
                    {item?.title}
                  </div>
                  <Image
                    src={index === 2 ? "/heart-selected.png" : "/heart.png"}
                    height={24}
                    width={24}
                    className="product-heart-icon-mobile"
                    alt="Favourite"
                  />
                </div>
                <div className="product-info">
                  <div>
                    <span className="product-sign-in-text">Sign in</span> or Create an account to see pricing
                  </div>
                  <Image
                    src={index === 2 ? "/heart-selected.png" : "/heart.png"}
                    height={24}
                    width={24}
                    className="product-heart-icon-desktop"
                    alt="Favourite"
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
