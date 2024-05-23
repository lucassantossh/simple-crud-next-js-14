'use client'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

type Props = {}

export default function SearchCategoryBar({}: Props) {
  const [activeSearch, setActiveSearch] = useState<string | [string | null]>()
  const handleSearch = (formData: FormData) => {
    const searchCategory = formData.get('search-category')
    if (searchCategory === '') {
      setActiveSearch([null])
      return false
    }
    setActiveSearch(searchCategory as string)

    console.log(activeSearch, searchCategory)
  }
  const handleTyping = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setActiveSearch([null])
      return false
    }
    setActiveSearch(event.target.value)
    console.log(activeSearch)
  }
  return (
    <form
      className='w-full max-w-md'
      action={handleSearch}
    >
      <label
        htmlFor='searh-category'
        className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
      >
        Pesquisar a categoria
      </label>
      <div className='relative'>
        <input
          onChange={(e) => handleTyping(e)}
          type='search'
          id='search-category'
          name='search-category'
          placeholder='pesquisar categoria...'
          className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />

        <button
          type='submit'
          className='flex gap-2 items-center text-stone-950 absolute end-2.5 bottom-2.5 bg-transparent border border-stone-600 hover:bg-blue-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          <span className='lg:block hidden'>pesquisar</span>
          <FaSearch size={16} />
        </button>
      </div>
    </form>
  )
}
