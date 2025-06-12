import React, { useEffect, useState } from 'react'
import HeaderAndDescription from './HeaderAndDescription'
import TestimonyCard from './TestimonyCard'
import testimonialData from '../assets/utils/testimonialUtils/testimoialData'

export default function Testimonials() {

    // Group testimonial data into sets of 2 for desktop
    const groupedTestimonials = []
    for (let i = 0; i < testimonialData.length; i += 2) {
        groupedTestimonials.push(testimonialData.slice(i, i + 2))
    }

    const [transValue, setTransValue] = useState(0)
    const [transValueMobile, setTransValueMobile] = useState(0)
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!hovered) {
                setTransValue(prev => (prev + 1) % groupedTestimonials.length)
                setTransValueMobile(prev => (prev + 1) % testimonialData.length)
            }
        }, 3000)
        return () => clearInterval(intervalId)
    }, [hovered, groupedTestimonials.length, testimonialData.length])

    return (
        <div className=' grid sm:grid-cols-2 '>
            <div className=' hidden sm:block  '>
                <HeaderAndDescription
                    header={"Hear from my clients"}
                    desc={"Empowering people in new a digital journey with my super services"}
                    headerWidth={"full"}
                    paraAlign={"left"} />
            </div>

            <div className=' sm:hidden py-5 '>
                <HeaderAndDescription
                    header={"Hear from my clients"}
                    desc={"Empowering people in new a digital journey with my super services"}
                    headerWidth={""}
                    paraAlign={"center"} />
            </div>

            {/* Desktop version */}
            <div className=' hidden lg:flex flex-col gap-5 overflow-hidden '>
                <div
                    className={`flex transition-all duration-300 ease-in-out`}
                    style={{ transform: `translateX(-${transValue * 100}%)` }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    {groupedTestimonials.map((group, pageIndex) => (
                        <div key={pageIndex} className="flex min-w-full gap-[2%]">
                            {group.map((data, index) => (
                                <div key={index} className="min-w-[49%]">
                                    <TestimonyCard
                                        comLogo={data.logo}
                                        logoalt={`${data.platform} logo`}
                                        comName={data.platform}
                                        shot={data.image}
                                        desc={data.details}
                                        rep={data.name}
                                        role={data.role}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className=' flex gap-2 justify-center '>
                    {
                        groupedTestimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full 
                                    ${transValue === index ? "bg-[#a1368f]" : 'bg-gray-500'}`}
                                onClick={() => setTransValue(index)}
                            />
                        ))
                    }
                </div>
            </div>

            {/* Mobile version */}
            <div className=' flex lg:hidden flex-col gap-5 overflow-hidden '>
                <div className={`flex gap-10 transition-all duration-300 ease-in-out px-5 `}
                    style={{ transform: `translateX(-${transValueMobile * 100}%)` }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    {
                        testimonialData.map((data, index) => (
                            <div key={index} className='min-w-full'>
                                <TestimonyCard
                                    comLogo={data.logo}
                                    logoalt={`${data.platform} logo`}
                                    comName={data.platform}
                                    shot={data.image}
                                    desc={data.details}
                                    rep={data.name}
                                    role={data.role}
                                />
                            </div>
                        ))
                    }
                </div>
                <div className=' flex gap-2 justify-center '>
                    {
                        testimonialData.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full 
                                    ${transValueMobile === index ? "bg-[#a1368f]" : 'bg-gray-500'}`}
                                onClick={() => setTransValueMobile(index)}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
