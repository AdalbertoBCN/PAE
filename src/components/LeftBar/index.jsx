import { useEffect } from 'react';
import './style.css';
import {BsFillCalendar2WeekFill,BsFillBookFill,BsHouseFill,BsNewspaper,BsFillFileTextFill,BsPencilFill,BsDownload} from "react-icons/bs";
import {RiLogoutBoxFill} from "react-icons/ri";
import { useState } from 'react';
import { saveAs } from 'file-saver';

function clickLink(event){
    const newUrl = event.target.href;
    history.pushState(null, null, newUrl);
    localStorage.setItem('CurrentHrefPae',String( event.target.href).replace(/(.*)(\/\w+$)/,'$2'));
}

function Logout(){
    localStorage.loginPae = 'false';
    window.location.reload();
}

function downloadLog(){
    const jsonData = JSON.stringify(JSON.parse(localStorage.infologPae), null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    saveAs(blob, 'data.json');

}


function LeftBar() {
    return (
        <>
            <div className="container">
                <div className="logo">
                    <h1>PAE</h1>
                    <p>Educação e Tecnologia</p>
                    <p className='citacion'> "Se a educação sozinha não transforma a sociedade, sem ela, tampouco a sociedade muda." - Paulo Freire</p>
                </div>
                <div className="navigation">
                    <div onClick={clickLink}><a draggable="true"  href="/painel"><BsHouseFill/>Painel</a> <i><BsPencilFill/></i></div>
                    <a onClick={clickLink} draggable="true"  href="/diciplinas"><BsFillBookFill/>Diciplinas</a>
                    <a onClick={clickLink} draggable="true"  href="/eventos"><BsFillCalendar2WeekFill/>Próximos Eventos</a>
                    <a onClick={clickLink} draggable="true"  href="/avaliacoes"><BsFillFileTextFill/>Avaliações</a>
                    <a onClick={clickLink} draggable="true"  href="/noticias"><BsNewspaper/>Notícias</a>
                    <a onClick={downloadLog}><BsDownload/></a>

                    <div className='Logout'><RiLogoutBoxFill onClick={Logout}/></div>
                </div>
            </div>
        </>
    )
}

export default LeftBar
