import { useState } from 'react'
import { useEffect } from 'react'
import Notas from '../Notas'
import Painel from '../Painel'
import ProxEvent from '../ProxEventos'
import './style.css'

function Content() {
  function RenderComp() {
    if (localStorage.CurrentHrefPae === '/painel') {
      return <Painel />;
    } else if (localStorage.CurrentHrefPae === '/notas') {
      return <Notas />;
    }
    else if (localStorage.CurrentHrefPae === '/eventos') {
      return <ProxEvent />;
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
