import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function AnimatedCounter({ end, duration = 2000, label }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  useEffect(() => {
    if (inView) {
      let startTime = null
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = (currentTime - startTime) / duration
        
        if (progress < 1) {
          setCount(Math.floor(end * progress))
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [inView, end, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-indigo-600 mb-2">
        {count}+
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}
