import './App.css';
import Home from './Home.js';
import TierList from './TierList.js'
import Account from './Account.js'
import Items from './Items.js'
import Registration from './Registration.js';
import Login from './login.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="items" element={<Items />} />
      <Route path="tierlist" element={<TierList />} />
      <Route path="registration" element={<Registration />} />
      <Route path="login" element={<Login />}/>
      <Route path="account" element={<Account />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
