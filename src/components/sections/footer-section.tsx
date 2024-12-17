import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "../ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

const FooterSection = () => {
  const currentYear = new Date().getFullYear()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Add newsletter subscription logic here
      console.log(values)
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  const socialIcons = [
    { 
      icon: (
        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
        </svg>
      ),
      href: '#',
      label: 'Twitter'
    },
    {
      icon: (
        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
        </svg>
      ),
      href: '#',
      label: 'Facebook'
    },
    {
      icon: (
        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
          <circle cx="16.806" cy="7.207" r="1.078"></circle>
          <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
        </svg>
      ),
      href: '#',
      label: 'Instagram'
    },
    {
      icon: (
        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
        </svg>
      ),
      href: 'https://github.com/yourusername/jpssite',
      label: 'GitHub'
    }
  ]

  return (
    <footer className="relative mt-16 py-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8 text-gray-600 dark:text-gray-300">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              JPSSITE
            </h2>
            <p className="text-base mt-7 hover:text-gray-900 dark:hover:text-white transition-colors">
              Connecting and empowering our community through innovative events and collaboration.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              {socialIcons.map(({ icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center justify-center bg-white dark:bg-gray-800 rounded-full w-8 h-8 border border-gray-200 dark:border-gray-700 
                    hover:bg-blue-500 hover:border-blue-500 hover:text-white dark:hover:bg-blue-600 dark:hover:border-blue-600 
                    transform transition-all duration-200 hover:scale-110"
                    aria-label={label}
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-gray-600 dark:text-gray-300">
            <p className="text-sm font-semibold tracking-widest uppercase text-gray-900 dark:text-white">Company</p>
            <ul className="mt-6 space-y-4">
              {['About', 'Features', 'Events', 'Members'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} 
                    className="flex text-base transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-2">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div className="text-gray-600 dark:text-gray-300">
            <p className="text-sm font-semibold tracking-widest uppercase text-gray-900 dark:text-white">Resources</p>
            <ul className="mt-6 space-y-4">
              {['Documentation', 'Support', 'Terms', 'Privacy'].map((item) => (
                <li key={item}>
                  <a href="#" 
                    className="flex text-base transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-2">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8 text-gray-600 dark:text-gray-300">
            <p className="text-sm font-semibold tracking-widest uppercase text-gray-900 dark:text-white">Subscribe to newsletter</p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="Enter your email" 
                          type="email"
                          className="block w-full p-4 transition-all duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                          rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 hover:border-blue-500 dark:hover:border-blue-400"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-4 mt-3 font-medium text-white transition-all duration-200 
                  bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-md w-full transform hover:scale-[1.02]"
                >
                  Subscribe
                </Button>
              </form>
            </Form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200 dark:border-gray-700" />
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
          © {currentYear} JPSSITE. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default FooterSection 