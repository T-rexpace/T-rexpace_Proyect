import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(function() {
    const observer = new window.IntersectionObserver(function(entries) {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    },
    {
      rootMargin: '0px',
    })
    observer.observe(element.current)
  }, [])

  return [show, element]
}