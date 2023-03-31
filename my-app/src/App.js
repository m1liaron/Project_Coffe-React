import React from 'react';
import './App.css';
// import Nav from './Components/Nav/Nav';
import Home from './Pages/Coffee-House/Home';
import About from './Pages/For-your-pleasure/For-your-pleasure';
import OurCoffee from './Pages/Our-coffee/Coffee';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      {/* <Nav /> */}
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/coffee" exact element={<OurCoffee/>}/>
      </Routes>
      </div>
    </Router>
  );
}
export default App;
