import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import { Home } from './Pages/Home';
import { ContactUs } from './Pages/ContactUs';
import { About } from './Pages/About';
import { Buy } from './Components/Buy/Buy';
import { Sell } from './Components/Sell/Sell';
import { Inventory } from './Components/Inventory/Inventory';
import { FlightLogic } from './Components/FlightLogic/FlightLogic';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><Home/></Layout>}/>
          <Route path='/contact' element={<Layout><ContactUs/></Layout>}/>
          <Route path='/about' element={<Layout><About/></Layout>}/>
          <Route path='/buy' element={<Layout><Buy/></Layout>}/>
          <Route path='/sell' element={<Layout><Sell/></Layout>}/>
          <Route path='/inventory' element={<Layout><Inventory/></Layout>}/>
          <Route path='/flightlogic' element={<Layout><FlightLogic/></Layout>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
