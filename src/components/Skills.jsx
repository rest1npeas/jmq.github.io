import React from 'react'

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 100 },
    { name: 'CSS', level: 100 },
    { name: 'JavaScript', level: 90 },
    { name: 'jQuery', level: 90 },
    { name: 'PHP', level: 75 },
    { name: 'CMS (Wordpress, Wix, Shopify)', level: 80 },
  ]

  return (
    <section id="skills" className="section-padding bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Skills & Technologies</h2>
          <p className="text-lg">Technologies I work with</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-blue-900">{skill.name}</span>
                <span className="text-primary font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills