import { DISCOVER_TEXT, LETS_TALK } from '@/constants'
import { openPopupWidget } from '@/utils'
import { Button } from '../common/Button'
import { Heading2 } from '../common/Typography/Heading2'
import { Heading6 } from '../common/Typography/Heading6'

export const Communication = () => {
  return (
    <section>
      <div className='bg-primary py-[40px] md:py-[60px] mt-[50px]'>
        <div data-aos="fade-up" data-aos-duration="1000">
          <Heading2
            className='!text-white text-center'
            text={LETS_TALK}
          />

          <div className='max-w-[720px] mx-auto px-[10px] py-[16px] md:py-[32px] text-center'>
            <Heading6
              className='text-white'
              text={DISCOVER_TEXT}
            />
          </div>

          <div className='flex justify-center'>
            <Button buttonText='SCHEDULE A DEMO' onClick={() => openPopupWidget(false, true, false)}
              className='!bg-white !text-[13px] !text-[#8472FC] !px-[53px]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
