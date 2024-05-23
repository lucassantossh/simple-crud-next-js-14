'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { UpdateCategory } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Dispatch, SetStateAction } from 'react'
import { useToast } from '@/components/ui/use-toast'

type Props = {
  id: string
  setOpen: Dispatch<SetStateAction<boolean>>
}

export default function EditCategoryForm({ id, setOpen }: Props) {
  const { toast } = useToast()
  const handlerUpdate = async (formData: FormData) => {
    const res = await UpdateCategory(formData)
    res?.success === false
      ? toast({ variant: 'destructive', title: `${res.message}` })
      : toast({ variant: 'default', title: `${res.message}` })
  }
  return (
    <form
      className='grid items-start gap-4'
      action={handlerUpdate}
    >
      <div className='grid gap-2'>
        <Label htmlFor='name'>Categoria</Label>
        <Input
          type='text'
          id='name'
          name='name'
        />
        <Input
          type='hidden'
          value={id}
          name='id'
        />
      </div>
      <Button
        type='submit'
        className='bg-blue-900'
        onClick={() => setOpen(false)}
      >
        Salvar mudanças
      </Button>
    </form>
  )
}
