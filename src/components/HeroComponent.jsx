import React, { useState } from 'react'
import myHeadShot from '../assets/myHeadShot.jpeg'
import qualities from '../assets/utils/headerUtils/qualities.json'

export default function HeroComponent() {

    const [reotate, setRotate] = useState(true)

    return (
        <div className="heroMainSection w-full py-4 overflow-hidden ">
            <div className="heroInnerSection max-w-[1400px] h-[100%] my-5 mx-auto px-2 sm:px-5 relative ">
                <div className=' md:w-[50%]  '>
                    <div className="contentBox flex flex-col gap-10 md:pr-15">
                        <div className=' headers '>
                            <h3 className=' text-2xl md:text-4xl text-white font-semibold '>
                                I am Joseph
                            </h3>
                            <h2 className=' nextLevel text-4xl md:text-5xl lg:text-6xl font-bold '>
                                Next-Level Web Developer.
                            </h2>
                        </div>

                        <div className= {`imagesContainer w-full h-full flex ${reotate && ('rotate-5')} md:absolute transition-all duration-500 ease-in-out`}>
                            <div className=' w-[300px] h-[350px] lg:w-[350px] lg:h-[400px] rounded-4xl border-2 border-[#a1368f] overflow-hidden mx-auto md:absolute md:right-[100px] lg:right-[200px]  '
                                onMouseEnter={()=> setRotate(false)}
                                onMouseLeave={()=> setRotate(true)}>
                                <img src={myHeadShot} alt="myHeadShot"
                                    className='w-full h-full object-cover ' />
                            </div>
                        </div>

                        <div className="aboutMe text-xl lg:text-3xl text-white text-center md:text-left">
                            <p>I break down complex user experience problems to create integrity focussed
                                solutions that connect billions of people
                            </p>
                        </div>

                        <div className="buttonsAndIcons text-[#f58634] w-fit flex flex-col sm:flex-row gap-5">
                            <button className=' border px-5 py-3 rounded-full '>
                                Download My CV
                                <i className=' pi pi-download ml-3 '></i>
                            </button>
                            <div className="socialIcons flex justify-evenly gap-5 ">
                                <i className=' pi pi-instagram border p-4 rounded-full h-fit '></i>
                                <i className=' pi pi-linkedin border p-4 rounded-full h-fit'></i>
                                <i className=' pi pi-github border p-4 rounded-full h-fit '></i>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="qualities grid grid-cols-2 gap-5 md:flex lg:justify-between text-white py-10 lg:py-20">
                        {
                            qualities.map((qua, index) => {
                                return (
                                    <div key={index}
                                        className=' text-center px-10 flex flex-col sm:flex-row gap-4 '>
                                        <h3 className=' text-5xl lg:text-7xl font-bold '>{qua.number}</h3>
                                        <p className=' my-auto '>{qua.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
        </div>
    )
}
