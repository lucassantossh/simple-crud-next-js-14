import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Dispatch, SetStateAction } from 'react'
import { createCategory } from '@/app/actions'
import { useToast } from '@/components/ui/use-toast'

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>
}
export default function CreateCategoryForm({ setOpen }: Props) {
  const { toast } = useToast()
  const handleCreate = async (formData: FormData) => {
    const res = await createCategory(formData)
    res?.success === false
      ? toast({ variant: 'destructive', title: `${res.message}` })
      : toast({ variant: 'default', title: `${res.message}` })
  }
  return (
    <form
      className='grid items-start gap-4'
      action={handleCreate}
    >
      <div className='grid gap-2'>
        <Label htmlFor='name'>Categoria</Label>
        <Input
          type='text'
          id='name'
          name='name'
        />
      </div>

      <div className='flex justify-start gap-4'>
        <Button
          type='submit'
          className='bg-blue-900 hover:bg-blue-950'
          onClick={() => setOpen(false)}
        >
          criar categoria
        </Button>
        <Button
          type='button'
          onClick={() => setOpen(false)}
          variant={'ghost'}
          className='border'
        >
          Cancelar
        </Button>
      </div>
    </form>
  )
}
