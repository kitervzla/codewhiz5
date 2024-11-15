import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const LogoIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
  >
    <path
      d="M16 2L2 9L16 16L30 9L16 2Z"
      fill="#4F46E5"
    />
    <path
      d="M2 23L16 30L30 23V9L16 16L2 9V23Z"
      fill="#6366F1"
      fillOpacity="0.8"
    />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <LogoIcon />
            <span className="text-2xl font-bold text-gray-900">CodeWhiz</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link to="/" className="block nav-link">Home</Link>
            <Link to="/services" className="block nav-link">Services</Link>
            <Link to="/portfolio" className="block nav-link">Portfolio</Link>
            <Link to="/contact" className="block nav-link">Contact</Link>
            <Link to="/contact" className="btn btn-primary block text-center">Get Started</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
