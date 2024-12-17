import { motion, useScroll, useSpring } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';
import { useRef } from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  type: 'workshop' | 'hackathon' | 'seminar' | 'competition';
  registrationLink?: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    date: "September 2024",
    description: "Intensive 3-day workshop covering modern web development technologies including React, TypeScript, and API integration.",
    type: "workshop",
    registrationLink: "#register"
  },
  {
    id: 2,
    title: "Code Wars: Programming Competition",
    date: "October 2024",
    description: "Annual competitive programming event testing algorithmic problem-solving skills with prizes for top performers.",
    type: "competition",
    registrationLink: "#register"
  },
  {
    id: 3,
    title: "Tech Industry Insights",
    date: "November 2024",
    description: "Industry professionals share experiences and insights about careers in IT, featuring Q&A sessions.",
    type: "seminar",
    registrationLink: "#register"
  },
  {
    id: 4,
    title: "Innovation Hackathon",
    date: "December 2024",
    description: "48-hour hackathon focused on developing solutions for real-world problems using emerging technologies.",
    type: "hackathon",
    registrationLink: "#register"
  }
];

const getEventIcon = (type: Event['type']) => {
  switch (type) {
    case 'workshop':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case 'hackathon':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'seminar':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      );
    case 'competition':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      );
  }
};

export default function EventsSection() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="events" className="relative py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <h2 className="text-4xl font-bold text-center mb-24 font-gambetta">Upcoming Events</h2>
        <div className="relative">
          {/* Static background line */}
          <div 
            className={`
              absolute left-1/2 transform -translate-x-1/2 w- h-full 
              ${theme === 'light' 
                ? 'bg-gray-200/80' 
                : 'bg-gray-700/50'
              }
            `} 
          />

          {/* Single animated progress line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary"
            style={{
              originY: 0,
              scaleY,
              height: '100%',
            }}
          />

          {/* Events */}
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-24 ${
                index % 2 === 0 
                  ? 'pr-[calc(50%+2rem)]' 
                  : 'pl-[calc(50%+2rem)] ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-10">
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className={`
                    w-14 h-14 rounded-full flex items-center justify-center
                    ${theme === 'light'
                      ? 'bg-white border border-gray-100'
                      : 'bg-gray-800 border border-gray-700'
                    }
                  `}
                >
                  <div className="text-primary">
                    {getEventIcon(event.type)}
                  </div>
                </motion.div>
              </div>

              {/* Event card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`
                  relative p-8 rounded-xl shadow-lg max-w-xl mx-4
                  ${theme === 'light'
                    ? 'bg-white border border-gray-100'
                    : 'bg-gray-800 border border-gray-700'
                  }
                `}
              >
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 dark:bg-primary/20 text-primary mb-4">
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{event.title}</h3>
                <p className="text-sm text-primary mb-4 font-medium">{event.date}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  {event.description}
                </p>
                {event.registrationLink && (
                  <a
                    href={event.registrationLink}
                    className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity gap-2"
                  >
                    Register Now
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </a>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 