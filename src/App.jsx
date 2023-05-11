import { useState, useEffect } from 'react';
import LeftBar from './components/LeftBar';
import './App.css';
import Content from './components/Content';
import Login from './components/Login';

function App() {
  useEffect(() => {
    localStorage.CurrentHrefPae = '/painel'
  })
  function RenderComp(){
    if(localStorage.loginPae && localStorage.loginPae == 'true'){
        return (
          <>
            <LeftBar/>
            <Content/>
          </>
        )
    }
    else {
      return <Login/>; // Corrigido para retornar o componente Login
    }

  }


  return (
    <div className="App">
      <RenderComp/>
    </div>
  )
}

export default App;
