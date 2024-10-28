import Header2 from "@/components/headers/Header2";
import Pricing from "@/components/common/Pricing";
import Brands2 from "@/components/homes/home-3/Brands";
import FeaturesOne from "@/components/homes/home-1/Features";
import FeaturesTwo from "@/components/homes/home-5/Features";
import KeyFeatures from "@/components/homes/home-2/KeyFeatures";
import Hero from "@/components/homes/home-3/Hero";
import UpcomingFeatures from "@/components/homes/home-3/KeyFeatures";
import React from "react";
// import Testimonials from "@/components/homes/home-3/Testimonials";
import Blog from "@/components/homes/home-3/Blog";
import Cta from "@/components/homes/home-2/Cta";
import HowItWorks from "@/components/homes/home-4/Features";
import Footer2 from "@/components/footers/Footer2";
import Brands3 from "@/components/common/Brands2";
import Testimonials from "@/components/homes/home-6/Testimonials";
import Elements from "@/components/homes/home-6/Elements";
export const metadata = {
    title: "Home 3 || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
    description:
        "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function HomePage3() {
    return (
        <>
            <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
                <Header2 />
                <div id="wrapper" className="wrap">
                    <Hero />
                    <Brands2 />
                    <FeaturesOne />
                    <UpcomingFeatures />

                    <FeaturesTwo />
                    <Elements />

                    <KeyFeatures />
                    <HowItWorks />

                    <Testimonials />

                    <Cta />
                </div>
                <Footer2 />
            </div>
        </>
    );
}
