'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

import FadeIn from './FadeIn';
import { buns } from '../data/buns';

export default function ProductsSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-24">
      <FadeIn>
        <h2 className="mb-16 text-center text-3xl font-bold text-amber-900 sm:text-4xl">
          {t.products.title}
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl space-y-20">
        {buns.map((bun, i) => {
          const imageOnLeft = i % 2 === 0;

          return (
            <div
              key={bun.id}
              className={`flex flex-col gap-8 md:flex-row md:items-center ${
                imageOnLeft ? '' : 'md:flex-row-reverse'
              }`}
            >
              <FadeIn
                direction={imageOnLeft ? 'left' : 'right'}
                className="flex-1"
              >
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-amber-100 shadow-lg">
                  <Image
                    src={bun.image}
                    alt={bun.title[language]}
                    fill
                    sizes="(min-width: 768px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </FadeIn>

              <FadeIn
                direction={imageOnLeft ? 'right' : 'left'}
                className="flex-1"
              >
                <h3 className="mb-2 text-2xl font-bold text-amber-900">
                  {bun.title[language]}
                </h3>
                <p className="mb-4 text-sm font-medium text-amber-700">
                  {bun.subtitle[language]}
                </p>
                <p className="leading-relaxed text-amber-900/80">
                  {bun.description[language]}
                </p>
              </FadeIn>
            </div>
          );
        })}
      </div>

      <FadeIn>
        <p className="mx-auto mt-16 max-w-5xl text-center text-sm italic text-amber-700/70">
          {t.products.note}
        </p>
      </FadeIn>
    </section>
  );
}
