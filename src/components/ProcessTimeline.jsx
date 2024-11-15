import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ProcessTimeline({ steps }) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-100" />
      
      <div className="space-y-12">
        {steps.map((step, index) => (
          <TimelineStep
            key={index}
            step={step}
            index={index}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  )
}

function TimelineStep({ step, index, isLeft }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center`}
    >
      <div className="w-1/2 px-6">
        <div className={`text-right ${!isLeft && 'text-left'}`}>
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </div>
      </div>
      
      <div className="relative flex items-center justify-center w-12">
        <div className="h-12 w-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
          {index + 1}
        </div>
      </div>
      
      <div className="w-1/2 px-6" />
    </motion.div>
  )
}
