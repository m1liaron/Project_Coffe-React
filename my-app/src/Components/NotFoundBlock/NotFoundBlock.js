import './NotFoundBlock.scss';
import Img from '../../resources/Not found/sad-dog-256-2x.gif'

import { Link } from 'react-router-dom';

const NotFoundBlock = () => {
  return (
    <>
      <Link className='link' to='/coffee'>Go back</Link>
        <img src={Img} alt="" />
        <h1 className='txt'>Page not found</h1>
    </>
  );
};

export default NotFoundBlock;