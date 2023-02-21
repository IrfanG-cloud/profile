import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Portfolio() {
  return (
    <div className='w-full'>
        <div className='w-full flex'>
            <div className='w-1/2 transition duration-300 delay-150 hover:delay-300'>
                <Link href="#" className='w-1/2 transition duration-0 hover:duration-150'>
                    <Image className='' src="/bg-01.jpg" height={400} width={900} alt="image" />
                </Link>
            </div>
            <div className='w-1/2 transition duration-300 delay-150 hover:delay-30'>
                <Link href="#">
                    <Image src="/bg-01.jpg" height={400} width={900} alt="image" />
                </Link>
            </div>
        </div>
        <div className='w-full flex'>
            <div className='w-1/2 transition duration-300 delay-150 hover:delay-30'>
                <Link href="#">
                    <Image src="/bg-01.jpg" height={400} width={900} alt="image" />
                </Link>
            </div>
            <div className='w-1/2 transition duration-300 delay-150 hover:delay-30'>
                <Link href="#">
                    <Image src="/bg-01.jpg" height={400} width={900} alt="image" />
                </Link>
            </div>
        </div>
        <div className='w-full flex'>
            <div className='w-1/2 transition duration-300 delay-150 hover:delay-30'>
                <Link href="#">
                    <Image src="/bg-01.jpg" height={400} width={900} alt="image" />
                </Link>
            </div>
            <div className='w-1/2 transition duration-300 delay-150 hover:delay-30'>
                <Link href="#">
                    <Image src="/bg-01.jpg" height={400} width={900} alt="image" />
                </Link>
            </div>
        </div>
    </div>
  )
}
