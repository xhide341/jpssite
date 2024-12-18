import { motion } from 'framer-motion'
import { Facebook, Github, Twitter, Instagram, Mail } from 'lucide-react'
import { committeeMembers } from '../../data/committee-members'

const SocialIcon = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-primary transition-colors"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </a>
)

export default function CommitteeSection() {
  return (
    <section className="flex justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 min-h-screen w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto relative"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">Meet the Executive Committee</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          Get to know our dedicated team members who work tirelessly to make our community thrive.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {committeeMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-40 sm:h-64 object-contain hover:scale-105 transition-all duration-300"
              />
              <div className="p-3 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">{member.position}</p>
                <div className="flex gap-2 sm:gap-4 justify-center">
                  {member.socials.facebook && (
                    <SocialIcon href={member.socials.facebook} icon={Facebook} label="Facebook Profile" />
                  )}
                  {member.socials.github && (
                    <SocialIcon href={member.socials.github} icon={Github} label="GitHub Profile" />
                  )}
                  {member.socials.twitter && (
                    <SocialIcon href={member.socials.twitter} icon={Twitter} label="Twitter Profile" />
                  )}
                  {member.socials.instagram && (
                    <SocialIcon href={member.socials.instagram} icon={Instagram} label="Instagram Profile" />
                  )}
                  <SocialIcon 
                    href={`mailto:${member.socials.email}`} 
                    icon={Mail} 
                    label="Email Address" 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}