import React from 'react';
import './Coffee.scss';

import Footer from '../../Components/Footer/Fotter';
import Nav from '../../Components/Nav/Nav';

import ImgWoman from '../../resources/Our-Coffee-img/WomanWithCupOfCoffee.png';

function Coffee() {
  return (
    <>
      <div className="main">
        <div className="container-text">
          <div className="col">
            <div className="row">
                <Nav/>
                <h1 className='main-title'>Our Coffee</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container-content">
          <img src={ImgWoman} alt="" />
        </div>
      </div>
      <div className="filter__coffee"></div>
      {/* <Footer/> */}
    </>


  );
}

export default Coffee;
