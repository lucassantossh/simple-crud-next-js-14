'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface ILink {
  label: string
  path: string
}

export default function NavigationBar() {
  const pathname = usePathname()

  const Links: Array<ILink> = [
    {
      label: 'início',
      path: '/',
    },
    {
      label: 'dashboard',
      path: '/dashboard',
    },
  ]
  return (
    <nav className='flex gap-4'>
      {Links.map((link, index) => (
        <Link
          key={index}
          href={`${link.path}`}
          className={`font-semibold capitalize px-4 py-2 rounded-sm transition-all text-stone-50 hover:text-stone-200 ${
            pathname === link.path && 'bg-stone-900 transition-all duration-300'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
