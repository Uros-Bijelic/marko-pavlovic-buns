"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import FadeIn from "./FadeIn";

export default function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="bg-amber-50 px-6 py-20 sm:px-10 lg:px-24">
      <div className="mx-auto max-w-3xl space-y-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-amber-900 sm:text-4xl">
            {t.about.title}
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-lg font-medium text-amber-800">{t.about.lead}</p>
        </FadeIn>
        {t.about.paragraphs.map((paragraph, i) => (
          <FadeIn key={i} delay={150 + i * 100}>
            <p className="leading-relaxed text-amber-900/80">{paragraph}</p>
          </FadeIn>
        ))}
        <FadeIn delay={150 + t.about.paragraphs.length * 100}>
          <p className="text-lg font-semibold italic text-amber-900">
            {t.about.closing}
          </p>
        </FadeIn>
      </div>

      <div className="mx-auto mt-16 max-w-3xl space-y-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-amber-900 sm:text-4xl">
            {t.forWhom.title}
          </h2>
        </FadeIn>
        {t.forWhom.paragraphs.map((paragraph, i) => (
          <FadeIn key={i} delay={100 + i * 100}>
            <p className="leading-relaxed text-amber-900/80">{paragraph}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
