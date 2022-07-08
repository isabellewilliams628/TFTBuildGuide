import './App.css';
import Card from './Card.js';
import TierList from './TierList.js'

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Card />} />
      <Route path="tierlist" element={<TierList />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
