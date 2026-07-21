import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="flex justify-between mx-auto max-w-6xl px-6 py-10 sm:px-10">
        <p className="text-black/60">
          Created by{' '}
          <span className="font-semibold text-black">Uros Bijelic</span> Full
          Stack Engineer{' '}
        </p>
        <div className="text-black">
          <p className="">urosbijelic90&#64;gmail.com</p>
          <p>
            <a
              className="relative text-inherit after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              href="https://www.urosbijelic.com/"
            >
              www.urosbijelic.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
