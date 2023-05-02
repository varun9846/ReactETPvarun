import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { Home } from './Pages/Home';
import { Contact } from "./Pages/Contact";
import { Inc } from "./Pages/Inc";
import { ColorSub } from './Pages/ColorSub';
import { Movielist } from './Pages/Movielist';
import { Mylogin } from './Pages/Mylogin';
import { FormV } from './Pages/FormV';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Inc' element={<Inc />} />
          <Route path="/ColorSub" element={<ColorSub />} />
          <Route path="/Movielist" element={<Movielist/>} />
          <Route path="/Mylogin" element={<Mylogin/>} />
          <Route path='/FormV' element={<FormV/>} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
