import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="" />
                <h2 className='text-xl font-bold text-center py-8'>Signle user</h2>
                <p className='text-center text-5xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-1 mx-8 border-b mt-4'>500gb</p>
                    <p className='py-1 mx-8 border-b mt-4'>1 Granted user</p>
                    <p className='py-1 mx-8 border-b mt-4'>Send up to 2gb</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded font-medium my-6 mx-auto py-2 text-black'>Start Trial</button>
            </div>
            <div className="w-full bg-gray-100 shadow-xl flex flex-col p-4 my-2 rounded-lg hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={double} alt="" />
                <h2 className='text-xl font-bold text-center py-8'>Double user</h2>
                <p className='text-center text-5xl font-bold'>$299</p>
                <div className='text-center font-medium'>
                    <p className='py-1 mx-8 border-b mt-4'>1T</p>
                    <p className='py-1 mx-8 border-b mt-4'>2 Granted user</p>
                    <p className='py-1 mx-8 border-b mt-4'>Send up to 5gb</p>
                </div>
                <button className='text-[#00df9a] w-[200px] rounded font-medium my-6 mx-auto py-2 bg-black'>Start Trial</button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="" />
                <h2 className='text-xl font-bold text-center py-8'>Triple user</h2>
                <p className='text-center text-5xl font-bold'>$449</p>
                <div className='text-center font-medium'>
                    <p className='py-1 mx-8 border-b mt-4'>2T</p>
                    <p className='py-1 mx-8 border-b mt-4'>3 Granted user</p>
                    <p className='py-1 mx-8 border-b mt-4'>Send up to 10gb</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded font-medium my-6 mx-auto py-2 text-black'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards;