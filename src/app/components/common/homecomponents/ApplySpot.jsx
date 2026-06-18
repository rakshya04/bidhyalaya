import { ArrowRight } from "lucide-react";

const ApplySpot = () => {
  return (
    <section className="bg-red-600 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
          आफ्नो बच्चाको भविष्य बनाउनुहोस्
        </h3>

        <h2 className="text-4xl md:text-4xl font-bold text-white mb-6">
          Give your child the gift of Nepali.
        </h2>

        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
          Enrollment is open now. Classes fill quickly — especially group
          sessions at popular time slots.
        </p>

        <button className="bg-white text-red-500 px-8 py-4 rounded-2xl font-semibold inline-flex items-center gap-2 hover:bg-red-500 hover:text-white transition">
          Apply for a spot today
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default ApplySpot;