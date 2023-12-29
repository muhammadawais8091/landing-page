'use client'

import { TABS_ONSITE_LIST } from '@/constants';
import { NextArrowIcon, PreviousArrowIcon } from '@/svg';
import Image from 'next/image';
import { useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import { Heading2 } from '../common/Typography/Heading2';
import { Heading3 } from '../common/Typography/Heading3';
import { Paragraph } from '../common/Typography/Paragraph';

export const OnsiteSolutions = () => {
  const sliderRef = useRef<Slider>(null)

  const settings: Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    dots: true,
    autoplay: false,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          adaptiveHeight: true
        }
      },
    ]
  };

  const movePrev = () => {
    sliderRef.current?.slickPrev()
  }

  const moveNext = () => {
    sliderRef.current?.slickNext()
  }

  return (
    <section>
      <div className='pt-[10px] md:pt-[60px] max-w-[1370px] mx-auto md:pb-[60px] pb-[25px] lg:px-[50px]'>
        <div className='px-[20px]'>
          <Heading2 text='Onsite & offsite solutions.' />

          <Paragraph className='mt-[10px] md:mt-[20px] text-center'
            text='Enhance user experience with video, whether that is on your site or in person.'
          />
        </div>

        <div className='pt-[30px] md:pt-[60px] relative onsite-tab-slider'>
          <>
            <button type="button" data-role="none" className="hidden lg:block onsite-slick-arrow onsite-slick-prev caba-cursor-pointer" onClick={movePrev}><PreviousArrowIcon /></button>
            <button type="button" data-role="none" className="hidden lg:block  onsite-slick-arrow onsite-slick-next caba-cursor-pointer" onClick={moveNext}><NextArrowIcon /></button>
          </>

          <Slider {...settings} ref={sliderRef}>
            {TABS_ONSITE_LIST.map((onsite) => {
              const { id, imageUrlDesktop, textFirst, textSecond, title, Icon, imageUrl, status } = onsite

              return (
                <div className='lg:bg-[#ECEFF0] rounded-[40px] lg:py-[48px] px-[20px] xl:px-[40px]' key={id}>
                  <div className='grid grid-cols-12 lg:gap-[20px]'>
                    <div className='lg:col-span-7 col-span-12 w-full lg:mb-[0] mb-[-130px] relative'>
                      <div className='w-full h-full onsite-image-for-mobile xs:max-w-[230px] max-w-[160px] ml-auto block lg:hidden'>
                        <Image src={imageUrl || ''} height={0} layout='responsive' width={250} alt={title || 'tab image'} priority/>
                      </div>

                      <div className='xl:max-w-[95%] mr-auto relative onsite-image h-full lg:block hidden'>
                        <Image layout='responsive' src={imageUrlDesktop || ''} style={{ objectPosition: title === 'SMS' ? 'right' : 'center' }} height={0} width={0} alt={title || 'tab image'} priority/>
                      </div>
                    </div>

                    <div className='lg:bg-transparent bg-[#ECEFF0] lg:col-span-5 col-span-12 lg:rounded-none rounded-[30px]'>
                      <div className='pt-[40px] lg:pt-[60px] lg:pb-0 pb-[40px] lg:px-0 px-[20px]'>
                        <span className='bg-[#FFFFFF] text-primary rounded-[30px] py-[10px] xs:py-[15px] text-[11px] xs:text-[16px] px-[10px] xs:px-[22px] tracking-[2px] text-AvalonDemi uppercase'>{status}</span>

                        <div className='flex mt-[20px] md:mt-[40px] xs:items-center xs:flex-row flex-col xs:min-h-fit min-h-[95px]'>
                          <span className='xs:order-1 order-2 xs:mt-0 mt-[6px]'>{Icon}</span>

                          <Heading3 className='xs:order-2 order-1 xs:max-w-[100%] xs:ml-[16.5px] max-w-[120px]' text={title || ''} />
                        </div>

                        <Paragraph className='mt-[10px] md:mt-[40px]' text={textFirst} />

                        {!!textSecond && <Paragraph className='mt-[40px]' text={textSecond || ''} />}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>

        <div id='pricePlan' />
      </div>
    </section>
  )
}