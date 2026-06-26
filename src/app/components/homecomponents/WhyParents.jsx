import {
  Globe,
  BadgeCheck,
  Star,
  Clock3,
  CheckCircle,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Classes across all time zones",
    description:
      "Morning to evening, weekdays and weekends — we fit your family's schedule wherever you live.",
  },
  {
    icon: BadgeCheck,
    title: "Native Nepali educators",
    description:
      "Every teacher is a native speaker with formal training in child education and Nepali language.",
  },
  {
    icon: Star,
    title: "Culture, not just language",
    description:
      "Children learn Dashain, Tihar, Nepali music, folk stories, and food alongside language.",
  },
  {
    icon: Clock3,
    title: "45-minute focused sessions",
    description:
      "Designed for children's attention spans — engaging, structured, and never overwhelming.",
  },
  {
    icon: CheckCircle,
    title: "Progress reports for parents",
    description:
      "Monthly reports, visible progress tracking, and direct communication with teachers.",
  },
  {
    icon: Users,
    title: "Community of diaspora families",
    description:
      "Join a global network of Nepali families raising bilingual children abroad.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-8xl mx-auto px-6">
        {/* Header */}
        <div className="text-center justify-center mb-10">
          <p className="uppercase tracking-[4px] text-red-700 text-lg font-semibold mb-4">
            Why Parents Choose Us
          </p>

          <h2 className="text-4xl md:text-4xl font-bold text-slate-900 mb-4">
            More than a language class
          </h2>
          <div className="w-20 h-1 bg-red-800 mx-auto mt-2 rounded-full mb-4" />
          <p className="max-w-3xl mx-auto text-md text-gray-600">
            We combine proven language pedagogy with genuine Nepali culture so
            children feel connected to their roots.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mx-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
                  <Icon size={28} className="text-blue-700" />
                </div>

                <h3 className="text-1xl font-semibold text-red-800 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-md">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
