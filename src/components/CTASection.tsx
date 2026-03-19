"use client";

import { useState } from "react";

const courses = ["Guitar", "Keyboard", "Drums", "Violin", "Dance", "Art"];
const branches = ["Indiranagar", "Koramangala", "Whitefield"];

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    branch: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - e.g., API call or redirect
  };

  return (
    <section
      id="contact"
      className="bg-primary px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Book Your Free Demo Class Today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Fill in your details and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-6 rounded-2xl bg-black/20 p-8 backdrop-blur sm:p-10"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Your phone number"
            />
          </div>
          <div>
            <label htmlFor="course" className="block text-sm font-medium text-white">
              Course
            </label>
            <select
              id="course"
              required
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <option value="" className="bg-black text-white">
                Select a course
              </option>
              {courses.map((c) => (
                <option key={c} value={c} className="bg-black text-white">
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="branch" className="block text-sm font-medium text-white">
              Branch
            </label>
            <select
              id="branch"
              required
              value={formData.branch}
              onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <option value="" className="bg-black text-white">
                Select a branch
              </option>
              {branches.map((b) => (
                <option key={b} value={b} className="bg-black text-white">
                  {b}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 w-full rounded-2xl bg-white px-6 py-4 text-lg font-semibold text-primary transition-all hover:bg-white/90 hover:shadow-xl"
          >
            Book Free Demo
          </button>
        </form>
      </div>
    </section>
  );
}
