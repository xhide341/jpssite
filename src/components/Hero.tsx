import LCUP from '../assets/lcup.png';
import heroSVG from '../assets/undraw_team.svg';

  /**
   * Hero component for the home page.
   * 
   * Displays a call-to-action to join JPSSITE, with a brief description of the organization.
   * @returns A JSX element representing the Hero component.
   */
export default function Hero() {
  return (
    <section className="flex justify-center relative px-6 lg:px-8 min-h-screen flex items-center">
      <div className="flex flex-col items-center max-w-2xl mx-auto text-center">
        <div className="flex flex-col items-center gap-6 mb-8">
          <img src={LCUP} alt="LCUP logo" className="w-20 h-20" />
          <h1 className="text-3xl sm:text-5xl font-bold tracking-wide text-foreground font-gambetta">JPSSITE</h1>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-wide font-general-sans">
          Junior Philippine Student Society for Information Technology Education
        </h2>
        <p className="mt-6 text-lg opacity-80">
          Empowering the Next Generation of IT Professionals
        </p>
        <div className="mt-8">
          <button
            type="button"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-all"
          >
            Join Us
          </button>
        </div>
      </div>
      {/* <div className="max-w-2xl mx-auto">
        <img 
          src={heroSVG} 
          alt="Team illustration" 
          className="w-[500px] pointer-events-none select-none hidden lg:block"
        />
      </div> */}
    </section>
  );
}
