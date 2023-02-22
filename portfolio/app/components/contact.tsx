import React from 'react'
import Link from 'next/link'

export default function ContactUs() {
  return (
    <div className="w-full flex py-32 px-48 bg-gradient-to-r from-gray-900 to-black to-gray-900">
        <div className="flex flex-col w-1/5">
            <div className="text-gray-100 hover:text-red-700 font-semibold mb-4"><Link href='#'>Youtube</Link></div>
            <div className="text-gray-100 hover:text-blue-700 font-semibold mb-4"><Link href='#'>Facebook</Link></div>
            <div className="text-gray-100 hover:text-blue-500 font-semibold mb-4"><Link href='#'>Linkedin</Link></div>
            <div className="text-gray-100 hover:text-purple-700 font-semibold mb-4"><Link href='#'>Instagram</Link></div>
        </div>
        <div className='border-t-2 border-white w-2/5'>
            <h1 className='text-4xl font-bold mt-4 text-white'>READY TO TEAM UP?</h1>
            <p className='text-1xl my-4 text-white'>Find me on social, connect with me <br/>through this form, or write directly</p>
            <p className="text-2xl font-semibold text-white">irfanghyann@gmail.com</p>
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
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative my-[20px] h-[50px] block w-full appearance-none  border-2 border-l-gray-800 border-t-gray-800 rounded-t-md px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email address"
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="sr-only mb-12">
                    Subject
                    </label>
                    <input
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full h-[50px] appearance-none border-2 border-l-gray-800 border-t-gray-800 rounded-b-md px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-red-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
                    placeholder="Password"
                    />
                </div>

                <div >
                    <label htmlFor="subject" className="sr-only mt-12 ">
                    Message
                    </label>
                    <textarea
                    id="comments"
                    fill-0
                    name="textarea"
                    autoComplete="current-password"
                    className=" w-full h-[50px] appearance-none mt-4
                    border-4 border-l-gray-800 border-t-gray-800 rounded-b-md px-3 py-2 text-gray-900 focus:z-10  sm:text-sm"
                    placeholder="Your Text Here..."
                    
                    >
                    </textarea>
                </div>
                </div>


                <div>
                <Link
                    type="submit"
                    href="/"
                    className="text-center mt-[20px] h-[50px] w-full font-semibold rounded-md border border-transparent bg-gray-600 py-2 px-4 text-sm text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                    SUBMIT
                </Link>
                </div>

                    

            </form>

        </div>
    </div>
  )
}