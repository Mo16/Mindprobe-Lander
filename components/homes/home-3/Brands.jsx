import { reviewLogos } from "@/data/brands";
import React from "react";
import Image from "next/image";

export default function Brands() {
  return (
    <div id="trusted_brands" className="trusted-brands section panel">
      <div className="section-outer panel pb-4 lg:pb-6">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="review-brands panel vstack justify-center gap-2 px-3 py-4 sm:px-4 sm:py-6 lg:p-6 text-center rounded-3 bg-secondary dark:bg-gray-800 overflow-hidden"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
            >
              <h3 className="title h4 sm:h3 lg:h2 m-0">
                Trusted for overall simplicity
              </h3>
              <div className="vstack sm:hstack justify-center gap-1 fs-6 text-gray-900 dark:text-white flex-sm-column">
                <div className="rating panel">
                  <div className="hstack justify-center gap-0">
                    <i className="icon unicon-star-filled" />
                    <i className="icon unicon-star-filled" />
                    <i className="icon unicon-star-filled" />
                    <i className="icon unicon-star-filled" />
                    <i className="icon unicon-star-filled" />
                  </div>
                </div>
                <span className="desc rtl:order-first">
                  Based on 100+ reviews with customer satisfaction on
                </span>
              </div>
              <div className="panel mt-3 sm:mt-4">
                <div className="brands hstack gap-6 justify-between max-w-550px mx-auto">
                  {reviewLogos.map((logo, index) => (
                    <React.Fragment key={index}>
                      <Image
                        src={logo.lightSrc}
                        width={32}
                        height={42}
                        style={{ height: "42px", width: "fit-content" }}
                        alt="Trustpilot"
                        quality={100}
                        className="dark:d-none"
                      />
                  
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
