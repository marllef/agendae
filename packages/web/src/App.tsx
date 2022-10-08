import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/auth/AuthProvider';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
