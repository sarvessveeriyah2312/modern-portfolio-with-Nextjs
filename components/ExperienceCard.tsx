import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article>
        <motion.img
          initial={{ 
            x: -100,
            opacity: 0,
           }}
           transition={{ 
            duration:1.2,
            }}
           whileInView={{
            opacity:1, 
            y:0
            }}
           viewport={{ 
            once: true,
            }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' src="profile.png" alt="" />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Software Engineering Student</h4>
            <p>UMP</p>
            <div></div>
            <p>Started... Ended</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard