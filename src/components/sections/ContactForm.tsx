"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [emailError, setEmailError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === "email") setEmailError("");
  }

  function handleEmailBlur() {
    if (form.email && !isValidEmail(form.email)) {
      setEmailError("Please enter a valid email address.");
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValidEmail(form.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "error") {
    return (
      <div className="h-full rounded-3xl bg-white/60 dark:bg-white/4 border border-red-500/30 backdrop-blur-xl p-10 flex flex-col items-center justify-center text-center gap-5">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-3xl shadow-lg shadow-red-500/30">
          ✕
        </div>
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
          Something went wrong
        </h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
          Could not send your message. You can reach me directly at truongk23k@gmail.com
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-sm hover:border-blue-500/40 transition-colors"
        >
          Try again
        </button>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="h-full rounded-3xl bg-white/60 dark:bg-white/4 border border-slate-200/80 dark:border-white/8 backdrop-blur-xl p-10 flex flex-col items-center justify-center text-center gap-5">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-3xl shadow-lg shadow-emerald-500/30">
          ✓
        </div>
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
          Message Sent!
        </h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", email: "", subject: "", message: "" });
          }}
          className="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-sm hover:border-blue-500/40 transition-colors"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white/60 dark:bg-white/4 border border-slate-200/80 dark:border-white/8 backdrop-blur-xl p-8 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Name
          </label>
          <input
            required
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/6 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/15 transition-all duration-200"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleEmailBlur}
            placeholder="your@email.com"
            className={`w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/6 border text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
              emailError
                ? "border-red-400 dark:border-red-500 focus:border-red-400 focus:ring-red-400/15"
                : "border-slate-200 dark:border-white/10 focus:border-blue-500/50 focus:ring-blue-500/15"
            }`}
          />
          {emailError && (
            <p className="text-xs text-red-500 dark:text-red-400 mt-1">{emailError}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Subject
        </label>
        <input
          required
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="What's this about?"
          className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/6 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/15 transition-all duration-200"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Message
        </label>
        <textarea
          required
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell me about your project..."
          className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/6 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/15 transition-all duration-200 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-100 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2"
      >
        {status === "sending" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending…
          </>
        ) : (
          "Send Message →"
        )}
      </button>
    </form>
  );
}
