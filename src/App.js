import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Board from './components/Board';
import Follow from './components/Follow';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Board/>} />
          <Route path="/followers" element={<Follow/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
