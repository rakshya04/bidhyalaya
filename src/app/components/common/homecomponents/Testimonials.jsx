import React from "react";

const testimonials = [
  {
    review:
      "My child has improved a lot in Nepali speaking and reading. The teachers are very supportive and kind.",
    name: "Saraswati Shrestha",
    location: "Kathmandu, Nepal",
    role: "Parent",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    review:
      "The learning system is very structured. My son enjoys every class and is now confident in Nepali writing.",
    name: "Rabin Koirala",
    location: "Bhaktapur, Nepal",
    role: "Parent",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    review:
      "Excellent curriculum and friendly environment. I can clearly see my daughter's progress every month.",
    name: "Anita Sharma",
    location: "Lalitpur, Nepal",
    role: "Parent",
    image: "https://i.pravatar.cc/150?img=47",
  },
];

const TestimonialCard = ({ review, name, location, role, image }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col justify-between h-full">
      {/* Review */}
      <p className="text-gray-600 text-sm leading-6 mb-6 italic">"{review}"</p>

      {/* Parent Info */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-red-500"
        />

        <div>
          <h4 className="text-gray-900 font-semibold text-sm">{name}</h4>
          <p className="text-gray-500 text-xs">{location}</p>
          <p className="text-red-600 text-xs font-medium">{role}</p>
        </div>
      </div>

      {/* Rating at Bottom */}
      <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-[#faf9f7]">
      {/* Header Section */}
      <div className="text-center flex flex-col items-center gap-4 max-w-2xl mx-auto mb-8">
        <p className="text-red-700 font-semibold tracking-[4px] uppercase text-xs">
          Families Worldwide
        </p>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          What Parents Are Saying
        </h1>

        <div className="w-16 h-1 bg-red-700 rounded-full"></div>

        <p className="text-gray-600 text-sm md:text-base leading-6">
          Real feedback from parents whose children are learning and growing
          with us.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;