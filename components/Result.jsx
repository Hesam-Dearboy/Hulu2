import React from 'react'
import Thumbnail from './Thumbnail'

function Result({ requests }) {
  return (
    <div className=' px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3  3xl:grid-cols-4'>
        {requests.map(result => 
            <Thumbnail key={result.id} result={result}/>
        )}
    </div>
  )
}

export default Result