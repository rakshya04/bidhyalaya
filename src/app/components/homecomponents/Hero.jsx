import Image from "next/image";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

export default function Hero() {
  const countries = [
    { code: "US", name: "USA" },
    { code: "CA", name: "Canada" },
    { code: "GB", name: "UK" },
    { code: "AU", name: "Australia" },
    { code: "NP", name: "Nepal" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-20 py-10 ">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Help Your Child
            <br />
            <span className="text-red-800">Speak Nepali</span>
            <br />
            With Confidence
          </h1>

          <p className="mt-6 text-gray-500 text-lg leading-relaxed justify-content-center ">
            Interactive online classes designed for Nepali children <br></br>living
            abroad. Learn language, culture, traditions, and <br></br>stay connected to
            your roots from anywhere in the world.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/signup"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium shadow-md transition"
            >
              Free Trial Class
            </Link>

            <Link
              href="/courses"
              className="px-6 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg font-medium transition"
            >
              View Courses
            </Link>
          </div>

          {/* COUNTRIES */}
          <div className="mt-8 flex flex-wrap gap-3">
            {countries.map((country) => (
              <div
                key={country.code}
                className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition"
              >
                <ReactCountryFlag
                  countryCode={country.code}
                  svg
                  style={{
                    width: "1.5em",
                    height: "1.5em",
                  }}
                  title={country.name}
                />

                <span className="text-sm font-medium text-gray-700">
                  {country.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/images/hero.png"
            alt="Bidhyalaya Online Learning"
            width={700}
            height={500}
            priority
            className="rounded-2xl shadow-xl w-full max-w-xl h-auto mb-15"
          />
        </div>
      </div>
    </section>
  );
}
