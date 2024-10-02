import React from 'react'
import {ReactTyped} from 'react-typed';

const Home = () => {
  return (
    <div className='text-white'>
        <div className="max-w-[800px] mt-[-96px] h-screen w-full mx-auto text-center flex flex-col justify-center">
            <p className='text-[#ff09da] font-bold p-2'>Growing with data Analytics</p>
            <h1 className='md:text-6xl sm:text-5xl text-5xl font-bold md:py-6'>Grow with data</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-2xl sm:text-xl font-bold py-4'>
                    Fast, flexible financing for <ReactTyped className='text-[#ff09da] md:text-2xl sm:text-xl font-bold pl-2' 
                strings={['BTB', 'BTC', 'SAAS']} typeSpeed={120} backSpeed={140} loop />
                </p>
            </div>
            <p className="text-xs md:text-base font-bold text-gray-500 md:pl-4">
                Monitor your data analytics to increase your revenue
            </p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-black hover:bg-[#ff09da] duration-500 hover:text-white'>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Home;