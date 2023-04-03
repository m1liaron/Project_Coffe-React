import React from 'react';
import './App.css';

import Home from './Pages/Coffee-House/Home';
import About from './Pages/For-your-pleasure/For-your-pleasure';
import OurCoffee from './Pages/Our-coffee/Coffee';
import CoffeeDetail from './Pages/CoffeeDetail/CoffeeDetails';
import NotFound from './Pages/NotFound/NotFound';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';


function App() {


  return (
    <BrowserRouter basename='/'>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/coffee" exact element={<OurCoffee/>}/>
          <Route path="/coffee/:id" element={<CoffeeDetail/>}/>
          <Route path="/not-found" element={<NotFound/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>  
    </BrowserRouter>
    
  );
}

export default App;
