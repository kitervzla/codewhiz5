import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
            alt="Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-black/80"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl max-w-2xl mx-auto">Showcasing our best work and client success stories</p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section" ref={ref}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="card group overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">{project.category}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-sm bg-indigo-100 text-indigo-600 px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const projects = [
  {
    title: "MediConnect Pro",
    description: "Comprehensive healthcare management platform for clinics and hospitals",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3",
    category: "Healthcare",
    year: "2023",
    features: [
      "Appointment scheduling system",
      "Electronic health records",
      "Telemedicine integration",
      "Billing management"
    ],
    technologies: ["React", "Node.js", "MongoDB", "WebRTC", "Stripe"]
  },
  {
    title: "EduLearn Platform",
    description: "Modern e-learning solution for schools and universities",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3",
    category: "Education",
    year: "2023",
    features: [
      "Live virtual classrooms",
      "Course management",
      "Student progress tracking",
      "Interactive assessments"
    ],
    technologies: ["Vue.js", "Python", "PostgreSQL", "AWS"]
  },
  {
    title: "FoodieHub",
    description: "Restaurant management and online ordering system",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3",
    category: "Food & Beverage",
    year: "2022",
    features: [
      "Online ordering system",
      "Table reservations",
      "Kitchen management",
      "Customer loyalty program"
    ],
    technologies: ["Next.js", "Express", "MySQL", "Redis"]
  },
  {
    title: "PropertyPro",
    description: "Real estate listing and property management platform",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3",
    category: "Real Estate",
    year: "2022",
    features: [
      "Virtual property tours",
      "Advanced property search",
      "Agent dashboard",
      "Document management"
    ],
    technologies: ["React", "Django", "PostgreSQL", "ThreeJS"]
  },
  {
    title: "FitLife App",
    description: "Fitness tracking and workout planning application",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3",
    category: "Health & Fitness",
    year: "2022",
    features: [
      "Workout tracking",
      "Nutrition planning",
      "Progress analytics",
      "Social features"
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase"]
  },
  {
    title: "TechStore",
    description: "E-commerce platform for electronics and gadgets",
    image: "https://images.unsplash.com/photo-1518997554305-5eea2f04e384?ixlib=rb-4.0.3",
    category: "E-commerce",
    year: "2021",
    features: [
      "Advanced product filtering",
      "Real-time inventory",
      "Customer reviews",
      "Secure payments"
    ],
    technologies: ["Vue.js", "Laravel", "MySQL", "Stripe"]
  }
]
