'use client'
// chadcn/ui imports
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { useState } from 'react'
// React-icons imports
import { FaEdit } from 'react-icons/fa'
import EditCategoryForm from '../forms/UpdateCategoryForm'
// Form to edit component

// Button component
export default function EditButton({ id }: { id: string }) {
  const [open, setOpen] = useState(false)
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <span className='cursor-pointer'>
          <FaEdit
            size={24}
            color='blue'
          />
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar categoria</DialogTitle>
          <DialogDescription>
            Faça alteração na categoria a seguir. Clique para salvar se tiver
            certeza da modificação.
          </DialogDescription>
        </DialogHeader>
        <EditCategoryForm
          id={id}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  )
}
