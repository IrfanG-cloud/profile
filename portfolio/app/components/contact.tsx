import React from 'react'
import Link from 'next/link'

export default function ContactUs() {
  return (
    <div className="w-full flex py-20 px-48">
        <div className="flex flex-col w-1/5">
            <div className="text-red-700 font-semibold mb-4"><Link href='#'>Youtube</Link></div>
            <div className="text-blue-700 font-semibold mb-4"><Link href='#'>Facebook</Link></div>
            <div className="text-blue-500 font-semibold mb-4"><Link href='#'>Linkedin</Link></div>
            <div className="text-purple-700 font-semibold mb-4"><Link href='#'>Instagram</Link></div>
        </div>
        <div className='border-t-2 border-black w-2/5'>
            <h1 className='text-4xl font-bold mt-4'>READY TO TEAM UP?</h1>
            <p className='text-1xl my-4'>Find me on social, connect with me <br/>through this form, or write directly</p>
            <p className="text-2xl font-semibold">irfanghyann@gmail.com</p>
        </div>
        <div className="px-16 w-2/5">
            <form className="w-full" >
                <input type="hidden" name="remember" />
                <div className=" rounded-md ">
                <div>
                    <label htmlFor="email-address" className="sr-only">
                    Email address
                    </label>
                    <input
                    id="email-address"
                    name="email"
                    type="email"

                    autoComplete="email"
                    required
                    className="relative my-[20px] h-[50px] block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email address"
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="sr-only">
                    Subject
                    </label>
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full h-[50px] appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-red-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
                    placeholder="Password"
                    />
                </div>

                <div >
                    <label htmlFor="subject" className="sr-only">
                    Message
                    </label>
                    <textarea
                    id="comments"
                    name="textarea"
                    autoComplete="current-password"
                    className="relative block w-full h-[50px] appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-red-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
                    placeholder="Your Text Here..."
                    
                    >
                    </textarea>
                </div>
                </div>


                <div>
                <Link
                    type="submit"
                    href="/"
                    className="group relative mb-[20px] h-[40px] w-[80px] justify-center rounded-md border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                    Submit
                </Link>
                </div>
            </form>
        </div>
        
    </div>
  )
}