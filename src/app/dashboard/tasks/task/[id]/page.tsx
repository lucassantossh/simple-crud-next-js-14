import DialogueBoxDeleteTask from '@/components/DialogueBoxDeleteTask'
import { ITask } from '../../page'
// import { revalidateTag } from 'next/cache'
interface ITaskType {
  task: ITask
}
export default async function TaskPage({ params }: { params: { id: string } }) {
  const id = Number(params.id)

  const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
    next: {
      tags: ['tasks'],
    },
  })
  const data: ITaskType = await res.json()

  const task = data.task

  return (
    <section className='container mx-auto'>
      <header className='flex justify-between gap-8 py-8 items-center max-w-fit'>
        <h2>{task.title}</h2>
        <DialogueBoxDeleteTask id={id} />
      </header>
    </section>
  )
}
