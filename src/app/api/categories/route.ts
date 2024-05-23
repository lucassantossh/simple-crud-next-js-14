import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// Função que cria uma nova categoria no banco de dados
export async function POST(request: NextRequest) {
  const { name } = await request.json()
  try {
    const newCategory = await prisma.category.create({
      data: { name: name as string },
    })

    if (!newCategory) {
      throw new Error('Falha ao tentar cadastrar a categoria :(')
    }

    return NextResponse.json({ message: 'Categoria criada com sucesso :)' })
  } catch (error) {
    return NextResponse.json({ message: `${error}` })
  }
}
// Função que delete uma categoria do banco de dados
export async function DELETE(request: NextRequest) {
  const { id } = await request.json()
  try {
    const DeletedCategory = await prisma.category.delete({
      where: { id: id as string },
    })

    if (!DeletedCategory) {
      throw new Error('Falha ao tentar cadastrar a categoria :(')
    }

    return NextResponse.json({ message: 'Categoria deletada com sucesso :)' })
  } catch (error) {
    return NextResponse.json({
      message: `Ocorreu o seguinte erro: ${error} porque não existe o id: ${id}`,
    })
  }
}
// Função que Edita o nome de uma categoria no banco de dados
export async function PUT(request: NextRequest) {
  const { id, name } = await request.json()
  try {
    const updatedCategory = await prisma.category.update({
      where: { id: id as string },
      data: { name },
    })

    if (!updatedCategory) {
      throw new Error('Não foi possível autalizar a categoria :(')
    }

    return NextResponse.json({ message: 'Categoria atualizada com sucesso :)' })
  } catch (error) {
    return NextResponse.json({
      message: `Ocorreu o seguinte erro: ${error} porque não existe o id: ${id}`,
    })
  }
}
