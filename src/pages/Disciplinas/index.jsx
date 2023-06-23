import React, { useState } from 'react';
import styles from './Disciplinas.module.css';

const Disciplinas = () => {
  const [expandedDisciplina, setExpandedDisciplina] = useState(null);

  const disciplinas = [
    {
      nome: 'Estrutura de Dados',
      nota: 7.0,
      frequencia: 80,
      detalhes: [
        { atividade: 'Prova 1', nota: 7.5 },
        { atividade: 'Prova 2', nota: 7.0 },
        { atividade: 'Trabalho 1', nota: 7.2 },
        { atividade: 'Trabalho 2', nota: 7.8 },
      ],
    },
    {
      nome: 'Extensão 2',
      nota: 6.8,
      frequencia: 75,
      detalhes: [
        { atividade: 'Prova 1', nota: 6.5 },
        { atividade: 'Prova 2', nota: 6.8 },
        { atividade: 'Trabalho 1', nota: 6.7 },
        { atividade: 'Trabalho 2', nota: 6.9 },
      ],
    },
    {
      nome: 'Sistemas Operacionais',
      nota: 8.2,
      frequencia: 92,
      detalhes: [
        { atividade: 'Prova 1', nota: 8.0 },
        { atividade: 'Prova 2', nota: 8.5 },
        { atividade: 'Trabalho 1', nota: 8.2 },
        { atividade: 'Trabalho 2', nota: 8.3 },
      ],
    },
    {
      nome: 'Script Web',
      nota: 6.5,
      frequencia: 78,
      detalhes: [
        { atividade: 'Prova 1', nota: 6.3 },
        { atividade: 'Prova 2', nota: 6.7 },
        { atividade: 'Trabalho 1', nota: 6.5 },
        { atividade: 'Trabalho 2', nota: 6.2 },
      ],
    },
    {
      nome: 'Modelagem de Banco de Dados',
      nota: 6.2,
      frequencia: 85,
      detalhes: [
        { atividade: 'Prova 1', nota: 6.0 },
        { atividade: 'Prova 2', nota: 5.8 },
        { atividade: 'Trabalho 1', nota: 8.5 },
        { atividade: 'Trabalho 2', nota: 7.2 },
      ],
    },
  ];
  
  

  const handleDisciplinaClick = (index) => {
    if (expandedDisciplina === index) {
      setExpandedDisciplina(null);
    } else {
      setExpandedDisciplina(index);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Disciplinas</h1>
      <table className={styles.disciplinasTable}>
        <thead>
          <tr>
            <th>Disciplina</th>
            <th>Nota</th>
            <th>Frequência</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map((disciplina, index) => (
            <React.Fragment key={index}>
              <tr onClick={() => handleDisciplinaClick(index)} className={styles.disciplinaRow}>
                <td>{disciplina.nome}</td>
                <td>{disciplina.nota}</td>
                <td>{disciplina.frequencia}%</td>
              </tr>
              {expandedDisciplina === index && (
                <tr>
                  <td colSpan={3} className={styles.detalhesRow}>
                    <ul className={styles.detalhesList}>
                      {disciplina.detalhes.map((detalhe, detalheIndex) => (
                        <li key={detalheIndex}>
                          {detalhe.atividade}: {detalhe.nota}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Disciplinas;
