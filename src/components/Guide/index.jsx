import styles from './Guide.module.css';

function Guide({ name, length }) {
  const guideContent = {
    Notas: 'Aqui estão as suas notas.',
    Disciplinas: 'Aqui estão as suas disciplinas.',
    Noticias: 'Aqui estão as últimas notícias.',
    Calendario: 'Aqui está o calendário.',
    Avaliacoes: 'Aqui estão as avaliações.',
    Chat: 'Aqui está o chat.'
  };

  const content = guideContent[name] || '';

  return (
    <>
      <div
        className={styles.Guide}
        key={name}
        style={{ height: `calc((100vh - ${(length - 1) * 10}px - 40px)/${length})` }}
      >
        <div className={styles.titlebar}>
          <h1 className={styles.title}>{name}</h1>
          <i className={`${styles.btnclose} bi bi-x-lg close`}></i>
        </div>
        <div className={styles.content}>
          <p className="text-white">{content}</p>
        </div>
      </div>
    </>
  );
}

export default Guide;
