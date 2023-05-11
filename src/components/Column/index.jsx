import './style.css'
import Guide from '../Guide';
function Column({elements,id}) {
  

    return (
      <>
      <div className={`Column`} id={id}>
        {elements.map(item => <Guide name={item} length={elements.length} key={item}/>)}
      </div>
      </>
    )
  }
  
export default Column