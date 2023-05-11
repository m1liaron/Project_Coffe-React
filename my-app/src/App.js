import  { Suspense } from 'react';

import React from 'react';
import './App.css';

import Home from './Pages/Coffee-House/Home';
import About from './Pages/For-your-pleasure/For-your-pleasure';
import OurCoffee from './Pages/Our-coffee/Coffee';
import CoffeeDetail from './Pages/CoffeeDetail/CoffeeDetails';
import NotFound from './Pages/NotFound/NotFound';
import Spinner from './Components/Spinner/Spinner';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';


function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Project_Coffe-React" exact element={<Home/>}/>
          <Route 
             path="/about" element={
            <Suspense fallback={<Spinner />}><About/></Suspense>
        }/>
          <Route path="/coffee" exact element={<OurCoffee/>}/>
          <Route path="/coffee/:id" element={<CoffeeDetail/>}/>
          {/* <Route path="*" element={<NotFound/>} /> */}
        </Routes>
      </div>  
    </BrowserRouter>
    
  );
}

export default App;
