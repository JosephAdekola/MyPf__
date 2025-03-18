import React, { useState } from 'react'

export default function Skills({arr=[]}) {
    const [hovered, setHovered] = useState(null)
    return (
        <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-10 '>
            {
                arr.map((data, index) => {                  
                    
                    const isHovered = hovered === index

                    return (
                        <div key={index}
                            onMouseEnter={()=>setHovered(index)}
                            onMouseLeave={()=>setHovered(null)}>
                            <div className={`${isHovered ? 'bg-[#a1368f67]' : 'bg-[#3d2638f3]'} ${isHovered && ('border-3 border-[#a1368f]')} rounded-2xl px-5 py-5 flex flex-col gap-0
                                    transition-all duration-300 ease-in-out`}>
                                <div className={`mx-auto w-[100px] h-[100px] `}>
                                <img src={data.Image} alt={data.name} 
                                    className={`${isHovered ? 'grayscale-0' : 'grayscale-70'}
                                        transition-all duration-300 ease-in-out`}
                                    style={{transform: `${isHovered ? "scale(1.2)" : "scale(1.0)"}`}}/>
                                </div>
                                <p className=' text-center text-xl text-gray-400 font-bold '>{data.level}</p>
                            </div>
                            <p className=' text-center text-xl text-[#a1368f] font-bold capitalize '>{data.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
