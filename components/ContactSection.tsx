"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import FadeIn from "./FadeIn";

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent(`${t.contact.form.subjectPrefix} ${name}`);
    const body = encodeURIComponent(
      `${t.contact.form.name}: ${name}\n${t.contact.form.email}: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:marko.pavlovic328@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="bg-amber-50 px-6 py-20 sm:px-10 lg:px-24">
      <FadeIn>
        <h2 className="mb-16 text-center text-3xl font-bold text-amber-900 sm:text-4xl">
          {t.contact.title}
        </h2>
      </FadeIn>

      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
        <FadeIn direction="left">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-1 block text-sm font-medium text-amber-900"
              >
                {t.contact.form.name}
              </label>
              <input
                id="contact-name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-amber-200 bg-white px-4 py-2 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-1 block text-sm font-medium text-amber-900"
              >
                {t.contact.form.email}
              </label>
              <input
                id="contact-email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-amber-200 bg-white px-4 py-2 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-1 block text-sm font-medium text-amber-900"
              >
                {t.contact.form.message}
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-amber-200 bg-white px-4 py-2 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <button
              type="submit"
              className="rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-700"
            >
              {t.contact.form.submit}
            </button>
          </form>
        </FadeIn>

        <FadeIn direction="right" className="space-y-6">
          <p className="leading-relaxed text-amber-900/80">{t.contact.intro}</p>
          <p className="leading-relaxed text-amber-900/80">{t.contact.body}</p>

          <div className="space-y-2 pt-4">
            <p className="text-amber-900">
              <span className="font-semibold">{t.contact.emailLabel}:</span>{" "}
              <a href="mailto:marko.pavlovic328@gmail.com" className="hover:text-amber-600">
                marko.pavlovic328@gmail.com
              </a>
            </p>
            <p className="text-amber-900">
              <span className="font-semibold">{t.contact.phoneLabel}:</span>{" "}
              <a href="tel:+381641291292" className="hover:text-amber-600">
                +381 64 129 1292
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
