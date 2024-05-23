'use client'
import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import EditButton from '@/components/categories-components/buttons/Edit'
import DeleteButton from '@/components/categories-components/buttons/Delete'

interface ICategory {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
}

interface Props {
  categories: Array<ICategory>
}

export default function CategoriesList({ categories }: Props) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = categories.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(categories.length / itemsPerPage)
  return (
    <div className='flex justify-center items-center flex-col py-8'>
      <Table className='max-w-xl mx-auto'>
        <TableHeader>
          <TableRow>
            <TableHead>Categoria</TableHead>
            <TableHead className='text-right'>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((category, index) => (
            <TableRow
              key={index}
              className={`border-b border-stone-700`}
            >
              <TableCell className=''>{category.name}</TableCell>
              <TableCell className='flex gap-3 items-center justify-end'>
                <EditButton id={category.id} />
                <DeleteButton id={category.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className='flex justify-center items-center mt-4'>
        <button
          onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
          disabled={currentPage === 1}
          className='mx-2 px-4 py-2 bg-gray-200 rounded disabled:opacity-50'
        >
          Anterior
        </button>
        <span>
          {currentPage} de {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((page) => Math.min(page + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className='mx-2 px-4 py-2 bg-gray-200 rounded disabled:opacity-50'
        >
          Próximo
        </button>
      </div>
    </div>
  )
}
