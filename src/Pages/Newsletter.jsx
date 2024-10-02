import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className='lg:col-span-2 my-8'>
                <h1 className='md:text-2xl sm:text-xl text-xl font-bold py-2'>Want some Tips & Tricks to optimize your flow?</h1>
                <p>Sign up to newsletter and stay up to date.</p>
            </div>
            <div className="my-4">
                <div className='flex flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full text-black outline-none' type="email" placeholder='enter email' />
                    <button className='bg-[#00df9a] w-[200px] rounded-none font-medium ml-4 my-6 mx-auto py-3 text-black'>
                        Notify me
                    </button>
                </div>
                <p>we care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span></p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter;