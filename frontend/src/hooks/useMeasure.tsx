import React, {
  useLayoutEffect,
  useState,
  useRef,
} from 'react'

export const useMeasure = (deps: any = []) => {
  const [rect, setRect] = useState({})
  const myRef = useRef<any>()

  useLayoutEffect(() => {
    setRect(myRef.current.getBoundingClientRect())
  }, deps)

  return [rect, myRef]
}