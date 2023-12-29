'use client'
import { LETS_TALK, HEADER_LINKS } from '@/constants';
import { DrawerProps } from '@/interfaceTypes';
import { CrossICon, HeaderLogo } from '@/svg';
import Link from 'next/link';
import React, { FC, MouseEvent, useEffect } from 'react'
import { Button } from '../Button';
import { handleClickLink, openPopupWidget } from '@/utils';

export const Drawer: FC<DrawerProps> = ({ isOpen, setIsOpen }) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>, linkId: string, hasSection: boolean) => {
    hasSection && handleClickLink(event, linkId)
    setIsOpen(false)
  }

  useEffect(() => {
    document.querySelector('body')?.classList.add('overflow-hidden')

    return (() => {
      document.querySelector('body')?.classList.remove('overflow-hidden')
    })
  }, [])

  return (
    <div className="max-w-lg pb-10 flex flex-col space-y-6 overflow-auto h-full">
      <div className="px-[30px] flex flex-col items-start gap-[25px] mt-[20px]">
        <div className='flex w-full justify-between items-start'>
          <Link href="/" className='mb-[15px] w-[143px] h-[29]'>
            <HeaderLogo />
          </Link>

          <button onClick={() => { setIsOpen(false) }}><CrossICon /></button>
        </div>

        {HEADER_LINKS.map((link) => (
          <Link onClick={(event) => handleClick(event, link.dat, link.hasSection)}
            className="text-[15px] uppercase text-AvalonMedium" title={link.title} key={link.id} href={link.dat || ''}>
            {link.title}
          </Link>
        ))}

        <div className="flex flex-col items-start  gap-[25px]">
          <Link target='_blank' href="https://portal.operator.work/login" className="text-[15px] uppercase text-primary text-AvalonBold">Login</Link>

          <Button buttonText={LETS_TALK} onClick={() => {
            document?.getElementById('letsTalk')?.scrollIntoView({ behavior: 'smooth' })
            setIsOpen(false)
            openPopupWidget(true, true, true)
          }}
          />
        </div>
      </div>
    </div>
  )
}