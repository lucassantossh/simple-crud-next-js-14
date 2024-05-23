import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'
import { tasks } from '@/constants-utils'

export default function TasksPage() {
  return (
    <>
      <section className='container mx-auto pt-4 pb-12'>
        <div className='mb-12 mt-6 '>
          <h2 className='text-4xl text-blue-700 font-semibold capitalize w-fit animated-border'>
            Lista de tarefas
          </h2>
        </div>
        <div>
          <Table className='shadow-lg'>
            <TableCaption>Lista de tarefas do sistema.</TableCaption>
            <TableHeader>
              <TableRow className='bg-blue-950 hover:bg-blue-950'>
                <TableHead className='text-stone-50 '>Nome da tarefa</TableHead>
                <TableHead className='text-stone-50'>Descrição</TableHead>
                <TableHead className='text-stone-50 '>Categoria</TableHead>
                <TableHead className='text-stone-50  text-right'>
                  Status
                </TableHead>
                <TableHead className='text-stone-50  text-center'>
                  Ações
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task, index) => (
                <TableRow
                  className={`${
                    index % 2 === 0
                      ? 'bg-stone-100 hover:bg-stone-100'
                      : 'bg-stone-200 hover:bg-stone-200'
                  }`}
                  key={index}
                >
                  <TableCell className='font-medium'>{task.title}</TableCell>
                  <TableCell>{task.description}</TableCell>
                  <TableCell>{task.category}</TableCell>
                  <TableCell
                    className={`text-right 
                    ${task.status === 'Concluída' && 'text-blue-900'}`}
                  >
                    {task.status}
                  </TableCell>
                  <TableCell className='flex gap-3 items-center'>
                    <button className='pointer p-4 hover:text-green-700 text-green-600'>
                      <FaEye size={24} />
                    </button>
                    <button className='pointer p-4 hover:text-blue-700 text-blue-600'>
                      <FaEdit size={24} />
                    </button>
                    <button className='pointer p-4 hover:text-red-700 text-red-600'>
                      <FaTrash size={24} />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  )
}

// import TasksTable from '@/components/TasksTable'
// import Link from 'next/link'
// import { IoIosAddCircleOutline } from 'react-icons/io'

// export interface ITask {
//   id: number
//   title: string
//   description: string
//   developmentStatus: string
//   createdAt: string
//   updatedAt: string
// }

// export interface TasksApiResponse {
//   tasks: ITask[]
// }

// export default async function TasksPage() {
//   const res = await fetch('http://localhost:3000/api/tasks', {
//     next: {
//       tags: ['tasks'],
//     },
//   })
//   const data: TasksApiResponse = await res.json()
//   const tasks = data.tasks

// return (
// <section className='container mx-auto'>
//   <header className='mt-8 mb-4 flex justify-between items-center w-full'>
//     <h2 className='text-4xl font-bold text-blue-700 capitalize pb-2 w-fit animated-border'>
//       gerencie suas tarefas
//     </h2>
//     <Link
//       href={'/dashboard/tasks/create-task'}
//       className='flex gap-4 items-center py-2 px-4 border border-green-300 rounded-md hover:bg-green-50'
//     >
//       <IoIosAddCircleOutline
//         size={32}
//         color='green'
//       />
//       <span className='text-green-600'>Adicionar tarefa</span>
//     </Link>
//   </header>
//   {!tasks || tasks.length === 0 ? (
//     <div className='text-center py-4'>Nenhuma tarefa encontrada.</div>
//   ) : (
//     <TasksTable tasks={tasks} />
//   )}
// </section>
//   )
// }
