import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { ITask } from '@/app/dashboard/tasks/page'
import Link from 'next/link'

interface Props {
  tasks: ITask[]
}

const TasksTable: React.FC<Props> = ({ tasks }) => {
  return (
    <div className='overflow-auto'>
      <table className='table-auto w-full'>
        <thead>
          <tr className='bg-blue-200'>
            <th className='px-4 py-2'>Título</th>
            <th className='px-4 py-2'>Descrição</th>
            <th className='px-4 py-2'>Status</th>
            <th className='px-4 py-2'>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              <td className='border px-4 py-2'>{task.title}</td>
              <td className='border px-4 py-2'>{task.description}</td>
              <td className='border px-4 py-2'>{task.developmentStatus}</td>
              <td className='border px-4 py-2'>
                <Link
                  href={`/dashboard/tasks/task/${task.id}/edit`}
                  passHref
                >
                  <button className='mr-2'>
                    <FaEdit />
                  </button>
                </Link>
                <Link
                  href={`/dashboard/tasks/task/${task.id}`}
                  passHref
                >
                  <button>
                    <FaTrash />
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TasksTable
