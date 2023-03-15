import React from 'react'
import Image from 'next/image'
import {
  HomeIcon, CheckBadgeIcon, CircleStackIcon, BoltIcon, MagnifyingGlassIcon, UserIcon

} from '@heroicons/react/24/outline'
import HeaderItems from './HeaderItems'

function Header() {
  return (
    <header className=' flex flex-col sm:flex-row sm:justify-between m-5  p-2'>

      <div className=' flex-grow flex m-5 justify-evenly max-w-2xl'>
        <HeaderItems Icon={HomeIcon} title='HOME' />
        <HeaderItems Icon={BoltIcon} title='TRENDING' />
        <HeaderItems Icon={CheckBadgeIcon} title='VERIFIED' />
        <HeaderItems Icon={CircleStackIcon} title='COLLECTIONS' />
        <HeaderItems Icon={MagnifyingGlassIcon} title='SEARCH' />
        <HeaderItems Icon={UserIcon} title='ACCOUNT' />
      </div>

      <Image alt='Logo' src='/assets/huluLogo.png' className=' object-contain self-center' width={100} height={100} />

    </header>
  )
}

export default Header