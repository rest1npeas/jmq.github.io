import React, { useState, useEffect } from 'react'
import { FaDownload, FaArrowRight } from 'react-icons/fa'
import pPic from '../images/myavatar.png'
import resumePDF from '../pdf/JunasQResume.pdf'

const Hero = () => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const texts = ['Web Developer', 'Front-End Developer', 'Web Designer']

  useEffect(() => {
    const currentText = texts[index]
    
    if (text.length < currentText.length) {
      const timer = setTimeout(() => {
        setText(currentText.slice(0, text.length + 1))
      }, 100)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setText('')
        setIndex((index + 1) % texts.length)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [text, index, texts])  

  return (
    <section className="min-h-screen flex items-center section-padding pt-20 bg-transparent">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-4">
              Hi, I'm <span className="text-primary">Junas Quimod</span>
            </h1>
            <h2 className="txtchange text-2xl md:text-3xl mb-6 flex items-center">
              <span className="text-primary font-bold">{text}</span>
              <span className="ml-1 inline-block w-0.5 h-8 bg-primary animate-pulse"></span>
            </h2>
            <p className="text-lg mb-8 leading-relaxed">A web developer who believes the best websites are built at the intersection of clean code and human connection. Always exploring, always learning.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary flex items-center gap-2">
                View My Work <FaArrowRight />
              </a>
              <a href={resumePDF} download className="btn-secondary flex items-center gap-2">
                Download Resume <FaDownload />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-72 h-72 mx-auto bg-indigo-50 rounded-full flex items-center justify-center mobile:w-70 mobile:h-70">
              <div className="w-60 h-60 rounded-full flex items-center justify-center">
               <figure><img className="rounded-full w-full scale-x-[-1]" src={pPic} alt="wa gyud ta ani"></img></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero