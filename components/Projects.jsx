import React from 'react';
import VendOMatic from '../public/assets/projects/vendOMatic.png';
import pulseImg from '/public/assets/projects/pulse.png';
import nftGeneratorImg from '/public/assets/projects/nftGenerator.png';
import bookExchangeImg from '/public/assets/projects/bookExchange.png'
import ProjectItem from './ProjectItem.jsx';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#1e97f3]'> Projects </p>
            <h2 className='py-4'> What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem title='Vend-O-Matic' description='Vending Machine Web Simulation' image={VendOMatic} url='/vendOMatic'/>
                <ProjectItem title='Pulse'  description='Job Tracking Application' image={pulseImg} url='/pulse'/>
                <ProjectItem title='Book Exchange' description='Book Trading Platform' image={bookExchangeImg} url='/bookExchange'/>
                <ProjectItem title='NFT Generator' description='NFT Customization Application' image={nftGeneratorImg} url='/nftGenerator'/>
            </div>
        </div>
    </div>
  )
}

export default Projects