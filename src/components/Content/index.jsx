import { useState } from 'react'
import { useEffect } from 'react'
import Notas from '../Notas'
import Painel from '../Painel'
import './style.css'

function Content() {
  function RenderComp() {
    if (localStorage.CurrentHrefPae === '/painel') {
      return <Painel />;
    } else if (localStorage.CurrentHrefPae === '/diciplinas') {
      return <Notas />;
    }
    return null;
  }

  return (
    <div className='Content'>
      <RenderComp />
    </div>
  );
}

export default Content;
