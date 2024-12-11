import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './components/HomePage';
import Community from './components/Community';
import NewsFeed from './components/NewsFeed';
import PageNotFound from './components/PageNotFound';


function App() {
  return (
   <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Community' element={<Community />} />
        <Route path='/NewsFeed' element={<NewsFeed />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;