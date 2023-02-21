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
            <Image className="ml-12" src="/bg-1.jpg" height={800} width={500} alt="image" />
            <h2 className='text-1xl my-8 font-bold'>CONTACT<br/>INFO</h2>
            <div className='border-t-2 border-black ml-16 w-[480px]'>
                <p className='mt-6'>irfanghyan@gmail.com</p>
            </div>
        <div className="text-gray-900 hover:text-gray-400 flex flex-col ml-16 mt-8 leading-24">
        <Link href='#'>Youtube</Link>
        <Link href='#'>Instragram</Link>
        <Link href='#'>Twitter</Link>
        <Link href='#'>Facebook</Link>
        <Link href='#'>Linkdin</Link>
        </div>
      </div>
    </div>
  )
}