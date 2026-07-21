'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;

        if (currentY < 96) {
          setHidden(false);
        } else if (delta > 4) {
          setHidden(true);
        } else if (delta < -4) {
          setHidden(false);
        }

        lastScrollY.current = currentY;
        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#products', label: t.nav.products },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur transition-transform duration-300 ease-in-out ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <a href="#top" className="shrink-0">
          <Image
            src="/buns-logo-4.jpg"
            alt="Buns"
            width={100}
            height={30}
            className="h-7 w-auto"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-widest text-black uppercase underline-offset-4 transition-colors relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggleLanguage}
          aria-label={t.nav.toggleAriaLabel}
          className="text-xs font-semibold tracking-widest uppercase"
        >
          <span
            className={`${language === 'sr' ? 'text-black' : 'text-black/35'} cursor-pointer`}
          >
            SR
          </span>
          <span className="mx-1.5 text-black/25">/</span>
          <span
            className={`${language === 'en' ? 'text-black' : 'text-black/35'} cursor-pointer`}
          >
            EN
          </span>
        </button>
      </div>
    </header>
  );
}
