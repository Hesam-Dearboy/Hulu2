import React from 'react'
import Image from 'next/image'
import {HandThumbUpIcon} from '@heroicons/react/24/outline'

function Thumbnail({result}) {

    const BASE_URL = "https://image.tmdb.org/t/p/original/"

  return (
    <div className=' cursor-pointer group p-2 transition duration-100  transform sm:hover:scale-105 ease-in hover:z-10'>
        <Image 
        layout=' responsive '
        src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
        />
        <div className=' p-2'>
            <p className=' truncate max-w-md'>
                {result.overview}
            </p>
            <h2 className=' text-white text-2xl mt-1 group-hover:font-bold duration-200 ease-in-out'>
                {result.title || result.original_name}
            </h2>
            <p className=' opacity-0 group-hover:opacity-100  flex items-center'>
              {result.media_type && `${result.media_type} -`}{' '} 
              {result.release_date || `${result.first_air_date}`} . {' '}
              <HandThumbUpIcon className=' h-5 mx-2' /> {result.vote_count}
            </p>
        </div>
    </div>
  )
}

export default Thumbnail