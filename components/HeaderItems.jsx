import React from 'react'



function HeaderItems({title , Icon}) {
  return (
    <div className=' w-12 sm:w-20 group  flex-col cursor-pointer flex justify-center hover:text-white items-center'>
        <Icon className=" group-hover:animate-bounce h-8 mb-1"/>
        <p className=' text-center opacity-0 group-hover:opacity-100 tracking-widest '>{title}</p>
    </div>
  )
}

export default HeaderItems