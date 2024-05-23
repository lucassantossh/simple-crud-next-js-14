import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { revalidatePath, revalidateTag } from 'next/cache'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    // The variables that this function will use
    const { title, description, developpementStatus } = await req.json()
    // Function who try to create a new task
    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        developmentStatus: developpementStatus,
      },
    })
    // If it fails, it throw an new error in the catch error variable
    if (!newTask) {
      throw new Error('não foi possível criar a tarefa')
    }

    // revalidatePath('/dashboard/task', 'page')
    return NextResponse.json({ message: 'Esta tarefa foi criada com sucesso!' })
  } catch (error) {
    return NextResponse.json({ ErrorMessage: `${error}` })
  }
}

export async function GET() {
  try {
    const tasks = await prisma.task.findMany()
    if (!tasks) {
      return
    }
    revalidateTag('tasks-tag')
    return NextResponse.json({ tasks })
  } catch (error) {
    console.log('ocorreu o seguinte erro: ' + error)
  }
}
