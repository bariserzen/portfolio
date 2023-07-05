import React from 'react'
import ProjectItem from './ProjectItem'
import car from '../assets/car.png'
import netflix from '../assets/netflix.png'
import nekadar from '../assets/ne-nekadar.png'
import pizza from '../assets/pizza.png'




const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] my-11 mb-11 '>
        Projects
      </h1>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={car} title='Car Website' href='https://bariserzen-car-website.netlify.app/' />
        <ProjectItem img={netflix} title='Netflix' href='https://bariserzen-netflixclone.netlify.app/' />
        <ProjectItem img={nekadar} title='Finance Tool' href='https://bariserzencurrencypage.netlify.app/' />
        <ProjectItem img={pizza} title='Pizza Website' href='https://bariserzenpizzawebsite.netlify.app/' />

      </div>
    </div>
  )
}

export default Projects

