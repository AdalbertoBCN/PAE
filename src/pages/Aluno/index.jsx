import React from 'react';
import styles from './Aluno.module.css';

const Aluno = () => {
  const aluno = {
    id: 1,
    nome: 'Nome do Aluno',
    email: 'Email',
    imagem: './user.svg',
    cpf: '123.456.789-00',
    rg: '987654321',
  };

  const handleChangePassword = () => {
    // Lógica para alterar a senha do aluno
  };

  const handleRenewEnrollment = () => {
    // Lógica para renovar a matrícula do aluno
  };

  const handleDownloadDocument = (documentName) => {
    // Lógica para baixar o documento selecionado
  };

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img src={aluno.imagem} alt={aluno.nome} className={styles.avatar} />
        <h2 className={styles.nome}>{aluno.nome}</h2>
        <p className={styles.email}>{aluno.email}</p>
      </div>
      <div className={styles.documents}>
        <h3>Documentos</h3>
        <p><strong>CPF:</strong> {aluno.cpf}</p>
        <p><strong>RG:</strong> {aluno.rg}</p>
        <div className={styles.documentOptions}>
          <button className={styles.buttonAluno} onClick={() => handleDownloadDocument('Certificado de Matrícula')}>Certificado de Matrícula</button>
          <button className={styles.buttonAluno} onClick={() => handleDownloadDocument('Nada Consta da Biblioteca')}>Nada Consta da Biblioteca</button>
          <button className={styles.buttonAluno} onClick={() => handleDownloadDocument('Nada Consta do CRCA')}>Nada Consta do CRCA</button>
          <button className={styles.buttonAluno} onClick={() => handleDownloadDocument('Nada Consta do AE')}>Nada Consta do AE</button>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.buttonAluno} onClick={handleChangePassword}>Alterar Senha</button>
        <button className={styles.buttonAluno} onClick={handleRenewEnrollment}>Renovar Matrícula</button>
      </div>
    </div>
  );
};

export default Aluno;
