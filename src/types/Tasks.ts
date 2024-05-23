export interface ITask {
  title: string
  description: string
  developpementStatus: 'em andamento' | 'concluído'
}

export type Tasks = Array<ITask>
