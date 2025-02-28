import React, { useState } from 'react'
import headerLogo from '../assets/utils/headerUtils/headerLogo.png'
import menus from '../assets/utils/headerUtils/menus.json'

export default function Header() {

    const [inside, setInside] = useState('#a1368f')
    const [outside, setoutside] = useState('#f58634')
    const [hovered, setHovered] = useState(null)
    const [respMenuState, setRespMenuStatw] = useState(false)

    const inHandler = () => { setoutside('#a1368f'); setInside('#f58634') }
    const outHandler = () => { setoutside('#f58634'); setInside('#a1368f') }

    return (
        <div className=' w-full h-[100px] relative '>
            <div className=' max-w-[1400px] h-full mx-auto px-2 sm:px-5 flex justify-between '>
                <div className=' logoAndEmailCol flex gap-5 '>
                    <div className=' my-auto '>
                        <img src={headerLogo} alt="" className=' h-[60px] w-[60px] object-cover ' />
                    </div>
                    <div className=' flex '>
                        <p className=' text-lg text-white my-auto font-semibold hidden lg:inline-block '>
                            adekola.adebayo2@yahoo.com
                        </p>
                    </div>
                </div>

                <div className="menusCol h-full flex md:gap-10 text-white relative ">
                    <div className=' flex'>
                        {
                            menus.map((item, index) => {

                                const isHovered = index === hovered

                                return (
                                    <div key={index}
                                        className=' flex overflow-hidden '>
                                        <p className={`my-auto font-semibold cursor-pointer mr-20 md:mr-0 ml-6 md:mx-2 lg:mx-5
                                                ${item.specialText && (`px-5 py-2 text-2xl sm:text-lg rounded-full transition-colors `)}
                                                ${!item.specialText && (`text-lg hidden md:inline-block`)}`}
                                            onMouseEnter={() => { setHovered(index); item.specialText && (inHandler()) }}
                                            onMouseLeave={() => { setHovered(null); item.specialText && (outHandler()) }}
                                            style={item.specialText ?
                                                { background: `linear-gradient(to right, ${outside}, ${inside})` } :
                                                {}
                                            }>
                                            {item.menu}
                                            <hr className={`bg-gradient-to-r from-[#f58634] to-[#a1368f]
                                                ${item.specialText && ('hidden')} -translate-x-[160%]
                                                ${isHovered && (`translate-x-0`)}
                                                transition-all duration-700 ease-in-out`} />
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className=' absolute right-0 w-[50px] h-full flex '>
                        <div className={`flex md:hidden absolute right-0 h-full  ${respMenuState && (' rotate-45 opacity-0 scale-0 ')}
                                    transition-all duration-300 ease-in-out`}>
                            <i className={`pi pi-align-right my-auto text-5xl`}
                                onClick={() => setRespMenuStatw(true)}></i>
                        </div>

                        <div className={`flex md:hidden absolute right-0 h-full ${!respMenuState && (' rotate-45 opacity-0 scale-0')}
                                    transition-all duration-700 ease-in-out`}>
                            <i className={`pi pi-times my-auto text-5xl`}
                                onClick={() => setRespMenuStatw(false)}></i>
                        </div>
                    </div>
                </div>

                <div className={`absolute left-0 top-[100px] w-full h-[90vh] bg-[#a1368f] text-white md:hidden z-10
                                ${!respMenuState && ('-translate-y-[50%] scale-y-0')} transition-all duration-700 ease-in-out`}>
                    <ul className=' flex flex-col gap-5 '>
                        {
                            menus.map((respmen, index) => {
                                return (
                                    <li key={index}
                                        className={`${respmen.specialText && ('hidden')}
                                        text-3xl font-semibold px-5 cursor-pointer`}>
                                        {respmen.menu}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}



