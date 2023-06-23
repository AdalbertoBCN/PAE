import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AuthProvider } from './utils/contexts/auth';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ErrorPage from './pages/ErrorPage';
import Calendario from './pages/Calendario';
import Painel from './pages/Painel';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import useAuth from './utils/hooks/useAuth';
import App from './App';
import Disciplinas from './pages/Disciplinas';
import Arquivos from './pages/Arquivos';
import IFtalks from './pages/IFtalks';
import Aluno from './pages/Aluno';
import Notas from './pages/Notas';

const Private = ({ Item }) => {
  const { signed } = useAuth();
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    if (signed !== null) {
      setAuthLoaded(true);
    }
  }, [signed]);

  if (!authLoaded) {
    return null;
  }

  if (!signed) {
    return <Navigate to="/" />;
  }

  return <Item />;
};

const HasSigned = ({ Item }) => {
  const { signed } = useAuth();
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    if (signed !== null) {
      setAuthLoaded(true);
    }
  }, [signed]);

  if (!authLoaded) {
    return null;
  }

  if (signed) {
    return <Navigate to="/painel" />;
  }

  return <Item />;
};


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HasSigned Item={Signin}/> },
      { path: '/registrar', element: <HasSigned Item={Signup}/> },
      { path: '/painel', element: <Private Item={Painel} /> },
      { path: '/calendario', element: <Private Item={Calendario} /> },
      { path: '/disciplinas', element: <Private Item={Disciplinas} /> },
      { path: '/arquivos', element: <Private Item={Arquivos} /> },
      { path: '/iftalks', element: <Private Item={IFtalks} /> },
      { path: '/aluno', element: <Private Item={Aluno} /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
