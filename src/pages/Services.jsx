import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaShoppingCart, FaMobile, FaRocket, FaPencilAlt, FaServer } from 'react-icons/fa'

export default function Services() {
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
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-black/80"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">Comprehensive digital solutions to transform your business</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section bg-gray-50" ref={ref}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-indigo-600 text-2xl mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <span className="text-indigo-600 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Custom websites built with modern technologies and best practices.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
    features: [
      "Responsive Design",
      "Performance Optimization",
      "SEO Best Practices",
      "Modern Frameworks (React, Vue, Angular)",
      "Custom CMS Integration"
    ]
  },
  {
    icon: <FaShoppingCart />,
    title: "E-commerce Solutions",
    description: "Complete online store development with powerful features.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3",
    features: [
      "Shopping Cart Integration",
      "Payment Gateway Setup",
      "Inventory Management",
      "Order Tracking System",
      "Customer Analytics"
    ]
  },
  {
    icon: <FaMobile />,
    title: "App Development",
    description: "Native and cross-platform mobile applications.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-platform Solutions",
      "App Store Optimization",
      "Performance Monitoring"
    ]
  },
  {
    icon: <FaRocket />,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing solutions.",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3",
    features: [
      "SEO Services",
      "Content Marketing",
      "Social Media Management",
      "Email Marketing",
      "Analytics & Reporting"
    ]
  },
  {
    icon: <FaPencilAlt />,
    title: "UI/UX Design",
    description: "User-centered design solutions for digital products.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Usability Testing"
    ]
  },
  {
    icon: <FaServer />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3",
    features: [
      "Cloud Architecture",
      "AWS/Azure Services",
      "Server Management",
      "Database Optimization",
      "Security Implementation"
    ]
  }
]

const process = [
  {
    title: "Discovery",
    description: "We analyze your requirements and create a detailed project roadmap."
  },
  {
    title: "Design",
    description: "Creating user-friendly interfaces and engaging experiences."
  },
  {
    title: "Development",
    description: "Building your solution using cutting-edge technologies."
  },
  {
    title: "Deployment",
    description: "Launch and maintain your project with ongoing support."
  }
]
