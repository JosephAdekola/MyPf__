import React from 'react'

export default function HeaderAndIcon({icon, header}) {
  return (
    <div className=' flex gap-5 px-2 sm:px-5 '>
        <i className={`pi ${icon} h-fit my-auto text-2xl sm:text-3xl text-[#a1368f]`}></i>
        <h2 className=' bg-linear-to-r from-[#a1368f] to-[#ffffff] bg-clip-text 
                text-transparent text-3xl sm:text-3xl md:text-4xl lg:text-5xl capitalize font-bold '>
            {header}
        </h2>
    </div>
  )
}
