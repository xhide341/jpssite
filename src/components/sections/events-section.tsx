import { motion, useScroll, useSpring } from 'motion/react';
import { useTheme } from '../theme-provider';
import { useRef } from 'react';
import { BookOpen, Monitor, FileText, Trophy } from 'lucide-react';

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
      return <BookOpen className="w-6 h-6" />;
    case 'hackathon':
      return <Monitor className="w-6 h-6" />;
    case 'seminar':
      return <FileText className="w-6 h-6" />;
    case 'competition':
      return <Trophy className="w-6 h-6" />;
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
    <section id="events" className="relative pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto relative" ref={containerRef}>        
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 sm:mb-24 font-gambetta">Organized Events</h2>
        <div className="relative">
          {/* Timeline lines - Hide on mobile */}
          <div 
            className={`
              absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full hidden sm:block
              ${theme === 'light' ? 'bg-gray-200/80' : 'bg-gray-700/50'}
            `} 
          />

          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary hidden sm:block"
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
              className={`
                relative mb-16 sm:mb-24
                sm:w-1/2 w-full
                ${index % 2 === 0 
                  ? 'sm:pr-8' 
                  : 'sm:pl-8 ml-auto'
                }
              `}
            >
              {/* Timeline dot - Only visible on sm and up */}
              <div className={`
                absolute top-0 z-10 hidden sm:block
                ${index % 2 === 0 
                  ? 'sm:right-0 sm:translate-x-1/2' 
                  : 'sm:left-0 sm:-translate-x-1/2'
                }
              `}>
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
                  relative p-6 sm:p-8 rounded-xl shadow-lg
                  ${theme === 'light'
                    ? 'bg-white border border-gray-100'
                    : 'bg-gray-800 border border-gray-700'
                  }
                `}
              >
                {/* Icon inside card - Only visible on mobile */}
                <div className="flex items-center mb-4 sm:hidden">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center mr-2
                    ${theme === 'light'
                      ? 'bg-white border border-gray-100'
                      : 'bg-gray-800 border border-gray-700'
                    }
                  `}>
                    <div className="text-primary">
                      {getEventIcon(event.type)}
                    </div>
                  </div>
                  <span className="text-sm font-medium bg-primary/10 dark:bg-primary/20 text-primary">
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>

                {/* Type badge - Only visible on sm and up */}
                <span className="hidden sm:inline-block text-sm font-medium bg-primary/10 dark:bg-primary/20 text-primary mb-4">
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>

                {/* Rest of the card content remains unchanged */}
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