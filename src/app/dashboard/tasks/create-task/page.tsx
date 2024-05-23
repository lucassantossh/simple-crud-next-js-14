import FormCreateTask from '@/components/Form-Create-Task'
import React from 'react'

export default function CreateTask() {
  return (
    <section className='container mx-auto'>
      <div className='mt-8 mb-4'>
        <h2>Crie uma nova tarefa</h2>
      </div>
      <div className='mt-8 mb-4 bg-stone-700 py-4'>
        <FormCreateTask />
      </div>
    </section>
  )
}
