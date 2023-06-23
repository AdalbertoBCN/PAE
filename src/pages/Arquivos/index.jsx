import React from 'react';
import styles from './Arquivos.module.css';

const Arquivos = () => {
  // Arquivos simulados
  const arquivos = [
    { nome: 'Trabalho 1', tamanho: 10 },
    { nome: 'Prova 2', tamanho: 5 },
    { nome: 'Apresentação Final', tamanho: 100 },
  ];

  // Cálculo do espaço utilizado
  const espacoUtilizado = arquivos.reduce((total, arquivo) => total + arquivo.tamanho, 0);

  // Cálculo do espaço total disponível
  const espacoTotal = 200;

  // Cálculo da porcentagem de espaço utilizado
  const porcentagemUtilizada = (espacoUtilizado / espacoTotal) * 100;

  const handleDownload = (nomeArquivo) => {
    // Lógica para download do arquivo
    alert(`Download do arquivo ${nomeArquivo}`);
  };

  const handleExcluir = (nomeArquivo) => {
    // Lógica para exclusão do arquivo
    alert(`Exclusão do arquivo ${nomeArquivo}`);
  };

  const progressBarStyle = {
    width: `${porcentagemUtilizada}%`,
    backgroundColor: porcentagemUtilizada >= 60 ? '#dc3545' : '#28a745',
    transition: 'width 0.3s ease-in-out',
  };

  return (
    <div className={styles.arquivosContainer}>
      <h2>Arquivos Privados</h2>
      <div className={styles.espacoUtilizado}>
        <div className={styles.progressBar} style={progressBarStyle}>
          <span className={styles.progressBarText}>{Math.round(porcentagemUtilizada)}%</span>
        </div>
        <div className={styles.espacoInfo}>
          <span>{espacoUtilizado}MB</span> de {espacoTotal}MB utilizados
        </div>
      </div>
      <ul className={styles.arquivosList}>
        {arquivos.map((arquivo, index) => (
          <li key={index} className={styles.arquivoItem}>
            <span>{arquivo.nome}</span>
            <span className={styles.tamanho}>{arquivo.tamanho}MB</span>
            <div>
              <button className={styles.baixarButton} onClick={() => handleDownload(arquivo.nome)}>
                Baixar
              </button>
              <button className={styles.excluirButton} onClick={() => handleExcluir(arquivo.nome)}>
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Arquivos;
