import { VIDEO_ESSENTIALS } from '@/constants'
import { Heading6 } from '../common/Typography/Heading6'
import { Heading2 } from '../common/Typography/Heading2'
import { Paragraph } from '../common/Typography/Paragraph'

export const VideoEssential = () => (
  <section id='videoEssential'>
    <div className='full-container !mt-[30px] md:!mt-[60px]'>
      <div className='bg-[#ECEFF0] rounded-[35px] py-[30px] md:py-[61px] px-[20px]'>
        <div data-aos="fade-down" data-aos-duration="1000">
          <Heading2 text='Video is Essential.' />

          <Paragraph className='mt-[10px] md:mt-[20px] text-center'
            text='With short-form video making up 82% of online content, video should be a priority for any brand.'
          />
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" className='2xl:max-w-[1115px] md:max-w-[900px] max-w-[350px] mx-auto'>
          <div className='video-essential-container'>
            {VIDEO_ESSENTIALS.map((videoEssential, index) => {
              const { id, value, textFirst, textSecond, gradient } = videoEssential

              return (
                <div className={`video-essential-circle ${gradient} ${index % 2 === 0 ? 'mr-auto md:mx-auto' : 'ml-auto md:mx-auto'}`} key={id}>
                  <span className='center-white uppercase tracking-[2px] block mb-[13px] text-AvalonDemi'>UP TO</span>

                  <Heading2 className='!text-white' text={value} />

                  <div className='mt-[5px]'>
                    <Heading6 className='center-white' text={textFirst} />
                    <Heading6 className='center-white' text={textSecond} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
)