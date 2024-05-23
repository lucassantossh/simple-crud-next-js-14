import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { revalidateTag } from 'next/cache'
const prisma = new PrismaClient()

export async function DELETE(req: NextRequest) {
  const IdParams = req.nextUrl.pathname.split('/').pop()
  try {
    const id = Number(IdParams)
    const task = await prisma.task.findUnique({ where: { id } })
    if (!task) {
      throw new Error('Esta tarefa não existe')
    }
    await prisma.task.delete({ where: { id } })
    // revalidateTag('tasks')
    return NextResponse.json({
      message: `A tarefa de id: ${id} foi deletada com sucesso`,
    })
  } catch (error) {
    return NextResponse.json({
      message: 'Algo deu errado ao tentar deletar a tarefa',
      ErrorMessage: `Here's the ${error}`,
    })
  }
}

export async function GET(req: NextRequest) {
  const IdParams = req.nextUrl.pathname.split('/').pop()
  try {
    const id = Number(IdParams)
    const task = await prisma.task.findUnique({ where: { id } })
    if (!task) {
      return
    }
    return NextResponse.json({ task })
  } catch (error) {
    return NextResponse.json({ ErrorMessage: 'não funcionou', error })
  }
}
