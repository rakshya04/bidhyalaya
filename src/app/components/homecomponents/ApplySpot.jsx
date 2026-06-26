import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ApplySpot = () => {
  return (
    <section className="bg-[#c9b8db] py-14 my-0">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-black mb-3">
          आफ्नो बच्चाको भविष्य बनाउनुहोस्
        </h3>

        <h2 className="text-3xl md:text-3xl font-bold text-black mb-3">
          Give your child the gift of Nepali.
        </h2>

        <p className="text-black/90 text-md mb-3 max-w-2xl mx-auto">
          Enrollment is open now. Classes fill quickly — especially group
          sessions at popular time slots.
        </p>

        <Link href="/apply" className="bg-white text-red-500 px-8 py-4 rounded-2xl font-semibold inline-flex items-center gap-2 hover:bg-red-500 hover:text-white transition">
          Apply for a spot today
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
};

export default ApplySpot;