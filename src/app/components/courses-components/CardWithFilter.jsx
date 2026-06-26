"use client";
import { useState } from "react";
import { Clock, BookOpen, Users, CheckCircle, ArrowRight, Compass } from "lucide-react";

export default function CardWithFilter() {
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedFormat, setSelectedFormat] = useState("All");

  const levelRequirements = [
    { name: "Seedling", icon: "🌱", text: "No prior Nepali knowledge needed" },
    {
      name: "Sprout",
      icon: "🌿",
      text: "Knows the alphabet, recognises some written words",
    },
    {
      name: "Blossom",
      icon: "🌸",
      text: "Can read & write simple Nepali sentences",
    },
    {
      name: "Scholar",
      icon: "📚",
      text: "Comfortable with basic grammar & intermediate conversation",
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Seedling",
      nepali: "बिरुवा",
      level: "Seedling",
      format: "Group",
      badge: "Beginner",
      icon: "🌱",
      price: "$18",
      availability: "2 spots left",
      description:
        "A gentle introduction to Nepali through play, song and storytelling. Students learn the alphabet, numbers, colors and greetings.",
      topics: [
        "Devanagari alphabet",
        "Numbers 1-20",
        "Colors & Shapes",
        "Greetings & Family Words",
      ],
      schedules: [
        "Mon & Wed - 9:00 AM",
        "Tue & Thu - 10:00 AM",
        "Sat - 8:00 AM",
      ],
    },
    {
      id: 2,
      title: "Seedling",
      nepali: "बिरुवा",
      level: "Seedling",
      format: "One-on-One",
      badge: "Beginner",
      icon: "🌱",
      price: "$35",
      availability: "Available",
      description:
        "Personalized curriculum delivered one-to-one. Perfect for learners requiring individual attention.",
      topics: [
        "Custom pace",
        "Personal mentoring",
        "Parent progress calls",
        "Tailored activities",
      ],
      schedules: ["Flexible Scheduling", "Any Time Zone"],
    },
    {
      id: 3,
      title: "Sprout",
      nepali: "कोपिला",
      level: "Sprout",
      format: "Group",
      badge: "Elementary",
      icon: "🌿",
      price: "$18",
      availability: "Open",
      description:
        "Students begin reading simple sentences, writing short words and exploring Nepali culture.",
      topics: [
        "Reading sentences",
        "Writing practice",
        "Folk stories",
        "Dashain & Tihar",
      ],
      schedules: [
        "Mon & Wed - 4:00 PM",
        "Tue & Thu - 5:00 PM",
        "Sat - 10:00 AM",
      ],
    },
    {
      id: 4,
      title: "Sprout",
      nepali: "कोपिला",
      level: "Sprout",
      format: "One-on-One",
      badge: "Elementary",
      icon: "🌿",
      price: "$35",
      availability: "Available",
      description:
        "Private sessions focused on reading fluency and writing confidence.",
      topics: [
        "Reading fluency",
        "Personalized stories",
        "Dictation & spelling",
        "Confidence building",
      ],
      schedules: ["Flexible Scheduling", "Any Time Zone"],
    },
    {
      id: 5,
      title: "Blossom",
      nepali: "फूल",
      level: "Blossom",
      format: "Group",
      badge: "Intermediate",
      icon: "🌸",
      price: "$20",
      availability: "1 spot left",
      description:
        "Intermediate learners tackle grammar, essay writing and cultural understanding.",
      topics: [
        "Nepali grammar",
        "Essay writing",
        "Literature excerpts",
        "History & Culture",
      ],
      schedules: ["Mon & Wed - 5:00 PM", "Tue & Thu - 4:00 PM"],
    },
    {
      id: 6,
      title: "Blossom",
      nepali: "फूल",
      level: "Blossom",
      format: "One-on-One",
      badge: "Intermediate",
      icon: "🌸",
      price: "$38",
      availability: "Available",
      description:
        "Private sessions designed for fluency, confidence and examination preparation.",
      topics: [
        "Debate preparation",
        "Essay writing",
        "Oral confidence",
        "Exam readiness",
      ],
      schedules: ["Flexible Scheduling", "Any Time Zone"],
    },
    {
      id: 7,
      title: "Scholar",
      nepali: "विद्वान",
      level: "Scholar",
      format: "Group",
      badge: "Advanced",
      icon: "📚",
      price: "$22",
      availability: "Open",
      description:
        "Advanced literature analysis, poetry and formal writing skills.",
      topics: [
        "Nepali literature",
        "Poetry analysis",
        "Formal writing",
        "Debate in Nepali",
      ],
      schedules: ["Mon & Wed - 7:00 PM", "Fri - 5:00 PM"],
    },
    {
      id: 8,
      title: "Scholar",
      nepali: "विद्वान",
      level: "Scholar",
      format: "One-on-One",
      badge: "Advanced",
      icon: "📚",
      price: "$42",
      availability: "Available",
      description:
        "Dedicated tutoring for heritage language assessments and fluency development.",
      topics: [
        "University prep",
        "Study plans",
        "Assessments",
        "Exam preparation",
      ],
      schedules: ["Flexible Scheduling", "Any Time Zone"],
    },
  ];

  const levels = ["All", "Seedling", "Sprout", "Blossom", "Scholar"];
  const formats = ["All", "Group", "One-on-One"];

  const filteredCourses = courses.filter((course) => {
    const levelMatch =
      selectedLevel === "All" || course.level === selectedLevel;
    const formatMatch =
      selectedFormat === "All" || course.format === selectedFormat;
    return levelMatch && formatMatch;
  });

  return (
    <section className="max-w-5xl mx-auto px-6 py-10 ">
      
      {/* PLACEMENT REQUIREMENTS HEADER & GRID */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-5 text-purple-600">
          <Compass className="w-4 h-4" />
          <h2 className="text-xs font-black tracking-widest uppercase text-slate-400">
            Find Your Placement Level
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {levelRequirements.map((req, index) => (
            <div
              key={index}
              className="p-5 bg-white rounded-2xl border border-slate-200/70 shadow-2xs flex flex-col justify-between min-h-[140px]"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl shrink-0">{req.icon}</span>
                  <h3 className="font-extrabold text-slate-800 text-base leading-tight">
                    {req.name}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">
                  {req.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FILTERS SECTION */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-8 p-5 bg-blue-200 rounded-2xl border border-slate-100">
        <div className="flex items-center gap-2 flex-wrap text-xs md:text-sm">
          <span className="font-bold text-slate-500 tracking-wider uppercase mr-1">
            Level:
          </span>
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-4 py-2 rounded-full font-medium border transition-all duration-200 cursor-pointer ${
                selectedLevel === level
                  ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                  : "bg-white border-slate-200 hover:bg-slate-100 text-slate-700"
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 flex-wrap text-xs md:text-sm">
          <span className="font-bold text-slate-500 tracking-wider uppercase mr-1">
            Format:
          </span>
          {formats.map((format) => (
            <button
              key={format}
              onClick={() => setSelectedFormat(format)}
              className={`px-4 py-2 rounded-full font-medium border transition-all duration-200 cursor-pointer ${
                selectedFormat === format
                  ? "bg-rose-600 border-rose-600 text-white shadow-sm"
                  : "bg-white border-slate-200 hover:bg-slate-100 text-slate-700"
              }`}
            >
              {format}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-6 text-sm text-slate-500 font-medium">
        Showing {filteredCourses.length} exciting{" "}
        {filteredCourses.length === 1 ? "course" : "courses"}
      </p>

      {/* 2-COLUMN BALANCED GRID FOR LARGE SCREENS */}
      <div className="grid md:grid-cols-2 gap-5 lg:gap-8">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col justify-between bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300 max-w-md mx-auto w-full"
          >
            {/* Card Header */}
            <div
              className={`p-4 border-b border-slate-50 ${
                course.format === "Group"
                  ? "bg-gradient-to-br from-blue-50/70 to-blue-100/40"
                  : "bg-gradient-to-br from-rose-50/60 to-orange-50/40"
              }`}
            >
              <div className="flex justify-between items-start gap-3">
                <div className="flex gap-3 items-center">
                  <span className="text-2xl p-1.5 bg-white rounded-lg shadow-xs shrink-0">
                    {course.icon}
                  </span>
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h3 className="text-lg font-bold text-slate-900 leading-tight">
                        {course.title}
                      </h3>
                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider">
                        {course.badge}
                      </span>
                    </div>
                    <p className="text-[11px] font-semibold text-slate-500 mt-0.5">
                      {course.nepali}
                    </p>
                  </div>
                </div>

                <span
                  className={`px-2.5 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider shrink-0 ${
                    course.format === "Group"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-rose-100 text-rose-700"
                  }`}
                >
                  {course.format}
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {course.description}
              </p>

              {/* Topics */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1 text-slate-700">
                  <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Topics Covered
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {course.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-md text-[11px] text-slate-600"
                    >
                      <CheckCircle className="w-2.5 h-2.5 text-emerald-500 shrink-0" />
                      <span>{topic}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Schedules */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1 text-slate-700">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Schedule Options
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {course.schedules.map((schedule, i) => (
                    <span
                      key={i}
                      className="bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-md text-[11px] text-slate-600 font-medium"
                    >
                      {schedule}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-1">
                <div>
                  <div className="text-xl font-black text-slate-900 leading-none">
                    {course.price}
                    <span className="text-[10px] font-normal text-slate-400 lowercase ml-0.5">
                      /session
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] mt-1">
                    <Users className="w-3 h-3 text-slate-400" />
                    <span
                      className={`font-semibold ${
                        course.availability.includes("spot")
                          ? "text-orange-500"
                          : "text-emerald-600"
                      }`}
                    >
                      {course.availability}
                    </span>
                  </div>
                </div>

                <button
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white shadow-xs transition-all duration-200 cursor-pointer active:scale-95 ${
                    course.format === "Group"
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-rose-600 hover:bg-rose-700"
                  }`}
                >
                  Apply Now
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-200 mt-6">
          <p className="text-4xl mb-3">🔍</p>
          <p className="text-base font-semibold text-slate-700">
            No matching classes found
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Try selecting a different level or class format.
          </p>
        </div>
      )}
    </section>
  );
}