'use client';

import { SubmitEventHandler, useState, useTransition } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import FadeIn from './FadeIn';
import InstagramLink from './InstagramLink';
import { sendEmail } from '@/lib/actions/send-email';
import { toast } from 'sonner';

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    startTransition(async () => {
      const result = await sendEmail({ email, message, subject });

      if (result.success) {
        toast.success(t.contact.toastSuccessMessage);
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        toast.error(t.contact.toastErrorMessage);
      }
    });
  };

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
            <form onSubmit={handleSubmit} className="space-y-5">
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
                className="mt-2 flex cursor-pointer items-center gap-3 bg-black px-8 py-3 text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-70"
                disabled={isPending}
              >
                {isPending && (
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 animate-spin text-white/30"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                      className="text-white"
                    />
                  </svg>
                )}
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
              <p className="text-black">
                <InstagramLink href={t.contact.instagramLink} />
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
