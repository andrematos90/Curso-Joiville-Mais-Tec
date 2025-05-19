import React, { useState } from 'react';
import type { Periodo, Tarefa } from '../../types/Tarefa';

interface NovaTarefaProps {
  onAdicionar: (tarefa: Tarefa) => void;
}

const NovaTarefa: React.FC<NovaTarefaProps> = ({ onAdicionar }) => {
  const [descricao, setDescricao] = useState('');
  const [periodo, setPeriodo] = useState<Periodo>('Manhã');

  const adicionarTarefa = () => {
    if (!descricao.trim()) return;

    const novaTarefa: Tarefa = {
      id: Date.now(),
      descricao,
      periodo,
      concluida: false,
    };

    onAdicionar(novaTarefa);
    setDescricao('');
    setPeriodo('Manhã');
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Descrição da tarefa"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <select value={periodo} onChange={(e) => setPeriodo(e.target.value as Periodo)}>
        <option value="Manhã">Manhã</option>
        <option value="Tarde">Tarde</option>
        <option value="Noite">Noite</option>
      </select>

      <button onClick={adicionarTarefa}>Adicionar</button>
    </div>
  );
};

export default NovaTarefa;
