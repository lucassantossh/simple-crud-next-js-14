import { GetCategories } from '@/app/actions'
import CategoriesHeader from '@/components/categories-components/CategoriasHeader'
import CategoriesList from '@/components/categories-components/CategoriesList'
import React from 'react'

export default async function CategoriesPage() {
  const categories = await GetCategories()
  return (
    <>
      <section className='container mx-auto'>
        <div className='pt-8 pb-12'>
          <h2 className='animated-border text-4xl text-blue-700 font-bold capitalize w-fit pb-1'>
            Categorias
          </h2>
        </div>

        <div className='border border-x-stone-200 rounded-lg shadow-lg shadow-stone-300 mb-12'>
          {categories.length === 0 ? (
            <div>
              <CategoriesHeader />
              <div className='flex justify-center py-4'>
                <p>não temos categorias ainda</p>
              </div>
            </div>
          ) : (
            <div>
              <CategoriesHeader />
              <CategoriesList categories={categories} />
            </div>
          )}
        </div>
      </section>
    </>
  )
}
