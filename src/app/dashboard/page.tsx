import Link from 'next/link'
import React from 'react'

interface IDashboardCard {
  label: string
  path: string
  title: string
  description: string
}

type DasboardCardsType = Array<IDashboardCard>

export default function DashboardPage() {
  const DashboardCards: DasboardCardsType = [
    {
      label: 'Categorias',
      path: '/dashboard/categories',
      title: 'Gerencie as categorias do sistema',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
      veritatis perspiciatis similique aspernatur in magnam officiis
      quisquam fuga. Corporis, nisi.`,
    },
    {
      label: 'usuários',
      path: '/dashboard/users',
      title: 'usuários',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
      veritatis perspiciatis similique aspernatur in magnam officiis
      quisquam fuga. Corporis, nisi.`,
    },
    {
      label: 'equipes',
      path: '/dashboard/teams',
      title: 'equipes',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
      veritatis perspiciatis similique aspernatur in magnam officiis
      quisquam fuga. Corporis, nisi.`,
    },
    {
      label: 'clientes',
      path: '/dashboard/clientes',
      title: 'clientes',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
      veritatis perspiciatis similique aspernatur in magnam officiis
      quisquam fuga. Corporis, nisi.`,
    },
  ]
  return (
    <>
      <section className='container mx-auto my-3 bg-stone-100 rounded-lg pt-4 pb-12'>
        <div className='mt-8 mb-4'>
          <h2 className='text-4xl mx-auto font-bold text-blue-700 capitalize pb-2 mb-8 w-fit animated-border'>
            Página inicial do dashboard
          </h2>
          <p className='tracking-wider text-stone-950 max-w-4xl mx-auto'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            corporis maxime autem porro sed esse exercitationem soluta adipisci
            quia provident molestiae, optio possimus voluptatum reprehenderit
            excepturi, officia pariatur sint unde. Dolor quae vel iusto?
          </p>
        </div>
      </section>
      <section className='container mx-auto bg-stone-100 rounded-lg pt-4 pb-12 '>
        <div className='mb-12'>
          <h2 className='text-2xl font-black'>
            Você encontra aqui tudo que precisa para gerenciar seu sistema
          </h2>
        </div>
        <div className='my-3 grid grid-cols-2 gap-4'>
          {DashboardCards.map((card, index) => (
            <div
              key={index}
              className='p-4 rounded-lg bg-stone-300'
            >
              <h3 className='font-bold mb-4 capitalize'>{card.title}</h3>
              <p className='mb-8'>{card.description}</p>
              <Link
                className='pt-2 pb-1 border-b border-blue-700 hover:border-stone-50'
                href={card.path}
              >
                {card.label}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
