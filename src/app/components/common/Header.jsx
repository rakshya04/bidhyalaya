"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Home, BookOpen, UserPlus, Users, LogIn, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Courses", path: "/courses", icon: BookOpen },
    { name: "Apply", path: "/apply", icon: UserPlus },
    { name: "Contact Us", path: "/contact", icon: Users },
  ];

  return (
    <header className="w-full border-b-2 border-gray-100 ">
      {/* TOP HEADER SECTION */}
       <div className="container mx-auto py-6 flex flex-col lg:flex-row items-center justify-between gap-6 px-6 lg:px-20 bg-gray-300">        
        {/* LEFT: BRAND LOGO */}
        <div className="flex items-center justify-center transition-transform hover:scale-102 duration-300">
          <Image
            src="/images/headerlogo.png"
            alt="Bidhyalaya Logo"
            width={220}
            height={220}
            className="w-28 sm:w-36 md:w-44 lg:w-48 h-auto object-cover rounded-2xl border-2 border-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]"
            priority
          />
        </div>

        {/* MIDDLE: TYPOGRAPHY / SLOGAN */}
        <div className="text-center flex flex-col items-center justify-center space-y-2 ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-950 ">
            विद्यालय
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 tracking-wide">
            Bidhyalaya
          </h2>
          <p className="text-xs sm:text-sm font-medium px-3 py-1 bg-[#dfe2f7] text-emerald-700 rounded-full border border-emerald-200">
            हाम्रो भाषा, हाम्रो पहिचान ❤️
          </p>
        </div>

        {/* RIGHT: INTRO SPEECH BUBBLE */}
        <div className="relative max-w-xs border-2 border-gray-800 rounded-2xl p-4 bg-white text-center shadow-[4px_4px_0px_0px_rgba(31,41,55,1)]">
          <p className="text-xs sm:text-sm text-gray-800 font-semibold leading-relaxed">
            Helping Nepali-born kids abroad stay connected to their roots
            through one conversation at a time. ♡
          </p>
          {/* Speech Bubble Arrow styled precisely like ca5438d5-c43f-4111-876a-ecc7ff858d73.jpg */}
          <div className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 w-4 h-4 bg-white border-l-2 border-b-2 border-gray-800 rotate-[-45deg]"></div>
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="border-t-2 border-gray-800 bg-amber-50/40">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* DESKTOP NAV LINKS */}
            <ul className="hidden lg:flex flex-1 justify-center items-center gap-10 text-gray-800 font-semibold text-sm tracking-wide">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white hover:text-blue-700 border-2 border-transparent hover:border-gray-800 transition-all duration-200 shadow-none hover:shadow-[2px_2px_0px_0px_rgba(31,41,55,1)]"
                    >
                      <Icon className="w-4 h-4" />
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* DESKTOP ACTION BUTTONS */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/parent-login">
                <button className="bg-blue-700 border-2 border-gray-800 text-white font-bold px-4 py-2 text-sm rounded-xl hover:bg-blue-800 transition shadow-[2px_2px_0px_0px_rgba(31,41,55,1)] active:translate-y-0.5 active:shadow-none">
                  Parent Login
                </button>
              </Link>
              <Link href="/apply">
                <button className="bg-red-600 border-2 border-gray-800 text-white font-bold px-4 py-2 text-sm rounded-xl hover:bg-rose-600 transition shadow-[2px_2px_0px_0px_rgba(31,41,55,1)] active:translate-y-0.5 active:shadow-none">
                  Apply Now
                </button>
              </Link>
            </div>

            {/* MOBILE HAMBURGER BUTTON */}
            <div className="lg:hidden ml-auto">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-1 border-2 border-gray-800 rounded-lg bg-white shadow-[2px_2px_0px_0px_rgba(31,41,55,1)]"
              >
                {menuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* MOBILE DROPDOWN MENU */}
          {menuOpen && (
            <div className="lg:hidden mt-3  bg-white border-2 border-gray-800 rounded-xl shadow-[4px_4px_0px_0px_rgba(31,41,55,1)] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              <ul className="flex flex-col p-4 space-y-3 font-semibold text-gray-800">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.path}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all"
                      >
                        <Icon className="w-4 h-4 text-gray-500" />
                        {link.name}
                      </Link>
                    </li>
                  );
                })}

                <hr className="border-gray-200 my-2" />

                <div className="flex flex-col gap-2 pt-1">
                  <Link
                    href="/parent-login"
                    onClick={() => setMenuOpen(false)}
                    className="w-full"
                  >
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-500 border-2 border-gray-800 text-white font-bold rounded-xl shadow-[2px_2px_0px_0px_rgba(31,41,55,1)]">
                      <LogIn className="w-4 h-4" />
                      Parent Login
                    </button>
                  </Link>

                  <Link
                    href="/apply"
                    onClick={() => setMenuOpen(false)}
                    className="w-full"
                  >
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-rose-500 border-2 border-gray-800 text-white font-bold rounded-xl shadow-[2px_2px_0px_0px_rgba(31,41,55,1)]">
                      <UserPlus className="w-4 h-4" />
                      Apply Now
                    </button>
                  </Link>
                </div>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}