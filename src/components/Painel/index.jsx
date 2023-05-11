import { useState, useEffect } from 'react';
import Column from '../Column'
import Guide from '../Guide'
import './style.css'

function Painel() {
  const [column01, setColumn01] = useState(['Notas']);
  const [column02, setColumn02] = useState(['Diciplinas']);
  const [column03, setColumn03] = useState(['Avaliações']);
  const [column04, setColumn04] = useState(['Notícias']);
  const [column05, setColumn05] = useState(['Próximos Eventos']);

  function handleColumnDrop(elementBelow, columnid, setColumn, e) {
    if ((elementBelow.id == columnid || elementBelow.parentElement.id == columnid)) {
      setColumn((prev) => {
        if (prev.includes(e.target.innerText)) {
          return prev;
        }

        return [...prev, e.target.innerText];
      });
    }
  }

  function handleDragEnd(e){
    e.target.classList.remove("dragging");

    const elementBelow = document.elementFromPoint(e.clientX, e.clientY);

    handleColumnDrop(elementBelow, 'C01', setColumn01, e);
    handleColumnDrop(elementBelow, 'C02', setColumn02, e);
    handleColumnDrop(elementBelow, 'C03', setColumn03, e);
    handleColumnDrop(elementBelow, 'C04', setColumn04, e);
    handleColumnDrop(elementBelow, 'C05', setColumn05, e);
  }
  
  document.addEventListener("dragend", handleDragEnd);

  useEffect(() => {
    const exit = document.querySelectorAll('.titlebar .exit');

    const columns = document.querySelectorAll(".Column");

    document.addEventListener("dragstart", (e) => {
      e.target.classList.add("dragging");
    });


    columns.forEach((item) => {
      item.addEventListener("dragover", (e) => {
        item.classList.add("columnover");
      });

      item.addEventListener("dragleave", (e) => {
        item.classList.remove("columnover");
      });

    });


    exit.forEach((item) => {

      item.addEventListener('mouseup', () => {
        let title = item.parentElement.querySelector('h1').innerText;
        let coluna = item.parentElement.parentElement.parentElement;

        function blockExtra(coluna, id, setColumn) {
          const test = (!!coluna && coluna.id == id);
            setColumn(prev => {
              if (prev.length > 1)
                return prev.filter((item) => item !== title);
              return prev;
            });

            return test; 
        }
        if(blockExtra(coluna,'C01',setColumn01)){}
        else if(blockExtra(coluna,'C02',setColumn02)){}
        else if(blockExtra(coluna,'C03',setColumn03)){}
        else if(blockExtra(coluna,'C04',setColumn04)){}
        else if(blockExtra(coluna,'C05',setColumn05)){}
      })
    })
  }, [column01, column02, column03, column04]);

  return (
    <>
      <div className='painel'>
        <Column elements={column01} key='Column01' id={'C01'} />
        <Column elements={column02} key='Column02' id={'C02'} />
        <Column elements={column03} key='Column03' id={'C03'} />
        <Column elements={column04} key='Column04' id={'C04'} />
        <Column elements={column05} key='Column05' id={'C05'} />
      </div>
    </>
  )
}

export default Painel
