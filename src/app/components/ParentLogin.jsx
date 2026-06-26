"use client";

import { GraduationCap, Eye } from "lucide-react";
import Link from "next/link";

export default function ParentLogin() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center py-10 px-4">
      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-900 text-white text-center py-10 px-6">
          <div className="w-14 h-14 bg-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
            <GraduationCap size={28} />
          </div>

          <h1 className="text-3xl font-bold">Parent Dashboard</h1>

          <p className="mt-2 text-blue-100">
            Sign in to access your children's classes
          </p>
        </div>

        {/* Form */}
        <div className="p-8">
          <div className="mb-5">
            <label className="block text-sm font-bold text-blue-900 mb-2 uppercase">
              Email Address
            </label>

            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-blue-900 mb-2 uppercase">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <Eye
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              />
            </div>
          </div>

          <button className="w-full bg-blue-900 hover:bg-blue-950 text-white py-3 rounded-xl font-semibold transition">
            Sign In to Dashboard
          </button>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account yet?{" "}
            <Link
              href="/apply"
              className="text-red-600 font-semibold hover:underline"
            >
              Apply for enrollment
            </Link>
          </p>
        </div>
      </div>

      {/* Demo Credentials */}
      {/* <div className="w-full max-w-md mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-5">
        <h3 className="font-bold text-blue-800 mb-3">
          Demo credentials
        </h3> */}

      {/* <p className="text-sm mb-2">
          <span className="font-semibold">
            Paid parent:
          </span>{" "}
          maya@example.com / maya123
        </p>

        <p className="text-sm">
          <span className="font-semibold">
            Unpaid account:
          </span>{" "}
          raj@example.com / raj123
        </p> */}
    </div>
    // </div>
  );
}
