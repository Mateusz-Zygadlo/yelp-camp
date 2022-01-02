import React, {
  useState,
  useEffect
} from 'react'

interface windowSizeProps {
  width: number;
  setWidth(rect: number): void;
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<windowSizeProps>({
    width: 0,
    setWidth(rect: number){
      setWindowSize({...windowSize, width: rect})
    }
  })

  useEffect(() => {
    const resizeWindow = () => setWindowSize({...windowSize, width: window.innerWidth })
    window.addEventListener('resize', resizeWindow)

    return () => window.removeEventListener('resize', resizeWindow)
  }, [])

  return windowSize;
}