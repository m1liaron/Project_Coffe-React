import React, { useState, useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';

import './CoffeeDetails.scss'

import Nav from '../../Components/Nav/Nav';

import { data2 } from "../../resources/data2";

import AboutCoffeeBens from '../../resources/images/coffee-beans-about.svg';

import Coffee from '../../resources/images/products/CoffeeDetails/Mask Group.png';

import Footer from '../../Components/Footer/Fotter';

function CoffeeDetails() {
  
   const [item, setItem] = useState({});
   const { id } = useParams();
   const navigate = useNavigate();
 
   useEffect(() => {
     const fetchItem = async () => {
       const item = data2.find((coffee) => coffee.id === Number(id));
       setItem(item);
     };
 
     fetchItem();
   }, [id]);
 
   const handleBackButtonClick = () => {
     navigate(-1); // navigate back to the previous page
   }
 
   return (
     <>
       <div className="main">
         <div className="container-text">
           <div className="col">
             <div className="row">
               <Nav />
               <h1 className="main-title">Our Coffee</h1>
             </div>
           </div>
         </div>
       </div>
       <div className="about">
          <div className="container">
          <div className="btn">
          <button className='back-button' onClick={handleBackButtonClick}>❮ Back</button>
          </div>
          <div className="container-content">
            <div className="flex-about">
               <div className="image_coffe">
                  <img src={Coffee} alt="" />
               </div>
               <div className="about_coffee">
                  <div className='button-wrapper'>
                  </div>
                  <h1 className='title-about-coffee'>About it</h1>
                  <img src={AboutCoffeeBens} alt="" />
                    <p className='paragrapg-about'><span className='country_coffee'>Country: </span>{item.country}</p>
                    <p className='paragrapg-about description'><span className='description_coffee'>Description: </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sit, inventore exercitationem illo sint cupiditate harum repellendus laborum ipsum architecto enim iusto, quis ipsa commodi, tenetur in consequuntur. Maiores, nisi!
                    </p>
                    <p className='paragrapg-about price'><span className='price_coffee'>Price: </span>{item.price}$</p>
              </div>
            </div>
         </div>
          </div>
      </div>
      <Footer/>
     </>
   );
 }
 
 export default CoffeeDetails;
