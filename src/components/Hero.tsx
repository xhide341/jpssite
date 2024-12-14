import React from 'react';
import HeroBg from '../assets/cite_banner.jpg';

export default function Hero() {
  return (
    <div className="relative px-6 pt-14 lg:px-8">
      {/* <img src={HeroBg} className="absolute inset-0 h-screen w-screen object-cover bg-gradient-to-l from-transparent to-background-10" alt="" /> */}

      <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56 z-10">
        <div className="text-center max-w-2xl">
          <h1 className="text-2xl font-bold tracking-tight text-text sm:text-4xl">
            Junior Philippine Student Society for Information Technology Education
          </h1>
          <p className="mt-6 text-lg leading-8 opacity-80">
            Transforming lives through quality Catholic Augustinian education
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:scale-1.05 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

