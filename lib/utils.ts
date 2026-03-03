import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { useState, useEffect } from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Tracks the width of the staggered menu panel and whether the
 * viewport is considered "mobile" (<640px). Components can use
 * these values to avoid applying width/translation changes on
 * small screens.
 */
export function useMenuMetrics() {
  const [menuWidth, setMenuWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const update = () => {
      const menuEl = document.querySelector(
        ".staggered-menu-panel",
      ) as HTMLElement | null
      if (menuEl) setMenuWidth(menuEl.offsetWidth)
      setIsMobile(window.innerWidth < 640)
    }

    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return { menuWidth, isMobile }
}
