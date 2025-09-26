import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/rest1npeas', label: 'GitHub', target: "_blank" },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/junas-quimod/', label: 'LinkedIn', target: "_blank" },
    { icon: FaFacebookF, href: 'https://www.facebook.com/share/19WjNiXVTL/', label: 'Facebook', target: "_blank" },
    { icon: FaEnvelope, href: 'mailto:quimodjunas@gmail.com', label: 'Email', target: "_blank" },
  ]

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white">Junas Quimod</h3>
            <p className="text-gray-400 mt-2">Web Developer</p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-2xl text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={social.label}
                target={social.target}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Junas Quimod<span className="block">All rights reserved</span></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer