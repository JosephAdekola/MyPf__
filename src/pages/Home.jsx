import React, { useState } from 'react'
import HeaderAndDescription from '../components/HeaderAndDescription'
import services from '../assets/utils/servicesUtils/services.json'
import StylishList from '../components/StylishList'

export default function Home() {

  const [bgState, setBgState] = useState(null)
  const [translateValue, stTranslateValue] = useState(0)

  return (
    <div>
      <div className=' whatIDoSection w-full bg-[#3d2638f3] '>

        <div className=' max-w-[1400px] h-full mx-auto py-10 sm:py-20 lg:py-30 flex flex-col gap-10 '>
          <div>
            <HeaderAndDescription header={`what i do`}
              desc={`We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.`} />
          </div>

          <ul className=' px-2 sm:px-3 md:px-4 '>
            {
              services.map((ser, index)=>{

                const isHovered = bgState == index

                return(
                  <li key={index}
                      onMouseEnter={()=>{setBgState(index); stTranslateValue(index)}}
                      onMouseLeave={()=>setBgState(null)}
                      className=' cursor-pointer w-full h-fit border-[#44163c] border-b-[1px] m-0 relative py-3 '>
                    
                    <div className={`${index !== 0 && ('hidden')} w-full h-full
                            bg-linear-to-r from-[#a1368f] via-[#a1368f] 
                            absolute top-0 transition-all duration-500 ease-in-out `}
                        style={{transform: `translateY(${(translateValue*100)+translateValue}%)`}}></div>
                        
                    <StylishList number={ser.num} title={ser.title} desc={ser.description} 
                      arrow={'pi-arrow-down-right'}
                      rotateAmount={isHovered ? -90 : 0} />
                      
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
