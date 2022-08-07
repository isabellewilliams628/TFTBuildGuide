import './App.css';
import Home from './Home.js';
import Account from './Account.js'
import Builds  from './Builds';
import Items from './Items.js';
import Feedback from './Feedback.js';
import Registration from './Registration.js';
import Login from './login.js'
import Augments from './Augments';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="gradient__bg ">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="items" element={<Items />} />
      <Route path="builds" element={<Builds />} />
      <Route path="Augments" element={<Augments />} />
      <Route path="Feedback" element={<Feedback />} />
      <Route path="registration" element={<Registration />} />
      <Route path="login" element={<Login />}/>
      <Route path="account" element={<Account />} />
    </Routes>
    </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
