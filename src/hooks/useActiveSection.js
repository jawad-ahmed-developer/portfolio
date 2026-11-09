import { useEffect, useState } from 'react'

// Returns the id of the section currently crossing a thin band near the
// middle of the viewport. Used by the Header to highlight the nav link.
export default function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      // Only the strip between 40% and 45% from the top counts as "active".
      { rootMargin: '-40% 0px -55% 0px' },
    )

    elements.forEach((element) => observer.observe(element))

    // A short last section may never reach the band, so at the very bottom
    // of the page we force the last section to be active.
    const handleScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      if (atBottom) setActiveId(sectionIds[sectionIds.length - 1])
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionIds])

  return activeId
}