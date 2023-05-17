import './App.css';
import { useState,createContext } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { Home } from './Pages/Home';
import { Contact } from "./Pages/Contact";
import { Inc } from "./Pages/Inc";
import { ColorSub } from './Pages/ColorSub';
import { Movielist } from './Pages/Movielist';
import { Mylogin } from './Pages/Mylogin';
import { FormV } from './Pages/FormV';
import { Recordkeep } from './Pages/Recordkeep';
import { Apifetch } from './Pages/Apifetch';
import { ImgCarousel } from './Pages/ImgCarousel'
import { Searchq } from './Pages/Searchq';
import { Calculator } from './Pages/Calculator';
import { UseContextRef } from './Pages/UseContextRef';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Appstate =createContext();
function App() {


  const [data,setData] =useState({name:"Varun sharma ",Typehook:"usecontext",Typehook2:"useRef"})


  return (
    <div className="App">
      <Header />
      <Appstate.Provider value={data}>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Inc' element={<Inc />} />
          <Route path="/ColorSub" element={<ColorSub />} />
          <Route path="/Movielist" element={<Movielist />} />
          <Route path="/Mylogin" element={<Mylogin />} />
          <Route path='/FormV' element={<FormV />} />
          <Route path='/Recordkeep' element={<Recordkeep />} />
          <Route path='/Apifetch' element={<Apifetch />} />
        <Route path='/ImgCarousel' element={<ImgCarousel/>} />
        <Route path='/Searchq' element={<Searchq/>} />
        <Route path='/Calculator' element={<Calculator/>} />
        <Route path='/UseContextRef' element={<UseContextRef/>} />
        </Routes>
      </Router>
      </Appstate.Provider>

    </div>
  );
}
export {Appstate};
export default App;





