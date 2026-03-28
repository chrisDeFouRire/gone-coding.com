import { useEffect, useState } from "react"
import { Moon, Monitor, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

type Theme = "light" | "dark" | "auto"

const STORAGE_KEY = "theme"

const themes: Theme[] = ["light", "dark", "auto"]

const icons: Record<Theme, React.ReactNode> = {
  light: <Sun className="size-4" />,
  dark: <Moon className="size-4" />,
  auto: <Monitor className="size-4" />,
}

function getResolvedTheme(theme: Theme): "light" | "dark" {
  if (theme === "auto") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  }
  return theme
}

function applyTheme(theme: Theme) {
  const resolved = getResolvedTheme(theme)
  document.documentElement.classList.toggle("dark", resolved === "dark")
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("auto")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
    const initial = stored && themes.includes(stored) ? stored : "auto"
    setTheme(initial)
    applyTheme(initial)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = () => {
      if (theme === "auto") applyTheme("auto")
    }
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [theme, mounted])

  const cycle = () => {
    const next = themes[(themes.indexOf(theme) + 1) % themes.length]
    setTheme(next)
    localStorage.setItem(STORAGE_KEY, next)
    applyTheme(next)
  }

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={cycle}
      aria-label={`Theme: ${theme}. Click to switch.`}
    >
      {mounted ? icons[theme] : icons.auto}
    </Button>
  )
}
