'use client'
import { DeleteCategory } from '@/app/actions'
// chadcn/ui imports
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { useToast } from '@/components/ui/use-toast'
import React from 'react'
import { FaTrash } from 'react-icons/fa'

export default function DeleteButton({ id }: { id: string }) {
  const { toast } = useToast()
  const handleDelete = async (id: string) => {
    const res = await DeleteCategory(id)
    res?.success === false
      ? toast({ variant: 'destructive', title: `${res.message}` })
      : toast({ variant: 'default', title: `${res.message}` })
  }
  return (
    <AlertDialog>
      {/* Botão que abre a caixa de diálogo */}
      <AlertDialogTrigger>
        <span className='cursor-pointer'>
          <FaTrash
            size={24}
            color='red'
          />
        </span>
      </AlertDialogTrigger>
      {/* Conteúdo da caixa de diálogo */}
      <AlertDialogContent>
        {/* Cabeçalho da caixa de diálogo */}
        <AlertDialogHeader>
          <AlertDialogTitle>
            Você tem certeza que deseja realizar esta ação?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. Isto irá apagar permanentemente
            esta categoria dos servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>
        {/* Footer com os botões de ações da caixa de diálogo */}
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDelete(id)}>
            Excluir
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
