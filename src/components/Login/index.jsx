import { useState } from "react";
import { useEffect } from "react";
import BD from './BD.js'
import './style.css'
import log from './log.json';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    function writeEmail(event) {
        setEmail(event.target.value);
    }
    function writePass(event) {
        setPass(event.target.value);
    }
    
    function Validation() {
        BD.map((item) => {
            if (item.email == email && item.senha == password){
                localStorage.loginPae = 'true';
                let infolog = localStorage.infologPae? JSON.parse(localStorage.infologPae) : null;
    
                infolog && !infolog.find(l => l.email == email &&
                    l.date.getFullYear() == new Date().getFullYear() &&
                    l.date.getMonth() == new Date().getMonth() &&
                    l.date.getDate() == new Date().getDate() &&
                    l.date.getHours() == new Date().getHours() &&
                    l.date.getMinutes() == new Date().getMinutes())
                    ? infolog.push({email, date: new Date()})
                    : infolog = [{email, date: new Date()}];

                
                localStorage.infologPae = JSON.stringify(infolog);
            }
        })
        window.location.reload();  
    }

    function handleKeyDown(event) {
        if (event.keyCode === 13) {
            event.preventDefault(); // previne o comportamento padrão (submit do formulário)
            document.querySelector('#btnEntrar').click(); // dispara o evento click do botão de Entrar
            Validation();
        }
    }

    return (
        <div className="contentLogin">
            <div className="Loginlogo">
                <h1>PAE</h1>
                <p>Educação e Tecnologia</p>
        </div>

            <div className="Login">
                <input type="email" placeholder="Email" onChange={writeEmail} />
                <input type="password" placeholder="Senha" onChange={writePass} onKeyDown={handleKeyDown} />
                <div className="subinput">
                    <a href="#">Esqueci minha senha</a>
                    <button id="btnEntrar" onClick={Validation}>Entrar</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
