import LeftBar from './components/LeftBar';
import { Outlet,useLocation } from 'react-router-dom';
import useAuth from './utils/hooks/useAuth';

function App() {
  const location = useLocation();

  const {signed} = useAuth();

  const NoLeftBar = new Set(['/','/registrar']);

  return (
    <div className="App">
      {(!NoLeftBar.has(location.pathname) && signed) && <LeftBar />}
        <Outlet />
    </div>
  );
}

export default App;
