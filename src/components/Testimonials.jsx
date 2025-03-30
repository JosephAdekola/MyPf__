import React, { useEffect, useState } from 'react'
import HeaderAndDescription from './HeaderAndDescription'
import TestimonyCard from './TestimonyCard'
import testimonialData from '../assets/utils/testimonialUtils/testimoialData'

export default function Testimonials() {

    const [transValue, setTransValue] = useState(0)
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!hovered) {
                setTransValue((init) => init < (testimonialData.length - 1) ? init + 1 : 0)
            }
        }, 3000)
        return () => clearInterval(intervalId)
    }, [hovered, testimonialData.length])

    return (
        <div className=' grid sm:grid-cols-2 '>
            <div className=' hidden sm:block  '>
                <HeaderAndDescription header={"Hear from my clients"}
                    desc={"Empowering people in new a digital journey with my super services"}
                    headerWidth={"full"}
                    paraAlign={"left"} />
            </div>

            {/* for responsiveness */}
            <div className=' sm:hidden py-5 '>
                <HeaderAndDescription header={"Hear from my clients"}
                    desc={"Empowering people in new a digital journey with my super services"}
                    headerWidth={""}
                    paraAlign={"center"} />
            </div>
            <div className=' hidden sm:flex flex-col gap-5 overflow-hidden '>
                <div className={`flex gap-10 transition-all duration-300 ease-in-out px-10 `}
                    style={{ transform: `translateX(-${transValue * 50}%)` }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => { setHovered(false) }}>
                    {
                        testimonialData.map((data, index) => {

                            return (
                                <div key={index}
                                    className=' '>
                                    <TestimonyCard comLogo={data.logo}
                                        logoalt={`${data.platform} logo`}
                                        comName={data.platform}
                                        shot={data.image}
                                        desc={data.details}
                                        rep={data.name}
                                        role={data.role} />
                                </div>
                            )
                        })
                    }

                </div>
                <div className=' flex gap-2 justify-center '>
                    {
                        testimonialData.map((_, index) => {
                            return (
                                <button className={`w-3 h-3 rounded-full 
                                            ${transValue == index ? "bg-[#a1368f]" : 'bg-gray-500'}`}
                                    onClick={() => setTransValue(index)}>

                                </button>
                            )
                        })
                    }
                </div>
            </div>

            {/* for mobile */}
            <div className=' flex sm:hidden flex-col gap-5 overflow-hidden '>
                <div className={`flex gap-10 transition-all duration-300 ease-in-out px-5 `}
                    style={{ transform: `translateX(-${transValue * 100}%)` }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => { setHovered(false) }}>
                    {
                        testimonialData.map((data, index) => {

                            return (
                                <div key={index}
                                    className=' min-w-full  '>
                                    <TestimonyCard comLogo={data.logo}
                                        logoalt={`${data.platform} logo`}
                                        comName={data.platform}
                                        shot={data.image}
                                        desc={data.details}
                                        rep={data.name}
                                        role={data.role} />
                                </div>
                            )
                        })
                    }

                </div>
                <div className=' flex gap-2 justify-center '>
                    {
                        testimonialData.map((_, index) => {
                            return (
                                <button className={`w-3 h-3 rounded-full 
                                            ${transValue == index ? "bg-[#a1368f]" : 'bg-gray-500'}`}
                                    onClick={() => setTransValue(index)}>

                                </button>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
