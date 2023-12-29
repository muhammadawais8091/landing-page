import { STEPS_APPROACH_LIST } from "@/constants"
import { VideoBlock } from "../common/Video/VideoBlock"
import { Heading3 } from "../common/Typography/Heading3"
import { Paragraph } from "../common/Typography/Paragraph"
import { Heading2 } from "../common/Typography/Heading2"

export const StepsApproach = () => (
  <section id="stepsApproach">
    <div className="pt-[40px] md:pt-[80px]">
      <div data-aos="fade-up" data-aos-duration="1000">
        <Heading2 text='The 4-Step Approach.' />
      </div>

      <div className="fixed-container pt-[30px] md:pt-[70px]">
        {STEPS_APPROACH_LIST.map((stepsApproach, index) => {
          const { id, title, description, videoUrl } = stepsApproach

          return (
            <div className={`steps-approach-container ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`} key={id}>
              <div data-aos="fade-right" data-aos-duration="1000" className="lg:w-2/4 xl:w-2/5 relative">
                <div className={`w-full steps-image steps-image-${index + 1} ${index % 2 !== 0 ? 'mr-auto' : 'ml-auto'}`}>
                  <VideoBlock url={videoUrl} />
                </div>
              </div>

              <div data-aos="fade-left" data-aos-duration="1000" className="lg:w-2/4 xl:w-3/5">
                <div className="max-w-[550px] mx-auto">
                  <Heading3 className="heading3" text={`${index + 1}. ${title}`} />
                  
                  <Paragraph className="opacity-75 mt-[15px] md:mt-[20px]" text={description} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div id='siteSolutions' />
    </div>
  </section>
)
