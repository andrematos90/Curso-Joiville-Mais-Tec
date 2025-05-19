import { useState } from 'react';
import NovaTarefa from '../novatarefa/NovaTarefa';
import type { Tarefa } from '../../types/Tarefa';

const Tarefas = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  const adicionarTarefa = (tarefa: Omit<Tarefa, 'id' | 'concluida'>) => {
    const nova: Tarefa = {
      id: Date.now(),
      concluida: false,
      ...tarefa
    };
    setTarefas(prev => [...prev, nova]);
  };

  const quantidadeConcluidas = tarefas.filter(t => t.concluida).length;

  const tarefasPorPeriodo = (periodo: Tarefa['periodo']) =>
    tarefas.filter(t => t.periodo === periodo);

  return (
    <div>
      <h1>Gestão de Tarefas Diárias</h1>
      <NovaTarefa onAdicionar={adicionarTarefa} />

      <p>Tarefas concluídas: {quantidadeConcluidas}</p>

      <div style={{ display: 'flex', gap: '20px' }}>
        {['Manhã', 'Tarde', 'Noite'].map(periodo => (
          <div key={periodo} style={{ flex: 1 }}>
            <h2>{periodo}</h2>
            <ul>
              {tarefasPorPeriodo(periodo as Tarefa['periodo']).map(tarefa => (
                <li key={tarefa.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={tarefa.concluida}
                      onChange={() => {
                        setTarefas(prev =>
                          prev.map(t =>
                            t.id === tarefa.id ? { ...t, concluida: !t.concluida } : t
                          )
                        );
                      }}
                    />
                    {tarefa.descricao}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tarefas;
