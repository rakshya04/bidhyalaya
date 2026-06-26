import Link from "next/link";
import { BookOpen, Users, CheckCircle2 } from "lucide-react";

const classes = [
  {
    title: "One-on-One",
    subtitle: "एक-एक",
    description:
      "Personalized sessions tailored exactly to your child's pace and learning style.",
    price: "From $35/session",
    button: "Apply Now",
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
    button: "Apply Now",
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

export default function TeachingMethod() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-red-600 font-semibold uppercase tracking-[4px] text-sm">
            How We Teach
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Choose Your Class Format
          </h2>

          <div className="w-20 h-1 bg-red-800 mx-auto mt-2 rounded-full mb-4" />

          <p className="mt-3 max-w-2xl mx-auto text-slate-600">
            Select the learning style that best fits your child's needs and
            goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {classes.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`border-2 ${item.border} rounded-3xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col h-full`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                    <Icon size={22} className="text-blue-700" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="text-slate-500">{item.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  {/* Description */}
                  <p className="text-slate-600 leading-7 mb-6">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {item.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2
                          size={18}
                          className="text-green-500 flex-shrink-0"
                        />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-auto">
                    <hr className="my-6 border-slate-200" />

                    <div className="flex items-center justify-between gap-9">
                      <div className="w-[190px]">
                        <h4 className="text-2xl font-bold text-slate-900 whitespace-nowrap">
                          {item.price}
                        </h4>
                      </div>

                      <Link
                        href="/apply"
                        className={`${item.buttonColor} text-white px-4 py-3 rounded-xl font-semibold transition duration-300 text-center w-35`}
                      >
                        {item.button}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
