import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect } from 'react';
import chedLogo from '../../assets/images/ched-logo.png';
import depedLogo from '../../assets/images/deped-logo.png';
import nasaLogo from '../../assets/images/nasa-logo.png';
import surveyCorpsLogo from '../../assets/images/survey-corps-logo.png';

export default function Hero() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest).toLocaleString());

  useEffect(() => {
    const animation = animate(count, 4234, {
      duration: 5,
      ease: "easeOut",
      delay: 1,
    });

    return animation.stop;
  }, [count]);

  return (
    <section className="flex justify-center relative px-6 lg:px-8 min-h-screen flex items-center w-full max-w-full">
      <div className="flex flex-col items-center max-w-2xl mx-auto text-center">
        <h1 className="text-6xl sm:text-7xl font-bold tracking-wide text-foreground font-gambetta mb-6">JPSSITE</h1>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-wide font-general-sans">
          Junior Philippine Student Society for Information Technology Education
        </h2>
        <p className="mt-4 text-lg opacity-80">
          Empowering the Next Generation of IT Professionals
        </p>
        <button
          type="button"
          className="z-50 mt-8 rounded-full bg-primary px-5 py-2.5 text-sm font-thin text-white shadow-sm hover:opacity-90 transition-all flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-white dark:fill-white" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"></path></svg>
          Sign in with an LCUP account
        </button>
        <p className="mt-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-sm px-4 z-50">
          By signing in, you agree to our{' '}
          <a href="/terms" className="text-primary hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </a>
        </p>
        <p className="mt-4 flex items-center justify-center gap-x-1 text-center text-sm text-foreground">
          <motion.span className="inline-block tabular-nums tracking-wider text-primary dark:text-foreground">
            {rounded}
          </motion.span>
          {' '}Consolanians registered
        </p>

        <div className="mt-8 sm:mt-12 lg:mt-16">
          <p className="text-sm text-gray-500 mb-4 sm:mb-6">In partnership with</p>
          <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 flex-wrap">
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-lg flex items-center justify-center p-2 sm:p-3 lg:p-0">
              <img src={surveyCorpsLogo} alt="Survey Corps" className="w-full h-full object-contain" />
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-lg flex items-center justify-center p-2 sm:p-3 lg:p-0">
              <img src={chedLogo} alt="CHED" className="w-full h-full object-contain" />
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-lg flex items-center justify-center p-2 sm:p-3 lg:p-0">
              <img src={depedLogo} alt="DEPED" className="w-full h-full object-contain" />
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-lg flex items-center justify-center p-2 sm:p-3 lg:p-0">
              <img src={nasaLogo} alt="NASA" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
