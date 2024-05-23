'use client'
import { useToast } from '@/components/ui/use-toast'
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
import { Button } from '@/components/ui/button'
import { FaTrash } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
export default function DialogueBoxDeleteTask({ id }: { id: number }) {
  const { toast } = useToast()
  const router = useRouter()
  async function handleDelete() {
    try {
      const res: Response = await fetch(
        `http://localhost:3000/api/tasks/${id}`,
        {
          method: 'DELETE',
          body: JSON.stringify(id),
        }
      )
      const response = await res.json()

      res.ok
        ? toast({
            title: 'Success',
            description: `${response.message}`,
          })
        : toast({
            title: 'Error',
            description: `${response.ErrorMessage}`,
            variant: 'destructive',
          })
      router.push('/dashboard/tasks')
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred',
      })
    }
  }
  return (
    <AlertDialog>
      {/* Icone da opção de exclusão que, ao clicado, abre a caixa de diálogo pedindo a confirmação de exclusão da tarefa */}
      <AlertDialogTrigger asChild>
        <Button className='bg-red-700'>
          <FaTrash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          {/* Título da caixa de diálogo */}
          <AlertDialogTitle>
            Você tem certeza que deseja excluir esta tarefa?
          </AlertDialogTitle>
          {/* Descrição da caixa de dialogo */}
          <AlertDialogDescription>
            Esta ação não pode ser refeita. Isto vai apagar esta tarefa
            permanentemente e remover ela do banco de dados.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* Botão que cancela a exclusão da tarefa */}
          <AlertDialogCancel>cancelar</AlertDialogCancel>
          {/* Botão de que deleta a tarefa de vez */}
          <AlertDialogAction onClick={handleDelete}>sim</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
