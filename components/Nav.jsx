import React from 'react'
import request from '../utils/requests'
import { useRouter } from 'next/router'

function Nav() {

    const router = useRouter()

    return (
        <nav className=' mb-4 relative'>
            <div className=' flex px-10 sm:px-20 text-2xl whitespace-nowrap scrollbar-hide  space-x-10  sm:space-x-20 overflow-x-scroll '>
                {Object.entries(request).map(([key, { title, url }]) =>

                    <h2 onClick={() => router.push(`/?genre=${key}`)} className=' last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-green-500 ' key={key}>
                        {title}
                    </h2>


                )}
            </div>
            <div className=' absolute top-0 right-0 bg-gradient-to-l  from-[#06202A] w-1/12 h-full '/>
        </nav>
    )
}

export default Nav