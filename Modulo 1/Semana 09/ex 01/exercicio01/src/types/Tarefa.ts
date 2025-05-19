export type Periodo = 'Manhã' | 'Tarde' | 'Noite';

export interface Tarefa {
  id: number;
  descricao: string;
  periodo: Periodo;
  concluida: boolean;
}
