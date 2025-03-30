import React from 'react'

export default function HeaderAndDescription( {header, desc, paraAlign, headerWidth, paraMargin} ) {
  return (
    <div className=' flex flex-col gap-3 px-2 sm:px-5 '>
              <h2 className={`bg-linear-to-r from-[#a1368f] to-[#ffffff] bg-clip-text w-${headerWidth}
                    text-transparent text-3xl sm:text-5xl capitalize font-bold mx-auto`}>
                      {header}
              </h2>
              <p className={`text-white text-${paraAlign} mx-${paraMargin} text-lg max-w-[700px]`}>
                {desc}
                </p>
            </div>
  )
}
