import React from 'react';
import './Home.css';

import Nav from '../../Components/Nav/Nav';

function Home() {
    
  return (
    
    <div>   
        <main>
            <Nav />
            <div className="container"><h1>Everything You Love About Coffee</h1></div>
            
        </main>
        
        <div className="about"></div>
        <div className="footer"></div>
    </div>
  );
}

export default Home;
