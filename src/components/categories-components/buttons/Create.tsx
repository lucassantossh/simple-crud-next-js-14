'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useState } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import CreateCategoryForm from '../forms/CreateCategoryForm'

export default function CreateCategoryButton() {
  const [open, setOpen] = useState(false)
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <span className='rounded-xl bg-green-700 hover:bg-green-800 text-white py-2 px-3 cursor-pointer flex gap-3 items-center'>
          <IoIosAddCircle size={32} /> <span>nova categoria</span>
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar nova categoria</DialogTitle>
          <DialogDescription>
            crie uma nova categoria e salve-a nos servidores
          </DialogDescription>
        </DialogHeader>
        <CreateCategoryForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  )
}
