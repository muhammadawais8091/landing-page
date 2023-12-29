import { TabContentInterface } from '@/interfaceTypes'
import Image from 'next/legacy/image'
import React, { FC } from 'react'
import { Heading3 } from '../common/Typography/Heading3'
import { Paragraph } from '../common/Typography/Paragraph'

export const TabContent: FC<TabContentInterface> = ({ currentContent }) => {
  const { imageUrl, title: activeTabTitle, textFirst: activeTabTextFirst, textSecond: activeTabTextSecond } = currentContent

  return (
    <div className="pt-[30px] md:pt-[48px] flex md:flex-row flex-col-reverse px-[0px] md:px-[35px]">
      <div className='md:max-w-[623px] w-full  mx-auto'>
        <div className='md:bg-[#8472fc] min-h-[310px] md:min-h-[592px] w-full rounded-[50px] relative'>
          <div className='tabImage'>
            <Image layout='responsive' src={imageUrl || ''} height={0} width={0} alt={activeTabTitle || 'tab image'} />
          </div>
        </div>
      </div>

      <div className='max-w-[757px]'>
        <div className='md:max-w-[522px] px-[20px] mx-auto'>
          <div className='pt-[20px] md:pt-[60px]'>
            <span className='bg-[#DDE0E2] text-primary rounded-[30px] py-[15px] px-[22px] tracking-[2px] text-AvalonDemi'>ONSITE</span>

            <Heading3 className='mt-[20px] md:mt-[40px]' text={activeTabTitle || ''} />

            <Paragraph className='mt-[10px] sm:mt-[20px] md:mt-[40px]' text={activeTabTextFirst} />

            {!!activeTabTextSecond && <Paragraph className='md:mt-[40px]' text={activeTabTextSecond} />}
          </div>
        </div>
      </div>
    </div>
  )
}
