"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 flex items-center bg-white justify-between border-b border-amber-100 py-4 px-6 backdrop-blur sm:px-10">
      <Image
        src="/buns-logo-4.jpg"
        alt="Buns logo"
        width={120}
        height={120}
        className="border-red-400"
        priority
      />

      <button
        type="button"
        onClick={toggleLanguage}
        aria-label={t.nav.toggleAriaLabel}
        className="relative flex h-9 w-20 items-center rounded-full bg-amber-200 px-1 transition-colors"
      >
        <span
          className={`absolute h-7 w-9 rounded-full bg-white shadow transition-transform duration-300 ease-out ${
            language === "en" ? "translate-x-9" : "translate-x-0"
          }`}
        />
        <span
          className={`relative z-10 flex-1 text-center text-xs font-semibold transition-colors ${
            language === "sr" ? "text-amber-900" : "text-amber-500"
          }`}
        >
          SR
        </span>
        <span
          className={`relative z-10 flex-1 text-center text-xs font-semibold transition-colors ${
            language === "en" ? "text-amber-900" : "text-amber-500"
          }`}
        >
          EN
        </span>
      </button>
    </header>
  );
}
