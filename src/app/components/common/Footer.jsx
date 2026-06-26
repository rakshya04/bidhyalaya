import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#eef0e4] text-black">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-20 py-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">

        {/* LEFT SECTION */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-3">Bidhyalaya</h2>
          <p className="text-black text-sm leading-relaxed">
            Learn.<br />
            Connect.<br />
            Stay rooted in Nepal.
          </p>
        </div>

        {/* MIDDLE SECTION */}
        <div className="flex flex-col items-start md:items-center">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-black">
            <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link href="/courses" className="hover:text-blue-500">Courses</Link></li>
            <li><Link href="/apply" className="hover:text-blue-500">Apply</Link></li>
            <li><Link href="/contact" className="hover:text-blue-500">Contact Us</Link></li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col items-start md:items-end">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>

          <div className="flex items-center gap-2 text-black mb-2">
            <Phone className="w-4 h-4" />
            <span>+977-9866577061</span>
          </div>

          <div className="flex items-center gap-2 text-black mb-4">
            <Mail className="w-4 h-4" />
            <span>info@bidhyalaya.com</span>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-3 text-xl">
            <a href="#" className="hover:text-blue-500 transition transform hover:scale-110">
              <FaFacebook />
            </a>

            <a href="#" className="hover:text-pink-500 transition transform hover:scale-110">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-red-500 transition transform hover:scale-110">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 text-center py-4 text-black text-sm">
        © {new Date().getFullYear()} Bidhyalaya. All rights reserved.
      </div>

    </footer>
  );
}