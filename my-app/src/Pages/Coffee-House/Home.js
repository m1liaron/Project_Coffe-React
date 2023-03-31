import React from 'react';
import { Link } from 'react-router-dom';

import HeaderCoffeeBeans from '../../resources/images/Coffee-beans-main.svg';
import AboutCoffeeBens from '../../resources/images/coffee-beans-about.svg';

import Nav from '../../Components/Nav/Nav';
// import { Nav, CardList} from '../../Components';


import {data} from "../../resources/data";
import  CardList  from "../../Components/CardList/CardList";
import Footer from '../../Components/Footer/Fotter';

import './Home.css';
function Home() {
  return (

    <>   
        <main>
            <Nav />
            <div className="container">
              <div className="container_text">
              <h1 className='main-title'>Everything You Love About Coffee</h1>
              <div className="img_coffee">
                <img src={HeaderCoffeeBeans} alt="" className="" />
              </div>
              <h2 className='main-subtitle'>We makes every day full of energy and taste</h2>
              <h2 className='main-subtitle'>Want to try our beans?</h2>
              <Link to={'/coffee'}>
              <button className='main-btn'>More</button>
              </Link>
              </div>
             </div>
            
        </main>
        <div className="about">
          <div className="container-about">
            <div className="row">

              <h1 className="title-about">About us</h1>
              <div className="img_coffee">
                <img src={AboutCoffeeBens} alt="" />
              </div>

              <div className="container-content-about">
                  <p className='description-about'>
                  Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                  Afraid at highly months do things on at. Situation recommend objection do intention
                  so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                  met spot shy want. Children me laughing we prospect answered followed. At it went
                  is song that held help face.
                  </p>
                  <p className='description-about'>
                  Now residence dashwoods she excellent you. Shade being under his bed her, Much
                  read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                  horrible but confined day end marriage. Eagerness furniture set preserved far
                  recommend. Did even but nor are most gave hope. Secure active living depend son
                  repair day ladies now.
                  </p>
              </div>
            </div>
          </div>
        </div>
        <div className="recomended">
          <div className="container-recomended">
            <h2 className='title-recomended'>Our best</h2>
              <div className="container-card-recomended">
                  <CardList data={data} /> 
              </div>
          </div>
        </div>
            <Footer/>
    </>
  );
}

export default Home;
