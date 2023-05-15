import styles from './Column.module.css'
import Guide from '../Guide';
function Column({elements,id}) {
  

    return (
      <>
      <div className={styles.Column}id={id}>
        {elements.map(item => <Guide name={item} length={elements.length} key={item}/>)}
      </div>
      </>
    )
  }
  
export default Column