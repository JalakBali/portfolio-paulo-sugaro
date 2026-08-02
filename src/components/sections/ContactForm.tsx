"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

type Status = "idle" | "loading" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  message: string;
  honeypot: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  message: "",
  honeypot: "",
};

const inputClasses =
  "w-full rounded-lg border border-gray-700 bg-[#111827] px-4 py-2.5 text-sm text-gray-200 placeholder:text-gray-600 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent/50";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleHoneypotChange(event: ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, honeypot: event.target.value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setErrorMessage(
          data.message ?? "Something went wrong. Please try again."
        );
        return;
      }

      setStatus("success");
      setFormData(INITIAL_STATE);
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please check your connection and try again."
      );
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="flex min-h-[380px] flex-col items-center justify-center rounded-2xl border border-accent/25 bg-[#1F2937] p-6 text-center shadow-lg shadow-black/30 sm:p-8"
      >
        <p className="font-heading text-lg font-semibold text-white">
          Message Sent
        </p>
        <p className="mt-2 max-w-xs text-sm text-gray-300">
          Thanks! I&apos;ll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="rounded-2xl border border-accent/25 bg-[#1F2937] p-6 shadow-lg shadow-black/30 sm:p-8"
    >
      <h3 className="mb-6 font-heading text-lg font-semibold text-white">
        Send a Message
      </h3>

      {/* Honeypot — hidden from real users, bots that auto-fill every field will trip it. */}
      <div
        style={{ position: "absolute", left: "-9999px" }}
        aria-hidden="true"
      >
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.honeypot}
          onChange={handleHoneypotChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-xs uppercase tracking-wider text-gray-500"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-xs uppercase tracking-wider text-gray-500"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-xs uppercase tracking-wider text-gray-500"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me a bit about what you're looking to build."
            className={`${inputClasses} resize-none`}
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-red-400">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#5aa6c2] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </div>
    </motion.form>
  );
}
