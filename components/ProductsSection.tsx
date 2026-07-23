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
    <section
      id="products"
      className="scroll-mt-24 bg-white px-6 py-12 sm:px-10 sm:py-16 lg:px-24 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 sm:mb-14 md:mb-20">
          <FadeIn>
            <h1 className="text-6xl leading-none font-extrabold tracking-tight text-black lowercase sm:text-7xl md:text-8xl">
              buns.
            </h1>
          </FadeIn>
          <FadeIn delay={80}>
            <p className="text-4xl leading-none font-extrabold tracking-tight text-black lowercase sm:text-3xl md:text-5xl">
              {t.products.tagline}
            </p>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="mt-6 max-w-lg text-lg text-black/60">
              {t.products.subtitle}
            </p>
          </FadeIn>
        </div>

        <div className="divide-y divide-black/10">
          {buns.map((bun) => {
            const isLarge = bun.imageSize === 'lg';

            return (
              <div
                key={bun.id}
                className="flex flex-col items-center gap-4 py-8 first:pt-0 sm:gap-6 sm:py-12 md:flex-row md:items-center md:gap-10 md:py-16"
              >
                <FadeIn className="flex w-full justify-center md:w-1/2">
                  <div
                    className={`relative ${bun.isSmallerBun ? 'w-[78%]' : 'w-full'} bg-white ${
                      isLarge ? 'h-57.5 sm:h-70' : 'h-64'
                    } ${bun.imageInset ? 'p-6 sm:p-8' : ''}`}
                  >
                    <Image
                      src={bun.image}
                      alt={bun.title[language]}
                      fill
                      sizes="(min-width: 768px) 40vw, 90vw"
                      className="object-contain object-top"
                    />
                  </div>
                </FadeIn>

                <FadeIn delay={100} className="w-full md:w-1/2">
                  <h3 className="text-2xl font-extrabold tracking-tight text-black">
                    {bun.title[language]}
                  </h3>
                  <p className="mt-3 text-black/60">{bun.subtitle[language]}</p>
                  <p className="mt-1 text-black/60">
                    {bun.description[language]}
                  </p>
                </FadeIn>
              </div>
            );
          })}
        </div>

        <FadeIn>
          <p className="mt-4 text-sm text-black/40 italic">{t.products.note}</p>
        </FadeIn>
      </div>
    </section>
  );
}
