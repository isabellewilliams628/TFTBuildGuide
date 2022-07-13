import './App.css';
import Card from './Card.js';
import TierList from './TierList.js'
import Account from './Account.js'
import Items from './Items.js'
import Registration from './Registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Card />} />
      <Route path="items" element={<Items />} />
      <Route path="tierlist" element={<TierList />} />
      <Route path="account" element={<Account />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
