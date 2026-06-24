"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Home,
  BookOpen,
  Video,
  Users,
  UserPlus,
  Info,
  LogIn,
  
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Courses", path: "/courses", icon: BookOpen },
    { name: "Apply", path: "/apply", icon: UserPlus},
    { name: "Contact Us", path: "/contact", icon: Users },
   
  ];

  return (
    <header className="w-full bg-white border-b">
      {/* TOP HEADER */}
      <div className="container mx-auto px-4 py-4 bg-blue-100 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* LEFT */}
        <div className="flex items-center justify-center">
          <Image
            src="/images/headerlogo.png"
            alt="Bidhyalaya Logo"
            width={250}
            height={250}
            className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-cover rounded-2xl shadow-lg"
            priority
          />
        </div>

        {/* MIDDLE */}
        <div className="text-center flex flex-col items-center justify-center space-y-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-gray-900">
            विद्यालय
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700 tracking-wide">
            Bidhyalaya
          </h2>

          <p className="text-sm sm:text-base text-green-900">
            हाम्रो भाषा, हाम्रो पहिचान ❤️
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative max-w-xs border-2 border-gray-700 rounded-3xl p-4 bg-white text-center shadow-sm">
          <p className="text-sm text-gray-700 leading-relaxed">
            Helping Nepali-born
            <br />
            kids abroad stay
            <br />
            connected to their
            <br />
            roots through one
            <br />
            conversation at a time.
          </p>

          <div className="absolute -bottom-3 left-10 w-5 h-5 bg-white border-l-2 border-b-2 border-gray-700 rotate-[-45deg]"></div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* DESKTOP MENU */}
            <ul className="hidden lg:flex flex-1 justify-center items-center gap-12 text-gray-700 font-medium">
              {navLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="flex items-center gap-2 hover:text-blue-600 transition"
                    >
                      <Icon className="w-4 h-4" />
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* DESKTOP BUTTONS */}
            <Link href="/apply">
              <button className="bg-red-600 text-white px-4 py-2 rounded ml-4">
                Apply Now
              </button>
            </Link>

            <Link href="/parent-login">
              <button className="bg-blue-800 text-white px-4 py-2 rounded ml-4">
                Parent Login
              </button>
            </Link>
                      
            {/* MOBILE HAMBURGER */}
            <div className="lg:hidden ml-auto">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <X className="w-8 h-8" />
                ) : (
                  <Menu className="w-8 h-8" />
                )}
              </button>
            </div>
          </div>

          {/* MOBILE DROPDOWN */}
          {menuOpen && (
            <div className="lg:hidden mt-4 bg-white border rounded-xl shadow-md">
              <ul className="flex flex-col p-4 space-y-4">
                {navLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <li key={link.name}>
                      <Link
                        href={link.path}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 hover:text-blue-600 transition"
                      >
                        <Icon className="w-4 h-4" />
                        {link.name}
                      </Link>
                    </li>
                  );
                })}

                <hr />

                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
                  <LogIn className="w-4 h-4" />
                  Parent Login
                </button>

                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg">
                  <UserPlus className="w-4 h-4" />
                  Apply Now
                </button>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}