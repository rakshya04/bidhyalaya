import Link from "next/link";
import Image from "next/image";
import {
  Home,
  BookOpen,
  Video,
  Users,
  FolderOpen,
  Info,
  LogIn,
  UserPlus,
} from "lucide-react";

export default function Header() {
  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Courses", path: "/courses", icon: BookOpen },
    { name: "Live Classes", path: "/live-classes", icon: Video },
    { name: "Teachers", path: "/teachers", icon: Users },
    { name: "Resources", path: "/resources", icon: FolderOpen },
    { name: "About Us", path: "/about", icon: Info },
  ];

  return (
    <header className="w-full bg-white border-b">

      {/* TOP HEADER */}
      <div className="container mx-auto px-6 py-4 flex lg:flex-row bg-blue-100 items-center justify-around gap-2">

        {/* LEFT */}
        <div className="flex items-center">
          <Image
            src="/images/headerlogo.png"
            alt="Bidhyalaya Logo"
            width={250}
            height={250}
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* MIDDLE */}
        <div className="text-center flex flex-col items-center justify-center space-y-1">
          <h1 className="text-7xl font-extrabold tracking-wide text-gray-900 font-[Playfair_Display]">
            विद्यालय
          </h1>

          <h2 className="text-5xl font-semibold text-gray-700 tracking-wide font-[Playfair_Display]">
            Bidhyalaya
          </h2>

          <p className="text-base text-green-900">
            हाम्रो भाषा, हाम्रो पहिचान ❤️
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative max-w-sm border-2 border-gray-700 rounded-3xl p-4 bg-white text-center shadow-sm">
          <p className="text-sm text-gray-700 leading-relaxed">
            Helping Nepali-born<br />
            kids abroad stay<br />
            connected to their<br />
            roots through one<br />
            conversation at a time.
          </p>

          <div className="absolute -bottom-3 left-10 w-5 h-5 bg-white border-l-2 border-b-2 border-gray-700 rotate-[-45deg]"></div>
        </div>

      </div>

      {/* NAVBAR */}
      <nav className="border-none">
        <div className="max-w-7xl mx-auto px-4 py-3">

          <ul className="flex items-center w-full text-gray-700 font-medium">

            {/* CENTER NAV LINKS */}
            <div className="flex flex-1 justify-center items-center gap-12">

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

            </div>

            {/* RIGHT BUTTONS */}
            <div className="flex items-center gap-3">

              <button className="flex items-center gap-2 px-4 py-2 border bg-blue-500 border-gray-400 rounded-lg text-white hover:bg-blue-800 transition">
                <LogIn className="w-4 h-4" />
                Login
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-800 transition">
                <UserPlus className="w-4 h-4" />
                Sign Up
              </button>

            </div>

          </ul>
        </div>
      </nav>

    </header>
  );
}