import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/Header';
import { AuthProvider, useAuthContext } from './contexts/Auth';
import Home from './pages/Home';
import Share from './pages/Share';
function App() {
  const authContext = useAuthContext();
  return (
    <main className="container m-auto">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/share"
            element={authContext?.auth ? <Share /> : <Navigate to="/" />}
          ></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </main>
  );
}

export default App;
