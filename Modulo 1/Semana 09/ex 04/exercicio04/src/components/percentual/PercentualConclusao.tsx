import React from 'react';
import './PercentualConclusao.css';

interface PercentualConclusaoProps {
  totalTarefas: number;
  tarefasCompletas: number;
}

const PercentualConclusao: React.FC<PercentualConclusaoProps> = ({ totalTarefas, tarefasCompletas }) => {
  if (totalTarefas === 0) return <p>Nenhuma tarefa cadastrada.</p>;

  const progresso = (tarefasCompletas / totalTarefas) * 100;

  return (
    <div>
      <p>Progresso: {progresso.toFixed(2)}%</p>
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${progresso}%` }}
        />
      </div>
    </div>
  );
};

export default PercentualConclusao;
