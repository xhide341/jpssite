export default function Hero() {
  return (
    <div className="px-6 pt-14 lg:px-8 relative">
      <div className="max-w-7xl py-32 sm:py-48 lg:py-56">
        <div className="text-center max-w-2xl mx-auto text-text">
          <h4 className="text-2xl w-full font-bold tracking-tight sm:text-4xl relative">
            Junior Philippine Student Society for Information Technology Education
          </h4>
          <p className="mt-6 text-lg leading-8 opacity-80">
            Empowering the Next Generation of IT Professionals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 relative z-50">
            <button
              type="button"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white pointer-events-auto shadow-sm hover:scale-105 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Join Now
            </button>
            <button
              type="button"
              className="text-sm font-semibold text-text leading-6 bg-transparent border-none hover:underline pointer-events-auto"
            >
              Learn more <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
