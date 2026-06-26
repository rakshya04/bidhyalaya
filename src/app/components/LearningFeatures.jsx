import {
  Video,
  Gamepad2,
  BookOpen,
  Music,
  Trophy,
  BarChart3,
  Mic,
} from "lucide-react";

const features = [
  {
    title: "Live Classes",
    icon: Video,
  },
  {
    title: "Language Games",
    icon: Gamepad2,
  },
  {
    title: "Story Library",
    icon: BookOpen,
  },
  {
    title: "Nepali Songs",
    icon: Music,
  },
  {
    title: "Achievement Badges",
    icon: Trophy,
  },
  {
    title: "Progress Tracking",
    icon: BarChart3,
  },
  {
    title: "Speaking Practice",
    icon: Mic,
  },
];

export default function LearningFeatures() {
  return (
    <section className="bg-white border rounded-2xl p-6 mx-10 shadow-sm">
      <h2 className="text-2xl font-semibold text-start mb-8">
        Interactive & Fun Learning
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="flex flex-col items-center justify-center p-5 rounded-xl hover:bg-slate-50 transition-all duration-300"
            >
              <Icon
                className="w-10 h-10 text-indigo-500 mb-4"
                strokeWidth={2.2}
              />

              <p className="text-sm font-medium text-center">{feature.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
