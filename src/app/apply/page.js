"use client";

import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import {
  GraduationCap,
  CheckCircle,
  ArrowRight,
  ArrowLeft
} from "lucide-react";

const countries = [
  { code: "NP", name: "Nepal" },
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "GB", name: "United Kingdom" },
  { code: "NZ", name: "New Zealand" },
  { code: "IN", name: "India" },
];

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    parentFirst: "",
    parentLast: "",
    email: "",
    phone: "",
    country: "",

    childName: "",
    age: "",
    level: "",

    classType: "",
    days: "",
    time: "",
  });

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          <CheckCircle
            size={80}
            className="mx-auto text-green-500 mb-6"
          />

          <h2 className="text-4xl font-bold mb-4">
            Application Received!
          </h2>

          <p className="text-gray-600">
            Thank you for applying. Our admissions team
            will contact you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-purple-400 text-black py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <GraduationCap
            size={60}
            className="mx-auto mb-4"
          />

          <h1 className="text-4xl md:text-5xl font-bold">
            Apply Now
          </h1>

          <p className="mt-3 text-black-100">
            Takes about 3 minutes. No payment required to apply.
          </p>
        </div>
      </section>

      {/* Progress */}
<div className="max-w-5xl mx-auto px-6 py-8">
  <div className="flex items-center justify-between">
    {[
      { id: 1, label: "Parent info" },
      { id: 2, label: "Child info" },
      { id: 3, label: "Class preferences" },
      { id: 4, label: "Review" },
    ].map((item, index, arr) => (
      <div key={item.id} className="flex items-center flex-1">
        {/* Step Circle + Label */}
        <div className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
              ${
                step >= item.id
                  ? "bg-blue-800 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
          >
            {item.id}
          </div>

          <span
            className={`ml-3 text-sm whitespace-nowrap ${
              step === item.id
                ? "text-blue-800 font-medium"
                : "text-gray-500"
            }`}
          >
            {item.label}
          </span>
        </div>

        {/* Connecting Line */}
        {index < arr.length - 1 && (
          <div className="flex-1 h-px bg-gray-300 mx-4"></div>
        )}
      </div>
    ))}
  </div>
</div>
      {/* Form Card */}
      <div className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-3xl shadow-sm p-8">
          {/* Step 1 */}
          {step === 1 && (
            <>
              <h2 className="text-2xl font-bold mb-6">
                Parent Information
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border rounded-xl p-3"
                  value={form.parentFirst}
                  onChange={(e) =>
                    updateField(
                      "parentFirst",
                      e.target.value
                    )
                  }
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="border rounded-xl p-3"
                  value={form.parentLast}
                  onChange={(e) =>
                    updateField(
                      "parentLast",
                      e.target.value
                    )
                  }
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="border rounded-xl p-3 w-full mt-4"
                value={form.email}
                onChange={(e) =>
                  updateField("email", e.target.value)
                }
              />
              <input
                type="tel"
                placeholder="Phone Number (Optional)"
                className="border rounded-xl p-3 w-full mt-4"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
              />

            

              <div className="mt-4">
                <label className="font-medium block mb-2">
                  Country
                </label>

                <select
                  className="border rounded-xl p-3 w-full"
                  value={form.country}
                  onChange={(e) =>
                    updateField(
                      "country",
                      e.target.value
                    )
                  }
                >
                  <option value="">
                    Select Country
                  </option>

                  {countries.map((country) => (
                    <option
                      key={country.code}
                      value={country.name}
                    >
                      {country.name}
                    </option>
                  ))}
                </select>

                {form.country && (
                  <div className="mt-3 flex items-center gap-2">
                    <ReactCountryFlag
                      svg
                      countryCode={
                        countries.find(
                          (c) =>
                            c.name === form.country
                        )?.code
                      }
                    />
                    <span>{form.country}</span>
                  </div>
                )}
              </div>
              {/* Time Zone */}
<div className="mt-4">
  <label className="block mb-2 font-medium">
    Your Time Zone
  </label>

  <select
    className="border rounded-xl p-3 w-full"
    value={form.timezone}
    onChange={(e) =>
      updateField("timezone", e.target.value)
    }
  >
    <option value="">Select Time Zone</option>

    <option value="Asia/Kathmandu">
      Nepal (NPT) - Asia/Kathmandu
    </option>

    <option value="Asia/Kolkata">
      India (IST) - Asia/Kolkata
    </option>

    <option value="Asia/Dhaka">
      Bangladesh - Asia/Dhaka
    </option>

    <option value="Asia/Dubai">
      UAE - Asia/Dubai
    </option>

    <option value="Europe/London">
      United Kingdom - Europe/London
    </option>

    <option value="Europe/Berlin">
      Germany - Europe/Berlin
    </option>

    <option value="America/New_York">
      USA Eastern - America/New_York
    </option>

    <option value="America/Chicago">
      USA Central - America/Chicago
    </option>

    <option value="America/Denver">
      USA Mountain - America/Denver
    </option>

    <option value="America/Los_Angeles">
      USA Pacific - America/Los_Angeles
    </option>

    <option value="Australia/Sydney">
      Australia - Australia/Sydney
    </option>

    <option value="Pacific/Auckland">
      New Zealand - Pacific/Auckland
    </option>
  </select>
</div>
            </>

          )}
           

            {/* Step 2 */}
            {/* Step 2 */}
{step === 2 && (
  <>
    <h2 className="text-2xl font-bold mb-6">
      Child Information
    </h2>

    <input
      type="text"
      placeholder="Child Name"
      className="border rounded-xl p-3 w-full"
      value={form.childName}
      onChange={(e) =>
        updateField("childName", e.target.value)
      }
    />

    <input
      type="number"
      placeholder="Age"
      className="border rounded-xl p-3 w-full mt-4"
      value={form.age}
      onChange={(e) =>
        updateField("age", e.target.value)
      }
    />

    {/* Nepali Level */}
    <div className="mt-6">
      <label className="block mb-3 font-medium">
        Nepali Level
      </label>

      <div className="space-y-3 border rounded-xl p-4 font-serif text-shadow-neutral-50">
        <label className="flex gap-3">
          <input
            type="radio"
            name="nepaliLevel"
            value="Seedling"
            checked={form.nepaliLevel === "Seedling"}
            onChange={(e) =>
              updateField("nepaliLevel", e.target.value)
            }
          />
          <span>
            Seedling (बिरुवा) – Beginner, no prior Nepali
            knowledge
          </span>
        </label>

        <label className="flex gap-3">
          <input
            type="radio"
            name="nepaliLevel"
            value="Sprout"
            checked={form.nepaliLevel === "Sprout"}
            onChange={(e) =>
              updateField("nepaliLevel", e.target.value)
            }
          />
          <span>
            Sprout (कोपिला) – Elementary, knows the alphabet
            and recognizes some words
          </span>
        </label>

        <label className="flex gap-3">
          <input
            type="radio"
            name="nepaliLevel"
            value="Blossom"
            checked={form.nepaliLevel === "Blossom"}
            onChange={(e) =>
              updateField("nepaliLevel", e.target.value)
            }
          />
          <span>
            Blossom (फुलेको) – Intermediate, can read and
            write simple sentences
          </span>
        </label>

        <label className="flex gap-3">
          <input
            type="radio"
            name="nepaliLevel"
            value="Scholar"
            checked={form.nepaliLevel === "Scholar"}
            onChange={(e) =>
              updateField("nepaliLevel", e.target.value)
            }
          />
          <span>
            Scholar (विद्वान्) – Advanced, comfortable
            reading, writing and conversation
          </span>
        </label>

        <label className="flex gap-3">
          <input
            type="radio"
            name="nepaliLevel"
            value="Not Sure"
            checked={form.nepaliLevel === "Not Sure"}
            onChange={(e) =>
              updateField("nepaliLevel", e.target.value)
            }
          />
          <span>
            Not sure – Please assess my child
          </span>
        </label>
      </div>
    </div>
  </>
)}

   {/* Step 3 */}
{step === 3 && (
  <>
    <h2 className="text-2xl font-bold mb-8">
      Class Preferences
    </h2>

    {/* Class Format */}
    <div className="mb-8">
      <label className="block font-semibold mb-3 uppercase text-sm">
        Class Format *
      </label>

      <div className="grid md:grid-cols-2 gap-4">
        <label
          className={`border rounded-2xl p-5 cursor-pointer ${
            form.classFormat === "Group"
              ? "border-blue-600 bg-blue-50"
              : "border-gray-300"
          }`}
        >
          <input
            type="radio"
            name="classFormat"
            value="Group"
            className="hidden"
            checked={form.classFormat === "Group"}
            onChange={(e) =>
              updateField(
                "classFormat",
                e.target.value
              )
            }
          />

          <h3 className="font-bold text-lg">
            Group Class
          </h3>

          <p className="text-gray-600 text-sm mt-1">
            Up to 6 kids · same level · from
            $18/session
          </p>
        </label>

        <label
          className={`border rounded-2xl p-5 cursor-pointer ${
            form.classFormat === "One-on-One"
              ? "border-blue-600 bg-blue-50"
              : "border-gray-300"
          }`}
        >
          <input
            type="radio"
            name="classFormat"
            value="One-on-One"
            className="hidden"
            checked={
              form.classFormat === "One-on-One"
            }
            onChange={(e) =>
              updateField(
                "classFormat",
                e.target.value
              )
            }
          />

          <h3 className="font-bold text-lg">
            One-on-One
          </h3>

          <p className="text-gray-600 text-sm mt-1">
            Private · your pace · from
            $35/session
          </p>
        </label>
      </div>
    </div>

    {/* Preferred Days */}
    <div className="mb-8">
      <label className="block font-semibold mb-3 uppercase text-sm">
        Preferred Days *
      </label>

      <div className="flex flex-wrap gap-3">
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((day) => (
          <button
            type="button"
            key={day}
            onClick={() => {
              const days =
                form.preferredDays || [];

              if (days.includes(day)) {
                updateField(
                  "preferredDays",
                  days.filter(
                    (d) => d !== day
                  )
                );
              } else {
                updateField(
                  "preferredDays",
                  [...days, day]
                );
              }
            }}
            className={`px-4 py-2 rounded-full border text-sm ${
              form.preferredDays?.includes(
                day
              )
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white border-gray-300"
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>

    {/* Preferred Time */}
    <div className="mb-8">
      <label className="block font-semibold mb-3 uppercase text-sm">
        Preferred Time Slot *
      </label>

      <select
        className="border rounded-xl p-3 w-full"
        value={form.timeSlot}
        onChange={(e) =>
          updateField(
            "timeSlot",
            e.target.value
          )
        }
      >
        <option value="">
          Select a time...
        </option>
        <option>8:00 AM - 9:00 AM</option>
        <option>10:00 AM - 11:00 AM</option>
        <option>2:00 PM - 3:00 PM</option>
        <option>4:00 PM - 5:00 PM</option>
        <option>6:00 PM - 7:00 PM</option>
      </select>
    </div>

    {/* How did you hear about us */}
    <div className="mb-8">
      <label className="block font-semibold mb-3 uppercase text-sm">
        How Did You Hear About Us?
      </label>

      <select
        className="border rounded-xl p-3 w-full"
        value={form.hearAbout}
        onChange={(e) =>
          updateField(
            "hearAbout",
            e.target.value
          )
        }
      >
        <option value="">
          Select...
        </option>
        <option>Google Search</option>
        <option>Facebook</option>
        <option>Instagram</option>
        <option>Friend / Family</option>
        <option>School</option>
        <option>Other</option>
      </select>
    </div>

    {/* Additional Notes */}
    <div>
      <label className="block font-semibold mb-3 uppercase text-sm">
        Additional Notes
      </label>

      <textarea
        rows={5}
        placeholder="Any special needs, questions, or context about your child's learning..."
        className="border rounded-xl p-3 w-full resize-none"
        value={form.notes}
        onChange={(e) =>
          updateField(
            "notes",
            e.target.value
          )
        }
      />
    </div>
  </>
)}



          
       {/* Step 4 */}
       {/* Step 4 */}
{step === 4 && (
  <>
    <h2 className="text-3xl font-bold mb-8">
      Review Your Application
    </h2>

    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
      <table className="w-full">
        <tbody>
          <tr className="border-b">
            <td className="bg-gray-50 p-4 font-serif w-1/3">
              Parent 
            </td>
            <td className="p-4">
              {form.parentFirst} {form.parentLast}
            </td>
          </tr>


          <tr className="border-b">
            <td className="bg-gray-50 p-4 font-serif">
              Location / Time Zone
            </td>
            <td className="p-4">
              {form.timezone}
            </td>
          </tr>

          <tr className="border-b">
            <td className="bg-gray-50 p-4 font-serif">
              Child
            </td>
            <td className="p-4">
              {form.childName}
            </td>
          </tr>

          <tr className="border-b">
            <td className="bg-gray-50 p-4 font-serif">
              Age
            </td>
            <td className="p-4">
              {form.age}
            </td>
          </tr>

          <tr className="border-b">
            <td className="bg-gray-50 p-4 font-serif">
             Level
            </td>
            <td className="p-4">
              {form.nepaliLevel}
            </td>
          </tr>

          <tr className="border-b">
            <td className="bg-gray-50 p-4 font-serif">
             Format
            </td>
            <td className="p-4">
              {form.classFormat}
            </td>
          </tr>

          <tr className="border-b">
            <td className="bg-gray-50 p-4 font-serif">
              Scheduled Days
            </td>
            <td className="p-4">
              {form.preferredDays?.join(", ")}
            </td>
          </tr>

        </tbody>
      </table>
    </div>

    <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-gray-700">
      Please review all information carefully before submitting your application.
    </div>
  </>
)}

{/* Navigation */}
<div className="flex justify-between mt-10">
  {step > 1 ? (
    <button
      onClick={() => setStep(step - 1)}
      className="flex items-center gap-2 text-gray-700 hover:text-black font-medium"
    >
      <ArrowLeft size={18} />
      Back
    </button>
  ) : (
    <div />
  )}

  {step < 4 ? (
    <button
      onClick={() => setStep(step + 1)}
      className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-xl flex items-center gap-2"
    >
      Continue
      <ArrowRight size={18} />
    </button>
  ) : (
    <button
      onClick={() => setSubmitted(true)}
      className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-medium"
    >
      Submit Application
    </button>
  )}
</div>
        </div>
      </div>
    </main>
  );
}

       