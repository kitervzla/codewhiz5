import { motion } from 'framer-motion'

export default function TechnologyGrid({ technologies }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        >
          <img src={tech.icon} alt={tech.name} className="h-12 mb-3" />
          <span className="text-gray-800 font-medium">{tech.name}</span>
          {tech.level && (
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${tech.level}%` }}
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
