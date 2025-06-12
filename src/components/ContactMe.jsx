import React, { useState } from 'react'
import HeaderAndDescription from './HeaderAndDescription'
import myContact from '../assets/utils/contactDetailsUtils/contact.json'
import IconHeadingParagraph from './IconHeadingParagraph'

export default function ContactMe() {

    const [inside, setInside] = useState('#a1368f')
    const [outside, setoutside] = useState('#f58634')

    return (
        <main className=' grid sm:grid-cols-2 ' >
            <section className=' px-2 py-10 sm:p-10 rounded-xl bg-[#4e2946] '>
                <div className=' mb-5 '>
                    <HeaderAndDescription header={"Let’s work together!"}
                        desc={"I design and code beautifully simple things and i love what i do. Just simple like that!"}
                        paraAlign={"center"} />
                </div>
                <div>
                    <form action=""
                        className=' flex flex-col gap-3 '>
                        <div className=' grid sm:grid-cols-2 gap-3 '>
                            <input type="text" placeholder='First name'
                                className=' border bg-[#3d2638f3] text-white py-3 px-2 rounded ' />
                            <input type="text" placeholder='Last name'
                                className=' border bg-[#3d2638f3] text-white py-3 px-2 rounded ' />
                        </div>
                        <div className=' grid sm:grid-cols-2 gap-3 '>
                            <input type="text" placeholder='Email address'
                                className=' border bg-[#3d2638f3] text-white py-3 px-2 rounded ' />
                            <input type="text" placeholder='Phone number'
                                className=' border bg-[#3d2638f3] text-white py-3 px-2 rounded ' />
                        </div>
                        <div className=''>
                            <input type="text" placeholder='Subject'
                                className=' border bg-[#3d2638f3] text-white py-3 px-2 rounded w-full ' />
                        </div>
                        <div>
                            <textarea name="" id="" placeholder='Message'
                                className=' border bg-[#3d2638f3] text-white py-3 px-2 rounded w-full h-[150px] '>
                            </textarea>
                        </div>
                        <div>
                            <input
                                type="submit"
                                value="Send Message"
                                onMouseEnter={() => { setInside("#f58634"); setoutside("#a1368f") }}
                                onMouseLeave={() => { setInside("#a1368f"); setoutside("#f58634") }}
                                className="border p-5 rounded-full text-white font-bold my-auto cursor-pointer 
                                        px-5 py-2 text-2xl sm:text-lg transition-all duration-500 ease-in-out"
                                style={{ background: `linear-gradient(to right, ${outside}, ${inside})` }}
                            />
                        </div>

                    </form>
                </div>
            </section>
            <section className=' px-2 py-10 sm:p-10 rounded-xl flex justify-center '>
                <div className=' my-auto flex flex-col gap-5 '>
                    {
                        myContact.info.map((item, index)=>{
                            return(
                                <div key={index}>
                                    <IconHeadingParagraph icon={item.icon}
                                        heading={item.title}
                                        paragraph={item.value} />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}
