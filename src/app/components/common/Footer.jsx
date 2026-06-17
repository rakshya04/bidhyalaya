import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-100 text-black mt-10">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* LEFT SECTION */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-3">Bidhyalaya</h2>

          <p className="text-sm leading-relaxed">
            Learn.
            <br />
            Connect.
            <br />
            Stay rooted in Nepal.
          </p>
        </div>

        {/* MIDDLE SECTION */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2 text-center">
            <li>
              <Link href="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/courses"
                className="hover:text-blue-500 transition"
              >
                Courses
              </Link>
            </li>

            <li>
              <Link
                href="/live-classes"
                className="hover:text-blue-500 transition"
              >
                Live Classes
              </Link>
            </li>

            <li>
              <Link
                href="/teachers"
                className="hover:text-blue-500 transition"
              >
                Teachers
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="hover:text-blue-500 transition"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
          <h3 className="text-lg font-semibold mb-3">
            Contact Us
          </h3>

          <div className="flex items-center gap-2 mb-2">
            <Phone className="w-4 h-4" />
            <span>+977-9866577061</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <Mail className="w-4 h-4" />
            <span>info@bidhyalaya.com</span>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 mt-2 text-2xl">
            <a
              href="#"
              className="hover:text-blue-600 transition-transform hover:scale-110"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              className="hover:text-pink-500 transition-transform hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="hover:text-red-500 transition-transform hover:scale-110"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-400 text-center py-4 px-4 text-sm">
        © {new Date().getFullYear()} Bidhyalaya. All rights reserved.
      </div>
    </footer>
  );
}