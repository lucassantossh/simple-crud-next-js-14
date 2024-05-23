import Link from 'next/link'
import React from 'react'
import NavigationBar from './NavigationBar'

export default function Header() {
  return (
    <header className='bg-stone-700'>
      <div className='flex justify-between items-center py-4 container mx-auto'>
        <Link
          href={'/'}
          className='text-stone-50'
        >
          Logo
        </Link>
        <NavigationBar />
      </div>
    </header>
  )
}
