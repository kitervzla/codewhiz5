import { motion } from 'framer-motion'
import { useState } from 'react'

export default function InteractiveCard({ icon: Icon, title, description, features }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative bg-white rounded-xl shadow-lg overflow-hidden"
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="text-indigo-600 text-3xl mb-4">
          <Icon />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isHovered ? 'auto' : 0,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <span className="text-indigo-600 mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  )
}
