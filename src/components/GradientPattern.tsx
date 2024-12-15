
export default function GradientPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden isolate transform-gpu">
      <div className="absolute inset-0 bg-hero-gradient"></div>
      <svg 
        className="absolute inset-0 h-full w-full dark:stroke-white/5 stroke-primary/10 [mask-image:radial-gradient(75%_50%_at_top_center,white,transparent)]" 
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero" width="80" height="80" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#hero)"></rect>
      </svg>
    </div>
  )
}
