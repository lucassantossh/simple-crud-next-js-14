export interface ITask {
  id: string
  title: string
  description: string
  status: 'Em andamento' | 'Concluída'
  category: 'Tarefas de casa' | 'Tarefas de trabalho'
}

export const tasks: Array<ITask> = [
  {
    id: '1',
    title: 'Lavar o carro',
    description: 'Lavar o carro hoje as 9 horas da noite',
    status: 'Em andamento',
    category: 'Tarefas de casa',
  },
  {
    id: '2',
    title: 'Meeting com cliente',
    description: 'Reunião com meu cliente no restaurante as 5 da tarde',
    status: 'Em andamento',
    category: 'Tarefas de trabalho',
  },
  {
    id: '3',
    title: 'Lavar a roupa',
    description: 'Lavar a roupa hoje as 3 horas da tarde',
    status: 'Concluída',
    category: 'Tarefas de casa',
  },
  {
    id: '4',
    title: 'Organizar a despensa',
    description:
      'Fazer uma revisão completa da despensa, descartar itens vencidos ou em mau estado, e organizar os produtos por categoria.',
    status: 'Concluída',
    category: 'Tarefas de casa',
  },
  {
    id: '5',
    title: 'Limpar a geladeira',
    description:
      'Descartar alimentos estragados, organizar os itens por tipo e prateleira, e limpar o interior e exterior da geladeira.',
    status: 'Concluída',
    category: 'Tarefas de casa',
  },
  {
    id: '6',
    title: 'Lavar as roupas de cama',
    description:
      'Trocar lençóis, fronhas e colchas, lavá-los na máquina e colocá-los para secar ou passar.',
    status: 'Concluída',
    category: 'Tarefas de casa',
  },
  {
    id: '7',
    title: 'Aspirar e passar pano no chão',
    description:
      'Aspirar toda a casa, incluindo tapetes e cantos, e passar pano úmido no chão para remover poeira e sujeira.',
    status: 'Concluída',
    category: 'Tarefas de casa',
  },
  {
    id: '8',
    title: 'Organizar o armário',
    description:
      'Reorganizar as roupas no armário por tipo, cor ou estação, descartar peças que não servem mais e doar roupas em bom estado.',
    status: 'Concluída',
    category: 'Tarefas de casa',
  },
  {
    id: '9',
    title: 'Limpar o banheiro',
    description:
      'Limpar o vaso sanitário, pia, chuveiro ou banheira, espelho e chão, utilizando produtos de limpeza adequados.',
    status: 'Concluída',
    category: 'Tarefas de casa',
  },
  {
    id: '10',
    title: 'Lavar a louça',
    description:
      'Lavar todos os pratos, copos, talheres e utensílios de cozinha após as refeições, organizando-os nos armários após secarem.',
    status: 'Concluída',
    category: 'Tarefas de casa',
  },
  {
    id: '11',
    title: 'Regar as plantas',
    description:
      'Regar todas as plantas da casa, tanto internas quanto externas, verificando se precisam de água e ajustando a frequência de rega.',
    status: 'Concluída',
    category: 'Tarefas de casa',
  },
  {
    id: '12',
    title: 'Tirar o lixo',
    description:
      'Retirar o lixo das lixeiras da casa e colocá-lo nos sacos correspondentes para coleta seletiva.',
    status: 'Concluída',
    category: 'Tarefas de casa',
  },
  {
    id: '13',
    title: 'Fazer a cama',
    description:
      'Arrumar as camas com lençóis, fronhas e colchas, ajustando os travesseiros e deixando-as com aparência arrumada.',
    status: 'Concluída',
    category: 'Tarefas de casa',
  },
  {
    id: '14',
    title: 'Responder e-mails',
    description:
      'Revisar e responder todos os e-mails recebidos, priorizando os mais urgentes e importantes.',
    status: 'Concluída',
    category: 'Tarefas de trabalho',
  },
]
