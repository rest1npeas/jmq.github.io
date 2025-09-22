import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'JAH',
      description: 'Powered by Wordpress WooCommerce with customized checkout page.',
      image: '/src/images/work-samps/jah.jpg',
      technologies: ['Wordpress Woocommerce', 'PHP', 'jQuery', 'CSS', 'HTML'],
    //   github: 'https://github.com',
      live: 'https://www.jah-apparel.com/home',
    },
    {
      title: 'LH Paragon',
      description: 'Customized Wordpress theme.',
      image: '/src/images/work-samps/lhparagon.jpg',
      technologies: ['Wordpress', 'PHP', 'jQuery', 'CSS', 'HTML'],
    //   github: 'https://github.com',
      live: 'https://www.lhparagon.com/',
    },
    {
      title: 'Optimal Weight Loss Institute',
      description: 'Customized Wordpress Elementor theme',
      image: '/src/images/work-samps/optimalweight.jpg',
      technologies: ['Wordpress Elementor', 'PHP', 'jQuery', 'CSS', 'HTML'],
    //   github: 'https://github.com',
      live: 'https://www.optimalweightloss4u.com/',
    },
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Websites I Worked With</h2>
          <p className="text-lg">Some of my recent work</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
              <div className="h-48 bg-gradient-to-br from-primary to-accent flex justify-center">
                <figure className="w-auto overflow-hidden"><img class="w-80 h-72 object-cover object-top" src={project.image}></img></figure>
                <div className="clearfix"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {/* <a href={project.github} className="flex items-center text-gray-600 hover:text-primary transition-colors">
                    <FaGithub className="mr-2" /> Code
                  </a> */}
                  <a href={project.live} className="flex items-center text-gray-600 hover:text-primary transition-colors">
                    <FaExternalLinkAlt className="mr-2" /> Visit Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects