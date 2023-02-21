import React from 'react'
import Image from 'next/image'


export default function Carousel() {
    return (
        
    <div className="w-full" data-carousel="static">
         <Image
          src="/bg-10.jpg"
          height={500}
          width={1850}
          alt="image"
         
        />
    </div>

)
}