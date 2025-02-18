import Kartka from './Kartka/Kartka.js';
import './Kartka/Kartka.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kartka />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
