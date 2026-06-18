import { BookOpen, Users, CheckCircle2 } from "lucide-react";

const classes = [
  {
    title: "One-on-One",
    subtitle: "एक-एक",
    description:
      "Personalized sessions tailored exactly to your child's pace and learning style.",
    price: "From $35/session",
    button: "Apply now",
    border: "border-blue-700",
    buttonColor: "bg-blue-700 hover:bg-blue-800",
    icon: BookOpen,
    features: [
      "Flexible scheduling",
      "Customized curriculum",
      "Dedicated teacher",
      "Fastest progress",
    ],
  },
  {
    title: "Group Class",
    subtitle: "समूह कक्षा",
    description:
      "Small peer groups of up to 6 children with social and cultural learning.",
    price: "From $18/session",
    button: "Apply now",
    border: "border-red-600",
    buttonColor: "bg-red-600 hover:bg-red-700",
    icon: Users,
    features: [
      "Max 6 kids per group",
      "Same-level peers",
      "Social activities",
      "More affordable",
    ],
  },
];

export default function ClassFormat() {
  return (
    <section className="py-2 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 ">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-red-600 font-semibold uppercase tracking-[4px] text-sm">
            How We Teach
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Choose Your Class Format
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-slate-600">
            Select the learning style that best fits your child's needs and
            goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {classes.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`border-2 ${item.border} rounded-3xl p-5 sm:p-6 hover:shadow-lg transition-all duration-300`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-blue-800" />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-500">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-5">
                  {item.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-green-500 flex-shrink-0"
                      />

                      <span className="text-sm sm:text-base text-slate-900">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <hr className="border-slate-200 mb-4" />

                {/* Footer */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                    {item.price}
                  </h4>

                  <button
                    className={`${item.buttonColor} text-white px-5 py-2.5 rounded-lg font-medium text-sm sm:text-base w-full sm:w-auto transition`}
                  >
                    {item.button}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}