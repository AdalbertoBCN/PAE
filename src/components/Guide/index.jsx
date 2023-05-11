import './style.css'
function Guide({name,length}) {

    return (
      <>
      <div className='Guide' key={name} style={{height: `calc((100vh - ${(length-1)*10}px - 40px)/${length})`}}>
        <div className='titlebar'><h1>{name}</h1> <button className='exit'>✖</button></div>

      </div>
      </>
    )
  }
  
export default Guide
  