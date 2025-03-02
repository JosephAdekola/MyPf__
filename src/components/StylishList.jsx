import React from 'react'

export default function StylishList({bground, number, title, desc, arrow, rotateAmount}) {
  return (
    <div className= {`w-full h-[150px] sm:h-[100px]  sm:flex text-white px-5  relative
                    transition-all duration-700 ease-in-out`}
        style={{backgroundColor: `${bground}`}}>
            <div className=' flex  w-full sm:w-[40%] '>
              <p className=' text-2xl font-bold w-[10%] my-auto '>
                {number}
              </p>
              <h3 className=' text-2xl md:text-3xl lg:text-4xl font-bold w-[90%] my-auto capitalize '>
                {title}
              </h3>
            </div>
            <div className=' flex w-full sm:w-[60%] '>
              <p className=' w-[90%] my-auto first-letter:uppercase '>
                {desc}
              </p>
              <div className=' w-[10%] flex justify-end '>
              <i className={`pi ${arrow} text-2xl my-auto w-fit 
                    transition-all duration-700 ease-in-out`}
                style={{ transform: `rotate(${rotateAmount}deg)` }}></i>
              </div>
            </div>
    </div>
  )
}
