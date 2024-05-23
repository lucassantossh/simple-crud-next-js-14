'use client'
import React from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { Toast } from './ui/toast'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
interface ToastProps {
  title: string
  description: string
  status: 'success' | 'error'
}
export default function FormCreateTask() {
  const formSchema = z.object({
    title: z
      .string()
      .min(6, { message: 'O título deve ter no mínimo 6 caractéres' })
      .max(80, {
        message:
          'Você não pode exeder o número máximo de caractéres para o título que é de 80',
      }),
    description: z
      .string()
      .min(6, { message: 'A descrição deve ter no mínimo 6 caractéres' }),
    developpementStatus: z.string(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      developpementStatus: 'em andamento',
    },
  })

  const route = useRouter()

  const { toast } = useToast()

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    try {
      const res = await fetch('http://localhost:3000/api/tasks', {
        method: 'POST',
        body: JSON.stringify(values),
      })
      const response = await res.json()
      if (res.ok) {
        toast({
          title: 'Sucesso!',
          description: `${
            response.message || 'A tarefa foi criada com sucesso'
          }`,
        })
      } else {
        toast({
          title: 'Erro',
          description: `${
            response.ErrorMessage || 'Houve um erro ao criar a tarefa.'
          }`,
        })
        throw new Error('Falha na requisição')
      }

      route.push('/dashboard/tasks')
      // Redirecionar para a rota /dashboard/tasks
      // revalidatePath('dashboard/tasks', 'page')
    } catch (error) {
      console.log(`houve um erro: ${error}`)
    }
    // ✅ This will be type-safe and validated.
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='bg-gray-50 max-w-lg p-8 rounded-lg shadow-lg mx-auto'
      >
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder='título'
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Input
                  placeholder='descrição'
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='developpementStatus'
          render={({ field }) => (
            <FormItem>
              <FormLabel>status</FormLabel>
              <FormControl>
                <Input
                  placeholder='título'
                  disabled
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          className='mt-4 bg-blue-700'
        >
          Submit
        </Button>
      </form>
    </Form>
  )
}
