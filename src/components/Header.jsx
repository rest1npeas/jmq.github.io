import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = ({ activeSection = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#hero', section: 0 },
    { name: 'About', href: '#about', section: 1 },
    { name: 'Skills', href: '#skills', section: 2 },
    { name: 'Projects', href: '#projects', section: 3 },
    { name: 'Contact', href: '#footer', section: 4 },
  ]

  const handleNavClick = (href, sectionIndex) => {
    setIsMenuOpen(false)
    
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const shouldHighlight = (sectionIndex) => {
    return sectionIndex <= 3 && sectionIndex === activeSection;
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="#hero" 
            className="text-2xl font-bold text-primary hover:text-cyan-400 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#hero', 0)
            }}
          >
            JMQ
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href, item.section)
                }}
                className={`font-medium transition-all duration-300 relative py-2 ${
                  shouldHighlight(item.section)
                    ? 'text-cyan-400 font-semibold' 
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {item.name}
                {shouldHighlight(item.section) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full"></span>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-secondary hover:text-primary transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gray-900/90 backdrop-blur-md rounded-lg p-4 border border-gray-700">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href, item.section)
                }}
                className={`block py-3 px-4 rounded-lg transition-all duration-300 mb-2 last:mb-0 ${
                  shouldHighlight(item.section)
                    ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20'
                    : 'text-secondary hover:text-primary hover:bg-gray-800/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{item.name}</span>
                  {shouldHighlight(item.section) && (
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header