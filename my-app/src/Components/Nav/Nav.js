import './Nav.css';
import { Link } from 'react-router-dom';

import BeansHeader from '../../resources/images/coffee-beans-header.svg'

function Nav(){
    return (
        <nav className='container_navigator'>
        <img src={BeansHeader} alt="" />
            <ul className="nav-links">
                <Link style={{ textDecoration: 'none' }} to='/'>
                <li className='item'>Coffee House</li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/about'>
                <li className='item'>For your pleasure</li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/coffee'>
                <li className='item'>Our coffee</li>
                </Link>
            </ul>
        </nav>
    )

}

export default Nav;