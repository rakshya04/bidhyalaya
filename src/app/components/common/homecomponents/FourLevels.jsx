import React from "react";

const levels = [
  {
    icon: "🌱",
    level: "Beginner",
    title: "Seedling",
    nepali: "बिरुवा",
    quote: "No prior Nepali knowledge needed",
    description:
      "Introduction to Devanagari alphabet, numbers 1–20, basic greetings, and Nepali nursery rhymes.",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: "🌿",
    level: "Elementary",
    title: "Sprout",
    nepali: "कोपिला",
    quote: "Knows the alphabet, can recognise some words",
    description:
      "Reading simple sentences, writing basic words, folk stories, and cultural celebrations like Dashain & Tihar.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: "🌸",
    level: "Intermediate",
    title: "Blossom",
    nepali: "फुलेको",
    quote: "Can read & write simple Nepali sentences",
    description:
      "Grammar foundations, paragraph writing, literature excerpts, and Nepal's history and geography.",
    color: "bg-orange-100 text-orange-700",
  },
  {
    icon: "📚",
    level: "Advanced",
    title: "Scholar",
    nepali: "विद्वान",
    quote: "Comfortable with reading, writing, and conversation",
    description:
      "Advanced reading & writing, poetry, debate in Nepali, and formal essay and literature study.",
    color: "bg-purple-100 text-purple-700",
  },
];

const FourLevels = () => {
  return (
    <section className="w-full py-8 px-6 bg-gradient-to-b from-[#faf9f7] to-white">
      {/* Top Section */}
      <div className="text-center flex flex-col items-center gap-4 max-w-2xl mx-auto">
        <p className="text-red-700 font-semibold tracking-[4px] uppercase text-xs">
          Curriculum
        </p>

        <h1 className="text-xl md:text-3xl font-bold text-gray-900">
          Four Levels, One Journey
        </h1>

        <div className="w-16 h-1 bg-red-700 rounded-full"></div>

        <p className="text-gray-600 text-sm leading-6">
          Placement is based on your child's current Nepali knowledge, not their
          age. Every student is assessed before joining so they learn with
          peers.
        </p>
      </div>

      {/* Cards Section  */}
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {levels.map((item, index) => (
          <div
            key={index}
            className="w-[220px] h-[320px] bg-white rounded-2xl p-3
                       border border-gray-100 shadow-sm
                       hover:shadow-lg hover:-translate-y-1
                       transition-all duration-300 relative overflow-hidden
                       flex flex-col"
          >
            {/* Top Gradient Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"></div>

            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-2xl mb-3">
              {item.icon}
            </div>

            {/* Level Badge */}
            <span
              className={`inline-block px-2 py-1 rounded-full text-[10px] font-semibold tracking-wide ${item.color}`}
            >
              {item.level}
            </span>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 mt-2">
              {item.title}
            </h3>

            {/* Nepali Name */}
            <p className="text-xs text-gray-500 mt-1 font-medium">
              {item.nepali}
            </p>

            {/* Quote */}
            <div className="mt-2 bg-gray-50 rounded-md p-2 border-l-2 border-red-500">
              <p className="italic text-gray-600 text-[11px] leading-4">
                {item.quote}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-xs leading-5 mt-3 flex-1">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FourLevels;

