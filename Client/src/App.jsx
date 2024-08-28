import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './components/HomePage';

function App() {
  return (
   <>
    <Navbar/>
      <div>
    <Routes>        
      <Route path="/"  element={<HomePage/>} />
    </Routes>
    </div>
    </>
   
  );
}

export default App;