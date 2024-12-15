import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout>();

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
    }, 100); // 100ms delay
  };

  useEffect(() => {
    updateIndicator(activeIndex);
    const handleResize = () => updateIndicator(activeIndex);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex]);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#events', label: 'Events' },
    { href: '#members', label: 'Members' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed md:top-6 bottom-6 md:bottom-auto left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-lg z-50">
      <nav className="hidden md:flex items-center justify-center px-2 bg-primary dark:bg-white backdrop-blur-3xl shadow-2xl rounded-3xl nav-container relative pointer-events-auto">
        {navItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            ref={el => navItemsRef.current[index] = el}
            className={`px-3 py-3.5 rounded-full text-sm font-gambetta text-custom-white dark:text-gray-900 tracking-wide font-light transition-colors nav-item ${
              activeIndex === index ? 'active dark:text-custom-white ' : 'dark:text-custom-black'
            }`}
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
