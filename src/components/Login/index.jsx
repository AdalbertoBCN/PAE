import { useState } from "react";
import { useEffect } from "react";
import BD from './BD.js'
import './style.css'

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
            if (item.email == email && item.senha == password)
                localStorage.loginPae = 'true';
                window.location.reload();
        })
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
