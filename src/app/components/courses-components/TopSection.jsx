import React from "react";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const TopSection = () => {
  return (
    <div
      className={`${workSans.className} flex flex-col items-center justify-center gap-3 py-10 bg-[#c9b8db] text-black`}
    >
      <p className="text-sm font-semibold">ALL COURSES</p>
     
      <h1 className="lg:text-5xl font-bold text-center">
        Our Courses
      </h1>
       <div className="w-16 h-1 bg-red-800 rounded-full"></div>

      <p className="text-sm text-center">
        Four knowledge levels. Two formats. Flexible time zones.
        Placement is
        <br />
        based on your child's current Nepali ability, assessed before joining.
      </p>
    </div>
  );
};

export default TopSection;
