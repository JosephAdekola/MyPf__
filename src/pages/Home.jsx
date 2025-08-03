import React from 'react'
import HeaderAndDescription from '../components/HeaderAndDescription'
import StylishList from '../components/StylishList'
import services from '../assets/utils/servicesUtils/services.json'
import RecentWorks from '../components/RecentWorks'
import recentWorksData from '../assets/utils/recentWorkUtils/recentWorksData'
import HeaderAndIcon from '../components/HeaderAndIcon'
import SubHeadHeaderBriefDesc from '../components/SubHeadHeaderBriefDesc'
import studyAndExp from '../assets/utils/experienceAndEducationUtils/experience.json'
import Skills from '../components/Skills'
import SkillsData from '../assets/utils/skillsUtils/SkillsData'
import Testimonials from '../components/Testimonials'
import ContactMe from '../components/ContactMe'
import { useNavigate } from 'react-router'
import HeroComponent from '../components/HeroComponent'


export default function Home() {

  const navigate = useNavigate()

  return (
    <div className=' '>

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-tr from-[#4e2946] via-[#4e2946] to-[#f58634] pt-[100px]">
        <HeroComponent />
      </div>

      <div className=' whatIDoSection w-full bg-[#3d2638f3] '>

        <div className=' max-w-[1400px] h-full mx-auto py-10 sm:py-20 lg:py-30 flex flex-col gap-10 '
          id='services'>
          <div>
            <HeaderAndDescription header={`how i bring value`}
              desc={`I transform your ideas into powerful, 
                  user-focused web experiences that reflect 
                  your vision and captivate your audience. 
                  From concept to launch, I deliver full-stack 
                  solutions that drive results.`}
              paraAlign={"center"}
              paraMargin={"auto"} />
          </div>

          <div>
            <StylishList arr={services} arrow={'pi-arrow-down-right'} />
          </div>
        </div>

      </div>

      <div className=' whatIDoSection w-full bg-[#3d2638f3] '>
        <HeaderAndDescription header={`Business-Ready Website Templates`}
          desc={`Starting with a versatile template designed for both barbing salons and hair stylists, 
                    this section will feature purpose-built websites tailored to different types of artisans 
                    and small businesses. More templates are on the way each crafted for function, style, 
                    and ease of use.`}
          paraAlign={"center"}
          paraMargin={"auto"} />

        <div className="">
          <div className="grid grid-cols-1 ">
            <div className=" block rounded-xl p-4 hover:shadow-lg transition relative 
                            md:max-w-[70vw] mx-auto ">
              <img src="/barber-shop.jpg" alt="Salon Template" className="rounded-lg mb-3 blur" />

              <div className=' absolute inset-0 flex flex-col gap-2 justify-center items-center '>
                <h3 className="uppercase text-5xl font-semibold text-white transition">
                  coming soon
                </h3>
                <p className="text-sm text-white">
                  Clean and stylish layout for modern salons.
                </p>
                <button className=' border px-3 rounded-full mx-auto text-white uppercase hover:bg-white
                            hover:text-black transition-all duration-500 ease-in-out '
                        onClick={e => navigate("/saloon-template")}>
                  learn more
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div className="recentworksection w-full ">
        <div className=' max-w-[1400px] h-full mx-auto py-10 sm:py-20 lg:py-30 flex flex-col gap-10 '
          id='works'>
          <div>
            <HeaderAndDescription header={`featured projects`}
              desc={`Each project starts with your vision. I bring it to life through sleek, high-performing web experiences that not only meet your needs—but leave a lasting impression on your customers.`}
              paraAlign={"center"}
              paraMargin={"auto"} />
          </div>

          <div className=' px-2 sm:px-3 md:px-4 '>
            <RecentWorks work={recentWorksData} />
          </div>
        </div>
      </div>


      <div className=' experienceAndEducationSection w-full bg-[#3d2638f3] px-2 sm:px-5'
        id='resume'>
        <div className=' max-w-[1400px] h-full mx-auto py-10 sm:py-20 lg:py-30 grid sm:grid-cols-2 gap-10 md:gap-30 '>
          <div className=' flex flex-col gap-3 '>
            <div>
              <HeaderAndIcon icon={`pi-trophy`} header={`my experience`} />
            </div>
            <div className=' flex flex-col gap-5 '>
              {
                studyAndExp.experiece.map((exp, index) => {
                  return (
                    <div key={index}>
                      <SubHeadHeaderBriefDesc duration={exp.timelap} program={exp.role} school={exp.organisation} location={exp.location} />
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className=' flex flex-col gap-3 '>
            <div>
              <HeaderAndIcon icon={`pi-graduation-cap`} header={`my education`} />
            </div>
            <div className=' flex flex-col gap-5 '>
              {
                studyAndExp.education.map((edu, index) => {
                  return (
                    <div key={index}>
                      <SubHeadHeaderBriefDesc duration={edu.timelap} program={edu.stydy} school={edu.school} location={edu.location} />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>


      <div className=' MySkillsSection w-full bg-[#4e2946] px-2 sm:px-5 '
        id='skills' >
        <div className=' max-w-[1400px] h-full mx-auto py-10 sm:py-20 
                flex flex-col gap-7 ' >
          <div>
            <HeaderAndDescription header={'My Skillset'}
              desc={'I turn your ideas into fully functional, beautifully crafted web solutions—designed to excite you and engage your audience. Every skill I bring to the table is focused on building digital experiences that work flawlessly and look exceptional.'}
              paraAlign={"center"}
              paraMargin={"auto"} />
          </div>

          <div className='  '>
            <Skills arr={SkillsData} />
          </div>
        </div>
      </div>

      <div className=' testimonialsSection w-full bg-[#4e2946] px-2 sm:px-5'
        id='testimonials'>
        <div className=' max-w-[1400px] h-full mx-auto py-10 sm:py-20 
                flex flex-col gap-7 '>
          <div>
            <Testimonials />
          </div>
        </div>
      </div>

      <div className=' contactSection w-full bg-[#3d2638f3] px-2 sm:px-5'
        id='contact'>
        <div className=' max-w-[1400px] h-full mx-auto py-10 sm:py-20 lg:py-30
                flex flex-col gap-7 '>
          <div className=' w-full '>
            <ContactMe />
          </div>
        </div>
      </div>
    </div>
  )
}