import styles from './Guide.module.css';
function Guide({ name, length }) {

  return (
    <>
      <div className={styles.Guide} key={name} style={{ height: `calc((100vh - ${(length - 1) * 10}px - 40px)/${length})` }}>
          <div className={styles.titlebar}> 
          <h1 className={styles.title}>{name}</h1>
          <i className={`${styles.btnclose} bi bi-x-lg`}></i>
          </div>
          <div className={styles.content}> 
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur culpa recusandae aliquam ipsam totam, eligendi voluptate sapiente vel repellat aliquid, assumenda laudantium voluptates officia nesciunt doloribus sit itaque velit iure.</p>
          </div>

      </div>
    </>
  )
}

export default Guide
