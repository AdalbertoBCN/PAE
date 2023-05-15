import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AuthProvider } from './utils/contexts/auth';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ErrorPage from './pages/ErrorPage';
import Calendario from './pages/Calendario';
import Painel from './pages/Painel';
import Notas from './pages/Notas';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import useAuth from './utils/hooks/useAuth';
import App from './App';

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
      { path: '/notas', element: <Private Item={Notas} /> },
      { path: '/calendario', element: <Private Item={Calendario} /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
