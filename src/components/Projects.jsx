import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
import { span } from 'framer-motion/client'


const Projects = () => {
  return (
    <div className=' pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className=' my-20 text-center text-4xl'>
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className=' mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className=' w-full lg:w-1/4'>
              <img src={project.image}
                height={250}
                width={250}
                alt={project.title}
                className=' mb-6 rounded' />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className=' w-full max-w-xl lg:w-3/4'>
              <h3 className=' mb-2 font-semibold text-2xl'>{project.title}</h3>
              <p className=' mb-4 text-stone-400'>{project.description}</p>
              <div className=' mb-4 flex flex-wrap'>
                {project.technologies.map((tech, index) => (
                  <span className=' mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300' key={index}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className=' flex flex-wrap'>
                {project.about.map((about, index) => (
                  <motion.a
                    href={project.links[index]}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    key={index}
                    className=' mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300' >
                    {about}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default Projects