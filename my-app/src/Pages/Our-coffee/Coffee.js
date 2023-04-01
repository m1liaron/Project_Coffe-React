import React from 'react';
import './Coffee.scss';

import Nav from '../../Components/Nav/Nav';

import AboutCoffeeBens from '../../resources/images/coffee-beans-about.svg';

import ImgWoman from '../../resources/Our-Coffee-img/WomanWithCupOfCoffee.png';

import  CardList  from "../../Components/CardList/CardList";
import { data } from "../../resources/data/dataFilter";
import Footer from '../../Components/Footer/Fotter';

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
            <div className="flex-about">
              <div className="image_about">
                <img src={ImgWoman} alt="" />
              </div>
              <div className="about_coffee">
                  <h1 className='title-about-coffee'>About our beans</h1>
                  <div className="img_coffee">
                    <img src={AboutCoffeeBens} alt="" />
                  </div>
                    <p className='paragrapg-about'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                    <p className='paragrapg-about'>
                    Afraid at highly months do things on at. Situation recommend objection do intention so questions. 
                    As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. 
                    Children me laughing we prospect answered followed. At it went is song that held help face.
                    </p>
              </div>
            </div>
            <div className="line"></div>
        </div>
      </div>
      <div className="filter__coffee">
        <div className="cards-container">
          <div className="container-interaction">
            <div className="container-search">
              <h1 className='search-title'>Lookiing for</h1>
              <input className='input-search' type="text" 
              placeholder='start typing here...' />
            </div>
            <div className="container-btn-filter">
              <h1 className='filter-title'>Or filter</h1>
                    <button className='btn-filter'>Brazil</button>
                    <button className='btn-filter'>Kenya</button>
                    <button className='btn-filter'>Kolumbia</button>
            </div>
          </div>
          <div className="list-cards">
            <CardList data={data} /> 
          </div>
        </div>
      </div>
      <Footer/>
    </>


  );
}

export default Coffee;
