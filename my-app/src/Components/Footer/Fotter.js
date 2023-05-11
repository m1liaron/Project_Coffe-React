import FooterCoffeeBeans from '../../resources/images/coffee-beans-about.svg';
import BeansHeader from '../../resources/images/coffee-beans-footer.svg'


import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <ul className="nav-links-footer">
                <div className="main-house-footer">
                  <div className="flex-footer">
                        <div className="logo_container">
                            <Link style={{ textDecoration: 'none' }} to='/Project_Coffe-React'>
                            <img src={BeansHeader} alt="" />
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to='/Project_Coffe-React'>
                            <li className='item'>Coffee House</li>
                            </Link>
                        </div>
                      </div>
                      <Link style={{ textDecoration: 'none' }} to='/coffee'>
                      <li className='item'>Our coffee</li>
                      </Link>
                      <Link style={{ textDecoration: 'none' }} to='/about'>
                      <li className='item'>For your pleasure</li>
                      </Link>
                  </div>
                <Link style={{ textDecoration: 'none' }} to='/'>
                <img src={FooterCoffeeBeans} alt="" />
                </Link>
            </ul>
        </div>
    );
};

export default Footer;