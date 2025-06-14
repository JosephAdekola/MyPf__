import React, { useState } from 'react'
import myHeadShot from '../assets/myHeadShot.jpeg'
import qualities from '../assets/utils/headerUtils/qualities.json'
import "../assets/styles/hero.css"

export default function HeroComponent() {

    const [reotate, setRotate] = useState(true)
    const [heroBorder, setHeroBorder] = useState('#a1368f')

    return (
        <div className="heroMainSection w-full py-4 overflow-hidden ">
            <div className="heroInnerSection max-w-[1400px] h-[100%] my-5 mx-auto px-2 
                    sm:px-5 pt-10 relative ">
                <div className=' md:w-[50%]  '>
                    <div className="contentBox flex flex-col gap-10 md:pr-15">
                        <div className=' headers '>
                            <h3 className=' text-2xl md:text-4xl text-white font-semibold '>
                                Joseph Adekola
                            </h3>
                            <h2 className=' nextLevel text-4xl md:text-5xl lg:text-6xl font-bold '>
                                Full-Stack Developer.
                            </h2>
                        </div>
                        {/* works for latest version of tailwind */}
                        {/* <div className={`imagesContainer w-full h-full flex
                                ${reotate && ('rotate-5')} md:absolute transition-all duration-200 ease-in-out`}>
                            <div className={`w-[300px] h-[350px] lg:w-[350px] lg:h-[400px] 
                                    rounded-4xl border-2  overflow-hidden mx-auto md:absolute 
                                    md:right-[100px] lg:right-[200px]`}
                                onMouseEnter={() => { setRotate(false); setHeroBorder('#f58634') }}
                                onMouseLeave={() => { setRotate(true); setHeroBorder('#a1368f') }}
                                style={{ borderColor: `${heroBorder}` }}>
                                <img src={myHeadShot} alt="myHeadShot"
                                    className='w-full h-full object-cover ' />
                            </div>
                        </div> */}

                        <div className={`imagesContainer w-full h-full flex 
        ${reotate ? 'rotateEffect' : ''} md:absolute transition-all duration-200 ease-in-out`}>
    <div className="heroImage"
        onMouseEnter={() => { setRotate(false); setHeroBorder('#f58634') }}
        onMouseLeave={() => { setRotate(true); setHeroBorder('#a1368f') }}
        style={{ borderColor: heroBorder }}>
        <img src={myHeadShot} alt="myHeadShot" className="w-full h-full object-cover" />
    </div>
</div>


                        <div className="aboutMe text-xl lg:text-3xl text-white text-center md:text-left">
                            <p>
                                I solve complex problems with simple, powerful code that connects people and ideas.
                            </p>
                        </div>

                        <div className="buttonsAndIcons text-[#f58634] w-full">
                            <div className=' w-fit mx-auto md:mx-px flex flex-col sm:flex-row gap-5 '>
                                <a className=' border px-5 py-3 rounded-full mx-auto cursor-pointer z-10 '
                                    href="/Resume.pdf" download={"Joseph_Adekola_CV"}>
                                    Download My CV
                                    <i className=' pi pi-download ml-3 '></i>
                                </a>
                                <div className="socialIcons flex justify-evenly gap-5 z-10 ">
                                    <a className=' pi pi-instagram border p-4 rounded-full h-fit cursor-pointer '
                                        href='https://www.instagram.com/imadekola' target='_blank'></a>
                                    <a className=' pi pi-linkedin border p-4 rounded-full h-fit cursor-pointer'
                                        href='https://www.linkedin.com/in/adekola-adebayo-523643164?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'></a>
                                    <a className=' pi pi-github border p-4 rounded-full h-fit cursor-pointer '
                                        href='https://github.com/josephadekola' target='_blank'></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="qualities grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 
                            gap-5  text-white py-10 lg:pt-50 sm:pt-[120px] ">
                    {
                        qualities.map((qua, index) => {
                            return (
                                <div key={index}
                                    className=' text-center px-10 flex flex-col 
                                                sm:flex-row gap-4 '>
                                    <h3 className=' text-5xl lg:text-7xl font-bold '>
                                        {qua.number}
                                    </h3>
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
