"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Features() {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div
            id="main_features"
            className="main-features section panel overflow-hidden"
        >
            <div className="section-outer panel pb-6 xl:pb-9">
                <div className="container max-w-xl lg:max-w-lg">
                    <div
                        className="section-inner panel"
                        data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
                    >
                        <div className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-9 sm:max-w-600px xl:max-w-700px mx-auto text-center">
                            <h2 className="h3 lg:h2 xl:h1 m-0">
                                Why MindProbe?
                            </h2>
                            <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                            Here’s why top DTC businesses and consultancies rely on us
                            </p>
                        </div>
                        <div className="panel vstack gap-4 xl:gap-6">
                            <div className="panel px-3 rounded-2 bg-secondary dark:bg-gray-800">
                                <ul
                                    className="main-features-nav hstack text-center overflow-auto"
                                    data-uc-switcher="connect: .main-features-switcher; active: 1; animation: uc-animation-fade;"
                                    role="tablist"
                                >
                                    <li
                                        className={`${
                                            activeTab == 1 ? "uc-active" : ""
                                        }`}
                                        onClick={() => setActiveTab(1)}
                                        role="presentation"
                                    >
                                        <a className="h6 lg:h5 text-nowrap m-0">
                                        Lightning-Fast Insights 
                                        </a>
                                    </li>
                                    <li
                                        onClick={() => setActiveTab(2)}
                                        className={`${
                                            activeTab == 2 ? "uc-active" : ""
                                        }`}
                                        role="presentation"
                                    >
                                        <a className="h6 lg:h5 text-nowrap m-0">
                                        Effortless Customisation
                                        </a>
                                    </li>
                                    <li
                                        className={`${
                                            activeTab == 3 ? "uc-active" : ""
                                        }`}
                                        onClick={() => setActiveTab(3)}
                                        role="presentation"
                                    >
                                        <a className="h6 lg:h5 text-nowrap m-0">
                                        Built by Market People
                                        </a>
                                    </li>
                                    <li
                                        className={`${
                                            activeTab == 4 ? "uc-active" : ""
                                        }`}
                                        onClick={() => setActiveTab(4)}
                                        role="presentation"
                                    >
                                        <a className="h6 lg:h5 text-nowrap m-0">
                                        DTC Growth In A Few Clicks
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="main-features-switcher uc-switcher overflow-hidden"
                                role="presentation"
                                style={{ touchAction: "pan-y pinch-zoom" }}
                            >
                                {activeTab == 1 && (
                                    <div className="uc-active">
                                        <div className="feature-item panel">
                                            <div className="row child-cols col-match justify-between g-4">
                                                <div className="col-12 sm:col-6">
                                                    <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                                                        <Image
                                                            className="media-cover image"
                                                            alt="Share tools quickly and confidently in minutes"
                                                            src="/assets/images/template/feature-image-02.jpg"
                                                            width="1200"
                                                            height="1200"
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="col-12 sm:col-6">
                                                    <div className="panel">
                                                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                                                            <div>
                                                                <div className="panel vstack gap-2">
                                                                    <h3 className="h4 sm:h3 lg:h2 m-0">
                                                                        Accelerate
                                                                        Growth
                                                                        and
                                                                        Remove
                                                                        the
                                                                        Guesswork
                                                                    </h3>
                                                                    <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                                                    Average time to create an end-to-end survey 
                                                                    </p>
                                                                    <Link
                                                                        href="/page-features"
                                                                        className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2"
                                                                    >
                                                                        <span>
                                                                            Let's
                                                                            find
                                                                            out
                                                                        </span>
                                                                        <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab == 2 && (
                                    <div className="uc-active">
                                        <div className="feature-item panel">
                                            <div className="row child-cols col-match justify-between g-4">
                                                <div className="col-12 sm:col-6">
                                                    <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                                                        <Image
                                                            className="media-cover image"
                                                            alt="Connect every part of your entire business"
                                                            src="/assets/images/template/feature-image-03.jpg"
                                                            width="1200"
                                                            height="1200"
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="col-12 sm:col-6">
                                                    <div className="panel">
                                                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                                                            <div>
                                                                <div className="panel vstack gap-2">
                                                                    <h3 className="h4 sm:h3 lg:h2 m-0">
                                                                        AI Data
                                                                        Analysis
                                                                    </h3>
                                                                    <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                                                    Align with your brand, and offer multiple formats for maximum impact.
                                                                    </p>
                                                                    <a
                                                                        href="#"
                                                                        className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2"
                                                                    >
                                                                        <span>
                                                                            See
                                                                            all
                                                                            integrations
                                                                        </span>
                                                                        <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab == 3 && (
                                    <div className="uc-active">
                                        <div className="feature-item panel">
                                            <div className="row child-cols col-match justify-between g-4">
                                                <div className="col-12 sm:col-6">
                                                    <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                                                        <Image
                                                            className="media-cover image"
                                                            alt="Maintain compliance and control your apps"
                                                            src="/assets/images/template/feature-image-01.jpg"
                                                            width="1200"
                                                            height="1200"
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="col-12 sm:col-6">
                                                    <div className="panel">
                                                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                                                            <div>
                                                                <div className="panel vstack gap-2">
                                                                    <h3 className="h4 sm:h3 lg:h2 m-0">
                                                                        Integration
                                                                    </h3>
                                                                    <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                                                    We get the pain points. Built so you can focus on driving impact.
                                                                    </p>
                                                                    <Link
                                                                        href="/page-features"
                                                                        className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2"
                                                                    >
                                                                        <span>
                                                                            Let's
                                                                            find
                                                                            out
                                                                        </span>
                                                                        <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab == 4 && (
                                    <div className="uc-active">
                                        <div className="feature-item panel">
                                            <div className="row child-cols col-match justify-between g-4">
                                                <div className="col-12 sm:col-6">
                                                    <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                                                        <Image
                                                            className="media-cover image"
                                                            alt="Review quickly and confidently"
                                                            src="/assets/images/template/feature-image-04.jpg"
                                                            width="1200"
                                                            height="1200"
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="col-12 sm:col-6">
                                                    <div className="panel">
                                                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                                                            <div>
                                                                <div className="panel vstack gap-2">
                                                                    <h3 className="h4 sm:h3 lg:h2 m-0">
                                                                        Multi-lingual
                                                                    </h3>
                                                                    <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                                                    Through AI powered insights
                                                                    </p>
                                                                    <Link
                                                                        href="/page-features"
                                                                        className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2"
                                                                    >
                                                                        <span>
                                                                            Let's
                                                                            find
                                                                            out
                                                                        </span>
                                                                        <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab == 5 && (
                                    <div className="uc-active">
                                        <div className="feature-item panel">
                                            <div className="row child-cols col-match justify-between g-4">
                                                <div className="col-12 sm:col-6">
                                                    <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                                                        <Image
                                                            className="media-cover image"
                                                            alt="Review quickly and confidently"
                                                            src="/assets/images/template/feature-image-04.jpg"
                                                            width="1200"
                                                            height="1200"
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="col-12 sm:col-6">
                                                    <div className="panel">
                                                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                                                            <div>
                                                                <div className="panel vstack gap-2">
                                                                    <h3 className="h4 sm:h3 lg:h2 m-0">
                                                                        Multi-lingual
                                                                    </h3>
                                                                    <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                                                        Global
                                                                        Reach,
                                                                        Local
                                                                        Feel.
                                                                        Engage
                                                                        global
                                                                        audiences
                                                                        effectively
                                                                        with
                                                                        survey
                                                                        support
                                                                        in
                                                                        multiple
                                                                        languages.
                                                                    </p>
                                                                    <Link
                                                                        href="/page-features"
                                                                        className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2"
                                                                    >
                                                                        <span>
                                                                            Let's
                                                                            find
                                                                            out
                                                                        </span>
                                                                        <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
