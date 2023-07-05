import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FaTwitter, FaGithub, FaLinkedinIn} from 'react-icons/fa';





const Main = () => {
  return (
    <div id='main' >
        <img className='w-full h-screen object-cover' 
            //  src='https://images.unsplash.com/photo-1502325966718-85a90488dc29?ixlib=rb-4.0.3&ixid=MnwxMjA3fD88MhxwaG90by1wYWdlfHxBfGVufDbbfHxB&auto=format&fit=crop&w=2670&q=80'
             src='https://images.unsplash.com/photo-1635606511031-6ef8c6cbf9f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
             alt='/'/>

        <div className='w-full h-screen absolute top-0 left-0  '>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center '>
            <h1 className='sn:text-5xl text-4xl font-bold text-white'> I'm Barış Erzen</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-white'>
                I'am a 
                <TypeAnimation
                 sequence={[
                 
                'React Front-End Developer',
                 1000, 
                 'Coder',
                 1000,
                 'Tech Enthusiast',
                 1000,
              ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em', paddingLeft: '5px' }}
                />
            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full' >
                <a href='https://twitter.com/BarisErzen' target='_blank' className='text-white'> 
                 <FaTwitter className='cursor-pointer' size={20} /> 
                 </a> 
                <a href='https://github.com/bariserzen' target='_blank' className='text-white'> 
                  <FaGithub className='cursor-pointer' size={20} /> 
                  </a>
                <a href='https://www.linkedin.com/in/bar%C4%B1%C5%9F-erzen-3b1bbb207/' target='_blank' className='text-white'> 
                  <FaLinkedinIn className='cursor-pointer' size={20} /> 
                  </a>
                
            </div>
        </div>
      </div>

    </div>
  )
}

export default Main
