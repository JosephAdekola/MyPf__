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


export default function Home() {


  return (
    <div className=' '>
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


      <div className="recentworksection w-full bg-radial from-[#9b5524] via-[#4e2946] to-[#4e2946]">
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


      <div className=' MySkillsSection w-full bg-[#4e2946] px-2 sm:px-5'
            id='skills' >
        <div className=' max-w-[1400px] h-full mx-auto py-10 sm:py-20 lg:py-30
                flex flex-col gap-7 ' >
          <div>
            <HeaderAndDescription header={'My Skillset'}
              desc={'I turn your ideas into fully functional, beautifully crafted web solutions—designed to excite you and engage your audience. Every skill I bring to the table is focused on building digital experiences that work flawlessly and look exceptional.'}
              paraAlign={"center"}
              paraMargin={"auto"} />
          </div>

          <div>
            <Skills arr={SkillsData} />
          </div>
        </div>
      </div>

      <div className=' testimonialsSection w-full bg-[#4e2946] px-2 sm:px-5'
          id='testimonials'>
        <div className=' max-w-[1400px] h-full mx-auto py-10 sm:py-20 lg:py-30
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