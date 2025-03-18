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


      <div className="recentworksection w-full bg-radial from-[#9b5524] via-[#4e2946] to-[#4e2946]">
        <div className=' max-w-[1400px] h-full mx-auto py-10 sm:py-20 lg:py-30 flex flex-col gap-10 '>
          <div>
            <HeaderAndDescription header={`my recent works`}
              desc={`We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.`} />
          </div>

          <div className=' px-2 sm:px-3 md:px-4 '>
            <RecentWorks work={recentWorksData} />
          </div>
        </div>
      </div>


      <div className=' experienceAndEducationSection w-full bg-[#3d2638f3] px-2 sm:px-5'>
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


      <div className=' MySkillsSection w-full bg-[#4e2946] px-2 sm:px-5' >
          <div className=' max-w-[1400px] h-full mx-auto py-10 sm:py-20 lg:py-30
                flex flex-col gap-7 ' >
              <div>
                <HeaderAndDescription header={'my skills'} 
                  desc={'We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.'} />
              </div>

              <div>
                <Skills arr={SkillsData} />
              </div>
          </div>
      </div>


      <div className=' MySkillsSection w-full bg-[#4e2946] px-2 sm:px-5'>

      </div>
    </div>
  )
}