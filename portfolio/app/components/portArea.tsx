import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PortfolioArea() {
  return (
    <div className='flex mx-48 my-20'>
      <div className='w-1/2'>
        <div className="">
            <h1 className='text-6xl font-bold mb-6'>IRFAN GHYAN</h1>
            <p className='text-4xl ml-24'>WEB DEVELOPER</p>
           
        </div>
        <div className='w-[60px] border-b-4 border-black mt-8 ml-12'></div>
        <div className='h-[300px] border-l-2 border-black mt-24'>
            <div className='mx-[40px] flex flex-col '>
                <h1 className='text-2xl font-bold'>Assisting Brands Since 2009</h1>
                <p className='leading-8 mt-18'>I have offered a professional and straight-forward solution to businesses and companies since 2009. Since then, I’ve worked on countless logo and branding projects, for clients based the world over.</p>
                <h1 className='text-1xl font-bold mb-6 mt-32'>WEB<br/> Developer</h1>
            </div>
        </div>
        <div>
            <h2 className='text-5xl ml-16 font-bold mt-8'>LOGO<br/>DESIGN</h2>
        </div>
        <div className='border-t-2 border-black ml-16 w-[100px] mt-8'></div>
      </div>
        <div className='w-1/2'>
            <Image className="ml-12" src="/manager-person.png" height={400} width={300} alt="image" />
            <h2 className='text-1xl my-8 font-bold'>CONTACT<br/>INFO</h2>
            <div className='border-t-2 border-black ml-16 w-[480px]'>
                <p className='mt-6 text-2xl font-semibold'>irfanghyan@gmail.com</p>
            </div>
        <div className="text-gray-900 hover:text-gray-400 flex flex-col ml-16 mt-4 leading-24">
            <div className="text-gray-600 hover:text-red-700 font-semibold mb-2"><Link href='#'>Youtube</Link></div>
            <div className="text-gray-600 hover:text-blue-700 font-semibold mb-2"><Link href='#'>Facebook</Link></div>
            <div className="text-gray-600 hover:text-blue-500 font-semibold mb-2"><Link href='#'>Linkedin</Link></div>
            <div className="text-gray-600 hover:text-purple-700 font-semibold mb-2"><Link href='#'>Instagram</Link></div>
        </div>
      </div>
    </div>
  )
}