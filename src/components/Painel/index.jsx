import { useState, useEffect } from 'react';
import Column from '../Column'
import Guide from '../Guide'
import './style.css'

function Painel() {
  const [column01, setColumn01] = useState(['Notas']);
  const [column02, setColumn02] = useState(['Diciplinas']);
  const [column03, setColumn03] = useState(['Avaliações']);


  useEffect(() => {
    const exit = document.querySelectorAll('.titlebar .exit');
    const columns = document.querySelectorAll(".Column");
    document.addEventListener("dragstart", (e) => {
      e.target.classList.add("dragging");
    });

    document.addEventListener("dragend", (e) => {
      e.target.classList.remove("dragging");
      const elementBelow = document.elementFromPoint(e.clientX, e.clientY);

      if ((elementBelow.id == 'C01' || elementBelow.parentElement.id == 'C01')) {
        setColumn01((prev) => {
          if (prev.includes(e.target.innerText))
            return prev;

          return [...prev, e.target.innerText]
        });
      }

      if ((elementBelow.id == 'C02' || elementBelow.parentElement.id == 'C02')) {
        setColumn02((prev) => {
          if (prev.includes(e.target.innerText))
            return prev;

          return [...prev, e.target.innerText]
        });
      }

      if ((elementBelow.id == 'C03' || elementBelow.parentElement.id == 'C03')) {
        setColumn03((prev) => {
          if (prev.includes(e.target.innerText))
            return prev;

          return [...prev, e.target.innerText]
        });
      }


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

        if (!!coluna && coluna.id == 'C01') {
          setColumn01(prev => {
            if (prev.length > 1)
              return prev.filter((e) => e !== title);
            return prev;
          });
        }
        else if (!!coluna && coluna.id == 'C02') {
          setColumn02(prev => {
            if (prev.length > 1)
              return prev.filter((e) => e !== title);
            return prev;
          });
        }
        else if (!!coluna && coluna.id == 'C03') {
          setColumn03(prev => {
            if (prev.length > 1)
              return prev.filter((e) => e !== title);
            return prev;
          });

        }

      })


    })


  }, [column01, column02, column03]);

  return (
    <>
      <div className='painel'>
        <Column elements={column01} key='Column01' id={'C01'} />
        <Column elements={column02} key='Column02' id={'C02'} />
        <Column elements={column03} key='Column03' id={'C03'} />
      </div>
    </>
  )
}

export default Painel
