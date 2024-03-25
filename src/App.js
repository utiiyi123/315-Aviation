import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import { Home } from './Pages/Home';
import { ContactUs } from './Pages/ContactUs';
import { About } from './Pages/About';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><Home/></Layout>}/>
          <Route path='/contact' element={<Layout><ContactUs/></Layout>}/>
          <Route path='/about' element={<Layout><About/></Layout>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
