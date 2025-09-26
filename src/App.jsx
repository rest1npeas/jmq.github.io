import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');

  // Exclude footer from presentation sections
  const presentationSections = ['hero', 'about', 'skills', 'projects'];
  const allSections = ['hero', 'about', 'skills', 'projects', 'footer'];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Determine scroll direction
      setScrollDirection(scrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = scrollY;

      // Calculate which section is currently in view (only for presentation sections)
      const sectionPositions = presentationSections.map((section, index) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            index,
            top: rect.top,
            bottom: rect.bottom,
            height: rect.height
          };
        }
        return null;
      }).filter(Boolean);

      // Find the section that's most in view
      const viewportMiddle = windowHeight / 2;
      let activeIndex = 0;
      let maxVisibility = 0;

      sectionPositions.forEach((section) => {
        const visibleHeight = Math.min(section.bottom, windowHeight) - Math.max(section.top, 0);
        const visibility = visibleHeight / windowHeight;
        
        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          activeIndex = section.index;
        }
      });

      // If we're in the footer area, keep the last presentation section active
      const footerElement = document.getElementById('footer');
      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect();
        if (footerRect.top < windowHeight * 0.7) {
          // When footer is 70% in view, keep projects section as active
          setActiveSection(3); // projects section index
        } else {
          setActiveSection(activeIndex);
        }
      } else {
        setActiveSection(activeIndex);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    
    // Initial check
    setTimeout(updateActiveSection, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const getSectionAnimation = (sectionIndex) => {
    // Footer gets no animation
    if (sectionIndex === 4) return 'opacity-100 translate-y-0 scale-100 blur-0';
    
    if (sectionIndex === activeSection) {
      return 'opacity-100 translate-y-0 scale-100 blur-0';
    } else if (sectionIndex < activeSection) {
      // Sections above current view
      return 'opacity-30 -translate-y-4 scale-95 blur-[1px]';
    } else {
      // Sections below current view
      return 'opacity-30 translate-y-4 scale-95 blur-[1px]';
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white relative bg-[radial-gradient(circle_at_20%_30%,#4f46e5_0%,transparent_25%),radial-gradient(circle_at_80%_70%,#06b6d4_0%,transparent_25%)]">
      <Header activeSection={activeSection} />
      
      <div className="relative">
        {/* Navigation Dots - Only for presentation sections */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-4">
          {allSections.map((section, index) => {
            // Skip footer dot if it's the last section
            if (index === 4) return null;
            
            return (
              <button
                key={section}
                onClick={() => {
                  const element = document.getElementById(section);
                  element?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 relative ${
                  index === activeSection 
                    ? 'bg-cyan-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                title={section.charAt(0).toUpperCase() + section.slice(1)}
              >
                {index === activeSection && (
                  <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40">
          <div className={`text-white/60 text-sm rotate-90 origin-center whitespace-nowrap mb-20 transition-all duration-300 ${
            scrollDirection === 'down' ? 'translate-y-2' : '-translate-y-2'
          }`}>
            Scroll {scrollDirection === 'down' ? '↓' : '↑'}
          </div>
        </div>

        {/* Presentation Sections with Animations */}
        <section 
          id="hero"
          className={`min-h-screen transition-all duration-1000 ease-out ${getSectionAnimation(0)}`}
        >
          <Hero />
        </section>

        <section 
          id="about"
          className={`min-h-screen transition-all duration-1000 ease-out flex items-center justify-center ${getSectionAnimation(1)}`}
        >
          <About />
        </section>

        <section 
          id="skills"
          className={`min-h-screen transition-all duration-1000 ease-out flex items-center justify-center ${getSectionAnimation(2)}`}
        >
          <Skills />
        </section>

        <section 
          id="projects"
          className={`min-h-screen transition-all duration-1000 ease-out flex items-center justify-center ${getSectionAnimation(3)}`}
        >
          <Projects />
        </section>

        {/* Footer - No animations */}
        <section id="footer" className="opacity-100">
          <Footer />
        </section>
      </div>
    </div>
  )
}

export default App