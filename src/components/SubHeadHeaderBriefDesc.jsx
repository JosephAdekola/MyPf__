import React, { useEffect, useState } from 'react'

export default function SubHeadHeaderBriefDesc({duration,program,school,location }) {

    const [innerBG, setInnerBG] = useState('#4e2946')
    const [motherOpacityLevel, setMotherOpacityLevel] = useState(0)

    return (
        <div className={`w-[100%]  rounded-2xl transition-all duration-500 ease-in-out 
             overflow-hidden `}
            style={{ backgroundImage: `linear-gradient(to right, rgba(161,54,143,${motherOpacityLevel}),rgba(161,54,143,${motherOpacityLevel}),rgba(161,54,143,${motherOpacityLevel}), #4e2946)` }}
            onMouseEnter={() => {setInnerBG(null);setMotherOpacityLevel(1)}}
            onMouseLeave={() => setInnerBG('#4e2946')}>
            <div className={` w-full h-full px-10 py-5 mx-auto bg-[${innerBG}]  `}>
                <h3 className={` ${innerBG != '#4e2946' ? 'text-white' : 'text-[rgb(161,54,143)]'} md:text-2xl font-bold `}>
                    {duration}
                </h3>
                <h2 className=' text-white text-xl md:text-2xl lg:text-3xl font-bold uppercase '>
                    {program}
                </h2>
                <p className=' text-white md:text-2xl '>
                    {school}, {location}
                </p>
            </div>
        </div>
    )
}
