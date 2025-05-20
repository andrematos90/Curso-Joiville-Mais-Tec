import { useState, useEffect } from 'react';
import NovaTarefa from '../novatarefa/NovaTarefa';
import type { Tarefa } from '../../types/Tarefa';
import PercentualConclusao from '../percentual/PercentualConclusao';

const STORAGE_KEY = 'minhas-tarefas';

const Tarefas = () => {
 const [tarefas, setTarefas] = useState<Tarefa[]>(() => {
  const tarefasSalvas = localStorage.getItem(STORAGE_KEY);
  if (tarefasSalvas) {
    try {
      const tarefasParseadas: Tarefa[] = JSON.parse(tarefasSalvas);
      return tarefasParseadas;
    } catch (e) {
      console.error('Erro ao fazer parse das tarefas salvas:', e);
    }
  }
  return [];
});

  
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem(STORAGE_KEY);
    if (tarefasSalvas) {
      try {
        const tarefasParseadas: Tarefa[] = JSON.parse(tarefasSalvas);
         console.log('[CARREGAR] JSON.parse:', tarefasParseadas);
        setTarefas(tarefasParseadas);
      } catch (e) {
        console.error('Erro ao carregar tarefas do localStorage', e);
      }
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas));
  }, [tarefas]);

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

      <PercentualConclusao
        totalTarefas={tarefas.length}
        tarefasCompletas={quantidadeConcluidas}
      />

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
                    <span
                      className={tarefa.concluida ? 'tarefa-concluida' : ''}
                      style={{ marginLeft: '8px' }}
                    >
                      {tarefa.descricao}
                    </span>
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
