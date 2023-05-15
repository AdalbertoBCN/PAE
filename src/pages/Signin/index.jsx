import { useState } from "react";
import styles from "./Signin.module.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../utils/hooks/useAuth';

function Signin() {
  const {signin} = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [error,setError] = useState("");

  function writeEmail(value) {
    setEmail(value);
  }

  function writePass(value) {
    setPass(value);
  }

  function handleLogin(event) {
    event.preventDefault();

    if(!email | !password){
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email,password);

    if(res){
      setError(res);
      return;
    }

    navigate("/painel");
  }

  return (
    <div className={styles.contentLogin}>
      <div className={styles.login}>
        <h1 className={styles.logo}>PAE</h1>

        <form onSubmit={handleLogin}>
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

          <div className={`${styles.formgroup} ${styles.formcheck}`}>
            <input className={styles.formcheckinput} type="checkbox" id="check" />
            <label className={styles.formchecklabel} htmlFor="check">
              Lembrar de mim
            </label>
          </div>

          <input className={styles.btn} type="submit" value="Entrar" />

          <div className={styles.signup}>
            <label>Não tem uma conta?</label>
            <Link to="/registrar">Registre-se</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
