"use client";

import { useId, useState, type FormEvent } from "react";
import { Phone, X } from "lucide-react";

const DEMO_PHONE = "+917798347976";
const DEMO_PHONE_TEL = "tel:+917798347976";

type BookFreeDemoButtonProps = {
  courseTitle: string;
  className?: string;
};

export default function BookFreeDemoButton({
  courseTitle,
  className = "",
}: BookFreeDemoButtonProps) {
  const dialogTitleId = useId();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
      >
        Book a Free Demo
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close dialog"
            onClick={() => {
              setOpen(false);
              setSubmitted(false);
            }}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-[#111] p-6 shadow-2xl shadow-black/50"
          >
            <div className="flex items-start justify-between gap-4">
              <h2
                id={dialogTitleId}
                className="text-lg font-semibold text-white sm:text-xl"
              >
                Book a free demo
              </h2>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setSubmitted(false);
                }}
                className="rounded-lg p-1 text-muted transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-2 text-sm text-muted">
              Course: <span className="text-white/90">{courseTitle}</span>
            </p>

            {submitted ? (
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Thank you — we&apos;ll reach out shortly. You can also call us
                now at{" "}
                <a
                  href={DEMO_PHONE_TEL}
                  className="font-semibold text-primary hover:underline"
                >
                  {DEMO_PHONE}
                </a>
                .
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="demo-name"
                    className="mb-1 block text-xs font-medium text-white/80"
                  >
                    Name
                  </label>
                  <input
                    id="demo-name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="demo-phone"
                    className="mb-1 block text-xs font-medium text-white/80"
                  >
                    Phone
                  </label>
                  <input
                    id="demo-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25"
                    placeholder="+91 …"
                  />
                </div>
                <div>
                  <label
                    htmlFor="demo-note"
                    className="mb-1 block text-xs font-medium text-white/80"
                  >
                    Message (optional)
                  </label>
                  <textarea
                    id="demo-note"
                    name="note"
                    rows={3}
                    className="w-full resize-none rounded-lg border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25"
                    placeholder="Preferred time or questions…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
                >
                  Submit request
                </button>
              </form>
            )}

            <a
              href={DEMO_PHONE_TEL}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              <Phone className="h-4 w-4" />
              Call instead
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
