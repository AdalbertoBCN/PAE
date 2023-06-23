import React from 'react';
import styles from './LeftBar.module.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../utils/hooks/useAuth';

function LeftBar() {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname ? styles.selected : '';
  };

  return (
    <>
      <nav className={styles.LeftBar}>
        <div className={styles.logo}>
          <Link to="/painel">
            <h1>PAE</h1>
          </Link>
          <h2>Educação e Tecnologia</h2>
          <p>
            "Se a educação sozinha não transforma a sociedade, sem ela, tampouco a sociedade muda." - Paulo Freire
          </p>
        </div>

        <div className={styles.navlinkgroup}>
          <Link to="/painel" className={`${styles.navlink} ${isActive('/painel')}`}>
            <i className="bi bi-grid-1x2-fill"></i>
            <span>Painel</span>
          </Link>

          <Link to="/aluno" className={`${styles.navlink} ${isActive('/aluno')}`}>
            <i className="bi bi-person-fill" style={{ transform: 'scale(1.3)' }}></i>
            <span>Aluno</span>
          </Link>

          <Link to="/disciplinas" className={`${styles.navlink} ${isActive('/disciplinas')}`}>
            <i className="bi bi-book-fill"></i>
            <span>Disciplinas</span>
          </Link>

          <Link to="/arquivos" className={`${styles.navlink} ${isActive('/arquivos')}`}>
            <i className="bi bi-folder-fill"></i>
            <span>Arquivos</span>
          </Link>

          <Link to="/calendario" className={`${styles.navlink} ${isActive('/calendario')}`}>
            <i className="bi bi-calendar-week-fill"></i>
            <span>Calendário</span>
          </Link>

          <Link to="/iftalks" className={`${styles.navlink} ${isActive('/iftalks')}`}>
            <i className="bi bi-chat-dots-fill" style={{ transform: 'scale(1.08)' }}></i>
            <span>IFTalks</span>
          </Link>
        </div>

        <div className={styles.logout} onClick={() => [signout(), navigate('/')]}>
          <i className="bi bi-box-arrow-in-right"></i>
          <span>Sair</span>
        </div>
      </nav>
    </>
  );
}

export default LeftBar;
