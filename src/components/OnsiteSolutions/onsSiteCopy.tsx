'use client'

import { TABS_ONSITE_LIST } from '@/constants';
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { Paragraph } from '../common/Typography/Paragraph';
import { Heading2 } from '../common/Typography/Heading2';
import { TabContent } from './TabContent';
import Slider from 'react-slick';

export const OnsiteSolutions = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(TABS_ONSITE_LIST[0]);
  const [isClickAble, setIsClickAble] = useState(true)

  const { id: activeTabId, title: activeTabTitle, textFirst: activeTabTextFirst,
    textSecond: activeTabTextSecond, imageUrl } = activeTab || {}

  const setClickTab = (index: number) => {
    isClickAble && setTabIndex(index)

    setIsClickAble(false)

    setTimeout(() => {
      setIsClickAble(true)
    }, 600)
  }

  const settings = {
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
        }
      },
    ]
  };

  useEffect(() => {
    const newTab = TABS_ONSITE_LIST.find(tab => tab.tabIndex === tabIndex)
    newTab && setActiveTab(newTab)
  }, [tabIndex])

  return (
    <section>
      <div className='pt-[10px] md:pt-[60px] max-w-[1370px] mx-auto md:px-[0] overflow-hidden md:pb-[60px] pb-[25px]'>
        <div className='px-[20px]'>
          <Heading2 text='Onsite & offsite solutions.' />

          <Paragraph className='mt-[10px] md:mt-[20px] text-center'
            text='Enhance user experience with video, whether that is on your site or in person.'
          />
        </div>

        <div className="hidden md:flex flex-wrap pt-[30px] md:pt-[60px]">
          <div className="w-full lg:px-[0px]">
            <ul
              className="onsite-nav-tabs" role="tablist">
              {TABS_ONSITE_LIST.map((tab) => {
                const { id, title, Icon, tabIndex } = tab

                return (
                  <li key={id} onClick={() => isClickAble ? setClickTab(tabIndex) : undefined}>
                    <a data-toggle="tab" role="tablist">
                      <span>{Icon}</span>
                      <span className='title'>{title}</span>
                    </a>

                    {activeTabId === id ? (
                      <motion.div transition={{ duration: 0.4 }} className="bg-current-tab" layoutId="bg-current-tab" />
                    ) : null
                    }
                  </li>
                )
              })}
            </ul>

            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab.id}
                layout
                layoutId={activeTab.id}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <TabContent currentContent={activeTab} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className='md:hidden block'>
          <Slider {...settings}>
            {TABS_ONSITE_LIST.map((tab) => {
              const { id } = tab
              return (
                <TabContent key={id} currentContent={tab} />
              )
            })}
          </Slider>
        </div>

        <div id='pricePlan' />
      </div>
    </section>
  )
}