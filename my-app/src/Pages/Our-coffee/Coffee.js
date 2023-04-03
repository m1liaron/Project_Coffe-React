import { Component } from 'react';

import React from 'react';
import './Coffee.scss';

import Nav from '../../Components/Nav/Nav';

import AboutCoffeeBens from '../../resources/images/coffee-beans-about.svg';

import ImgWoman from '../../resources/Our-Coffee-img/WomanWithCupOfCoffee.png';

import  CardList  from "../../Components/CardList/CardList";
import { data2 } from "../../resources/data2";
import Footer from '../../Components/Footer/Fotter';
import CardListFilter from '../../Components/CardListFilters/CardListFilters'

import Solimo_Coffee_Beans from '../../resources/images/products/71qBQnpQFYL.png';

import Search from '../../Components/Search/Search';


class Coffee extends Component{
  constructor(props) {
    super(props);
    this.state = {
        data:data2,
        filter: ' ',
        term: ''
    }
}

onUpdataSearch = (term) => {
  this.setState({term})
}

onFilterSelect = (filter) => {
  this.setState({filter});
  console.log(`This is ${filter}`);
}

filterPost = ( items,filter) => {
  switch (filter) {
    case 'Brazil':
      return items.filter(item => item.country === 'Brazil');

    case 'Kenya':
      return items.filter(item => item.country === 'Kenya');

      case 'Columbia':
        return items.filter(item => item.country === 'Columbia');
        default: 
            return items;
  }
}
 
  render(){
    const { data,filter,term } = this.state;
    const visibleData = this.filterPost(data, filter).filter(item =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    return (
      <>
        <div className="main">
          <div className="container-text">
            <div className="col">
              <div className="row">
                  <Nav />
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
            <Search onUpdataSearch={this.onUpdataSearch}/>
           <CardListFilter filter={filter}
                            onFilterSelect={this.onFilterSelect}/>

            </div>
            
            <div className="list-cards">
              <CardList data={visibleData}  term={term}
              /> 
            </div>
          </div>
        </div>
        <Footer/>
      </>
    );
  }
}

export default Coffee;
