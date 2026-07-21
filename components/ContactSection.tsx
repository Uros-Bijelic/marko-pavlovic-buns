'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import FadeIn from './FadeIn';
import { sendEmail } from '@/actions/send-email';

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white px-6 py-12 sm:px-10 sm:py-16 lg:px-24 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <h2 className="text-4xl font-extrabold tracking-tight text-black uppercase sm:text-5xl">
            {t.contact.title}
          </h2>
        </FadeIn>

        <div className="mt-8 grid gap-8 sm:mt-12 sm:gap-10 md:mt-16 md:grid-cols-2 md:gap-16">
          <FadeIn>
            <form
              onSubmit={() => sendEmail({ email, subject, message })}
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-xs font-semibold tracking-widest text-black uppercase"
                >
                  {t.contact.form.email}
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-black/20 bg-transparent px-1 py-2 text-black focus:border-black focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block text-xs font-semibold tracking-widest text-black uppercase"
                >
                  {t.contact.form.subject}
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full border-b border-black/20 bg-transparent px-1 py-2 text-black focus:border-black focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-xs font-semibold tracking-widest text-black uppercase"
                >
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border-b border-black/20 bg-transparent px-1 py-2 text-black focus:border-black focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 bg-black px-8 py-3 text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:bg-black/80 cursor-pointer"
              >
                {t.contact.form.submit}
              </button>
            </form>
          </FadeIn>

          <FadeIn delay={100} className="space-y-6">
            <p className="leading-relaxed text-black/60">{t.contact.intro}</p>
            <p className="leading-relaxed text-black/60">{t.contact.body}</p>

            <div className="space-y-2 pt-4">
              <p className="text-black">
                <span className="font-semibold">{t.contact.emailLabel}:</span>{' '}
                <span>info&#64;buns.rs</span>
              </p>
              <p className="text-black">
                <span className="font-semibold">{t.contact.phoneLabel}:</span>{' '}
                <a
                  href="tel:+381641291292"
                  className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                >
                  +381 64 129 1292
                </a>
              </p>
              <p className="text-black flex ga">
                <a
                  href={translations.en.contact.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-black transition-opacity hover:opacity-60"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
