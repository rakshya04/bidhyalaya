"use client";
import React, { useState } from "react";
import { Mail, Clock, Globe, MessageSquare, ChevronDown } from "lucide-react";

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "How do I know which level is right for my child?",
      a: "You can refer to our Placement Level guidelines above, or schedule a free 15-minute diagnostic consultation call with our academic team.",
    },
    {
      q: "What technology do you use for classes?",
      a: "We use interactive video conferencing tools optimized for learning, alongside real-time whiteboards and engaging multimedia games.",
    },
    {
      q: "Can I sit in on my child's class?",
      a: "Yes, parents are always welcome to observe our sessions, especially during initial levels to track student comfort and progress.",
    },
    {
      q: "What if my child misses a class?",
      a: "Recorded class materials and summary worksheets are provided for every session so your child can catch up easily before the next class.",
    },
    {
      q: "Do you offer sibling discounts?",
      a: "Yes! We offer customized family bundle pricing when enrolling more than one child. Reach out to admissions via the form for details.",
    },
  ];

  return (
    <div className="bg-sky-50/60 min-h-screen text-slate-700 font-sans antialiased selection:bg-blue-800 selection:text-white pb-10">
      {/* PREMIUM WHITE / LIGHT BLUE HEADER SECTION */}
      <div className="relative overflow-hidden bg-[#c9b8db] via-white to-transparent py-10 px-6 text-center border-b border-blue-100/30 bg-[#bfc3db]">
        {/* Fine-grain professional dot grid matrix overlay */}
        <div className="absolute inset-0 bg-[#c9b8db] [background-size:20px_20px] opacity-40 pointer-events-none" />

        <div className="max-w-3xl mx-auto  relative z-10 space-y-4 ">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-2">
            Get in touch
          </h1>
          <div className="w-20 h-1 bg-red-800 mx-auto mt-2 rounded-full" />
          <p className="text-sm md:text-base text-slate-800 max-w-xl mx-auto font-medium leading-relaxed mb-1">
            Based in the United States · Serving Nepali families in 18+
            countries worldwide.
          </p>
        
          <p className="text-md text-slate-800 max-w-md mx-auto font-normal pt-1">
            Every message is read by a real person — we reply within 24 hours.
          </p>
        </div>
      </div>

      {/* MAIN LAYOUT SECTION */}
      <div className="max-w-6xl mx-auto w-full px-6 md:px-10 lg:px-16 mt-5 flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
        {/* LEFT COLUMN: CONTACT CHANNELS (Exactly matches layout in ab28b033-6631-448f-92c6-5ba3f2b13816_2.jpg) */}
        <div className="flex flex-col gap-4 w-full lg:w-[35%] shrink-0">
          {/* Email Us Box */}
          <div className="bg-[#edf4fc] border border-blue-300/60 rounded-2xl p-5 flex flex-row items-start gap-4 shadow-2xs">
            <div className="text-blue-600 mt-1 shrink-0">
              <Mail className="w-5 h-5 stroke-[2]" />
            </div>
            <div className="flex flex-col gap-0.5 text-xs md:text-sm text-slate-500 font-medium font-roboto">
              <h4 className="font-bold text-slate-800 text-sm md:text-base mb-1">
                Email us
              </h4>
              <p className='font-sans'>info@bidhyalaya.com</p>
              <p>apply@bidhyalaya.com</p>
              <p className="text-[11px] text-slate-600 mt-1">
                We reply within 24 hours.
              </p>
            </div>
          </div>

          {/* Office Hours Box */}
          <div className="bg-blue-50 border border-blue-300/60 rounded-xl p-5 flex flex-row items-start gap-4 font-sans shadow-2xs">
            <div className="text-blue-600 mt-1 shrink-0">
              <Clock className="w-5 h-5 stroke-[2]" />
            </div>
            <div className="flex flex-col gap-0.5 text-xs md:text-sm text-slate-600 font-medium font-robotow-full">
              <h4 className="font-bold text-slate-800 text-sm md:text-base mb-1">
                Office hours (US Eastern Time)
              </h4>
              <p>Mon–Fri: 9:00 AM – 6:00 PM CST</p>
              <p>Sat: 10:00 AM – 3:00 PM CST</p>
              <p className="text-[11px] text-slate-600 mt-1">
                Located in the United States
              </p>
            </div>
          </div>

          {/* Time Zone Support Box */}
          <div className="bg-blue-50 border border-blue-300/60 rounded-xl p-5 flex flex-row items-start gap-4 shadow-2xs">
            <div className="text-blue-600 mt-1 shrink-0">
              <Globe className="w-5 h-5 stroke-[2]" />
            </div>
            <div className="flex flex-col gap-0.5 text-xs md:text-sm text-slate-700 font-medium">
              <h4 className="font-bold text-slate-800 text-sm md:text-base mb-1">
                Time zone support
              </h4>
              <p>Classes run across all major time zones</p>
              <p>EST · PST · GMT · IST · AEST · JST</p>
              <p className="text-[11px] text-slate-600 mt-1">
                We always work around your schedule
              </p>
            </div>
          </div>

          {/* Phone / WhatsApp Box */}
          <div className="bg-blue-50 border border-blue-300/60 rounded-xl p-5 flex flex-row items-start gap-4 font-sans shadow-2xs">
            <div className="text-blue-600 mt-1 shrink-0">
              <MessageSquare className="w-5 h-5 stroke-[2]" />
            </div>
            <div className="flex flex-col gap-0.5 text-xs md:text-sm text-slate-500 font-medium">
              <h4 className="font-bold text-slate-800 text-sm md:text-base mb-1">
                Phone / WhatsApp
              </h4>
              <p className="font-semibold text-slate-700 tracking-wide">
                +1 (XXX) XXX-XXXX
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                Quick questions welcome
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: MESSAGE FORM & FAQs */}
        <div className="flex flex-col gap-12 w-full lg:flex-1 ">
          {/* Form Box Container */}
          <div className="bg-white border border-slate-300 rounded-2xl p-6 md:p-8 shadow-xs w-full">
            <h2 className="text-xl font-black text-slate-900 mb-5 tracking-tight">
              Send us a message
            </h2>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Rakshya Pandey"
                    required
                    className="w-full bg-slate-70/50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="rakshyapandey@example.com"
                    required
                    className="w-full bg-slate-70/50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none transition-all duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">
                  Subject *
                </label>
                <div className="relative">
                  <select className="w-full bg-slate-50/50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 focus:outline-none transition-all duration-200 cursor-pointer appearance-none">
                    <option value="">Select a topic...</option>
                    <option value="admission">
                      General Admissions Inquiry
                    </option>
                    <option value="curriculum">
                      Course Content / Placement Levels
                    </option>
                    <option value="billing">
                      Tuition & Family Bundle Rates
                    </option>
                    <option value="other">Other Inquiry</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">
                  Message *
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us how we can help..."
                  required
                  className="w-full bg-slate-70/50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-widest transition-all duration-200 shadow-xs active:scale-[0.995] mt-2 cursor-pointer"
              >
                Send message
              </button>
            </form>
          </div>

          {/* FAQ ACCORDIONS */}
          <div className="w-full space-y-4">
            <div className="space-y-0.5">
              <h2 className="text-xl font-bold text-black">
                Frequently asked questions
              </h2>
              <p className="text-xs text-slate-600 font-medium">
                Quick references regarding our online curriculum structure.
              </p>
            </div>

            <div className="divide-y divide-slate-200/60 border-t border-b border-slate-500/60 w-full">
              {faqData.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="py-4 transition-all duration-200 group"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between text-left cursor-pointer border border-slate-400 rounded-2xl py-2 px-2 hover:bg-blue-50 bg-blue-100 transition-colors duration-200"
                    >
                      <span
                        className={`text-[15px] md:text-base font-normal  tracking-tight transition-colors duration-200 ${isOpen ? "text-blue-800" : "text-slate-900 group-hover:text-blue-800"}`}
                      >
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "transform rotate-180 text-blue-800" : ""}`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed max-w-2xl text-left pl-0.5 antialiased">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
