import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div class="min-h-screen bg-gray-950 text-white relative bg-[radial-gradient(circle_at_20%_30%,#4f46e5_0%,transparent_25%),radial-gradient(circle_at_80%_70%,#06b6d4_0%,transparent_25%)]">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/*<Contact />
      <Footer /> */}
    </div>
  )
}

export default App