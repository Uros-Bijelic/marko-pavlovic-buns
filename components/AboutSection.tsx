'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import FadeIn from './FadeIn';

export default function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white px-6 py-12 sm:px-10 sm:py-16 lg:px-24 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <h2 className="text-4xl font-extrabold tracking-tight text-black uppercase sm:text-5xl">
            {t.about.title}
          </h2>
        </FadeIn>

        <div className="mt-5 space-y-4 sm:mt-8 sm:space-y-5">
          <FadeIn delay={100}>
            <p className="text-lg font-medium text-black">{t.about.lead}</p>
          </FadeIn>
          {t.about.paragraphs.map((paragraph, i) => (
            <FadeIn key={i} delay={150 + i * 100}>
              <p className="leading-relaxed text-black/60">{paragraph}</p>
            </FadeIn>
          ))}
          <FadeIn delay={150 + t.about.paragraphs.length * 100}>
            <p className="text-lg font-semibold text-black">
              {t.about.closing}
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto max-w-5xl mt-10 sm:mt-14 md:mt-20">
        <FadeIn>
          <h2 className="text-4xl font-extrabold tracking-tight text-black uppercase sm:text-5xl">
            {t.forWhom.title}
          </h2>
        </FadeIn>

        <div className="mt-5 space-y-4 sm:mt-8 sm:space-y-5">
          {t.forWhom.paragraphs.map((paragraph, i) => (
            <FadeIn key={i} delay={100 + i * 100}>
              <p className="leading-relaxed text-black/60">{paragraph}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
