import React, { useState } from 'react'
import "../assets/styles/stylishList.css"

export default function StylishList({ arr = [], arrow }) {

    const [bgState, setBgState] = useState(null)
    const [translateValue, stTranslateValue] = useState(0)

    return (
        // <ul className=' px-2 sm:px-3 md:px-4 '>
        //     {
        //         arr.map((ser, index) => {

        //             const isHovered = bgState == index

        //             return (
        //                 <li key={index}
        //                     onMouseEnter={() => { setBgState(index); stTranslateValue(index) }}
        //                     onMouseLeave={() => setBgState(null)}
        //                     className=' cursor-auto w-full h-fit border-[#44163c] border-b-[1px] m-0 relative py-3 '>

        //                     <div className={`${index !== 0 && ('hidden')} w-full h-full
        //                             bg-linear-to-r from-[#a1368f] via-[#a1368f] 
        //                             absolute top-0 transition-all duration-500 ease-in-out `}
        //                         style={{ transform: `translateY(${(translateValue * 100) + 4}%)` }}>
        //                     </div>

        //                     <div className={`w-full h-[150px] sm:h-[100px]  sm:flex text-white px-5  relative
        //                              transition-all duration-700 ease-in-out`}>
        //                         <div className=' flex  w-full sm:w-[40%] '>
        //                             <p className=' text-2xl font-bold w-[10%] my-auto '>
        //                                 {ser.num}
        //                             </p>
        //                             <h3 className=' text-2xl md:text-3xl lg:text-4xl font-bold w-[90%] my-auto capitalize '>
        //                                 {ser.title}
        //                             </h3>
        //                         </div>
        //                         <div className=' flex w-full sm:w-[60%] '>
        //                             <p className=' w-[90%] my-auto first-letter:uppercase '>
        //                                 {ser.description}
        //                             </p>
        //                             <div className=' w-[10%] flex justify-end '>
        //                                 <i className={`pi ${arrow} text-2xl my-auto w-fit 
        //                                         transition-all duration-700 ease-in-out`}
        //                                     style={{ transform: `rotate(${isHovered ? -90 : 0}deg)` }}></i>
        //                             </div>
        //                         </div>
        //                     </div>

        //                 </li>
        //             )
        //         })
        //     }
        // </ul>

        <ul className="service-list">
            {
                arr.map((ser, index) => {
                    const isHovered = bgState === index;

                    return (
                        <li
                            key={index}
                            onMouseEnter={() => { setBgState(index); stTranslateValue(index); }}
                            onMouseLeave={() => setBgState(null)}
                            className="service-item"
                        >
                            <div
                                className={`bg-slide ${index !== 0 ? 'hidden' : ''}`}
                                style={{ transform: `translateY(${(translateValue * 100) + 4}%)` }}
                            ></div>

                            <div className="content-wrapper">
                                <div className="title-section">
                                    <p className="service-num">{ser.num}</p>
                                    <h3 className="service-title">{ser.title}</h3>
                                </div>
                                <div className="desc-section">
                                    <p className="service-desc">{ser.description}</p>
                                    <div className="arrow-wrapper">
                                        <i
                                            className={`pi ${arrow} arrow-icon`}
                                            style={{ transform: `rotate(${isHovered ? -90 : 0}deg)` }}
                                        ></i>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })
            }
        </ul>

    )
}
