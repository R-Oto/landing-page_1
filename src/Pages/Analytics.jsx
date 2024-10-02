import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Data Analytics Dashboard</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics</h1>
                <p>
                    In today’s data-driven world, effectively managing your analytics is crucial for informed decision-making. 
                    Our intuitive dashboard empowers you to visualize trends, track performance, and uncover insights, 
                    helping you make strategic choices that drive growth and efficiency.
                </p>
                <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-2 bg-black'>
                Get Started
            </button>
            </div>
        </div>
    </div>
  )
}

export default Analytics;