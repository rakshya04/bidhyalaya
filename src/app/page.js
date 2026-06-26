import React from "react";
import Hero from "./components/homecomponents/Hero";
import WhyParents from "./components/homecomponents/WhyParents";
import FourLevels from "./components/homecomponents/FourLevels";
import TeachingMethod from "./components/homecomponents/TeachingMethod";
import Testimonials from "./components/homecomponents/Testimonials";
import ApplySpot from "./components/homecomponents/ApplySpot";

const page = () => {
  return (
    <div>
      <Hero />
      <WhyParents />
      <FourLevels />
      <TeachingMethod />
      <Testimonials />
      <ApplySpot />
    </div>
  );
};

export default page;
