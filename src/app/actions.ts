'use server'
import { revalidatePath } from 'next/cache'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const baseUrl: string = 'http://localhost:3000/'

// Server Action que pega todas as categorias do banco de dados
export async function GetCategories() {
  const Categories = await prisma.category.findMany()

  prisma.$disconnect()

  return Categories
}

// Server Action que cria uma nova categoria no banco de dados
export async function createCategory(formData: FormData) {
  const name = formData.get('name')
  try {
    const res = await fetch(`${baseUrl}api/categories`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({ name }),
    })
    if (!res.ok) {
      throw new Error('não foi possível criar a categoria!')
    }

    const response = await res.json()

    prisma.$disconnect()

    revalidatePath('/dashboard/categories')

    return { success: true, message: response.message }
  } catch (error) {
    return {
      success: false,
      message: 'Ocorreu o seguinte erro ao tentar criar a categoria: ' + error,
    }
  }
}

// Server Action que atualiza o nome de uma categoria
export async function UpdateCategory(formData: FormData) {
  const name = formData.get('name')
  const id = formData.get('id')
  try {
    const res = await fetch(`${baseUrl}api/categories`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({ id, name }),
    })
    if (!res.ok) {
      throw new Error('não foi possível editar a categoria!')
    }

    const response = await res.json()

    prisma.$disconnect()

    revalidatePath('/dashboard/categories')

    return { success: true, message: response.message }
  } catch (error) {
    return {
      success: false,
      message: 'Ocorreu o seguinte erro ao tentar criar a categoria: ' + error,
    }
  }
}

// Server Action que deleta o nome de uma categoria
export async function DeleteCategory(id: string) {
  try {
    const res = await fetch(`${baseUrl}api/categories`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({ id }),
    })

    if (!res.ok) {
      throw new Error('não foi possível deletar a categoria!')
    }

    const response = await res.json()

    prisma.$disconnect()

    revalidatePath('/dashboard/categories')

    return { success: true, message: response.message }
  } catch (error) {
    return {
      success: false,
      message:
        'Ocorreu o seguinte erro ao tentar deletar a categoria: ' + error,
    }
  }
}
