import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'

import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'
import { ComputersCanvas } from './canvas'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>  
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <div className="relative h-screen w-full -mt-[67vh] mb-16">
        <ComputersCanvas />

        <div className="absolute bottom-6 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[32px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </div>

      <span className="hash-span" id="about">
        &nbsp;
      </span>

      <motion.div
        variants={textVariant}
      >
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <p className={`${styles.sectionHeadText}`}>Overview.</p>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm an experienced developer with skills spanning React, React Native & Expo, Codeigniter and Laravel. Alongside a solid technical knowledge, I possess the ability to swiftly learn new concepts and engineer efficient, scalable solutions. Collaboration is key on the development journey, and I thrive on working with teams to bring new ideas to life in user-friendly ways. Let's join forces and make a positive impact through innovation and dedication.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={`service-${index}`} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, '')