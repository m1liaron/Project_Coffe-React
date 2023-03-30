import './Nav.css';
import { Link } from 'react-router-dom';

import BeansHeader from '../../resources/images/coffee-beans-header.svg'

function Nav(){
    return (
        <nav className='container_navigator'>
            <ul className="nav-links">
                <div className="main-house">
                <Link style={{ textDecoration: 'none' }} to='/'>
                <img src={BeansHeader} alt="" />
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/'>
                <li className='item'>Coffee House</li>
                </Link>
                </div>
                <Link style={{ textDecoration: 'none' }} to='/coffee'>
                <li className='item'>Our coffee</li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/about'>
                <li className='item'>For your pleasure</li>
                </Link>
            </ul>
        </nav>
    )

}

export default Nav;