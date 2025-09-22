import React from 'react'
import { FaDownload, FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-4">
              Hi, I'm <span className="text-primary">Junas Quimod</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">
              Front-End Web Developer
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              Ang design sama sa akong dagway, way klaro. Bahala na, sunda lang nang gipitik sa imong dughan :))
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary flex items-center gap-2">
                View My Work <FaArrowRight />
              </a>
              <a href="/pdf/JunasCV.pdf" download className="btn-secondary flex items-center gap-2">
                Download CV <FaDownload />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-72 h-72 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <div className="w-72 h-72 rounded-full flex items-center justify-center">
               <figure><img className="rounded-full w-full" src="/src/images/cattt.png" alt="wa gyud ta ani"></img></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero