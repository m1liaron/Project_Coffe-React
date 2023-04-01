import React from 'react';
import './For-your-pleasure.scss';


import  CardList  from "../../Components/CardList/CardList";
import {data} from "../../resources/data/dataFilter";
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Fotter';

import AboutCoffeeBens from '../../resources/images/coffee-beans-about.svg';
import ImgCoffee from '../../resources/For-your-pleasure/Coffee.png';

function Pleasure() {
  return (
    <>   
        <div className="header">
        <div className="container-text">
          <div className="col">
            <div className="row">
                <Nav/>
                <h1 className='main-title'>For your pleasure</h1>
            </div>
          </div>
        </div>
        </div>
        <div className="about">
        <div className="container-content">
        <div className="flex-about">
              <div className="image_about">
                <img src={ImgCoffee} alt="" />
              </div>
              <div className="about_coffee">
                  <h1 className='title-about-coffee'>About our goods</h1>
                  <div className="img_coffee">
                    <img src={AboutCoffeeBens} alt="" />
                  </div>
                    <p className='paragrapg-about'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                    <p className='paragrapg-about'>
                    Afraid at highly months do things on at. Situation recommend objection do intention so questions.
                    As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it wentis song that held help face. 
                    </p>
              </div>
            </div>
            <div className="line"></div>
        </div>
        </div>
        <div className="cards-coffee">
        <div className="list-cards">
            <CardList data={data} /> 
          </div>
        </div>
        <Footer/>
    </>
  );
}

export default Pleasure;
