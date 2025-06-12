import React from 'react'

export default function IconHeadingParagraph({icon, heading, paragraph}) {
  return (
    <div className=' flex gap-5 '>
                    <div className='flex'>
                        <i className={` ${icon} text-white text-2xl rounded-full p-3 my-auto
                            bg-gradient-to-bl from-[#ffffffaa] to-[#694161] via-[#4e2946] `}></i>
                    </div>
                    <div className=' text-white '>
                        <h4 className=' capitalize '>
                            {heading}
                        </h4>
                        <p className=' text-lg sm:text-2xl '>
                            {paragraph}
                        </p>
                    </div>
                </div>
  )
}
