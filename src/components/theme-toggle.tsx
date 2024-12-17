import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="fixed top-4 right-4 sm:bottom-6 sm:right-6 sm:top-auto z-50">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={isDark}
          onChange={() => setTheme(isDark ? "light" : "dark")}
        />
        <div className="flex h-8 w-16 items-center rounded-full bg-slate-200/80 p-0.5 dark:bg-slate-700">
          <div className="flex w-full items-center justify-between px-2.5">
            <Sun className={`h-4 w-4 ${!isDark ? 'text-yellow-500 drop-shadow-[0_0_4px_rgba(250,204,21,0.6)]' : 'text-slate-400'} transition-colors duration-200`} />
            <Moon className={`h-4 w-4 ${isDark ? 'text-custom-white drop-shadow-[0_0_4px_rgba(96,165,250,0.6)]' : 'text-slate-400'} transition-colors duration-200`} />
          </div>
          <div 
            className={`absolute h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] dark:bg-slate-800
              ${isDark ? 'translate-x-8' : 'translate-x-1'}`}
          />
        </div>
      </label>
    </div>
  )
}
