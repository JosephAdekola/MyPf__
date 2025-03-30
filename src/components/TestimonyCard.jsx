    import React from 'react'

    export default function TestimonyCard({comLogo, logoalt, comName, shot, desc, rep, role }) {
    return (
        <div className=' bg-[#3d2638f3] px-5 py-5 rounded-2xl text-white relative 
                overflow-hidden min-w-[100%] sm:max-w-[300px] sm:min-w-[300px] '>
            <div className=' flex justify-between '>
                <div className=' flex gap-2 '>
                    <div className=' w-[30px] h-[30px] '>
                        <img src={comLogo} alt={logoalt}
                            className=' w-full h-full object-cover ' />
                    </div>
                    <h3 className=' uppercase font-semibold text-[13px] my-auto '>
                        {comName}
                    </h3>
                </div>
                <div>
                    <div className=' absolute w-[200px] h-[200px] rounded-full overflow-hidden
                            top-[-30%] right-[-25%] '>
                        <img src={shot} alt=""
                            className=' h-full w-full object-cover ' />
                    </div>
                </div>
            </div>

            <div className=' mt-20 '>
                <i className=' pi pi-caret-left text-2xl '></i>
                <i className=' pi pi-caret-right text-2xl '></i>
            </div>

            <div className=' py-5 text-sm '>
                <p>{desc}</p>
            </div>

            <div className=' py-5 '>
                <h3 className=' font-bold capitalize text-xl '>{rep}</h3>
                <p className='text-sm'>{role}</p>
            </div>
        </div>
    )
    }
