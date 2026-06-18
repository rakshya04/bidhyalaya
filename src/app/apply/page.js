"use client";

import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import {
  GraduationCap,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
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
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <GraduationCap
            size={60}
            className="mx-auto mb-4"
          />

          <h1 className="text-4xl md:text-5xl font-bold">
            Apply Now
          </h1>

          <p className="mt-3 text-red-100">
            Takes about 3 minutes. No payment required to apply.
          </p>
        </div>
      </section>

      {/* Progress */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex justify-between">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold
                ${
                  step >= num
                    ? "bg-blue-800 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
            >
              {num}
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
                placeholder="Phone Number"
                className="border rounded-xl p-3 w-full mt-4"
                value={form.phone}
                onChange={(e) =>
                  updateField("phone", e.target.value)
                }
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
            </>
          )}

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
                  updateField(
                    "childName",
                    e.target.value
                  )
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

              <select
                className="border rounded-xl p-3 w-full mt-4"
                value={form.level}
                onChange={(e) =>
                  updateField(
                    "level",
                    e.target.value
                  )
                }
              >
                <option value="">
                  Select Level
                </option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <>
              <h2 className="text-2xl font-bold mb-6">
                Class Preferences
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() =>
                    updateField(
                      "classType",
                      "One-on-One"
                    )
                  }
                  className={`border rounded-xl p-4 ${
                    form.classType === "One-on-One"
                      ? "border-blue-700 bg-blue-50"
                      : ""
                  }`}
                >
                  One-on-One
                </button>

                <button
                  onClick={() =>
                    updateField(
                      "classType",
                      "Group Class"
                    )
                  }
                  className={`border rounded-xl p-4 ${
                    form.classType === "Group Class"
                      ? "border-red-600 bg-red-50"
                      : ""
                  }`}
                >
                  Group Class
                </button>
              </div>

              <input
                type="text"
                placeholder="Preferred Days"
                className="border rounded-xl p-3 w-full mt-4"
                value={form.days}
                onChange={(e) =>
                  updateField("days", e.target.value)
                }
              />

              <input
                type="text"
                placeholder="Preferred Time"
                className="border rounded-xl p-3 w-full mt-4"
                value={form.time}
                onChange={(e) =>
                  updateField("time", e.target.value)
                }
              />
            </>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <>
              <h2 className="text-2xl font-bold mb-6">
                Review Application
              </h2>

              <div className="space-y-3">
                <p>
                  <strong>Parent:</strong>{" "}
                  {form.parentFirst}{" "}
                  {form.parentLast}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {form.email}
                </p>

                <p>
                  <strong>Country:</strong>{" "}
                  {form.country}
                </p>

                <p>
                  <strong>Child:</strong>{" "}
                  {form.childName}
                </p>

                <p>
                  <strong>Age:</strong>{" "}
                  {form.age}
                </p>

                <p>
                  <strong>Level:</strong>{" "}
                  {form.level}
                </p>

                <p>
                  <strong>Class:</strong>{" "}
                  {form.classType}
                </p>

                <p>
                  <strong>Days:</strong>{" "}
                  {form.days}
                </p>

                <p>
                  <strong>Time:</strong>{" "}
                  {form.time}
                </p>
              </div>
            </>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-10">
            {step > 1 ? (
              <button
                onClick={() =>
                  setStep(step - 1)
                }
                className="flex items-center gap-2"
              >
                <ArrowLeft size={18} />
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                onClick={() =>
                  setStep(step + 1)
                }
                className="bg-blue-800 text-white px-6 py-3 rounded-xl flex items-center gap-2"
              >
                Continue
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                onClick={() =>
                  setSubmitted(true)
                }
                className="bg-red-600 text-white px-6 py-3 rounded-xl"
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