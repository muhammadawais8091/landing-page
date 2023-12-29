import { ENGAGE_YOUR_CUSTOMERS, LETS_TALK } from '@/constants'
import { Button } from '../common/Button'
import { Heading1 } from '../common/Typography/Heading1'
import { Paragraph } from '../common/Typography/Paragraph'
import { VideoBlock } from '../common/Video/VideoBlock'
import { openPopupWidget } from '@/utils'

export const Hero = () => (
  <section>
    <div className='hero-bg-image hero-section-wrap'>
      <div className='2xl:max-w-[1270px] max-w-[950px] mx-auto px-[10px]'>
        <div className='flex flex-col lg:flex-row gap-[20px] lg:gap-[30px] xl:gap-[41px]'>
          <div data-aos="fade-right" data-aos-duration="1000" className='relative flex-auto lg:flex-[1] hero-left-box'>
            <div className='2xl:p-[60px] xl:p-[40px] xs:p-[30px] py-[15px] px-[10px]'>
              <span className='block text-[#202020] tracking-[3px] text-[13px] font-[500] uppercase text-AvalonBold'>
                feature live 1:1 video calls on your website
              </span>

              <div className='max-w-[671px] w-full mt-[10px]'>
                <Heading1 className='hero-tag-text' text='Humanize Commerce with Video.' />
              </div>

              <Paragraph
                className='paragraph-text xl:mt-[30px] mt-[17px]'
                text={ENGAGE_YOUR_CUSTOMERS}
              />

              <div className='xl:mt-[57px] md:mt-[40px] mt-[17px]'>
                <Button
                  buttonText={LETS_TALK}
                  onClick={() => openPopupWidget(false, true, false)}
                />
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="1000" className='flex-auto hero-right-video lg:min-w-[250px] lg:max-w-[250px]'>
            <div className='overflow-hidden sm:rounded-[50px] rounded-[30px]'>
              <VideoBlock  url='https://res.cloudinary.com/dseydpdua/video/upload/v1695301941/operator-landing/videos/operator_site_v1_vid_01_engage_v2_zdq9cw.mp4' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)