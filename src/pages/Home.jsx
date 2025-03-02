import React from 'react'
import HeaderAndDescription from '../components/HeaderAndDescription'
import services from '../assets/utils/servicesUtils/services.json'
import StylishList from '../components/StylishList'

export default function Home() {

  return (
    <div>
      <div className=' whatIDoSection w-full bg-[#3d2638f3] '>

        <div className=' max-w-[1400px] h-full mx-auto py-10 sm:py-20 lg:py-30 flex flex-col gap-10 '>
          <div>
            <HeaderAndDescription header={`what i do`}
              desc={`We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.`} />
          </div>

          <div>
            <StylishList arr={services} arrow={'pi-arrow-down-right'} />
          </div>
        </div>

      </div>
    </div>
  )
}