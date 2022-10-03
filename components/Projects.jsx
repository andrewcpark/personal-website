import React from 'react'
import VendOMatic from '../public/assets/projects/vendOMatic.png'
import ProjectItem from './ProjectItem.jsx'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'> Projects </p>
            <h2 className='py-4'> What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem title='Vend-O-Matic' description='Vending Machine Web Simulation' image={VendOMatic} url='/vendOMatic'/>
                <ProjectItem title='Pulse'  description='Job Tracking Application' image={VendOMatic} url='/pulse'/>
                <ProjectItem title='Parks and Recreation' description='Nation parks Trip Planner' image={VendOMatic} url='/parks-and-recreation'/>
                <ProjectItem title='NFT Generator' description='NFT Customization Application' image={VendOMatic} url='/nft-generator'/>
            </div>
        </div>
    </div>
  )
}

export default Projects