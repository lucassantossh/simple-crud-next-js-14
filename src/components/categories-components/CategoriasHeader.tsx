import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '../ui/button'
import { FaSearch } from 'react-icons/fa'
import CreateCategoryButton from './buttons/Create'
import SearchCategoryBar from './forms/SearchCategoryBar'
type Props = {}

export default function CategoriesHeader({}: Props) {
  return (
    <header className='rounded-t-lg bg-stone-300 flex justify-between items-center py-2 px-4'>
      <SearchCategoryBar />
      <CreateCategoryButton />
    </header>
  )
}
