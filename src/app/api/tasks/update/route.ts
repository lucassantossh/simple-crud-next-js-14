import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const id = req.nextUrl
  try {
    console.log(id)
    return NextResponse.json({ id })
  } catch (error) {
    console.log('erro: ' + error)
    return NextResponse.json({ message: 'não funcionou' })
  }
}

//   const updateUser = await prisma.task.update({
//     where: {
//       id
//     },
//     data: {
//       name: 'Viola the Magnificent',
//     },
//   })
