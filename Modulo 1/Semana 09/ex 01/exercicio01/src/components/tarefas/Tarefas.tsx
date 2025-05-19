import React, { useState } from 'react';
import NovaTarefa from '../novatarefa/NovaTarefa';
import type{ Tarefa } from '../../types/Tarefa';

const Tarefas: React.FC = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  const adicionarTarefa = (tarefa: Tarefa) => {
    setTarefas((prev) => [...prev, tarefa]);
  };

  return (
    <div>
      <h1>Gestão de Tarefas Diárias</h1>
      <NovaTarefa onAdicionar={adicionarTarefa} />

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.descricao} - {tarefa.periodo} - {tarefa.concluida ? 'Concluída' : 'Pendente'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tarefas;
