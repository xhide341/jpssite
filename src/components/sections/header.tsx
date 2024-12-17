import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#events', label: 'Events' },
    { href: '#committee', label: 'Committee' },
    { href: '#contact', label: 'Contact' },
  ];

  const updateIndicator = (index: number) => {
    const currentItem = navItemsRef.current[index];
    if (currentItem && indicatorRef.current) {
      const itemRect = currentItem.getBoundingClientRect();
      const navRect = currentItem.parentElement?.getBoundingClientRect();
      if (navRect) {
        indicatorRef.current.style.left = `${itemRect.left - navRect.left}px`;
        indicatorRef.current.style.width = `${itemRect.width}px`;
      }
    }
  };

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(index);
      updateIndicator(index);
    }, 100);
  };

  useEffect(() => {
    const observers = new Map();
    const options = {
      rootMargin: '-20% 0px -80% 0px', // Adjust margins to trigger when section is more visible at the top
      threshold: 0
    };

    // Create observers for each section
    navItems.forEach((item, index) => {
      const targetId = item.href.replace('#', '');
      const target = document.getElementById(targetId);
      
      if (target) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
              updateIndicator(index);
            }
          });
        }, options);

        observer.observe(target);
        observers.set(targetId, observer);
      }
    });

    // Handle initial indicator position
    updateIndicator(activeIndex);

    // Handle window resize
    const handleResize = () => updateIndicator(activeIndex);
    window.addEventListener('resize', handleResize);

    return () => {
      // Cleanup observers
      observers.forEach(observer => observer.disconnect());
      window.removeEventListener('resize', handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex]);

  // Handle smooth scrolling
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    e.preventDefault();
    const targetId = navItems[index].href.replace('#', '');
    const target = document.getElementById(targetId);
    
    if (target) {
      const headerOffset = 80; // Account for fixed header height
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveIndex(index);
      updateIndicator(index);
    }
  };

  return (
    <header className="fixed md:top-6 bottom-6 md:bottom-auto left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-lg z-50">
      <nav className="hidden md:flex items-center justify-center px-2 bg-primary dark:bg-white backdrop-blur-3xl shadow-2xl rounded-3xl nav-container relative pointer-events-auto">
        {navItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            ref={el => navItemsRef.current[index] = el}
            className={`px-3 py-3.5 rounded-full text-sm font-gambetta tracking-wide font-light 
              transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] nav-item ${
              activeIndex === index 
                ? 'active text-custom-white dark:text-custom-white' 
                : 'text-custom-white dark:text-custom-black'
            }`}
            onClick={(e) => handleClick(e, index)}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            {item.label}
          </a>
        ))}
        <div ref={indicatorRef} className="nav-indicator" />
      </nav>
    </header>
  );
}
