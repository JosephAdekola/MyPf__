import React, { useState } from 'react'

export default function RecentWorks({ work = [] }) {

    const [hovered, setHovered] = useState(null)

    return (
        <div className=' grid grid-cols-1 sm:grid-cols-2 gap-10 '>
            {
                work.map((wor, index) => {

                    const isHovered = hovered === index

                    return (
                        <div key={index}
                            className=' relative rounded-2xl overflow-hidden '
                            onMouseEnter={()=>{setHovered(index)}}
                            onMouseLeave={()=>{setHovered(null)}}>
                            <div className=' max-w-[700px] bg-[#3d2638f3] px-10 pt-10 '>
                                <div className=' h-[300px] md:h-[400px] lg:h-[500px] '>
                                    <img src={wor.image} alt={wor.name}
                                        className=' w-full h-full object-cover ' />
                                </div>

                            </div>
                            <div className= {`${!isHovered && ('translate-y-[150%]')}  w-[95%] rounded-2xl bg-linear-to-tr from-[#a1368fc0] via-[#a1368f] to-[#a1368f] absolute bottom-10 
                                    left-1/2 transform -translate-x-1/2 flex justify-between px-5 text-white py-5
                                    transition-all duration-300 ease-in-out`}>
                                <div className=' flex flex-col gap-3 '>
                                    <h3 className=' text-3xl font-bold uppercase '>{wor.name}</h3>
                                    <p>{wor.description}</p>
                                </div>
                                <div className=' my-auto '>
                                    <i className={`${wor.arrow} text-3xl transition-all duration-500 ease-in-out `}
                                        style={{ transform: `rotate(-${isHovered ? 0 : 180}deg)` }}></i>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
