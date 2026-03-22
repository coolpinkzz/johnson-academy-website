"use client";

import { useState, type FormEvent } from "react";
import { type Course } from "@/data/courses";

type Branch = {
  name: string;
  address: string;
};

type Props = {
  courses: Course[];
  branches: Branch[];
};

export default function ContactForm({ courses, branches }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Replace with your form submission logic (e.g., API route, Formspree, etc.)
    setTimeout(() => setStatus("success"), 1000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white">
          Name <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-white">
          Phone Number <span className="text-primary">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="+91 XXXXX XXXXX"
        />
      </div>

      <div>
        <label htmlFor="course" className="mb-1.5 block text-sm font-medium text-white">
          Course Interested In <span className="text-primary">*</span>
        </label>
        <select
          id="course"
          name="course"
          required
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 [&>option]:bg-gray-900"
        >
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option key={course.slug} value={course.title}>
              {course.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="branch" className="mb-1.5 block text-sm font-medium text-white">
          Preferred Branch <span className="text-primary">*</span>
        </label>
        <select
          id="branch"
          name="branch"
          required
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 [&>option]:bg-gray-900"
        >
          <option value="">Select a branch</option>
          {branches.map((branch) => (
            <option key={branch.name} value={branch.name}>
              {branch.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white">
          Message <span className="text-gray-500">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
          placeholder="Any specific questions or preferences..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-xl bg-primary px-6 py-4 font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black disabled:opacity-70"
      >
        {status === "submitting"
          ? "Submitting..."
          : status === "success"
            ? "Thank you! We'll be in touch."
            : "Book Free Demo"}
      </button>
    </form>
  );
}
