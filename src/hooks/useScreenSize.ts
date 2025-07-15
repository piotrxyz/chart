import { useState, useEffect } from 'react'

type ScreenSize = 'sm' | 'md' | 'lg'

export const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>('lg')

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setScreenSize('sm')
      } else if (width < 1024) {
        setScreenSize('md')
      } else {
        setScreenSize('lg')
      }
    }

    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  return screenSize
}
