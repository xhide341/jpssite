export default function GradientPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden isolate transform-gpu">
      <div className="absolute inset-0 bg-hero-gradient"></div>
      {/* Light mode pattern */}
      <svg 
        className="absolute inset-0 h-[70%] w-full circuit-pattern stroke-primary dark:hidden [mask-image:radial-gradient(80%_80%_at_top_center,white,transparent)]" 
        aria-hidden="true"
      >
      </svg>

      {/* Dark mode pattern */}
      <svg 
        className="absolute inset-0 h-[70%] w-full circuit-pattern-dark stroke-white/5 hidden dark:block [mask-image:radial-gradient(80%_80%_at_top_center,white,transparent)]" 
        aria-hidden="true"
      >
      </svg>
    </div>
  )
}
