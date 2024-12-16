import BackgroundParticles from './background-particles';

import event1 from '../assets/event-1.jpg';
import event2 from '../assets/event-2.jpg';
import event3 from '../assets/event-3.jpg';
import event4 from '../assets/event-4.jpg';

const images = [
  { src: event1, alt: 'Event 1' },
  { src: event2, alt: 'Event 2' },
  { src: event3, alt: 'Event 3' },
  { src: event4, alt: 'Event 4' },
];

/**
 * About section component displaying JPSSITE's mission, vision, goals and achievements.
 * 
 * Features a two-column layout with text content on the left and images on the right.
 * @returns A JSX element representing the About section component.
 */
export default function AboutSection() {
  return (
    <section className="relative flex justify-center px-6 lg:px-8 max-h-screen h-[90dvh] overflow-hidden">
      <BackgroundParticles />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4 font-gambetta">Our Mission</h2>
            <p className="text-lg opacity-80">
              To foster excellence in Information Technology education by providing opportunities 
              for learning, growth, and professional development among junior IT students.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 font-gambetta">Our Vision</h2>
            <p className="text-lg opacity-80">
              To be the leading organization in developing competent, ethical, and innovative 
              IT professionals who will contribute to the advancement of the Philippine IT industry.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 font-gambetta">Our Goals</h2>
            <ul className="list-disc list-inside text-lg opacity-80 space-y-2">
              <li>Enhance technical skills through workshops and training programs</li>
              <li>Build a strong network of IT professionals and industry partners</li>
              <li>Promote technological innovation and research</li>
              <li>Foster leadership and professional development</li>
            </ul>
          </div>
        </div>

        {/* Right Column - Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg dark:shadow-gray-800 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800" />
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="relative w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                width={400}
                height={400}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 