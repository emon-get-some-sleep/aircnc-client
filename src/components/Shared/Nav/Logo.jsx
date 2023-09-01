import React from 'react';
import logoImg from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom';
const Logo = () => {
    return <Link to="/"><img className='cursor-pointer hidden md:block' src={logoImg}  alt="logo" height="100" width="100" />
</Link>
}
export default Logo;