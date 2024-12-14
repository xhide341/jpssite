import React from 'react';

const RippleBackground = () => {
  const ripples = [
    { size: 210, opacity: 0.24, delay: 0, style: 'solid', borderOpacity: 0.05 },
    { size: 280, opacity: 0.21, delay: 0.06, style: 'solid', borderOpacity: 0.1 },
    { size: 350, opacity: 0.18, delay: 0.12, style: 'solid', borderOpacity: 0.15 },
    { size: 420, opacity: 0.15, delay: 0.18, style: 'solid', borderOpacity: 0.2 },
    { size: 490, opacity: 0.12, delay: 0.24, style: 'solid', borderOpacity: 0.25 },
    { size: 560, opacity: 0.09, delay: 0.30, style: 'solid', borderOpacity: 0.3 },
    { size: 630, opacity: 0.06, delay: 0.36, style: 'solid', borderOpacity: 0.35 },
    { size: 700, opacity: 0.03, delay: 0.42, style: 'dashed', borderOpacity: 0.4 },
  ];

  return (
    <div 
      className="absolute inset-0 flex items-center justify-center [mask-image:linear-gradient(to_bottom,white,transparent)]"
      style={{ opacity: 1, willChange: 'auto' }}
    >
      {ripples.map((ripple, i) => (
        <div
          key={i}
          className={`absolute left-1/2 top-1/2 translate-x-1/2 translate-y-1/2 animate-ripple rounded-full border bg-gray-300 shadow-xl dark:bg-primary/50 [--i:${i}]`}
          style={{
            width: `${ripple.size}px`,
            height: `${ripple.size}px`,
            opacity: ripple.opacity,
            animationDelay: `${ripple.delay}s`,
            borderStyle: ripple.style,
            borderWidth: '1px',
            borderColor: `rgba(var(--foreground-rgb), ${ripple.borderOpacity})`,
          }}
        />
      ))}
    </div>
  );
};

export default RippleBackground;
