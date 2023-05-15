import React, { useState } from 'react'
import styles from './Signup.module.css';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../utils/hooks/useAuth';


const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const {signup} = useAuth();

  function writeEmail(value) {
    setEmail(value);
  }

  function writeEmailConf(value) {
    setEmailConf(value);
  }

  function writePass(value) {
    setPass(value);
  }

  const handleSignup = (event) =>{
    event.preventDefault();
    if(!email | !emailConf | !password){
      setError("Preencha todos os campos");
      return;
    }
    else if(email !== emailConf){
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email,password);

    if(res){
      setError(res);
      return;
    }
    alert("Sucesso");
    navigate("/");
  }


  return (
    <div className={styles.Signup}>
    <div className={styles.login}>
      <h1 className={styles.logo}>PAE</h1>

      <form onSubmit={handleSignup}>
        <div className={styles.formgroup}>
          <label className={styles.formlabel} htmlFor="email">
            Email
          </label>
          <input
            placeholder="Digite seu E-mail"
            className={styles.formcontrol}
            type="email"
            value={email}
            onChange={(e) => [writeEmail(e.target.value), setError("")]}
            id="email"
          />
        </div>

        <div className={styles.formgroup}>
          <label className={styles.formlabel} htmlFor="emailConf">
            Email
          </label>
          <input
            placeholder="Confirme seu E-mail"
            className={styles.formcontrol}
            type="email"
            value={emailConf}
            onChange={(e) => [writeEmailConf(e.target.value), setError("")]}
            id="emailConf"
          />
        </div>

        <div className={styles.formgroup}>
          <label className={styles.formlabel} htmlFor="password">
            Senha
          </label>
          <input
            className={styles.formcontrol}
            placeholder="Digite sua Senha"
            type="password"
            value={password}
            onChange={(e) => [writePass(e.target.value), setError("")]}
            id="password"
          />
        </div>

        <div className={styles.error}>
          <span>{error}</span>
        </div>

        <input className={styles.btn} type="submit" value="Registrar-se" />

        <div className={styles.signup}>
          <label>Já tem uma conta?</label>
          <Link to="/">Entrar</Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Signup