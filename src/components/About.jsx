import React from 'react'
import { FaCode, FaPalette, FaRocket } from 'react-icons/fa'

const About = () => {
  const features = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices.'
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces that enhance user experience.'
    },
    {
      icon: FaRocket,
      title: 'Fast & Optimized',
      description: 'Building high-performance websites with optimized loading times.'
    }
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">About Me</h2>
          <p className="text-lg max-w-2xl mx-auto"> I'm a passionate developer with 3+ years of experience creating and maintaining custom themed wordpress sites. </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 card-hover">
              <div className="w-16 h-16 bg-primary text-white text-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">{feature.title}</h3>
              <p className="">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About